"use client";

import { useState } from "react";
import { Check, CloudRain, Camera, Coffee, Sunrise, Palette, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export interface Quest {
  id: string;
  icon: LucideIcon;
  title: string;
  detail: string;
  points: number;
  progress: number;
}

const DEFAULT_QUESTS: Quest[] = [
  { id: "dumplings", icon: Sparkles, title: "Find the Best Dumplings", detail: "Chinatown & downtown counter spots. No chains, no lines.", points: 40, progress: 65 },
  { id: "city-fog", icon: CloudRain, title: "Photograph City Fog at Dawn", detail: "Before 8 AM, when downtown towers touch the morning mist.", points: 25, progress: 30 },
  { id: "coffee-corner", icon: Coffee, title: "Log a Quiet Coffee Corner", detail: "A seat with no outlet drama in your local downtown roastery.", points: 15, progress: 90 },
  { id: "sunrise", icon: Sunrise, title: "Catch Sunrise Over Main Street", detail: "The east side of the avenue in any major city, weekdays.", points: 20, progress: 10 },
  { id: "mural", icon: Palette, title: "Discover a Hidden Alley Mural", detail: "Tucked behind the main avenue. Not the tourist queue.", points: 30, progress: 45 },
];

interface QuestBoardProps {
  quests?: Quest[];
}

/**
 * The Downtown Quest Board — gentle, offline, gamified errands across US cities.
 * Progress bars are thin, numbers are small, and nothing nags.
 */
export function QuestBoard({ quests = DEFAULT_QUESTS }: QuestBoardProps) {
  const [done, setDone] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="quests" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_100%,rgba(245,158,11,0.05),transparent_70%)]" />
      <div className="relative mx-auto max-w-[1100px] px-5 md:px-10 lg:px-12">
        <SectionHeading
          eyebrow="The Quest Board"
          title={
            <>
              Small errands across <em className="text-amber-soft not-italic">America's streets</em>.
            </>
          }
          description="Offline tasks that get you out the door in any big city with a quiet reason. Earn quiet points, not badges that ping."
        />

        <div className="mt-14 space-y-3 md:mt-16">
          {quests.map((quest, i) => {
            const Icon = quest.icon;
            const isDone = done.has(quest.id);
            return (
              <Reveal key={quest.id} delay={0.05 * i}>
                <button
                  onClick={() => toggle(quest.id)}
                  className={`group flex w-full items-center gap-5 rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isDone
                      ? "border-amber-glow/25 bg-amber-glow/[0.05]"
                      : "border-white/[0.06] bg-night-800/50 hover:border-white/[0.12]"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isDone
                        ? "bg-amber-glow text-night-950"
                        : "bg-night-700 text-night-300 group-hover:text-amber-soft"
                    }`}
                  >
                    {isDone ? <Check size={19} strokeWidth={2.5} /> : <Icon size={19} strokeWidth={1.8} />}
                  </span>

                  <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <span className="flex items-baseline justify-between gap-3">
                      <span className={`text-[15px] font-medium ${isDone ? "text-amber-soft/80" : "text-night-100"}`}>
                        {quest.title}
                      </span>
                      <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.15em] text-night-500">
                        {quest.points} pts
                      </span>
                    </span>
                    <span className="text-[13px] text-night-400">{quest.detail}</span>
                    <span className="mt-1 h-[3px] w-full overflow-hidden rounded-full bg-night-700">
                      <span
                        className={`block h-full rounded-full transition-all duration-700 ${
                          isDone
                            ? "bg-gradient-to-r from-amber-300 to-orange-400/60"
                            : "bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500"
                        }`}
                        style={{ width: `${isDone ? 100 : quest.progress}%` }}
                      />
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-8 text-center">
          <p className="text-[12px] text-night-500">
            <Camera size={12} className="mr-1.5 inline text-amber-glow/70" />
            Quests sync to your phone when you're offline — that's the point.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
