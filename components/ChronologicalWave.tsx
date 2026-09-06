"use client";

import { motion } from "framer-motion";

export interface WavePost {
  time: string;
  title: string;
  place: string;
}

const DEFAULT_WAVE: WavePost[] = [
  { time: "6:45 AM", title: "Fog & espresso", place: "SoHo • New York" },
  { time: "7:30 AM", title: "First pull from the case", place: "The Loop • Chicago" },
  { time: "12:14 PM", title: "Ramen steam, counter seat 4", place: "South Congress • Austin" },
  { time: "9:05 PM", title: "Harbor lights & quiet bench", place: "Pioneer Square • Seattle" },
];

interface ChronologicalWaveProps {
  posts?: WavePost[];
}

/**
 * "The Chronological Wave" — a quiet, reverse-free timeline across major US downtowns.
 * One post at a time, generous negative space, nothing clamoring for attention.
 */
export function ChronologicalWave({ posts = DEFAULT_WAVE }: ChronologicalWaveProps) {
  return (
    <div className="flex flex-col">
      {posts.map((post, i) => (
        <motion.div
          key={post.title + i}
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex gap-6 border-l border-white/[0.06] py-8 pl-8"
        >
          <span className="absolute -left-[5px] top-9 h-2.5 w-2.5 rounded-full border border-amber-glow bg-night-950 shadow-[0_0_10px_rgba(245,158,11,0.55)]" />
          <div className="flex flex-col gap-1.5">
            <time className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-glow/80">
              {post.time}
            </time>
            <p className="text-lg font-medium leading-snug text-night-100">{post.title}</p>
            <p className="text-sm text-night-400">{post.place}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
