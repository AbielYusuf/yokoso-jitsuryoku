import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CLASSES } from "@/data/classes";
import { PAGE_META } from "@/data/site";
import { getClassById } from "@/lib/records";
import { ClassDetail } from "@/components/classes/detail/ClassDetail";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return CLASSES.map((klass) => ({ id: klass.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const klass = getClassById(id);
  if (!klass) return {};
  return {
    title: `Class ${klass.name} — ${PAGE_META["/classes"].title}`,
  };
}

export default async function ClassDetailPage({ params }: PageProps) {
  const { id } = await params;
  const klass = getClassById(id);
  if (!klass) notFound();

  return <ClassDetail klass={klass} />;
}