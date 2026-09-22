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
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Capacitor } from '@capacitor/core';
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
  Target,
  Move,
  Sparkles,
  GraduationCap
} from 'lucide-react';

export default function DashboardHome() {
  const [dueCardsCount, setDueCardsCount] = useState<number>(0);
  const [totalCards, setTotalCards] = useState<number>(100);
  const [totalQuestions, setTotalQuestions] = useState<number>(50);
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [isNative, setIsNative] = useState<boolean>(true); // default true to avoid native flash
  const { t, language } = useLanguage();

  useEffect(() => {
    setIsNative(Capacitor.isNativePlatform());
  }, []);

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
    { type: 'gordelplicht', label: t.domainGordel, color: 'text-blue-400', desc: t.domainGordelDesc },
    { type: 'bcdt', label: t.domainBct, color: 'text-purple-400', desc: t.domainBctDesc },
    { type: 'atbv', label: t.domainAtbv, color: 'text-orange-400', desc: t.domainAtbvDesc },
    { type: 'paman', label: t.domainPaman, color: 'text-red-400', desc: t.domainPamanDesc },
    { type: 'transport', label: t.domainTransport, color: 'text-emerald-400', desc: t.domainTransportDesc },
    { type: 'gedrag', label: t.domainGedrag, color: 'text-amber-400', desc: t.domainGedragDesc },
    { type: 'casus', label: t.domainCasus, color: 'text-cyan-400', desc: t.domainCasusDesc },
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
              <span>{dueCardsCount} {t.statCardsDue}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">
              <Languages className="w-3.5 h-3.5" />
              <span>
                {language === 'ar' ? 'الدعم العربي A0 مفعّل' : language === 'en' ? 'A0 English Support Active' : 'A0 Ondersteuning Actief'}
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {t.heroTitle}
            </h1>
            <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
              {t.heroDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/curriculum">
              <Button className="bg-gradient-to-r from-sky-500 to-[#0b6687] hover:from-sky-600 hover:to-[#094c64] text-white font-bold px-6 h-12 rounded-2xl shadow-lg shadow-sky-500/20">
                <GraduationCap className="w-4 h-4 mr-2" />
                {t.navCurriculum} (10)
              </Button>
            </Link>

            <Link href="/flashcards">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 h-12 rounded-2xl shadow-lg shadow-orange-500/30">
                <Layers className="w-4 h-4 mr-2" />
                {t.startFlashcards} ({totalCards})
              </Button>
            </Link>

            <Link href="/communicate">
              <Button variant="outline" className="border-white/20 bg-slate-900/50 hover:bg-slate-800 text-slate-100 font-bold h-12 rounded-2xl">
                <MessageSquare className="w-4 h-4 mr-2 text-orange-400" />
                {t.startCommunicate}
              </Button>
            </Link>

            <Link href="/practice">
              <Button variant="outline" className="border-white/20 bg-slate-900/50 hover:bg-slate-800 text-slate-100 font-bold h-12 rounded-2xl">
                <Move className="w-4 h-4 mr-2 text-emerald-400" />
                {t.tabSleepvragen}
              </Button>
            </Link>

            <Link href="/mock">
              <Button variant="ghost" className="hover:bg-slate-800/80 text-slate-200 font-semibold h-12 rounded-2xl">
                <Trophy className="w-4 h-4 mr-2 text-yellow-400" />
                {t.startMockExam}
              </Button>
            </Link>

            {!isNative && (
              <a href="/TaxiMaster-TVT.apk" download="TaxiMaster-TVT.apk">
                <Button variant="outline" className="border-emerald-500/30 bg-emerald-950/30 hover:bg-emerald-900/50 text-emerald-300 font-bold h-12 rounded-2xl shadow-lg">
                  <span className="mr-2 text-base">📱</span>
                  Download Android APK (5.6 MB)
                </Button>
              </a>
            )}
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
            <span>{t.statStreak}</span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-white">
            {stats.streakDays} {t.streakDays}
          </div>
          <span className="text-[10px] text-slate-400">{t.statActivelyLearned}</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-1">
            <Target className="w-4 h-4 text-blue-400" />
            <span>{t.statQuestions}</span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-white">
            {stats.totalQuestionsAnswered}
          </div>
          <span className="text-[10px] text-slate-400">{stats.totalCorrectAnswers} {t.statCorrectLabel}</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{t.statAccuracy}</span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-white">
            {accuracy}%
          </div>
          <span className="text-[10px] text-slate-400">{t.statCbrNorm}</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-1">
            <MessageSquare className="w-4 h-4 text-purple-400" />
            <span>{t.statScenarios}</span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-white">
            {stats.completedScenariosCount}
          </div>
          <span className="text-[10px] text-slate-400">{t.statSimulationsComplete}</span>
        </div>
      </div>

      {/* Domain Mastery Rings (Dynamic Real Stats) */}
      <Card className="p-6 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl space-y-5 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-black text-white tracking-tight">
              {t.progressTitle}
            </h2>
            <p className="text-xs text-slate-400">
              {t.progressDesc}
            </p>
          </div>

          <Link href="/practice">
            <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300 text-xs font-bold">
              <span>{t.navPractice}</span>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/curriculum" className="group">
          <Card className="p-5 rounded-3xl border border-white/10 bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-xl transition-all duration-200 hover:border-sky-500/40 space-y-3 h-full">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base group-hover:text-sky-400 transition-colors">
                {t.navCurriculum} (Van A tot Z)
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {language === 'ar'
                  ? 'ملخص 10 فصول رسمية من كتاب الأساسيات مع أهم فخاخ الامتحان.'
                  : 'Alle 10 officiële CBR TVT-eindtermen samengevat met examentips.'}
              </p>
            </div>
          </Card>
        </Link>

        <Link href="/communicate" className="group">
          <Card className="p-5 rounded-3xl border border-white/10 bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-xl transition-all duration-200 hover:border-orange-500/40 space-y-3 h-full">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base group-hover:text-orange-400 transition-colors">
                {t.commTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {t.cardCommDesc}
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
                {t.vocabTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {t.cardVocabDesc}
              </p>
            </div>
          </Card>
        </Link>

        <Link href="/upgrade" className="group">
          <Card className="p-5 rounded-3xl border border-amber-500/20 bg-gradient-to-br from-slate-900/80 to-amber-950/20 hover:border-amber-500/50 backdrop-blur-xl transition-all duration-200 space-y-3 h-full">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base group-hover:text-amber-400 transition-colors">
                {t.pricingTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {t.cardPricingDesc}
              </p>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}
