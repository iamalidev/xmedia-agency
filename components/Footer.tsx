"use client";

import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const companyLinks = [
    { label: t.footer.about, href: "#why-us" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.team, href: "#team" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-black/[0.06] bg-white">
      <div className="section-padding mx-auto max-w-7xl py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-sm font-bold text-white">
                X
              </span>
              <span className="text-lg font-semibold tracking-tight">XMedia</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {t.footer.description}
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="mailto:hello@xmedia.agency"
                className="flex items-center gap-3 text-sm text-ink-muted transition-colors duration-500 hover:text-ink"
              >
                <Mail size={16} className="shrink-0 text-accent" />
                hello@xmedia.agency
              </a>
              <a
                href="tel:+998901234567"
                className="flex items-center gap-3 text-sm text-ink-muted transition-colors duration-500 hover:text-ink"
              >
                <Phone size={16} className="shrink-0 text-accent" />
                +998 90 123 45 67
              </a>
              <div className="flex items-start gap-3 text-sm text-ink-muted">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  Toshkent sh., Amir Temur ko&apos;chasi 108
                  <br />
                  O&apos;zbekiston
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              {t.footer.services}
            </h4>
            <ul className="mt-4 space-y-3">
              {t.footer.serviceList.map((service) => (
                <li key={service}>
                  <span className="text-sm text-ink-muted">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              {t.footer.company}
            </h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors duration-500 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              {t.footer.stayUpdated}
            </h4>
            <p className="mt-4 text-sm text-ink-muted">
              {t.footer.newsletterText}
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 rounded-xl border border-black/10 bg-surface px-4 py-2.5 text-sm outline-none transition-all duration-500 focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
              <button
                type="submit"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-white transition-colors duration-500 hover:bg-ink/90"
                aria-label={t.footer.subscribe}
              >
                <ArrowUpRight size={16} />
              </button>
            </form>

            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-ink-muted transition-all duration-500 hover:border-black/20 hover:bg-surface hover:text-ink"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] pt-8 md:flex-row">
          <p className="text-sm text-ink-faint">
            &copy; {new Date().getFullYear()} XMedia Agency. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-ink-faint transition-colors duration-500 hover:text-ink-muted"
            >
              {t.footer.privacy}
            </a>
            <a
              href="#"
              className="text-sm text-ink-faint transition-colors duration-500 hover:text-ink-muted"
            >
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
