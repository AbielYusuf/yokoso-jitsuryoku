"use client";

import { Music4 } from "lucide-react";
import { SoundtrackPanel } from "@/components/audio/SoundtrackPanel";
import { useSoundtrack } from "@/hooks/useSoundtrack";

export function SoundtrackPlayer() {
  const { isPlaying, panelOpen, setPanelOpen } = useSoundtrack();

  return (
    <div className="soundtrack-shell" aria-label="Global soundtrack player">
      {panelOpen && <SoundtrackPanel />}
      <button
        type="button"
        onClick={() => setPanelOpen(!panelOpen)}
        className={`soundtrack-trigger ${isPlaying ? "soundtrack-trigger-active" : ""}`}
        aria-label={panelOpen ? "Close soundtrack player" : "Open soundtrack player"}
        aria-expanded={panelOpen}
        aria-controls="soundtrack-archive"
      >
        <Music4 size={15} aria-hidden="true" />
      </button>
    </div>
  );
}
