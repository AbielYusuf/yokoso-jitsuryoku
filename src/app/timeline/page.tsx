import type { Metadata } from "next";
import { PAGE_META } from "@/data/site";
import { TimelineArchive } from "@/components/timeline/TimelineArchive";

export const metadata: Metadata = {
  title: PAGE_META["/timeline"].title,
  description: PAGE_META["/timeline"].note,
};

export default function TimelinePage() {
  return <TimelineArchive />;
}