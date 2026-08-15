import type { ExamRecord } from "@/data/exams";
import { getClassById } from "@/lib/records";

export function ExamDetailMeta({ exam }: { exam: ExamRecord }) {
  const victor = exam.victorClassId ? getClassById(exam.victorClassId) : undefined;

  const rows: Array<{ label: string; value: string }> = [
    { label: "Category", value: exam.category },
    { label: "Season", value: `Season ${exam.season}` },
    { label: "Episodes", value: exam.episodeRange },
    { label: "Year", value: exam.yearLabel },
    { label: "Semester", value: exam.semester },
    { label: "Expulsion Risk", value: exam.expulsionRisk ? "Yes" : "No" },
    { label: "Status", value: exam.status },
    { label: "Record", value: exam.recordId },
    { label: "Evidence", value: exam.evidenceLevel },
    ...(victor ? [{ label: "Victor", value: victor.name }] : []),
  ];

  return (
    <dl className="grid grid-cols-2 gap-x-6 border-t border-line sm:grid-cols-3">
      {rows.map((row) => (
        <div key={row.label} data-exd-block className="border-b border-line py-4">
          <dt className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50">
            {row.label}
          </dt>
          <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fg/85">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
