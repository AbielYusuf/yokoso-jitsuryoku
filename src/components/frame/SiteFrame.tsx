"use client";

import { useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { gsap } from "@/lib/gsap";
import { site } from "@/data/site";
import { NavMenuTrigger } from "@/components/nav/NavMenuTrigger";

const formatClock = () =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());

const EMPTY_SNAPSHOT = "";

function useClock() {
  return useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
}

const store = {
  subscribe(callback: () => void) {
    const id = window.setInterval(() => callback(), 1000);
    return () => window.clearInterval(id);
  },
  getSnapshot() {
    return formatClock();
  },
  getServerSnapshot() {
    return EMPTY_SNAPSHOT;
  },
};

function Corners() {
  const mark = "absolute h-4 w-4 border-fg/20";
  return (
    <span aria-hidden="true" className="pointer-events-none fixed inset-0 z-40">
      <span className={`${mark} left-5 top-20 border-l border-t lg:left-7`} />
      <span className={`${mark} right-5 top-20 border-r border-t lg:right-7`} />
      <span className={`${mark} bottom-5 left-5 border-b border-l lg:left-7`} />
      <span className={`${mark} bottom-5 right-5 border-b border-r lg:right-7`} />
    </span>
  );
}

export function SiteFrame() {
  const now = useClock();

  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(header, { clearProps: "all", autoAlpha: 1 });
      return;
    }
    const tween = gsap.fromTo(
      header,
      { y: -10, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.9, ease: "power3.out" },
    );
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="grain" />
      <Corners />
      <header
        ref={headerRef}
        role="banner"
        className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/60 backdrop-blur-[6px]"
      >
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted/85">
            {site.school} <span className="mx-1 text-accent/80">▸</span> {site.archive}
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <p className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-muted/60">
              <span className="tabular-nums">{now || "— —:—:—"}</span>
              <span aria-hidden="true" className="text-muted/30">
                {"//"}
              </span>
              <span>Sys.Online</span>
            </p>
            <NavMenuTrigger />
          </div>
        </div>
      </header>
    </>
  );
}