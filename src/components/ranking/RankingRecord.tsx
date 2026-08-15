import Link from "next/link";
import type { RankingRecord } from "@/data/ranking";
import { getCharacterById } from "@/lib/records";
import { RankingMeta } from "@/components/ranking/RankingMeta";

type RankingRecordProps = {
  record: RankingRecord;
  index: number;
};

export function RankingRecord({ record, index }: RankingRecordProps) {
  // Neutral archive index — an evaluation sheet sequence, not a school rank.
  const archiveIndex = String(index + 1).padStart(2, "0");

  const [firstName, ...rest] = record.name.split(" ");
  const lastName = rest.length > 0 ? rest.join(" ") : firstName;

  const character = record.characterId ? getCharacterById(record.characterId) : undefined;
  const href = character ? `/characters/${character.id}` : undefined;

  const identity = (
    <span className="block transition-[translate] duration-700 ease-out group-hover:translate-x-2">
      <span className="block font-display text-[1.75rem] uppercase leading-[1.02] tracking-[0.02em] text-fg sm:text-4xl">
        {firstName}
      </span>
      <span className="block font-display text-[1.75rem] uppercase leading-[1.02] tracking-[0.02em] text-muted/85 sm:text-4xl">
        {lastName}
      </span>
    </span>
  );

  return (
    <article
      data-ranking-record
      className="group grid grid-cols-12 gap-y-6 border-t border-line py-12 lg:py-14"
    >
      {/* archive index — left */}
      <div className="col-span-12 lg:col-span-2 lg:col-start-2 lg:self-center">
        <span
          data-ranking-block
          className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50"
        >
          Archive Index
        </span>
        <span
          data-ranking-block
          className="mt-2 block font-display text-3xl uppercase leading-none tracking-[0.02em] text-muted transition-colors duration-500 group-hover:text-fg sm:text-4xl"
        >
          OAA-{archiveIndex}
        </span>
        <span
          aria-hidden="true"
          data-ranking-block
          className="mt-3 block h-px w-8 bg-accent/40 transition-colors duration-500 group-hover:bg-accent sm:w-10"
        />
      </div>

      {/* identity — center */}
      <div className="col-span-12 lg:col-span-8 lg:col-start-4 lg:self-center">
        <h2 data-ranking-block>
          {href ? (
            <Link href={href} className="block focus-visible:text-accent">
              {identity}
            </Link>
          ) : (
            identity
          )}
        </h2>

        <p
          data-ranking-block
          className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70"
        >
          Class <span className="text-fg/80">{record.className}</span>
          <span aria-hidden="true" className="mx-2 text-accent/60">
            ·
          </span>
          {record.yearLabel}
          <span aria-hidden="true" className="mx-2 text-accent/60">
            ·
          </span>
          <span className="text-fg/80">{record.status}</span>
        </p>
      </div>

      {/* OAA evaluation — full width */}
      <div className="col-span-12 lg:col-span-10 lg:col-start-2">
        <RankingMeta record={record} />
      </div>
    </article>
  );
}
