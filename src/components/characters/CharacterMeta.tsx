import type { Character } from "@/data/characters";

export function CharacterMeta({ character }: { character: Character }) {
  return (
    <dl data-archive-block className="mt-10 max-w-sm border-t border-line">
      <div className="flex items-baseline justify-between gap-6 border-b border-line py-4">
        <dt className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50">
          Status
        </dt>
        <dd className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg/85 transition-colors duration-500 group-hover:text-accent">
          {character.status}
        </dd>
      </div>
      <div className="flex items-baseline justify-between gap-6 py-4">
        <dt className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50">
          Record
        </dt>
        <dd className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg/85">
          {character.recordId}
        </dd>
      </div>
    </dl>
  );
}