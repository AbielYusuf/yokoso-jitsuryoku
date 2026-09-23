import type { Metadata } from "next";
import { PAGE_META } from "@/data/site";
import { LocationArchive } from "@/components/locations/LocationArchive";

export const metadata: Metadata = {
  title: PAGE_META["/locations"].title,
  description: PAGE_META["/locations"].note,
};

export default function LocationsPage() {
  return <LocationArchive />;
}
