import type { AboutData } from "@/data/about";
import { AboutSection } from "@/components/about/AboutSection";

export function AboutNotes({ data }: { data: AboutData }) {
  return (
    <AboutSection index="05" id="about-notes" title="Institutional Notes">
      <p
        data-about-block
        className="max-w-[58ch] font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted/70"
      >
        {data.notes.intro}
      </p>

      <ol className="mt-10 border-t border-line">
        {data.notes.items.map((note) => (
          <li
            key={note.id}
            data-about-block
            className="grid grid-cols-12 gap-x-4 gap-y-2 border-b border-line py-5 sm:gap-x-6"
          >
            <span className="col-span-2 font-mono text-[10px] tabular-nums tracking-[0.2em] text-accent/60">
              {note.id}
            </span>
            <p className="col-span-10 font-mono text-[11px] leading-relaxed tracking-[0.06em] text-muted/70">
              {note.body}
            </p>
          </li>
        ))}
      </ol>
    </AboutSection>
  );
}