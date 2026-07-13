"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-black/8 bg-white/80 p-0.5 text-xs font-medium backdrop-blur-sm">
      <button
        onClick={() => setLocale("uz")}
        className={`rounded-full px-3 py-1.5 transition-all duration-500 ${
          locale === "uz"
            ? "bg-ink text-white shadow-sm"
            : "text-ink-muted hover:text-ink"
        }`}
      >
        UZ
      </button>
      <button
        onClick={() => setLocale("ru")}
        className={`rounded-full px-3 py-1.5 transition-all duration-500 ${
          locale === "ru"
            ? "bg-ink text-white shadow-sm"
            : "text-ink-muted hover:text-ink"
        }`}
      >
        RU
      </button>
    </div>
  );
}
