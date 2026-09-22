<div align="center">

# ANHS // PRIVATE ARCHIVE

### ようこそ実力至上主義の教室へ

<img width="2298" height="1579" alt="image" src="https://github.com/user-attachments/assets/1ff4ced1-3d04-4ce8-b68c-2f37e9f2ff05" />

A fan-made **Classroom of the Elite** archive experience  
designed around the visual identity of a restricted ANHS information system.

**STATUS // ONLINE**

[Live Demo](https://yokoso-jitsuryoku.vercel.app)

</div>

---

## // Overview

**ANHS Private Archive** is an unofficial fan-made web experience inspired by  
*Classroom of the Elite / ようこそ実力至上主義の教室へ*.

Rather than presenting the series as a conventional wiki, this project treats its data as if it were part of an internal Advanced Nurturing High School archive.

The interface combines:

- classified archive presentation
- dark institutional styling
- restrained magenta accents
- motion-driven record reveals
- persistent soundtrack playback
- character, class, exam, and evaluation records
- a global access-gate experience

The goal is to make browsing the archive feel like accessing an internal ANHS system rather than reading a standard database.

---

## // Live Archive

**Deployment**

https://yokoso-jitsuryoku.vercel.app

> ENTER THE SCHOOL  
> Access the archive through the global entry gate.

---

## // Features

### Archive System

- Character archive
- Character detail records
- Class archive
- Class detail records
- Special Exam archive
- Exam detail records
- Individual OAA evaluation archive
- Timeline archive
- About archive

### Interaction

- Global first-entry unlock gate
- Persistent App Router shell
- Global navigation overlay
- Character search and filtering
- Static detail route generation
- Responsive layouts
- Keyboard-accessible controls
- Reduced-motion support

### Motion

- GSAP page entrances
- ScrollTrigger reveals
- Route-specific archive motion
- Navigation overlay animation
- Initial unlock transition

---

## // Current Archive Scope

Current archive coverage:

**Season 1 → Season 4 Episode 16**

Current source data includes:

| Archive | Records |
|---|---:|
| Characters | 64 |
| Classes | 10 |
| Special Exams | 10 |
| OAA Evaluations | 8 |
| Soundtrack Tracks | 11 |

The archive follows the internal canon scope and mapping established for this project.

---

## // OAA Archive

The Ranking section is structured as an **Individual Academic Evaluation Archive**, based on the Year 2 initial OAA system.

It is intentionally **not** presented as a fabricated complete school-wide ranking.

Evaluations include:

- Academic Ability
- Physical Ability
- Adaptability
- Social Contribution
- Overall Evaluation

---

## // Soundtrack System

The site includes a persistent global soundtrack system.

### Playback behavior

- Every fresh session begins with **Classroom of The Elite (Quote)**
- Music persists across client-side route navigation
- Hard refresh starts a new soundtrack session
- Volume preference persists locally
- Shuffle avoids immediate repeats
- Previous-track history is preserved during the active session
- Manual track selection is supported
- Seek, volume, play, pause, next, and previous controls are available through the header soundtrack interface

The soundtrack system uses one persistent HTML audio element mounted at the application root.

---

## // Music

Music featured in the website is by:

**赤い神Enryu**

Permission to use the tracks in this non-commercial fan project was granted directly by the artist via email.

All music remains the property of its respective creator and rights holders.

Special thanks to **赤い神Enryu** for allowing the soundtrack to be featured in this project.

---

## // Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **GSAP**
- **ScrollTrigger**
- **Lucide React**
- **Vercel**

---

## // Architecture

```text
src/
├── app/
│   ├── characters/
│   ├── classes/
│   ├── exams/
│   ├── ranking/
│   └── timeline/
│
├── components/
│   ├── audio/
│   ├── characters/
│   ├── classes/
│   ├── entry/
│   ├── exams/
│   ├── frame/
│   ├── nav/
│   └── ranking/
│
├── data/
├── hooks/
└── lib/
