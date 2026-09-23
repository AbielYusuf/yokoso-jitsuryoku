import { SectionLabel } from "@/components/common/SectionLabel";

export function LocationHeader() {
  return (
    <header>
      <SectionLabel data-location-label>ANHS Environment Index // Site Documentation</SectionLabel>
      <h1 className="mt-8 overflow-hidden pb-1">
        <span
          data-location-title
          className="block font-display text-6xl uppercase leading-none tracking-[0.02em] sm:text-7xl lg:text-[6rem]"
        >
          Locations
        </span>
      </h1>
      <p
        data-location-sub
        className="mt-8 max-w-[34rem] font-display text-xl italic leading-snug tracking-[0.01em] text-muted sm:text-2xl"
      >
        Architectural records of the environments that shape life inside and beyond ANHS.
      </p>
    </header>
  );
}
