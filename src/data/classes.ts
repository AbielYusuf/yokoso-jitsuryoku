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
};

export const CLASSES: ClassRecord[] = [
  {
    id: "class-2a",
    name: "2-A",
    yearLabel: "Second Year",
    homeroom: null,
    rank: "1",
    status: "Active",
    recordId: "ANHS-CLASS-02-A",
    description:
      "The lead division. High cumulative points, held to the strictest accounting.",
  },
  {
    id: "class-2b",
    name: "2-B",
    yearLabel: "Second Year",
    homeroom: null,
    rank: "2",
    status: "Active",
    recordId: "ANHS-CLASS-02-B",
    description:
      "A steady middle register. Consistent in examinations and conduct alike.",
  },
  {
    id: "class-2c",
    name: "2-C",
    yearLabel: "Second Year",
    homeroom: null,
    rank: "3",
    status: "Active",
    recordId: "ANHS-CLASS-02-C",
    description:
      "Standing below the median. Outcomes recorded with careful attention.",
  },
  {
    id: "class-2d",
    name: "2-D",
    yearLabel: "Second Year",
    homeroom: null,
    rank: "4",
    status: "Active",
    recordId: "ANHS-CLASS-02-D",
    description:
      "Lowest in standing. Aptitude uneven; results monitored closely.",
  },
];