import type { Metadata } from "next";
import { PAGE_META } from "@/data/site";
import { CharacterArchive } from "@/components/characters/CharacterArchive";

export const metadata: Metadata = {
  title: PAGE_META["/characters"].title,
  description: PAGE_META["/characters"].note,
};

export default function CharactersPage() {
  return <CharacterArchive />;
}