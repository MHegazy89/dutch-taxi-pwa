'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  PRACTICAL_SCENARIOS,
  PracticalScenario,
  ScenarioDialogueTurn
} from '@/lib/communicationData';
import {
  User,
  HelpCircle,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Volume2,
  ShieldCheck
} from 'lucide-react';
import { recordScenarioCompleted } from '@/lib/progressTracker';

export function ScenarioSimulator() {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [currentTurnIndex, setCurrentTurnIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [turnFeedback, setTurnFeedback] = useState<string | null>(null);
  const [isCorrectOption, setIsCorrectOption] = useState<boolean | null>(null);
  const [scenarioCompleted, setScenarioCompleted] = useState(false);

  const scenario: PracticalScenario = PRACTICAL_SCENARIOS[selectedScenarioIndex];
  const currentTurn: ScenarioDialogueTurn = scenario.turns[currentTurnIndex];

  const handleSelectOption = (opt: {
    id: string;
    dutchResponse: string;
    isCorrect: boolean;
    feedback: string;
  }) => {
    setSelectedOptionId(opt.id);
    setIsCorrectOption(opt.isCorrect);
    setTurnFeedback(opt.feedback);

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(opt.dutchResponse);
      utterance.lang = 'nl-NL';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNextTurn = () => {
    if (currentTurnIndex + 1 < scenario.turns.length) {
      setCurrentTurnIndex(prev => prev + 1);
      setSelectedOptionId(null);
      setTurnFeedback(null);
      setIsCorrectOption(null);
    } else {
      setScenarioCompleted(true);
      recordScenarioCompleted();
    }
  };

  const handleRestartScenario = () => {
    setCurrentTurnIndex(0);
    setSelectedOptionId(null);
    setTurnFeedback(null);
    setIsCorrectOption(null);
    setScenarioCompleted(false);
  };

  const handleSelectScenario = (idx: number) => {
    setSelectedScenarioIndex(idx);
    setCurrentTurnIndex(0);
    setSelectedOptionId(null);
    setTurnFeedback(null);
    setIsCorrectOption(null);
    setScenarioCompleted(false);
  };

  return (
    <div className="space-y-6">
      {/* Scenario Selector Ribbon */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {PRACTICAL_SCENARIOS.map((sc, idx) => (
          <button
            key={sc.id}
            onClick={() => handleSelectScenario(idx)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
              selectedScenarioIndex === idx
                ? 'bg-orange-500 text-white border-orange-400 shadow-md shadow-orange-500/25'
                : 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-slate-700'
            }`}
          >
            {sc.title.split(':')[0]}
          </button>
        ))}
      </div>

      {/* Main Simulation Card */}
      <Card className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
        {/* Scenario Header */}
        <div className="space-y-2 border-b border-slate-800/80 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Badge variant="outline" className="text-[11px] font-bold text-orange-400 border-orange-500/30 bg-orange-500/10">
              {scenario.category}
            </Badge>
            <span className="text-xs text-slate-400">
              Beurt {currentTurnIndex + 1} van {scenario.turns.length}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white">
            {scenario.title}
          </h2>

          <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 space-y-1">
            <p>
              <strong className="text-orange-400 font-semibold">Situatie: </strong>
              {scenario.situation}
            </p>
            <p className="text-slate-400 text-[11px]">
              <strong className="text-blue-400 font-semibold">CBR Toetsterm: </strong>
              {scenario.cbrCriterion}
            </p>
          </div>
        </div>

        {scenarioCompleted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">
                CBR Praktijksimulatie Geslaagd!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Je hebt dit praktijkscenario succesvol doorlopen volgens de officiële CBR taxi-gedragsnormen.
              </p>
            </div>

            <Button
              onClick={handleRestartScenario}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 h-12 rounded-2xl shadow-lg shadow-orange-500/30"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Scenario Opnieuw Spelen
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Dialogue Bubble */}
            <div className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                currentTurn.speaker === 'police'
                  ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                  : currentTurn.speaker === 'examiner'
                  ? 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                  : 'bg-purple-500/20 text-purple-400 border-purple-500/30'
              }`}>
                {currentTurn.speaker === 'police' ? (
                  <ShieldCheck className="w-5 h-5" />
                ) : (
                  <User className="w-5 h-5" />
                )}
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold ${
                    currentTurn.speaker === 'police'
                      ? 'text-blue-400'
                      : currentTurn.speaker === 'examiner'
                      ? 'text-orange-400'
                      : 'text-purple-300'
                  }`}>
                    {currentTurn.speaker === 'police'
                      ? '👮 Politieambtenaar / ILT Inspecteur'
                      : currentTurn.speaker === 'examiner'
                      ? '📋 CBR Praktijkexaminator'
                      : 'Passagier / Klant'}
                  </span>
                  <button
                    onClick={() => {
                      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                        window.speechSynthesis.cancel();
                        const utterance = new SpeechSynthesisUtterance(currentTurn.dutchText);
                        utterance.lang = 'nl-NL';
                        window.speechSynthesis.speak(utterance);
                      }
                    }}
                    className="p-1 rounded-md text-slate-400 hover:text-white"
                    title="Spreek uit"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-base sm:text-lg font-bold text-white">
                  &quot;{currentTurn.dutchText}&quot;
                </p>
                <p className="text-xs text-slate-400 italic">
                  🇬🇧 &quot;{currentTurn.englishText}&quot;
                </p>
              </div>
            </div>

            {/* Prompt */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                Wat is jouw professionele CBR reactie als chauffeur?
              </span>

              {/* Options */}
              <div className="space-y-3">
                {currentTurn.options?.map((opt) => {
                  const isSelected = selectedOptionId === opt.id;
                  let style = "border-slate-800 bg-slate-950/50 hover:bg-slate-800/80 text-slate-200";

                  if (selectedOptionId !== null) {
                    if (opt.isCorrect) {
                      style = "border-emerald-500/50 bg-emerald-950/30 text-emerald-200";
                    } else if (isSelected) {
                      style = "border-red-500/50 bg-red-950/30 text-red-200";
                    } else {
                      style = "border-slate-800 bg-slate-950/20 text-slate-500 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      disabled={selectedOptionId !== null}
                      onClick={() => handleSelectOption(opt)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 space-y-1 ${style}`}
                    >
                      <div className="font-bold text-sm sm:text-base">
                        {opt.dutchResponse}
                      </div>
                      <div className="text-xs text-slate-400">
                        🇬🇧 {opt.englishResponse}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feedback Banner */}
            {turnFeedback && (
              <div className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed space-y-3 animate-in fade-in duration-200 ${
                isCorrectOption
                  ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
                  : 'bg-red-950/20 border-red-500/30 text-red-300'
              }`}>
                <div className="flex items-start gap-2">
                  {isCorrectOption ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  )}
                  <div>{turnFeedback}</div>
                </div>

                <div className="pt-2">
                  <Button
                    onClick={handleNextTurn}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-11 rounded-xl shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
                  >
                    <span>Volgende Stap</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}
