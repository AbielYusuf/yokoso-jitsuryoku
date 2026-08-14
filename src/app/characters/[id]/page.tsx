import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CHARACTERS } from "@/data/characters";
import { PAGE_META } from "@/data/site";
import { getCharacterById } from "@/lib/records";
import { CharacterDetail } from "@/components/characters/detail/CharacterDetail";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return CHARACTERS.map((character) => ({ id: character.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const character = getCharacterById(id);
  if (!character) return {};
  return {
    title: `${character.lastName} ${character.firstName} — ${PAGE_META["/characters"].title}`,
  };
}

export default async function CharacterDetailPage({ params }: PageProps) {
  const { id } = await params;
  const character = getCharacterById(id);
  if (!character) notFound();

  return <CharacterDetail character={character} />;
}