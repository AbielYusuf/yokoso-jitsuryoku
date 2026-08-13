"use client";

import { createContext, useContext } from "react";

export type SiteNavValue = {
  open: boolean;
  requestOpen: () => void;
  requestClose: () => void;
};

export const SiteNavContext = createContext<SiteNavValue | null>(null);

export function useSiteNav() {
  const ctx = useContext(SiteNavContext);
  if (!ctx) throw new Error("useSiteNav must be used within a SiteNavProvider");
  return ctx;
}