"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { softEase, inViewProps } from "@/lib/motion";

const TOTAL_MOCKUPS = 8;
const mockups = Array.from({ length: TOTAL_MOCKUPS });

function ProjectMockup({ index }: { index: number }) {
  return (
    <div className="mx-4 w-[260px] shrink-0 md:w-[280px] lg:w-[300px] transition-all duration-500 hover:scale-[1.03] hover:rotate-1">
      <div className="relative mx-auto aspect-[3924/8124] w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/10 transition-shadow duration-500 hover:shadow-black/20">
        <Image
          src="/IMG_6451_iphone-17-pro-max.webp"
          alt={`Mockup project ${index + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 260px, (max-width: 1024px) 280px, 300px"
          priority={index < 4}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, inViewProps);

  const carouselItems = [...mockups, ...mockups];

  return (
    <section id="projects" className="section-gap overflow-hidden bg-surface">
      <div ref={ref} className="section-padding mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: softEase }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t.projects.label}
          </span>
          <h2
            className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
          >
            {t.projects.title1}{" "}
            <span className="italic">{t.projects.titleHighlight}</span>
          </h2>
          <p className="mt-6 text-lg text-ink-muted">{t.projects.subtitle}</p>
        </motion.div>
      </div>

      {/* Full-width auto carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: softEase, delay: 0.2 }}
        className="relative mt-16 w-full"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent md:w-40" />

        <div className="projects-marquee flex w-max">
          {carouselItems.map((_, i) => (
            <ProjectMockup
              key={i}
              index={i}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
