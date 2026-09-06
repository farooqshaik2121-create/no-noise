"use client";

import { useState } from "react";
import { AudioLines, Pause, Play } from "lucide-react";
import { Reveal } from "./Reveal";

export interface Soundscape {
  id: string;
  title: string;
  duration: string;
  bars: number;
}

const DEFAULT_SOUNDSCAPES: Soundscape[] = [
  { id: "rain", title: "Rain on Main St", duration: "1:42", bars: 22 },
  { id: "espresso", title: "Espresso hiss & hum", duration: "0:38", bars: 16 },
  { id: "market", title: "Market at 7 AM", duration: "2:10", bars: 26 },
];

interface SoundscapeCollectiveProps {
  soundscapes?: Soundscape[];
}

/**
 * Soundscape Collective — field recordings from downtown, shown as
 * waveform bars. Playback is local & optional; nothing autoplays.
 */
export function SoundscapeCollective({ soundscapes = DEFAULT_SOUNDSCAPES }: SoundscapeCollectiveProps) {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <Reveal delay={0.16} className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-night-800/50 p-6">
      <div className="mb-6 flex items-center gap-2.5">
        <AudioLines size={16} className="text-amber-glow" />
        <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-night-100">
          Soundscape Collective
        </h3>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4">
        {soundscapes.map((s) => {
          const isPlaying = playing === s.id;
          return (
            <div key={s.id} className="group rounded-xl border border-white/[0.05] bg-night-900/50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium text-night-200">{s.title}</p>
                <button
                  onClick={() => setPlaying(isPlaying ? null : s.id)}
                  aria-label={isPlaying ? `Pause ${s.title}` : `Play ${s.title}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-night-300 transition-all group-hover:border-amber-glow/50 group-hover:text-amber-soft"
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
                </button>
              </div>

              <div className="flex h-8 items-end gap-[3px]">
                {Array.from({ length: s.bars }).map((_, i) => (
                  <span
                    key={i}
                    style={{
                      height: `${18 + ((i * 37) % 72)}%`,
                      animationDelay: `${(i % 9) * 0.09}s`,
                      animationPlayState: isPlaying ? "running" : "paused",
                    }}
                    className={`w-[3px] origin-bottom rounded-full transition-colors ${
                      isPlaying
                        ? "animate-wave bg-amber-glow"
                        : "bg-night-600 group-hover:bg-night-500"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-night-500">
                field recording · {s.duration}
              </p>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
