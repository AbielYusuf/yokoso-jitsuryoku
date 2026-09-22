import type { DossierRecord } from "@/data/dossiers";
import { ArchiveBackLink } from "@/components/common/ArchiveBackLink";
import { SectionLabel } from "@/components/common/SectionLabel";
import { DossierImage } from "@/components/dossiers/DossierImage";
import { DossierRelations } from "@/components/dossiers/detail/DossierRelations";
import { DossierDetailMotion } from "@/components/dossiers/detail/DossierDetailMotion";

export function DossierDetail({ dossier }: { dossier: DossierRecord }) {
  const metadata = [
    ["Category", dossier.category],
    ["Classification", dossier.classification],
    ["Status", dossier.status],
    ...(dossier.schoolYear ? [["School Year", dossier.schoolYear]] : []),
    ["Evidence", dossier.evidenceBoundary],
    ["Record", dossier.recordId],
  ];

  return (
    <DossierDetailMotion>
      <main className="relative mx-auto w-full max-w-[1440px] px-6 pb-36 pt-32 sm:px-10 lg:px-16 lg:pt-36 xl:px-24">
        <header className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <div data-dossier-detail-back>
              <ArchiveBackLink href="/dossiers" label="Dossier Archive" />
            </div>
            <SectionLabel data-dossier-detail-label className="mt-10">
              Classified Case File // ANHS
            </SectionLabel>

            <h1 className="mt-8 overflow-hidden pb-1">
              <span
                data-dossier-detail-title
                className="block font-display text-5xl uppercase leading-[0.95] tracking-[0.02em] text-fg sm:text-6xl lg:text-[5rem]"
              >
                {dossier.title}
              </span>
            </h1>
            {dossier.japaneseTitle && (
              <p data-dossier-detail className="mt-5 font-jp text-xs tracking-[0.4em] text-muted/45">
                {dossier.japaneseTitle}
              </p>
            )}
          </div>
        </header>

        <div data-dossier-detail-hero className="group mt-12 lg:mt-16">
          <DossierImage dossier={dossier} priority className="aspect-[16/8] min-h-[15rem] w-full sm:min-h-0" />
        </div>

        <div className="mt-14 grid grid-cols-12 gap-y-14 lg:mt-20">
          <section data-dossier-detail className="col-span-12 lg:col-span-6 lg:col-start-2">
            <p className="font-display text-2xl italic leading-snug text-fg sm:text-3xl">
              {dossier.summary}
            </p>
            <p className="mt-8 max-w-[62ch] font-mono text-[11px] leading-[1.9] tracking-[0.07em] text-muted/70">
              {dossier.description}
            </p>
            {dossier.spoilerNote && (
              <p className="mt-6 border-l border-accent/40 pl-4 font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-muted/50">
                Evidence note // {dossier.spoilerNote}
              </p>
            )}
          </section>

          <dl data-dossier-detail className="col-span-12 border-t border-line lg:col-span-3 lg:col-start-9">
            {metadata.map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-5 border-b border-line py-4">
                <dt className="font-mono text-[8px] uppercase tracking-[0.28em] text-muted/45">{label}</dt>
                <dd className="text-right font-mono text-[9px] uppercase tracking-[0.2em] text-fg/80">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <DossierRelations dossier={dossier} />
          </div>
        </div>
      </main>
    </DossierDetailMotion>
  );
}
