"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { LocationRecord } from "@/data/locations";

type LocationImageProps = {
  location: LocationRecord;
  priority?: boolean;
  className?: string;
  showRecordId?: boolean;
};

export function LocationImage({
  location,
  priority = false,
  className = "",
  showRecordId = true,
}: LocationImageProps) {
  const [failed, setFailed] = useState(false);
  const hasImage = Boolean(location.image) && !failed;

  useEffect(() => {
    setFailed(false);
  }, [location.image]);

  return (
    <div
      data-location-image
      className={`relative overflow-hidden border border-line bg-bg-elev ${className}`}
    >
      {hasImage ? (
        <Image
          src={location.image}
          alt={`${location.title} environment`}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 62vw"
          onError={() => setFailed(true)}
          className="object-cover grayscale transition duration-1000 ease-out group-hover:scale-[1.015] group-hover:grayscale-0"
        />
      ) : (
        <div
          role="img"
          aria-label={`${location.title} environment image pending`}
          className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(145deg,rgba(255,255,255,0.025),transparent_55%)]"
        >
          <span className="absolute inset-x-0 top-1/2 h-px bg-line" />
          <span className="absolute inset-y-0 left-1/2 w-px bg-line" />
          <span className="relative border border-line bg-bg px-4 py-3 font-mono text-[8px] uppercase tracking-[0.28em] text-muted/45">
            Environment Record Pending
          </span>
        </div>
      )}

      {showRecordId && (
        <span className="absolute bottom-3 left-3 font-mono text-[8px] uppercase tracking-[0.24em] text-muted/50">
          {location.recordId}
        </span>
      )}
    </div>
  );
}
