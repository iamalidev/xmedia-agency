"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { ArrowUpRight, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { softEase, inViewProps } from "@/lib/motion";

export default function CTA() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, inViewProps);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setForm({ firstName: "", lastName: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding pb-24 md:pb-32">
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: softEase }}
          className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-white md:px-12 md:py-20 lg:px-16"
        >
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,223,11,0.15),transparent_50%)]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — text & call */}
            <div>
              <h2
                className="text-4xl font-semibold tracking-tight md:text-5xl"
                style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
              >
                {t.cta.title1}{" "}
                <span className="italic text-accent-light">{t.cta.titleHighlight}</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                {t.cta.subtitle}
              </p>

              <a
                href="tel:+998901234567"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition-all duration-500 hover:border-white/40 hover:bg-white/5"
              >
                <Phone size={18} />
                {t.cta.callButton}: +998 90 123 45 67
              </a>
            </div>

            {/* Right — form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder={t.cta.form.firstName}
                  value={form.firstName}
                  onChange={(e) =>
                    setForm({ ...form, firstName: e.target.value })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-500 focus:border-white/25 focus:bg-white/10 focus:ring-2 focus:ring-white/10"
                />
                <input
                  type="text"
                  required
                  placeholder={t.cta.form.lastName}
                  value={form.lastName}
                  onChange={(e) =>
                    setForm({ ...form, lastName: e.target.value })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-500 focus:border-white/25 focus:bg-white/10 focus:ring-2 focus:ring-white/10"
                />
              </div>
              <input
                type="tel"
                required
                placeholder={t.cta.form.phone}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-500 focus:border-white/25 focus:bg-white/10 focus:ring-2 focus:ring-white/10"
              />
              <textarea
                required
                rows={4}
                placeholder={t.cta.form.message}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-500 focus:border-white/25 focus:bg-white/10 focus:ring-2 focus:ring-white/10"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-ink transition-all duration-500 hover:bg-white/90 hover:shadow-xl hover:shadow-white/20 disabled:opacity-60"
              >
                {status === "loading" ? t.cta.form.sending : t.cta.form.submit}
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-emerald-400"
                >
                  <CheckCircle size={16} />
                  {t.cta.form.success}
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-400"
                >
                  <AlertCircle size={16} />
                  {t.cta.form.error}
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
