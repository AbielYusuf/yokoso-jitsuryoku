"use client";

import { ListMusic, Pause, Play, SkipBack, SkipForward, X } from "lucide-react";
import { useSoundtrack } from "@/hooks/useSoundtrack";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

export function SoundtrackPanel() {
  const {
    tracks,
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    autoplayBlocked,
    error,
    play,
    pause,
    next,
    previous,
    selectTrack,
    seek,
    setVolume,
    setPanelOpen,
  } = useSoundtrack();

  return (
    <div className="soundtrack-panel" id="soundtrack-archive" role="region" aria-label="Soundtrack archive">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">SYS / AUDIO</p>
          <h2 className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-fg">Soundtrack Archive</h2>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-mono text-[8px] tracking-[0.18em] text-muted">{String(tracks.length).padStart(2, "0")} RECORDS</p>
          <button
            type="button"
            onClick={() => setPanelOpen(false)}
            className="soundtrack-control"
            aria-label="Close soundtrack player"
          >
            <X size={14} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="border-b border-line px-4 py-3">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[8px] uppercase tracking-[0.27em] text-muted">
              {autoplayBlocked ? "Audio standby / Play to enable" : "Now playing"}
            </p>
            <p className="mt-1 truncate font-mono text-[10px] uppercase tracking-[0.16em] text-fg">
              {currentTrack.title}
            </p>
          </div>
          <span className="mt-0.5 inline-flex items-center gap-1 font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
            <ListMusic size={12} aria-hidden="true" />
            Archive
          </span>
        </div>

        <label className="mt-3 flex items-center gap-2">
          <span className="sr-only">Track progress</span>
          <span className="font-mono text-[8px] tabular-nums text-muted">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={Math.min(currentTime, duration || 0)}
            onChange={(event) => seek(Number(event.target.value))}
            className="soundtrack-range min-w-12 flex-1"
            aria-label="Seek soundtrack"
            disabled={!duration}
          />
          <span className="font-mono text-[8px] tabular-nums text-muted">{formatTime(duration)}</span>
        </label>

        <div className="mt-3 flex items-center gap-1">
          <button
            type="button"
            onClick={previous}
            className="soundtrack-control"
            aria-label="Previous soundtrack or restart current track"
          >
            <SkipBack size={14} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={isPlaying ? pause : play}
            className="soundtrack-control soundtrack-control-primary"
            aria-label={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
          >
            {isPlaying ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
          </button>
          <button type="button" onClick={next} className="soundtrack-control" aria-label="Next soundtrack">
            <SkipForward size={14} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="soundtrack-track-list" role="list" aria-label="Available soundtracks">
        {tracks.map((track, index) => {
          const active = track.id === currentTrack.id;
          return (
            <button
              key={track.id}
              type="button"
              role="listitem"
              aria-current={active ? "true" : undefined}
              onClick={() => selectTrack(track.id)}
              className="soundtrack-track"
            >
              <span className="w-6 shrink-0 font-mono text-[8px] text-muted">{String(index + 1).padStart(2, "0")}</span>
              <span className="min-w-0 flex-1 truncate text-left font-mono text-[10px] uppercase tracking-[0.13em]">{track.title}</span>
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-accent">{active ? "PLAYING" : "SELECT"}</span>
            </button>
          );
        })}
      </div>

      <div className="border-t border-line px-4 py-3">
        <label className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
          <span>Volume</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
            className="soundtrack-range flex-1"
            aria-label="Soundtrack volume"
          />
          <span className="w-7 text-right text-fg">{Math.round(volume * 100)}</span>
        </label>
        {error && <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.16em] text-accent" role="status">{error}</p>}
        <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.2em] text-muted">Music <span className="ml-2 text-fg">赤い神Enryu</span></p>
      </div>
    </div>
  );
}
