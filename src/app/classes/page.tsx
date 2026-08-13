import type { Metadata } from "next";
import { PAGE_META } from "@/data/site";
import { ClassArchive } from "@/components/classes/ClassArchive";

export const metadata: Metadata = {
  title: PAGE_META["/classes"].title,
  description: PAGE_META["/classes"].note,
};

export default function ClassesPage() {
  return <ClassArchive />;
}