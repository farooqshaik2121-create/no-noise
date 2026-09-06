"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";
import { KaleidoscopeGrid } from "./KaleidoscopeGrid";

const HERO_TILES = [
  { src: "/images/nn-1.jpg", alt: "Rainy downtown street at night", tall: true },
  { src: "/images/nn-2.jpg", alt: "Steaming bowl of ramen at a counter" },
  { src: "/images/nn-3.jpg", alt: "Quiet café interior at night" },
  { src: "/images/nn-4.jpg", alt: "Foggy morning street, bakery glow" },
  { src: "/images/nn-5.jpg", alt: "Late-night bakery window", tall: true },
  { src: "/images/nn-6.jpg", alt: "Hand-painted neon on brick" },
  { src: "/images/nn-7.jpg", alt: "Filter coffee, steam in amber light" },
  { src: "/images/nn-8.jpg", alt: "Quiet streetlamp and bench at dusk", tall: true },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Kaleidoscope backdrop */}
      <div className="absolute inset-0 opacity-40">
        <KaleidoscopeGrid tiles={HERO_TILES} className="h-full" />
      </div>

      {/* Vignette + legibility overlays — tuned so the violet room glows through */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,10,48,0.6)_0%,rgba(21,10,48,0.25)_35%,rgba(21,10,48,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(78%_58%_at_50%_44%,rgba(8,5,22,0.55),transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_38%,rgba(245,158,11,0.12),transparent_70%)]" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 pb-20 pt-32 text-center md:px-10"
      >
        <motion.p
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-night-300 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-glow shadow-[0_0_8px_rgba(245,158,11,0.9)]" />
          A digital third place
        </motion.p>

        <motion.h1
          variants={item}
          className="text-[2.9rem] font-semibold leading-[1.02] tracking-tight text-night-50 sm:text-7xl md:text-[5.4rem]"
        >
          <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,146,60,0.35)]">
            No Noise.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-[48ch] text-base leading-relaxed text-night-200 md:text-lg"
        >
          The quiet antidote to loud social media. A time-capsule of genuine
          local moments across America’s major downtowns — quiet coffee nooks,
          late-night eateries, peaceful streetscapes, and hidden city spots.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#trial"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-7 py-3.5 text-[15px] font-bold text-night-950 shadow-[0_0_44px_rgba(251,146,60,0.4)] transition-all hover:from-amber-300 hover:to-orange-400 hover:shadow-[0_0_64px_rgba(251,146,60,0.6)]"
          >
            <Sparkles size={17} strokeWidth={2.2} />
            Take a Free Trial
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#philosophy"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-night-300 transition-colors hover:text-night-50"
          >
            Explore quietly
            <ArrowDown size={15} className="animate-float-slow" />
          </a>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#150a30] to-transparent" />
    </section>
  );
}
