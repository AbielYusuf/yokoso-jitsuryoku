import { SectionLabel } from "@/components/common/SectionLabel";

export function CharacterHeader() {
  return (
    <header>
      <SectionLabel data-archive-label>Student Records // ANHS</SectionLabel>

      <h1 className="mt-8">
        <span className="block overflow-hidden pb-1">
          <span data-archive-title className="block font-display text-6xl uppercase leading-none tracking-[0.02em] sm:text-7xl lg:text-[6rem]">
            Characters
          </span>
        </span>
      </h1>

      <p
        data-archive-sub
        className="mt-8 max-w-[24rem] font-display text-xl italic leading-snug tracking-[0.01em] text-muted sm:text-2xl"
      >
        A confidential register of students — each entry reduced to a single metric: merit.
      </p>
    </header>
  );
}