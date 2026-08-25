"use client";

import { useContext } from "react";
import { SoundtrackContext } from "@/components/audio/soundtrack-context";

export function useSoundtrack() {
  const value = useContext(SoundtrackContext);
  if (!value) throw new Error("useSoundtrack must be used within SoundtrackProvider");
  return value;
}
