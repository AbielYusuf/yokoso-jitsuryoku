import type { AboutData } from "@/data/about";
import { AboutSection } from "@/components/about/AboutSection";

export function AboutEvaluation({ data }: { data: AboutData }) {
  return (
    <AboutSection index="04" id="about-evaluation" title="Evaluation">
      <p
        data-about-block
        className="max-w-[58ch] font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted/70"
      >
        {data.evaluation.intro}
      </p>

      <dl className="mt-10 border-t border-line">
        {data.evaluation.items.map((item) => (
          <div
            key={item.id}
            data-about-block
            className="flex items-baseline justify-between gap-6 border-b border-line py-4"
          >
            <div>
              <dt className="font-display text-xl uppercase leading-none tracking-[0.02em] text-fg">
                {item.label}
              </dt>
              <dd className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted/50">
                {item.detail}
              </dd>
            </div>
            <dd className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-muted/70">
              {item.status}
            </dd>
          </div>
        ))}
      </dl>
    </AboutSection>
  );
}