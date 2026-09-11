'use client';

import React, { useState } from 'react';
import { Vocab } from '@/types/db';
import { Card } from '@/components/ui/card';
import { Sparkles, Info, BookOpen } from 'lucide-react';

interface CompoundSlicerProps {
  term: Vocab;
  className?: string;
}

export function CompoundSlicer({ term, className }: CompoundSlicerProps) {
  const [selectedRoot, setSelectedRoot] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const roots = term.root_decomposition ? term.root_decomposition.split('|') : [term.dutch_term];

  return (
    <div className={`space-y-3 ${className || ''}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-orange-400" />
          Compound Slicer (Woordontleder)
        </span>
        {roots.length > 1 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-2"
          >
            {expanded ? 'Toon samenvoeging' : 'Toon details'}
          </button>
        )}
      </div>

      {/* Sliced Pills */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
        {roots.map((root, idx) => {
          const isSelected = selectedRoot === root;
          return (
            <React.Fragment key={idx}>
              <button
                type="button"
                onClick={() => setSelectedRoot(isSelected ? null : root)}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/60'
                }`}
              >
                {root}
              </button>
              {idx < roots.length - 1 && (
                <span className="text-slate-600 font-bold select-none">+</span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Meaning & Context Card */}
      <Card className="p-4 bg-slate-900/90 border-slate-800">
        <div className="space-y-2 text-sm">
          {term.literal_english && (
            <div className="flex items-start gap-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider min-w-[70px]">
                Literal:
              </span>
              <span className="text-slate-200 font-medium">{term.literal_english}</span>
            </div>
          )}

          {term.legal_meaning && (
            <div className="flex items-start gap-2">
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider min-w-[70px] flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-orange-400" />
                Legal:
              </span>
              <span className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                {term.legal_meaning}
              </span>
            </div>
          )}

          {selectedRoot && (
            <div className="mt-3 pt-2.5 border-t border-slate-800 text-xs text-orange-300 bg-orange-950/20 p-2.5 rounded-lg">
              <span className="font-semibold text-orange-400">Geselecteerde stam &quot;{selectedRoot}&quot;: </span>
              Bouwsteen van de juridische term. Tik op andere stammen om de samenstelling te begrijpen.
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
