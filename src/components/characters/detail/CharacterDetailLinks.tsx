import Link from "next/link";
import type { Character } from "@/data/characters";
import { getClassById } from "@/lib/records";

export function CharacterDetailLinks({ character }: { character: Character }) {
  const klass = character.classId ? getClassById(character.classId) : undefined;

  return (
    <nav aria-label="Related records" className="border-t border-line pt-8">
      {klass ? (
        <Link
          href={`/classes/${klass.id}`}
          className="group/link inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70 transition-colors duration-500 hover:text-accent focus-visible:text-accent"
        >
          <span>Class {klass.name}</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-500 ease-out group-hover/link:translate-x-1"
          >
            →
          </span>
        </Link>
      ) : (
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted/50">
          Related records: none on file
        </p>
      )}
    </nav>
  );
}