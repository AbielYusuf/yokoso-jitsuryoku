import type { ClassRecord } from "@/data/classes";

export function ClassMeta({ klass }: { klass: ClassRecord }) {
  const rows: Array<{ label: string; value: string }> = [
    { label: "Status", value: klass.status },
    { label: "Class Rank", value: klass.rank },
    { label: "Homeroom", value: klass.homeroom ?? "—" },
    { label: "Record", value: klass.recordId },
  ];

  return (
    <dl data-class-block className="border-t border-line">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-baseline justify-between gap-8 border-b border-line py-4"
        >
          <dt className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50">
            {row.label}
          </dt>
          <dd
            className={`font-mono text-[10px] uppercase tracking-[0.2em] text-fg/85 transition-colors duration-500 ${
              row.label === "Status" ? "group-hover:text-accent" : ""
            }`}
          >
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}