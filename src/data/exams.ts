/**
 * Exam records — ANHS examination archive.
 *
 * CANON DATA — ANIME SCOPE: Season 1 through Season 4 Episode 16
 * (Year 1 through Year 2 Semester 1 / Summer Break).
 *
 * Exactly ten records, ordered chronologically. These are anime-canon
 * examinations only: Year 2 Unanimous Special Exam, the Cultural Festival,
 * and later Year 2 material are intentionally outside this archive scope.
 *
 * IDs reference `characters.ts` / `classes.ts` only. Where the supplied
 * research id did not exist in the archive the record was mapped to the
 * existing id (`sakayanagi-arisu` -> `sakayanagi-aris`, `tsukishiro` ->
 * `tsukishiro-tokunari`, `class-1d` -> `1-d`); ids with no archive record
 * were omitted and are reported rather than invented.
 */
export type ExamRecord = {
  id: string;
  title: string;
  japaneseName: string;
  category:
    | "Regular Academic"
    | "Special Survival"
    | "Special Reasoning"
    | "Special Physical"
    | "Special Academic"
    | "Special Discipline"
    | "Special Expulsion"
    | "Special Strategy";
  season: 1 | 2 | 3 | 4;
  episodeRange: string;
  schoolYear: "Year 1" | "Year 2";
  /** Display label, consistent with the rest of the archive. */
  yearLabel: string;
  semester: "Semester 1" | "Semester 2" | "Semester 3" | "Summer Break";
  chronologicalOrder: number;
  expulsionRisk: boolean;
  /** Archive filing status, not an in-universe claim. */
  status: string;
  recordId: string;
  description: string;
  rulesSummary: string[];
  /** Students expelled as a direct result of this examination. */
  expelledStudentIds?: string[];
  /** Students protected during this examination. */
  protectedStudentIds?: string[];
  /** Participants / key figures rendered as character links. */
  participantIds?: string[];
  /** Resolved class id of the victorious side, where established. */
  victorClassId?: string;
  evidenceLevel: "CANON — EXPLICIT";
};

