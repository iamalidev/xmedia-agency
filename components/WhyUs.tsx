"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Target,
  Palette,
  BarChart3,
  Clock,
  Shield,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { softEase, inViewProps } from "@/lib/motion";

const icons = [Target, Palette, BarChart3, Clock, Shield, Sparkles];

export default function WhyUs() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, inViewProps);

  return (
    <section id="why-us" className="section-gap section-padding bg-white">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: softEase }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              {t.whyUs.label}
            </span>
            <h2
              className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
            >
              {t.whyUs.title1}{" "}
              <span className="italic">{t.whyUs.titleHighlight}</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              {t.whyUs.subtitle}
            </p>

            <div className="mt-10 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: softEase, delay: 0.3 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink to-neutral-800 p-8 text-white"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                <blockquote className="relative">
                  <p className="text-lg leading-relaxed italic">
                    &ldquo;{t.whyUs.testimonial}&rdquo;
                  </p>
                  <footer className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
                    <div>
                      <div className="text-sm font-semibold">
                        {t.whyUs.testimonialAuthor}
                      </div>
                      <div className="text-xs text-white/60">
                        {t.whyUs.testimonialRole}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {t.whyUs.reasons.map((reason, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.85, ease: softEase, delay: i * 0.1 }}
                  className="group rounded-2xl border border-black/[0.06] bg-surface p-6 transition-all duration-700 hover:border-black/10 hover:bg-white hover:shadow-lg hover:shadow-black/[0.03]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm transition-colors duration-500 group-hover:bg-accent-soft">
                    <Icon
                      size={20}
                      className="text-ink transition-colors duration-500 group-hover:text-accent"
                    />
                  </div>
                  <h3 className="font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
