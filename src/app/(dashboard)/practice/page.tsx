'use client';

import React, { useEffect, useState } from 'react';
import { PracticeQWithOptions, DomainType } from '@/types/db';
import { fetchQuestionsSafe } from '@/lib/db/init';
import { QuizScaffolded } from '../components/QuizScaffolded';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, RefreshCw } from 'lucide-react';

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
  const [selectedDomain, setSelectedDomain] = useState<DomainType | 'all'>('all');
  const [questions, setQuestions] = useState<PracticeQWithOptions[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400">
          <HelpCircle className="w-4 h-4" />
          <span>Scaffolded Oefenmodus</span>
        </div>
        <h1 className="text-2xl font-bold text-white">Oefenvragen per Domein</h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Oefen vraag voor vraag met kleurgecodeerde zinsontleding, rolmarkeringen en uitleg per antwoordoptie.
        </p>
      </div>

      {/* Domain Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {ALL_DOMAINS.map((dom) => {
          const isSelected = selectedDomain === dom.id;
          return (
            <button
              key={dom.id}
              type="button"
              onClick={() => setSelectedDomain(dom.id)}
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

      {/* Question Runner */}
      {loading ? (
        <div className="p-12 text-center text-slate-500 space-y-3">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto text-orange-500" />
          <p className="text-sm">Vragen laden...</p>
        </div>
      ) : questions.length > 0 ? (
        <QuizScaffolded questions={questions} />
      ) : (
        <Card className="p-8 text-center space-y-4 bg-slate-900 border-slate-800">
          <p className="text-slate-400 text-sm">Geen vragen gevonden voor dit domein.</p>
          <Button onClick={() => setSelectedDomain('all')} className="bg-orange-500 hover:bg-orange-600 text-white">
            Toon alle vragen
          </Button>
        </Card>
      )}
    </div>
  );
}
