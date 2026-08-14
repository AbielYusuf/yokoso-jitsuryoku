import { ArchiveBackLink } from "@/components/common/ArchiveBackLink";
import { SectionLabel } from "@/components/common/SectionLabel";
import type { ExamRecord } from "@/data/exams";

export function ExamDetailHeader({ exam }: { exam: ExamRecord }) {
  return (
    <header className="grid grid-cols-12 gap-y-10">
      <div className="col-span-12 lg:col-span-7 lg:col-start-2">
        <div data-exd-back>
          <ArchiveBackLink href="/exams" label="Examination Archive" />
        </div>

        <SectionLabel data-exd-label className="mt-10">
          Examination File // ANHS
        </SectionLabel>

        <h1 data-exd-title className="mt-8">
          <span className="block overflow-hidden pb-1">
            <span
              data-exd-title-line
              className="block font-display text-5xl uppercase leading-[0.95] tracking-[0.02em] text-fg sm:text-6xl lg:text-[4.5rem]"
            >
              {exam.title}
            </span>
          </span>
        </h1>

        <p
          data-exd-block
          className="mt-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70"
        >
          <span>{exam.type}</span>
          <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
          <span>{exam.yearLabel}</span>
        </p>

        <p
          data-exd-block
          className="mt-10 max-w-[46ch] font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted/70"
        >
          {exam.description}
        </p>
      </div>
    </header>
  );
}