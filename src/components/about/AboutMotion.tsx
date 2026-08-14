"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DURATION, EASE_OUT } from "@/lib/animations";

/**
 * Entrance + scroll orchestration for /about.
 *
 * Entrance: the archive label fades up, the ABOUT heading clip-reveals, the
 * supporting line rises, the watermark institution mark fades in, then the
 * first section's elements file in. Subsequent sections reveal once, as units,
 * driven by scroll. Reduced motion reveals everything immediately.
 */
export function AboutMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const label = root.querySelector<HTMLElement>("[data-about-label]");
      const titleLine = root.querySelector<HTMLElement>("[data-about-title]");
      const sub = root.querySelector<HTMLElement>("[data-about-sub]");
      const mark = root.querySelector<HTMLElement>("[data-about-mark]");
      const sections = gsap.utils.toArray<HTMLElement>("[data-about-section]");
      const blocks = gsap.utils.toArray<HTMLElement>("[data-about-block]");

      if (reduced) {
        gsap.set([label, titleLine, sub, mark, ...blocks], {
          autoAlpha: 1,
          y: 0,
        });
        return;
      }

      const headers = [label, titleLine, sub].filter(Boolean) as HTMLElement[];
      gsap.set(headers, { autoAlpha: 0 });
      gsap.set(label, { y: 14 });
      gsap.set(titleLine, { yPercent: 110 });
      gsap.set(sub, { y: 24 });
      gsap.set(mark, { autoAlpha: 0 });
      gsap.set(blocks, { y: 24, autoAlpha: 0 });

      const tl = gsap.timeline({ defaults: { ease: EASE_OUT } });
      tl.to(label, { y: 0, autoAlpha: 1, duration: DURATION.short }, 0);
      tl.to(titleLine, { yPercent: 0, autoAlpha: 1, duration: DURATION.slow }, 0.15);
      tl.to(sub, { y: 0, autoAlpha: 1, duration: DURATION.base }, 0.5);
      if (mark) {
        tl.to(mark, { autoAlpha: 1, duration: DURATION.slow }, 0.3);
      }

      const firstSection = sections[0];
      if (firstSection) {
        const firstBlocks = Array.from(
          firstSection.querySelectorAll<HTMLElement>("[data-about-block]"),
        );
        tl.to(
          firstBlocks,
          { y: 0, autoAlpha: 1, duration: DURATION.base, stagger: 0.09 },
          0.65,
        );
      }

      // Later sections — reveal once, as a unit, driven by scroll.
      sections.slice(1).forEach((section) => {
        const secBlocks = Array.from(
          section.querySelectorAll<HTMLElement>("[data-about-block]"),
        );
        ScrollTrigger.create({
          trigger: section,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(secBlocks, {
              y: 0,
              autoAlpha: 1,
              duration: DURATION.base,
              stagger: 0.11,
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