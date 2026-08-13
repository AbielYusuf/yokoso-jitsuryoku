import { SectionLabel } from "@/components/common/SectionLabel";

export function HeroTitle() {
  return (
    <div>
      <SectionLabel data-reveal data-role="label">
        Entry File // 00 — Initiation
      </SectionLabel>

      <h1 className="mt-7 font-jp text-[3.25rem] leading-none tracking-tight text-fg sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem]">
        <span className="block overflow-hidden pb-2">
          <span data-reveal data-role="title-line" className="block will-change-transform">
            実力至上主義
          </span>
        </span>
      </h1>

      <p
        data-reveal
        data-role="subtitle"
        className="mt-8 max-w-[21rem] font-display text-2xl italic leading-snug tracking-[0.01em] text-muted sm:text-[1.7rem] sm:leading-snug"
      >
        The meritocracy of the classroom — <span className="text-fg/85">a private archive.</span>
      </p>
    </div>
  );
}