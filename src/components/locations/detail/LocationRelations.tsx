import Link from "next/link";
import type { LocationRecord } from "@/data/locations";
import { EXAMS } from "@/data/exams";
import { DOSSIERS } from "@/data/dossiers";

type RelatedRecord = {
  id: string;
  href: string;
  title: string;
  recordId: string;
  type: "Exam" | "Dossier";
};

export function LocationRelations({ location }: { location: LocationRecord }) {
  const exams: RelatedRecord[] = (location.relatedExamIds ?? []).flatMap((id) => {
    const exam = EXAMS.find((record) => record.id === id);
    return exam
      ? [{ id, href: `/exams/${id}`, title: exam.title, recordId: exam.recordId, type: "Exam" as const }]
      : [];
  });
  const dossiers: RelatedRecord[] = (location.relatedDossierIds ?? []).flatMap((id) => {
    const dossier = DOSSIERS.find((record) => record.id === id);
    return dossier
      ? [{ id, href: `/dossiers/${id}`, title: dossier.title, recordId: dossier.recordId, type: "Dossier" as const }]
      : [];
  });
  const relations = [...exams, ...dossiers];

  if (relations.length === 0) return null;

  return (
    <section data-location-detail aria-labelledby="related-archive-heading">
      <div className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
        <h2 id="related-archive-heading" className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70">
          Related Archive
        </h2>
        <span className="font-mono text-[9px] tabular-nums tracking-[0.22em] text-muted/40">
          {String(relations.length).padStart(2, "0")} records
        </span>
      </div>
      <ul>
        {relations.map((relation) => (
          <li key={`${relation.type}-${relation.id}`} className="border-b border-line">
            <Link
              href={relation.href}
              className="group/relation grid gap-2 py-5 focus-visible:text-accent sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
            >
              <span className="font-display text-xl uppercase leading-none tracking-[0.02em] text-fg transition-[translate] duration-700 group-hover/relation:translate-x-2 sm:text-2xl">
                {relation.title}
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-muted/50 group-hover/relation:text-accent">
                {relation.type} // {relation.recordId}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
