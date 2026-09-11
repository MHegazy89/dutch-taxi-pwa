'use client';

import React, { useEffect, useState } from 'react';
import { PracticeQWithOptions } from '@/types/db';
import { getDb } from '@/lib/db/init';
import { QuizMock } from '../components/QuizMock';
import { Card } from '@/components/ui/card';
import { RefreshCw, Trophy } from 'lucide-react';

export default function MockExamPage() {
  const [questions, setQuestions] = useState<PracticeQWithOptions[]>([]);
  const [loading, setLoading] = useState(true);

  const loadAllQuestions = async () => {
    setLoading(true);
    try {
      const db = await getDb();
      const rawQuestions = db.query('SELECT * FROM practice_q ORDER BY id ASC');

      const fullQuestions: PracticeQWithOptions[] = rawQuestions.map((q: any) => {
        const options = db.query('SELECT * FROM practice_option WHERE q_id = ? ORDER BY id ASC', [q.id]);
        return {
          ...q,
          options,
        };
      });

      setQuestions(fullQuestions);
    } catch (err) {
      console.error('Failed to load mock exam questions:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllQuestions();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400">
          <Trophy className="w-4 h-4 text-yellow-400" />
          <span>CBR Examen Simulator</span>
        </div>
        <h1 className="text-2xl font-bold text-white">40-Vragen CBR Proefexamen (TVT)</h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Volledig getimed examen (60 min) inclusief 2 casussen. Minimaal 32 van de 40 punten vereist om te slagen.
        </p>
      </div>

      {loading ? (
        <div className="p-12 text-center text-slate-500 space-y-3">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto text-orange-500" />
          <p className="text-sm">Proefexamen laden...</p>
        </div>
      ) : questions.length > 0 ? (
        <QuizMock questions={questions} onRestart={loadAllQuestions} />
      ) : (
        <Card className="p-8 text-center text-slate-400 bg-slate-900 border-slate-800">
          Geen examenvragen geladen.
        </Card>
      )}
    </div>
  );
}
