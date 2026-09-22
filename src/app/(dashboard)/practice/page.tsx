'use client';

import React, { useEffect, useState } from 'react';
import { PracticeQWithOptions, DomainType } from '@/types/db';
import { fetchQuestionsSafe } from '@/lib/db/init';
import { QuizScaffolded } from '../components/QuizScaffolded';
import { SleepvraagCard } from '../components/SleepvraagCard';
import { SLEEPVRAGEN_DATA, Sleepvraag } from '@/lib/sleepvragenData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, RefreshCw, Layers, Move, Sparkles } from 'lucide-react';

import { gateContent, FREE_LIMITS } from '@/lib/accessControl';
import { PaywallCard } from '@/components/PaywallCard';

const ALL_DOMAINS: { id: DomainType | 'all'; label: string }[] = [
  { id: 'all', label: 'Alle Onderwerpen' },
  { id: 'gordelplicht', label: 'Gordelplicht' },
  { id: 'bcdt', label: 'BCT & CDT' },
  { id: 'atbv', label: 'Arbeidstijd (ATBv)' },
  { id: 'paman', label: 'PAMAN Ongeval' },
  { id: 'transport', label: 'Vervoer & Tarief' },
  { id: 'gedrag', label: 'Gedrag & Klant' },
  { id: 'casus', label: 'Casus Praktijk' },
];

export default function PracticePage() {
  const [mode, setMode] = useState<'mc' | 'sleep'>('mc');
  const [selectedDomain, setSelectedDomain] = useState<DomainType | 'all'>('all');
  const [questions, setQuestions] = useState<PracticeQWithOptions[]>([]);
  const [loading, setLoading] = useState(true);

  // Sleepvraag state
  const [sleepIndex, setSleepIndex] = useState(0);

  useEffect(() => {
    async function loadQuestions() {
      setLoading(true);
      try {
        const allQuestions = await fetchQuestionsSafe();
        if (selectedDomain === 'all') {
          setQuestions(allQuestions);
        } else {
          setQuestions(allQuestions.filter((q) => q.domain === selectedDomain));
        }
      } catch (err) {
        console.error('Failed to load practice questions:', err);
      } finally {
        setLoading(false);
      }
    }
    loadQuestions();
  }, [selectedDomain]);

  const filteredSleepvragen = selectedDomain === 'all'
    ? SLEEPVRAGEN_DATA
    : SLEEPVRAGEN_DATA.filter((s) => s.domain === selectedDomain);

  const { visible: visibleQuestions, locked: lockedQuestions, isGated: isQuestionsGated } =
    gateContent(questions, FREE_LIMITS.practiceQuestionsPerDomain);

  const { visible: visibleSleep, locked: lockedSleep, isGated: isSleepGated } =
    gateContent(filteredSleepvragen, FREE_LIMITS.sleepvragen);

  const currentSleepvraag = visibleSleep[sleepIndex] || visibleSleep[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400">
          <HelpCircle className="w-4 h-4" />
          <span>CBR Theorie Oefenmodus</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Oefenvragen &amp; CBR Sleepvragen
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Beheers zowel meerkeuzevragen als de officiële CBR sleepvragen (volgorde en koppeling).
        </p>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="grid grid-cols-2 p-1 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl gap-1">
        <button
          onClick={() => setMode('mc')}
          className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            mode === 'mc'
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Meerkeuzevragen ({questions.length})</span>
        </button>

        <button
          onClick={() => setMode('sleep')}
          className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            mode === 'sleep'
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          <Move className="w-4 h-4" />
          <span>CBR Sleepvragen ({filteredSleepvragen.length})</span>
        </button>
      </div>

      {/* Domain Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {ALL_DOMAINS.map((dom) => {
          const isSelected = selectedDomain === dom.id;
          return (
            <button
              key={dom.id}
              type="button"
              onClick={() => {
                setSelectedDomain(dom.id);
                setSleepIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all select-none ${
                isSelected
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {dom.label}
            </button>
          );
        })}
      </div>

      {/* MODE 1: MULTIPLE CHOICE */}
      {mode === 'mc' && (
        <>
          {loading ? (
            <div className="p-12 text-center text-slate-500 space-y-3">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto text-orange-500" />
              <p className="text-sm">Vragen laden...</p>
            </div>
          ) : visibleQuestions.length > 0 ? (
            <div className="space-y-6">
              <QuizScaffolded questions={visibleQuestions} />
              {isQuestionsGated && (
                <PaywallCard lockedCount={lockedQuestions.length} contentType="questions" />
              )}
            </div>
          ) : (
            <Card className="p-8 text-center space-y-4 bg-slate-900 border-slate-800 rounded-3xl">
              <p className="text-slate-400 text-sm">Geen vragen gevonden voor dit domein.</p>
              <Button
                onClick={() => setSelectedDomain('all')}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Toon alle vragen
              </Button>
            </Card>
          )}
        </>
      )}

      {/* MODE 2: SLEEPVRAGEN */}
      {mode === 'sleep' && (
        <div className="space-y-4">
          {visibleSleep.length > 0 && currentSleepvraag ? (
            <>
              <div className="flex items-center justify-between text-xs text-slate-400 font-semibold px-1">
                <span>
                  Sleepvraag {sleepIndex + 1} van {visibleSleep.length}
                </span>
                <div className="flex items-center gap-1.5">
                  {visibleSleep.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSleepIndex(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === sleepIndex
                          ? 'bg-orange-500 scale-125'
                          : 'bg-slate-700 hover:bg-slate-500'
                      }`}
                      title={`Vraag ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <SleepvraagCard
                question={currentSleepvraag}
                onNext={() => {
                  if (sleepIndex + 1 < visibleSleep.length) {
                    setSleepIndex(sleepIndex + 1);
                  } else {
                    setSleepIndex(0);
                  }
                }}
              />

              {isSleepGated && (
                <PaywallCard lockedCount={lockedSleep.length} contentType="sleepvragen" />
              )}
            </>
          ) : (
            <Card className="p-8 text-center space-y-4 bg-slate-900 border-slate-800 rounded-3xl">
              <p className="text-slate-400 text-sm">
                Geen sleepvragen gevonden voor het gekozen domein.
              </p>
              <Button
                onClick={() => setSelectedDomain('all')}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Toon alle onderwerpen
              </Button>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
