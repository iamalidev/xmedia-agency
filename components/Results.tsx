"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Award, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { softEase, inViewProps } from "@/lib/motion";

const statMeta = [
  { value: 120, suffix: "+", icon: Award },
  { value: 48, suffix: "M+", icon: TrendingUp },
  { value: 340, suffix: "%", icon: Zap },
  { value: 98, suffix: "%", icon: Users },
];

function AnimatedNumber({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2500;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Results() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, inViewProps);

  return (
    <section id="results" className="section-gap section-padding bg-white">
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: softEase }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t.results.label}
          </span>
          <h2
            className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
          >
            {t.results.title1}{" "}
            <span className="italic">{t.results.titleHighlight}</span>
          </h2>
          <p className="mt-6 text-lg text-ink-muted">{t.results.subtitle}</p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statMeta.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: softEase, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-3xl border border-black/[0.06] bg-surface p-8 transition-all duration-700 hover:border-black/10 hover:shadow-xl hover:shadow-black/[0.04]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                <stat.icon size={22} className="text-accent" />
              </div>
              <div className="text-4xl font-bold tracking-tight md:text-5xl">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <h3 className="mt-3 text-base font-semibold">
                {t.results.stats[i].label}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                {t.results.stats[i].description}
              </p>
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/5 transition-transform duration-700 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
