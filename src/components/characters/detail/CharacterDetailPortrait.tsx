import type { Character } from "@/data/characters";
import { CharacterPortrait } from "@/components/characters/CharacterPortrait";

export function CharacterDetailPortrait({ character }: { character: Character }) {
  return (
    <aside aria-label="Portrait of the subject" className="relative">
      <p
        data-cd-block
        className="font-mono text-[9px] uppercase tracking-[0.35em] text-muted/50"
      >
        Identification // Portrait
      </p>

      <div data-cd-portrait className="mt-6">
        <CharacterPortrait character={character} />
      </div>

      {/* registration marks */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-3 top-[3.75rem] h-2.5 w-2.5 border-l border-t border-accent/50"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 top-[3.75rem] h-2.5 w-2.5 border-r border-t border-accent/50"
      />

      <p
        data-cd-block
        className="mt-6 font-mono text-[9px] uppercase tracking-[0.3em] text-muted/40"
      >
        Image on file: {character.image ? "Attached" : "Pending"}
      </p>
    </aside>
  );
}