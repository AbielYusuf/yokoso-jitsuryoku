import type { ReactNode } from "react";

type AboutSectionProps = {
  index: string;
  id: string;
  title: string;
  children: ReactNode;
};

/**
 * Shared document-section shell for /about. Numbered index and section title
 * on the left, section body on the right — a formal, numbered-document rhythm
 * distinct from the repeating records of the other archives.
 */
export function AboutSection({ index, id, title, children }: AboutSectionProps) {
  return (
    <section
      data-about-section
      aria-labelledby={id}
      className="border-t border-line py-16 lg:py-24"
    >
      <div className="grid grid-cols-12 gap-y-8 lg:gap-x-8">
        <div className="col-span-12 lg:col-span-3 lg:col-start-2">
          <span
            data-about-block
            className="font-mono text-xs tabular-nums tracking-[0.3em] text-accent/70"
          >
            {index}
          </span>
          <h2
            data-about-block
            id={id}
            className="mt-4 font-display text-3xl uppercase leading-none tracking-[0.02em] text-fg sm:text-4xl"
          >
            {title}
          </h2>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6">{children}</div>
      </div>
    </section>
  );
}