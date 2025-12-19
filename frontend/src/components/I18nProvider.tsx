'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, languages } from '@/lib/i18n';

type Language = 'en';
type Translations = typeof translations.en;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
  languages: typeof languages;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en'); // Only English

  // Load saved language from localStorage (though it will always be 'en')
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang && translations[savedLang]) {
      // Use setTimeout to avoid setState during render
      setTimeout(() => setLanguage(savedLang), 0);
    }
  }, []);

  // Save language to localStorage when it changes (though it will always be 'en')
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: keyof Translations): string => {
    return translations[language][key] || key; // Only English, no fallback needed
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, languages }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}