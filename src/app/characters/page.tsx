import type { Metadata } from "next";
import { PAGE_META } from "@/data/site";
import { PlaceholderPage } from "@/components/pages/PlaceholderPage";

export const metadata: Metadata = {
  title: PAGE_META["/characters"].title,
};

export default function CharactersPage() {
  return <PlaceholderPage href="/characters" />;
}