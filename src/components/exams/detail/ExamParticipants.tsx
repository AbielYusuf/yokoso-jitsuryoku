import Link from "next/link";
import type { ExamRecord } from "@/data/exams";
import { getCharactersByIds } from "@/lib/records";

/**
 * Participant / results area for an exam file.
 *
 * Architecture-ready (Exam → Character → Character Detail) but renders only
 * records that can be resolved from existing data. No participants or results
 * are fabricated: when nothing is on file a restrained pending state is shown.
 */
export function ExamParticipants({ exam }: { exam: ExamRecord }) {
  const participants = getCharactersByIds(exam.participantIds ?? []);

  return (
    <section aria-labelledby="participants-heading" className="border-t border-line">
      <div className="flex items-baseline justify-between gap-6 py-4">
        <h2
          id="participants-heading"
          data-exd-block
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70"
        >
          Participants
        </h2>
        <p
          data-exd-block
          className="font-mono text-[10px] tabular-nums tracking-[0.2em] text-muted/50"
        >
          {participants.length} on file
        </p>
      </div>

      {participants.length > 0 ? (
        <ol className="border-t border-line">
          {participants.map((participant) => (
            <li key={participant.id} data-exd-block className="border-b border-line">
              <Link
                href={`/characters/${participant.id}`}
                className="group/item flex items-baseline justify-between gap-6 py-4 focus-visible:text-accent"
              >
                <span className="font-mono text-[10px] tabular-nums tracking-[0.2em] text-muted/50 transition-colors duration-500 group-hover/item:text-accent">
                  {participant.recordId}
                </span>
                <span className="font-display text-xl uppercase leading-none tracking-[0.02em] text-fg transition-[translate] duration-700 ease-out group-hover/item:translate-x-2 sm:text-2xl">
                  {participant.lastName} {participant.firstName}
                </span>
                <span className="hidden font-mono text-[9px] uppercase tracking-[0.25em] text-muted/50 sm:block">
                  {participant.className}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <div data-exd-block className="border-t border-line py-10">
          <p className="font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted/50">
            Participant roster pending — no verified entries on file.
          </p>
          <p className="mt-2 font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted/40">
            Results sealed until their release is authorized.
          </p>
        </div>
      )}
    </section>
  );
}