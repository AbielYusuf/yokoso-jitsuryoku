import { SectionLabel } from "@/components/common/SectionLabel";

export function RankingHeader() {
  return (
    <header>
      <SectionLabel data-ranking-label>Academic Evaluation // ANHS</SectionLabel>

      <h1 className="mt-8">
        <span className="block overflow-hidden pb-1">
          <span
            data-ranking-title
            className="block font-display text-6xl uppercase leading-none tracking-[0.02em] sm:text-7xl lg:text-[6rem]"
          >
            Ranking
          </span>
        </span>
      </h1>

      <p
        data-ranking-sub
        className="mt-8 max-w-[24rem] font-display text-xl italic leading-snug tracking-[0.01em] text-muted sm:text-2xl"
      >
        An indexed evaluation sheet — standing measured, order recorded, merit alone decides.
      </p>
    </header>
  );
}