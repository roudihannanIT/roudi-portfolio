"use client";

import { useState } from "react";

type Language = "en" | "de";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "de" : "en"));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-md border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition"
      aria-label="Toggle language"
    >
      {language.toUpperCase()}
    </button>
  );
}