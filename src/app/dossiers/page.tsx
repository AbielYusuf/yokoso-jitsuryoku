import type { Metadata } from "next";
import { PAGE_META } from "@/data/site";
import { DossierArchive } from "@/components/dossiers/DossierArchive";

export const metadata: Metadata = {
  title: PAGE_META["/dossiers"].title,
  description: PAGE_META["/dossiers"].note,
};

export default function DossiersPage() {
  return <DossierArchive />;
}
