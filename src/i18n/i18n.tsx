import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Locale = "en" | "ar";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  dir: "ltr" | "rtl";
  isAr: boolean;
};

const LocaleContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "ag-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "ar" || saved === "en") setLocaleState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", locale);
      document.documentElement.setAttribute("dir", dir);
    }
  }, [locale]);

  const value = useMemo<Ctx>(
    () => ({
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      isAr: locale === "ar",
      setLocale: (l) => {
        setLocaleState(l);
        try { window.localStorage.setItem(STORAGE_KEY, l); } catch {}
      },
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Ctx {
  const ctx = useContext(LocaleContext);
  if (!ctx) return { locale: "ar", setLocale: () => {}, dir: "rtl", isAr: true };
  return ctx;
}

/** Pick the right variant for the active locale. */
export function useT() {
  const { locale } = useLocale();
  return function t<T>(en: T, ar: T): T {
    return locale === "ar" ? ar : en;
  };
}