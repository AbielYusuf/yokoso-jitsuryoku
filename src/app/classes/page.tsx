import type { Metadata } from "next";
import { PAGE_META } from "@/data/site";
import { PlaceholderPage } from "@/components/pages/PlaceholderPage";

export const metadata: Metadata = {
  title: PAGE_META["/classes"].title,
};

export default function ClassesPage() {
  return <PlaceholderPage href="/classes" />;
}