/**
 * Curated thematic files for the dossier archive.
 *
 * Dossiers organize existing anime-scope records into editorial case files;
 * they are not official school documents or additional canon datasets.
 * Images belong in `public/images/dossiers/`. An empty image value deliberately
 * renders the archival placeholder until an approved local asset is supplied.
 */
export interface DossierRecord {
  id: string;
  title: string;
  japaneseTitle?: string;
  category: string;
  classification: string;
  schoolYear?: string;
  status: string;
  summary: string;
  description: string;
  image: string;
  relatedCharacterIds: string[];
  relatedClassIds?: string[];
  relatedExamIds?: string[];
  recordId: string;
}

export const DOSSIERS: DossierRecord[] = [
  {
    id: "white-room",
    title: "White Room",
    japaneseTitle: "ホワイトルーム",
    category: "Background File",
    classification: "Restricted",
    status: "Open Record",
    summary: "A sealed educational project whose influence reaches beyond the school grounds.",
    description:
      "This file gathers the archive's verified connections to the White Room and the individuals whose actions at ANHS are tied to it. The institution itself remains outside the school's ordinary records, leaving much of the file intentionally restricted.",
    image: "",
    relatedCharacterIds: [
      "ayanokoji-kiyotaka",
      "amasawa-ichika",
      "yagami-takuya",
      "shiba-katsunori",
      "tsukishiro-tokunari",
      "ayanokoji-atsuomi",
    ],
    relatedExamIds: ["exam-partner-y2", "exam-island-y2"],
    recordId: "ANHS-DOS-001",
  },
  {
    id: "student-council",
    title: "Student Council",
    japaneseTitle: "生徒会",
    category: "Institutional File",
    classification: "Internal",
    status: "Active",
    summary: "The student body office where authority, succession, and class politics converge.",
    description:
      "A record of the student council across the transition from Manabu Horikita to Miyabi Nagumo. It follows the council as an institutional force and the students drawn into its competing views of leadership.",
    image: "",
    relatedCharacterIds: [
      "horikita-manabu",
      "tachibana-akane",
      "nagumo-miyabi",
      "horikita-suzune",
      "ichinose-honami",
    ],
    relatedClassIds: ["2-b", "2-d", "3-a"],
    recordId: "ANHS-DOS-002",
  },
  {
    id: "ryuen-confrontation",
    title: "Ryuen Confrontation",
    japaneseTitle: "龍園との対峙",
    category: "Conflict File",
    classification: "Restricted",
    schoolYear: "First Year",
    status: "Closed",
    summary: "The pursuit of Class D's hidden strategist culminates in a private confrontation.",
    description:
      "This dossier connects the campaign led by Kakeru Ryuen with the students caught in its escalation. It records the confrontation as a turning point in the balance between the two classes without expanding beyond the archive's anime continuity.",
    image: "",
    relatedCharacterIds: [
      "ayanokoji-kiyotaka",
      "ryuen-kakeru",
      "karuizawa-kei",
      "ibuki-mio",
      "ishizaki-daichi",
      "yamada-albert",
    ],
    relatedClassIds: ["2-c", "2-d"],
    recordId: "ANHS-DOS-003",
  },
  {
    id: "kushida-conflict",
    title: "Kushida Conflict",
    japaneseTitle: "櫛田の対立",
    category: "Internal File",
    classification: "Confidential",
    status: "Ongoing",
    summary: "A sustained conflict shaped by reputation, concealed history, and competing loyalties.",
    description:
      "The file traces Kikyo Kushida's conflict with Suzune Horikita and the agreements and examinations that bring other students into its orbit. Its focus is the documented school conflict rather than speculation beyond the current archive scope.",
    image: "",
    relatedCharacterIds: [
      "kushida-kikyo",
      "horikita-suzune",
      "ayanokoji-kiyotaka",
      "yagami-takuya",
    ],
    relatedClassIds: ["1-b", "2-d"],
    relatedExamIds: ["exam-paper-shuffle", "exam-class-poll", "exam-island-y2"],
    recordId: "ANHS-DOS-004",
  },
  {
    id: "nagumo-administration",
    title: "Nagumo Administration",
    japaneseTitle: "南雲政権",
    category: "Leadership File",
    classification: "Internal",
    status: "Active",
    summary: "The student council administration established under Miyabi Nagumo's leadership.",
    description:
      "A focused record of Nagumo's rise to the student council presidency and the upper-year students positioned around his administration. The dossier is limited to relationships already represented in the anime archive.",
    image: "",
    relatedCharacterIds: [
      "nagumo-miyabi",
      "horikita-manabu",
      "asahina-nazuna",
      "kiriyama-ikuto",
      "kiryuin-fuka",
    ],
    relatedClassIds: ["3-a", "3-b"],
    relatedExamIds: ["exam-training-camp"],
    recordId: "ANHS-DOS-005",
  },
  {
    id: "first-year-threats",
    title: "First-Year Threats",
    japaneseTitle: "一年生の脅威",
    category: "Threat File",
    classification: "Restricted",
    schoolYear: "Second Year",
    status: "Under Review",
    summary: "The first-year cohort enters the archive through coordinated pressure and individual agendas.",
    description:
      "This dossier indexes the first-year students whose actions become materially connected to the second-year archive. It records their involvement through the partner and island examinations without assigning motives beyond the current anime record.",
    image: "",
    relatedCharacterIds: [
      "nanase-tsubasa",
      "hosen-kazuomi",
      "tsubaki-sakurako",
      "utomiya-riku",
      "yagami-takuya",
      "amasawa-ichika",
    ],
    relatedClassIds: ["1-a", "1-b", "1-c", "1-d"],
    relatedExamIds: ["exam-partner-y2", "exam-island-y2"],
    recordId: "ANHS-DOS-006",
  },
];
