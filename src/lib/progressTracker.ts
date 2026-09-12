/**
 * Progress & Daily Streak Tracking System
 * Persists user activities, calculates accurate streaks and real domain mastery.
 */

import { DomainType } from '@/types/db';

export interface UserStats {
  streakDays: number;
  lastActiveDate: string | null; // YYYY-MM-DD
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  totalFlashcardsReviewed: number;
  completedScenariosCount: number;
  mockExamsPassed: number;
  domainStats: Record<DomainType, { attempted: number; correct: number }>;
  activityHistory: string[]; // List of YYYY-MM-DD active days
}

const STORAGE_KEY = 'cbr_taxi_user_progress_v2';

const INITIAL_DOMAIN_STATS: Record<DomainType, { attempted: number; correct: number }> = {
  gordelplicht: { attempted: 0, correct: 0 },
  bcdt: { attempted: 0, correct: 0 },
  atbv: { attempted: 0, correct: 0 },
  paman: { attempted: 0, correct: 0 },
  transport: { attempted: 0, correct: 0 },
  gedrag: { attempted: 0, correct: 0 },
  casus: { attempted: 0, correct: 0 },
};

function getTodayString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getYesterdayString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function getUserStats(): UserStats {
  if (typeof window === 'undefined') {
    return {
      streakDays: 1,
      lastActiveDate: getTodayString(),
      totalQuestionsAnswered: 0,
      totalCorrectAnswers: 0,
      totalFlashcardsReviewed: 0,
      completedScenariosCount: 0,
      mockExamsPassed: 0,
      domainStats: { ...INITIAL_DOMAIN_STATS },
      activityHistory: [getTodayString()],
    };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const fresh: UserStats = {
        streakDays: 1,
        lastActiveDate: getTodayString(),
        totalQuestionsAnswered: 0,
        totalCorrectAnswers: 0,
        totalFlashcardsReviewed: 0,
        completedScenariosCount: 0,
        mockExamsPassed: 0,
        domainStats: { ...INITIAL_DOMAIN_STATS },
        activityHistory: [getTodayString()],
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
      return fresh;
    }
    const parsed: UserStats = JSON.parse(raw);
    return parsed;
  } catch (e) {
    console.warn('Failed to parse user stats:', e);
    return {
      streakDays: 1,
      lastActiveDate: getTodayString(),
      totalQuestionsAnswered: 0,
      totalCorrectAnswers: 0,
      totalFlashcardsReviewed: 0,
      completedScenariosCount: 0,
      mockExamsPassed: 0,
      domainStats: { ...INITIAL_DOMAIN_STATS },
      activityHistory: [getTodayString()],
    };
  }
}

function saveUserStats(stats: UserStats) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    window.dispatchEvent(new CustomEvent('taxi_progress_updated', { detail: stats }));
  } catch (e) {
    console.error('Failed to save user stats:', e);
  }
}

function touchStreak(stats: UserStats): UserStats {
  const today = getTodayString();
  const yesterday = getYesterdayString();

  if (stats.lastActiveDate === today) {
    return stats;
  }

  if (stats.lastActiveDate === yesterday) {
    stats.streakDays += 1;
  } else if (!stats.lastActiveDate) {
    stats.streakDays = 1;
  } else {
    stats.streakDays = 1;
  }

  stats.lastActiveDate = today;
  if (!stats.activityHistory.includes(today)) {
    stats.activityHistory.push(today);
  }

  return stats;
}

export function recordQuestionAnswer(domain: DomainType, isCorrect: boolean): UserStats {
  const stats = touchStreak(getUserStats());
  stats.totalQuestionsAnswered += 1;
  if (isCorrect) stats.totalCorrectAnswers += 1;

  if (!stats.domainStats[domain]) {
    stats.domainStats[domain] = { attempted: 0, correct: 0 };
  }
  stats.domainStats[domain].attempted += 1;
  if (isCorrect) stats.domainStats[domain].correct += 1;

  saveUserStats(stats);
  return stats;
}

export function recordFlashcardReview(): UserStats {
  const stats = touchStreak(getUserStats());
  stats.totalFlashcardsReviewed += 1;
  saveUserStats(stats);
  return stats;
}

export function recordScenarioCompleted(): UserStats {
  const stats = touchStreak(getUserStats());
  stats.completedScenariosCount += 1;
  saveUserStats(stats);
  return stats;
}

export function recordMockExamResult(passed: boolean, score: number, total: number): UserStats {
  const stats = touchStreak(getUserStats());
  if (passed) stats.mockExamsPassed += 1;
  stats.totalQuestionsAnswered += total;
  stats.totalCorrectAnswers += score;
  saveUserStats(stats);
  return stats;
}

export function getDomainMastery(domain: DomainType, stats?: UserStats): number {
  const current = stats || getUserStats();
  const d = current.domainStats[domain];
  if (!d || d.attempted === 0) {
    return 0;
  }
  return Math.min(100, Math.round((d.correct / d.attempted) * 100));
}
