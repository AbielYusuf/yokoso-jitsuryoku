import Link from "next/link";
import type { Character } from "@/data/characters";
import { CharacterPortrait } from "@/components/characters/CharacterPortrait";
import { CharacterMeta } from "@/components/characters/CharacterMeta";

type CharacterRecordProps = {
  character: Character;
  index: number;
  /** true when the portrait leads on desktop (text right / portrait left). */
  flip: boolean;
};

export function CharacterRecord({ character, index, flip }: CharacterRecordProps) {
  const order = String(index + 1).padStart(2, "0");

  const textCol = flip ? "lg:col-start-8 lg:col-span-5" : "lg:col-start-2 lg:col-span-5";
  const portraitCol = flip
    ? "lg:col-start-3 lg:col-span-4"
    : "lg:col-start-8 lg:col-span-4";

  return (
    <article
      data-archive-record
      className="group grid grid-cols-12 gap-y-10 border-t border-line py-16 lg:py-24"
    >
      <div className={`col-span-12 ${textCol}`}>
        <p
          data-archive-block
          className="font-mono text-[11px] tabular-nums tracking-[0.2em] text-muted/50"
        >
          {order}
        </p>

        <h2
          data-archive-block
          className="mt-8 font-display text-5xl uppercase leading-[0.95] tracking-[0.02em] text-fg sm:text-6xl lg:text-[4.25rem]"
        >
          <Link
            href={`/characters/${character.id}`}
            className="block transition-[translate] duration-700 ease-out group-hover:translate-x-2 focus-visible:text-accent"
          >
            <span className="block">{character.firstName}</span>
            <span className="block text-muted/85 transition-colors duration-500 group-hover:text-fg">
              {character.lastName}
            </span>
          </Link>
        </h2>

        <p
          data-archive-block
          className="mt-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70"
        >
          <span>Class {character.className}</span>
          <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
          <span>{character.yearLabel}</span>
        </p>

        <CharacterMeta character={character} />

        <p
          data-archive-block
          className="mt-10 max-w-[30ch] font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted/70"
        >
          {character.description}
        </p>
      </div>

      <div className={`col-span-12 ${portraitCol}`}>
        <div data-archive-block className="lg:self-start">
          <CharacterPortrait character={character} />
        </div>
      </div>
    </article>
  );
}