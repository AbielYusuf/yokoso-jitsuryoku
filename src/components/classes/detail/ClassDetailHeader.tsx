import { ArchiveBackLink } from "@/components/common/ArchiveBackLink";
import { SectionLabel } from "@/components/common/SectionLabel";
import type { ClassRecord } from "@/data/classes";

export function ClassDetailHeader({ klass }: { klass: ClassRecord }) {
  return (
    <header className="grid grid-cols-12 gap-y-10">
      <div className="col-span-12 lg:col-span-7 lg:col-start-2">
        <div data-cls-back>
          <ArchiveBackLink href="/classes" label="Class Register" />
        </div>

        <SectionLabel data-cls-label className="mt-10">
          Class Register // ANHS
        </SectionLabel>

        <h1 data-cls-title className="mt-6">
          <span className="block overflow-hidden pb-1">
            <span
              data-cls-title-line
              className="block font-display text-7xl uppercase leading-[0.9] tracking-[0.01em] text-fg sm:text-8xl lg:text-[9rem]"
            >
              {klass.name}
            </span>
          </span>
        </h1>

        <p
          data-cls-block
          className="mt-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70"
        >
          <span>{klass.yearLabel}</span>
          <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
          <span>
            Rank <span className="text-fg/80">{klass.rank}</span>
          </span>
        </p>

        <p
          data-cls-block
          className="mt-10 max-w-[46ch] font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted/70"
        >
          {klass.description}
        </p>
      </div>
    </header>
  );
}