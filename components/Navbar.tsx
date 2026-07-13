"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.results, href: "#results" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.whyUs, href: "#why-us" },
    { label: t.nav.team, href: "#team" },
    { label: t.nav.faq, href: "#faq" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "glass shadow-sm" : "bg-transparent"
        }`}
    >
      <nav className="section-padding mx-auto flex h-20 max-w-7xl items-center justify-between">
        <a href="#" className="group flex items-center gap-2">
          {/* <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-sm font-bold text-white transition-transform duration-500 group-hover:scale-105">
            X
          </span> */}
          <img width={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTst2rwzFAY-uArjGzS8Y-25yuU8V9QnygwTatbH-kBw&s" alt="" />
          <span className="text-lg font-semibold tracking-tight">XMedia</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-muted transition-colors duration-500 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle />
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-white transition-all duration-500 hover:bg-ink/90 hover:shadow-lg hover:shadow-ink/20"
          >
            {t.nav.contact}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="glass border-t border-black/5 md:hidden">
          <ul className="section-padding flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-ink-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-white"
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
