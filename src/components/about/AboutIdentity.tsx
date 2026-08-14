import type { AboutData } from "@/data/about";
import { AboutSection } from "@/components/about/AboutSection";

export function AboutIdentity({ data }: { data: AboutData }) {
  return (
    <AboutSection index="01" id="about-identity" title="Institutional Identity">
      <p
        data-about-block
        className="font-display text-4xl uppercase leading-[1.02] tracking-[0.01em] text-fg sm:text-5xl"
      >
        {data.institution.name}
      </p>

      <p
        data-about-block
        className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent/70"
      >
        {data.institution.abbreviation} — {data.institution.classification}
      </p>

      <p
        data-about-block
        className="mt-8 max-w-[58ch] font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted/70"
      >
        {data.institution.description}
      </p>

      <dl className="mt-12 border-t border-line">
        {data.institution.meta.map((row) => (
          <div
            key={row.label}
            data-about-block
            className="flex items-baseline justify-between gap-6 border-b border-line py-3"
          >
            <dt className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50">
              {row.label}
            </dt>
            <dd className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg/85">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </AboutSection>
  );
}