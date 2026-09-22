'use client';

import React, { useState } from 'react';
import { PracticeQWithOptions } from '@/types/db';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DomainBadge } from '@/components/DomainBadge';
import { SentenceDeconstructor } from './SentenceDeconstructor';
import { Progress } from '@/components/ui/progress';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Languages,
  RefreshCw,
  Lightbulb
} from 'lucide-react';
import { recordQuestionAnswer } from '@/lib/progressTracker';

interface QuizScaffoldedProps {
  questions: PracticeQWithOptions[];
}

export function QuizScaffolded({ questions }: QuizScaffoldedProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQ = questions[currentIndex];

  if (!currentQ || finished) {
    const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
    return (
      <Card className="p-8 text-center space-y-6 bg-white text-slate-900 border-slate-200 max-w-lg mx-auto shadow-xl rounded-2xl">
        <div className="w-16 h-16 rounded-full bg-[#0b6687]/15 text-[#0b6687] mx-auto flex items-center justify-center border border-[#0b6687]/30">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900">Oefensessie Afgerond!</h2>
          <p className="text-slate-600 text-sm">
            Je behaalde een score van <span className="font-bold text-slate-900">{score} / {questions.length}</span> ({percentage}%).
          </p>
        </div>
        <Button
          onClick={() => {
            setCurrentIndex(0);
            setSelectedOption(null);
            setShowTranslation(false);
            setShowExplanation(false);
            setScore(0);
            setAnsweredCount(0);
            setFinished(false);
          }}
          className="bg-[#0b6687] hover:bg-[#084c65] text-white font-bold w-full h-12 rounded-xl"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Opnieuw Oefenen
        </Button>
      </Card>
    );
  }

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return; // Prevent changing after answer
    setSelectedOption(idx);
    setShowExplanation(true);
    setAnsweredCount((prev) => prev + 1);

    const isCorrect = !!currentQ.options[idx]?.is_correct;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    recordQuestionAnswer(currentQ.domain as any, isCorrect);
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowTranslation(false);
      setShowExplanation(false);
    } else {
      setFinished(true);
    }
  };

  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      {/* CBR Header Bar */}
      <div className="bg-[#0b6687] text-white rounded-xl p-3 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-white">
            Vraag {currentIndex + 1} van {questions.length}
          </span>
          <DomainBadge domain={currentQ.domain} size="sm" />
        </div>
        <span className="text-xs font-bold text-white/90">
          Score: {score}
        </span>
      </div>

      {/* Main Question Card with Official CBR Speech Bubble */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4 text-slate-900">
        {/* CBR Speech Bubble */}
        <div className="cbr-speech-bubble p-4 sm:p-5 text-sm sm:text-base font-normal text-slate-800 leading-relaxed">
          {currentQ.dutch_stem}
        </div>

        {/* Optional Sentence Deconstructor */}
        <div className="pt-1">
          <SentenceDeconstructor question={currentQ} />
        </div>

        {/* Translation Toggle for A0 learners */}
        {currentQ.english_breakdown && (
          <div className="pt-2 border-t border-slate-200">
            <button
              type="button"
              onClick={() => setShowTranslation(!showTranslation)}
              className="text-xs font-semibold text-[#0b6687] hover:underline flex items-center gap-1.5 transition-colors"
            >
              <Languages className="w-3.5 h-3.5" />
              {showTranslation ? 'Verberg Engelse vertaling' : '🇬🇧 Toon Engelse vertaling (A0 Support)'}
            </button>

            {showTranslation && (
              <div className="mt-2.5 p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-blue-950 leading-relaxed animate-in fade-in duration-200">
                <span className="font-bold block mb-0.5">English Translation:</span>
                {currentQ.english_breakdown}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Options List styled as CBR Touch Options */}
      <div className="space-y-2.5">
        {currentQ.options.map((option, idx) => {
          const isSelected = selectedOption === idx;
          const isAnswered = selectedOption !== null;
          const isCorrect = option.is_correct;

          let cardStyle = 'bg-[#f0f1f3] border-[#e0e2e6] hover:border-slate-400 text-slate-800';

          if (isAnswered) {
            if (isCorrect) {
              cardStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-1 ring-emerald-500 font-medium';
            } else if (isSelected) {
              cardStyle = 'bg-red-50 border-red-500 text-red-950 ring-1 ring-red-500 font-medium';
            } else {
              cardStyle = 'bg-[#f0f1f3] border-[#e0e2e6] text-slate-400 opacity-60';
            }
          }

          return (
            <div
              key={option.id || idx}
              onClick={() => handleSelectOption(idx)}
              className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${cardStyle}`}
            >
              {/* Circular Radio Icon */}
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 bg-white ${
                  isAnswered && isCorrect
                    ? 'border-emerald-600'
                    : isAnswered && isSelected
                    ? 'border-red-600'
                    : isSelected
                    ? 'border-[#0b6687]'
                    : 'border-slate-500'
                }`}
              >
                {isSelected && (
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      isAnswered && isCorrect
                        ? 'bg-emerald-600'
                        : isAnswered && isSelected
                        ? 'bg-red-600'
                        : 'bg-[#0b6687]'
                    }`}
                  />
                )}
              </div>

              {/* Text */}
              <div className="text-xs sm:text-sm font-normal leading-relaxed flex-1">
                {option.option_text}
              </div>

              {isAnswered && isCorrect && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              )}
              {isAnswered && isSelected && !isCorrect && (
                <XCircle className="w-5 h-5 text-red-600 shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      {/* Explanation Box */}
      {showExplanation && (
        <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed shadow-sm space-y-2 animate-in fade-in">
          <div className="flex items-center gap-1.5 font-bold text-[#0b6687]">
            <Lightbulb className="w-4 h-4" />
            <span>CBR Examentoelichting:</span>
          </div>
          <p>{currentQ.explanation || 'Geen toelichting beschikbaar voor deze vraag.'}</p>
        </div>
      )}

      {/* Next Question Button */}
      {selectedOption !== null && (
        <div className="pt-2">
          <Button
            onClick={handleNext}
            className="w-full bg-[#0b6687] hover:bg-[#084c65] text-white font-bold h-12 rounded-xl text-sm shadow-md"
          >
            <span>{currentIndex + 1 < questions.length ? 'Volgende Vraag' : 'Sessie Afronden'}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
}
