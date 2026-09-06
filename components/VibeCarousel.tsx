"use client";

import { useState } from "react";
import { Coffee, Footprints, Eye, UtensilsCrossed, CloudRain, Cake, Waves } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

export interface Vibe {
  id: string;
  label: string;
  icon: LucideIcon;
}

const DEFAULT_VIBES: Vibe[] = [
  { id: "coffee", label: "Quiet Coffee", icon: Coffee },
  { id: "stroll", label: "Evening Stroll", icon: Footprints },
  { id: "art", label: "Hidden Art", icon: Eye },
  { id: "ramen", label: "Late Ramen", icon: UtensilsCrossed },
  { id: "fog", label: "Fog Walks", icon: CloudRain },
  { id: "bakery", label: "Corner Bakery", icon: Cake },
  { id: "water", label: "By the Water", icon: Waves },
];

interface VibeCarouselProps {
  vibes?: Vibe[];
}

/**
 * Vibe Carousel — a horizontal, human-paced row of mood categories.
 * Scrolls sideways without auto-play, autoplay, or urgency.
 */
export function VibeCarousel({ vibes = DEFAULT_VIBES }: VibeCarouselProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Reveal delay={0.08} className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-night-800/50 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-night-100">
          Vibe Carousel
        </h3>
        <span className="text-[11px] text-night-500">scroll · no autoplay</span>
      </div>

      <div className="no-scrollbar -mx-2 flex flex-1 items-center gap-2.5 overflow-x-auto px-2 pb-1">
        {vibes.map((vibe) => {
          const Icon = vibe.icon;
          const isActive = active === vibe.id;
          return (
            <button
              key={vibe.id}
              onClick={() => setActive(isActive ? null : vibe.id)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                isActive
                  ? "border-amber-glow/60 bg-amber-glow/10 text-amber-soft shadow-[0_0_18px_rgba(245,158,11,0.15)]"
                  : "border-white/[0.08] bg-night-900/60 text-night-300 hover:border-night-500 hover:text-night-100"
              }`}
            >
              <Icon size={14} strokeWidth={2} />
              {vibe.label}
            </button>
          );
        })}
      </div>

      <p className="mt-5 min-h-[3.5rem] text-[13px] leading-relaxed text-night-400">
        {active
          ? vibes.find((v) => v.id === active)?.label
          : "Pick a mood. We'll surface slow places for it — never a feed."}
      </p>
    </Reveal>
  );
}
