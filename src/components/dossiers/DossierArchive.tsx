import { DOSSIERS } from "@/data/dossiers";
import { DossierHeader } from "@/components/dossiers/DossierHeader";
import { DossierRecord } from "@/components/dossiers/DossierRecord";
import { DossiersMotion } from "@/components/dossiers/DossiersMotion";

export function DossierArchive() {
  return (
    <DossiersMotion>
      <main className="relative mx-auto w-full max-w-[1440px] px-6 pb-36 pt-32 sm:px-10 lg:px-16 lg:pt-40 xl:px-24">
        <DossierHeader />
        <div className="mt-20 lg:mt-28">
          {DOSSIERS.map((dossier, index) => (
            <DossierRecord key={dossier.id} dossier={dossier} index={index} />
          ))}
        </div>
      </main>
    </DossiersMotion>
  );
}
