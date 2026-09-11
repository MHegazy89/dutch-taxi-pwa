'use client';

import React, { useState } from 'react';
import { Flashcard } from '@/types/db';
import { scheduleNext, SRSGrade, isDue } from '@/lib/srs';
import { getDb } from '@/lib/db/init';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RotateCw, CheckCircle2, Sparkles, AlertCircle, ArrowRight, Check } from 'lucide-react';

interface FlashcardCarouselProps {
  cards: Flashcard[];
  onFinish?: () => void;
}

export function FlashcardCarousel({ cards: initialCards, onFinish }: FlashcardCarouselProps) {
  const [cards, setCards] = useState<Flashcard[]>(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [sessionFinished, setSessionFinished] = useState(false);

  const currentCard = cards[currentIndex];

  const handleGrade = async (grade: SRSGrade) => {
    if (!currentCard) return;

    // Calculate new SM-2 schedule
    const updatedState = scheduleNext(
      {
        ease: currentCard.ease,
        interval: currentCard.interval,
        next_due: currentCard.next_due,
        last_review: currentCard.last_review,
      },
      grade
    );

    // Save to SQLite & IndexedDB
    try {
      const db = await getDb();
      db.run(
        `UPDATE flashcard 
         SET ease = ?, interval = ?, next_due = ?, last_review = ?
         WHERE id = ?`,
        [
          updatedState.ease,
          updatedState.interval,
          updatedState.next_due,
          updatedState.last_review,
          currentCard.id,
        ]
      );
      await db.save();
    } catch (err) {
      console.error('Failed to update flashcard in DB:', err);
    }

    setIsFlipped(false);
    setCompletedCount((prev) => prev + 1);

    if (currentIndex + 1 < cards.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setSessionFinished(true);
      if (onFinish) onFinish();
    }
  };

  if (sessionFinished || cards.length === 0) {
    return (
      <Card className="p-8 text-center space-y-5 bg-slate-900/90 border-slate-800">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white">Sessie voltooid! (Great Job!)</h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Je hebt {completedCount} flitskaarten herhaald volgens het SM-2 herhalingsschema.
          </p>
        </div>
        <Button
          onClick={() => {
            setSessionFinished(false);
            setCurrentIndex(0);
            setCompletedCount(0);
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold"
        >
          Opnieuw oefenen
        </Button>
      </Card>
    );
  }

  const progressPercent = Math.round(((currentIndex) / cards.length) * 100);

  return (
    <div className="space-y-4 max-w-lg mx-auto">
      {/* Progress header */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs text-slate-400">
          <span>Kaart {currentIndex + 1} van {cards.length}</span>
          <span>{completedCount} voltooid</span>
        </div>
        <Progress value={progressPercent} className="h-2" />
      </div>

      {/* Flip Card Container */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="cursor-pointer select-none perspective-1000 min-h-[320px]"
      >
        <Card
          className={`p-6 transition-all duration-300 min-h-[320px] flex flex-col justify-between border-2 ${
            isFlipped
              ? 'bg-slate-900 border-orange-500/50 shadow-2xl shadow-orange-950/30'
              : 'bg-slate-900/95 border-slate-800 hover:border-slate-700 shadow-xl'
          }`}
        >
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-orange-400 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              {isFlipped ? 'Antwoord / Uitleg' : 'Vraag / Begrip'}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <RotateCw className="w-3.5 h-3.5" /> Tik om te draaien
            </span>
          </div>

          {/* Card Body */}
          <div className="my-auto py-6 text-center">
            {!isFlipped ? (
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {currentCard.front_text}
                </h3>
                <p className="text-xs text-slate-500 italic">
                  (Bedenk het antwoord in het Nederlands/Engels en tik om te controleren)
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-left">
                <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-slate-200 text-sm sm:text-base whitespace-pre-line leading-relaxed">
                  {currentCard.back_text}
                </div>
              </div>
            )}
          </div>

          <div className="text-center text-[11px] text-slate-500">
            {isFlipped ? 'Beoordeel hoe goed je het wist:' : 'Tik op de kaart om het antwoord te onthullen'}
          </div>
        </Card>
      </div>

      {/* Grade Buttons (SM-2 ratings) */}
      {isFlipped && (
        <div className="grid grid-cols-4 gap-2 pt-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={() => handleGrade(0)}
            className="flex flex-col py-3 h-auto gap-0.5"
          >
            <span className="font-bold">✗ Opnieuw</span>
            <span className="text-[10px] opacity-80">&lt; 1 dag</span>
          </Button>

          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => handleGrade(2)}
            className="flex flex-col py-3 h-auto gap-0.5 bg-amber-950/60 text-amber-300 border border-amber-800 hover:bg-amber-900"
          >
            <span className="font-bold">Moeilijk</span>
            <span className="text-[10px] opacity-80">1 dag</span>
          </Button>

          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => handleGrade(3)}
            className="flex flex-col py-3 h-auto gap-0.5 bg-blue-950/60 text-blue-300 border border-blue-800 hover:bg-blue-900"
          >
            <span className="font-bold">Goed</span>
            <span className="text-[10px] opacity-80">3-6 dagen</span>
          </Button>

          <Button
            type="button"
            variant="default"
            size="sm"
            onClick={() => handleGrade(5)}
            className="flex flex-col py-3 h-auto gap-0.5 bg-emerald-600 hover:bg-emerald-500 text-white"
          >
            <span className="font-bold">Makkelijk</span>
            <span className="text-[10px] opacity-80">7+ dagen</span>
          </Button>
        </div>
      )}
    </div>
  );
}
