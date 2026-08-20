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
    episodeRange: "Ep 2-3",
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
      "Passing Mark: Students must score above a specific threshold (typically 32 to 40 out of 100, depending on the subject's average) to pass.",
      "Individual Failure: Scoring below the passing mark on any single test means a failing grade (red point / akaten).",
      "The Penalty: Anyone who fails a midterm exam faces immediate expulsion or a severe deduction in personal/class standing unless private points are used to clear the debt or past precedents/answers are leveraged.",
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
      "Duration: 7 days on a remote island.",
      "S-Points Budget: Classes are allocated 300 points to buy supplies (tents, food, tools) from an exhaustive manual list. Unspent points convert to final exam points.",
      "The Leader Mechanism: Each class must secretly appoint a Leader before the exam begins.",
      "Discovering an opposing class’s leader yields +50 bonus points.",
      "Guessing incorrectly deducts -50 points.",
      "If a class's leader is correctly identified by rivals, that class loses 50 points and forfeits all accumulated bonus/occupation points.",
      "Stationary & Occupation Penalties: Points are awarded for occupying specific hidden locations or utilizing camp amenities properly, while rule violations or student illnesses/withdrawals drain class scores.",
      "Leader Retirement Clause: If a designated leader falls ill or has to medically retire from the island, a substitution can occur under strict oversight, which heavily compromises the class unless concealed or managed tactically",
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
      "The exam starts at 8:00 AM on the first day.",
      "The exam itself will mostly take place between 1:00 PM and 9:00 PM.",
      "For about an hour each day, twice, groups will need to gather together and discuss.",
      "At the end of the exam, the VIP students of other groups must be identified.",
      "The VIP student cannot be the one to send the answers.",
      "The identity of the VIP student of the group you are assigned must only be sent.",
      "Details of the results of the exam will be mailed to students by 11:00 PM on the final day.",
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
      "Team Division: The whole school year is split into two groups—the Red Team (Classes A and D) and the White Team (Classes B and C).",
      "Event Types: Features regular/mandatory events where participation is required for everyone, alongside designated selective/recommended events for class elites.",
      "Top 3 Finishers: Students finishing in the top three spots can choose between receiving 1,000 Private Points (PP) or 1 bonus mark/point on their next written exam.",
      "Last Place Penalty: The student who finishes dead last in an individual competition loses 1,000 Private Points. If they lack sufficient PP, the penalty converts into a deduction of points on their upcoming written exam.",
      "Bottom Overall Performers: The 10 individual students across the entire festival with the lowest total points earned face a deduction of 10 points on their next written exam.",
      "Top Performer Reward: The single student with the highest cumulative score across all competitions is awarded 100,000 Private Points.",
      "Class Points (CP): Teams and individual classes are tallied separately; the class with the overall highest point tally secures extra Class Points (50 CP), while losing teams face deductions to their class standing.",
      "Foul Play: Any rule-breaking or malicious intent results in immediate disqualification, removal from the grounds, and complete forfeiture of any earned points.",
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
    episodeRange: "Ep 7-9",
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
      "Duration: 2 days, with 4 subjects tested per day.",
      "Questions: 50 questions per subject across 8 subjects (400 total questions per student pair).",
      "Pairings: Before the exam, students take a 100-question preliminary quiz. High-scoring students are paired with low-scoring students to balance out team capabilities.",
      "Each class must formulate the test questions that an opposing rival class will have to take.",
      "Classes target an opposing class for an attack/defense match.",
      "If a class outscores its rival on the submitted test, a 50 to 100 Class Point swing occurs depending on the direct matchup results.",
      "Passing Standard: Each subject has a minimum passing score requirement of 60 points.",
      "Expulsion Rule: If a student pair fails to meet the minimum score standard in any subject, both partners face expulsion.",
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
    episodeRange: "Ep 1-3",
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
      "Duration: 8 days and 7 nights during the third semester.",
      "Grouping: Students are separated by gender, then mixed into small groups containing individuals from different classes and parallel year levels.",
      "Leadership: Each small group chooses a designated leader whose fate is tied directly to the group's overall performance.",
      "Evaluation: Scoring is evaluated on a group average basis across compiled tests and daily discipline.",
      "The Expulsion Clause: The group with the absolute lowest average score faces severe consequences.",
      "Joint Responsibility: The leader of the last-place group is expelled, and they must choose one member from their small group to share responsibility and face expulsion alongside them.",
      "Bonuses: The top-performing groups are awarded valuable class/private bonus points.",
    ],
    evidenceLevel: "CANON — EXPLICIT",
  },
  {
    id: "exam-class-poll",
    title: "Class Poll Special Exam",
    japaneseName: "クラス内投票",
    category: "Special Expulsion",
    season: 3,
    episodeRange: "Ep 6-8",
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
      "Allotment: Each student receives 3 Praise Votes and 3 Criticism (Censure) Votes to spend on classmates.",
      "Cancellation: Praise and criticism votes cast for the same person cancel each other out (Net Score = Praise – Criticism).",
      "You cannot vote for yourself.",
      "Abstaining, leaving ballots blank, or duplicate voting for the same person is forbidden.",
      "Cross-Class Vote: Students are also required to cast a separate, dedicated Praise Vote for a student in a different class.",
      "Repetition: The voting process repeats or adjusts until definitive first-place and last-place rankings emerge.",
      "Expulsion (Last Place): The student in the class who accumulates the highest net criticism/censure score is expelled.",
      "Protection Point (First Place): The student who receives the most praise votes is awarded a Protection Point, which can cancel out a future test failure or override an expulsion.",
      "Exemption Cost: A student targeted for expulsion can theoretically clear/save themselves if they accumulate enough external praise votes from other classes or pay an immense sum of private points (e.g., 20 million points).",
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
      "Pairings: Classes compete directly against a paired rival class (Class A vs. Class C, and Class B vs. Class D).",
      "Event Submission: Each class proposes 10 unique, well-known events with set time limits and explicit anti-tie rules.",
      "Official vs. Fake-out: Out of the 10, each class designates 5 true 'Official Events' and 5 decoy 'Fake-out Events'.",
      "Random Draw: The school pools and randomly draws 7 final events from the combined lists to be played during the competition.",
      "Selection: Each class chooses one student to act as their Commander, stationed in an isolated multi-purpose observation room.",
      "Intervention: Commanders dictate strategic choices and can intervene in events based on pre-approved rules.",
      "The Penalty: If a Commander's class loses the overall match, the Commander is immediately expelled (unless saved by a Protection Point).",
      "Event Wins/Losses: Each individual event win awards 30 class points, while a loss deducts 30 class points.",
      "Overall Victory: Winning the entire multi-event match yields a bonus of 100 class points.",
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
      "Pairing Process: Second-years and first-years form pairs. Once a partnership is finalized, it cannot be canceled.",
      "Unpaired Penalty: If a second-year fails to find a partner by the deadline, one is assigned randomly at 8:00 AM on exam day, incurring a 5% score penalty.",
      "Odd Numbers: Leftover first-years have their exam scores doubled to compensate, but also receive a 5% score penalty.",
      "Combined Score: Pairs take a written test, and their results are evaluated based on their combined total score.",
      "Failure Threshold: If a pair's combined score falls below 500 points, the second-year student is expelled.",
      "First-Year Penalty on Failure: If a pair fails, the first-year student loses eligibility for private points for the next three months, regardless of class standing.",
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
    episodeRange: "Ep 6-16",
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
      "Duration: Lasts for 2 weeks (14 days) on a massive grid-divided island.",
      "Group Formation: Students can form groups of up to 6 members from the same grade. Mixed-gender groups must maintain at least a 50% or 2:3 female-to-male ratio. Solo participation is allowed.",
      "Designated Areas: The island is split into 100 squares. Groups receive randomized designated area targets multiple times per day, requiring timely arrivals to score basic movement points and potential early-bird bonuses.",
      "Tasks: Events and challenges pop up across the island where groups can stake and win extra points.",
      "Bottom Ranks: The lowest-ranking groups face severe class point deductions.",
      "Expulsion Threat: The bottom 5 groups face automatic expulsion, which can be averted by paying a massive fee of 6 million private points split among group members.",
      "Retirement: If a student falls severely ill or gets injured, they 'retire'. Solo students who retire are expelled, while groups can continue with reduced headcounts.",
      "Target on Ayanokoji: Acting acting-acting director Tsukishiro places a high-value private point bounty/expulsion target on Kiyotaka Ayanokoji, driving first-years to track him.",
      "OAA and Tablets: Each group is assigned specific digital tablet guidelines to track rules, locations, penalties, and emergency communications.",
    ],
    participantIds: [
      "ayanokoji-kiyotaka",
      "nanase-tsubasa",
      "tsukishiro-tokunari",
      "nagumo-miyabi",
      "kiryuin-fuka",
      "shiba-kazuma",
    ],
    victorClassId: "3-a",
    evidenceLevel: "CANON — EXPLICIT",
  },
];
