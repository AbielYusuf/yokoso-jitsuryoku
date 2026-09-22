import Link from "next/link";
import type { DossierRecord as DossierData } from "@/data/dossiers";
import { DossierImage } from "@/components/dossiers/DossierImage";

export function DossierRecord({ dossier, index }: { dossier: DossierData; index: number }) {
  const imageFirst = index % 2 === 0;

  return (
    <article
      data-dossier-item
      className="group grid grid-cols-12 gap-x-8 gap-y-8 border-t border-line py-12 lg:gap-x-14 lg:py-20"
    >
      <Link
        href={`/dossiers/${dossier.id}`}
        data-dossier-image-link
        className={`relative col-span-12 block focus-visible:outline-offset-4 lg:col-span-6 ${
          imageFirst ? "lg:col-start-1" : "lg:col-start-7 lg:row-start-1"
        }`}
        aria-label={`Open ${dossier.title} dossier`}
      >
        <DossierImage dossier={dossier} priority={index === 0} className="aspect-[16/10] w-full" />
      </Link>

      <div
        data-dossier-meta
        className={`col-span-12 self-center lg:col-span-5 ${
          imageFirst ? "lg:col-start-8" : "lg:col-start-2 lg:row-start-1"
        }`}
      >
        <div className="flex items-center justify-between gap-6 font-mono text-[9px] uppercase tracking-[0.28em] text-muted/55">
          <span>{String(index + 1).padStart(2, "0")} // {dossier.category}</span>
          <span className="text-accent/70">{dossier.classification}</span>
        </div>

        <h2 className="mt-7">
          <Link
            href={`/dossiers/${dossier.id}`}
            className="block focus-visible:text-accent"
          >
            <span className="block font-display text-4xl uppercase leading-[0.95] tracking-[0.02em] text-fg transition-[translate] duration-700 ease-out group-hover:translate-x-2 sm:text-5xl">
              {dossier.title}
            </span>
          </Link>
        </h2>

        {dossier.japaneseTitle && (
          <p className="mt-4 font-jp text-[10px] tracking-[0.35em] text-muted/45">
            {dossier.japaneseTitle}
          </p>
        )}

        <p className="mt-7 max-w-[48ch] font-mono text-[11px] leading-relaxed tracking-[0.07em] text-muted/70">
          {dossier.summary}
        </p>

        <div className="mt-8 flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.28em] text-muted/55 transition-colors duration-500 group-hover:text-fg">
          <span>Open File</span>
          <span aria-hidden="true" className="h-px w-10 bg-accent/55 transition-[width] duration-700 group-hover:w-16" />
          <span aria-hidden="true" className="text-accent">▸</span>
        </div>
      </div>
    </article>
  );
}
