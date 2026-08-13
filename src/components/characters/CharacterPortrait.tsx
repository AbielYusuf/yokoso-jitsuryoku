"use client";

import { useState } from "react";
import Image from "next/image";
import type { Character } from "@/data/characters";

type ArtState = "loading" | "ready" | "failed";

export function CharacterPortrait({ character }: { character: Character }) {
  const image = character.image;
  const [artState, setArtState] = useState<ArtState>(image ? "loading" : "failed");

  const showImage = image !== null && artState !== "failed";

  return (
    <figure
      data-archive-portrait
      className="relative will-change-transform"
    >
      <div
        className="group/portrait relative overflow-hidden border border-line bg-bg-elev"
        style={{ aspectRatio: character.portraitAspect }}
      >
        {/* placeholder layer — kept behind official art until available */}
        <div aria-hidden="true" className="absolute inset-0">
          <span className="absolute inset-0 flex items-center justify-center font-jp text-[10rem] leading-none text-fg/[0.05] lg:text-[12rem]">
            {character.monogram}
          </span>
          <span className="absolute left-1/2 top-1/2 h-10 w-px -translate-x-1/2 -translate-y-1/2 bg-line-strong/60" />
          <span className="absolute left-1/2 top-1/2 h-px w-10 -translate-x-1/2 -translate-y-1/2 bg-line-strong/60" />
        </div>

        {showImage ? (
          <Image
            src={image}
            alt={`Portrait of ${character.firstName} ${character.lastName}, Class ${character.className}.`}
            fill
            sizes="(max-width: 1023px) 92vw, 38vw"
            className="object-cover transition-transform duration-[1800ms] ease-out group-hover/portrait:scale-[1.035]"
            onLoad={() => setArtState("ready")}
            onError={() => setArtState("failed")}
          />
        ) : null}

        {/* inner frame highlight — reacts on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 border border-accent/0 transition-colors duration-700 group-hover/portrait:border-accent/25"
        />
      </div>

      {/* diagonal frame accents */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-px -top-px h-3.5 w-3.5 border-l border-t border-accent/70"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-px -right-px h-3.5 w-3.5 border-r border-b border-accent/70"
      />

      <figcaption className="sr-only">
        Subject {character.recordId} — {character.firstName} {character.lastName}, Class
        {character.className}.
      </figcaption>
    </figure>
  );
}