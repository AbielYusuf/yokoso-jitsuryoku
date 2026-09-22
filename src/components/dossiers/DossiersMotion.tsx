"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DURATION, EASE_OUT } from "@/lib/animations";

export function DossiersMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const label = root.querySelector<HTMLElement>("[data-dossier-label]");
      const title = root.querySelector<HTMLElement>("[data-dossier-title]");
      const sub = root.querySelector<HTMLElement>("[data-dossier-sub]");
      const items = gsap.utils.toArray<HTMLElement>("[data-dossier-item]");

      if (reduced) {
        gsap.set([label, title, sub, ...items], { clearProps: "all", autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set([label, title, sub], { autoAlpha: 0 });
      gsap.set(label, { y: 14 });
      gsap.set(title, { yPercent: 110 });
      gsap.set(sub, { y: 22 });

      const tl = gsap.timeline({ defaults: { ease: EASE_OUT } });
      tl.to(label, { y: 0, autoAlpha: 1, duration: DURATION.short }, 0)
        .to(title, { yPercent: 0, autoAlpha: 1, duration: DURATION.slow }, 0.14)
        .to(sub, { y: 0, autoAlpha: 1, duration: DURATION.base }, 0.46);

      items.forEach((item, index) => {
        const image = item.querySelector<HTMLElement>("[data-dossier-image]");
        const meta = item.querySelector<HTMLElement>("[data-dossier-meta]");
        gsap.set(image, { autoAlpha: 0, clipPath: "inset(0 0 100% 0)" });
        gsap.set(meta, { autoAlpha: 0, y: 24 });

        const reveal = () => {
          gsap.timeline({ defaults: { ease: EASE_OUT } })
            .to(image, { autoAlpha: 1, clipPath: "inset(0 0 0% 0)", duration: DURATION.slow }, 0)
            .to(meta, { autoAlpha: 1, y: 0, duration: DURATION.base }, 0.25);
        };

        if (index === 0) tl.call(reveal, [], 0.62);
        else ScrollTrigger.create({ trigger: item, start: "top 82%", once: true, onEnter: reveal });
      });

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
