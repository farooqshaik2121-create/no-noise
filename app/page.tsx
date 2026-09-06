import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { MapSection } from "@/components/MapSection";
import { SensoryGrid } from "@/components/SensoryGrid";
import { HiddenCityFlip } from "@/components/HiddenCityFlip";
import { QuestBoard } from "@/components/QuestBoard";
import { Footer } from "@/components/Footer";

/**
 * Three banded "rooms", each carrying its own neon tint over a vivid base:
 *   1. Violet Dusk  (indigo → violet → deep purple) — Hero · Philosophy
 *   2. Ember Orange (amber → rust → ember black)    — Map · Sensory
 *   3. Teal Lantern (teal → pine → black-green)     — Hidden City · Quests · Footer
 * Joins are soft: each room opens with a crossfade from the previous room's
 * tail color, so colours melt into one another instead of meeting at a line.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-night-950 text-night-100 antialiased">
      <SiteNav />

      {/* Room 1 — Violet Dusk */}
      <div className="relative isolate bg-[linear-gradient(180deg,#4338ca_0%,#2e1065_38%,#150a30_100%)]">
        <div className="pointer-events-none absolute -left-24 -top-24 -z-10 h-[460px] w-[560px] rounded-full bg-violet-400/30 blur-[130px]" />
        <div className="pointer-events-none absolute -right-20 top-1/3 -z-10 h-[380px] w-[480px] rounded-full bg-indigo-400/25 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 -z-10 h-[300px] w-[420px] rounded-full bg-fuchsia-500/20 blur-[130px]" />
        <Hero />
        <Philosophy />
      </div>

      {/* Room 2 — Ember Orange */}
      <div className="relative isolate bg-[linear-gradient(180deg,#b45309_0%,#7c2d12_40%,#200a01_100%)]">
        {/* Crossfade from Room 1's tail color (#150a30) — no hard join */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#150a30] via-[#150a30]/75 to-transparent"
        />
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[400px] w-[640px] -translate-x-1/2 rounded-full bg-amber-400/30 blur-[140px]" />
        <div className="pointer-events-none absolute -right-28 top-1/4 -z-10 h-[420px] w-[500px] rounded-full bg-orange-400/30 blur-[130px]" />
        <div className="pointer-events-none absolute -left-28 bottom-0 -z-10 h-[360px] w-[460px] rounded-full bg-yellow-400/20 blur-[130px]" />
        <div className="relative">
          <MapSection />
          <SensoryGrid />
        </div>
      </div>

      {/* Room 3 — Teal Lantern */}
      <div className="relative isolate bg-[linear-gradient(180deg,#0f766e_0%,#134e4a_40%,#041f1d_100%)]">
        {/* Crossfade from Room 2's tail color (#200a01) — no hard join */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#200a01] via-[#200a01]/75 to-transparent"
        />
        <div className="pointer-events-none absolute -right-24 top-2/3 -z-10 h-[380px] w-[500px] rounded-full bg-cyan-400/20 blur-[130px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 bg-[radial-gradient(70%_100%_at_50%_100%,rgba(251,146,60,0.22),transparent_70%)]" />
        <div className="relative">
          <HiddenCityFlip />
          <QuestBoard />
          <Footer />
        </div>
      </div>
    </main>
  );
}
