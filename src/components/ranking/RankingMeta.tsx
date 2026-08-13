import type { RankingRecord } from "@/data/ranking";

export function RankingMeta({ record }: { record: RankingRecord }) {
  const rows: Array<{ label: string; value: string }> = [
    { label: "Status", value: record.status },
    ...(record.score ? [{ label: "Score", value: record.score }] : []),
    { label: "Record", value: record.recordId },
  ];

  return (
    <dl data-ranking-block className="border-t border-line lg:min-w-[13rem]">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-baseline justify-between gap-6 border-b border-line py-3"
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