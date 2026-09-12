'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { COMMUNICATION_PHRASES, PhraseItem } from '@/lib/communicationData';
import { recordQuestionAnswer } from '@/lib/progressTracker';

export function PhraseQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Generate 10 randomized quiz challenges
  const currentPhrase = COMMUNICATION_PHRASES[currentIndex % COMMUNICATION_PHRASES.length];

  const options = React.useMemo(() => {
    const dList = COMMUNICATION_PHRASES.filter(p => p.id !== currentPhrase.id)
      .slice(currentIndex * 2, currentIndex * 2 + 2);
    const list = [currentPhrase, ...dList];
    return list.sort((a, b) => (a.id * 7 % 13) - (b.id * 7 % 13));
  }, [currentPhrase, currentIndex]);

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = options[idx].id === currentPhrase.id;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    recordQuestionAnswer('gedrag', isCorrect);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= 10) {
      setQuizFinished(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <Card className="rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl p-8 text-center space-y-6 max-w-lg mx-auto shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 mx-auto flex items-center justify-center shadow-lg shadow-orange-500/30">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-white">Quiz Voltooid!</h2>
          <p className="text-slate-300 text-sm">
            Je hebt <span className="text-orange-400 font-extrabold text-lg">{score}</span> van de 10 praktijkzinnen correct herkend.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400">
          {score >= 8
            ? "🎉 Geweldig! Je Nederlandse taxicomcommunicatie is van uitstekend CBR niveau."
            : "💪 Blijf oefenen. Herhaal de zinnen per ritfase om je communicatie te automatiseren."}
        </div>

        <Button
          onClick={handleRestart}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 rounded-xl shadow-lg shadow-orange-500/30"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Opnieuw Oefenen (Nieuwe Zinnen)
        </Button>
      </Card>
    );
  }

  return (
    <Card className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
      {/* Header & Progress */}
      <div className="flex items-center justify-between">
        <Badge variant="outline" className="text-orange-400 border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs">
          Vraag {currentIndex + 1} / 10
        </Badge>
        <span className="text-xs font-semibold text-slate-400">
          Score: <span className="text-emerald-400 font-bold">{score}</span>
        </span>
      </div>

      {/* English Situation / Prompt */}
      <div className="space-y-2 p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
          🇬🇧 How do you say this in Dutch?
        </span>
        <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
          &quot;{currentPhrase.english}&quot;
        </p>
        <div className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
          <span className="text-orange-400">Ritfase:</span> {currentPhrase.phase}
        </div>
      </div>

      {/* Dutch Options */}
      <div className="space-y-3">
        {options.map((opt, idx) => {
          const isCorrect = opt.id === currentPhrase.id;
          const isSelected = selectedOption === idx;

          let btnStyle = "border-slate-800 bg-slate-950/50 hover:bg-slate-800/80 text-slate-200";
          if (isAnswered) {
            if (isCorrect) {
              btnStyle = "border-emerald-500/50 bg-emerald-950/30 text-emerald-300 font-semibold";
            } else if (isSelected) {
              btnStyle = "border-red-500/50 bg-red-950/30 text-red-300";
            } else {
              btnStyle = "border-slate-850 bg-slate-950/30 text-slate-500 opacity-60";
            }
          }

          return (
            <button
              key={opt.id}
              disabled={isAnswered}
              onClick={() => handleSelect(idx)}
              className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-start justify-between gap-3 text-sm sm:text-base ${btnStyle}`}
            >
              <div className="flex-1">
                <span className="font-bold text-slate-100">{opt.dutch}</span>
                {isAnswered && (
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    🗣️ {opt.pronunciation}
                  </p>
                )}
              </div>

              {isAnswered && (
                <div className="shrink-0 mt-0.5">
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : isSelected ? (
                    <XCircle className="w-5 h-5 text-red-400" />
                  ) : null}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Next Step Button */}
      {isAnswered && (
        <div className="pt-2 animate-in fade-in duration-200">
          <Button
            onClick={handleNext}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 rounded-2xl shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
          >
            <span>{currentIndex + 1 === 10 ? 'Bekijk Resultaat' : 'Volgende Vraag'}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </Card>
  );
}
