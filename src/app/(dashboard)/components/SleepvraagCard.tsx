'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DomainBadge } from '@/components/DomainBadge';
import { Sleepvraag, SleepvraagItem } from '@/lib/sleepvragenData';
import {
  CheckCircle2,
  XCircle,
  ArrowUp,
  ArrowDown,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Lightbulb,
  BookOpen,
  Languages,
  Check
} from 'lucide-react';
import { recordQuestionAnswer } from '@/lib/progressTracker';

interface SleepvraagCardProps {
  question: Sleepvraag;
  onNext?: () => void;
  lang?: 'nl' | 'en' | 'ar';
}

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // Ensure it's not accidentally identical to the initial order if length > 1
  return arr;
}

export function SleepvraagCard({ question, onNext, lang = 'nl' }: SleepvraagCardProps) {
  // For sequence mode: list of items in current order
  const [orderedItems, setOrderedItems] = useState<SleepvraagItem[]>([]);
  
  // For matching mode: mapping of slotId -> itemId
  const [slotAssignments, setSlotAssignments] = useState<{ [slotId: string]: string | null }>({});
  const [selectedItemForSlot, setSelectedItemForSlot] = useState<string | null>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showLanguageHelp, setShowLanguageHelp] = useState(false);

  // Initialize/reset on question change
  useEffect(() => {
    if (question.type === 'sequence') {
      let shuffled = shuffleArray(question.items);
      // Guarantee initial shuffle is different from correct order
      let attempts = 0;
      while (
        attempts < 5 &&
        shuffled.map((i) => i.id).join(',') === question.correctSequenceIds.join(',')
      ) {
        shuffled = shuffleArray(question.items);
        attempts++;
      }
      setOrderedItems(shuffled);
    } else if (question.type === 'matching' && question.slots) {
      const initial: { [key: string]: null } = {};
      question.slots.forEach((s) => {
        initial[s.id] = null;
      });
      setSlotAssignments(initial);
      setSelectedItemForSlot(null);
    }
    setIsSubmitted(false);
    setIsCorrect(false);
    setShowExplanation(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Full reset only on question change, not individual property updates
  }, [question.id]);

  // Sequence: Move item up
  const moveItem = (index: number, direction: 'up' | 'down') => {
    if (isSubmitted) return;
    const newItems = [...orderedItems];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    const temp = newItems[index];
    newItems[index] = newItems[targetIndex];
    newItems[targetIndex] = temp;
    setOrderedItems(newItems);
  };

  // Matching: Assign item to slot
  const handleAssignToSlot = (slotId: string) => {
    if (isSubmitted) return;
    if (!selectedItemForSlot) {
      // If a slot is clicked and it already has an item, unassign it
      if (slotAssignments[slotId]) {
        setSlotAssignments((prev) => ({ ...prev, [slotId]: null }));
      }
      return;
    }
    // Assign selected item to this slot, unassigning it from any other slot
    setSlotAssignments((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((key) => {
        if (updated[key] === selectedItemForSlot) {
          updated[key] = null;
        }
      });
      updated[slotId] = selectedItemForSlot;
      return updated;
    });
    setSelectedItemForSlot(null);
  };

  const checkAnswer = () => {
    let correct = false;

    if (question.type === 'sequence') {
      const currentIds = orderedItems.map((i) => i.id);
      correct = currentIds.every((id, idx) => id === question.correctSequenceIds[idx]);
    } else if (question.type === 'matching' && question.slots) {
      correct = question.slots.every((slot) => slotAssignments[slot.id] === slot.targetItemId);
    }

    setIsCorrect(correct);
    setIsSubmitted(true);
    setShowExplanation(true);
    recordQuestionAnswer(question.domain, correct);
  };

  const resetQuestion = () => {
    if (question.type === 'sequence') {
      setOrderedItems(shuffleArray(question.items));
    } else {
      const initial: { [key: string]: null } = {};
      question.slots?.forEach((s) => {
        initial[s.id] = null;
      });
      setSlotAssignments(initial);
      setSelectedItemForSlot(null);
    }
    setIsSubmitted(false);
    setIsCorrect(false);
    setShowExplanation(false);
  };

  return (
    <div className="space-y-4 max-w-2xl mx-auto animate-in fade-in duration-200">
      {/* Question Header */}
      <Card className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-[11px] font-bold">
              CBR Sleepvraag (Drag &amp; Drop)
            </Badge>
            <DomainBadge domain={question.domain} size="sm" />
          </div>

          <button
            onClick={() => setShowLanguageHelp(!showLanguageHelp)}
            className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-medium px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 transition-all"
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{showLanguageHelp ? 'Verberg vertaling' : 'EN / عربي'}</span>
          </button>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
            {question.title}
          </h2>
          <p className="text-sm font-medium text-slate-300 mt-1 leading-relaxed">
            {question.instruction}
          </p>

          {/* Bilingual Scaffolding */}
          {showLanguageHelp && (
            <div className="mt-3 p-3.5 rounded-2xl bg-slate-950/80 border border-blue-500/30 space-y-2 text-xs">
              <div className="text-slate-300 flex items-start gap-2">
                <span className="text-blue-400 font-bold shrink-0">EN:</span>
                <span>{question.englishInstruction}</span>
              </div>
              <div className="text-amber-300/90 flex items-start gap-2 font-arabic" dir="rtl">
                <span className="text-amber-400 font-bold shrink-0">عربي:</span>
                <span>{question.arabicInstruction}</span>
              </div>
            </div>
          )}

          {question.scenarioText && (
            <div className="mt-3 p-3 rounded-xl bg-orange-950/20 border border-orange-500/20 text-xs text-orange-200/90 flex items-center gap-2">
              <span className="text-orange-400 font-bold">Situatie:</span>
              <span>{question.scenarioText}</span>
            </div>
          )}
        </div>

        {/* ----------------- SEQUENCE TYPE ----------------- */}
        {question.type === 'sequence' && (
          <div className="space-y-2 pt-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Zet in de juiste volgorde (gebruik de pijlen):
            </span>

            <div className="space-y-2">
              {orderedItems.map((item, idx) => {
                const isItemInCorrectPos =
                  isSubmitted && item.id === question.correctSequenceIds[idx];
                const isItemInWrongPos = isSubmitted && !isItemInCorrectPos;

                return (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all ${
                      isItemInCorrectPos
                        ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-100 shadow-md shadow-emerald-950/50'
                        : isItemInWrongPos
                        ? 'bg-red-950/30 border-red-500/50 text-red-100'
                        : 'bg-slate-950/70 border-slate-800 text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {/* Step Number Badge */}
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                        isItemInCorrectPos
                          ? 'bg-emerald-500 text-slate-950'
                          : isItemInWrongPos
                          ? 'bg-red-500 text-white'
                          : 'bg-slate-800 text-orange-400'
                      }`}
                    >
                      {idx + 1}
                    </div>

                    {/* Item Content */}
                    <div className="flex-1 text-xs sm:text-sm font-medium leading-snug">
                      <div className="flex items-center gap-2">
                        {item.icon && <span>{item.icon}</span>}
                        <span>{item.text}</span>
                      </div>
                      {showLanguageHelp && (
                        <div className="mt-1 space-y-0.5 text-[11px]">
                          {item.englishText && (
                            <p className="text-slate-400">EN: {item.englishText}</p>
                          )}
                          {item.arabicText && (
                            <p className="text-amber-400/90 font-arabic" dir="rtl">
                              {item.arabicText}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Reorder Up/Down Buttons */}
                    {!isSubmitted && (
                      <div className="flex flex-col gap-1 shrink-0">
                        <button
                          onClick={() => moveItem(idx, 'up')}
                          disabled={idx === 0}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-orange-500 text-slate-300 hover:text-white disabled:opacity-25 disabled:hover:bg-slate-800 disabled:hover:text-slate-300 transition-colors"
                          title="Omhoog verplaatsen"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => moveItem(idx, 'down')}
                          disabled={idx === orderedItems.length - 1}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-orange-500 text-slate-300 hover:text-white disabled:opacity-25 disabled:hover:bg-slate-800 disabled:hover:text-slate-300 transition-colors"
                          title="Omlaag verplaatsen"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ----------------- MATCHING TYPE ----------------- */}
        {question.type === 'matching' && question.slots && (
          <div className="space-y-4 pt-2">
            {/* Available Items Pool */}
            {!isSubmitted && (
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  1. Kies een document / element:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {question.items.map((item) => {
                    const isAssigned = Object.values(slotAssignments).includes(item.id);
                    const isSelected = selectedItemForSlot === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => setSelectedItemForSlot(isSelected ? null : item.id)}
                        className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all ${
                          isSelected
                            ? 'bg-orange-500/20 border-orange-500 text-white ring-2 ring-orange-500/40'
                            : isAssigned
                            ? 'bg-slate-950/40 border-slate-800/60 text-slate-500 opacity-60'
                            : 'bg-slate-950 border-slate-800 text-slate-200 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span>{item.text}</span>
                          {isAssigned && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Target Slots */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                {isSubmitted
                  ? 'Resultaat koppelingen:'
                  : '2. Klik op het doelvak om toe te wijzen:'}
              </span>

              <div className="space-y-2.5">
                {question.slots.map((slot) => {
                  const assignedItemId = slotAssignments[slot.id];
                  const assignedItem = question.items.find((i) => i.id === assignedItemId);
                  const isSlotCorrect = isSubmitted && assignedItemId === slot.targetItemId;
                  const isSlotWrong = isSubmitted && !isSlotCorrect;

                  return (
                    <div
                      key={slot.id}
                      onClick={() => handleAssignToSlot(slot.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        isSlotCorrect
                          ? 'bg-emerald-950/40 border-emerald-500/60'
                          : isSlotWrong
                          ? 'bg-red-950/30 border-red-500/50'
                          : selectedItemForSlot
                          ? 'bg-slate-950/80 border-orange-500/50 hover:border-orange-500'
                          : 'bg-slate-950/60 border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-300">
                          🎯 {slot.title}
                        </span>
                        {isSlotCorrect && (
                          <span className="text-[10px] font-bold text-emerald-400">Juist ✓</span>
                        )}
                        {isSlotWrong && (
                          <span className="text-[10px] font-bold text-red-400">Onjuist ✗</span>
                        )}
                      </div>

                      {/* Dropzone / Assigned Card */}
                      <div className="mt-2 p-2.5 rounded-xl bg-slate-900/90 border border-dashed border-slate-700 min-h-[38px] flex items-center justify-between text-xs">
                        {assignedItem ? (
                          <span className="font-medium text-white">{assignedItem.text}</span>
                        ) : (
                          <span className="text-slate-500 italic">
                            {selectedItemForSlot ? '👉 Klik hier om te plaatsen' : '(Leeg — selecteer item)'}
                          </span>
                        )}
                        {assignedItem && !isSubmitted && (
                          <span className="text-[10px] text-slate-400 hover:text-red-400">wis ✕</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3 pt-2">
          {!isSubmitted ? (
            <Button
              onClick={checkAnswer}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 h-11 rounded-xl shadow-lg shadow-orange-500/20 w-full"
            >
              Controleer Volgorde
            </Button>
          ) : (
            <div className="flex items-center gap-2 w-full">
              <Button
                variant="outline"
                onClick={resetQuestion}
                className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-xl h-11"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Opnieuw
              </Button>

              {onNext && (
                <Button
                  onClick={onNext}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl h-11 flex-1 shadow-lg shadow-orange-500/20"
                >
                  Volgende Vraag
                </Button>
              )}
            </div>
          )}
        </div>
      </Card>

      {/* Explanation Card */}
      {showExplanation && (
        <Card
          className={`p-5 rounded-3xl border transition-all ${
            isCorrect
              ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-100'
              : 'bg-slate-900/90 border-slate-800 text-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            ) : (
              <XCircle className="w-5 h-5 text-red-400" />
            )}
            <span className="font-bold text-sm">
              {isCorrect ? 'Uitstekend! De volgorde is helemaal correct.' : 'Niet helemaal juist. Bekijk de uitleg hieronder:'}
            </span>
          </div>

          <div className="space-y-3 text-xs leading-relaxed">
            <p className="text-slate-300">{question.explanation.dutch}</p>

            {showLanguageHelp && (
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <p className="text-slate-400">
                  <strong className="text-blue-400">EN: </strong>
                  {question.explanation.english}
                </p>
                <p className="text-amber-400/90 font-arabic" dir="rtl">
                  <strong className="text-amber-400">عربي: </strong>
                  {question.explanation.arabic}
                </p>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/5">
              <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-400">
                ⚖️ {question.explanation.legalBasis}
              </span>
              <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 text-[10px] font-semibold">
                💡 CBR Tip: {question.explanation.examTip}
              </span>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
