import Link from "next/link";
import type { LocationRecord as LocationData } from "@/data/locations";
import { LocationImage } from "@/components/locations/LocationImage";

export function LocationRecord({ location, index }: { location: LocationData; index: number }) {
  const imageFirst = index % 2 === 0;

  return (
    <article
      data-location-item
      className="group grid grid-cols-12 gap-x-8 gap-y-8 border-t border-line py-12 lg:gap-x-14 lg:py-20"
    >
      <Link
        href={`/locations/${location.id}`}
        className={`relative col-span-12 block focus-visible:outline-offset-4 lg:col-span-7 ${
          imageFirst ? "lg:col-start-1" : "lg:col-start-6 lg:row-start-1"
        }`}
        aria-label={`Open ${location.title} location record`}
      >
        <LocationImage
          location={location}
          priority={index === 0}
          className="aspect-[16/10] w-full"
        />
      </Link>

      <div
        data-location-meta
        className={`col-span-12 self-center lg:col-span-4 ${
          imageFirst ? "lg:col-start-9" : "lg:col-start-2 lg:row-start-1"
        }`}
      >
        <div className="flex items-center justify-between gap-6 font-mono text-[9px] uppercase tracking-[0.28em] text-muted/55">
          <span>{String(index + 1).padStart(2, "0")} // {location.category}</span>
          <span>{location.recordId}</span>
        </div>

        <h2 className="mt-7">
          <Link href={`/locations/${location.id}`} className="block focus-visible:text-accent">
            <span className="block font-display text-4xl uppercase leading-[0.95] tracking-[0.02em] text-fg transition-[translate] duration-700 ease-out group-hover:translate-x-2 sm:text-5xl">
              {location.title}
            </span>
          </Link>
        </h2>

        {location.japaneseTitle && (
          <p className="mt-4 font-jp text-[10px] tracking-[0.35em] text-muted/45">
            {location.japaneseTitle}
          </p>
        )}

        <p className="mt-7 max-w-[48ch] font-mono text-[11px] leading-relaxed tracking-[0.07em] text-muted/70">
          {location.summary}
        </p>

        <div className="mt-8 flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.28em] text-muted/55 transition-colors duration-500 group-hover:text-fg">
          <span>Open Location</span>
          <span aria-hidden="true" className="h-px w-10 bg-accent/55 transition-[width] duration-700 group-hover:w-16" />
          <span aria-hidden="true" className="text-accent">▸</span>
        </div>
      </div>
    </article>
  );
}
