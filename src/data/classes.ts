/**
 * Class records for the ANHS class register.
 *
 * CANON DATA — CURRENT SEASON 4 CLASS REGISTER.
 * Student rosters reference `characters.ts` IDs only (never duplicated
 * character objects). `homeroom` holds the current homeroom teacher's name;
 * `null` renders as "Pending". `rank` and `classPoints` are left as
 * "Pending"/`null` where a verified current value is not on file.
 */
export type ClassRecord = {
  id: string;
  name: string;
  yearLabel: string;
  homeroom: string | null;
  rank: string;
  status: string;
  recordId: string;
  description: string;
  /**
   * IDs of resolvable student records for this class. Kept optional so the
   * placeholder register stays valid; filled with references only (never
   * duplicated character objects).
   */
  studentIds?: string[];
  /**
   * Cumulative class points. Optional and nullable — `null` renders as
   * "Pending" until the canon pass supplies a verified numeric value.
   */
  classPoints?: number | null;
};

export const CLASSES: ClassRecord[] = [
  {
    id: "1-a",
    name: "1-A",
    yearLabel: "First Year",
    homeroom: null,
    rank: "Pending",
    status: "Active",
    recordId: "ANHS-CLASS-01-A",
    classPoints: null,
    description:
      "The leading first-year division. Standings recorded on the current register.",
    studentIds: ["amasawa-ichika"],
  },
  {
    id: "1-b",
    name: "1-B",
    yearLabel: "First Year",
    homeroom: null,
    rank: "Pending",
    status: "Active",
    recordId: "ANHS-CLASS-01-B",
    classPoints: null,
    description:
      "A first-year register in the middle order. Outcomes recorded with care.",
    studentIds: ["yagami-takuya"],
  },
  {
    id: "1-c",
    name: "1-C",
    yearLabel: "First Year",
    homeroom: null,
    rank: "Pending",
    status: "Active",
    recordId: "ANHS-CLASS-01-C",
    classPoints: null,
    description:
      "A first-year register below the median. Conduct monitored closely.",
    studentIds: ["tsubaki-sakurako", "utomiya-riku"],
  },
  {
    id: "1-d",
    name: "1-D",
    yearLabel: "First Year",
    homeroom: null,
    rank: "Pending",
    status: "Active",
    recordId: "ANHS-CLASS-01-D",
    classPoints: null,
    description:
      "The lowest-standing first-year division. Aptitude uneven on record.",
    studentIds: ["nanase-tsubasa", "hosen-kazuomi"],
  },
  {
    id: "2-a",
    name: "2-A",
    yearLabel: "Second Year",
    homeroom: "Tomonari Mashima",
    rank: "1",
    status: "Active",
    recordId: "ANHS-CLASS-02-A",
    classPoints: null,
    description:
      "The lead division. High cumulative points, held to the strictest accounting.",
    studentIds: [
      "sakayanagi-aris",
      "katsuragi-kouhei",
      "kamuro-masumi",
      "hashimoto-masayoshi",
      "kito-hayato",
      "machida-koji",
    ],
  },
  {
    id: "2-b",
    name: "2-B",
    yearLabel: "Second Year",
    homeroom: "Chie Hoshinomiya",
    rank: "2",
    status: "Active",
    recordId: "ANHS-CLASS-02-B",
    classPoints: null,
    description:
      "A steady middle register. Consistent in examinations and conduct alike.",
    studentIds: [
      "ichinose-honami",
      "kanzaki-ryuji",
      "shibata-sou",
      "shiranami-chihiro",
      "amikura-mako",
      "kobashi-yume",
    ],
  },
  {
    id: "2-c",
    name: "2-C",
    yearLabel: "Second Year",
    homeroom: "Kazuma Sakagami",
    rank: "3",
    status: "Active",
    recordId: "ANHS-CLASS-02-C",
    classPoints: null,
    description:
      "Standing below the median. Outcomes recorded with careful attention.",
    studentIds: [
      "ryuen-kakeru",
      "ibuki-mio",
      "shiina-hiyori",
      "ishizaki-daichi",
      "yamada-albert",
      "kaneda-satoru",
      "komiya-jugo",
      "kondo-reo",
      "yabu-nanami",
      "morofuji-rika",
    ],
  },
  {
    id: "2-d",
    name: "2-D",
    yearLabel: "Second Year",
    homeroom: "Sae Chabashira",
    rank: "4",
    status: "Active",
    recordId: "ANHS-CLASS-02-D",
    classPoints: null,
    description:
      "Lowest in standing. Aptitude uneven; results monitored closely.",
    studentIds: [
      "ayanokoji-kiyotaka",
      "horikita-suzune",
      "karuizawa-kei",
      "kushida-kikyo",
      "hirata-yousuke",
      "koenji-rokusuke",
      "sudo-ken",
      "ike-kanji",
      "sakura-airi",
      "hasebe-haruka",
      "yukimura-teruhiko",
      "miyake-akito",
      "sato-maya",
      "matsushita-chiaki",
      "shinohara-satsuki",
      "sotomura-hideo",
      "wang-meiyu",
      "inogashira-kokoro",
      "onodera-kayano",
    ],
  },
  {
    id: "3-a",
    name: "3-A",
    yearLabel: "Third Year",
    homeroom: null,
    rank: "Pending",
    status: "Active",
    recordId: "ANHS-CLASS-03-A",
    classPoints: null,
    description:
      "The leading third-year division. The school's most senior register.",
    studentIds: ["nagumo-miyabi", "asahina-nazuna"],
  },
  {
    id: "3-b",
    name: "3-B",
    yearLabel: "Third Year",
    homeroom: null,
    rank: "Pending",
    status: "Active",
    recordId: "ANHS-CLASS-03-B",
    classPoints: null,
    description:
      "A third-year register standing against the lead division's sway.",
    studentIds: ["kiriyama-ikuto", "kiryuin-fuka"],
  },
];