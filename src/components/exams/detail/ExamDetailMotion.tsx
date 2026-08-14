"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DURATION, EASE_OUT } from "@/lib/animations";

/**
 * Entrance orchestration for an exam detail page.
 *
 * Sequence: back-link fades, record label fades, exam title clip-reveals, the
 * meta lines and description rise, then the participant section files in.
 * Reduced motion reveals everything immediately, transforms removed.
 */
export function ExamDetailMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const back = root.querySelector<HTMLElement>("[data-exd-back]");
      const label = root.querySelector<HTMLElement>("[data-exd-label]");
      const titleLines = gsap.utils.toArray<HTMLElement>("[data-exd-title-line]");
      const blocks = gsap.utils.toArray<HTMLElement>("[data-exd-block]");

      if (reduced) {
        gsap.set([back, label, ...blocks, ...titleLines], {
          autoAlpha: 1,
          y: 0,
          yPercent: 0,
        });
        return;
      }

      const headers = [back, label].filter(Boolean) as HTMLElement[];
      gsap.set(headers, { autoAlpha: 0 });
      gsap.set(back, { y: 10 });
      gsap.set(label, { y: 12 });
      gsap.set(titleLines, { yPercent: 110 });
      gsap.set(blocks, { y: 24, autoAlpha: 0 });

      const tl = gsap.timeline({ defaults: { ease: EASE_OUT } });
      tl.to(back, { y: 0, autoAlpha: 1, duration: DURATION.short }, 0);
      tl.to(label, { y: 0, autoAlpha: 1, duration: DURATION.short }, 0.08);
      tl.to(titleLines, { yPercent: 0, autoAlpha: 1, duration: DURATION.slow }, 0.18);
      tl.to(
        blocks,
        { y: 0, autoAlpha: 1, duration: DURATION.base, stagger: 0.09 },
        0.55,
      );

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}