import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ChronologicalWave } from "./ChronologicalWave";
import { WhisperThreads } from "./WhisperThreads";

/**
 * Section 2 — The Philosophy.
 * Left: The Chronological Wave. Right: Whisper Threads.
 * A split-screen compare/contrast of what "social" should feel like.
 */
export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 lg:px-12">
        <SectionHeading
          eyebrow="The Philosophy"
          title={
            <>
              Built to be <em className="text-amber-soft not-italic">left open</em>,
              not to be <em className="text-amber-soft not-italic">refreshed</em>.
            </>
          }
          description="Two feeds, one idea: slow time. A timeline with no algorithm above it, and a comment section that whispers instead of shouting."
        />

        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-14">
          {/* Left — the wave */}
          <Reveal className="flex flex-col">
            <div className="mb-2 flex items-baseline justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-night-100">
                The Chronological Wave
              </h3>
              <span className="text-[11px] text-night-500">oldest → newest · no boosts</span>
            </div>
            <p className="mb-4 max-w-[46ch] text-sm leading-relaxed text-night-400">
              What you see is what happened. No ranking, no reordering, no
              "engagement score" deciding your night.
            </p>
            <ChronologicalWave />
          </Reveal>

          {/* Right — whisper threads */}
          <Reveal delay={0.12} className="flex flex-col justify-center">
            <div className="mb-4">
              <h3 className="mb-1 text-sm font-semibold uppercase tracking-[0.24em] text-night-100">
                Whisper Threads
              </h3>
              <p className="max-w-[46ch] text-sm leading-relaxed text-night-400">
                Replies unfold in place, like passing a note. No pop-ups, no
                notification storms.
              </p>
            </div>
            <WhisperThreads />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
