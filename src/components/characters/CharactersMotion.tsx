"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DURATION, EASE_OUT } from "@/lib/animations";

/**
 * Entrance + scroll orchestration for /characters.
 *
 * Entrance: label fades up, the heading clip-reveals, the supporting line
 * rises, then the first record's blocks rise while its portrait settles from
 * 1.04 → 1. Later records reveal as sequential units as they enter the
 * viewport — records being filed, not cards flying in.
 */
export function CharactersMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const label = root.querySelector<HTMLElement>("[data-archive-label]");
      const titleLine = root.querySelector<HTMLElement>("[data-archive-title]");
      const sub = root.querySelector<HTMLElement>("[data-archive-sub]");
      const records = gsap.utils.toArray<HTMLElement>("[data-archive-record]");
      const blocks = gsap.utils.toArray<HTMLElement>("[data-archive-block]");

      if (reduced) {
        gsap.set([label, titleLine, sub, ...blocks], { autoAlpha: 1, y: 0 });
        return;
      }

      const headers = [label, titleLine, sub].filter(Boolean) as HTMLElement[];
      gsap.set(headers, { autoAlpha: 0 });
      gsap.set(label, { y: 14 });
      gsap.set(titleLine, { yPercent: 110 });
      gsap.set(sub, { y: 24 });
      gsap.set(blocks, { y: 28, autoAlpha: 0 });

      const tl = gsap.timeline({ defaults: { ease: EASE_OUT } });
      tl.to(label, { y: 0, autoAlpha: 1, duration: DURATION.short }, 0);
      tl.to(titleLine, { yPercent: 0, autoAlpha: 1, duration: DURATION.slow }, 0.15);
      tl.to(sub, { y: 0, autoAlpha: 1, duration: DURATION.base }, 0.5);

      const firstRecord = records[0];
      if (firstRecord) {
        const firstBlocks = Array.from(
          firstRecord.querySelectorAll<HTMLElement>("[data-archive-block]"),
        );
        const firstPortrait = firstRecord.querySelector<HTMLElement>(
          "[data-archive-portrait]",
        );

        tl.to(
          firstBlocks,
          { y: 0, autoAlpha: 1, duration: DURATION.base, stagger: 0.1 },
          0.65,
        );
        tl.fromTo(
          firstPortrait,
          { scale: 1.04, transformOrigin: "50% 30%" },
          { scale: 1, duration: DURATION.slow, ease: "power2.out" },
          0.55,
        );
      }

      // Later records — reveal once, as a unit, driven by scroll.
      records.slice(1).forEach((record) => {
        const recBlocks = Array.from(
          record.querySelectorAll<HTMLElement>("[data-archive-block]"),
        );
        const portrait = record.querySelector<HTMLElement>("[data-archive-portrait]");

        ScrollTrigger.create({
          trigger: record,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(recBlocks, {
              y: 0,
              autoAlpha: 1,
              duration: DURATION.base,
              stagger: 0.1,
              overwrite: true,
            });
            if (portrait) {
              gsap.fromTo(
                portrait,
                { scale: 1.04, transformOrigin: "50% 30%" },
                { scale: 1, duration: DURATION.slow, ease: "power2.out" },
              );
            }
          },
        });
      });

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}