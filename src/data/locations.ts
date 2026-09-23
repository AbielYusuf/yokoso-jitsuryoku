export type LocationCategory =
  | "Campus Facility"
  | "Residential"
  | "Administrative"
  | "Exam Site"
  | "External Facility";

export interface LocationRecord {
  id: string;
  title: string;
  japaneseTitle?: string;
  category: LocationCategory;
  summary: string;
  description: string;
  image: string;
  relatedExamIds?: string[];
  relatedDossierIds?: string[];
  notableAreas?: string[];
  evidenceBoundary: string;
  recordId: string;
}

export const LOCATIONS: LocationRecord[] = [
  {
    id: "student-dormitory",
    title: "Student Dormitory",
    japaneseTitle: "学生寮",
    category: "Residential",
    summary:
      "The controlled residential environment where school life becomes private, but never entirely separate from ANHS.",
    description:
      "The dormitory extends the school environment into daily life. Its exterior, corridors, and individual student rooms create a quieter setting for private decisions and informal contact, while remaining part of the institution that houses and regulates the students.",
    image: "/assets/locations/student-dormitory.jpg",
    relatedDossierIds: ["class-d-internal-conflict"],
    evidenceBoundary: "Anime scope through Season 4 Episode 16.",
    recordId: "ANHS-LOC-001",
  },
  {
    id: "keyaki-mall",
    title: "Keyaki Mall",
    japaneseTitle: "ケヤキモール",
    category: "Campus Facility",
    summary:
      "The commercial and social center where students meet beyond the formal structure of lessons and examinations.",
    description:
      "Public walkways, cafés, and shops make Keyaki Mall a shared social environment within the students' restricted world. Encounters here are less formal than those in classrooms, allowing relationships and observations to develop through ordinary school life without implying an authoritative map or complete tenant directory.",
    image: "/assets/locations/keyaki-mall.jpg",
    evidenceBoundary: "Anime scope through Season 4 Episode 16.",
    recordId: "ANHS-LOC-002",
  },
  {
    id: "student-council-room",
    title: "Student Council Room",
    japaneseTitle: "生徒会室",
    category: "Administrative",
    summary:
      "The administrative chamber associated with student council authority, succession, negotiation, and school governance.",
    description:
      "The room gives student government a physical center. Meetings, negotiations, and transfers of authority take place in a controlled institutional setting whose order and formality reinforce the council's position within ANHS.",
    image: "/assets/locations/student-council-room.jpg",
    relatedDossierIds: ["student-council"],
    evidenceBoundary: "Anime scope through Season 4 Episode 16.",
    recordId: "ANHS-LOC-003",
  },
  {
    id: "luxury-cruise-ship",
    title: "Luxury Cruise Ship",
    japaneseTitle: "豪華客船",
    category: "Exam Site",
    summary:
      "A temporary floating campus that shifts from leisure environment to controlled examination venue.",
    description:
      "The ship's decks, corridors, cabins, and meeting spaces initially promise distance from school. That leisure setting is repurposed into a bounded examination environment, turning private rooms and shared circulation into places of observation, discussion, and uncertainty.",
    image: "/assets/locations/luxury-cruise-ship.jpg",
    relatedExamIds: ["exam-zodiac"],
    evidenceBoundary: "Season 1 / Season 2 material relevant to the cruise ship deployment.",
    recordId: "ANHS-LOC-004",
  },
  {
    id: "uninhabited-island-y1",
    title: "Uninhabited Island — Year 1",
    japaneseTitle: "無人島特別試験地",
    category: "Exam Site",
    summary:
      "A remote survival environment divided into class camps and strategically occupied locations.",
    description:
      "Natural terrain, improvised class camps, limited resources, and occupied spots make the island an active source of pressure. The environment forces each class to balance shelter, movement, health, and strategy without implying that the archive possesses a complete authoritative map.",
    image: "/assets/locations/uninhabited-island-y1.jpg",
    relatedExamIds: ["exam-island-y1"],
    evidenceBoundary: "Year 1 Uninhabited Island Special Exam.",
    recordId: "ANHS-LOC-005",
  },
  {
    id: "mixed-training-camp-facility",
    title: "Mixed Training Camp Facility",
    japaneseTitle: "林間学校",
    category: "Exam Site",
    summary:
      "A remote institutional complex where mixed-year groups live, train, and undergo collective evaluation.",
    description:
      "Residential halls, shared rooms, and training areas place students from different years and classes under one disciplined routine. The facility's communal layout makes cooperation unavoidable and gives the examination a more austere character than ordinary campus life.",
    image: "/assets/locations/mixed-training-camp-facility.jpg",
    relatedExamIds: ["exam-training-camp"],
    relatedDossierIds: ["student-council"],
    evidenceBoundary: "Mixed Training Camp anime material.",
    recordId: "ANHS-LOC-006",
  },
  {
    id: "uninhabited-island-y2",
    title: "Uninhabited Island — Year 2",
    japaneseTitle: "2年生編 無人島特別試験地",
    category: "Exam Site",
    summary:
      "A larger monitored island environment organized around designated areas, temporary camps, tasks, and difficult terrain.",
    description:
      "Forests, slopes, mountain routes, temporary camps, and dispersed task sites turn movement itself into a sustained challenge. This record treats the Year 2 examination as a separate documented deployment without claiming that canon conclusively establishes whether it uses a physically different island from Year 1.",
    image: "/assets/locations/uninhabited-island-y2.jpg",
    relatedExamIds: ["exam-island-y2"],
    relatedDossierIds: [
      "tsukishiro-intervention",
      "first-year-network",
      "student-council",
    ],
    notableAreas: ["I2"],
    evidenceBoundary: "Season 4 through Episode 16.",
    recordId: "ANHS-LOC-007",
  },
  {
    id: "white-room-facility",
    title: "White Room Facility",
    japaneseTitle: "ホワイトルーム",
    category: "External Facility",
    summary:
      "A controlled educational environment outside ANHS, defined by clinical architecture and intensive training.",
    description:
      "The anime-visible White Room is characterized by severe, clinical spaces built around instruction and training. This record is limited to that observed environment and does not assert a precise location, complete floor plan, unseen rooms, or later institutional details.",
    image: "/assets/locations/white-room-facility.jpg",
    relatedDossierIds: ["white-room"],
    evidenceBoundary: "Anime-visible White Room material through Season 4 Episode 16.",
    recordId: "ANHS-LOC-008",
  },
];
