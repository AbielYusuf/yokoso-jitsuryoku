import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DOSSIERS } from "@/data/dossiers";
import { PAGE_META } from "@/data/site";
import { DossierDetail } from "@/components/dossiers/detail/DossierDetail";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return DOSSIERS.map((dossier) => ({ id: dossier.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const dossier = DOSSIERS.find((record) => record.id === id);
  if (!dossier) return {};
  return { title: `${dossier.title} — ${PAGE_META["/dossiers"].title}` };
}

export default async function DossierDetailPage({ params }: PageProps) {
  const { id } = await params;
  const dossier = DOSSIERS.find((record) => record.id === id);
  if (!dossier) notFound();

  return <DossierDetail dossier={dossier} />;
}
