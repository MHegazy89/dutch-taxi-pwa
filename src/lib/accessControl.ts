/**
 * Access Control & Free-Tier Gating System
 * 
 * Free users get ~5% of content across all modules.
 * Premium subscribers (managed via Google Play Billing) unlock everything.
 * 
 * Free tier limits:
 * - Flashcards: First 5 of 86 cards
 * - Practice Questions: First 3 questions per domain
 * - Sleepvragen: First 1 of 15+ questions
 * - Mock Exam: Disabled (shows preview with paywall)
 * - Communication Phrases: First 3 per ride phase
 * - Vocabulary/Compound Slicer: First 3 words
 * - Scenarios: First 1 scenario
 */

import { Capacitor } from '@capacitor/core';

const PREMIUM_STORAGE_KEY = 'cbr_taxi_premium_v1';

export interface AccessTier {
  isPremium: boolean;
  tier: 'free' | 'sprint' | 'complete' | 'vip';
  expiresAt: string | null; // ISO date or null for lifetime
}

/** Free-tier content limits */
export const FREE_LIMITS = {
  flashcards: 5,
  practiceQuestionsPerDomain: 3,
  sleepvragen: 1,
  mockExamEnabled: false,
  phrasesPerPhase: 3,
  compoundWords: 3,
  scenarios: 1,
  curriculumSections: 1,
} as const;

/** Unlock full access for internal manual testing / QA */
export function unlockTesterFullAccess(): void {
  activatePremium('complete', 52);
}

/** Check if user has active premium access */
export function getAccessTier(): AccessTier {
  if (typeof window === 'undefined') {
    return { isPremium: true, tier: 'complete', expiresAt: null };
  }

  // Auto-grant full unlimited access when running in native Android APK or when unlock flag is set
  const isCapacitorNative =
    process.env.NEXT_PUBLIC_UNLOCK_ALL === 'true' ||
    Capacitor.isNativePlatform() ||
    (typeof window !== 'undefined' && (window as any).Capacitor?.isNativePlatform?.()) ||
    (typeof window !== 'undefined' && (window as any).Capacitor?.getPlatform?.() === 'android') ||
    (typeof window !== 'undefined' && window.location.protocol === 'capacitor:') ||
    (typeof window !== 'undefined' && window.location.hostname === 'localhost') ||
    (typeof navigator !== 'undefined' && /Android|wv|Capacitor/i.test(navigator.userAgent));

  if (isCapacitorNative) {
    return { isPremium: true, tier: 'complete', expiresAt: null };
  }

  try {
    const raw = localStorage.getItem(PREMIUM_STORAGE_KEY);
    if (!raw) {
      return { isPremium: false, tier: 'free', expiresAt: null };
    }

    const stored: AccessTier = JSON.parse(raw);

    // Check expiry
    if (stored.expiresAt) {
      const now = new Date();
      const expiry = new Date(stored.expiresAt);
      if (now > expiry) {
        // Subscription expired — revert to free
        localStorage.removeItem(PREMIUM_STORAGE_KEY);
        return { isPremium: false, tier: 'free', expiresAt: null };
      }
    }

    return stored;
  } catch {
    return { isPremium: false, tier: 'free', expiresAt: null };
  }
}

/** Activate premium access (called after successful purchase verification) */
export function activatePremium(tier: 'sprint' | 'complete' | 'vip', durationWeeks: number): void {
  if (typeof window === 'undefined') return;

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + durationWeeks * 7);

  const access: AccessTier = {
    isPremium: true,
    tier,
    expiresAt: expiresAt.toISOString(),
  };

  localStorage.setItem(PREMIUM_STORAGE_KEY, JSON.stringify(access));
  window.dispatchEvent(new CustomEvent('taxi_access_changed', { detail: access }));
}

/** Gate an array of items to free-tier limit */
export function gateContent<T>(items: T[], freeLimit: number): { visible: T[]; locked: T[]; isGated: boolean } {
  const access = getAccessTier();

  if (access.isPremium) {
    return { visible: items, locked: [], isGated: false };
  }

  return {
    visible: items.slice(0, freeLimit),
    locked: items.slice(freeLimit),
    isGated: items.length > freeLimit,
  };
}

/** Check if a specific feature is available */
export function isFeatureUnlocked(feature: 'mockExam' | 'fullFlashcards' | 'allScenarios' | 'allPhrases'): boolean {
  const access = getAccessTier();

  if (access.isPremium) return true;

  switch (feature) {
    case 'mockExam':
      return false; // Always locked for free tier
    case 'fullFlashcards':
    case 'allScenarios':
    case 'allPhrases':
      return false;
    default:
      return false;
  }
}
