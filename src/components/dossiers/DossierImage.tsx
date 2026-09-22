import Image from "next/image";
import type { DossierRecord } from "@/data/dossiers";

type DossierImageProps = {
  dossier: DossierRecord;
  priority?: boolean;
  className?: string;
};

export function DossierImage({ dossier, priority = false, className = "" }: DossierImageProps) {
  return (
    <div
      data-dossier-image
      className={`relative overflow-hidden border border-line bg-bg-elev ${className}`}
    >
      {dossier.image ? (
        <Image
          src={dossier.image}
          alt={`${dossier.title} dossier image`}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover grayscale transition duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-[1.015]"
        />
      ) : (
        <div
          role="img"
          aria-label={`${dossier.title} dossier image pending`}
          className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(145deg,rgba(255,255,255,0.025),transparent_55%)]"
        >
          <span className="absolute inset-x-0 top-1/2 h-px bg-line" />
          <span className="absolute inset-y-0 left-1/2 w-px bg-line" />
          <span className="relative border border-line bg-bg px-4 py-3 font-mono text-[8px] uppercase tracking-[0.28em] text-muted/45">
            Image Record Pending
          </span>
        </div>
      )}

      <span className="absolute bottom-3 left-3 font-mono text-[8px] uppercase tracking-[0.24em] text-muted/50">
        {dossier.recordId}
      </span>
    </div>
  );
}
