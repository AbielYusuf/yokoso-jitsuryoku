"use client";

import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

type Phase = "locked" | "verifying" | "open";

const STATUS: Record<Phase, string> = {
  locked: "ENTER THE SCHOOL",
  verifying: "VERIFYING IDENTITY…",
  open: "ACCESS GRANTED",
};

export function EnterGate() {
  const [phase, setPhase] = useState<Phase>("locked");
  const timerRef = useRef<number | null>(null);

  const enter = () => {
    if (phase !== "locked") return;
    setPhase("verifying");

    const container = document.querySelector<HTMLElement>("[data-role='gate']");
    if (container) {
      gsap.fromTo(
        container.querySelector("span[data-gate-line]"),
        { scaleX: 0.2, opacity: 0.4 },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: "power2.inOut" },
      );
    }

    timerRef.current = window.setTimeout(() => setPhase("open"), 1100);
  };

  const handleKey = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      enter();
    }
  };

  return (
    <div data-reveal data-role="gate" className="w-fit">
      <div
        role="button"
        tabIndex={0}
        aria-label={`${STATUS[phase]} — the gate is a fan-made fictional door into the ANHS archive`}
        onClick={enter}
        onKeyDown={handleKey}
        className={`group relative flex min-w-[18rem] cursor-pointer items-center justify-between gap-6 border px-7 py-5 transition-colors duration-500 hover:border-line-strong ${
          phase === "open" ? "border-accent/60" : "border-line"
        }`}
      >
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 ${
            phase === "open" ? "text-accent" : "text-muted group-hover:text-fg"
          }`}
        >
          {STATUS[phase]}
        </span>
        <span
          data-gate-line
          aria-hidden="true"
          className="block h-px w-12 origin-left bg-accent/50 transition-colors duration-500 group-hover:bg-accent"
        />
        <span
          aria-hidden="true"
          className={`text-accent transition-transform duration-500 ${
            phase === "open" ? "translate-x-1" : "group-hover:translate-x-1"
          }`}
        >
          ▸
        </span>
      </div>

      <div aria-live="polite">
        <p
          className={`mt-3 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] transition-colors duration-500 ${
            phase === "open" ? "text-accent/80" : "text-muted/0"
          }`}
        >
          <span aria-hidden="true" className={`h-px w-6 ${phase === "open" ? "bg-accent/60" : "bg-line"}`} />
          <span className={phase === "verifying" ? "animate-pulse" : ""}>
            {phase === "open" ? "Identity accepted — records unlocked." : "Stand by."}
          </span>
        </p>
      </div>
    </div>
  );
}