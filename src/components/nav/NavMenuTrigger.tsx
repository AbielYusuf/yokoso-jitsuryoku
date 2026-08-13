"use client";

import { useSiteNav } from "@/components/nav/site-nav-context";

export function NavMenuTrigger() {
  const { open, requestOpen } = useSiteNav();

  return (
    <button
      type="button"
      onClick={requestOpen}
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-controls="site-navigation-panel"
      aria-label="Open site navigation"
      className="group flex items-center gap-3 border border-line px-4 py-2 transition-colors duration-500 hover:border-accent/70"
    >
      <span aria-hidden="true" className="relative block h-3 w-5">
        <span className="absolute left-0 top-0 block h-px w-5 bg-fg/70 transition-colors duration-500 group-hover:bg-accent" />
        <span className="absolute left-0 bottom-0 block h-px w-5 bg-fg/70 transition-colors duration-500 group-hover:bg-accent" />
      </span>
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted transition-colors duration-500 group-hover:text-fg">
        Menu
      </span>
    </button>
  );
}