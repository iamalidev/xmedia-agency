"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Send,
  Grid3X3,
  Clapperboard,
  UserSquare2,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { softEase, inViewProps } from "@/lib/motion";

const projects = [
  {
    id: "lumier",
    name: "Lumière Beauty",
    category: { uz: "Go'zallik va teri parvarishi", ru: "Красота и уход за кожей" },
    handle: "@lumier.beauty",
    followers: "124K",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    posts: [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80",
      "https://images.unsplash.com/photo-1596755389378-c793a265813d?w=400&q=80",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80",
    ],
  },
  {
    id: "novafit",
    name: "NovaFit",
    category: { uz: "Fitnes va salomatlik", ru: "Фитнес и wellness" },
    handle: "@novafit.co",
    followers: "89K",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50?w=800&q=80",
    posts: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fade2c24?w=400&q=80",
    ],
  },
  {
    id: "bloom",
    name: "Bloom Co.",
    category: { uz: "Lifestyle va uy", ru: "Лifestyle и дом" },
    handle: "@bloom.co",
    followers: "56K",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    posts: [
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80",
      "https://images.unsplash.com/photo-1616137467421-6e793ed1d463?w=400&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb103b4?w=400&q=80",
    ],
  },
  {
    id: "artisan",
    name: "Artisan Coffee",
    category: { uz: "Oziq-ovqat va ichimlik", ru: "Еда и напитки" },
    handle: "@artisan.coffee",
    followers: "72K",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    posts: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80",
      "https://images.unsplash.com/photo-1461023058943-f07a80b404fe?w=400&q=80",
      "https://images.unsplash.com/photo-1514432324607-09f9a7955663?w=400&q=80",
      "https://images.unsplash.com/photo-1501339846619-4666599fc1d3?w=400&q=80",
    ],
  },
  {
    id: "velvet",
    name: "Velvet Fashion",
    category: { uz: "Moda va stil", ru: "Мода и стиль" },
    handle: "@velvet.fashion",
    followers: "103K",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    posts: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&q=80",
    ],
  },
];

type Project = (typeof projects)[0];

function InstagramScreen({
  project,
  locale,
}: {
  project: Project;
  locale: "uz" | "ru";
}) {
  const { t } = useLanguage();

  return (
    <div className="flex h-full flex-col bg-white text-black">
      <div className="flex items-center justify-between px-5 pt-2.5 pb-1">
        <span className="text-[10px] font-semibold">9:41</span>
        <span className="text-[10px] font-semibold">100%</span>
      </div>

      <div className="px-3.5 pt-1.5 pb-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold">{project.handle}</span>
          <div className="flex gap-2.5">
            <Send size={16} />
            <div className="relative">
              <Heart size={16} />
              <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[7px] font-bold text-white">
                3
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-pink-500 ring-offset-1">
            <Image src={project.image} alt={project.name} fill className="object-cover" />
          </div>
          <div className="flex flex-1 justify-around text-center">
            <div>
              <div className="text-xs font-bold">342</div>
              <div className="text-[10px] text-neutral-500">{t.projects.posts}</div>
            </div>
            <div>
              <div className="text-xs font-bold">{project.followers}</div>
              <div className="text-[10px] text-neutral-500">{t.projects.followers}</div>
            </div>
            <div>
              <div className="text-xs font-bold">891</div>
              <div className="text-[10px] text-neutral-500">{t.projects.following}</div>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <div className="text-[10px] font-semibold">{project.name}</div>
          <div className="text-[9px] text-neutral-600">
            {project.category[locale]} · {t.projects.managedBy}
          </div>
        </div>
      </div>

      <div className="flex border-t border-neutral-200">
        <button className="flex flex-1 items-center justify-center border-b-2 border-black py-1.5">
          <Grid3X3 size={14} />
        </button>
        <button className="flex flex-1 items-center justify-center py-1.5 text-neutral-400">
          <Clapperboard size={14} />
        </button>
        <button className="flex flex-1 items-center justify-center py-1.5 text-neutral-400">
          <UserSquare2 size={14} />
        </button>
      </div>

      <div className="grid flex-1 grid-cols-3 gap-[1px] bg-neutral-200">
        {project.posts.map((post, i) => (
          <div key={i} className="relative aspect-square bg-neutral-100">
            <Image src={post} alt="" fill className="object-cover" sizes="120px" />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-around border-t border-neutral-200 py-2">
        <Grid3X3 size={18} />
        <div className="h-5 w-5 rounded-md border-2 border-black" />
        <MessageCircle size={18} />
        <Heart size={18} />
      </div>
    </div>
  );
}

function PhoneMockup({
  project,
  locale,
}: {
  project: Project;
  locale: "uz" | "ru";
}) {
  return (
    <div className="mx-4 w-[260px] shrink-0 md:w-[280px] lg:w-[300px]">
      <p className="mb-4 text-center text-sm font-medium text-ink-muted">
        {project.name}
      </p>
      <div className="relative mx-auto aspect-[300/620] w-full">
        {/* iPhone frame from provided mockup style */}
        <div className="absolute inset-0 rounded-[2.8rem] border-[3px] border-neutral-800 bg-neutral-900 p-[6px] shadow-2xl shadow-black/10">
          <div className="relative h-full overflow-hidden rounded-[2.4rem] bg-black">
            <InstagramScreen project={project} locale={locale} />
          </div>
        </div>
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-[6px] z-10 h-[22px] w-[72px] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  );
}

export default function Projects() {
  const { t, locale } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, inViewProps);

  const carouselItems = [...projects, ...projects];

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
          {carouselItems.map((project, i) => (
            <PhoneMockup
              key={`${project.id}-${i}`}
              project={project}
              locale={locale}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
