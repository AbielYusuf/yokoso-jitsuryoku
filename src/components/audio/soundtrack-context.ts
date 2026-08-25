"use client";

import { createContext } from "react";
import type { Soundtrack } from "@/data/soundtracks";

export interface SoundtrackContextValue {
  tracks: Soundtrack[];
  currentTrack: Soundtrack;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  autoplayBlocked: boolean;
  error: string | null;
  panelOpen: boolean;
  play: () => void;
  pause: () => void;
  activate: () => void;
  next: () => void;
  previous: () => void;
  selectTrack: (id: string) => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  setPanelOpen: (open: boolean) => void;
}

export const SoundtrackContext = createContext<SoundtrackContextValue | null>(null);
