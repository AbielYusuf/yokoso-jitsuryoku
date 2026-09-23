import Link from "next/link";
import type { LocationRecord as LocationData } from "@/data/locations";
import { LocationImage } from "@/components/locations/LocationImage";

export function LocationRecord({ location, index }: { location: LocationData; index: number }) {
  const position = index % 4;
  const wide = position === 0 || position === 3;
  const placement = {
    0: "lg:col-span-7",
    1: "lg:col-span-4 lg:col-start-9 lg:mt-24",
    2: "lg:col-span-4 lg:mt-12",
    3: "lg:col-span-7 lg:col-start-6",
  }[position];

  return (
    <article data-location-item className={`group min-w-0 ${placement}`}>
      <Link
        href={`/locations/${location.id}`}
        className="block focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent"
        aria-label={`Open ${location.title} location record`}
      >
        <LocationImage
          location={location}
          priority={index === 0}
          showRecordId={false}
          className={`aspect-[16/10] w-full ${wide ? "lg:aspect-[16/11]" : "lg:aspect-[4/5]"}`}
        />

        <div data-location-meta className="pt-5">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-[8px] uppercase tracking-[0.26em] text-muted/50 sm:text-[9px]">
            <span>{String(index + 1).padStart(2, "0")} // {location.category}</span>
            <span>{location.recordId}</span>
          </div>

          <div className="mt-4 flex items-end justify-between gap-6 border-b border-line pb-5 transition-colors duration-500 group-hover:border-accent/35">
            <div className="min-w-0">
              <h2 className="font-display text-3xl uppercase leading-none tracking-[0.02em] text-fg transition-[color,translate] duration-700 ease-out group-hover:translate-x-1 sm:text-4xl">
                {location.title}
              </h2>
              {location.japaneseTitle && (
                <p className="mt-3 font-jp text-[9px] tracking-[0.32em] text-muted/40">
                  {location.japaneseTitle}
                </p>
              )}
            </div>
            <span
              aria-hidden="true"
              className="mb-1 h-px w-8 shrink-0 bg-accent/55 transition-[width] duration-700 group-hover:w-12"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
