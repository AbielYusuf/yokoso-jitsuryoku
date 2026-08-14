/**
 * Character records for the ANHS private archive.
 *
 * CANON DATA — SECOND YEAR STUDENTS ONLY (Batch 1).
 * Source: official TV anime "Classroom of the Elite 4th Season" character
 * page (you-zitsu.com/character.html). Anime continuity only; canon cutoff is
 * the end of Season 4. Names, classes, and profile context follow that page.
 *
 * Artwork lives in `public/assets/characters/`.
 * To attach official art to a record, drop the asset at
 * `public/assets/characters/<recordId>.jpg` and set `image` to the public path,
 * e.g. `image: "/assets/characters/anhs-001.jpg"`. While `image` is `null`
 * the portrait renders its restrained placeholder instead.
 *
 * Aspect ratio strings read "width / height" and are safe Tailwind arbitrary
 * values. Keep them in portrait orientation to anchor the composition.
 *
 * `recordId` values are internal website identifiers only — never presented
 * as official school IDs.
 */
export type Character = {
  id: string;
  firstName: string;
  lastName: string;
  /** Japanese name — used for the portrait placeholder glyph. */
  jp: string;
  /** Single kanji placeholder glyph per record. */
  monogram: string;
  className: string;
  /** Stable, URL-safe id of the record's class — links the character to the class register. */
  classId: string;
  yearLabel: string;
  status: "Active";
  recordId: string;
  image: string | null;
  portraitAspect: string;
  description: string;
};

