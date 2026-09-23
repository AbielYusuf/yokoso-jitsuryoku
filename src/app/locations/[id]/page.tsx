import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS } from "@/data/locations";
import { PAGE_META } from "@/data/site";
import { LocationDetail } from "@/components/locations/detail/LocationDetail";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ id: location.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const location = LOCATIONS.find((record) => record.id === id);
  if (!location) return {};
  return { title: `${location.title} — ${PAGE_META["/locations"].title}` };
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { id } = await params;
  const location = LOCATIONS.find((record) => record.id === id);
  if (!location) notFound();

  return <LocationDetail location={location} />;
}
