'use client';

import React, { useEffect, useState } from 'react';
import { Vocab } from '@/types/db';
import { fetchVocabSafe } from '@/lib/db/init';
import { CompoundSlicer } from '../components/CompoundSlicer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Search, RefreshCw, Sparkles } from 'lucide-react';
import { gateContent, FREE_LIMITS } from '@/lib/accessControl';
import { PaywallCard } from '@/components/PaywallCard';

export default function VocabularyPage() {
  const [vocabList, setVocabList] = useState<Vocab[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTerm, setSelectedTerm] = useState<Vocab | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVocab() {
      setLoading(true);
      try {
        const items = await fetchVocabSafe();
        setVocabList(items);
        if (items.length > 0) {
          setSelectedTerm(items[0]);
        }
      } catch (err) {
        console.error('Failed to load vocabulary:', err);
      } finally {
        setLoading(false);
      }
    }
    loadVocab();
  }, []);

  const filteredVocab = vocabList.filter(
    (v) =>
      v.dutch_term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (v.literal_english && v.literal_english.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (v.legal_meaning && v.legal_meaning.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const { visible: visibleVocab, locked: lockedVocab, isGated: isVocabGated } =
    gateContent(filteredVocab, FREE_LIMITS.compoundWords);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400">
          <BookOpen className="w-4 h-4" />
          <span>Juridisch Woordenboek & Ontleder</span>
        </div>
        <h1 className="text-2xl font-bold text-white">Woordenschat & Compound Slicer</h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Begrijp complexe samengestelde Nederlandse taxitermen door ze op te splitsen in betekenisvolle stammen met Engelse vertaling.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Zoek een term (bijv. Arbeidstijdenbesluit, Gordelplicht, BCT)..."
          className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {loading ? (
        <div className="p-12 text-center text-slate-500 space-y-3">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto text-orange-500" />
          <p className="text-sm">Woordenlijst laden...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Slicer / Inspector Panel */}
          <div className="lg:col-span-7 space-y-4">
            {selectedTerm ? (
              <Card className="p-5 sm:p-6 bg-slate-900 border-slate-800 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <h2 className="text-xl font-black text-white">{selectedTerm.dutch_term}</h2>
                    <span className="text-xs text-orange-400 font-semibold">{selectedTerm.literal_english}</span>
                  </div>
                  <Badge
                    variant={
                      selectedTerm.exam_frequency === 'high'
                        ? 'destructive'
                        : selectedTerm.exam_frequency === 'medium'
                        ? 'default'
                        : 'secondary'
                    }
                  >
                    {selectedTerm.exam_frequency?.toUpperCase()} EXAM FREQ
                  </Badge>
                </div>

                <CompoundSlicer term={selectedTerm} />
              </Card>
            ) : (
              <Card className="p-8 text-center text-slate-400 bg-slate-900 border-slate-800">
                Selecteer een woord uit de lijst om de stammen te ontleden.
              </Card>
            )}
          </div>

          {/* Term Selection List */}
          <div className="lg:col-span-5 space-y-3 max-h-[600px] overflow-y-auto pr-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Gevonden termen ({visibleVocab.length})
            </span>
            {visibleVocab.map((v) => {
              const isSelected = selectedTerm?.id === v.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedTerm(v)}
                  className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-orange-500/15 border-orange-500 text-white shadow-md'
                      : 'bg-slate-900/80 border-slate-800/80 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="font-bold text-sm block">{v.dutch_term}</span>
                    <span className="text-xs text-slate-400 line-clamp-1">{v.literal_english}</span>
                  </div>
                  {v.root_decomposition && (
                    <Sparkles className="w-3.5 h-3.5 text-orange-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}

            {isVocabGated && (
              <div className="pt-2">
                <PaywallCard lockedCount={lockedVocab.length} contentType="words" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
