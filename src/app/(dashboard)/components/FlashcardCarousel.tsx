'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flashcard } from '@/types/db';
import { scheduleNext, SRSGrade } from '@/lib/srs';
import { getDb } from '@/lib/db/init';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RotateCw, CheckCircle2, Sparkles, Volume2, ArrowRight } from 'lucide-react';
import { recordFlashcardReview } from '@/lib/progressTracker';

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

  const speakFront = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && currentCard) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentCard.front_text);
      utterance.lang = 'nl-NL';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleGrade = async (grade: SRSGrade) => {
    if (!currentCard) return;

    recordFlashcardReview();

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
      <Card className="p-8 text-center space-y-5 rounded-3xl border border-white/15 bg-slate-900/80 backdrop-blur-2xl shadow-2xl max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-white">Sessie voltooid! (Great Job!)</h2>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Je hebt <span className="text-orange-400 font-bold">{completedCount}</span> flitskaarten herhaald volgens het SM-2 herhalingsschema.
          </p>
        </div>
        <Button
          onClick={() => {
            setSessionFinished(false);
            setCurrentIndex(0);
            setCompletedCount(0);
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 px-6 rounded-2xl shadow-lg shadow-orange-500/30"
        >
          Opnieuw Oefenen
        </Button>
      </Card>
    );
  }

  const progressPercent = Math.round(((currentIndex) / cards.length) * 100);

  return (
    <div className="space-y-4 max-w-lg mx-auto">
      {/* Progress Header */}
      <div className="space-y-2 p-3 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
        <div className="flex justify-between text-xs font-semibold text-slate-300">
          <span className="text-orange-400">Kaart {currentIndex + 1} van {cards.length}</span>
          <span className="text-slate-400">{completedCount} voltooid</span>
        </div>
        <Progress value={progressPercent} className="h-2 rounded-full bg-slate-800" />
      </div>

      {/* 3D Flip Card Container with Framer Motion */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="cursor-pointer select-none relative min-h-[340px]"
        style={{ perspective: 1200 }}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="w-full h-full relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* FRONT FACE */}
          <div
            className={`w-full min-h-[340px] p-6 sm:p-8 rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950 backdrop-blur-2xl shadow-2xl flex flex-col justify-between absolute inset-0 ${
              isFlipped ? 'pointer-events-none' : ''
            }`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-orange-400 font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Vraag / CBR Kernbegrip
              </span>
              <button
                onClick={speakFront}
                className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-orange-400 hover:bg-slate-700/80 transition-all"
                title="Spreek vraag uit"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            {/* Card Question Body */}
            <div className="my-auto py-6 text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                {currentCard.front_text}
              </h3>
              <p className="text-xs text-slate-400 italic">
                (Bedenk het antwoord en tik om de vertaling &amp; wetsregel te onthullen)
              </p>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 border-t border-slate-800/80 pt-3">
              <RotateCw className="w-3.5 h-3.5 text-orange-400" />
              <span>Tik op de kaart om te draaien</span>
            </div>
          </div>

          {/* BACK FACE */}
          <div
            className={`w-full min-h-[340px] p-6 sm:p-8 rounded-3xl border border-orange-500/40 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-orange-950/20 backdrop-blur-2xl shadow-2xl shadow-orange-950/30 flex flex-col justify-between ${
              !isFlipped ? 'pointer-events-none' : ''
            }`}
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="flex items-center justify-between text-xs text-orange-400 font-bold uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Antwoord &amp; Juridische Context
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                A0 Scaffolding
              </span>
            </div>

            {/* Answer Content */}
            <div className="my-auto py-4">
              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-slate-200 text-sm sm:text-base whitespace-pre-line leading-relaxed max-h-[220px] overflow-y-auto">
                {currentCard.back_text}
              </div>
            </div>

            <div className="text-center text-[11px] text-slate-400 border-t border-slate-800/80 pt-3">
              Beoordeel hieronder hoe goed je het wist:
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grade Buttons (SM-2 ratings) */}
      {isFlipped && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-4 gap-2 pt-2"
        >
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={() => handleGrade(0)}
            className="flex flex-col py-3.5 h-auto gap-0.5 rounded-2xl bg-red-600 hover:bg-red-500 shadow-md shadow-red-900/30"
          >
            <span className="font-bold text-xs">✗ Opnieuw</span>
            <span className="text-[10px] opacity-80">&lt; 1 dag</span>
          </Button>

          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => handleGrade(2)}
            className="flex flex-col py-3.5 h-auto gap-0.5 rounded-2xl bg-amber-950/80 text-amber-300 border border-amber-800 hover:bg-amber-900 shadow-md"
          >
            <span className="font-bold text-xs">Moeilijk</span>
            <span className="text-[10px] opacity-80">1 dag</span>
          </Button>

          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => handleGrade(3)}
            className="flex flex-col py-3.5 h-auto gap-0.5 rounded-2xl bg-blue-950/80 text-blue-300 border border-blue-800 hover:bg-blue-900 shadow-md"
          >
            <span className="font-bold text-xs">Goed</span>
            <span className="text-[10px] opacity-80">3-6 dgn</span>
          </Button>

          <Button
            type="button"
            variant="default"
            size="sm"
            onClick={() => handleGrade(5)}
            className="flex flex-col py-3.5 h-auto gap-0.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/30"
          >
            <span className="font-bold text-xs">Makkelijk</span>
            <span className="text-[10px] opacity-80">7+ dgn</span>
          </Button>
        </motion.div>
      )}
    </div>
  );
}
