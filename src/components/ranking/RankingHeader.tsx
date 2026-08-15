import { SectionLabel } from "@/components/common/SectionLabel";

export function RankingHeader() {
  return (
    <header>
      <SectionLabel data-ranking-label>
        Overall Ability Assessment // ANHS
      </SectionLabel>

      <h1 className="mt-8">
        <span className="block overflow-hidden pb-1">
          <span
            data-ranking-title
            className="block font-display text-6xl uppercase leading-none tracking-[0.02em] sm:text-7xl lg:text-[6rem]"
          >
            OAA
          </span>
        </span>
      </h1>

      <p
        data-ranking-sub
        className="mt-8 max-w-[30rem] font-display text-xl italic leading-snug tracking-[0.01em] text-muted sm:text-2xl"
      >
        Individual Academic Evaluation — the school's Overall Ability
        Assessment, recorded at the beginning of Year 2.
      </p>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted/60">
        An indexed evaluation sheet. Not a complete school-wide ranking.
      </p>
    </header>
  );
}
