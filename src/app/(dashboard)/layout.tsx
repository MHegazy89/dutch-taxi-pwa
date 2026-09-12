'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Layers,
  HelpCircle,
  BookOpen,
  Trophy,
  Flame,
  MessageSquare
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { getUserStats } from '@/lib/progressTracker';

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Flitskaarten', href: '/flashcards', icon: Layers },
  { label: 'Gesprek', href: '/communicate', icon: MessageSquare },
  { label: 'Oefenen', href: '/practice', icon: HelpCircle },
  { label: 'Woorden', href: '/vocabulary', icon: BookOpen },
  { label: 'Examen', href: '/mock', icon: Trophy },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [streak, setStreak] = useState(1);

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

  return (
    <div className="flex flex-col min-h-screen bg-[#07090e] text-slate-100 pb-24 md:pb-8">
      {/* Sleek Glass Top Header */}
      <header className="sticky top-0 z-40 bg-[#07090e]/80 backdrop-blur-xl border-b border-white/10 px-4 py-3 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-400 flex items-center justify-center font-black text-white text-sm shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform">
              TX
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black tracking-tight text-white text-base">
                  CBR Taxi Prep
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  TVT A0 Tutor
                </span>
              </div>
            </div>
          </Link>

          {/* Real Dynamic Daily Streak Counter */}
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-bold text-orange-400 shadow-md">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
            <span>{streak} {streak === 1 ? 'dag' : 'dagen'} streak</span>
          </div>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6">
        {children}
      </main>

      {/* Floating Glass Bottom Navigation Bar */}
      <nav className="fixed bottom-3 inset-x-0 z-50 px-3 pointer-events-none">
        <div className="max-w-lg mx-auto bg-slate-950/85 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl p-1 pointer-events-auto">
          <div className="grid grid-cols-6 h-14">
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
                      ? 'text-orange-400 font-bold bg-orange-500/15 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  )}
                >
                  <Icon className={cn('w-5 h-5 transition-transform', isActive && 'scale-110 text-orange-400')} />
                  <span className="truncate max-w-[50px] leading-tight">{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-0.5 w-4 h-1 rounded-full bg-orange-500 shadow-sm shadow-orange-500/50" />
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
