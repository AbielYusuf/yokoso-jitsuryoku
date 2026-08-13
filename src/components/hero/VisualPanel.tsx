"use client";

import { useState } from "react";
import Image from "next/image";
import { PANEL_ART, PANEL_ART_ASPECT, site } from "@/data/site";

type ArtState = "loading" | "ready" | "failed";

export function VisualPanel() {
  const [artState, setArtState] = useState<ArtState>("loading");

  return (
    <figure data-reveal data-role="panel" className="relative">
      <div className="relative border border-line bg-bg-elev">
        {/* artwork slot — placeholder foundation, artwork layered above */}
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "1920 / 2784" }}
        >
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 flex items-center justify-center font-jp text-[10rem] leading-none text-fg/[0.04] sm:text-[12rem]">
              王
            </div>
            <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
              <div className="relative h-40 w-40 rounded-full border border-line-strong sm:h-48 sm:w-48">
                <span className="absolute left-1/2 top-1/2 h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fg/40" />
              </div>
            </div>
          </div>

          {artState !== "failed" ? (
            <Image
              src={PANEL_ART}
              alt="Subject of interest — Class of the Elite artwork"
              fill
              priority
              sizes="(max-width: 1023px) 88vw, 33vw"
              className={`object-cover transition-opacity duration-[1200ms] ${
                artState === "ready" ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setArtState("ready")}
              onError={() => setArtState("failed")}
            />
          ) : null}
        </div>

        <figcaption className="flex items-center justify-between border-t border-line px-5 py-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted">
            Subject of Interest
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted/60">
            {site.recordId}
          </span>
        </figcaption>
      </div>

      {/* frame accents — only two, diagonal */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-px -top-px h-3.5 w-3.5 border-l border-t border-accent/70"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-px -right-px h-3.5 w-3.5 border-r border-b border-accent/70"
      />
    </figure>
  );
}