"use client";

import {
  Trees,
  Palette,
  Coffee,
  Droplets,
  UtensilsCrossed,
  Store,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { FlipCard, type FlipCardData } from "./FlipCard";

const HIDDEN_CITY: FlipCardData[] = [
  {
    frontTitle: "New York • Washington Sq",
    frontLabel: "Sight",
    icon: Trees,
    sideB: "The bench behind the fountain at 11 PM — green trees under lamplight and no crowd noise.",
  },
  {
    frontTitle: "Chicago • Loop Alley",
    frontLabel: "Art",
    icon: Palette,
    sideB: "A brick alley mural glowing under the L train bridge at dusk — untouched by tourists.",
  },
  {
    frontTitle: "Seattle • Post Alley",
    frontLabel: "Coffee",
    icon: Coffee,
    sideB: "The roastery's back window. Locals order filter coffee through the hatch at 6:30 AM.",
  },
  {
    frontTitle: "Austin • Lady Bird Lake",
    frontLabel: "Sound",
    icon: Droplets,
    sideB: "At sunset, water ripples and cicadas replace traffic noise just steps from South Congress.",
  },
  {
    frontTitle: "Boston • North End",
    frontLabel: "Taste",
    icon: UtensilsCrossed,
    sideB: "The 24-hour bakery counter's secret: fresh warm cannoli filled to order after midnight.",
  },
  {
    frontTitle: "San Francisco • North Beach",
    frontLabel: "Find",
    icon: Store,
    sideB: "Late-night bookstore alcove where jazz plays soft and strangers pass recommendations.",
  },
];

/**
 * Section 5a — The Hidden City Flip.
 * Geometric cards that turn to reveal Side B of major US downtowns.
 */
export function HiddenCityFlip() {
  return (
    <section id="hidden-city" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 lg:px-12">
        <SectionHeading
          eyebrow="The Hidden City"
          title={
            <>
              Every major US downtown keeps a <em className="text-amber-soft not-italic">second
              side</em>.
            </>
          }
          description="Flip the cards. Side A is the neighborhood name; Side B is the quiet reason locals stay. Hover on desktop, tap anywhere."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {HIDDEN_CITY.map((card, i) => (
            <Reveal key={card.frontTitle} delay={0.05 * (i % 3)}>
              <FlipCard data={card} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
