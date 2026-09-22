'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  GraduationCap,
  Layers,
  HelpCircle,
  BookOpen,
  Trophy,
  Flame,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { getUserStats } from '@/lib/progressTracker';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [streak, setStreak] = useState(1);
  const { t, isRtl } = useLanguage();

  const isMockExamScreen = pathname === '/mock';

  useEffect(() => {
    // Initial load of real streak
    const stats = getUserStats();
    setStreak(stats.streakDays);

    // Subscribe to progress updates
    const handleUpdate = (e: any) => {
      if (e.detail?.streakDays) {
        setStreak(e.detail.streakDays);
      }
    };
    window.addEventListener('taxi_progress_updated', handleUpdate);
    return () => window.removeEventListener('taxi_progress_updated', handleUpdate);
  }, []);

  const NAV_ITEMS = [
    { label: t.navHome, href: '/', icon: Home },
    { label: t.navCurriculum, href: '/curriculum', icon: GraduationCap },
    { label: t.navFlashcards, href: '/flashcards', icon: Layers },
    { label: t.navVocab, href: '/vocabulary', icon: BookOpen },
    { label: t.navPractice, href: '/practice', icon: HelpCircle },
    { label: t.navExam, href: '/mock', icon: Trophy },
    { label: t.navCommunicate, href: '/communicate', icon: MessageSquare },
  ];

  // If in Mock Exam, render dedicated full-screen CBR Toetssysteem layout
  if (isMockExamScreen) {
    return (
      <div
        className={cn(
          'min-h-screen bg-slate-900 text-slate-100 flex flex-col',
          isRtl && 'font-arabic'
        )}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <main className="flex-1 w-full">{children}</main>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex flex-col min-h-screen bg-[#07090e] text-slate-100 pb-36 md:pb-12',
        isRtl && 'font-arabic'
      )}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Top Header with Safe Area Inset */}
      <header className="sticky top-0 z-40 bg-[#07090e]/90 backdrop-blur-xl border-b border-white/10 px-3 sm:px-4 py-2.5 shadow-lg pt-[max(env(safe-area-inset-top,0px),10px)]">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#0b6687] via-[#0082d5] to-[#ffb81c] p-[1.5px] shadow-lg shadow-[#0b6687]/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0b0d13] rounded-[14px] flex items-center justify-center font-black text-white text-xs tracking-wider">
                <span className="text-[#ffb81c]">TX</span>
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-950 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black tracking-tight text-white text-sm sm:text-base">
                  {t.appTitle}
                </span>
                <span className="hidden sm:inline-block text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#0b6687]/30 text-sky-300 border border-[#0b6687]/50">
                  CBR TVT
                </span>
              </div>
            </div>
          </Link>

          {/* Controls: Language Switcher, Daily Streak, Upgrade Pass */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            {/* Streak Counter */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-bold text-amber-400 shadow-md">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
              <span>
                {streak} {t.streakDays}
              </span>
            </div>

            {/* Premium Upgrade Button */}
            <Link href="/upgrade">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-xs shadow-md shadow-orange-500/20 transition-all hover:scale-105">
                <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                <span className="hidden sm:inline">{t.navUpgrade}</span>
                <span className="sm:hidden">PRO</span>
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Page Content with proper padding */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6">
        {children}
      </main>

      {/* Floating Bottom Navigation Bar with Safe Area Inset */}
      <nav className="fixed inset-x-0 z-50 px-3 pointer-events-none bottom-[max(env(safe-area-inset-bottom,0px),16px)]">
        <div className="max-w-xl mx-auto bg-slate-950/90 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl p-1 pointer-events-auto">
          <div className="grid grid-cols-7 h-14">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-all select-none rounded-2xl relative',
                    isActive
                      ? 'text-[#ffb81c] font-bold bg-[#0b6687]/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  )}
                >
                  <Icon
                    className={cn(
                      'w-5 h-5 transition-transform',
                      isActive && 'scale-110 text-[#ffb81c]'
                    )}
                  />
                  <span className="truncate max-w-[50px] leading-tight">{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-0.5 w-4 h-1 rounded-full bg-[#ffb81c] shadow-sm shadow-amber-500/50" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
