import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext(null);

function readStoredLang() {
  try {
    const saved = localStorage.getItem('portal-lang');
    return saved === 'tm' ? 'tm' : 'ru';
  } catch {
    return 'ru';
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => readStoredLang());

  const setLang = useCallback((nextLang) => {
    const valid = nextLang === 'tm' ? 'tm' : 'ru';
    setLangState(valid);
    try {
      localStorage.setItem('portal-lang', valid);
    } catch {}
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'ru' ? 'tm' : 'ru');
  }, [lang, setLang]);

  useEffect(() => {
    document.documentElement.lang = lang === 'tm' ? 'tk' : 'ru';
  }, [lang]);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'portal-lang') {
        setLangState(e.newValue === 'tm' ? 'tm' : 'ru');
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const tr = useCallback(
    (value) => {
      if (value == null) return '';
      if (typeof value === 'string') return value;
      return value[lang] ?? value.ru ?? '';
    },
    [lang]
  );

  const t = translations[lang] || translations.ru;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, tr, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }
  return ctx;
}
