'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Language } from '@/lib/i18n/translations';
import { Globe } from 'lucide-react';

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  const options: { code: Language; label: string; flag: string }[] = [
    { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  ];

  return (
    <div className={`flex items-center gap-1 bg-slate-900/80 p-1 rounded-full border border-white/10 ${className}`}>
      {options.map((opt) => {
        const isActive = language === opt.code;
        return (
          <button
            key={opt.code}
            onClick={() => setLanguage(opt.code)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
              isActive
                ? 'bg-orange-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
            title={opt.label}
          >
            <span>{opt.flag}</span>
            <span className="text-[11px] uppercase tracking-wide">{opt.code}</span>
          </button>
        );
      })}
    </div>
  );
}
