import type { RankingRecord } from "@/data/ranking";

export function RankingMeta({ record }: { record: RankingRecord }) {
  const components = [
    { label: "Academic Ability", grade: record.academicGrade, score: record.academicScore },
    { label: "Physical Ability", grade: record.physicalGrade, score: record.physicalScore },
    { label: "Adaptability", grade: record.adaptabilityGrade, score: record.adaptabilityScore },
    { label: "Social Contribution", grade: record.socialContributionGrade, score: record.socialContributionScore },
  ];

  return (
    <div className="border-y border-line">
      {/* four component evaluations */}
      <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        {components.map((component) => (
          <div key={component.label} data-ranking-block className="bg-bg p-6 lg:p-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50">
              {component.label}
            </p>
            <p className="mt-5 font-display text-3xl uppercase leading-none text-fg sm:text-4xl">
              {component.grade}
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted/70">
              {component.score} <span className="text-muted/50">pts</span>
            </p>
          </div>
        ))}
      </div>

      {/* overall + sheet metadata */}
      <div
        data-ranking-block
        className="flex flex-col gap-8 px-6 py-6 lg:flex-row lg:items-baseline lg:justify-between lg:px-8"
      >
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50">
            Overall
          </p>
          <p className="mt-3 flex items-baseline gap-4">
            <span className="font-display text-4xl uppercase leading-none text-accent sm:text-5xl">
              {record.overallGrade}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted/70">
              {record.overallScore} <span className="text-muted/50">pts</span>
            </span>
          </p>
        </div>

        <dl className="flex flex-wrap items-baseline gap-x-10 gap-y-2">
          <div className="flex items-baseline gap-3">
            <dt className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50">
              Period
            </dt>
            <dd className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg/85">
              {record.evaluationPeriod}
            </dd>
          </div>
          <div className="flex items-baseline gap-3">
            <dt className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50">
              Record
            </dt>
            <dd className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg/85">
              {record.recordId}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
