<div align="center">

# ANHS // PRIVATE ARCHIVE

### ようこそ実力至上主義の教室へ

An immersive, unofficial **Classroom of the Elite** archive experience—presented as an institutional record system from Advanced Nurturing High School.

**STATUS // ONLINE · ANIME SCOPE // S1—S4 EP16**

[**ENTER THE LIVE ARCHIVE**](https://yokoso-jitsuryoku.vercel.app)

</div>

---

## Overview

**ANHS Private Archive** is a non-commercial fan project inspired by *Classroom of the Elite / ようこそ実力至上主義の教室へ*.

It is not designed as a conventional wiki. Characters, classes, examinations, environments, evaluations, and connected case files are presented through an editorial archive interface inspired by Advanced Nurturing High School: near-black surfaces, restrained magenta accents, mono metadata, serif display typography, architectural hairlines, generous negative space, and subtle GSAP motion.

## Archive modules

| Module | Records | What it contains |
|---|---:|---|
| **Characters** | 64 | Searchable and filterable student, staff, and administrator records with individual detail routes. |
| **Classes** | 10 | Class registers, student membership, standing, and dedicated class records. |
| **Special Exams** | 10 | Examination rules, participants, outcomes, and static detail pages. |
| **Locations** | 8 | Image-forward environmental records focused on architecture, terrain, institutional function, and place-based context. |
| **Ranking / OAA** | 8 | Individual Year 2 initial OAA evaluations—not a fabricated full-school ranking. |
| **Dossiers** | 6 | Curated, relationship-focused case files connecting institutions, incidents, internal conflicts, networks, and administrative operations. |
| **About** | — | Project identity, archive philosophy, structure, evaluation context, and editorial notes. |

The Timeline implementation remains in the source tree but is intentionally absent from the primary navigation.

### Locations

The environmental archive currently documents:

- Student Dormitory
- Keyaki Mall
- Student Council Room
- Luxury Cruise Ship
- Uninhabited Island — Year 1
- Mixed Training Camp Facility
- Uninhabited Island — Year 2
- White Room Facility

Location detail pages keep relationships deliberately light, linking only to relevant Exam and Dossier records.

### Dossiers

The curated case-file collection contains:

- White Room
- Student Council
- Rooftop Incident
- Class D Internal Conflict
- Tsukishiro Intervention
- First-Year Network

These are cross-record investigations rather than timeline events or character biographies.

## Current archive scope

The current canon boundary is **Season 1 through Season 4 Episode 16**. The archive does not claim complete light-novel coverage.

All primary archive content is held in typed, centralized source data. Dynamic detail pages are statically enumerated with `generateStaticParams`, and unknown record IDs resolve through the application's not-found behavior.

## Featured systems

### Entry experience

A fresh load begins at the global **ENTER THE SCHOOL** gate. The normal site shell remains hidden until entry, including when a visitor opens a detail route directly. Unlock state is intentionally session-memory only: a hard refresh returns to the gate, and no authentication or security behavior is implied.

### Navigation and motion

- Persistent global header and animated navigation overlay
- Visible order: Characters, Classes, Special Exams, Locations, Ranking, Dossiers, About
- Route-specific GSAP entrances and ScrollTrigger reveals
- Keyboard-visible focus states and reduced-motion handling
- Responsive editorial layouts across archive and detail views

### Soundtrack

The site includes a persistent global soundtrack provider with **11 tracks**.

- **Quote** opens every fresh audio session
- Autoplay is attempted; if the browser blocks it, the first valid interaction can begin playback
- Playback continues across client-side navigation
- A hard refresh starts a new track session
- Volume persists locally; track, position, queue, and history do not persist across refreshes
- Play/pause, next, previous, seeking, volume, and manual track selection are supported
- A compact circular header control opens the expanded soundtrack panel on demand

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 · App Router |
| UI | React 19 · TypeScript · Tailwind CSS |
| Motion | GSAP · ScrollTrigger |
| Icons | Lucide React |
| Deployment | Vercel |

The installed `motion` package is not advertised here because the current interface uses GSAP for its implemented motion system.

## Architecture

The root application shell composes the major global systems in this order:

```text
SiteNavProvider
└── SoundtrackProvider
    └── InitialUnlockGate
        ├── SiteFrame
        └── Requested route
```

- `SiteNavProvider` coordinates global navigation state.
- `NavigationOverlay` renders the primary archive menu.
- `SoundtrackProvider` keeps one audio session alive across client-side routes.
- `InitialUnlockGate` controls the stylistic first-entry reveal.
- `SiteFrame` provides the persistent header, soundtrack control, and navigation trigger.
- Typed data modules under `src/data` are the canonical archive source.

## Local development

Requirements: a current Node.js release and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful checks:

```bash
pnpm exec tsc --noEmit --pretty false
pnpm lint
pnpm build
```

## Deployment

The project is deployed on Vercel:

**[yokoso-jitsuryoku.vercel.app](https://yokoso-jitsuryoku.vercel.app)**

For another Vercel deployment, import the repository and use the detected Next.js settings with pnpm as the package manager.

## Current status

The principal archive modules, global entry gate, navigation, soundtrack system, and static detail routes are implemented. Remaining work is focused on:

- dedicated imagery for the Locations archive
- final disposition of the internal Timeline section
- ongoing browser, responsive, and production-build QA

## Music credit

Music by **赤い神Enryu**.

Used with permission granted directly by the artist for this non-commercial fan project. All rights to the music remain with the respective creator and rightsholders; this repository does not grant redistribution rights.

## Disclaimer

This is an unofficial, non-commercial fan project. *Classroom of the Elite* and its original materials belong to their respective creators and rights holders. This project is not affiliated with, sponsored by, or endorsed by the official rights holders, and makes no ownership claim over the original series material.

## Credits

Created and developed by **Abiel Yusuf**.
