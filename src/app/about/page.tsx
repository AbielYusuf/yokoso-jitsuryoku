import type { Metadata } from "next";
import { PAGE_META } from "@/data/site";
import { AboutArchive } from "@/components/about/AboutArchive";

export const metadata: Metadata = {
  title: PAGE_META["/about"].title,
  description: PAGE_META["/about"].note,
};

export default function AboutPage() {
  return <AboutArchive />;
}