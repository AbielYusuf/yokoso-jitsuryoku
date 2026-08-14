import Link from "next/link";
import type { RankingRecord } from "@/data/ranking";
import { getCharacterById } from "@/lib/records";
import { RankingMeta } from "@/components/ranking/RankingMeta";

type RankingRecordProps = {
  record: RankingRecord;
  index: number;
};

export function RankingRecord({ record, index }: RankingRecordProps) {
  const rank = String(record.rank).padStart(2, "0");

  const [firstName, ...rest] = record.name.split(" ");
  const lastName = rest.length > 0 ? rest.join(" ") : firstName;

  const character = record.characterId ? getCharacterById(record.characterId) : undefined;
  const href = character ? `/characters/${character.id}` : undefined;

  // subtle register rhythm — identity column shifts on alternating rows
  const identityCol = index % 2 === 1 ? "lg:col-start-5" : "lg:col-start-4";

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
      {/* rank — left */}
      <div className="col-span-12 flex items-baseline gap-4 lg:col-span-2 lg:col-start-2 lg:self-center">
        <span
          data-ranking-block
          className="font-display text-3xl tabular-nums leading-none text-muted transition-colors duration-500 group-hover:text-fg sm:text-4xl"
        >
          {rank}
        </span>
        <span
          aria-hidden="true"
          data-ranking-block
          className="h-px w-8 origin-left bg-accent/40 transition-colors duration-500 group-hover:bg-accent sm:w-10"
        />
      </div>

      {/* identity — center */}
      <div className={`col-span-12 lg:col-span-5 lg:self-center ${identityCol}`}>
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
        </p>
      </div>

      {/* evaluation metadata — right */}
      <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-center">
        <RankingMeta record={record} />
      </div>
    </article>
  );
}