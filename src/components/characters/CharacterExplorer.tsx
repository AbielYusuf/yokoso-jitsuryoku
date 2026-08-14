"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { CHARACTERS } from "@/data/characters";
import { CLASSES } from "@/data/classes";
import { CharacterRecord } from "@/components/characters/CharacterRecord";
import { gsap } from "@/lib/gsap";

const STATUS_OPTIONS = ["Active", "Graduated", "Expelled", "Suspended"] as const;

/**
 * Interactive discovery for the character register — search, class, and
 * status filtering over the in-memory typed dataset. Filtering is pure and
 * deterministic; no network, no database, no server API.
 *
 * Records are rendered through the same `CharacterRecord` component so the
 * register rhythm, typography, and links are untouched. When a filter is
 * active the entrance-reveal state is flattened so every visible block is
 * shown plainly — no elaborate re-animation per keystroke.
 */
export function CharacterExplorer() {
  const [query, setQuery] = useState("");
  const [classId, setClassId] = useState("all");
  const [status, setStatus] = useState("all");
  const listRef = useRef<HTMLDivElement>(null);

  const isDefault = query.trim() === "" && classId === "all" && status === "all";

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CHARACTERS.filter((character) => {
      if (classId !== "all" && character.classId !== classId) return false;
      if (status !== "all" && character.status !== status) return false;
      if (q) {
        const haystack = [
          character.firstName,
          character.lastName,
          character.lastName,
          character.firstName,
          character.jp,
          character.recordId,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [query, classId, status]);

  // When a filter is active, flatten the GSAP entrance state so filtered-in
  // records are always plainly visible. Skipped while filters are at their
  // default so the initial page entrance animation stays intact.
  useLayoutEffect(() => {
    if (isDefault) return;
    const root = listRef.current;
    if (!root) return;
    const blocks = root.querySelectorAll<HTMLElement>("[data-archive-block]");
    const portraits = root.querySelectorAll<HTMLElement>("[data-archive-portrait]");
    gsap.set(blocks, { y: 0, autoAlpha: 1 });
    gsap.set(portraits, { scale: 1 });
  }, [query, classId, status, isDefault]);

  const reset = () => {
    setQuery("");
    setClassId("all");
    setStatus("all");
  };

  return (
    <div className="mt-20 lg:mt-28">
      <section
        aria-label="Filter the character register"
        className="border-t border-line"
      >
        {/* Search */}
        <div className="border-b border-line py-8">
          <label
            htmlFor="character-search"
            className="block font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50"
          >
            Search characters
          </label>
          <input
            id="character-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="NAME, JAPANESE NAME, OR RECORD"
            className="mt-5 w-full border-b border-line-strong bg-transparent pb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-fg placeholder:text-muted/40 focus:border-accent"
          />
        </div>

        {/* Class + status */}
        <div className="grid gap-x-10 gap-y-8 border-b border-line py-8 sm:grid-cols-2">
          <div>
            <label
              htmlFor="character-class"
              className="block font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50"
            >
              Class
            </label>
            <div className="relative mt-5">
              <select
                id="character-class"
                value={classId}
                onChange={(event) => setClassId(event.target.value)}
                className="w-full appearance-none border-b border-line-strong bg-transparent pb-3 pr-8 font-mono text-[11px] uppercase tracking-[0.3em] text-fg focus:border-accent"
              >
                <option value="all">All Classes</option>
                {CLASSES.map((klass) => (
                  <option key={klass.id} value={klass.id}>
                    {klass.name}
                  </option>
                ))}
              </select>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[10px] text-muted/70"
              >
                ▾
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="character-status"
              className="block font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50"
            >
              Status
            </label>
            <div className="relative mt-5">
              <select
                id="character-status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="w-full appearance-none border-b border-line-strong bg-transparent pb-3 pr-8 font-mono text-[11px] uppercase tracking-[0.3em] text-fg focus:border-accent"
              >
                <option value="all">All Status</option>
                {STATUS_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[10px] text-muted/70"
              >
                ▾
              </span>
            </div>
          </div>
        </div>

        {/* Count + reset */}
        <div className="flex items-baseline justify-between gap-6 border-t border-line py-5">
          <p
            aria-live="polite"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70"
          >
            {filtered.length === 0 ? "No matching records" : `${filtered.length} records`}
          </p>
          {!isDefault ? (
            <button
              type="button"
              onClick={reset}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70 transition-colors duration-500 hover:text-accent focus-visible:text-accent"
            >
              Reset filters
            </button>
          ) : null}
        </div>
      </section>

      <div ref={listRef}>
        {filtered.length === 0 ? (
          <div data-archive-block className="border-t border-line py-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted/50">
              No matching records
            </p>
            <p className="mt-4 max-w-[24rem] font-display text-xl italic leading-snug tracking-[0.01em] text-muted/70">
              No entry in the register matches the current filters.
            </p>
          </div>
        ) : (
          filtered.map((character, index) => (
            <CharacterRecord
              key={character.id}
              character={character}
              index={index}
              flip={index % 2 === 1}
            />
          ))
        )}
      </div>
    </div>
  );
}