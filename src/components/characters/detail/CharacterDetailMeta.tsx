import type { Character } from "@/data/characters";

export function CharacterDetailMeta({ character }: { character: Character }) {
  const rows = [
    { label: "Class", value: character.className },
    { label: "Year", value: character.yearLabel },
    { label: "Status", value: character.status },
    { label: "Record", value: character.recordId },
  ];

  return (
    <dl className="grid grid-cols-2 gap-x-6 border-t border-line lg:grid-cols-4">
      {rows.map((row) => (
        <div key={row.label} data-cd-block className="border-b border-line py-4">
          <dt className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50">
            {row.label}
          </dt>
          <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fg/85">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}