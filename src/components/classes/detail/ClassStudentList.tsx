import Link from "next/link";
import type { ClassRecord } from "@/data/classes";
import { getCharactersByIds } from "@/lib/records";

/**
 * Student roster for a class. Renders only records that resolve from existing
 * data (Class → Students → Character Detail). When no roster is on file yet a
 * restrained pending state is shown instead of fabricated students.
 */
export function ClassStudentList({ klass }: { klass: ClassRecord }) {
  const students = getCharactersByIds(klass.studentIds ?? []);

  return (
    <section aria-labelledby="roster-heading" className="border-t border-line">
      <div className="flex items-baseline justify-between gap-6 py-4">
        <h2
          id="roster-heading"
          data-cls-block
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70"
        >
          Student Roster
        </h2>
        <p
          data-cls-block
          className="font-mono text-[10px] tabular-nums tracking-[0.2em] text-muted/50"
        >
          {students.length} on file
        </p>
      </div>

      {students.length > 0 ? (
        <ol className="border-t border-line">
          {students.map((student) => (
            <li key={student.id} data-cls-block className="border-b border-line">
              <Link
                href={`/characters/${student.id}`}
                className="group/item flex items-baseline justify-between gap-6 py-4 focus-visible:text-accent"
              >
                <span className="font-mono text-[10px] tabular-nums tracking-[0.2em] text-muted/50 transition-colors duration-500 group-hover/item:text-accent">
                  {student.recordId}
                </span>
                <span className="font-display text-xl uppercase leading-none tracking-[0.02em] text-fg transition-[translate] duration-700 ease-out group-hover/item:translate-x-2 sm:text-2xl">
                  {student.lastName} {student.firstName}
                </span>
                <span className="hidden font-mono text-[9px] uppercase tracking-[0.25em] text-muted/50 sm:block">
                  {student.className}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <div data-cls-block className="border-t border-line py-10">
          <p className="font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted/50">
            Roster pending — no student records on file for this class.
          </p>
        </div>
      )}
    </section>
  );
}