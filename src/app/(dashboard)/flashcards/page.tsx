'use client';

import React, { useEffect, useState } from 'react';
import { Flashcard } from '@/types/db';
import { getDb } from '@/lib/db/init';
import { FlashcardCarousel } from '../components/FlashcardCarousel';
import { Card } from '@/components/ui/card';
import { Layers, Sparkles, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FlashcardsPage() {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);

  const loadCards = async () => {
    setLoading(true);
    try {
      const db = await getDb();
      const allCards: Flashcard[] = db.query('SELECT * FROM flashcard ORDER BY id ASC');
      setCards(allCards);
    } catch (err) {
      console.error('Failed to load flashcards:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCards();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400">
          <Layers className="w-4 h-4" />
          <span>Spaced Repetition (SM-2)</span>
        </div>
        <h1 className="text-2xl font-bold text-white">Flitskaarten & Kernbegrippen</h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Herhaal cruciale wetgeving, definities en CBR verkeersregels met gespreide herhaling.
        </p>
      </div>

      {loading ? (
        <div className="p-12 text-center text-slate-500 space-y-3">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto text-orange-500" />
          <p className="text-sm">Flitskaarten database laden...</p>
        </div>
      ) : cards.length > 0 ? (
        <FlashcardCarousel cards={cards} />
      ) : (
        <Card className="p-8 text-center space-y-4 bg-slate-900 border-slate-800">
          <p className="text-slate-400 text-sm">Geen flitskaarten gevonden.</p>
          <Button onClick={loadCards} className="bg-orange-500 hover:bg-orange-600 text-white">
            Opnieuw proberen
          </Button>
        </Card>
      )}
    </div>
  );
}
