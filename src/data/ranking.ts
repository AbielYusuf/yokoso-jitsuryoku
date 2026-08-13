/**
 * Ranking records — ANHS academic evaluation archive.
 *
 * PLACEHOLDER / STRUCTURAL DATA. The full canon ranking pass happens later.
 * `score` only exists to establish the visual architecture for future real
 * data; entries without a score simply omit the row. `description` is kept
 * for later use and is intentionally not rendered yet.
 */
export type RankingRecord = {
  id: string;
  rank: number;
  name: string;
  className: string;
  yearLabel: string;
  status: string;
  recordId: string;
  score?: string;
  description?: string;
};

export const RANKING: RankingRecord[] = [
  {
    id: "rk-ayanokoji",
    rank: 1,
    name: "Kiyotaka Ayanokoji",
    className: "2-D",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-EVAL-001",
    score: "864",
    description: "Recorded near the top of the evaluation sheet without ceremony.",
  },
  {
    id: "rk-horikita",
    rank: 2,
    name: "Suzune Horikita",
    className: "2-D",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-EVAL-002",
    score: "812",
    description: "A controlled, deliberate performance across all recorded measures.",
  },
  {
    id: "rk-kushida",
    rank: 3,
    name: "Kikyo Kushida",
    className: "2-D",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-EVAL-003",
    score: "794",
    description: "Consistently high marks; the sheet and the subject rarely agree.",
  },
  {
    id: "rk-sudo",
    rank: 4,
    name: "Ken Sudo",
    className: "2-D",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-EVAL-004",
    description: "Strength present in the physical record, uneven elsewhere.",
  },
  {
    id: "rk-pending-01",
    rank: 5,
    name: "Name Pending",
    className: "2-D",
    yearLabel: "Second Year",
    status: "Provisional",
    recordId: "ANHS-EVAL-005",
  },
  {
    id: "rk-pending-02",
    rank: 6,
    name: "Name Pending",
    className: "2-D",
    yearLabel: "Second Year",
    status: "Provisional",
    recordId: "ANHS-EVAL-006",
  },
];