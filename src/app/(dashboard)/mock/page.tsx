'use client';

import React, { useState } from 'react';
import { getPracticeExams, getExamQuestions, PracticeExam } from '@/lib/curriculum';
import { QuizMock } from '../components/QuizMock';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, CheckCircle2, Play, Sparkles, Languages, ArrowLeft } from 'lucide-react';

export default function MockExamPage() {
  const [selectedExamId, setSelectedExamId] = useState<number | null>(null);
  const exams = getPracticeExams();

  const handleSelectExam = (id: number) => {
    setSelectedExamId(id);
  };

  const handleBackToExams = () => {
    setSelectedExamId(null);
  };

  if (selectedExamId !== null) {
    const questions = getExamQuestions(selectedExamId);
    return (
      <div className="space-y-6">
        <button
          type="button"
          onClick={handleBackToExams}
          className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Terug naar alle 20 oefenexamens
        </button>

        <QuizMock
          questions={questions}
          examTitle={`CBR Oefenexamen ${selectedExamId}`}
          onRestart={() => setSelectedExamId(selectedExamId)}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400">
          <Trophy className="w-4 h-4 text-yellow-400" />
          <span>CBR Examenbank (20 Examens)</span>
        </div>
        <h1 className="text-2xl font-bold text-white">20 Volledige CBR Proefexamens (TVT)</h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Kies uit 20 getimede proefexamens (40 vragen per examen, 60 minuten, incl. casussen &amp; A0-Engelse vertaling).
        </p>
      </div>

      {/* 20 Practice Exams Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {exams.map((exam) => (
          <Card
            key={exam.id}
            className="p-4 bg-slate-900/90 border-slate-800 hover:border-orange-500/60 transition-all flex flex-col justify-between space-y-3"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-orange-400 bg-orange-500/15 px-2.5 py-0.5 rounded-full border border-orange-500/30">
                  Examen #{exam.id}
                </span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Languages className="w-3.5 h-3.5 text-blue-400" /> A0 English
                </span>
              </div>
              <h2 className="text-base font-bold text-white">{exam.title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{exam.description}</p>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-800/80 text-xs">
              <span className="text-slate-400 font-medium">40 vragen · 60 min</span>
              <Button
                size="sm"
                onClick={() => handleSelectExam(exam.id)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-8 px-4"
              >
                <Play className="w-3 h-3 mr-1.5 fill-current" />
                Start Examen
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
