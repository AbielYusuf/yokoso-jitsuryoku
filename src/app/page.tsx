import { EntranceSequence } from "@/components/entry/EntranceSequence";
import { EnterGate } from "@/components/entry/EnterGate";
import { ScrollNote } from "@/components/entry/ScrollNote";
import { HeroTitle } from "@/components/hero/HeroTitle";
import { VisualPanel } from "@/components/hero/VisualPanel";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <EntranceSequence>
        <section
          aria-label="Welcome to the ANHS private archive"
          className="relative mx-auto grid min-h-svh w-full max-w-[1440px] grid-cols-1 items-center justify-items-center gap-x-6 gap-y-14 px-6 pb-24 pt-32 sm:px-10 lg:grid-cols-12 lg:justify-items-stretch lg:px-16 lg:pb-36 lg:pt-40 xl:px-24"
        >
          {/* Left column — title block */}
          <div className="lg:col-span-6 lg:col-start-2">
            <HeroTitle />
          </div>

          {/* Right column — artwork (full figure, no crop) */}
          <div className="w-full max-w-[26rem] lg:col-span-4 lg:col-start-8 lg:row-span-2 lg:max-w-none lg:self-center">
            <VisualPanel />
          </div>

          {/* Gate — sits below the title, far left of the panel */}
          <div className="lg:col-span-5 lg:col-start-2 lg:self-end lg:pb-4">
            <EnterGate />
          </div>

          {/* Quiet metadata, bottom-left */}
          <div
            data-reveal
            data-role="meta"
            className="absolute bottom-6 left-6 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-muted/60 lg:flex lg:left-16 xl:left-24"
          >
            <span>{site.coordinates}</span>
            <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
            <span>{site.recordId}</span>
          </div>

          <ScrollNote />
        </section>

        {/* Japanese vertical caption — only wide screens, cinema edges */}
        <div
          aria-hidden="true"
          data-reveal
          data-role="caption"
          className="pointer-events-none fixed left-8 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-6 xl:flex"
        >
          <p
            className="font-jp text-sm leading-relaxed tracking-[0.5em] text-muted/40"
            style={{ writingMode: "vertical-rl" }}
          >
            私的アーカイブ
          </p>
          <span className="h-28 w-px bg-line-strong" />
        </div>
      </EntranceSequence>

      <footer className="relative z-10 mt-[-1px] border-t border-line">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-3 px-6 py-10 text-center sm:px-10 lg:flex-row lg:justify-between lg:px-16 lg:text-left xl:px-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted/60">
            {site.school} — {site.archive}
          </p>
          <p className="max-w-md font-mono text-[9px] leading-relaxed tracking-[0.15em] text-muted/40">
            Unofficial fan project. Inspired by the classroom nobody may leave. Not affiliated with
            the publisher or its production committee.
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent/60">
            Sys.Online
          </p>
        </div>
      </footer>
    </>
  );
}