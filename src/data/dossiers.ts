/**
 * Curated thematic files for the dossier archive.
 *
 * Dossiers organize existing anime-scope records into editorial case files;
 * they are not official school documents or additional canon datasets.
 * Images belong in `public/images/dossiers/`. An empty image value deliberately
 * renders the archival placeholder until an approved local asset is supplied.
 */
export type DossierCategory =
  | "Institution"
  | "Administration"
  | "Incident"
  | "Internal Conflict"
  | "Network";

export type DossierClassification =
  | "RESTRICTED"
  | "CONFIDENTIAL"
  | "INTERNAL"
  | "CONTROLLED";

export interface DossierRecord {
  id: string;
  title: string;
  japaneseTitle?: string;
  category: DossierCategory;
  classification: DossierClassification;
  schoolYear?: string;
  status: string;
  summary: string;
  description: string;
  image: string;
  centralCharacterIds: string[];
  secondaryCharacterIds: string[];
  relatedClassIds: string[];
  relatedExamIds: string[];
  evidenceBoundary: string;
  spoilerNote?: string;
  recordId: string;
}

export const DOSSIERS: DossierRecord[] = [
  {
    id: "white-room",
    title: "White Room",
    japaneseTitle: "ホワイトルーム",
    category: "Institution",
    classification: "RESTRICTED",
    status: "Open Record",
    summary:
      "An external educational institution connected to Ayanokoji's background and continuing pressure within ANHS.",
    description:
      "This file records the White Room as a system beyond ANHS, the people directly connecting it to Ayanokoji, and the consequences that reach the school. It is limited to relationships established through the current anime record and does not extend into later institutional history or outcomes.",
    image: "/assets/dossiers/white-room.jpg",
    centralCharacterIds: [
      "ayanokoji-kiyotaka",
      "ayanokoji-atsuomi",
      "tsukishiro-tokunari",
    ],
    secondaryCharacterIds: ["sakayanagi-arisu"],
    relatedClassIds: [],
    relatedExamIds: ["exam-partner-y2", "exam-island-y2"],
    evidenceBoundary: "Through Season 4 Episode 16",
    recordId: "ANHS-DOS-001",
  },
  {
    id: "student-council",
    title: "Student Council",
    japaneseTitle: "生徒会",
    category: "Institution",
    classification: "INTERNAL",
    status: "Active",
    summary:
      "The school institution shaped by the transition from Manabu Horikita's council to Miyabi Nagumo's administration.",
    description:
      "This dossier follows the Student Council across two administrations, focusing on succession, competing approaches to school leadership, and the students positioned around that change. Nagumo's administration is recorded here as an era of the same institution rather than as a separate file.",
    image: "/assets/dossiers/student-council.jpg",
    centralCharacterIds: [
      "horikita-manabu",
      "tachibana-akane",
      "nagumo-miyabi",
      "kiriyama-ikuto",
    ],
    secondaryCharacterIds: [
      "asahina-nazuna",
      "ichinose-honami",
      "horikita-suzune",
    ],
    relatedClassIds: [],
    relatedExamIds: ["exam-training-camp", "exam-island-y2"],
    evidenceBoundary: "Through Season 4 Episode 16",
    recordId: "ANHS-DOS-002",
  },
  {
    id: "rooftop-incident",
    title: "Rooftop Incident",
    category: "Incident",
    classification: "CONFIDENTIAL",
    schoolYear: "First Year",
    status: "Closed",
    summary:
      "Ryuen's search for Class D's hidden strategist culminates in Karuizawa's confinement and a private confrontation.",
    description:
      "This incident file records the immediate participants in Ryuen's effort to expose the strategist operating behind Class D. Its scope is the confinement, confrontation, and direct aftermath rather than a wider biography of Ryuen or Ayanokoji.",
    image: "/assets/dossiers/rooftop-incident.jpg",
    centralCharacterIds: [
      "ayanokoji-kiyotaka",
      "ryuen-kakeru",
      "karuizawa-kei",
    ],
    secondaryCharacterIds: ["ibuki-mio", "ishizaki-daichi", "yamada-albert"],
    relatedClassIds: ["2-c", "2-d"],
    relatedExamIds: [],
    evidenceBoundary: "Season 2 Episodes 11–13",
    spoilerNote: "Contains outcomes from the Season 2 rooftop confrontation arc.",
    recordId: "ANHS-DOS-003",
  },
  {
    id: "class-d-internal-conflict",
    title: "Class D Internal Conflict",
    category: "Internal Conflict",
    classification: "CONFIDENTIAL",
    status: "Ongoing",
    summary:
      "A recurring conflict involving Kushida's concealed motives, Horikita's leadership, and the cohesion of their class.",
    description:
      "This file connects the internal dispute across the students and examinations that bring it into the open. It records the pressure placed on class trust and leadership without retelling Kushida's full character history or extending beyond the current anime scope.",
    image: "/assets/dossiers/class-d-internal-conflict.jpg",
    centralCharacterIds: [
      "kushida-kikyo",
      "horikita-suzune",
      "ayanokoji-kiyotaka",
    ],
    secondaryCharacterIds: [],
    relatedClassIds: ["2-d"],
    relatedExamIds: ["exam-sports-festival", "exam-paper-shuffle"],
    evidenceBoundary: "Season 1 through Season 4 Episode 16",
    recordId: "ANHS-DOS-004",
  },
  {
    id: "tsukishiro-intervention",
    title: "Tsukishiro Intervention",
    category: "Administration",
    classification: "RESTRICTED",
    status: "Closed Record",
    summary:
      "An administrative intervention directed at removing Ayanokoji through interference inside ANHS.",
    description:
      "This dossier follows Tsukishiro's appointment, interference in school examinations, use of first-year pressure, and the confrontation at I2. It treats the intervention as an operation within ANHS while keeping the wider White Room institution in its own file.",
    image: "/assets/dossiers/tsukishiro-intervention.jpg",
    centralCharacterIds: [
      "tsukishiro-tokunari",
      "ayanokoji-kiyotaka",
      "shiba-katsunori",
    ],
    secondaryCharacterIds: [
      "ayanokoji-atsuomi",
      "sakayanagi-arisu",
      "chabashira-sae",
      "horikita-suzune",
    ],
    relatedClassIds: [],
    relatedExamIds: [
      "exam-event-selection",
      "exam-partner-y2",
      "exam-island-y2",
    ],
    evidenceBoundary: "Season 3 through Season 4 Episode 16",
    recordId: "ANHS-DOS-005",
  },
  {
    id: "first-year-network",
    title: "First-Year Network",
    category: "Network",
    classification: "CONTROLLED",
    schoolYear: "Second Year",
    status: "Under Review",
    summary:
      "Intersecting first-year actors connected to the Year 2 Partner and island examinations.",
    description:
      "This investigation file maps first-year students whose separate actions intersect with the second-year archive. The relationships do not describe a single faction and do not assign one motive or threat status to every person on file.",
    image: "/assets/dossiers/first-year-network.jpg",
    centralCharacterIds: [
      "hosen-kazuomi",
      "nanase-tsubasa",
      "tsubaki-sakurako",
      "utomiya-riku",
      "amasawa-ichika",
    ],
    secondaryCharacterIds: ["yagami-takuya"],
    relatedClassIds: ["1-a", "1-b", "1-c", "1-d"],
    relatedExamIds: ["exam-partner-y2", "exam-island-y2"],
    evidenceBoundary: "Season 4 Episodes 1–16",
    recordId: "ANHS-DOS-006",
  },
];
