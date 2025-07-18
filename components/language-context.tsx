"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import en from "@/locales/en";
import es from "@/locales/es";

const translations = { en, es };

type Language = "en" | "es";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};

export const useTranslation = () => {
  const { t } = useLanguage();
  return t;
}; 