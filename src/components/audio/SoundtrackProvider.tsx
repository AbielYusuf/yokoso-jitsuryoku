"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { openingSoundtrack, soundtracks } from "@/data/soundtracks";
import { SoundtrackContext } from "@/components/audio/soundtrack-context";

const VOLUME_KEY = "cote-soundtrack-volume";
const DEFAULT_VOLUME = 0.5;

function shuffled(ids: string[]) {
  const result = [...ids];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

export function SoundtrackProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentIdRef = useRef(openingSoundtrack.id);
  const historyRef = useRef<string[]>([]);
  const queueRef = useRef<string[]>([]);
  const openingCycleCompleteRef = useRef(false);
  const autoplayAttemptedRef = useRef(false);
  const [currentTrackId, setCurrentTrackId] = useState(openingSoundtrack.id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(DEFAULT_VOLUME);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);

  const currentTrack = soundtracks.find((track) => track.id === currentTrackId) ?? openingSoundtrack;

  const attemptPlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setError(null);
    void audio.play().then(
      () => setAutoplayBlocked(false),
      (reason: unknown) => {
        setAutoplayBlocked(true);
        if (process.env.NODE_ENV === "development") console.info("Soundtrack playback awaits user activation.", reason);
      },
    );
  }, []);

  const changeTrack = useCallback((id: string, shouldPlay: boolean, addHistory: boolean) => {
    const audio = audioRef.current;
    if (!audio || id === currentIdRef.current && !addHistory) {
      if (shouldPlay) attemptPlay();
      return;
    }
    if (addHistory && currentIdRef.current !== id) historyRef.current.push(currentIdRef.current);
    currentIdRef.current = id;
    setCurrentTrackId(id);
    setCurrentTime(0);
    setDuration(0);
    setError(null);
    const track = soundtracks.find((item) => item.id === id);
    if (!track) return;
    audio.src = track.src;
    audio.load();
    if (shouldPlay) attemptPlay();
  }, [attemptPlay]);

  const takeNextId = useCallback(() => {
    if (queueRef.current.length === 0) {
      const candidates = openingCycleCompleteRef.current
        ? soundtracks.map((track) => track.id)
        : soundtracks.filter((track) => !track.isOpeningTrack).map((track) => track.id);
      queueRef.current = shuffled(candidates);
      if (queueRef.current[0] === currentIdRef.current && queueRef.current.length > 1) {
        [queueRef.current[0], queueRef.current[1]] = [queueRef.current[1], queueRef.current[0]];
      }
      openingCycleCompleteRef.current = true;
    }
    return queueRef.current.shift()!;
  }, []);

  const next = useCallback(() => {
    changeTrack(takeNextId(), true, true);
  }, [changeTrack, takeNextId]);

  const previous = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.currentTime > 5) {
      audio.currentTime = 0;
      setCurrentTime(0);
      attemptPlay();
      return;
    }
    const previousId = historyRef.current.pop();
    if (previousId) changeTrack(previousId, true, false);
    else {
      audio.currentTime = 0;
      setCurrentTime(0);
      attemptPlay();
    }
  }, [attemptPlay, changeTrack]);

  const selectTrack = useCallback((id: string) => {
    if (!soundtracks.some((track) => track.id === id)) return;
    queueRef.current = queueRef.current.filter((queuedId) => queuedId !== id);
    if (id === currentIdRef.current) attemptPlay();
    else changeTrack(id, true, true);
  }, [attemptPlay, changeTrack]);

  const seek = useCallback((time: number) => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(time)) return;
    audio.currentTime = Math.max(0, Math.min(time, audio.duration || 0));
    setCurrentTime(audio.currentTime);
  }, []);

  const updateVolume = useCallback((nextVolume: number) => {
    const safeVolume = Math.max(0, Math.min(1, nextVolume));
    setVolumeState(safeVolume);
    if (audioRef.current) audioRef.current.volume = safeVolume;
    try {
      window.localStorage.setItem(VOLUME_KEY, String(safeVolume));
    } catch {
      // Playback still works when storage is unavailable.
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    let initialVolume = DEFAULT_VOLUME;
    try {
      const storedValue = window.localStorage.getItem(VOLUME_KEY);
      const stored = storedValue === null ? Number.NaN : Number(storedValue);
      if (Number.isFinite(stored) && stored >= 0 && stored <= 1) initialVolume = stored;
    } catch {
      // Use the default when storage is unavailable.
    }
    audio.volume = initialVolume;
    setVolumeState(initialVolume);
    audio.src = openingSoundtrack.src;
    audio.load();
    if (!autoplayAttemptedRef.current) {
      autoplayAttemptedRef.current = true;
      attemptPlay();
    }
  }, [attemptPlay]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onMetadata = () => setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
    const onTime = () => setCurrentTime(audio.currentTime);
    const onPlay = () => { setIsPlaying(true); setAutoplayBlocked(false); };
    const onPause = () => setIsPlaying(false);
    const onEnded = () => next();
    const onError = () => {
      setIsPlaying(false);
      setError("TRACK UNAVAILABLE — SELECT ANOTHER RECORD");
      if (process.env.NODE_ENV === "development") console.error("Unable to load soundtrack:", audio.currentSrc);
    };
    audio.addEventListener("loadedmetadata", onMetadata);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);
    return () => {
      audio.removeEventListener("loadedmetadata", onMetadata);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, [next]);

  const value = useMemo(() => ({
    tracks: soundtracks,
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    autoplayBlocked,
    error,
    panelOpen,
    play: attemptPlay,
    pause: () => audioRef.current?.pause(),
    activate: attemptPlay,
    next,
    previous,
    selectTrack,
    seek,
    setVolume: updateVolume,
    setPanelOpen,
  }), [autoplayBlocked, currentTime, currentTrack, duration, error, isPlaying, next, panelOpen, previous, selectTrack, seek, updateVolume, volume, attemptPlay]);

  return (
    <SoundtrackContext.Provider value={value}>
      {children}
      <audio ref={audioRef} preload="metadata" aria-hidden="true" />
    </SoundtrackContext.Provider>
  );
}
