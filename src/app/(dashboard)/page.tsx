'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProgressRing } from '@/components/ProgressRing';
import { DomainBadge } from '@/components/DomainBadge';
import { getDb } from '@/lib/db/init';
import { Flashcard, DomainType } from '@/types/db';
import { isDue } from '@/lib/srs';
import {
  Layers,
  HelpCircle,
  Trophy,
  BookOpen,
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export default function DashboardHome() {
  const [dueCardsCount, setDueCardsCount] = useState<number>(0);
  const [totalCards, setTotalCards] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(40);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const db = await getDb();
        const cards: Flashcard[] = db.query('SELECT * FROM flashcard');
        const due = cards.filter(isDue);
        setDueCardsCount(due.length);
        setTotalCards(cards.length);

        const qCount = db.query('SELECT COUNT(*) as count FROM practice_q');
        if (qCount && qCount[0]) {
          setTotalQuestions(qCount[0].count);
        }
      } catch (err) {
        console.warn('DB initialization pending:', err);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, []);

  const domains: { type: DomainType; progress: number; label: string; color: string }[] = [
    { type: 'gordelplicht', progress: 85, label: 'Gordelplicht', color: 'text-blue-500' },
    { type: 'bcdt', progress: 70, label: 'BCT & CDT', color: 'text-purple-500' },
    { type: 'atbv', progress: 60, label: 'Arbeidstijd (ATBv)', color: 'text-orange-500' },
    { type: 'paman', progress: 90, label: 'PAMAN Ongeval', color: 'text-red-500' },
    { type: 'transport', progress: 75, label: 'Vervoer & Tarief', color: 'text-emerald-500' },
    { type: 'gedrag', progress: 80, label: 'Klant & Gedrag', color: 'text-amber-500' },
    { type: 'casus', progress: 65, label: 'Casus Praktijk', color: 'text-slate-400' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Hero Banner: Spaced Repetition Call to Action */}
      <Card className="relative overflow-hidden p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/40 border-orange-500/30">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold border border-orange-500/30">
            <Zap className="w-3.5 h-3.5" />
            <span>Vandaag klaar om te leren</span>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              CBR Taxi Theorie Trainer
            </h1>
            <p className="text-slate-300 text-sm max-w-lg leading-relaxed">
              Versterk je juridisch Nederlands (A0 support) en slaag voor het Taxi Vakbekwaamheid theorie-examen (TVT).
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/flashcards">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 shadow-lg shadow-orange-500/30">
                <Layers className="w-4 h-4 mr-2" />
                Herhaal Flitskaarten ({dueCardsCount} klaar)
              </Button>
            </Link>

            <Link href="/mock">
              <Button variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-100 font-semibold">
                <Trophy className="w-4 h-4 mr-2 text-yellow-400" />
                Start Proefexamen (40V)
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      </Card>

      {/* Quick Action Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Module: Oefenvragen met Scaffolded A0 */}
        <Link href="/practice" className="block group">
          <Card className="p-5 bg-slate-900/90 border-slate-800 hover:border-orange-500/50 transition-all duration-200 group-hover:scale-[1.01]">
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center border border-blue-500/20">
                <HelpCircle className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
            </div>
            <h2 className="mt-4 font-bold text-base text-white">Oefenen per Domein</h2>
            <p className="mt-1 text-xs text-slate-400">
              Scaffolded vragen met zinsontleder en Engelse vertaalhulp.
            </p>
          </Card>
        </Link>

        {/* Module: Woordontleder & Lexicon */}
        <Link href="/vocabulary" className="block group">
          <Card className="p-5 bg-slate-900/90 border-slate-800 hover:border-orange-500/50 transition-all duration-200 group-hover:scale-[1.01]">
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
            </div>
            <h2 className="mt-4 font-bold text-base text-white">Woordenboek & Compound Slicer</h2>
            <p className="mt-1 text-xs text-slate-400">
              Ontleed samengestelde juridische woorden (bijv. Arbeidstijdenbesluit).
            </p>
          </Card>
        </Link>
      </div>

      {/* Domain Mastery Section with 7 SVG Progress Rings */}
      <Card className="p-5 sm:p-6 bg-slate-900/90 border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold text-white text-base">Domeinbeheersing (7 Examenonderdelen)</h2>
            <p className="text-xs text-slate-400">Jouw voorbereidingsstatus per CBR onderwerp</p>
          </div>
          <span className="text-xs font-semibold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20">
            Gem. 75%
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 pt-2">
          {domains.map((d) => (
            <div
              key={d.type}
              className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-950/60 border border-slate-800/80"
            >
              <ProgressRing
                progress={d.progress}
                size={58}
                strokeWidth={5}
                colorClass={d.color}
              />
              <span className="mt-2 text-xs font-medium text-slate-200 line-clamp-1">{d.label}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* CBR Exam Rules Checklist */}
      <Card className="p-5 bg-slate-900/70 border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>CBR Taxi Examen Formule</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300">
          <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800">
            <span className="text-slate-500 block">Totaal:</span>
            <strong className="text-white">40 Vragen</strong>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800">
            <span className="text-slate-500 block">Tijd:</span>
            <strong className="text-white">60 Minuten</strong>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800">
            <span className="text-slate-500 block">Slagen:</span>
            <strong className="text-emerald-400">Min. 32 Goed (80%)</strong>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800">
            <span className="text-slate-500 block">Casussen:</span>
            <strong className="text-white">2 Casussen × 5V</strong>
          </div>
        </div>
      </Card>
    </div>
  );
}
