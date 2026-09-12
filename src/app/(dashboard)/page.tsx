'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProgressRing } from '@/components/ProgressRing';
import { fetchFlashcardsSafe, fetchQuestionsSafe } from '@/lib/db/init';
import { DomainType } from '@/types/db';
import { isDue } from '@/lib/srs';
import {
  getUserStats,
  getDomainMastery,
  UserStats
} from '@/lib/progressTracker';
import {
  Layers,
  HelpCircle,
  Trophy,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Zap,
  Languages,
  MessageSquare,
  CheckCircle2,
  Flame,
  Target
} from 'lucide-react';

export default function DashboardHome() {
  const [dueCardsCount, setDueCardsCount] = useState<number>(0);
  const [totalCards, setTotalCards] = useState<number>(86);
  const [totalQuestions, setTotalQuestions] = useState<number>(40);
  const [userStats, setUserStats] = useState<UserStats | null>(null);

  useEffect(() => {
    async function loadStats() {
      try {
        const cards = await fetchFlashcardsSafe();
        const due = cards.filter(isDue);
        setDueCardsCount(due.length);
        setTotalCards(cards.length);

        const qList = await fetchQuestionsSafe();
        setTotalQuestions(qList.length);

        const stats = getUserStats();
        setUserStats(stats);
      } catch (err) {
        console.warn('Stats loading error:', err);
      }
    }
    loadStats();

    const handleUpdate = (e: any) => {
      if (e.detail) {
        setUserStats(e.detail);
      }
    };
    window.addEventListener('taxi_progress_updated', handleUpdate);
    return () => window.removeEventListener('taxi_progress_updated', handleUpdate);
  }, []);

  const stats = userStats || getUserStats();

  const domains: { type: DomainType; label: string; color: string; desc: string }[] = [
    { type: 'gordelplicht', label: 'Gordelplicht & Veiligheid', color: 'text-blue-400', desc: 'Kinderzitjes & RVV 1990' },
    { type: 'bcdt', label: 'BCT & CDT Boordcomputer', color: 'text-purple-400', desc: 'Chauffeurskaart & inspecties' },
    { type: 'atbv', label: 'Arbeidstijd & Rust (ATBv)', color: 'text-orange-400', desc: 'Rijtijden, pauzes & nachtdienst' },
    { type: 'paman', label: 'PAMAN Ongevallenprotocol', color: 'text-red-400', desc: 'Veiligheid, 112 & eerste hulp' },
    { type: 'transport', label: 'Tarieven & BTM Ritbewijs', color: 'text-emerald-400', desc: 'Max tarief & pinverplichting' },
    { type: 'gedrag', label: 'Klantgerichtheid & Conflicten', color: 'text-amber-400', desc: 'De-escalatie & beroepshouding' },
    { type: 'casus', label: 'CBR Casus & Praktijk', color: 'text-cyan-400', desc: 'Realistische examensituaties' },
  ];

  // Overall accuracy
  const accuracy = stats.totalQuestionsAnswered > 0
    ? Math.round((stats.totalCorrectAnswers / stats.totalQuestionsAnswered) * 100)
    : 0;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Hero Banner with Glassmorphism */}
      <Card className="relative overflow-hidden p-6 sm:p-8 rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-orange-950/30 backdrop-blur-2xl shadow-2xl">
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold border border-orange-500/30">
              <Zap className="w-3.5 h-3.5" />
              <span>{dueCardsCount} Flitskaarten Klaar voor Herhaling</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">
              <Languages className="w-3.5 h-3.5" />
              <span>A0 English Scaffolding Active</span>
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              CBR Taxi Theorie &amp; Praktijk Tutor
            </h1>
            <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
              Versterk je juridisch Nederlands met A0-vertalingen, audio-uitspraak, 86 flitskaarten en interactieve CBR praktijksimulaties.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/flashcards">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 h-12 rounded-2xl shadow-lg shadow-orange-500/30">
                <Layers className="w-4 h-4 mr-2" />
                Flitskaarten Leren ({totalCards} kaarten)
              </Button>
            </Link>

            <Link href="/communicate">
              <Button variant="outline" className="border-white/20 bg-slate-900/50 hover:bg-slate-800 text-slate-100 font-bold h-12 rounded-2xl">
                <MessageSquare className="w-4 h-4 mr-2 text-orange-400" />
                CBR Praktijk Gesprek
              </Button>
            </Link>

            <Link href="/mock">
              <Button variant="ghost" className="hover:bg-slate-800/80 text-slate-200 font-semibold h-12 rounded-2xl">
                <Trophy className="w-4 h-4 mr-2 text-yellow-400" />
                Proefexamen (40V)
              </Button>
            </Link>
          </div>
        </div>

        {/* Subtle orange glow */}
        <div className="absolute -right-12 -bottom-12 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
      </Card>

      {/* Real Live Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-1">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span>Dagelijkse Streak</span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-white">
            {stats.streakDays} {stats.streakDays === 1 ? 'dag' : 'dagen'}
          </div>
          <span className="text-[10px] text-slate-400">Actief geleerd</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-1">
            <Target className="w-4 h-4 text-blue-400" />
            <span>Vragen Gemaakt</span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-white">
            {stats.totalQuestionsAnswered}
          </div>
          <span className="text-[10px] text-slate-400">{stats.totalCorrectAnswers} correct</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Nauwkeurigheid</span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-white">
            {accuracy}%
          </div>
          <span className="text-[10px] text-slate-400">Examen norm = 80%</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-1">
            <MessageSquare className="w-4 h-4 text-purple-400" />
            <span>Praktijk Scenarios</span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-white">
            {stats.completedScenariosCount}
          </div>
          <span className="text-[10px] text-slate-400">Simulaties voltooid</span>
        </div>
      </div>

      {/* Domain Mastery Rings (Dynamic Real Stats) */}
      <Card className="p-6 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl space-y-5 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-black text-white tracking-tight">
              Jouw Voortgang per CBR Kennisdomein
            </h2>
            <p className="text-xs text-slate-400">
              Live berekend op basis van gemaakte oefenvragen en flitskaarten.
            </p>
          </div>

          <Link href="/practice">
            <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300 text-xs font-bold">
              <span>Oefen per domein</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {domains.map((d) => {
            const mastery = getDomainMastery(d.type, stats);
            return (
              <div
                key={d.type}
                className="flex flex-col items-center text-center p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-orange-500/30 transition-all duration-200"
              >
                <div className="mb-2">
                  <ProgressRing progress={mastery} size={70} strokeWidth={6} />
                </div>
                <span className="font-bold text-xs text-slate-200 line-clamp-1">
                  {d.label}
                </span>
                <span className="text-[10px] text-slate-500 mt-0.5">
                  {d.desc}
                </span>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="/communicate" className="group">
          <Card className="p-5 rounded-3xl border border-white/10 bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-xl transition-all duration-200 hover:border-orange-500/40 space-y-3 h-full">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base group-hover:text-orange-400 transition-colors">
                Praktijk &amp; Gesprekken
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                60 zinnen in 6 ritfases + realistische CBR praktijkexamensimulatie met passagiers.
              </p>
            </div>
          </Card>
        </Link>

        <Link href="/vocabulary" className="group">
          <Card className="p-5 rounded-3xl border border-white/10 bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-xl transition-all duration-200 hover:border-orange-500/40 space-y-3 h-full">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base group-hover:text-orange-400 transition-colors">
                Compound Slicer
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Ontleed 55+ complexe juridische samengestelde woorden in tikbare woordwortels.
              </p>
            </div>
          </Card>
        </Link>

        <Link href="/mock" className="group">
          <Card className="p-5 rounded-3xl border border-white/10 bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-xl transition-all duration-200 hover:border-orange-500/40 space-y-3 h-full">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base group-hover:text-orange-400 transition-colors">
                20 Proefexamens
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Volledige CBR simulatie met 40 vragen, 60 minuten timer en casustoetsen.
              </p>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}
