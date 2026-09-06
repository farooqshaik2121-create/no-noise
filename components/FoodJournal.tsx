import { Camera } from "lucide-react";
import { Reveal } from "./Reveal";

export interface JournalEntry {
  src: string;
  time: string;
  caption: string;
}

const DEFAULT_ENTRIES: JournalEntry[] = [
  { src: "/images/nn-10.jpg", time: "7:11 AM", caption: "First pull — still warm in the case." },
  { src: "/images/nn-9.jpg", time: "8:02 AM", caption: "Matcha, no rush. Window seat taken." },
  { src: "/images/nn-11.jpg", time: "11:40 PM", caption: "Dumplings at the end of the block." },
];

interface FoodJournalProps {
  entries?: JournalEntry[];
}

/**
 * The Food Journal — tight, time-stamped food photos.
 * A log, not a feed: one line per moment, nothing stacked to scroll.
 */
export function FoodJournal({ entries = DEFAULT_ENTRIES }: FoodJournalProps) {
  return (
    <Reveal className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-night-800/50 p-6">
      <div className="mb-6 flex items-center gap-2.5">
        <Camera size={16} className="text-amber-glow" />
        <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-night-100">
          The Food Journal
        </h3>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6">
        {entries.map((e) => (
          <figure key={e.time} className="group flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/[0.06]">
              <img
                src={e.src}
                alt={e.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <figcaption className="flex flex-col gap-0.5">
              <time className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-glow/80">
                {e.time}
              </time>
              <p className="text-sm leading-snug text-night-200">{e.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Reveal>
  );
}
