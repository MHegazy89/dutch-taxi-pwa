'use client';

import React, { useState } from 'react';
import { getPracticeExams, getExamQuestions } from '@/lib/curriculum';
import { QuizMock } from '../components/QuizMock';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Play, Languages, ArrowLeft, Lock } from 'lucide-react';
import Link from 'next/link';
import { getAccessTier } from '@/lib/accessControl';
import { PaywallCard } from '@/components/PaywallCard';

export default function MockExamPage() {
  const [selectedExamId, setSelectedExamId] = useState<number | null>(null);
  const exams = getPracticeExams();
  const access = getAccessTier();

  const handleSelectExam = (id: number) => {
    if (!access.isPremium) return; // Prevent free users from starting
    setSelectedExamId(id);
  };

  const handleBackToExams = () => {
    setSelectedExamId(null);
  };

  if (selectedExamId !== null) {
    const questions = getExamQuestions(selectedExamId);
    return (
      <QuizMock
        questions={questions}
        examTitle={`CBR Oefenexamen ${selectedExamId}`}
        onRestart={() => setSelectedExamId(selectedExamId)}
      />
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in max-w-4xl mx-auto">
      {/* Top Header Bar with Safe Area Inset */}
      <div className="pt-2 flex items-center justify-between">
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white rounded-xl">
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            <span>Dashboard</span>
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b6687]/20 border border-[#0b6687]/40 text-xs font-bold text-sky-300">
          <Trophy className="w-4 h-4 text-[#ffb81c]" />
          <span>CBR Toetssysteem Examenbank (20 Examens)</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          20 Officiële CBR Proefexamens (TVT)
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
          Kies een getimed examen. De interface is een 1:1 kopie van de echte CBR examenzaal met de officiële toetssysteem lay-out.
        </p>
      </div>

      {/* Paywall Banner for Free Users */}
      {!access.isPremium && (
        <PaywallCard lockedCount={20} contentType="exam" />
      )}

      {/* 20 Practice Exams Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {exams.map((exam) => (
          <Card
            key={exam.id}
            className={`p-5 bg-slate-900/80 border-slate-800 backdrop-blur-xl transition-all flex flex-col justify-between space-y-4 rounded-2xl shadow-lg ${
              access.isPremium
                ? 'hover:border-[#0b6687]'
                : 'opacity-60 grayscale-[30%]'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white bg-[#0b6687] px-2.5 py-0.5 rounded-full shadow-sm">
                  CBR Examen #{exam.id}
                </span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                  <Languages className="w-3.5 h-3.5 text-sky-400" /> A0 Engels &amp; Arabisch
                </span>
              </div>
              <h2 className="text-base font-bold text-white">{exam.title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{exam.description}</p>
            </div>

            <div className="pt-3 flex items-center justify-between border-t border-slate-800/80 text-xs">
              <span className="text-slate-300 font-semibold">40 vragen · 60 min</span>
              {access.isPremium ? (
                <Button
                  size="sm"
                  onClick={() => handleSelectExam(exam.id)}
                  className="bg-[#0b6687] hover:bg-[#084c65] text-white font-bold h-9 px-4 rounded-xl shadow-md transition-all"
                >
                  <Play className="w-3.5 h-3.5 mr-1.5 fill-current" />
                  Start Examen
                </Button>
              ) : (
                <Link href="/upgrade">
                  <Button
                    size="sm"
                    className="bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold h-9 px-4 rounded-xl"
                  >
                    <Lock className="w-3.5 h-3.5 mr-1.5" />
                    Premium
                  </Button>
                </Link>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
