'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import {
  COMMUNICATION_PHRASES,
  RIDE_PHASES,
  RidePhaseType,
} from '@/lib/communicationData';
import { CommunicationCard } from '../components/CommunicationCard';
import { ScenarioSimulator } from '../components/ScenarioSimulator';
import { PhraseQuiz } from '../components/PhraseQuiz';
import { MessageSquare, Users, Award, BookOpen } from 'lucide-react';
import { gateContent, FREE_LIMITS } from '@/lib/accessControl';
import { PaywallCard } from '@/components/PaywallCard';

type TabMode = 'phrases' | 'scenarios' | 'quiz';

export default function CommunicatePage() {
  const [activeTab, setActiveTab] = useState<TabMode>('phrases');
  const [selectedPhase, setSelectedPhase] = useState<RidePhaseType | 'all'>('all');

  const filteredPhrases = selectedPhase === 'all'
    ? COMMUNICATION_PHRASES
    : COMMUNICATION_PHRASES.filter(p => p.phase === selectedPhase);

  const phraseLimit = selectedPhase === 'all' ? FREE_LIMITS.phrasesPerPhase * 4 : FREE_LIMITS.phrasesPerPhase;
  const { visible: visiblePhrases, locked: lockedPhrases, isGated: isPhrasesGated } =
    gateContent(filteredPhrases, phraseLimit);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/40 p-6 sm:p-8 space-y-3 relative overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold border border-orange-500/30 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5" />
            CBR Praktijk & Communicatie Tutor
          </span>
          <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30">
            A0 Spraak & Etiquette
          </span>
        </div>

        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Nederlands voor de Taxipraktijk
          </h1>
          <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
            Beheers de 60 officiële CBR praktijkzinnen, leer natuurlijke uitspraak met fonetische gidsen en speel praktijkscenario&apos;s met klanten na.
          </p>
        </div>

        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Navigation Switcher Tabs */}
      <div className="grid grid-cols-3 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl gap-1">
        <button
          onClick={() => setActiveTab('phrases')}
          className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
            activeTab === 'phrases'
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Zinnen per Ritfase</span>
        </button>

        <button
          onClick={() => setActiveTab('scenarios')}
          className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
            activeTab === 'scenarios'
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>CBR Praktijk Simulatie</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
            activeTab === 'quiz'
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Zinnen Quiz</span>
        </button>
      </div>

      {/* TAB 1: PHRASES PER RIDE PHASE */}
      {activeTab === 'phrases' && (
        <div className="space-y-6">
          {/* Phase Filter Chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedPhase('all')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
                selectedPhase === 'all'
                  ? 'bg-slate-100 text-slate-950 border-white'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700'
              }`}
            >
              Alle Zinnen ({COMMUNICATION_PHRASES.length})
            </button>

            {RIDE_PHASES.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setSelectedPhase(phase.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
                  selectedPhase === phase.id
                    ? 'bg-orange-500 text-white border-orange-400 shadow-md shadow-orange-500/25'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                {phase.title}
              </button>
            ))}
          </div>

          {/* Phrases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visiblePhrases.map((phrase) => (
              <CommunicationCard key={phrase.id} phrase={phrase} />
            ))}
          </div>

          {isPhrasesGated && (
            <PaywallCard lockedCount={lockedPhrases.length} contentType="phrases" />
          )}
        </div>
      )}

      {/* TAB 2: PRACTICAL SCENARIO SIMULATOR */}
      {activeTab === 'scenarios' && <ScenarioSimulator />}

      {/* TAB 3: PHRASE QUIZ */}
      {activeTab === 'quiz' && <PhraseQuiz />}
    </div>
  );
}
