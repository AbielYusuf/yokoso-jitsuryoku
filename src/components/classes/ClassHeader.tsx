import { SectionLabel } from "@/components/common/SectionLabel";

export function ClassHeader() {
  return (
    <header>
      <SectionLabel data-class-label>Class Register // ANHS</SectionLabel>

      <h1 className="mt-8">
        <span className="block overflow-hidden pb-1">
          <span
            data-class-title
            className="block font-display text-6xl uppercase leading-none tracking-[0.02em] sm:text-7xl lg:text-[6rem]"
          >
            Classes
          </span>
        </span>
      </h1>

      <p
        data-class-sub
        className="mt-8 max-w-[24rem] font-display text-xl italic leading-snug tracking-[0.01em] text-muted sm:text-2xl"
      >
        An indexed record of classroom divisions and academic standing.
      </p>
    </header>
  );
}