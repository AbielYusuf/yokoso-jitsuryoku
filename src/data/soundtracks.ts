export interface Soundtrack {
  id: string;
  title: string;
  artist: string;
  src: string;
  isOpeningTrack?: boolean;
}

const artist = "赤い神Enryu";

export const soundtracks: Soundtrack[] = [
  {
    id: "ayanokoji-theme",
    title: "Ayanokouji Theme",
    artist,
    src: "/audio/1. Classroom of The Elite (Ayanokouji theme).mp3",
  },
  {
    id: "plan",
    title: "Plan",
    artist,
    src: "/audio/2. Classroom of The Elite (Plan).mp3",
  },
  {
    id: "quote",
    title: "Quote",
    artist,
    src: "/audio/3. Classroom of The Elite (Quote).mp3",
    isOpeningTrack: true,
  },
  {
    id: "pact",
    title: "PACT",
    artist,
    src: "/audio/4. Classroom of The Elite (PACT).mp3",
  },
  {
    id: "white-room",
    title: "The White Room",
    artist,
    src: "/audio/5. Classroom of The Elite (The White Room).mp3",
  },
  {
    id: "mastermind-x",
    title: "Mastermind X",
    artist,
    src: "/audio/6. Classroom of The Elite (Mastermind X).mp3",
  },
  {
    id: "ayanokoji-vs-ryuen",
    title: "Ayanokouji vs Ryuuen",
    artist,
    src: "/audio/7. Classroom of The Elite (Ayanokouji vs Ryuuen).mp3",
  },
  {
    id: "queen",
    title: "Queen",
    artist,
    src: "/audio/8. Classroom of The Elite (Queen).mp3",
  },
  {
    id: "echoes-of-existence",
    title: "Echoes of Existence",
    artist,
    src: "/audio/9. Classroom of The Elite III (Echoes of Existence).mp3",
  },
  {
    id: "narcissists-dream",
    title: "The Narcissist's Dream",
    artist,
    src: "/audio/10. Classroom of The Elite III (The Narcissist's Dream).mp3",
  },
  {
    id: "chess-symphony",
    title: "The Chess Symphony",
    artist,
    src: "/audio/11. Classroom of The Elite III (The Chess Symphony).mp3",
  },
];

export const openingSoundtrack = soundtracks.find((track) => track.isOpeningTrack)!;
