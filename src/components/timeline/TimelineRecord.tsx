import type { TimelineRecord as TimelineData } from "@/data/timeline";

type TimelineRecordProps = {
  record: TimelineData;
};

export function TimelineRecord({ record }: TimelineRecordProps) {
  return (
    <article
      data-timeline-record
      className="group relative grid grid-cols-12 gap-y-4 border-b border-line py-12 pl-10 last:border-b-0 sm:pl-14 lg:pl-0 lg:py-16"
    >
      {/* entry marker — sits on the vertical rail */}
      <span
        data-timeline-block
        className="absolute left-0 top-16 -translate-x-1/2 lg:top-[4.25rem]"
      >
        <span
          aria-hidden="true"
          className="block h-2 w-2 border border-line-strong bg-bg transition-colors duration-500 group-hover:border-accent"
        />
      </span>

      {/* date / year */}
      <div className="col-span-12 lg:col-span-3 lg:col-start-2 lg:pr-10 lg:text-right">
        <p
          data-timeline-block
          className="font-mono text-sm tabular-nums tracking-[0.2em] text-muted/70 transition-colors duration-500 group-hover:text-accent"
        >
          {record.dateLabel}
        </p>
        <p
          data-timeline-block
          className="mt-2 font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50"
        >
          {record.yearLabel}
        </p>
      </div>

      {/* entry content */}
      <div className="col-span-12 lg:col-span-7 lg:col-start-5">
        <p
          data-timeline-block
          className="font-mono text-[9px] uppercase tracking-[0.35em] text-accent/70"
        >
          {record.category}
        </p>

        <h2 data-timeline-block className="mt-3">
          <span className="block transition-[translate] duration-700 ease-out group-hover:translate-x-2">
            <span className="block font-display text-3xl uppercase leading-[1.02] tracking-[0.02em] text-fg sm:text-4xl lg:text-[2.75rem]">
              {record.title}
            </span>
          </span>
        </h2>

        <p
          data-timeline-block
          className="mt-6 max-w-[52ch] font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted/70"
        >
          {record.description}
        </p>

        <p
          data-timeline-block
          className="mt-8 font-mono text-[9px] uppercase tracking-[0.3em] text-muted/40"
        >
          {record.recordId}
        </p>
      </div>
    </article>
  );
}