"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { softEase, inViewProps } from "@/lib/motion";

const images = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
];

export default function Team() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, inViewProps);

  return (
    <section id="team" className="section-gap section-padding bg-surface">
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: softEase }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t.team.label}
          </span>
          <h2
            className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
          >
            {t.team.title1}{" "}
            <span className="italic">{t.team.titleHighlight}</span>
          </h2>
          <p className="mt-6 text-lg text-ink-muted">{t.team.subtitle}</p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.team.members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: softEase, delay: i * 0.12 }}
              className="group text-center"
            >
              <div className="relative mx-auto aspect-[3/4] max-w-[280px] overflow-hidden rounded-3xl bg-white">
                <Image
                  src={images[i]}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-accent">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
