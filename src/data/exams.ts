/**
 * Exam records — ANHS examination archive.
 *
 * PLACEHOLDER / STRUCTURAL DATA. The canon data pass happens later; the values
 * below are deliberately neutral and replaceable without touching component
 * architecture. `result` is optional and only rendered when a record actually
 * has one. No scores, dates, rules, or results here are claimed as official.
 */
export type ExamRecord = {
  id: string;
  title: string;
  type: string;
  yearLabel: string;
  status: string;
  recordId: string;
  description: string;
  result?: string;
  /**
   * Architecture for the future exam → character relationship. References only
   * (no duplicated character objects). Left unpopulated until a verified
   * roster exists — do not fabricate participants.
   */
  participantIds?: string[];
  /**
   * Future resolved-result records. Left unpopulated; no results are claimed
   * as official yet.
   */
  resultIds?: string[];
};

export const EXAMS: ExamRecord[] = [
  {
    id: "exam-interim",
    title: "Interim Examination",
    type: "Written Examination",
    yearLabel: "Second Year",
    status: "Recorded",
    recordId: "ANHS-EXAM-001",
    description:
      "A scheduled written evaluation. Results logged and sealed for reference.",
    result: "Filed",
  },
  {
    id: "exam-class-selection",
    title: "Class Selection Exam",
    type: "Special Examination",
    yearLabel: "Second Year",
    status: "Sealed",
    recordId: "ANHS-EXAM-002",
    description:
      "Rules distributed; the outcome withheld from the open register.",
  },
  {
    id: "exam-paper-shuffle",
    title: "Paper Shuffle Exam",
    type: "Special Examination",
    yearLabel: "Second Year",
    status: "Sealed",
    recordId: "ANHS-EXAM-003",
    description:
      "Methods kept confidential. Results pending official annotation.",
  },
  {
    id: "exam-final-term",
    title: "Final Term Examination",
    type: "Written Examination",
    yearLabel: "Second Year",
    status: "Active",
    recordId: "ANHS-EXAM-004",
    description:
      "The culminating written examination of the term. No result recorded yet.",
    result: "Pending",
  },
];