"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Ban, Repeat, Heart } from "lucide-react";
import { Reveal } from "./Reveal";

const PROMISES = [
  { icon: Ban, label: "Ad-free" },
  { icon: Repeat, label: "Algorithm-free" },
  { icon: ShieldCheck, label: "No tracking" },
];

export function Footer() {
  return (
    <footer id="trial" className="relative overflow-hidden border-t border-white/[0.05]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_120%,rgba(245,158,11,0.09),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1200px] px-5 py-20 text-center md:px-10 lg:px-12">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.32em] text-amber-glow">
            <span className="h-px w-6 bg-amber-glow/60" />
            The Sign-Off
            <span className="h-px w-6 bg-amber-glow/60" />
          </span>

          <h2 className="mx-auto mt-6 max-w-[22ch] text-3xl font-semibold leading-[1.1] tracking-tight text-night-50 sm:text-5xl">
            No feed. No ads.
            <br />
            <span className="text-amber-soft">Just the quiet.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[52ch] text-[15px] leading-relaxed text-night-300 md:text-base">
            Take a free trial and step into the community, the quests, the map,
            and the quiet. No card, no catch — we don't sell attention because
            we never had any to sell.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10"
          >
            <a
              href="#top"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-9 py-4 text-base font-bold text-night-950 shadow-[0_0_60px_rgba(251,146,60,0.4)] transition-all hover:from-amber-300 hover:to-orange-400 hover:shadow-[0_0_80px_rgba(251,146,60,0.6)]"
            >
              <Sparkles size={18} strokeWidth={2.2} />
              Take a Free Trial
            </a>
          </motion.div>

          <div className="mt-10 flex items-center justify-center gap-8">
            {PROMISES.map((p) => {
              const Icon = p.icon;
              return (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 text-[12px] text-night-400"
                >
                  <Icon size={14} className="text-amber-glow/80" />
                  {p.label}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>

      <div className="relative border-t border-white/[0.04]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-5 py-6 text-[12px] text-night-500 sm:flex-row md:px-10 lg:px-12">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-glow shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
            No Noise — Downtowns Across America
          </span>
          <span className="flex items-center gap-1.5">
            Made quietly, with
            <Heart size={11} className="text-amber-glow/70" />
            for the night shift
          </span>
          <span>© 2026 No Noise</span>
        </div>
      </div>
    </footer>
  );
}
