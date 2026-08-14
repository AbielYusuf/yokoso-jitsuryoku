/**
 * Class records for the ANHS class register.
 *
 * PLACEHOLDER / STRUCTURAL DATA — the full canon pass happens later.
 * Descriptions are deliberately neutral and archival so they can be replaced
 * without cascading changes. `homeroom` is left `null` where unconfirmed.
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
   * placeholder register stays valid; the future roster pass fills this in
   * with references only (never duplicated character objects).
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
    id: "2-a",
    name: "2-A",
    yearLabel: "Second Year",
    homeroom: null,
    rank: "1",
    status: "Active",
    recordId: "ANHS-CLASS-02-A",
    classPoints: null,
    description:
      "The lead division. High cumulative points, held to the strictest accounting.",
  },
  {
    id: "2-b",
    name: "2-B",
    yearLabel: "Second Year",
    homeroom: null,
    rank: "2",
    status: "Active",
    recordId: "ANHS-CLASS-02-B",
    classPoints: null,
    description:
      "A steady middle register. Consistent in examinations and conduct alike.",
  },
  {
    id: "2-c",
    name: "2-C",
    yearLabel: "Second Year",
    homeroom: null,
    rank: "3",
    status: "Active",
    recordId: "ANHS-CLASS-02-C",
    classPoints: null,
    description:
      "Standing below the median. Outcomes recorded with careful attention.",
  },
  {
    id: "2-d",
    name: "2-D",
    yearLabel: "Second Year",
    homeroom: null,
    rank: "4",
    status: "Active",
    recordId: "ANHS-CLASS-02-D",
    classPoints: null,
    description:
      "Lowest in standing. Aptitude uneven; results monitored closely.",
    studentIds: [
      "ayanokoji-kiyotaka",
      "horikita-suzune",
      "kushida-kikyo",
      "sudo-ken",
    ],
  },
];