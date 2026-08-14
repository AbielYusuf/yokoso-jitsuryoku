import Link from "next/link";
import type { ClassRecord as ClassData } from "@/data/classes";
import { ClassMeta } from "@/components/classes/ClassMeta";

type ClassRecordProps = {
  klass: ClassData;
  index: number;
  /** Register weighting — name column leads on the given side. */
  side: "left" | "right";
};

export function ClassRecord({ klass, index, side }: ClassRecordProps) {
  const order = String(index + 1).padStart(2, "0");

  const nameCol =
    side === "right" ? "lg:col-start-8 lg:col-span-5" : "lg:col-start-2 lg:col-span-5";
  const metaCol =
    side === "right"
      ? "lg:col-start-2 lg:col-span-4 lg:self-end"
      : "lg:col-start-9 lg:col-span-4 lg:self-end";
  const markSide = side === "right" ? "lg:right-0 lg:left-auto" : "";

  return (
    <article
      data-class-record
      className="group relative grid grid-cols-12 gap-y-10 border-t border-line py-16 lg:py-24"
    >
      {/* registration mark */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-6 h-3.5 w-3.5 border-l border-t border-accent/40 transition-colors duration-500 group-hover:border-accent ${markSide}`}
      />

      {/* dominant class identifier */}
      <div className={`col-span-12 ${nameCol}`}>
        <p
          data-class-block
          className="font-mono text-[11px] tabular-nums tracking-[0.2em] text-muted/50"
        >
          REG {order}
        </p>

        <p
          data-class-block
          className="mt-7 font-mono text-[9px] uppercase tracking-[0.4em] text-muted/60"
        >
          Class
        </p>

        <h2 data-class-block className="mt-2">
          <Link
            href={`/classes/${klass.id}`}
            className="block font-display text-6xl uppercase leading-[0.85] tracking-[0.01em] text-fg transition-[translate] duration-700 ease-out group-hover:translate-x-2 focus-visible:text-accent sm:text-7xl lg:text-[8rem]"
          >
            {klass.name}
          </Link>
        </h2>

        <p
          data-class-block
          className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70"
        >
          {klass.yearLabel}
        </p>

        <p
          data-class-block
          className="mt-10 max-w-[34ch] font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted/70"
        >
          {klass.description}
        </p>
      </div>

      {/* compact metadata block */}
      <div className={`col-span-12 ${metaCol}`}>
        <ClassMeta klass={klass} />
      </div>
    </article>
  );
}