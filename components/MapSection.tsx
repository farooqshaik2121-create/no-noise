"use client";

import dynamic from "next/dynamic";
import { Map as MapIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { SpatialDiscovery } from "./SpatialDiscovery";

// Leaflet requires `window` at import time — load only in the browser.
const AmbientMap = dynamic(() => import("./AmbientMap").then((m) => m.AmbientMap), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] w-full animate-pulse items-center justify-center rounded-2xl border border-white/[0.07] bg-night-800/50 text-sm text-night-400 md:h-[480px]">
      Warming up the ambient map…
    </div>
  ),
});

/**
 * Section 3 — Spatial Discovery (Eat, Sleep, Fun).
 * Includes 3-Column Pillar Cards (EAT, SLEEP, FUN) & Interactive Ambient Map Feed.
 */
export function MapSection() {
  return (
    <section id="map" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_40%_at_50%_0%,rgba(245,158,11,0.05),transparent_70%)]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Section 3: Spatial Discovery"
          title={
            <>
              Explore the city by <em className="text-amber-soft not-italic">Eat, Sleep, and Fun</em>.
            </>
          }
          description="Discover quiet dining spots, peaceful boutique hotel stays, and serene urban parks across America's major downtowns. Strictly non-alcoholic, authentic local finds."
        />

        {/* 3-Column Discovery Grid: EAT, SLEEP, FUN */}
        <SpatialDiscovery />

        {/* Interactive Ambient Map Section */}
        <div className="mt-20">
          <Reveal delay={0.1}>
            <div className="mb-6 flex flex-col gap-1">
              <h3 className="text-xl font-semibold tracking-wide text-night-50">
                Interactive Ambient Map
              </h3>
              <p className="text-sm text-night-400">
                Soft glowing heatmaps replace intrusive location markers across New York, Austin, Chicago, Seattle, and Greenville.
              </p>
            </div>
            <AmbientMap />
          </Reveal>

          <Reveal delay={0.18} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              "No location sharing",
              "No friend radar",
              "No streaks to feed",
              "Strictly non-alcoholic",
              "Just authentic city mood",
            ].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-night-800/60 px-4 py-2 text-[12px] text-night-300"
              >
                <MapIcon size={12} className="text-amber-glow/80" />
                {chip}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
