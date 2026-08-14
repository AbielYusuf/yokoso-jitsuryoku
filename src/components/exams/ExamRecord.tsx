import type { ExamRecord as ExamData } from "@/data/exams";
import { ExamMeta } from "@/components/exams/ExamMeta";

type ExamRecordProps = {
  exam: ExamData;
  index: number;
};

export function ExamRecord({ exam, index }: ExamRecordProps) {
  const order = String(index + 1).padStart(2, "0");

  // register rhythm — the title column shifts on alternating rows
  const titleCol = index % 2 === 1 ? "lg:col-start-5" : "lg:col-start-4";

  return (
    <article
      data-exam-record
      className="group grid grid-cols-12 gap-y-6 border-t border-line py-14 lg:py-16"
    >
      {/* index — left rail */}
      <div className="col-span-12 lg:col-span-2 lg:col-start-2 lg:self-center">
        <span
          data-exam-block
          className="font-mono text-sm tabular-nums tracking-[0.2em] text-muted/60 transition-colors duration-500 group-hover:text-accent"
        >
          {order}
        </span>
      </div>

      {/* title — main area */}
      <div className={`col-span-12 lg:col-span-5 lg:self-center ${titleCol}`}>
        <h2 data-exam-block>
          <span className="block transition-[translate] duration-700 ease-out group-hover:translate-x-2">
            <span className="block font-display text-3xl uppercase leading-[1.02] tracking-[0.02em] text-fg sm:text-4xl lg:text-[2.75rem]">
              {exam.title}
            </span>
          </span>
        </h2>

        <p
          data-exam-block
          className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70"
        >
          <span>{exam.type}</span>
          <span aria-hidden="true" className="h-px w-5 bg-accent/50" />
          <span>{exam.yearLabel}</span>
        </p>
      </div>

      {/* metadata — right */}
      <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-center">
        <ExamMeta exam={exam} />
      </div>
    </article>
  );
}