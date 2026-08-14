import type { ExamRecord } from "@/data/exams";

export function ExamDetailMeta({ exam }: { exam: ExamRecord }) {
  const rows = [
    { label: "Status", value: exam.status },
    { label: "Type", value: exam.type },
    { label: "Year", value: exam.yearLabel },
    ...(exam.result ? [{ label: "Result", value: exam.result }] : []),
    { label: "Record", value: exam.recordId },
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