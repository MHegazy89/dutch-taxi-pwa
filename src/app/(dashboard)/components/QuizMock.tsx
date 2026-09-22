'use client';

import React, { useState, useEffect } from 'react';
import { PracticeQWithOptions, DomainType } from '@/types/db';
import { DOMAIN_LABELS } from '@/lib/utils';
import { DomainBadge } from '@/components/DomainBadge';
import { recordMockExamResult } from '@/lib/progressTracker';
import {
  Clock,
  Flag,
  Grid,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Languages,
  Sparkles,
  AlertTriangle
} from 'lucide-react';

export const CBR_EXAM_CONFIG = {
  totalQuestions: 40,
  timeLimitMinutes: 60,
  passScore: 32,
} as const;

interface QuizMockProps {
  questions: PracticeQWithOptions[];
  examTitle?: string;
  onRestart?: () => void;
}

export function QuizMock({
  questions: initialQuestions,
  examTitle = 'CBR Taxi Theorie Examen (TVT)',
  onRestart,
}: QuizMockProps) {
  const [questions, setQuestions] = useState<PracticeQWithOptions[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [secondsRemaining, setSecondsRemaining] = useState(CBR_EXAM_CONFIG.timeLimitMinutes * 60);
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);

  // Modals & Scaffolding
  const [showOverviewModal, setShowOverviewModal] = useState(false);
  const [showExitConfirmModal, setShowExitConfirmModal] = useState(false);
  const [showA0Translation, setShowA0Translation] = useState(false);

  // Initialize and structure questions
  useEffect(() => {
    if (!initialQuestions || initialQuestions.length === 0) return;
    setQuestions(initialQuestions.slice(0, CBR_EXAM_CONFIG.totalQuestions));
  }, [initialQuestions]);

  // Exam Countdown Timer
  useEffect(() => {
    if (!examStarted || examFinished) return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setExamFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, examFinished]);

  const minutesRemaining = Math.ceil(secondsRemaining / 60);

  const handleStartExam = () => {
    setExamStarted(true);
    setExamFinished(false);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setSecondsRemaining(CBR_EXAM_CONFIG.timeLimitMinutes * 60);
    setShowA0Translation(false);
  };

  const handleSelectOption = (optIdx: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: optIdx,
    }));
  };

  const toggleFlagCurrent = () => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [currentIndex]: !prev[currentIndex],
    }));
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setShowA0Translation(false);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setShowA0Translation(false);
    } else {
      setShowExitConfirmModal(true);
    }
  };

  const handleSubmitExam = () => {
    setExamFinished(true);
    setShowExitConfirmModal(false);
    setShowOverviewModal(false);

    let score = 0;
    questions.forEach((q, idx) => {
      const uAns = userAnswers[idx];
      if (uAns !== undefined && q.options[uAns]?.is_correct) {
        score += 1;
      }
    });
    recordMockExamResult(score >= CBR_EXAM_CONFIG.passScore, score, CBR_EXAM_CONFIG.totalQuestions);
  };

  // -------------------------------------------------------------
  // SCREEN 1: PRE-EXAM WELCOME & INSTRUCTIONS
  // -------------------------------------------------------------
  if (!examStarted && !examFinished) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center p-4 sm:p-6">
        <div className="max-w-xl w-full bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
          {/* Official CBR Header Bar */}
          <div className="bg-[#0b6687] text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-black text-sm">
                CBR
              </div>
              <span className="font-bold text-base tracking-wide">
                Toetssysteem · {examTitle}
              </span>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#2b7ba8] text-white">
              Officieel Formaat
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Welkom bij het CBR Taxi Theorie-examen (TVT)
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dit proefexamen simuleert de exacte interface van de CBR examenzaal. Maak je vertrouwd met de knoppen, tijdsdruk en vraagtypen.
              </p>
            </div>

            {/* Exam Parameters */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#f0f1f3] border border-[#e0e2e6] text-center">
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase block">Aantal Vragen</span>
                <span className="text-xl font-black text-[#0b6687]">40</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase block">Examentijd</span>
                <span className="text-xl font-black text-[#0b6687]">60 min</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase block">Slagingsnorm</span>
                <span className="text-xl font-black text-emerald-600">32 / 40</span>
              </div>
            </div>

            {/* Candidate Rules */}
            <ul className="text-xs text-slate-700 space-y-2.5 leading-relaxed border-t border-slate-200 pt-4">
              <li className="flex items-start gap-2">
                <span className="text-[#0b6687] font-bold">✓</span>
                <span>Je kunt met <strong>VORIGE</strong> en <strong>VOLGENDE</strong> door de vragen bladeren.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0b6687] font-bold">✓</span>
                <span>Gebruik het vlaggetje (<strong>Markeren</strong>) om twijfelvragen later terug te kijken.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0b6687] font-bold">✓</span>
                <span>Via het raster (<strong>Overzicht</strong>) zie je in één oogopslag welke vragen nog openstaan.</span>
              </li>
            </ul>

            <button
              onClick={handleStartExam}
              className="w-full bg-[#0b6687] hover:bg-[#084c65] text-white font-bold py-4 rounded-xl text-base shadow-lg transition-all"
            >
              Start CBR Proefexamen ▶
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // SCREEN 2: POST-EXAM RESULTS SLIP
  // -------------------------------------------------------------
  if (examFinished) {
    let score = 0;
    const domainStats: Record<string, { total: number; correct: number }> = {};

    questions.forEach((q, idx) => {
      const userAns = userAnswers[idx];
      const isCorrect = userAns !== undefined && q.options[userAns]?.is_correct;
      if (isCorrect) score += 1;

      const domain = q.domain || 'transport';
      if (!domainStats[domain]) {
        domainStats[domain] = { total: 0, correct: 0 };
      }
      domainStats[domain].total += 1;
      if (isCorrect) domainStats[domain].correct += 1;
    });

    const isPassed = score >= CBR_EXAM_CONFIG.passScore;
    const percentage = Math.round((score / CBR_EXAM_CONFIG.totalQuestions) * 100);

    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col p-4 sm:p-6 pb-20">
        <div className="max-w-2xl w-full mx-auto space-y-6">
          {/* Result Card */}
          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            <div
              className={`p-6 sm:p-8 text-center text-white ${
                isPassed ? 'bg-emerald-700' : 'bg-red-700'
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-white/20 mx-auto flex items-center justify-center mb-3">
                {isPassed ? <CheckCircle2 className="w-10 h-10" /> : <XCircle className="w-10 h-10" />}
              </div>
              <span className="text-xs uppercase tracking-widest font-bold opacity-80 block">
                Officiële CBR Examenuitslag
              </span>
              <h1 className="text-3xl font-black mt-1">
                {isPassed ? 'GESLAAGD' : 'NIET BEHAALD (Gezakt)'}
              </h1>
              <p className="text-sm mt-2 opacity-90">
                Score: <strong>{score}</strong> van de 40 punten ({percentage}%) — Minimaal 32 vereist.
              </p>
            </div>

            {/* Breakdown by Domain */}
            <div className="p-6 space-y-4">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                Resultaten per CBR Kennisgebied:
              </h3>
              <div className="space-y-3 text-xs">
                {Object.entries(domainStats).map(([domKey, s]) => {
                  const pct = Math.round((s.correct / s.total) * 100);
                  const isDomPassed = pct >= 80;
                  return (
                    <div key={domKey} className="space-y-1">
                      <div className="flex justify-between font-semibold text-slate-700">
                        <span>{DOMAIN_LABELS[domKey as DomainType] || domKey}</span>
                        <span className={isDomPassed ? 'text-emerald-600' : 'text-red-600'}>
                          {s.correct} / {s.total} ({pct}%)
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            isDomPassed ? 'bg-emerald-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleStartExam}
                  className="flex-1 bg-[#0b6687] hover:bg-[#084c65] text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Proefexamen Opnieuw Doen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // SCREEN 3: AUTHENTIC 1:1 CBR TOETSSYSTEEM IN-EXAM INTERFACE
  // -------------------------------------------------------------
  const currentQ = questions[currentIndex] || initialQuestions[0];
  const selectedOptionIndex = userAnswers[currentIndex];
  const isCurrentFlagged = !!flaggedQuestions[currentIndex];
  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = ((currentIndex + 1) / CBR_EXAM_CONFIG.totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between select-none">
      {/* ----------------- TOP PETROL BLUE HEADER BAR ----------------- */}
      <header className="bg-[#0b6687] text-white relative shadow-md pt-[max(env(safe-area-inset-top,0px),8px)]">
        {/* Sky Blue Progress Line */}
        <div
          className="absolute top-0 left-0 h-1 bg-[#2b90d9] transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />

        <div className="max-w-6xl mx-auto px-3 sm:px-4 h-12 flex items-center justify-between">
          {/* Left: CBR Logo badge or empty space */}
          <div className="flex items-center gap-2">
            <span className="font-black text-xs sm:text-sm tracking-wider uppercase text-white/90">
              CBR
            </span>
            <span className="hidden sm:inline-block text-[11px] opacity-75 font-medium">
              | Taxi Theorie (TVT)
            </span>
          </div>

          {/* Center: RESTERENDE TIJD XX MINUTEN */}
          <div className="text-center font-medium text-xs sm:text-sm tracking-wide text-white">
            RESTERENDE TIJD <span className="font-bold text-sm sm:text-base">{minutesRemaining}</span> MINUTEN
          </div>

          {/* Right: Utility Square Icon Buttons [ Briefcase ] [ Flag ] [ Grid ] [ Exit ] */}
          <div className="flex items-center">
            {/* A0 Bilingual Hint Toggle */}
            <button
              onClick={() => setShowA0Translation(!showA0Translation)}
              className="w-10 h-10 flex items-center justify-center text-white/90 hover:bg-[#2b7ba8] transition-colors border-l border-white/20"
              title="A0 Vertaling / Scaffolding"
            >
              <Briefcase className="w-4 h-4" />
            </button>

            {/* Flag / Markeren Button */}
            <button
              onClick={toggleFlagCurrent}
              className={`w-10 h-10 flex items-center justify-center transition-colors border-l border-white/20 ${
                isCurrentFlagged
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'text-white/90 hover:bg-[#2b7ba8]'
              }`}
              title="Markeer deze vraag om later terug te kijken"
            >
              <Flag className={`w-4 h-4 ${isCurrentFlagged ? 'fill-slate-950' : ''}`} />
            </button>

            {/* 3x3 Grid (Vragenoverzicht) */}
            <button
              onClick={() => setShowOverviewModal(true)}
              className="w-10 h-10 flex items-center justify-center text-white/90 hover:bg-[#2b7ba8] transition-colors border-l border-white/20 relative"
              title="Vragenoverzicht (1-40)"
            >
              <Grid className="w-4 h-4" />
              {answeredCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-400" />
              )}
            </button>

            {/* Exit / Inleveren Door Button */}
            <button
              onClick={() => setShowExitConfirmModal(true)}
              className="w-10 h-10 flex items-center justify-center text-white/90 hover:bg-red-600 transition-colors border-l border-white/20"
              title="Examen inleveren en afronden"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* ----------------- MAIN STAGE: WHITE CANVAS WITH SCENARIO & SPEECH BUBBLE ----------------- */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 flex flex-col md:flex-row gap-6 items-start justify-center">
        {/* Left Column: Visual Scenario Picture */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="relative w-full rounded-2xl overflow-hidden border border-slate-300 bg-slate-100 shadow-sm aspect-[4/3] flex items-center justify-center">
            {/* Authentic Road / Situation Illustration placeholder */}
            <div className="w-full h-full bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#0b6687]/10 flex items-center justify-center text-[#0b6687] font-black text-2xl mb-3">
                🚕
              </div>
              <span className="font-bold text-sm text-slate-800">
                Verkeerssituatie &amp; Kruispunt
              </span>
              <span className="text-xs text-slate-500 mt-1 max-w-xs">
                Let op de verkeerslichten, voorrangsborden en de positie van de taxi.
              </span>
            </div>

            {/* Official CBR / LENS Watermark */}
            <div className="absolute bottom-2 right-3 text-[11px] font-bold text-slate-500 tracking-wider">
              © CBR
            </div>
          </div>

          {/* Bilingual Scaffold Box (When Briefcase clicked) */}
          {showA0Translation && currentQ?.english_breakdown && (
            <div className="mt-3 p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 space-y-1">
              <strong className="text-blue-800 block">🇬🇧 A0 English Translation:</strong>
              <p>{currentQ.english_breakdown}</p>
            </div>
          )}
        </div>

        {/* Right Column: Question Speech Bubble & Options */}
        <div className="w-full md:w-1/2 space-y-4">
          {/* Question Speech Bubble (Grey card with pointer) */}
          <div className="cbr-speech-bubble p-4 sm:p-5 text-sm sm:text-base font-normal text-slate-800 leading-relaxed shadow-sm">
            {currentQ?.dutch_stem}
          </div>

          {/* Option Boxes with Circular Radio 'O' */}
          <div className="space-y-3 pt-1">
            {currentQ?.options?.map((opt, idx) => {
              const isSelected = selectedOptionIndex === idx;

              return (
                <div
                  key={opt.id || idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-blue-50/80 border-[#0b6687] text-slate-900 ring-2 ring-[#0b6687]/30 shadow-sm'
                      : 'bg-[#f0f1f3] border-[#e0e2e6] hover:border-slate-400 text-slate-800'
                  }`}
                >
                  {/* Radio Icon Circle 'O' */}
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? 'border-[#0b6687] bg-white'
                        : 'border-slate-500 bg-white'
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0b6687]" />
                    )}
                  </div>

                  {/* Option Text */}
                  <div className="text-xs sm:text-sm font-normal leading-relaxed">
                    {opt.option_text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* ----------------- BOTTOM PETROL BLUE BAR (PREV / QUESTION # / NEXT) ----------------- */}
      <footer className="bg-[#0b6687] text-white shadow-lg pb-[max(env(safe-area-inset-bottom,0px),12px)]">
        {/* Subtle Metadata line */}
        <div className="max-w-6xl mx-auto px-4 pt-1 text-[10px] text-white/50 tracking-wider">
          id: {currentQ?.id || '3454'} — CBR Toetssysteem TVT
        </div>

        <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between">
          {/* Previous Button: < VORIGE */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 px-4 sm:px-6 py-2.5 rounded bg-[#2b7ba8] hover:bg-[#3888b8] disabled:opacity-35 disabled:hover:bg-[#2b7ba8] font-bold text-xs sm:text-sm uppercase tracking-wide transition-colors shadow-sm"
          >
            <ChevronLeft className="w-4 h-4 stroke-[3]" />
            <span>VORIGE</span>
          </button>

          {/* Center: VRAAG 6 VAN 40 */}
          <div className="text-center text-xs sm:text-sm uppercase tracking-wider font-medium text-white">
            VRAAG <span className="font-black text-sm sm:text-base">{currentIndex + 1}</span> VAN {CBR_EXAM_CONFIG.totalQuestions}
          </div>

          {/* Next Button: VOLGENDE > */}
          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 px-4 sm:px-6 py-2.5 rounded bg-[#2b7ba8] hover:bg-[#3888b8] font-bold text-xs sm:text-sm uppercase tracking-wide transition-colors shadow-sm"
          >
            <span>
              {currentIndex + 1 === CBR_EXAM_CONFIG.totalQuestions ? 'INLEVEREN' : 'VOLGENDE'}
            </span>
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </footer>

      {/* ----------------- MODAL: VRAGENOVERZICHT 1..40 GRID ----------------- */}
      {showOverviewModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200 animate-in fade-in">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-base text-slate-900">
                Vragenoverzicht (1–{CBR_EXAM_CONFIG.totalQuestions})
              </h3>
              <button
                onClick={() => setShowOverviewModal(false)}
                className="text-slate-400 hover:text-slate-700 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            {/* Color Legend */}
            <div className="flex items-center gap-4 text-[11px] text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-[#0b6687]" /> Beantwoord
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-400" /> Gemarkeerd
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-slate-200 border" /> Onbeantwoord
              </span>
            </div>

            {/* Grid 1..40 */}
            <div className="grid grid-cols-8 gap-2 py-2 max-h-64 overflow-y-auto">
              {questions.map((_, idx) => {
                const isAnswered = userAnswers[idx] !== undefined;
                const isFlagged = !!flaggedQuestions[idx];
                const isCurrent = idx === currentIndex;

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setShowOverviewModal(false);
                    }}
                    className={`h-9 rounded-lg text-xs font-bold transition-all relative ${
                      isCurrent
                        ? 'ring-2 ring-orange-500 font-black'
                        : ''
                    } ${
                      isFlagged
                        ? 'bg-amber-400 text-slate-950 font-black'
                        : isAnswered
                        ? 'bg-[#0b6687] text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setShowOverviewModal(false)}
              className="w-full bg-[#0b6687] text-white py-2.5 rounded-xl font-bold text-xs"
            >
              Sluiten
            </button>
          </div>
        </div>
      )}

      {/* ----------------- MODAL: INLEVEREN BEVESTIGEN ----------------- */}
      {showExitConfirmModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl space-y-4 border border-slate-200 text-center animate-in fade-in">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 mx-auto flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-lg text-slate-900">
                Examen Inleveren?
              </h3>
              <p className="text-xs text-slate-600">
                Je hebt {answeredCount} van de {CBR_EXAM_CONFIG.totalQuestions} vragen beantwoord. Weet je zeker dat je wilt afronden?
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowExitConfirmModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200"
              >
                Nog Niet
              </button>
              <button
                onClick={handleSubmitExam}
                className="flex-1 py-2.5 rounded-xl bg-[#0b6687] hover:bg-[#084c65] text-white font-bold text-xs shadow"
              >
                Ja, Inleveren
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
