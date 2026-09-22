'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface PaywallCardProps {
  /** Number of locked items remaining */
  lockedCount: number;
  /** What type of content is locked (for display) */
  contentType: 'flashcards' | 'questions' | 'sleepvragen' | 'phrases' | 'scenarios' | 'words' | 'exam' | 'curriculum';
}

const CONTENT_LABELS: Record<string, Record<PaywallCardProps['contentType'], string>> = {
  nl: {
    flashcards: 'flitskaarten',
    questions: 'oefenvragen',
    sleepvragen: 'sleepvragen',
    phrases: 'praktijkzinnen',
    scenarios: 'examensimulaties',
    words: 'juridische begrippen',
    exam: 'CBR proefexamen',
    curriculum: 'theorie-eindtermen',
  },
  en: {
    flashcards: 'flashcards',
    questions: 'practice questions',
    sleepvragen: 'drag-and-drop questions',
    phrases: 'dialogue phrases',
    scenarios: 'exam simulations',
    words: 'legal terms',
    exam: 'CBR mock exam',
    curriculum: 'curriculum modules',
  },
  ar: {
    flashcards: 'بطاقة تعليمية',
    questions: 'سؤال تدريبي',
    sleepvragen: 'سؤال سحب وترتيب',
    phrases: 'عبارة عملية',
    scenarios: 'محاكاة امتحان',
    words: 'مصطلح قانوني',
    exam: 'امتحان CBR التجريبي',
    curriculum: 'فصل في المنهاج',
  },
};

export function PaywallCard({ lockedCount, contentType }: PaywallCardProps) {
  const { language } = useLanguage();
  const label = CONTENT_LABELS[language]?.[contentType] || CONTENT_LABELS.nl[contentType];

  const title = language === 'ar'
    ? `🔒 ${lockedCount}+ ${label} إضافية مقفلة`
    : language === 'en'
    ? `🔒 ${lockedCount}+ more ${label} locked`
    : `🔒 ${lockedCount}+ extra ${label} vergrendeld`;

  const subtitle = language === 'ar'
    ? 'اشترك في TaxiMaster TVT Premium للوصول الكامل'
    : language === 'en'
    ? 'Subscribe to TaxiMaster TVT Premium for full access'
    : 'Abonneer op TaxiMaster TVT Premium voor volledige toegang';

  const btnText = language === 'ar'
    ? 'عرض الباقات'
    : language === 'en'
    ? 'View Plans'
    : 'Bekijk Pakketten';

  return (
    <Card className="relative overflow-hidden p-6 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-slate-900/90 via-amber-950/20 to-slate-900/90 backdrop-blur-xl shadow-2xl text-center space-y-4">
      {/* Glow */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
        <Lock className="w-7 h-7" />
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-black text-white">{title}</h3>
        <p className="text-xs text-slate-400 max-w-xs mx-auto">{subtitle}</p>
      </div>

      <Link href="/upgrade">
        <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black px-8 h-12 rounded-2xl shadow-lg shadow-orange-500/30 mx-auto">
          <Sparkles className="w-4 h-4 mr-2 fill-slate-950" />
          {btnText}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </Card>
  );
}
