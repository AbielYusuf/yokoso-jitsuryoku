import type { AboutData } from "@/data/about";
import { AboutSection } from "@/components/about/AboutSection";

export function AboutStructure({ data }: { data: AboutData }) {
  return (
    <AboutSection index="03" id="about-structure" title="Academic Structure">
      <p
        data-about-block
        className="max-w-[58ch] font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted/70"
      >
        {data.structure.intro}
      </p>

      <div className="mt-10 border-t border-line">
        {data.structure.grades.map((grade) => (
          <div
            key={grade.id}
            data-about-block
            className="grid grid-cols-12 items-baseline gap-x-4 gap-y-1 border-b border-line py-4 sm:gap-x-6"
          >
            <p className="col-span-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted/60">
              {grade.label}
            </p>
            <p className="col-span-4 font-display text-xl uppercase leading-none tracking-[0.02em] text-fg sm:col-span-3">
              {grade.name}
            </p>
            <p className="col-span-2 text-right font-mono text-[9px] uppercase tracking-[0.2em] text-muted/50 sm:col-span-3 sm:text-left">
              {grade.status}
            </p>
          </div>
        ))}
      </div>
    </AboutSection>
  );
}