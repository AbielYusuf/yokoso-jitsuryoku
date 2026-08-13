import type { HTMLAttributes } from "react";

type SectionLabelProps = HTMLAttributes<HTMLParagraphElement>;

export function SectionLabel({ children, className = "", ...rest }: SectionLabelProps) {
  const classes = [
    "flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <p className={classes} {...rest}>
      <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent/70" />
      <span>{children}</span>
    </p>
  );
}