"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";
import { DURATION, EASE_OUT } from "@/lib/animations";
import { NAV_ITEMS, site } from "@/data/site";
import { useSiteNav } from "@/components/nav/site-nav-context";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE));
}

export function NavigationOverlay() {
  const { open, requestClose } = useSiteNav();
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const openTriggerRef = useRef<HTMLElement | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  // — Focus management -------------------------------------------------
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (open) {
      openTriggerRef.current = document.activeElement as HTMLElement | null;
      const focusDelay = window.setTimeout(() => {
        const first = getFocusable(root)[0];
        first?.focus();
      }, prefersReducedMotion() ? 0 : 480);
      return () => window.clearTimeout(focusDelay);
    }

    openTriggerRef.current?.focus();
    openTriggerRef.current = null;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const root = rootRef.current;
    if (!root) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        requestClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = getFocusable(root).filter(
        (el) => el.getAttribute("aria-hidden") !== "true",
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first || !root.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last || !root.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, requestClose]);

  // — Entrance / exit composition -------------------------------------
  // Build the timeline once (with all elements at their hidden from-states),
  // then play forward on open and reverse on close.
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const panel = panelRef.current;
    if (!root || !panel) return;

    const edge = root.querySelector<HTMLElement>("[data-nav-edge]");
    const wash = root.querySelector<HTMLElement>("[data-nav-wash]");
    const items = root.querySelectorAll<HTMLElement>("[data-nav-item]");
    const meta = root.querySelector<HTMLElement>("[data-nav-meta]");

    if (prefersReducedMotion()) {
      timelineRef.current = null;
      gsap.set(root, { autoAlpha: 0 });
      return;
    }

    const tl = gsap.timeline({ paused: true, defaults: { ease: EASE_OUT } });

    // 1. right-side edge accent draws in
    tl.fromTo(
      edge,
      { scaleY: 0, transformOrigin: "top center", autoAlpha: 0 },
      { scaleY: 1, autoAlpha: 1, duration: DURATION.short, immediateRender: true },
      0,
    );

    // 2. panel background enters from the right
    tl.fromTo(
      panel,
      { xPercent: 100, autoAlpha: 1 },
      { xPercent: 0, autoAlpha: 1, duration: DURATION.slow, immediateRender: true },
      0.1,
    );

    // dark wash fades over the site
    tl.fromTo(
      wash,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: DURATION.base, immediateRender: true },
      0.1,
    );

    // 3. navigation items reveal sequentially
    tl.fromTo(
      items,
      { y: 26, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: DURATION.base, stagger: 0.07, immediateRender: true },
      0.5,
    );

    // 4. metadata fades in
    tl.fromTo(
      meta,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: DURATION.base, immediateRender: true },
      "-=0.3",
    );

    timelineRef.current = tl;

    return () => {
      tl.kill();
      timelineRef.current = null;
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (prefersReducedMotion()) {
      gsap.set(root, { autoAlpha: open ? 1 : 0 });
      return;
    }

    const tl = timelineRef.current;
    if (!tl) return;

    if (open) {
      tl.timeScale(1);
      tl.play();
    } else {
      tl.timeScale(1.15);
      tl.reverse();
    }
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={`fixed inset-0 z-[60] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={open ? undefined : "true"}
      inert={!open}
    >
      {/* dark wash behind the panel */}
      <div
        data-nav-wash
        aria-hidden="true"
        className="absolute inset-0 bg-black/70 opacity-0 backdrop-blur-[2px]"
      />

      {/* right-side panel */}
      <aside
        ref={panelRef}
        id="site-navigation-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="absolute right-0 top-0 flex h-full w-full flex-col border-l border-white/10 bg-bg lg:w-[560px] xl:w-[640px]"
      >
        {/* edge accent */}
        <span
          data-nav-edge
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-px bg-accent/80"
        />

        {/* header row */}
        <div className="flex items-center justify-between border-b border-line px-8 py-7 lg:px-12">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted/60">
            {site.school} — {site.archive}
          </p>
          <button
            type="button"
            onClick={requestClose}
            aria-label="Close navigation"
            className="border border-line px-4 py-2 font-mono text-[9px] uppercase tracking-[0.3em] text-muted transition-colors duration-500 hover:border-accent/70 hover:text-fg"
          >
            Close
          </button>
        </div>

        {/* items */}
        <nav aria-label="Primary" className="flex-1 overflow-y-auto px-8 py-10 lg:px-12">
          <ul>
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className="border-b border-line last:border-b-0">
                  <Link
                    href={item.href}
                    onClick={requestClose}
                    aria-current={active ? "page" : undefined}
                    data-nav-item
                    className={`group flex items-baseline justify-between gap-10 py-7 lg:py-8 ${
                      active ? "text-accent" : "text-fg"
                    }`}
                  >
                    <span className="flex items-baseline gap-6">
                      <span className="font-mono text-[11px] tabular-nums tracking-[0.2em] text-muted/50 transition-colors duration-500 group-hover:text-muted">
                        {item.index}
                      </span>
                      <span
                        className={`font-display text-3xl uppercase leading-none tracking-[0.06em] transition-colors duration-500 sm:text-4xl lg:text-[2.75rem] ${
                          active
                            ? "text-accent"
                            : "text-fg group-hover:text-muted"
                        }`}
                      >
                        {item.title}
                      </span>
                    </span>
                    <span className="hidden font-jp text-xs tracking-[0.4em] text-muted/40 sm:block">
                      {item.jp}
                    </span>
                  </Link>
                  {active && (
                    <span
                      aria-hidden="true"
                      data-nav-item
                      className="block h-px -translate-y-px bg-accent/80"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* home + metadata */}
        <div data-nav-meta className="border-t border-line px-8 py-7 lg:px-12">
          <Link
            href="/"
            onClick={requestClose}
            aria-current={pathname === "/" ? "page" : undefined}
            data-nav-item
            className="flex w-fit items-baseline gap-6 py-2"
          >
            <span className="font-mono text-[11px] tabular-nums tracking-[0.2em] text-muted/40">
              00
            </span>
            <span
              className={`font-display text-lg uppercase leading-none tracking-[0.08em] transition-colors duration-500 ${
                pathname === "/" ? "text-accent" : "text-fg hover:text-muted"
              }`}
            >
              Home
            </span>
          </Link>

          <div className="mt-8 flex items-center justify-between gap-6 border-t border-line pt-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-muted/50">
              {site.coordinates}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-muted/45">
              {site.recordId}
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
}