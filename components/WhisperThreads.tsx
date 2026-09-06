"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Whisper {
  name: string;
  time: string;
  text: string;
}

const POST = {
  author: "Maya",
  time: "9:12 PM",
  text: "Window table. Rain on the glass, coffee cooling slow. Nobody is filming this.",
};

const DEFAULT_THREAD: Whisper[] = [
  { name: "Jonah", time: "9:14 PM", text: "That corner is perfect at this hour. Same chair, same rain." },
  { name: "Rosa", time: "9:20 PM", text: "The barista adds a cardamom twist after 9. Ask." },
  { name: "Felix", time: "9:31 PM", text: "Left a zine on the windowsill if you want it. Blue cover." },
  { name: "Maya", time: "9:40 PM", text: "Found it. Taking it home — thank you." },
  { name: "Priya", time: "10:02 PM", text: "This thread is why I love this place. No noise, just notes." },
];

interface WhisperThreadsProps {
  whispers?: Whisper[];
}

/**
 * "Whisper Threads" — a comment section that unfolds in place.
 * No modals, no badges: replies appear inline with a soft height animation.
 */
export function WhisperThreads({ whispers = DEFAULT_THREAD }: WhisperThreadsProps) {
  const [visible, setVisible] = useState(2);
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded((e) => !e);
    setVisible(expanded ? 2 : whispers.length);
  };

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-night-800/60 p-6 backdrop-blur sm:p-7">
      {/* The seed post */}
      <div className="flex gap-3.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-night-600 text-xs font-semibold text-night-100">
          M
        </span>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-night-100">
            {POST.author}
            <span className="ml-2 text-[11px] font-normal text-night-500">{POST.time}</span>
          </p>
          <p className="text-[15px] leading-relaxed text-night-200">{POST.text}</p>
        </div>
      </div>

      {/* Muted thread */}
      <div className="mt-5 space-y-4 border-t border-white/[0.05] pt-5">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-night-500">
          Whisper thread
        </p>

        <AnimatePresence initial={false}>
          {whispers.slice(0, visible).map((w) => (
            <motion.div
              key={w.name + w.time}
              initial={{ opacity: 0, height: 0, y: -6 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -6 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-3 overflow-hidden"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-night-700 text-[11px] font-medium text-night-300">
                {w.name[0]}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-xs text-night-400">
                  {w.name}
                  <span className="ml-2 text-[10px] text-night-500">{w.time}</span>
                </p>
                <p className="text-[13px] leading-relaxed text-night-300">{w.text}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <button
          onClick={toggle}
          className="inline-flex items-center gap-1.5 text-[12px] font-medium text-night-400 transition-colors hover:text-amber-soft"
        >
          {expanded ? "Fold the thread" : `Whisper back · ${whispers.length} present`}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={13} />
          </motion.span>
        </button>
      </div>
    </div>
  );
}
