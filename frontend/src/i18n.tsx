import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { fr, type Dict } from "@/i18n/fr";
import { en } from "@/i18n/en";

export type Lang = "fr" | "en";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() =>
    window.localStorage.getItem("klonaris-lang") === "en" ? "en" : "fr",
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    window.localStorage.setItem("klonaris-lang", l);
    setLangState(l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: lang === "fr" ? fr : en }}>
      {children}
    </LangContext.Provider>
  );
}

export function useI18n(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useI18n must be used inside LanguageProvider");
  return ctx;
}
