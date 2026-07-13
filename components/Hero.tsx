"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { softEase } from "@/lib/motion";

const brands = ["Lumière", "NovaFit", "Bloom Co.", "Artisan", "Velvet"];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="hero-grid absolute inset-0 opacity-60" />
      <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-accent/10 via-purple-100/30 to-transparent blur-3xl" />
      <div className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-amber-50 via-orange-50/50 to-transparent blur-3xl" />

      <div className="section-padding relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-16 text-center md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: softEase }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/80 px-4 py-1.5 text-sm text-ink-muted shadow-sm backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: softEase, delay: 0.15 }}
          className="text-balance max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
        >
          {t.hero.title1}{" "}
          <span className="relative inline-block italic">
            {t.hero.titleHighlight}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
            >
              <path
                d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8"
                stroke="url(#underline)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="underline" x1="0" y1="0" x2="300" y2="0">
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#A78BFA" />
                </linearGradient>
              </defs>
            </svg>
          </span>{" "}
          {t.hero.title2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: softEase, delay: 0.3 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: softEase, delay: 0.45 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-medium text-white transition-all duration-500 hover:bg-ink/90 hover:shadow-xl hover:shadow-ink/20"
          >
            {t.hero.ctaPrimary}
            <ArrowUpRight
              size={18}
              className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-8 py-4 text-base font-medium text-ink transition-all duration-500 hover:border-black/20 hover:shadow-lg"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface">
              <Play size={14} fill="currentColor" />
            </span>
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: softEase, delay: 0.7 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-ink-faint">
            {t.hero.trustedBy}
          </span>
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-sm font-semibold tracking-wide text-ink-faint/80 transition-colors duration-500 hover:text-ink-muted"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
