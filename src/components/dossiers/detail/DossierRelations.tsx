import Link from "next/link";
import type { DossierRecord } from "@/data/dossiers";
import { getCharacterById, getClassById, getExamById } from "@/lib/records";

type Relation = {
  id: string;
  href: string;
  primary: string;
  secondary: string;
};

function RelationGroup({ title, relations }: { title: string; relations: Relation[] }) {
  if (relations.length === 0) return null;

  return (
    <section data-dossier-detail aria-labelledby={`dossier-${title.toLowerCase()}-heading`}>
      <div className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
        <h2
          id={`dossier-${title.toLowerCase()}-heading`}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70"
        >
          Related {title}
        </h2>
        <span className="font-mono text-[9px] tabular-nums tracking-[0.22em] text-muted/40">
          {String(relations.length).padStart(2, "0")} records
        </span>
      </div>

      <ul>
        {relations.map((relation) => (
          <li key={relation.id} className="border-b border-line">
            <Link
              href={relation.href}
              className="group/relation flex items-baseline justify-between gap-6 py-4 focus-visible:text-accent"
            >
              <span className="font-display text-xl uppercase leading-none tracking-[0.02em] text-fg transition-[translate] duration-700 group-hover/relation:translate-x-2 sm:text-2xl">
                {relation.primary}
              </span>
              <span className="shrink-0 font-mono text-[8px] uppercase tracking-[0.24em] text-muted/50 group-hover/relation:text-accent">
                {relation.secondary}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function DossierRelations({ dossier }: { dossier: DossierRecord }) {
  const characters = dossier.relatedCharacterIds.flatMap((id) => {
    const character = getCharacterById(id);
    return character
      ? [{ id, href: `/characters/${id}`, primary: `${character.lastName} ${character.firstName}`, secondary: character.recordId }]
      : [];
  });
  const classes = (dossier.relatedClassIds ?? []).flatMap((id) => {
    const klass = getClassById(id);
    return klass
      ? [{ id, href: `/classes/${id}`, primary: `Class ${klass.name}`, secondary: klass.recordId }]
      : [];
  });
  const exams = (dossier.relatedExamIds ?? []).flatMap((id) => {
    const exam = getExamById(id);
    return exam
      ? [{ id, href: `/exams/${id}`, primary: exam.title, secondary: exam.recordId }]
      : [];
  });

  return (
    <div className="grid gap-14 lg:grid-cols-2 lg:gap-x-16">
      <RelationGroup title="Characters" relations={characters} />
      <div className="grid content-start gap-14">
        <RelationGroup title="Classes" relations={classes} />
        <RelationGroup title="Exams" relations={exams} />
      </div>
    </div>
  );
}
