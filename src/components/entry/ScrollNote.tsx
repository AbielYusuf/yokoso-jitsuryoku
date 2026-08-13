export function ScrollNote() {
  return (
    <div
      data-reveal
      data-role="scroll"
      className="pointer-events-none absolute bottom-7 right-6 hidden flex-col items-center gap-3 sm:flex xl:right-24"
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-muted/60">Scroll</span>
      <span aria-hidden="true" className="relative block h-16 w-px overflow-hidden bg-line">
        <span className="scroll-dot absolute left-0 top-0 h-2 w-px bg-fg/60" />
      </span>
    </div>
  );
}