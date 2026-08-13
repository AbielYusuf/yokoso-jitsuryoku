export const site = {
  name: "COTE EXPERIENCE",
  school: "Advanced Nurturing High School",
  archive: "Private Archive",
  coordinates: "35.6680N ▸ 139.7407E",
  recordId: "REC // ANHS-00",
} as const;

/**
 * The single artwork slot for the landing visual panel.
 * Drop the final asset at `public/assets/panel-art.(jpg|webp)` and point
 * this constant at it. The placeholder is a pure-CSS fallback.
 *
 * `PANEL_ART_ASPECT` must match the source artwork so the full figure
 * (head, face, hands, upper body) is never cropped. Aspect ratio strings
 * read "width / height" and are safe values for Tailwind arbitrary values.
 */
export const PANEL_ART = "/assets/panel-art.jpg";
export const PANEL_ART_ASPECT = "1920/2784";

export type NavItem = {
  index: string;
  title: string;
  jp: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { index: "01", title: "Characters", jp: "人物", href: "/characters" },
  { index: "02", title: "Classes", jp: "クラス", href: "/classes" },
  { index: "03", title: "Ranking", jp: "順位", href: "/ranking" },
  { index: "04", title: "Special Exams", jp: "特別試験", href: "/exams" },
  { index: "05", title: "Timeline", jp: "年表", href: "/timeline" },
  { index: "06", title: "About", jp: "このアーカイブについて", href: "/about" },
];

export type PageMeta = {
  code: string;
  title: string;
  jp: string;
  note: string;
};

export const PAGE_META: Record<NavItem["href"], PageMeta> = {
  "/characters": {
    code: "01",
    title: "Characters",
    jp: "人物",
    note: "Registry of meritorious students, judged by ability alone.",
  },
  "/classes": {
    code: "02",
    title: "Classes",
    jp: "クラス",
    note: "Four divisions — A, B, C, D — ranked by merit and points.",
  },
  "/ranking": {
    code: "03",
    title: "Ranking",
    jp: "順位",
    note: "Evaluation is everything. The scoreboard that decides standing.",
  },
  "/exams": {
    code: "04",
    title: "Special Exams",
    jp: "特別試験",
    note: "Rules are given. The outcome belongs to those who read them.",
  },
  "/timeline": {
    code: "05",
    title: "Timeline",
    jp: "年表",
    note: "A chronology of the campus — recorded, month by month.",
  },
  "/about": {
    code: "06",
    title: "About",
    jp: "このアーカイブについて",
    note: "A fan archive. Unofficial, unaffiliated, quietly curated.",
  },
};