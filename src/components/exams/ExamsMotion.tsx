"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DURATION, EASE_OUT } from "@/lib/animations";

/**
 * Entrance + scroll orchestration for /exams.
 *
 * Entrance: the archive label fades up, the heading clip-reveals, the
 * supporting line rises, then the first exam record's elements file in.
 * Subsequent records reveal once, as units, when they enter the viewport.
 * Reduced motion reveals everything immediately, transforms removed.
 */
export function ExamsMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const label = root.querySelector<HTMLElement>("[data-exam-label]");
      const titleLine = root.querySelector<HTMLElement>("[data-exam-title]");
      const sub = root.querySelector<HTMLElement>("[data-exam-sub]");
      const records = gsap.utils.toArray<HTMLElement>("[data-exam-record]");
      const blocks = gsap.utils.toArray<HTMLElement>("[data-exam-block]");

      if (reduced) {
        gsap.set([label, titleLine, sub, ...blocks], { autoAlpha: 1, y: 0 });
        return;
      }

      const headers = [label, titleLine, sub].filter(Boolean) as HTMLElement[];
      gsap.set(headers, { autoAlpha: 0 });
      gsap.set(label, { y: 14 });
      gsap.set(titleLine, { yPercent: 110 });
      gsap.set(sub, { y: 24 });
      gsap.set(blocks, { y: 24, autoAlpha: 0 });

      const tl = gsap.timeline({ defaults: { ease: EASE_OUT } });
      tl.to(label, { y: 0, autoAlpha: 1, duration: DURATION.short }, 0);
      tl.to(titleLine, { yPercent: 0, autoAlpha: 1, duration: DURATION.slow }, 0.15);
      tl.to(sub, { y: 0, autoAlpha: 1, duration: DURATION.base }, 0.5);

      const firstRecord = records[0];
      if (firstRecord) {
        const firstBlocks = Array.from(
          firstRecord.querySelectorAll<HTMLElement>("[data-exam-block]"),
        );
        tl.to(
          firstBlocks,
          { y: 0, autoAlpha: 1, duration: DURATION.base, stagger: 0.1 },
          0.65,
        );
      }

      // Later records — reveal once, as a unit, driven by scroll.
      records.slice(1).forEach((record) => {
        const recBlocks = Array.from(
          record.querySelectorAll<HTMLElement>("[data-exam-block]"),
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
              stagger: 0.12,
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