import { CharactersMotion } from "@/components/characters/CharactersMotion";
import { CharacterHeader } from "@/components/characters/CharacterHeader";
import { CharacterExplorer } from "@/components/characters/CharacterExplorer";

export function CharacterArchive() {
  return (
    <CharactersMotion>
      <main className="relative mx-auto w-full max-w-[1440px] px-6 pb-36 pt-32 sm:px-10 lg:px-16 lg:pt-40 xl:px-24">
        <CharacterHeader />
        <CharacterExplorer />
      </main>
    </CharactersMotion>
  );
}