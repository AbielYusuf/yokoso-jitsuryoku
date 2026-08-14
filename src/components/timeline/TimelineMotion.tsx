"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DURATION, EASE_OUT } from "@/lib/animations";

/**
 * Entrance + scroll orchestration for /timeline.
 *
 * Entrance: the archive label fades up, the TIMELINE heading clip-reveals, the
 * supporting line rises, the vertical rail draws in, then the first entry's
 * elements file in. Subsequent entries reveal once, as units, driven by scroll.
 * Reduced motion reveals everything immediately, transforms removed.
 */
export function TimelineMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const label = root.querySelector<HTMLElement>("[data-timeline-label]");
      const titleLine = root.querySelector<HTMLElement>("[data-timeline-title]");
      const sub = root.querySelector<HTMLElement>("[data-timeline-sub]");
      const rail = root.querySelector<HTMLElement>("[data-timeline-rail]");
      const records = gsap.utils.toArray<HTMLElement>("[data-timeline-record]");
      const blocks = gsap.utils.toArray<HTMLElement>("[data-timeline-block]");

      if (reduced) {
        gsap.set([label, titleLine, sub, rail, ...blocks], {
          autoAlpha: 1,
          y: 0,
          scaleY: 1,
        });
        return;
      }

      const headers = [label, titleLine, sub].filter(Boolean) as HTMLElement[];
      gsap.set(headers, { autoAlpha: 0 });
      gsap.set(label, { y: 14 });
      gsap.set(titleLine, { yPercent: 110 });
      gsap.set(sub, { y: 24 });
      gsap.set(blocks, { y: 24, autoAlpha: 0 });

      if (rail) {
        gsap.set(rail, { scaleY: 0, transformOrigin: "top center" });
      }

      const tl = gsap.timeline({ defaults: { ease: EASE_OUT } });
      tl.to(label, { y: 0, autoAlpha: 1, duration: DURATION.short }, 0);
      tl.to(titleLine, { yPercent: 0, autoAlpha: 1, duration: DURATION.slow }, 0.15);
      tl.to(sub, { y: 0, autoAlpha: 1, duration: DURATION.base }, 0.5);
      if (rail) {
        tl.to(rail, { scaleY: 1, duration: DURATION.slow }, 0.35);
      }

      const firstRecord = records[0];
      if (firstRecord) {
        const firstBlocks = Array.from(
          firstRecord.querySelectorAll<HTMLElement>("[data-timeline-block]"),
        );
        tl.to(
          firstBlocks,
          { y: 0, autoAlpha: 1, duration: DURATION.base, stagger: 0.08 },
          0.65,
        );
      }

      // Later entries — reveal once, as a unit, driven by scroll.
      records.slice(1).forEach((record) => {
        const recBlocks = Array.from(
          record.querySelectorAll<HTMLElement>("[data-timeline-block]"),
        );
        ScrollTrigger.create({
          trigger: record,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(recBlocks, {
              y: 0,
              autoAlpha: 1,
              duration: DURATION.base,
              stagger: 0.1,
              overwrite: true,
            });
          },
        });
      });

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}