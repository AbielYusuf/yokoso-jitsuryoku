import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EXAMS } from "@/data/exams";
import { PAGE_META } from "@/data/site";
import { getExamById } from "@/lib/records";
import { ExamDetail } from "@/components/exams/detail/ExamDetail";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return EXAMS.map((exam) => ({ id: exam.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const exam = getExamById(id);
  if (!exam) return {};
  return {
    title: `${exam.title} — ${PAGE_META["/exams"].title}`,
  };
}

export default async function ExamDetailPage({ params }: PageProps) {
  const { id } = await params;
  const exam = getExamById(id);
  if (!exam) notFound();

  return <ExamDetail exam={exam} />;
}