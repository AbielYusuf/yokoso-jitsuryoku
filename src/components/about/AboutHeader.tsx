import { SectionLabel } from "@/components/common/SectionLabel";

export function AboutHeader() {
  return (
    <header>
      <SectionLabel data-about-label>Institutional Profile // ANHS</SectionLabel>

      <h1 className="mt-8">
        <span className="block overflow-hidden pb-1">
          <span
            data-about-title
            className="block font-display text-6xl uppercase leading-none tracking-[0.02em] sm:text-7xl lg:text-[6rem]"
          >
            About
          </span>
        </span>
      </h1>

      <p
        data-about-sub
        className="mt-8 max-w-[24rem] font-display text-xl italic leading-snug tracking-[0.01em] text-muted sm:text-2xl"
      >
        The file behind the archive — the institution, its systems, and the office that keeps the records.
      </p>
    </header>
  );
}