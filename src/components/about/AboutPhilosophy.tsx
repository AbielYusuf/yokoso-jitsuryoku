import type { AboutData } from "@/data/about";
import { AboutSection } from "@/components/about/AboutSection";

export function AboutPhilosophy({ data }: { data: AboutData }) {
  return (
    <AboutSection index="02" id="about-philosophy" title="Philosophy">
      <blockquote data-about-block className="border-l border-accent/50 pl-6">
        <p className="font-display text-2xl italic leading-snug tracking-[0.01em] text-fg sm:text-3xl">
          {data.philosophy.statement}
        </p>
      </blockquote>

      <p
        data-about-block
        className="mt-8 max-w-[58ch] font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted/70"
      >
        {data.philosophy.body}
      </p>

      <p
        data-about-block
        className="mt-8 font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50"
      >
        — {data.philosophy.attribution}
      </p>
    </AboutSection>
  );
}