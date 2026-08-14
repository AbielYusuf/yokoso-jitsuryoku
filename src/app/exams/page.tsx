import type { Metadata } from "next";
import { PAGE_META } from "@/data/site";
import { ExamArchive } from "@/components/exams/ExamArchive";

export const metadata: Metadata = {
  title: PAGE_META["/exams"].title,
  description: PAGE_META["/exams"].note,
};

export default function ExamsPage() {
  return <ExamArchive />;
}