'use client';

import React, { useState, useEffect } from 'react';
import { PracticeQWithOptions, DomainType } from '@/types/db';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { DomainBadge } from '@/components/DomainBadge';
import { DOMAIN_LABELS } from '@/lib/utils';
import { Clock, AlertTriangle, CheckCircle2, XCircle, Trophy, RotateCcw, ArrowRight } from 'lucide-react';

export const CBR_EXAM_CONFIG = {
  totalQuestions: 40,
  timeLimitMinutes: 60,
  passScore: 32,
  caseStudies: 2,
  questionsPerCaseStudy: 5,
  regularQuestions: 30,
} as const;

interface QuizMockProps {
  questions: PracticeQWithOptions[];
  onRestart?: () => void;
}

export function QuizMock({ questions: initialQuestions, onRestart }: QuizMockProps) {
  const [questions, setQuestions] = useState<PracticeQWithOptions[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [selectedInCurrentQ, setSelectedInCurrentQ] = useState<number | null>(null);
  const [secondsRemaining, setSecondsRemaining] = useState(CBR_EXAM_CONFIG.timeLimitMinutes * 60);
  const [examFinished, setExamFinished] = useState(false);
  const [examStarted, setExamStarted] = useState(false);

  // Initialize and structure 40 questions (30 regular + 2 case studies × 5Q)
  useEffect(() => {
    if (initialQuestions.length === 0) return;

    // Separate case study questions from regular
    const casusQuestions = initialQuestions.filter((q) => q.domain === 'casus');
    const regularQuestions = initialQuestions.filter((q) => q.domain !== 'casus');

    const structuredList: PracticeQWithOptions[] = [];
    let regIdx = 0;
    let casusIdx = 0;

    for (let i = 0; i < CBR_EXAM_CONFIG.totalQuestions; i++) {
      // Injects Case 1 at Q16-20 (indices 15-19)
      if (i >= 15 && i < 20 && casusIdx < 5 && casusQuestions[casusIdx]) {
        structuredList.push(casusQuestions[casusIdx++]);
      }
      // Injects Case 2 at Q36-40 (indices 35-39)
      else if (i >= 35 && i < 40 && casusIdx < casusQuestions.length && casusQuestions[casusIdx]) {
        structuredList.push(casusQuestions[casusIdx++]);
      }
      // Regular questions
      else if (regIdx < regularQuestions.length) {
        structuredList.push(regularQuestions[regIdx++]);
      } else if (casusQuestions[casusIdx]) {
        structuredList.push(casusQuestions[casusIdx++]);
      } else if (regularQuestions.length > 0) {
        structuredList.push(regularQuestions[regIdx % regularQuestions.length]);
      }
    }

    setQuestions(structuredList.slice(0, CBR_EXAM_CONFIG.totalQuestions));
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

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const handleStartExam = () => {
    setExamStarted(true);
    setExamFinished(false);
    setCurrentIndex(0);
    setUserAnswers({});
    setSelectedInCurrentQ(null);
    setSecondsRemaining(CBR_EXAM_CONFIG.timeLimitMinutes * 60);
  };

  const handleSelectOption = (optIdx: number) => {
    setSelectedInCurrentQ(optIdx);
  };

  const handleConfirmAndNext = () => {
    if (selectedInCurrentQ === null) return;

    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: selectedInCurrentQ,
    }));

    setSelectedInCurrentQ(null);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setExamFinished(true);
    }
  };

  // Pre-exam instruction screen
  if (!examStarted) {
    return (
      <Card className="p-6 sm:p-8 bg-slate-900 border-slate-800 max-w-xl mx-auto space-y-6">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-orange-500/20 text-orange-400 mx-auto flex items-center justify-center border border-orange-500/30">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white">Officieel CBR Proefexamen (TVT)</h2>
          <p className="text-sm text-slate-400">
            Simulatie van het officiële CBR Taxi Vakbekwaamheid theorie-examen.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 p-4 bg-slate-950/70 rounded-xl border border-slate-800 text-sm">
          <div className="space-y-1">
            <span className="text-xs text-slate-400">Aantal vragen:</span>
            <p className="font-bold text-white">{CBR_EXAM_CONFIG.totalQuestions} vragen</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-slate-400">Tijdsduur:</span>
            <p className="font-bold text-white">{CBR_EXAM_CONFIG.timeLimitMinutes} minuten</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-slate-400">Slagingsgrens:</span>
            <p className="font-bold text-emerald-400">{CBR_EXAM_CONFIG.passScore} / 40 (80%)</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-slate-400">Casusvragen:</span>
            <p className="font-bold text-white">2 casussen (10 vragen)</p>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-amber-950/30 border border-amber-800/40 text-xs text-amber-300 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            Let op: Conform de CBR examenrichtlijn kun je na het bevestigen van een antwoord niet meer terug naar de vorige vraag.
          </span>
        </div>

        <Button
          onClick={handleStartExam}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 h-auto text-base shadow-lg shadow-orange-500/25"
        >
          Start CBR Proefexamen
        </Button>
      </Card>
    );
  }

  // Post-Mortem & Exam Result Screen
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
    const timeUsedSeconds = CBR_EXAM_CONFIG.timeLimitMinutes * 60 - secondsRemaining;

    return (
      <div className="space-y-6 max-w-2xl mx-auto animate-in fade-in">
        {/* Score Banner */}
        <Card
          className={`p-6 sm:p-8 text-center space-y-4 border-2 ${
            isPassed
              ? 'bg-emerald-950/40 border-emerald-500 shadow-2xl shadow-emerald-950/50'
              : 'bg-red-950/40 border-red-500 shadow-2xl shadow-red-950/50'
          }`}
        >
          <div
            className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center border-2 ${
              isPassed
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500'
                : 'bg-red-500/20 text-red-400 border-red-500'
            }`}
          >
            {isPassed ? <CheckCircle2 className="w-12 h-12" /> : <XCircle className="w-12 h-12" />}
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-400">
              Examenuitslag
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              {isPassed ? 'GESLAAGD! 🎉' : 'GEZAKT (Niet behaald)'}
            </h2>
            <p className="text-sm text-slate-300">
              Je behaalde <span className="font-extrabold text-xl text-white">{score}</span> van de 40 punten. (Minimaal {CBR_EXAM_CONFIG.passScore} vereist)
            </p>
          </div>

          <div className="flex justify-center gap-6 pt-2 text-xs text-slate-400 border-t border-slate-800">
            <span>Gebruikte tijd: <strong className="text-white">{formatTime(timeUsedSeconds)}</strong></span>
            <span>Score: <strong className="text-white">{Math.round((score / 40) * 100)}%</strong></span>
          </div>
        </Card>

        {/* Domain Breakdown Table */}
        <Card className="p-5 bg-slate-900 border-slate-800 space-y-4">
          <h3 className="font-bold text-white text-base">Resultaat per examenonderdeel</h3>
          <div className="space-y-3">
            {Object.entries(domainStats).map(([domainKey, stats]) => {
              const domain = domainKey as DomainType;
              const pct = Math.round((stats.correct / stats.total) * 100);
              return (
                <div key={domainKey} className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-200">
                      {DOMAIN_LABELS[domain] || domainKey}
                    </span>
                    <span className="text-slate-400">
                      {stats.correct} / {stats.total} ({pct}%)
                    </span>
                  </div>
                  <Progress
                    value={pct}
                    className="h-2"
                    indicatorClassName={pct >= 80 ? 'bg-emerald-500' : pct >= 60 ? 'bg-amber-500' : 'bg-red-500'}
                  />
                </div>
              );
            })}
          </div>
        </Card>

        {/* Review of Wrong Questions */}
        <Card className="p-5 bg-slate-900 border-slate-800 space-y-4">
          <h3 className="font-bold text-white text-base">Fout beantwoorde vragen & uitleg</h3>
          <div className="space-y-4">
            {questions.map((q, qIdx) => {
              const userAns = userAnswers[qIdx];
              const isCorrect = userAns !== undefined && q.options[userAns]?.is_correct;
              if (isCorrect) return null;

              const chosenOption = userAns !== undefined ? q.options[userAns] : null;
              const correctOption = q.options.find((o) => o.is_correct);

              return (
                <div key={q.id || qIdx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-orange-400">Vraag {qIdx + 1}</span>
                    <DomainBadge domain={q.domain} size="sm" />
                  </div>
                  <p className="text-slate-200 font-medium">{q.dutch_stem}</p>

                  <div className="space-y-1.5 pt-1">
                    {chosenOption && (
                      <div className="text-red-400 flex items-start gap-1.5">
                        <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>Jouw antwoord: {chosenOption.option_text}</span>
                      </div>
                    )}
                    {correctOption && (
                      <div className="text-emerald-400 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span className="font-semibold">Juist antwoord: {correctOption.option_text}</span>
                      </div>
                    )}
                  </div>

                  {q.explanation && (
                    <div className="p-2.5 rounded bg-slate-900 text-slate-300 text-[11px] leading-relaxed border border-slate-800">
                      <strong>CBR Motivering:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Card>

        <Button
          onClick={handleStartExam}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 h-auto"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Proefexamen Herkansen
        </Button>
      </div>
    );
  }

  // In-Exam Screen
  const currentQ = questions[currentIndex];
  const isUrgentTime = secondsRemaining <= 600; // Under 10 mins

  return (
    <div className="space-y-5 max-w-xl mx-auto">
      {/* Sticky Header with Exam Progress and Timer */}
      <div className="sticky top-0 z-30 bg-slate-950/95 backdrop-blur-md pb-2 pt-1 space-y-2 border-b border-slate-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Vraag {currentIndex + 1} / 40</span>
            <DomainBadge domain={currentQ.domain} size="sm" />
          </div>

          {/* 60-min Timer */}
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border transition-colors ${
              isUrgentTime
                ? 'bg-red-950/80 text-red-300 border-red-600 animate-pulse'
                : 'bg-slate-800 text-slate-200 border-slate-700'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{formatTime(secondsRemaining)}</span>
          </div>
        </div>
        <Progress value={((currentIndex + 1) / CBR_EXAM_CONFIG.totalQuestions) * 100} className="h-1.5" />
      </div>

      {/* Question Stem Card */}
      <Card className="p-5 sm:p-6 bg-slate-900 border-slate-800 space-y-3">
        <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
          {currentQ.dutch_stem}
        </h3>
      </Card>

      {/* Options List */}
      <div className="space-y-2.5">
        {currentQ.options.map((opt, idx) => {
          const isSelected = selectedInCurrentQ === idx;
          return (
            <button
              key={opt.id || idx}
              type="button"
              onClick={() => handleSelectOption(idx)}
              className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-start gap-3 ${
                isSelected
                  ? 'bg-orange-500/20 border-orange-500 text-white ring-1 ring-orange-500 shadow-md'
                  : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 text-slate-200'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border ${
                  isSelected
                    ? 'bg-orange-500 text-white border-orange-400'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="leading-snug">{opt.option_text}</span>
            </button>
          );
        })}
      </div>

      {/* Confirm & Next Button */}
      <div className="pt-3">
        <Button
          disabled={selectedInCurrentQ === null}
          onClick={handleConfirmAndNext}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-40 text-white font-bold py-3.5 h-auto text-base"
        >
          {currentIndex + 1 === CBR_EXAM_CONFIG.totalQuestions ? (
            'Examen Inleveren'
          ) : (
            <>
              Antwoord Bevestigen & Volgende <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
