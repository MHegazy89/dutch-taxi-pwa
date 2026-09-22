'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TRANSLATIONS, TranslationDict } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDict;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'nl',
  setLanguage: () => {},
  t: TRANSLATIONS.nl,
  isRtl: false,
});

const STORAGE_KEY = 'taximaster_preferred_lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('nl');

  useEffect(() => {
    // Load persisted language
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved && (saved === 'nl' || saved === 'en' || saved === 'ar')) {
        setLanguageState(saved);
        updateDocumentAttributes(saved);
      }
    } catch (e) {
      console.warn('Could not read saved language', e);
    }
  }, []);

  const updateDocumentAttributes = (lang: Language) => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    }
  };

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    updateDocumentAttributes(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      // Dispatch event so any non-react listeners or separate components know
      window.dispatchEvent(new CustomEvent('taximaster_lang_changed', { detail: newLang }));
    } catch (e) {
      console.warn('Could not save language preference', e);
    }
  };

  const isRtl = language === 'ar';
  const t = TRANSLATIONS[language] || TRANSLATIONS.nl;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
