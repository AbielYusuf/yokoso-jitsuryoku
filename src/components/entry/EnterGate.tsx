"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useSoundtrack } from "@/hooks/useSoundtrack";

type Phase = "locked" | "verifying" | "open";

export function EnterGate({ onUnlocked }: { onUnlocked?: () => void }) {
  const { activate } = useSoundtrack();
  const [phase, setPhase] = useState<Phase>("locked");
  const [ready, setReady] = useState(false);
  const timerRef = useRef<number | null>(null);
  const introTimerRef = useRef<number | null>(null);
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const label = root.querySelector<HTMLElement>("[data-gate-label]");
    const archive = root.querySelector<HTMLElement>("[data-gate-archive]");
    const japanese = root.querySelector<HTMLElement>("[data-gate-japanese]");
    const dividers = root.querySelectorAll<HTMLElement>("[data-gate-divider]");
    const control = root.querySelector<HTMLElement>("[data-gate-control]");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setReady(true);
      gsap.set([label, archive, japanese, ...dividers, control], {
        clearProps: "all",
        autoAlpha: 1,
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set([label, archive, japanese], { autoAlpha: 0, y: 7 });
      gsap.set(dividers, { scaleX: 0, transformOrigin: "center center" });
      gsap.set(control, { autoAlpha: 0, y: 8 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(label, { autoAlpha: 1, y: 0, duration: 0.42 }, 0.04)
        .to(archive, { autoAlpha: 1, y: 0, duration: 0.46 }, 0.14)
        .to(japanese, { autoAlpha: 1, y: 0, duration: 0.4 }, 0.23)
        .to(dividers, { scaleX: 1, duration: 0.48, stagger: 0.13 }, 0.3)
        .to(control, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.48);
    }, root);

    introTimerRef.current = window.setTimeout(() => setReady(true), 820);

    return () => {
      if (introTimerRef.current !== null) window.clearTimeout(introTimerRef.current);
      ctx.revert();
    };
  }, []);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const enter = () => {
    if (phase !== "locked" || !ready) return;
    activate();
    setPhase("verifying");

    const root = rootRef.current;
    if (root && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const module = root.querySelector<HTMLElement>("[data-gate-module]");
      gsap.to(module, {
        autoAlpha: 0,
        y: -6,
        duration: 0.55,
        delay: 0.18,
        ease: "power2.inOut",
      });
    }

    timerRef.current = window.setTimeout(() => {
      setPhase("open");
      onUnlocked?.();
    }, 1100);
  };

  return (
    <section
      ref={rootRef}
      aria-labelledby="unlock-school-name"
      className="unlock-access relative z-10 w-full max-w-[30rem] text-center"
    >
      <div data-gate-module>
        <p
          id="unlock-school-name"
          data-gate-label
          className="font-mono text-[9px] uppercase tracking-[0.32em] text-fg/75 sm:text-[10px] sm:tracking-[0.4em]"
        >
          Advanced Nurturing High School
        </p>
        <p
          data-gate-archive
          className="mt-5 font-mono text-sm uppercase tracking-[0.32em] text-fg/90 sm:text-base sm:tracking-[0.38em]"
        >
          Private Archive
        </p>
        <p
          data-gate-japanese
          className="mt-3 font-jp text-[10px] tracking-[0.45em] text-muted/35"
        >
          私的アーカイブ
        </p>

        <span data-gate-divider aria-hidden="true" className="unlock-divider mt-9" />

        <button
          type="button"
          data-gate-control
          disabled={!ready || phase !== "locked"}
          aria-label="Enter the ANHS private archive"
          onClick={enter}
          className="unlock-enter group relative mx-auto mt-7 flex w-full max-w-[20rem] items-center justify-between gap-6 border border-line-strong px-6 py-[1.1rem] text-left transition-colors duration-500 sm:px-7"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-fg/90 transition-colors duration-500 group-hover:text-fg">
            Enter the School
          </span>
          <span aria-hidden="true" className="unlock-enter-line block h-px flex-1 bg-accent/45" />
          <span aria-hidden="true" className="text-accent transition-transform duration-500 group-hover:translate-x-1">
            ▸
          </span>
        </button>

        <span data-gate-divider aria-hidden="true" className="unlock-divider mt-7" />
      </div>
    </section>
  );
}
