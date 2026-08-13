import type { Metadata } from "next";
import { PAGE_META } from "@/data/site";
import { RankingArchive } from "@/components/ranking/RankingArchive";

export const metadata: Metadata = {
  title: PAGE_META["/ranking"].title,
  description: PAGE_META["/ranking"].note,
};

export default function RankingPage() {
  return <RankingArchive />;
}