export const EXAMS: ExamRecord[] = [
  {
    id: "exam-midterm-y1",
    title: "First Semester Midterm Exam",
    japaneseName: "中間テスト",
    category: "Regular Academic",
    season: 1,
    episodeRange: "Ep 3-4",
    schoolYear: "Year 1",
    yearLabel: "First Year",
    semester: "Semester 1",
    chronologicalOrder: 1,
    expulsionRisk: false,
    status: "Recorded",
    recordId: "ANHS-EXAM-001",
    description:
      "The standard written examination opening Year 1 — five subjects, the passing threshold set against half the class average. Sudo initially failed by a single point until Ayanokoji and Horikita purchased one test point for 100,000 Private Points, securing a full Class 1-D pass.",
    rulesSummary: [
      "Five written subjects administered in the first term.",
      "Passing threshold: half of the class average score.",
      "Sudo Ken failed by a single point.",
      "Ayanokoji and Horikita purchased one point for 100,000 Private Points.",
      "Every student of Class 1-D passed.",
    ],
    evidenceLevel: "CANON — EXPLICIT",
  },
  {
    id: "exam-island-y1",
    title: "Y1 Uninhabited Island Special Exam",
    japaneseName: "無人島特別試験",
    category: "Special Survival",
    season: 1,
    episodeRange: "Ep 8-12",
    schoolYear: "Year 1",
    yearLabel: "First Year",
    semester: "Summer Break",
    chronologicalOrder: 2,
    expulsionRisk: false,
    status: "Recorded",
    recordId: "ANHS-EXAM-002",
    description:
      "A seven-day survival examination on an uninhabited island. Three hundred starting Class Points were spent on resources and medical deductions, while an area-occupation bonus and a secret Leader mechanic shaped the standings. Class 1-D finished with 225 points.",
    rulesSummary: [
      "Seven-day survival on an uninhabited island.",
      "Classes began with 300 Class Points.",
      "Points deducted for resource and medical provisions.",
      "Occupying designated areas granted a bonus.",
      "Each group named a secret Leader whose identity carried consequences.",
      "Class 1-D finished with 225 points.",
    ],
    victorClassId: "1-d",
    evidenceLevel: "CANON — EXPLICIT",
  },
  {
    id: "exam-zodiac",
    title: "Cruise Ship Special Exam",
    japaneseName: "船上特別試験",
    category: "Special Reasoning",
    season: 2,
    episodeRange: "Ep 1-3",
    schoolYear: "Year 1",
    yearLabel: "First Year",
    semester: "Summer Break",
    chronologicalOrder: 3,
    expulsionRisk: false,
    status: "Recorded",
    recordId: "ANHS-EXAM-003",
    description:
      "Eight mixed groups, each concealing a secret VIP. A reasoning-and-deduction structure rewarded whoever exposed the correct VIP. Ryuen decoded the pattern behind the selections; Ayanokoji kept Kei's VIP identity hidden.",
    rulesSummary: [
      "Students divided into eight mixed groups.",
      "Each group concealed one secret VIP.",
      "Groups guessed one another's VIP to gain points.",
      "Ryuen decoded the pattern behind the VIP selections.",
      "Ayanokoji protected Kei's VIP identity throughout.",
    ],
    victorClassId: "1-c",
    evidenceLevel: "CANON — EXPLICIT",
  },
  {
    id: "exam-sports-festival",
    title: "Sports Festival",
    japaneseName: "体育祭",
    category: "Special Physical",
    season: 2,
    episodeRange: "Ep 4-6",
    schoolYear: "Year 1",
    yearLabel: "First Year",
    semester: "Semester 2",
    chronologicalOrder: 4,
    expulsionRisk: false,
    status: "Recorded",
    recordId: "ANHS-EXAM-004",
    description:
      "A school-wide physical competition, Red against White. Kushida leaked Class 1-D's participation information to the opposing side, and the White Team carried the festival.",
    rulesSummary: [
      "Competition split into Red Team and White Team.",
      "Events were physical and class-based.",
      "Kushida leaked Class 1-D participation details.",
      "The White Team won the festival.",
    ],
    victorClassId: "1-c",
    evidenceLevel: "CANON — EXPLICIT",
  },
  {
    id: "exam-paper-shuffle",
    title: "Paper Shuffle Special Exam",
    japaneseName: "ペーパーシャッフル",
    category: "Special Academic",
    season: 2,
    episodeRange: "Ep 7-13",
    schoolYear: "Year 1",
    yearLabel: "First Year",
    semester: "Semester 2",
    chronologicalOrder: 5,
    expulsionRisk: true,
    status: "Recorded",
    recordId: "ANHS-EXAM-005",
    description:
      "A class-versus-class written examination pairing students into partners. Class 1-D faced Class 1-C with expulsion on the line, and Class 1-D secured the win.",
    rulesSummary: [
      "Class-versus-class academic examination.",
      "Class 1-D matched against Class 1-C.",
      "Students paired; each pair's papers combined.",
      "Failure carried expulsion risk.",
      "Class 1-D won the examination.",
    ],
    victorClassId: "1-d",
    evidenceLevel: "CANON — EXPLICIT",
  },
  {
    id: "exam-training-camp",
    title: "Mixed Training Camp Special Exam",
    japaneseName: "混合合宿",
    category: "Special Discipline",
    season: 3,
    episodeRange: "Ep 1-4",
    schoolYear: "Year 1",
    yearLabel: "First Year",
    semester: "Semester 3",
    chronologicalOrder: 6,
    expulsionRisk: true,
    status: "Recorded",
    recordId: "ANHS-EXAM-006",
    description:
      "A mixed-year training camp merging academic, physical, and disciplinary evaluation. Each group's leader carried expulsion risk, and Tachibana was saved through Manabu's intervention.",
    rulesSummary: [
      "Groups mixed across years and classes.",
      "Academic, physical, and discipline elements were scored.",
      "Group leaders faced expulsion risk.",
      "Tachibana Akane was saved by Manabu Horikita's intervention.",
    ],
    evidenceLevel: "CANON — EXPLICIT",
  },
  {
    id: "exam-class-poll",
    title: "Class Poll Special Exam",
    japaneseName: "クラス内投票",
    category: "Special Expulsion",
    season: 3,
    episodeRange: "Ep 8-10",
    schoolYear: "Year 1",
    yearLabel: "First Year",
    semester: "Semester 3",
    chronologicalOrder: 7,
    expulsionRisk: true,
    status: "Recorded",
    recordId: "ANHS-EXAM-007",
    description:
      "Praise-and-censure voting within each class. A Protection Point shielded a single student, and the lowest result carried expulsion. Yamauchi, Totsuka, and Manabe are the expelled students in this archive's scope.",
    rulesSummary: [
      "Students voted with praise and censure within their class.",
      "A Protection Point shielded a single student.",
      "The lowest polling result risked expulsion.",
      "Yamauchi Haruki, Totsuka Yahiko, and Manabe Shiho were expelled.",
    ],
    expelledStudentIds: ["yamauchi-haruki", "totsuka-yahiko", "manabe-shiho"],
    protectedStudentIds: ["ayanokoji-kiyotaka", "sakayanagi-aris", "ryuen-kakeru"],
    participantIds: [
      "yamauchi-haruki",
      "totsuka-yahiko",
      "manabe-shiho",
      "ayanokoji-kiyotaka",
      "sakayanagi-aris",
      "ryuen-kakeru",
    ],
    evidenceLevel: "CANON — EXPLICIT",
  },
  {
    id: "exam-event-selection",
    title: "Event Selection Special Exam",
    japaneseName: "選抜種目試験",
    category: "Special Strategy",
    season: 3,
    episodeRange: "Ep 11-13",
    schoolYear: "Year 1",
    yearLabel: "First Year",
    semester: "Semester 3",
    chronologicalOrder: 8,
    expulsionRisk: true,
    status: "Recorded",
    recordId: "ANHS-EXAM-008",
    description:
      "Selected-event examinations: Class 1-A against Class 1-C, Class 1-B against Class 1-D. Seven events, a commander per side, and a standing conflict between Ayanokoji and Sakayanagi's commanders. Class 1-A and Class 1-D each won their matchups.",
    rulesSummary: [
      "Class 1-A matched against Class 1-C.",
      "Class 1-B matched against Class 1-D.",
      "Seven events selected for competition.",
      "Each side named a commander.",
      "Ayanokoji and Sakayanagi led the opposing commanders.",
      "Class 1-A won its matchup; Class 1-D won its matchup.",
    ],
    protectedStudentIds: ["ayanokoji-kiyotaka"],
    participantIds: [
      "ayanokoji-kiyotaka",
      "sakayanagi-aris",
      "ryuen-kakeru",
      "ichinose-honami",
    ],
    evidenceLevel: "CANON — EXPLICIT",
  },
  {
    id: "exam-partner-y2",
    title: "Y2 Partner Special Written Exam",
    japaneseName: "2年生編 パートナー特別試験",
    category: "Special Academic",
    season: 4,
    episodeRange: "Ep 1-4",
    schoolYear: "Year 2",
    yearLabel: "Second Year",
    semester: "Semester 1",
    chronologicalOrder: 9,
    expulsionRisk: true,
    status: "Recorded",
    recordId: "ANHS-EXAM-009",
    description:
      "The Year 2 opening examination pairs students across years into partners. Ayanokoji and Hosen were bound together in a relationship neither wanted, with expulsion risk on the line. Ayanokoji scored a perfect 100/100 on Mathematics.",
    rulesSummary: [
      "Cross-year partner examination.",
      "Ayanokoji paired with Hosen Kazuomi.",
      "Failure carried expulsion risk.",
      "Ayanokoji recorded 100/100 on the Mathematics paper.",
    ],
    participantIds: ["ayanokoji-kiyotaka", "hosen-kazuomi"],
    victorClassId: "2-d",
    evidenceLevel: "CANON — EXPLICIT",
  },
  {
    id: "exam-island-y2",
    title: "Y2 Survival Uninhabited Island Exam",
    japaneseName: "2年生編 無人島特別試験",
    category: "Special Survival",
    season: 4,
    episodeRange: "Ep 5-16",
    schoolYear: "Year 2",
    yearLabel: "Second Year",
    semester: "Summer Break",
    chronologicalOrder: 10,
    expulsionRisk: true,
    status: "Recorded",
    recordId: "ANHS-EXAM-010",
    description:
      "A two-week survival examination run in small groups and larger formations, ruled by area movement and tasks. The bottom three groups faced expulsion while Tsukishiro and Shiba pressed from outside and Nagumo opposed the year openly. Kiryuuin lent Ayanokoji assistance, and every Class 2-D group finished safely.",
    rulesSummary: [
      "Two-week survival examination.",
      "Small groups and larger formations, moving by area.",
      "Tasks tied to area movement and occupation.",
      "The bottom three groups faced expulsion.",
      "Tsukishiro and Shiba intervened against Ayanokoji.",
      "Kiryuuin Fuka assisted Ayanokoji.",
      "Nagumo Miyabi opposed the year as a major force.",
      "Every Class 2-D group finished safely.",
    ],
    participantIds: [
      "ayanokoji-kiyotaka",
      "nanase-tsubasa",
      "tsukishiro-tokunari",
      "nagumo-miyabi",
    ],
    victorClassId: "3-a",
    evidenceLevel: "CANON — EXPLICIT",
  },
];
