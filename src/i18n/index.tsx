import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { translations, type Locale } from "./translations";

export type { Locale };

type AnyTranslations = (typeof translations)[Locale];

const STORAGE_KEY = "novarks-locale";

function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && stored in translations) return stored;
  } catch {}
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("pt")) return "pt-BR";
  if (lang.startsWith("es")) return "es";
  return "en";
}

type LocaleContextValue = {
  t: AnyTranslations;
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue>({
  t: translations.en as AnyTranslations,
  locale: "en",
  setLocale: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      setLocaleState(detectLocale());
    }
  }, []);

  function setLocale(next: Locale) {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
    setLocaleState(next);
  }

  return (
    <LocaleContext.Provider value={{ t: translations[locale] as AnyTranslations, locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useT(): AnyTranslations {
  return useContext(LocaleContext).t;
}

export function useLocale(): { locale: Locale; setLocale: (l: Locale) => void } {
  const { locale, setLocale } = useContext(LocaleContext);
  return { locale, setLocale };
}
