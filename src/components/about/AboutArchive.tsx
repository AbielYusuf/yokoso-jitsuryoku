import { ABOUT } from "@/data/about";
import { AboutMotion } from "@/components/about/AboutMotion";
import { AboutHeader } from "@/components/about/AboutHeader";
import { AboutIdentity } from "@/components/about/AboutIdentity";
import { AboutPhilosophy } from "@/components/about/AboutPhilosophy";
import { AboutStructure } from "@/components/about/AboutStructure";
import { AboutEvaluation } from "@/components/about/AboutEvaluation";
import { AboutNotes } from "@/components/about/AboutNotes";

export function AboutArchive() {
  return (
    <AboutMotion>
      <main className="relative mx-auto w-full max-w-[1440px] px-6 pb-36 pt-32 sm:px-10 lg:px-16 lg:pt-40 xl:px-24">
        {/* watermark institution mark — subtle document stamp */}
        <span
          data-about-mark
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-36 select-none font-display text-[clamp(6rem,16vw,16rem)] uppercase leading-none tracking-tight text-fg/[0.05] lg:right-10"
        >
          ANHS
        </span>

        <AboutHeader />

        <div className="mt-20 lg:mt-28">
          <AboutIdentity data={ABOUT} />
          <AboutPhilosophy data={ABOUT} />
          <AboutStructure data={ABOUT} />
          <AboutEvaluation data={ABOUT} />
          <AboutNotes data={ABOUT} />

          {/* document colophon */}
          <footer className="border-t border-line py-10 lg:py-12">
            <div className="grid grid-cols-12 items-baseline gap-x-6">
              <p
                data-about-block
                className="col-span-12 font-mono text-[10px] uppercase tracking-[0.35em] text-muted/50 lg:col-span-4"
              >
                {ABOUT.colophon.line}
              </p>
              <p
                data-about-block
                className="col-span-12 mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted/40 lg:col-span-4 lg:col-start-8 lg:mt-0 lg:text-right"
              >
                {ABOUT.colophon.record}
              </p>
            </div>
          </footer>
        </div>
      </main>
    </AboutMotion>
  );
}