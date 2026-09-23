import { LOCATIONS } from "@/data/locations";
import { LocationHeader } from "@/components/locations/LocationHeader";
import { LocationRecord } from "@/components/locations/LocationRecord";
import { LocationsMotion } from "@/components/locations/LocationsMotion";

export function LocationArchive() {
  return (
    <LocationsMotion>
      <main className="relative mx-auto w-full max-w-[1440px] px-6 pb-36 pt-32 sm:px-10 lg:px-16 lg:pt-40 xl:px-24">
        <LocationHeader />
        <div className="mt-20 lg:mt-28">
          {LOCATIONS.map((location, index) => (
            <LocationRecord key={location.id} location={location} index={index} />
          ))}
        </div>
      </main>
    </LocationsMotion>
  );
}
