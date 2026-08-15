/**
 * Ranking records — Year 2 Initial OAA / Individual Academic Evaluation
 * archive.
 *
 * Each record is an anime-canon Overall Ability Assessment entry captured at
 * the beginning of Year 2. This is an indexed evaluation sheet, not a
 * complete school-wide ranking — Anime Season 4 does not establish an
 * individual standing order for every student.
 *
 * Grades and numerical scores are stored separately so the UI can render
 * them cleanly and future filtering/sorting needs no string parsing.
 */
export type RankingRecord = {
  id: string;
  /** Resolves to the existing character record; the name links to it. */
  characterId: string;
  name: string;
  className: string;
  yearLabel: string;

  academicGrade: string;
  academicScore: number;

  physicalGrade: string;
  physicalScore: number;

  adaptabilityGrade: string;
  adaptabilityScore: number;

  socialContributionGrade: string;
  socialContributionScore: number;

  overallGrade: string;
  overallScore: number;

  /** Evaluation period this sheet belongs to. */
  evaluationPeriod: string;
  status: "Active";

  recordId: string;
};

export const RANKING: RankingRecord[] = [
  {
    id: "rk-horikita",
    characterId: "horikita-suzune",
    name: "Suzune Horikita",
    className: "2-D",
    yearLabel: "Second Year",
    academicGrade: "A-",
    academicScore: 81,
    physicalGrade: "B-",
    physicalScore: 61,
    adaptabilityGrade: "B+",
    adaptabilityScore: 77,
    socialContributionGrade: "C+",
    socialContributionScore: 58,
    overallGrade: "B",
    overallScore: 69,
    evaluationPeriod: "Year 2 — Initial OAA Evaluation",
    status: "Active",
    recordId: "ANHS-OAA-001",
  },
  {
    id: "rk-ayanokoji",
    characterId: "ayanokoji-kiyotaka",
    name: "Kiyotaka Ayanokoji",
    className: "2-D",
    yearLabel: "Second Year",
    academicGrade: "C+",
    academicScore: 51,
    physicalGrade: "C+",
    physicalScore: 60,
    adaptabilityGrade: "D+",
    adaptabilityScore: 39,
    socialContributionGrade: "D+",
    socialContributionScore: 40,
    overallGrade: "C",
    overallScore: 47,
    evaluationPeriod: "Year 2 — Initial OAA Evaluation",
    status: "Active",
    recordId: "ANHS-OAA-002",
  },
  {
    id: "rk-sudo",
    characterId: "sudo-ken",
    name: "Ken Sudo",
    className: "2-D",
    yearLabel: "Second Year",
    academicGrade: "E",
    academicScore: 20,
    physicalGrade: "A+",
    physicalScore: 96,
    adaptabilityGrade: "C-",
    adaptabilityScore: 43,
    socialContributionGrade: "C-",
    socialContributionScore: 41,
    overallGrade: "C-",
    overallScore: 50,
    evaluationPeriod: "Year 2 — Initial OAA Evaluation",
    status: "Active",
    recordId: "ANHS-OAA-003",
  },
  {
    id: "rk-kushida",
    characterId: "kushida-kikyo",
    name: "Kikyo Kushida",
    className: "2-D",
    yearLabel: "Second Year",
    academicGrade: "B+",
    academicScore: 76,
    physicalGrade: "B",
    physicalScore: 65,
    adaptabilityGrade: "A-",
    adaptabilityScore: 80,
    socialContributionGrade: "A",
    socialContributionScore: 88,
    overallGrade: "B+",
    overallScore: 77,
    evaluationPeriod: "Year 2 — Initial OAA Evaluation",
    status: "Active",
    recordId: "ANHS-OAA-004",
  },
  {
    id: "rk-katsuragi",
    characterId: "katsuragi-kouhei",
    name: "Kouhei Katsuragi",
    className: "2-A",
    yearLabel: "Second Year",
    academicGrade: "A",
    academicScore: 86,
    physicalGrade: "C+",
    physicalScore: 52,
    adaptabilityGrade: "B",
    adaptabilityScore: 69,
    socialContributionGrade: "B",
    socialContributionScore: 68,
    overallGrade: "B+",
    overallScore: 76,
    evaluationPeriod: "Year 2 — Initial OAA Evaluation",
    status: "Active",
    recordId: "ANHS-OAA-005",
  },
  {
    id: "rk-ichinose",
    characterId: "ichinose-honami",
    name: "Honami Ichinose",
    className: "2-B",
    yearLabel: "Second Year",
    academicGrade: "A-",
    academicScore: 79,
    physicalGrade: "C+",
    physicalScore: 54,
    adaptabilityGrade: "A-",
    adaptabilityScore: 83,
    socialContributionGrade: "A+",
    socialContributionScore: 95,
    overallGrade: "A-",
    overallScore: 80,
    evaluationPeriod: "Year 2 — Initial OAA Evaluation",
    status: "Active",
    recordId: "ANHS-OAA-006",
  },
  {
    id: "rk-sakayanagi",
    characterId: "sakayanagi-aris",
    name: "Arisu Sakayanagi",
    className: "2-A",
    yearLabel: "Second Year",
    academicGrade: "A+",
    academicScore: 100,
    physicalGrade: "E-",
    physicalScore: 9,
    adaptabilityGrade: "A",
    adaptabilityScore: 88,
    socialContributionGrade: "B",
    socialContributionScore: 66,
    overallGrade: "B+",
    overallScore: 75,
    evaluationPeriod: "Year 2 — Initial OAA Evaluation",
    status: "Active",
    recordId: "ANHS-OAA-007",
  },
  {
    id: "rk-ryuen",
    characterId: "ryuen-kakeru",
    name: "Kakeru Ryuen",
    className: "2-C",
    yearLabel: "Second Year",
    academicGrade: "C",
    academicScore: 43,
    physicalGrade: "B",
    physicalScore: 68,
    adaptabilityGrade: "B+",
    adaptabilityScore: 78,
    socialContributionGrade: "B-",
    socialContributionScore: 52,
    overallGrade: "B-",
    overallScore: 60,
    evaluationPeriod: "Year 2 — Initial OAA Evaluation",
    status: "Active",
    recordId: "ANHS-OAA-008",
  },
];
