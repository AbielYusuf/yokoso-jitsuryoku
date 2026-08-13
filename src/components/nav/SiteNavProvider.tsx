"use client";

import { useCallback, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { NavigationOverlay } from "@/components/nav/NavigationOverlay";
import { SiteNavContext } from "@/components/nav/site-nav-context";

export function SiteNavProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const requestOpen = useCallback(() => setOpen(true), []);
  const requestClose = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, requestOpen, requestClose }),
    [open, requestOpen, requestClose],
  );

  return (
    <SiteNavContext.Provider value={value}>
      <NavigationOverlay />
      {children}
    </SiteNavContext.Provider>
  );
}