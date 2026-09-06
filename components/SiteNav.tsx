"use client";

import { Sparkles } from "lucide-react";

const LINKS = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#map", label: "The Map" },
  { href: "#explore", label: "Explore" },
  { href: "#hidden-city", label: "Hidden City" },
  { href: "#quests", label: "Quests" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.04] bg-night-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10 lg:px-12">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-glow opacity-30" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-glow shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-night-100">
            No&nbsp;Noise
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-night-300 transition-colors hover:text-amber-soft"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#trial"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2 text-[12px] font-bold text-night-950 shadow-[0_0_20px_rgba(251,146,60,0.35)] transition-all hover:from-amber-300 hover:to-orange-400 hover:shadow-[0_0_30px_rgba(251,146,60,0.55)]"
        >
          <Sparkles size={13} strokeWidth={2.2} />
          Free Trial
        </a>
      </div>
    </header>
  );
}
