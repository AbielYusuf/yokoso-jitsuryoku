import type { ClassRecord } from "@/data/classes";

export function ClassDetailMeta({ klass }: { klass: ClassRecord }) {
  const rows = [
    { label: "Class", value: klass.name },
    { label: "Year", value: klass.yearLabel },
    { label: "Rank", value: klass.rank },
    { label: "Class Points", value: klass.classPoints == null ? "Pending" : String(klass.classPoints) },
    { label: "Homeroom", value: klass.homeroom ?? "Pending" },
    { label: "Status", value: klass.status },
    { label: "Record", value: klass.recordId },
  ];

  return (
    <dl className="grid grid-cols-2 gap-x-6 border-t border-line sm:grid-cols-3">
      {rows.map((row) => (
        <div key={row.label} data-cls-block className="border-b border-line py-4">
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