export const CHARACTERS: Character[] = [
  // ------------------------------------------------------------------ 2-D
  {
    id: "ayanokoji-kiyotaka",
    firstName: "Kiyotaka",
    lastName: "Ayanokoji",
    jp: "綾小路 清隆",
    monogram: "綾",
    className: "2-D",
    classId: "2-d",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-001",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-D. An inconspicuous presence in class, now regarded by a handful of classmates through the special examinations. His dealings with others remain deliberately pragmatic.",
  },
  {
    id: "horikita-suzune",
    firstName: "Suzune",
    lastName: "Horikita",
    jp: "堀北 鈴音",
    monogram: "堀",
    className: "2-D",
    classId: "2-d",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-002",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-D. Once intent on reaching Class A to overtake her brother, she has matured through a series of examinations and now carries herself as a class leader. A change of appearance over the spring break marked her resolve.",
  },
  {
    id: "karuizawa-kei",
    firstName: "Kei",
    lastName: "Karuizawa",
    jp: "軽井沢 恵",
    monogram: "軽",
    className: "2-D",
    classId: "2-d",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-005",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-D. Assertive and outspoken, standing near the top of the class hierarchy. Her past is known to a single classmate, and over the spring break the two became a couple.",
  },
  {
    id: "kushida-kikyo",
    firstName: "Kikyo",
    lastName: "Kushida",
    jp: "櫛田 桔梗",
    monogram: "櫛",
    className: "2-D",
    classId: "2-d",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-003",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-D. Agreeable and popular on the surface, though the profile records her friendliness as serving her own standing. A prior incident and a private contract with a classmate hold a temporary peace.",
  },
  {
    id: "hirata-yousuke",
    firstName: "Yousuke",
    lastName: "Hirata",
    jp: "平田 洋介",
    monogram: "平",
    className: "2-D",
    classId: "2-d",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-006",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-D. Capable and personable, trusted across the class. A period of doubt following the class vote gave way to his current role, leading the class alongside Horikita.",
  },
  {
    id: "koenji-rokusuke",
    firstName: "Rokusuke",
    lastName: "Kouenji",
    jp: "高円寺 六助",
    monogram: "高",
    className: "2-D",
    classId: "2-d",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-007",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-D. Heir to a major conglomerate and entirely self-directed. His abilities are top-tier on record, though he declines to apply them to the examinations.",
  },
  {
    id: "sudo-ken",
    firstName: "Ken",
    lastName: "Sudou",
    jp: "須藤 健",
    monogram: "須",
    className: "2-D",
    classId: "2-d",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-004",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-D. A basketball club member of considerable ability whose short temper once set him apart. Recorded as having matured, he now works steadily to raise his standing.",
  },
  {
    id: "ike-kanji",
    firstName: "Kanji",
    lastName: "Ike",
    jp: "池 寛治",
    monogram: "池",
    className: "2-D",
    classId: "2-d",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-008",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-D. Bright and sociable, a steadying mood in the class. His practical skill in the outdoors came to the fore during an uninhabited island examination.",
  },
  {
    id: "sakura-airi",
    firstName: "Airi",
    lastName: "Sakura",
    jp: "佐倉 愛里",
    monogram: "佐",
    className: "2-D",
    classId: "2-d",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-009",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-D. Once active as a gravure idol, she now keeps a low, unassuming profile. She has drawn close to a classmate's study circle and holds feelings she has not yet voiced.",
  },
  {
    id: "hasebe-haruka",
    firstName: "Haruka",
    lastName: "Hasebe",
    jp: "長谷部 波瑠加",
    monogram: "長",
    className: "2-D",
    classId: "2-d",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-010",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-D. Reserved by nature, she has grown accustomed to company through the study circle she joined. She is especially close with one classmate and keeps a habit of assigning nicknames.",
  },
  {
    id: "yukimura-teruhiko",
    firstName: "Teruhiko",
    lastName: "Yukimura",
    jp: "幸村 輝彦",
    monogram: "幸",
    className: "2-D",
    classId: "2-d",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-011",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-D. Studious and even-tempered, among the top of the class academically. His record notes steady growth in confronting his own limits through the year's examinations.",
  },
  {
    id: "miyake-akito",
    firstName: "Akito",
    lastName: "Miyake",
    jp: "三宅 明人",
    monogram: "三",
    className: "2-D",
    classId: "2-d",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-012",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-D. A quiet member of the archery club with a strong prior record. He has drawn closer to a circle of classmates through their shared study sessions.",
  },
  {
    id: "sato-maya",
    firstName: "Maya",
    lastName: "Sato",
    jp: "佐藤 麻耶",
    monogram: "佐",
    className: "2-D",
    classId: "2-d",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-013",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-D. Close with several classmates, she developed an interest in a fellow student during the sports festival. A confession over the winter holidays was not returned.",
  },
  {
    id: "matsushita-chiaki",
    firstName: "Chiaki",
    lastName: "Matsushita",
    jp: "松下 千秋",
    monogram: "松",
    className: "2-D",
    classId: "2-d",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-014",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-D. Capable above the class average, she prefers to go unnoticed. Her record notes a growing awareness of a classmate's abilities.",
  },
  {
    id: "shinohara-satsuki",
    firstName: "Satsuki",
    lastName: "Shinohara",
    jp: "篠原 さつき",
    monogram: "篠",
    className: "2-D",
    classId: "2-d",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-015",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-D. Outspoken and close with several classmates. A long-running quarrel with one classmate has begun to change in character.",
  },

  // ------------------------------------------------------------------ 2-A
  {
    id: "sakayanagi-aris",
    firstName: "Arisu",
    lastName: "Sakayanagi",
    jp: "坂柳 有栖",
    monogram: "坂",
    className: "2-A",
    classId: "2-a",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-016",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-A. The self-declared genius at the head of her class, bound by a congenital condition to walk with a cane. Her long-awaited contest with a Class 2-D rival ended in a private defeat she accepts without pretext.",
  },
  {
    id: "katsuragi-kouhei",
    firstName: "Kouhei",
    lastName: "Katsuragi",
    jp: "葛城 康平",
    monogram: "葛",
    className: "2-A",
    classId: "2-a",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-017",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-A. Once one of the two leaders of his class, known for calm and principled judgment. A fall from standing came through his own directness, and the loss of allies to a classmate's strategy still weighs on his record.",
  },

  // ------------------------------------------------------------------ 2-B
  {
    id: "ichinose-honami",
    firstName: "Honami",
    lastName: "Ichinose",
    jp: "一之瀬 帆波",
    monogram: "一",
    className: "2-B",
    classId: "2-b",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-018",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-B. A warm and principled class leader whose stated aim is to see her entire class graduate together. Her record includes a public reckoning with a past incident, which she has since faced.",
  },
  {
    id: "kanzaki-ryuji",
    firstName: "Ryuji",
    lastName: "Kanzaki",
    jp: "神崎 隆二",
    monogram: "神",
    className: "2-B",
    classId: "2-b",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-019",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-B. Among the most capable in his class on both academic and physical measures, though reserved in company. He serves as his class leader's advisor and strategist.",
  },

  // ------------------------------------------------------------------ 2-C
  {
    id: "ryuen-kakeru",
    firstName: "Kakeru",
    lastName: "Ryuen",
    jp: "龍園 翔",
    monogram: "龍",
    className: "2-C",
    classId: "2-c",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-020",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-C. A class leader who commands through fear and will use any means to win. His record notes both a fall from power and a return to leadership through a decisive victory.",
  },
  {
    id: "ibuki-mio",
    firstName: "Mio",
    lastName: "Ibuki",
    jp: "伊吹 澪",
    monogram: "伊",
    className: "2-C",
    classId: "2-c",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-021",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-C. A capable fighter with a confrontational streak. Though she holds her class leader's methods in contempt, she acknowledges his qualities and supported his return to power.",
  },
  {
    id: "shiina-hiyori",
    firstName: "Hiyori",
    lastName: "Shiina",
    jp: "椎名 ひより",
    monogram: "椎",
    className: "2-C",
    classId: "2-c",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-022",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-C. A quiet bookworm who keeps company with the library and with one student across class lines. Her perceptiveness has been noted by her class leader.",
  },
  {
    id: "ishizaki-daichi",
    firstName: "Daichi",
    lastName: "Ishizaki",
    jp: "石崎 大地",
    monogram: "石",
    className: "2-C",
    classId: "2-c",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-023",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Class 2-C. Hot-tempered and loyal to his class leader to a fault. An early defeat at the hands of a Class 2-D student earned that student his lasting respect.",
  },
];