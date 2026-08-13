import type { NavItem } from "@/data/site";
import { PAGE_META, site } from "@/data/site";

export function PlaceholderPage({ href }: { href: NavItem["href"] }) {
  const meta = PAGE_META[href];

  return (
    <main className="relative mx-auto flex min-h-svh w-full max-w-[1440px] flex-col px-6 pb-24 pt-32 sm:px-10 lg:px-16 lg:pt-40 xl:px-24">
      <header className="mb-14">
        <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          <span>{site.recordId}</span>
          <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
          <span>Entry {meta.code}</span>
        </p>

        <div className="mt-8 flex flex-wrap items-baseline gap-x-10 gap-y-4 border-b border-line pb-8">
          <h1 className="font-display text-5xl uppercase leading-none tracking-[0.04em] sm:text-6xl lg:text-7xl">
            {meta.title}
          </h1>
          <p className="font-jp text-sm tracking-[0.4em] text-muted/60">{meta.jp}</p>
        </div>

        <p className="mt-6 max-w-xl font-mono text-[11px] leading-relaxed tracking-[0.15em] text-muted/70">
          {meta.note}
        </p>
      </header>

      <section className="flex flex-1 flex-col items-center justify-center border border-dashed border-line-strong px-6 py-24 text-center">
        <p className="font-display text-2xl uppercase leading-none tracking-[0.08em] text-muted sm:text-3xl">
          Archive entry under construction
        </p>
        <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50">
          {meta.title} — data not yet logged
        </p>
        <span aria-hidden="true" className="mt-8 h-px w-16 bg-accent/60" />
      </section>
    </main>
  );
}