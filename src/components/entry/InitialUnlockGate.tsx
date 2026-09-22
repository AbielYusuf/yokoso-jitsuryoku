"use client";

import { useState } from "react";
import { EnterGate } from "@/components/entry/EnterGate";

export function InitialUnlockGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);

  if (unlocked) return <>{children}</>;

  return (
    <main className="unlock-screen flex min-h-svh items-center justify-center overflow-hidden bg-bg px-5 sm:px-8">
      <div aria-hidden="true" className="grain" />
      <EnterGate onUnlocked={() => setUnlocked(true)} />
    </main>
  );
}
