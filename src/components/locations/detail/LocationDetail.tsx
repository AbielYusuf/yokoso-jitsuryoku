import type { LocationRecord } from "@/data/locations";
import { ArchiveBackLink } from "@/components/common/ArchiveBackLink";
import { SectionLabel } from "@/components/common/SectionLabel";
import { LocationImage } from "@/components/locations/LocationImage";
import { LocationRelations } from "@/components/locations/detail/LocationRelations";
import { LocationDetailMotion } from "@/components/locations/detail/LocationDetailMotion";

export function LocationDetail({ location }: { location: LocationRecord }) {
  const metadata = [
    ["Category", location.category],
    ["Evidence", location.evidenceBoundary],
    ["Record", location.recordId],
  ];

  return (
    <LocationDetailMotion>
      <main className="relative mx-auto w-full max-w-[1440px] px-6 pb-36 pt-32 sm:px-10 lg:px-16 lg:pt-36 xl:px-24">
        <header className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <div data-location-detail-back>
              <ArchiveBackLink href="/locations" label="Location Archive" />
            </div>
            <SectionLabel data-location-detail-label className="mt-10">
              Environmental Record // ANHS
            </SectionLabel>
            <h1 className="mt-8 overflow-hidden pb-1">
              <span
                data-location-detail-title
                className="block font-display text-5xl uppercase leading-[0.95] tracking-[0.02em] text-fg sm:text-6xl lg:text-[5rem]"
              >
                {location.title}
              </span>
            </h1>
            {location.japaneseTitle && (
              <p data-location-detail className="mt-5 font-jp text-xs tracking-[0.4em] text-muted/45">
                {location.japaneseTitle}
              </p>
            )}
          </div>
        </header>

        <div data-location-detail-hero className="group mt-12 lg:mt-16">
          <LocationImage location={location} priority className="aspect-[16/8] min-h-[15rem] w-full sm:min-h-0" />
        </div>

        <div className="mt-14 grid grid-cols-12 gap-y-14 lg:mt-20">
          <section data-location-detail className="col-span-12 lg:col-span-6 lg:col-start-2">
            <p className="font-display text-2xl italic leading-snug text-fg sm:text-3xl">
              {location.summary}
            </p>
            <p className="mt-8 max-w-[62ch] font-mono text-[11px] leading-[1.9] tracking-[0.07em] text-muted/70">
              {location.description}
            </p>
            {location.notableAreas && location.notableAreas.length > 0 && (
              <div className="mt-9 border-t border-line pt-5">
                <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-muted/45">Notable Areas</p>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {location.notableAreas.map((area) => (
                    <li key={area} className="border border-line px-3 py-2 font-mono text-[9px] uppercase tracking-[0.24em] text-fg/80">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <dl data-location-detail className="col-span-12 border-t border-line lg:col-span-3 lg:col-start-9">
            {metadata.map(([label, value]) => (
              <div key={label} className="grid gap-2 border-b border-line py-4">
                <dt className="font-mono text-[8px] uppercase tracking-[0.28em] text-muted/45">{label}</dt>
                <dd className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-fg/80">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <LocationRelations location={location} />
          </div>
        </div>
      </main>
    </LocationDetailMotion>
  );
}
