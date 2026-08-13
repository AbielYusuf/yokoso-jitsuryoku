"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { DURATION, EASE_OUT } from "@/lib/animations";

const REDUCED_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type Role =
  | "label"
  | "title-line"
  | "subtitle"
  | "meta"
  | "panel"
  | "gate"
  | "caption"
  | "scroll";

const ROLES: Role[] = [
  "label",
  "title-line",
  "subtitle",
  "meta",
  "panel",
  "gate",
  "caption",
  "scroll",
];

export function EntranceSequence({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const targets = ROLES.map((role) => root.querySelector<HTMLElement>(`[data-role="${role}"]`));

      if (REDUCED_MOTION) {
        gsap.set(targets, { autoAlpha: 1 });
        return;
      }

      gsap.set(targets, { autoAlpha: 0 });

      const order: Partial<Record<Role, number>> = {
        label: 0,
        "title-line": 0.3,
        subtitle: 0.55,
        panel: 0.75,
        caption: 0.85,
        gate: 1.0,
        meta: 1.15,
        scroll: 1.4,
      };

      const tl = gsap.timeline({
        defaults: { ease: EASE_OUT },
        paused: true,
      });

      const byRole = (role: Role) =>
        root.querySelector<HTMLElement>(`[data-role="${role}"]`);

      // label — short fade-up
      gsap.set(byRole("label"), { y: 14 });
      tl.to(byRole("label"), { y: 0, autoAlpha: 1, duration: DURATION.short }, 0);

      // title — clip reveal through the overflow-hidden wrapper
      gsap.set(byRole("title-line"), { yPercent: 120 });
      tl.to(
        byRole("title-line"),
        { yPercent: 0, autoAlpha: 1, duration: DURATION.slow },
        order["title-line"],
      );

      // subtitle — soft rise
      gsap.set(byRole("subtitle"), { y: 26 });
      tl.to(
        byRole("subtitle"),
        { y: 0, autoAlpha: 1, duration: DURATION.base },
        order["subtitle"],
      );

      // visual panel — slow settle from a larger scale
      gsap.set(byRole("panel"), { scale: 1.03, transformOrigin: "50% 100%" });
      tl.to(
        byRole("panel"),
        { scale: 1, autoAlpha: 1, duration: DURATION.slow },
        order["panel"],
      );

      // side caption / metadata — quiet fades
      tl.to(byRole("caption"), { autoAlpha: 1, duration: DURATION.base }, order["caption"]);
      tl.to(byRole("meta"), { autoAlpha: 1, duration: DURATION.base }, order["meta"]);

      // gate
      gsap.set(byRole("gate"), { y: 20 });
      tl.to(byRole("gate"), { y: 0, autoAlpha: 1, duration: DURATION.base }, order["gate"]);

      // scroll hint — last
      tl.to(byRole("scroll"), { autoAlpha: 1, duration: DURATION.short }, order["scroll"]);

      tl.play();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="entrance">
      {children}
    </div>
  );
}