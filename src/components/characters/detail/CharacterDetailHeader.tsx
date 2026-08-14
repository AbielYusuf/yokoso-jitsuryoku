import { ArchiveBackLink } from "@/components/common/ArchiveBackLink";
import { SectionLabel } from "@/components/common/SectionLabel";
import type { Character } from "@/data/characters";
import { CharacterDetailPortrait } from "@/components/characters/detail/CharacterDetailPortrait";

export function CharacterDetailHeader({ character }: { character: Character }) {
  return (
    <header className="grid grid-cols-12 gap-y-12">
      <div className="col-span-12 lg:col-span-7 lg:col-start-2">
        <div data-cd-back>
          <ArchiveBackLink href="/characters" label="Character Archive" />
        </div>

        <SectionLabel data-cd-label className="mt-10">
          Student Record // ANHS
        </SectionLabel>

        <h1 data-cd-title className="mt-8">
          <span className="block overflow-hidden pb-1">
            <span
              data-cd-title-line
              className="block font-display text-6xl uppercase leading-[0.95] tracking-[0.02em] text-fg sm:text-7xl lg:text-[5.5rem]"
            >
              {character.firstName}
            </span>
          </span>
          <span className="block overflow-hidden pb-1">
            <span
              data-cd-title-line
              className="block font-display text-6xl uppercase leading-[0.95] tracking-[0.02em] text-muted/85 sm:text-7xl lg:text-[5.5rem]"
            >
              {character.lastName}
            </span>
          </span>
        </h1>

        <p
          data-cd-jp
          className="mt-5 font-jp text-xl leading-relaxed tracking-[0.15em] text-muted/80 sm:text-2xl"
        >
          {character.jp}
        </p>

        <p
          data-cd-block
          className="mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70"
        >
          <span>Class {character.className}</span>
          <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
          <span>{character.yearLabel}</span>
        </p>

        <p
          data-cd-block
          className="mt-10 max-w-[46ch] font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted/70"
        >
          {character.description}
        </p>
      </div>

      <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-start">
        <CharacterDetailPortrait character={character} />
      </div>
    </header>
  );
}