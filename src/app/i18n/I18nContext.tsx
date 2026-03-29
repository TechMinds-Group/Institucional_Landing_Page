import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, Translations, languageHtmlCodes } from './translations';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const STORAGE_KEY = 'techminds-language';
const DEFAULT_LANGUAGE: Language = 'pt';

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get from localStorage, default to Portuguese
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (stored && (stored === 'pt' || stored === 'en' || stored === 'es')) {
        return stored;
      }
    }
    return DEFAULT_LANGUAGE;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // Persist to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
      // Update HTML lang attribute
      document.documentElement.lang = languageHtmlCodes[lang];
    }
  };

  // Set initial HTML lang attribute
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = languageHtmlCodes[language];
    }
  }, [language]);

  const value: I18nContextType = {
    language,
    setLanguage,
    t: translations[language]
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
