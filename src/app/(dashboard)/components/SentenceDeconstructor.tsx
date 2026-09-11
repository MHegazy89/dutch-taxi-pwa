'use client';

import React, { useState } from 'react';
import { PracticeQ, RoleAnnotation, SentenceRole } from '@/types/db';
import { Card } from '@/components/ui/card';
import { Eye, EyeOff, Layers, Info } from 'lucide-react';

interface SentenceDeconstructorProps {
  question: PracticeQ;
  className?: string;
}

const ROLE_STYLES: Record<SentenceRole, { bg: string; text: string; border: string; label: string; icon: string }> = {
  Actor: {
    bg: 'bg-blue-950/60 hover:bg-blue-900/80',
    text: 'text-blue-300',
    border: 'border-blue-700/60',
    label: 'Wie / Wie is betrokken?',
    icon: '👤',
  },
  Obligation: {
    bg: 'bg-red-950/60 hover:bg-red-900/80',
    text: 'text-red-300',
    border: 'border-red-700/60',
    label: 'Plicht / Verbod / Toestemming',
    icon: '⚖️',
  },
  Condition: {
    bg: 'bg-amber-950/60 hover:bg-amber-900/80',
    text: 'text-amber-300',
    border: 'border-amber-700/60',
    label: 'Voorwaarde / Uitzondering',
    icon: '⚠️',
  },
  Target: {
    bg: 'bg-emerald-950/60 hover:bg-emerald-900/80',
    text: 'text-emerald-300',
    border: 'border-emerald-700/60',
    label: 'Doel / Voorwerp / Sanctie',
    icon: '🎯',
  },
  Other: {
    bg: 'bg-slate-800/60 hover:bg-slate-800',
    text: 'text-slate-300',
    border: 'border-slate-700',
    label: 'Overig',
    icon: '📌',
  },
};

export function SentenceDeconstructor({ question, className }: SentenceDeconstructorProps) {
  const [showRoles, setShowRoles] = useState(true);
  const [activeAnnotation, setActiveAnnotation] = useState<RoleAnnotation | null>(null);

  let annotations: RoleAnnotation[] = [];
  try {
    if (question.role_annotations) {
      annotations = JSON.parse(question.role_annotations);
    }
  } catch (err) {
    annotations = [];
  }

  return (
    <div className={`space-y-3 ${className || ''}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-blue-400" />
          Sentence Deconstructor (Zinsontleder)
        </span>
        <button
          type="button"
          onClick={() => setShowRoles(!showRoles)}
          className="text-xs font-medium text-slate-400 hover:text-slate-200 flex items-center gap-1 px-2 py-1 rounded bg-slate-800/60 border border-slate-700/60"
        >
          {showRoles ? (
            <>
              <EyeOff className="w-3.5 h-3.5" /> Verberg rollen
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5" /> Toon rollen
            </>
          )}
        </button>
      </div>

      {/* Role Legend when enabled */}
      {showRoles && (
        <div className="flex flex-wrap gap-2 text-[11px] py-1">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-blue-700/60 bg-blue-950/40 text-blue-300">
            <span>👤</span> Actor
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-red-700/60 bg-red-950/40 text-red-300">
            <span>⚖️</span> Plicht / Verbod
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-amber-700/60 bg-amber-950/40 text-amber-300">
            <span>⚠️</span> Voorwaarde
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-emerald-700/60 bg-emerald-950/40 text-emerald-300">
            <span>🎯</span> Doel
          </span>
        </div>
      )}

      {/* Interactive Sentence Container */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 leading-relaxed text-slate-100">
        {!showRoles || annotations.length === 0 ? (
          <p className="text-base sm:text-lg font-medium">{question.dutch_stem}</p>
        ) : (
          <div className="flex flex-wrap gap-2 items-center">
            {annotations.map((ann, idx) => {
              const style = ROLE_STYLES[ann.role] || ROLE_STYLES.Other;
              const isSelected = activeAnnotation?.text === ann.text;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveAnnotation(isSelected ? null : ann)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${
                    style.bg
                  } ${style.text} ${style.border} ${
                    isSelected ? 'ring-2 ring-white scale-105 shadow-lg' : ''
                  }`}
                >
                  <span className="text-xs select-none">{style.icon}</span>
                  <span>{ann.text}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Selected Role Detail Card */}
      {activeAnnotation && (
        <Card className="p-3.5 bg-slate-900 border-slate-700 text-xs animate-in fade-in slide-in-from-top-1">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-100">
                {ROLE_STYLES[activeAnnotation.role]?.label || activeAnnotation.role}:
              </div>
              <p className="text-slate-300 mt-0.5">
                &quot;{activeAnnotation.text}&quot; bepaalt de juridische kern van deze CBR vraag.
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
