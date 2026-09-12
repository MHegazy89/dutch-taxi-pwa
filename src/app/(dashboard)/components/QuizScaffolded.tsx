'use client';

import React, { useState } from 'react';
import { PracticeQWithOptions } from '@/types/db';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DomainBadge } from '@/components/DomainBadge';
import { SentenceDeconstructor } from './SentenceDeconstructor';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, Languages, Sparkles, RefreshCw } from 'lucide-react';
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
      <Card className="p-8 text-center space-y-6 bg-slate-900 border-slate-800 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-orange-500/20 text-orange-400 mx-auto flex items-center justify-center border border-orange-500/30">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Oefensessie Afgerond!</h2>
          <p className="text-slate-400 text-sm">
            Je behaalde een score van <span className="font-bold text-white">{score} / {questions.length}</span> ({percentage}%).
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
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full"
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
    <div className="space-y-5 max-w-xl mx-auto">
      {/* Progress & Domain Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <DomainBadge domain={currentQ.domain} size="sm" />
          <span className="text-xs font-semibold text-slate-400">
            Vraag {currentIndex + 1} van {questions.length} (Score: {score})
          </span>
        </div>
        <Progress value={progressPercent} className="h-2" />
      </div>

      {/* Main Question Card */}
      <Card className="p-5 sm:p-6 bg-slate-900 border-slate-800 space-y-4">
        {/* Sentence Deconstructor Module */}
        <SentenceDeconstructor question={currentQ} />

        {/* Translation Toggle for A0 learners */}
        {currentQ.english_breakdown && (
          <div className="pt-2 border-t border-slate-800/80">
            <button
              type="button"
              onClick={() => setShowTranslation(!showTranslation)}
              className="text-xs font-medium text-orange-400 hover:text-orange-300 flex items-center gap-1.5 transition-colors"
            >
              <Languages className="w-3.5 h-3.5" />
              {showTranslation ? 'Verberg Engelse vertaling' : '🇬🇧 Toon Engelse vertaling (A0 Support)'}
            </button>

            {showTranslation && (
              <div className="mt-2.5 p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-300 leading-relaxed animate-in fade-in duration-200">
                <span className="font-semibold text-slate-200 block mb-1">English Translation:</span>
                {currentQ.english_breakdown}
              </div>
            )}
          </div>
        )}
      </Card>

      {/* Options List */}
      <div className="space-y-2.5">
        {currentQ.options.map((option, idx) => {
          const isSelected = selectedOption === idx;
          const isAnswered = selectedOption !== null;
          const isCorrect = option.is_correct;

          let btnStyle = 'bg-slate-900/90 border-slate-800 hover:border-slate-700 text-slate-100';
          let icon = null;

          if (isAnswered) {
            if (isCorrect) {
              btnStyle = 'bg-emerald-950/70 border-emerald-500/80 text-emerald-100 ring-1 ring-emerald-500';
              icon = <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />;
            } else if (isSelected) {
              btnStyle = 'bg-red-950/70 border-red-500/80 text-red-100 ring-1 ring-red-500';
              icon = <XCircle className="w-5 h-5 text-red-400 shrink-0" />;
            } else {
              btnStyle = 'bg-slate-900/40 border-slate-800/50 text-slate-500 opacity-60';
            }
          }

          return (
            <div key={option.id || idx} className="space-y-1.5">
              <button
                type="button"
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-start gap-3 justify-between ${btnStyle}`}
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-slate-700">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-snug">{option.option_text}</span>
                </div>
                {icon}
              </button>

              {/* Trap / Explanation annotation per option */}
              {isAnswered && (isSelected || isCorrect) && option.trap_annotation && (
                <div
                  className={`text-xs p-2.5 rounded-lg ml-9 ${
                    isCorrect
                      ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-800/50'
                      : 'bg-red-950/40 text-red-300 border border-red-800/50'
                  }`}
                >
                  {option.trap_annotation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Global Explanation & Next Button */}
      {selectedOption !== null && (
        <div className="space-y-4 pt-2 animate-in fade-in slide-in-from-bottom-2">
          {currentQ.explanation && (
            <Card className="p-4 bg-slate-900/95 border-slate-700">
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs sm:text-sm">
                  <span className="font-bold text-orange-400 block">CBR Toelichting & Wetsartikel:</span>
                  <p className="text-slate-300 leading-relaxed">{currentQ.explanation}</p>
                </div>
              </div>
            </Card>
          )}

          <Button
            onClick={handleNext}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 h-auto"
          >
            {currentIndex + 1 < questions.length ? (
              <>
                Volgende Vraag <ArrowRight className="w-4 h-4 ml-2" />
              </>
            ) : (
              'Bekijk Resultaten'
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
