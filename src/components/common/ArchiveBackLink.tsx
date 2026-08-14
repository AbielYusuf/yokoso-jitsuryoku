import Link from "next/link";

type ArchiveBackLinkProps = {
  href: string;
  label: string;
};

/** Restrained back-link used at the top of detail pages. */
export function ArchiveBackLink({ href, label }: ArchiveBackLinkProps) {
  return (
    <Link
      href={href}
      className="group/link inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70 transition-colors duration-500 hover:text-accent focus-visible:text-accent"
    >
      <span
        aria-hidden="true"
        className="transition-transform duration-500 ease-out group-hover/link:-translate-x-1"
      >
        ←
      </span>
      {label}
    </Link>
  );
}