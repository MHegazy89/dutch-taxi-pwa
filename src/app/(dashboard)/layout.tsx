'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Layers, HelpCircle, BookOpen, Trophy, Flame, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Flitskaarten', href: '/flashcards', icon: Layers },
  { label: 'Oefenen', href: '/practice', icon: HelpCircle },
  { label: 'Woorden', href: '/vocabulary', icon: BookOpen },
  { label: 'Proefexamen', href: '/mock', icon: Trophy },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [streak, setStreak] = useState(3);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 pb-20 md:pb-0">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-600 to-orange-400 flex items-center justify-center font-black text-white text-sm shadow-md shadow-orange-500/30">
              TX
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-white text-sm sm:text-base">
                CBR Taxi Prep
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
                TVT Theorie
              </span>
            </div>
          </Link>

          {/* Daily Streak Counter */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-orange-400">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span>{streak} dagen streak</span>
          </div>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6">
        {children}
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-0 inset-x-0 z-50 bg-slate-950/90 backdrop-blur-lg border-t border-slate-800 safe-bottom">
        <div className="max-w-md mx-auto grid grid-cols-5 h-16">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors select-none',
                  isActive
                    ? 'text-orange-500 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                )}
              >
                <div
                  className={cn(
                    'p-1 rounded-full transition-all',
                    isActive ? 'bg-orange-500/15' : ''
                  )}
                >
                  <Icon className={cn('w-5 h-5', isActive ? 'text-orange-500' : 'text-slate-400')} />
                </div>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
