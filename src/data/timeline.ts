/**
 * Timeline records — chronological institutional log for ANHS.
 *
 * PLACEHOLDER / STRUCTURAL DATA. The canon data pass happens later; the values
 * below are deliberately neutral and replaceable without touching component
 * architecture. No dates, outcomes, or story facts here are claimed as
 * official — entries describe generic institutional events only.
 *
 * The array is ordered chronologically (earliest first).
 */
export type TimelineRecord = {
  id: string;
  dateLabel: string;
  yearLabel: string;
  title: string;
  category: string;
  status: string;
  recordId: string;
  description: string;
  /**
   * Relationship architecture for the future canon pass. References only;
   * left unpopulated until a connection is explicitly supported by the data.
   */
  relatedExamId?: string;
  relatedCharacterIds?: string[];
  relatedClassId?: string;
};

export const TIMELINE: TimelineRecord[] = [
  {
    id: "log-001",
    dateLabel: "Term 1",
    yearLabel: "Second Year",
    title: "Term Opening",
    category: "Administrative",
    status: "Recorded",
    recordId: "ANHS-LOG-001",
    description:
      "The register is reopened for the second year and attendance is entered across all classes.",
  },
  {
    id: "log-002",
    dateLabel: "Mid-Term",
    yearLabel: "Second Year",
    title: "Interim Examination",
    category: "Examination",
    status: "Recorded",
    recordId: "ANHS-LOG-002",
    description:
      "The term's first written evaluation is held. Results are filed and set aside for reference.",
  },
  {
    id: "log-003",
    dateLabel: "Term 2",
    yearLabel: "Second Year",
    title: "Special Examination Notice",
    category: "Examination",
    status: "Sealed",
    recordId: "ANHS-LOG-003",
    description:
      "Rules are circulated to each class ahead of a special examination. Details are withheld from the open log.",
  },
  {
    id: "log-004",
    dateLabel: "Term 3",
    yearLabel: "Second Year",
    title: "Term Review",
    category: "Administrative",
    status: "Pending",
    recordId: "ANHS-LOG-004",
    description:
      "Year-end review of the log in progress. Entries await final annotation before the record is closed.",
  },
];