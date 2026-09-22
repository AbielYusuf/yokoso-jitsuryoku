import { SectionLabel } from "@/components/common/SectionLabel";

export function DossierHeader() {
  return (
    <header>
      <SectionLabel data-dossier-label>Classified File Index // ANHS</SectionLabel>
      <h1 className="mt-8 overflow-hidden pb-1">
        <span
          data-dossier-title
          className="block font-display text-6xl uppercase leading-none tracking-[0.02em] sm:text-7xl lg:text-[6rem]"
        >
          Dossiers
        </span>
      </h1>
      <p
        data-dossier-sub
        className="mt-8 max-w-[34rem] font-display text-xl italic leading-snug tracking-[0.01em] text-muted sm:text-2xl"
      >
        Selected case files connecting the people, conflicts, and institutions held in the archive.
      </p>
    </header>
  );
}
