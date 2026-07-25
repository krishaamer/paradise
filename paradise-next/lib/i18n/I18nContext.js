import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { messages as allMessages, defaultLang, getNested } from './messages';

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    const stored = typeof window !== 'undefined' && localStorage.getItem('lang');
    if (stored && allMessages[stored]) setLang(stored);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('lang', lang);
  }, [lang]);

  const t = useMemo(() => {
    return (key) => {
      const msg = getNested(allMessages[lang], key);
      if (msg) return msg;
      const fallback = getNested(allMessages[defaultLang], key);
      return fallback || key;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t, messages: allMessages }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

