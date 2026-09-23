"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DURATION, EASE_OUT } from "@/lib/animations";

export function LocationDetailMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const back = root.querySelector<HTMLElement>("[data-location-detail-back]");
      const label = root.querySelector<HTMLElement>("[data-location-detail-label]");
      const title = root.querySelector<HTMLElement>("[data-location-detail-title]");
      const hero = root.querySelector<HTMLElement>("[data-location-detail-hero]");
      const blocks = gsap.utils.toArray<HTMLElement>("[data-location-detail]");

      if (reduced) {
        gsap.set([back, label, title, hero, ...blocks], { clearProps: "all", autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set([back, label, title, hero, ...blocks], { autoAlpha: 0 });
      gsap.set([back, label], { y: 12 });
      gsap.set(title, { yPercent: 110 });
      gsap.set(hero, { clipPath: "inset(0 0 100% 0)" });
      gsap.set(blocks, { y: 24 });

      const tl = gsap.timeline({ defaults: { ease: EASE_OUT } });
      tl.to(back, { y: 0, autoAlpha: 1, duration: DURATION.short }, 0)
        .to(label, { y: 0, autoAlpha: 1, duration: DURATION.short }, 0.12)
        .to(title, { yPercent: 0, autoAlpha: 1, duration: DURATION.slow }, 0.2)
        .to(hero, { autoAlpha: 1, clipPath: "inset(0 0 0% 0)", duration: DURATION.slow }, 0.42);

      blocks.forEach((block) => {
        ScrollTrigger.create({
          trigger: block,
          start: "top 88%",
          once: true,
          onEnter: () => gsap.to(block, { y: 0, autoAlpha: 1, duration: DURATION.base, ease: EASE_OUT }),
        });
      });

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
