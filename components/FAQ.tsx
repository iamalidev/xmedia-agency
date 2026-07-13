"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { softEase, inViewProps } from "@/lib/motion";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-black/[0.06]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="text-base font-medium md:text-lg">{question}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-500 hover:bg-surface">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: softEase }}
            className="overflow-hidden"
          >
            <p className="pb-6 leading-relaxed text-ink-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, inViewProps);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-gap section-padding bg-white">
      <div ref={ref} className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: softEase }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t.faq.label}
          </span>
          <h2
            className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl"
            style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
          >
            {t.faq.title1}{" "}
            <span className="italic">{t.faq.titleHighlight}</span>
          </h2>
          <p className="mt-6 text-lg text-ink-muted">{t.faq.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: softEase, delay: 0.15 }}
          className="mt-12"
        >
          {t.faq.items.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
