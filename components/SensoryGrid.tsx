import { SectionHeading } from "./SectionHeading";
import { FoodJournal } from "./FoodJournal";
import { VibeCarousel } from "./VibeCarousel";
import { SoundscapeCollective } from "./SoundscapeCollective";

/**
 * Section 4 — Sensory Exploration Grid.
 * Three quiet senses in three columns: sight (journal), mood (carousel),
 * sound (collective).
 */
export function SensoryGrid() {
  return (
    <section id="explore" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Explore by Sense"
          title={
            <>
              A place for the <em className="text-amber-soft not-italic">other</em>{" "}
              five senses.
            </>
          }
          description="Food logged by the minute, moods you scroll with your hand, and the city's own soundtrack — field recordings from downtown, no studio, no algorithm."
        />

        <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          <FoodJournal />
          <VibeCarousel />
          <SoundscapeCollective />
        </div>
      </div>
    </section>
  );
}
