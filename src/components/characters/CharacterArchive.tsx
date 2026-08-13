import { CHARACTERS } from "@/data/characters";
import { CharactersMotion } from "@/components/characters/CharactersMotion";
import { CharacterHeader } from "@/components/characters/CharacterHeader";
import { CharacterRecord } from "@/components/characters/CharacterRecord";

export function CharacterArchive() {
  return (
    <CharactersMotion>
      <main className="relative mx-auto w-full max-w-[1440px] px-6 pb-36 pt-32 sm:px-10 lg:px-16 lg:pt-40 xl:px-24">
        <CharacterHeader />

        <div className="mt-20 lg:mt-28">
          {CHARACTERS.map((character, index) => (
            <CharacterRecord
              key={character.id}
              character={character}
              index={index}
              flip={index % 2 === 1}
            />
          ))}
        </div>
      </main>
    </CharactersMotion>
  );
}