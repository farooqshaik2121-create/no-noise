"use client";

import Image from "next/image";
import { Utensils, Bed, Compass, Star, MapPin, Clock } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export interface PillarSpot {
  name: string;
  category: string;
  tag: string;
  time: string;
  description: string;
  image: string;
  location: string;
}

const EAT_SPOTS: PillarSpot[] = [
  {
    name: "Midnight Ramen Co.",
    category: "Late Night Dining",
    tag: "Quiet Counter Seat",
    time: "Open till 2 AM",
    description: "Steaming artisan broth, silent counter dining, and zero loud bar noise.",
    image: "/images/eat-ramen.jpg",
    location: "SoHo • New York",
  },
  {
    name: "Main Street Bakery",
    category: "Artisan Bakery",
    tag: "Morning Pastries",
    time: "6:00 AM – 4:00 PM",
    description: "Warm golden croissants and sourdough straight from the stone oven.",
    image: "/images/eat-bakery.jpg",
    location: "Downtown • Greenville",
  },
  {
    name: "The Corner Espresso",
    category: "Specialty Coffee",
    tag: "Rainy Window",
    time: "7:00 AM – 7:00 PM",
    description: "Single-origin filter coffee, cozy nooks, and smooth ambient music.",
    image: "/images/eat-espresso.jpg",
    location: "South Congress • Austin",
  },
];

const SLEEP_SPOTS: PillarSpot[] = [
  {
    name: "The Poinsett Boutique",
    category: "Luxury Boutique Stay",
    tag: "Acoustic Insulation",
    time: "24/7 Concierge",
    description: "Softly lit rooms, blackout linen shades, and serene city views.",
    image: "/images/sleep-poinsett.jpg",
    location: "Historic Quarter • Chicago",
  },
  {
    name: "River Walk Lofts",
    category: "Urban Apartments",
    tag: "Exposed Brick",
    time: "Self Check-in",
    description: "Spacious loft suites overlooking quiet river paths and evening lights.",
    image: "/images/sleep-river-lofts.jpg",
    location: "Pioneer Square • Seattle",
  },
  {
    name: "Heritage Inn & Suites",
    category: "Historic Sanctuary",
    tag: "Courtyard Garden",
    time: "Quiet Hours 10 PM",
    description: "Preserved architecture, cozy fireplace lobby, and peaceful courtyard.",
    image: "/images/sleep-heritage-inn.jpg",
    location: "North End • Boston",
  },
];

const FUN_SPOTS: PillarSpot[] = [
  {
    name: "Falls Park Walkway",
    category: "Scenic Nature Trail",
    tag: "Lantern Lit",
    time: "Open Sunrise to Dusk",
    description: "Lush green trails and stone bridges over waterfalls right in downtown.",
    image: "/images/fun-falls-park.jpg",
    location: "Main Street • Greenville",
  },
  {
    name: "Acoustic Art Market",
    category: "Street Culture",
    tag: "Local Makers",
    time: "Fri & Sat Evenings",
    description: "Low-key evening gallery stroll with warm string lights and handmade art.",
    image: "/images/fun-art-market.jpg",
    location: "Arts District • San Francisco",
  },
  {
    name: "Botanical Garden Trails",
    category: "Quiet Urban Flora",
    tag: "Tropical Glasshouse",
    time: "8:00 AM – 6:00 PM",
    description: "Tranquil greenhouse pathways surrounded by ferns and natural sunlight.",
    image: "/images/fun-botanical.jpg",
    location: "Central Park • New York",
  },
];

export function SpatialDiscovery() {
  return (
    <div className="mt-16 space-y-12">
      {/* 3-Column Pillar Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Column 1: EAT */}
        <Reveal delay={0.05} className="flex flex-col gap-5">
          <div className="flex items-center gap-3 border-b border-amber-glow/20 pb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-glow/10 text-amber-glow shadow-[0_0_12px_rgba(245,158,11,0.2)]">
              <Utensils size={20} />
            </span>
            <div>
              <h3 className="text-xl font-semibold tracking-wider text-night-50">EAT</h3>
              <p className="text-[12px] text-night-400">Quiet dining, bakeries & espresso nooks</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {EAT_SPOTS.map((spot) => (
              <SpotCard key={spot.name} spot={spot} />
            ))}
          </div>
        </Reveal>

        {/* Column 2: SLEEP */}
        <Reveal delay={0.1} className="flex flex-col gap-5">
          <div className="flex items-center gap-3 border-b border-amber-glow/20 pb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-glow/10 text-amber-glow shadow-[0_0_12px_rgba(245,158,11,0.2)]">
              <Bed size={20} />
            </span>
            <div>
              <h3 className="text-xl font-semibold tracking-wider text-night-50">SLEEP</h3>
              <p className="text-[12px] text-night-400">Boutique hotels & peaceful urban lofts</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {SLEEP_SPOTS.map((spot) => (
              <SpotCard key={spot.name} spot={spot} />
            ))}
          </div>
        </Reveal>

        {/* Column 3: FUN */}
        <Reveal delay={0.15} className="flex flex-col gap-5">
          <div className="flex items-center gap-3 border-b border-amber-glow/20 pb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-glow/10 text-amber-glow shadow-[0_0_12px_rgba(245,158,11,0.2)]">
              <Compass size={20} />
            </span>
            <div>
              <h3 className="text-xl font-semibold tracking-wider text-night-50">FUN</h3>
              <p className="text-[12px] text-night-400">Parks, lantern walks & acoustic culture</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {FUN_SPOTS.map((spot) => (
              <SpotCard key={spot.name} spot={spot} />
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function SpotCard({ spot }: { spot: PillarSpot }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#18181B] p-4 transition-all duration-300 hover:border-amber-glow/40 hover:bg-[#202024] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      {/* Thumbnail Image */}
      <div className="relative h-44 w-full overflow-hidden rounded-xl bg-night-900">
        <Image
          src={spot.image}
          alt={spot.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-transparent opacity-80" />
        
        {/* Top Badges */}
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded-full border border-amber-glow/30 bg-night-950/80 px-2.5 py-1 text-[10px] font-medium tracking-wide text-amber-soft backdrop-blur-md">
            {spot.tag}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="mt-3.5 space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-base font-medium text-night-50 group-hover:text-amber-soft">
            {spot.name}
          </h4>
          <span className="flex items-center gap-1 text-[11px] text-amber-glow/90 font-mono">
            <Star size={12} className="fill-amber-glow text-amber-glow" />
            4.9
          </span>
        </div>

        <p className="text-[12px] leading-relaxed text-night-300">
          {spot.description}
        </p>

        <div className="mt-3 flex items-center justify-between border-t border-white/[0.05] pt-2.5 text-[11px] text-night-400">
          <span className="flex items-center gap-1">
            <MapPin size={12} className="text-amber-glow/70" />
            {spot.location}
          </span>
          <span className="flex items-center gap-1 font-mono text-[10px] text-night-400">
            <Clock size={11} className="text-night-500" />
            {spot.time}
          </span>
        </div>
      </div>
    </div>
  );
}
