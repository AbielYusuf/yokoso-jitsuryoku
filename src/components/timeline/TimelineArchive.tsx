import { TIMELINE } from "@/data/timeline";
import { TimelineMotion } from "@/components/timeline/TimelineMotion";
import { TimelineHeader } from "@/components/timeline/TimelineHeader";
import { TimelineRecord } from "@/components/timeline/TimelineRecord";

export function TimelineArchive() {
  return (
    <TimelineMotion>
      <main className="relative mx-auto w-full max-w-[1440px] px-6 pb-36 pt-32 sm:px-10 lg:px-16 lg:pt-40 xl:px-24">
        <TimelineHeader />

        <section
          aria-label="Chronological institutional log"
          className="mt-20 lg:mt-28"
        >
          <div className="relative">
            <span
              data-timeline-rail
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-8 left-0 w-px bg-line"
            />
            {TIMELINE.map((record) => (
              <TimelineRecord key={record.id} record={record} />
            ))}
          </div>
        </section>
      </main>
    </TimelineMotion>
  );
}