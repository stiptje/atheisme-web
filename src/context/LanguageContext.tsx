
import React, { createContext, useContext, useState, useCallback } from 'react';

type Lang = 'fr' | 'en';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (fr: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  toggleLang: () => {},
  t: (fr: string) => fr,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  const t = useCallback(
    (fr: string, en: string) => (lang === 'fr' ? fr : en),
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
