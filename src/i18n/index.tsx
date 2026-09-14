import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { translations, type Locale } from "./translations";

type AnyTranslations = (typeof translations)[Locale];

function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("pt")) return "pt-BR";
  if (lang.startsWith("es")) return "es";
  return "en";
}

const LocaleContext = createContext<AnyTranslations>(translations.en as AnyTranslations);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      setLocale(detectLocale());
    }
  }, []);

  return (
    <LocaleContext.Provider value={translations[locale] as AnyTranslations}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useT(): AnyTranslations {
  return useContext(LocaleContext);
}
