import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { DOSSIERS } from "@/data/dossiers";
import { PAGE_META } from "@/data/site";
import { DossierDetail } from "@/components/dossiers/detail/DossierDetail";

const DOSSIER_ID_REDIRECTS: Readonly<Record<string, string>> = {
  "ryuen-confrontation": "rooftop-incident",
  "kushida-conflict": "class-d-internal-conflict",
  "first-year-threats": "first-year-network",
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return [
    ...DOSSIERS.map((dossier) => ({ id: dossier.id })),
    ...Object.keys(DOSSIER_ID_REDIRECTS).map((id) => ({ id })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const canonicalId = DOSSIER_ID_REDIRECTS[id] ?? id;
  const dossier = DOSSIERS.find((record) => record.id === canonicalId);
  if (!dossier) return {};
  return { title: `${dossier.title} — ${PAGE_META["/dossiers"].title}` };
}

export default async function DossierDetailPage({ params }: PageProps) {
  const { id } = await params;
  const redirectId = DOSSIER_ID_REDIRECTS[id];
  if (redirectId) redirect(`/dossiers/${redirectId}`);

  const dossier = DOSSIERS.find((record) => record.id === id);
  if (!dossier) notFound();

  return <DossierDetail dossier={dossier} />;
}
