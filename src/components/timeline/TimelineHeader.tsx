import { SectionLabel } from "@/components/common/SectionLabel";

export function TimelineHeader() {
  return (
    <header>
      <SectionLabel data-timeline-label>Institutional Log // ANHS</SectionLabel>

      <h1 className="mt-8">
        <span className="block overflow-hidden pb-1">
          <span
            data-timeline-title
            className="block font-display text-6xl uppercase leading-none tracking-[0.02em] sm:text-7xl lg:text-[6rem]"
          >
            Timeline
          </span>
        </span>
      </h1>

      <p
        data-timeline-sub
        className="mt-8 max-w-[24rem] font-display text-xl italic leading-snug tracking-[0.01em] text-muted sm:text-2xl"
      >
        A confidential chronology of institutional events, kept in order and held on file.
      </p>
    </header>
  );
}