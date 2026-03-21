import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Lang } from './i18n';

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: any };

const LanguageContext = createContext<Ctx>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
