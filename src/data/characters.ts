/**
 * Character records for the ANHS private archive.
 *
 * Artwork lives in `public/assets/characters/`.
 * To attach official art to a record, drop the asset at
 * `public/assets/characters/<recordId>.jpg` and set `image` to the public path,
 * e.g. `image: "/assets/characters/anhs-001.jpg"`. While `image` is `null`
 * the portrait renders its restrained placeholder instead.
 *
 * Aspect ratio strings read "width / height" and are safe Tailwind arbitrary
 * values. Keep them in portrait orientation to anchor the composition.
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
  yearLabel: string;
  status: "Active";
  recordId: string;
  image: string | null;
  portraitAspect: string;
  description: string;
};

export const CHARACTERS: Character[] = [
  {
    id: "ayanokoji-kiyotaka",
    firstName: "Kiyotaka",
    lastName: "Ayanokoji",
    jp: "綾小路 清隆",
    monogram: "綾",
    className: "2-D",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-001",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "A student who records almost nothing about himself. Present in the register; absent from the annotations.",
  },
  {
    id: "horikita-suzune",
    firstName: "Suzune",
    lastName: "Horikita",
    jp: "堀北 鈴音",
    monogram: "堀",
    className: "2-D",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-002",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "Keeps a precise, guarded record. Every line accounted for — none of them easy to read.",
  },
  {
    id: "kushida-kikyo",
    firstName: "Kikyo",
    lastName: "Kushida",
    jp: "櫛田 桔梗",
    monogram: "櫛",
    className: "2-D",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-003",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "The friendliest file in the archive. The file disagrees with itself.",
  },
  {
    id: "sudo-ken",
    firstName: "Ken",
    lastName: "Sudo",
    jp: "須藤 健",
    monogram: "須",
    className: "2-D",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-004",
    image: null,
    portraitAspect: "3 / 4",
    description:
      "A file marked by impulse. Aptitude present — composure pending review.",
  },
];