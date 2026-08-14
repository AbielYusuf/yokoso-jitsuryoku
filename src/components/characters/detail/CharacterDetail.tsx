import type { Character } from "@/data/characters";
import { CharacterDetailMotion } from "@/components/characters/detail/CharacterDetailMotion";
import { CharacterDetailHeader } from "@/components/characters/detail/CharacterDetailHeader";
import { CharacterDetailMeta } from "@/components/characters/detail/CharacterDetailMeta";
import { CharacterDetailLinks } from "@/components/characters/detail/CharacterDetailLinks";

export function CharacterDetail({ character }: { character: Character }) {
  return (
    <CharacterDetailMotion>
      <main className="relative mx-auto w-full max-w-[1440px] px-6 pb-36 pt-32 sm:px-10 lg:px-16 lg:pt-36 xl:px-24">
        <CharacterDetailHeader character={character} />

        <section
          aria-label="Record details"
          className="mt-16 grid grid-cols-12 gap-y-12 lg:mt-24"
        >
          <div className="col-span-12 lg:col-span-9 lg:col-start-2">
            <CharacterDetailMeta character={character} />
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-2">
            <CharacterDetailLinks character={character} />
          </div>
        </section>
      </main>
    </CharacterDetailMotion>
  );
}