import type { ExamRecord } from "@/data/exams";

export function ExamRules({ exam }: { exam: ExamRecord }) {
  return (
    <section aria-labelledby="rules-heading" className="border-t border-line">
      <h2
        id="rules-heading"
        data-exd-block
        className="py-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70"
      >
        Rules
      </h2>

      <ol className="border-t border-line">
        {exam.rulesSummary.map((rule, index) => (
          <li
            key={index}
            data-exd-block
            className="flex items-baseline gap-6 border-b border-line py-4"
          >
            <span className="font-mono text-[10px] tabular-nums tracking-[0.2em] text-muted/50">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted/80">
              {rule}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
