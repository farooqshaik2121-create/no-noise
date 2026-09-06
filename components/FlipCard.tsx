"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { RotateCw } from "lucide-react";

export interface FlipCardData {
  frontTitle: string;
  frontLabel: string;
  icon: LucideIcon;
  sideB: string;
}

interface FlipCardProps {
  data: FlipCardData;
}

/**
 * Hidden City Flip — a geometric card that turns to reveal "Side B":
 * the hidden neighborhood detail. Hover flips on desktop; click flips anywhere.
 */
export function FlipCard({ data }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const Icon = data.icon;

  return (
    <div className="h-72 [perspective:1400px]">
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setFlipped((f) => !f);
        }}
      >
        {/* Side A */}
        <div className="absolute inset-0 flex flex-col items-start justify-between rounded-2xl border border-white/[0.07] bg-gradient-to-br from-night-800 via-night-850 to-night-900 p-6 [backface-visibility:hidden]">
          <div className="flex w-full items-start justify-between">
            <span className="rounded-full border border-amber-glow/30 bg-amber-glow/[0.07] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-amber-soft">
              {data.frontLabel}
            </span>
            <RotateCw size={14} className="text-night-500 transition-colors group-hover:text-amber-glow" />
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-glow/10 text-amber-soft">
              <Icon size={20} strokeWidth={1.8} />
            </span>
            <h4 className="text-xl font-semibold tracking-tight text-night-50">{data.frontTitle}</h4>
          </div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-night-500">
            hover · side B →
          </p>
        </div>

        {/* Side B */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-orange-300/40 bg-gradient-to-br from-amber-300 via-orange-500 to-[#9a3412] p-6 text-night-950 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-[inset_0_0_60px_rgba(255,237,213,0.25)]">
          <span className="rounded-full border border-night-950/20 bg-night-950/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-night-900">
            Side B
          </span>
          <p className="text-[15px] font-medium leading-relaxed text-night-50">{data.sideB}</p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-amber-100/90">
            known to locals · now to you
          </p>
        </div>
      </motion.div>
    </div>
  );
}
