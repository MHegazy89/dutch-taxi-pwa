'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Volume2, Eye, EyeOff, Lightbulb, CheckCircle } from 'lucide-react';
import { PhraseItem } from '@/lib/communicationData';
import { recordFlashcardReview } from '@/lib/progressTracker';

interface Props {
  phrase: PhraseItem;
}

export function CommunicationCard({ phrase }: Props) {
  const [revealed, setRevealed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [practiced, setPracticed] = useState(false);

  const speakDutch = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(phrase.dutch);
      utterance.lang = 'nl-NL';
      utterance.rate = 0.85; // Slightly slower for A0 learners
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handlePractice = () => {
    setPracticed(true);
    recordFlashcardReview();
  };

  return (
    <Card className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-5 shadow-xl transition-all duration-300 hover:border-orange-500/30 hover:shadow-orange-500/10">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="text-[11px] font-semibold tracking-wider text-orange-400 border-orange-500/30 bg-orange-500/10 uppercase">
            {phrase.phase}
          </Badge>
          {phrase.keyWords.slice(0, 2).map((kw, i) => (
            <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50">
              {kw}
            </span>
          ))}
        </div>

        {/* Audio TTS Button */}
        <button
          onClick={speakDutch}
          className={`p-2 rounded-xl transition-all duration-200 ${
            isPlaying 
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/40 animate-pulse' 
              : 'bg-slate-800/90 text-slate-300 hover:text-orange-400 hover:bg-slate-700/80'
          }`}
          title="Beluister Nederlandse uitspraak"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>

      {/* Main Dutch sentence */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1">
            🇳🇱 Chauffeur zegt:
          </span>
          <span className="text-[10px] text-slate-500">ID #{phrase.id}</span>
        </div>
        <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
          {phrase.dutch}
        </p>

        {/* Phonetic Pronunciation Guide */}
        <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-orange-300/90 font-mono">
          🗣️ <span className="opacity-75">Klank:</span> {phrase.pronunciation}
        </div>
      </div>

      {/* Revealable English Translation & Practical Tip */}
      {revealed ? (
        <div className="space-y-3 pt-3 border-t border-slate-800/80 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400">
              🇬🇧 English Meaning:
            </span>
            <p className="text-sm font-medium text-slate-200">
              {phrase.english}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs text-blue-300 leading-relaxed flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-blue-200">CBR Praktijk Tip: </span>
              {phrase.tip}
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setRevealed(true)}
          className="w-full py-2.5 px-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all border border-dashed border-slate-700/60"
        >
          <Eye className="w-3.5 h-3.5 text-orange-400" />
          <span>Toon vertaling & CBR praktijktip</span>
        </button>
      )}

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-800/60 text-xs">
        {revealed && (
          <button
            onClick={() => setRevealed(false)}
            className="text-slate-500 hover:text-slate-400 flex items-center gap-1 text-[11px]"
          >
            <EyeOff className="w-3 h-3" />
            Verberg
          </button>
        )}

        <Button
          size="sm"
          variant={practiced ? 'outline' : 'ghost'}
          onClick={handlePractice}
          className={`ml-auto text-xs h-7 px-2.5 rounded-lg ${
            practiced
              ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          {practiced ? (
            <>
              <CheckCircle className="w-3 h-3 mr-1 text-emerald-400" />
              Geoefend
            </>
          ) : (
            'Markeer als geoefend'
          )}
        </Button>
      </div>
    </Card>
  );
}
