/**
 * About — institutional profile for ANHS.
 *
 * PLACEHOLDER / STRUCTURAL DATA. The canon data pass happens later; the values
 * below are deliberately neutral and replaceable without touching component
 * architecture. No dates, figures, or story facts here are claimed as
 * official. Everything is filed under the Office of Records as a stand-in.
 */
export type MetaRow = {
  label: string;
  value: string;
};

export type GradeRecord = {
  id: string;
  name: string;
  label: string;
  status: string;
};

export type EvaluationItem = {
  id: string;
  label: string;
  detail: string;
  status: string;
};

export type ArchiveNote = {
  id: string;
  body: string;
};

export type AboutData = {
  institution: {
    name: string;
    abbreviation: string;
    classification: string;
    description: string;
    meta: MetaRow[];
  };
  philosophy: {
    statement: string;
    body: string;
    attribution: string;
  };
  structure: {
    intro: string;
    grades: GradeRecord[];
  };
  evaluation: {
    intro: string;
    items: EvaluationItem[];
  };
  notes: {
    intro: string;
    items: ArchiveNote[];
  };
  colophon: {
    line: string;
    record: string;
  };
};

export const ABOUT: AboutData = {
  institution: {
    name: "Advanced Nurturing High School",
    abbreviation: "ANHS",
    classification: "Private / Boarding",
    description:
      "A private high school operating under its own administrative authority. Its systems are built around a single premise — that standing is earned, measured, and recorded.",
    meta: [
      { label: "Established", value: "Restricted" },
      { label: "Authority", value: "Office of Records" },
      { label: "Status", value: "Active — Second Year" },
    ],
  },
  philosophy: {
    statement: "Merit is not assumed. It is measured, filed, and ranked.",
    body: "The institution evaluates its students continuously through examinations, class conduct, and the accumulation of points. Standing within the school reflects this recorded history rather than any single moment.",
    attribution: "Office of Records",
  },
  structure: {
    intro:
      "Instruction is organized into grade groups, each divided into four classes. A year group advances as a whole, carrying its recorded history forward.",
    grades: [
      { id: "grade-1", name: "First Year", label: "Grade 1", status: "Prior Record" },
      { id: "grade-2", name: "Second Year", label: "Grade 2", status: "Active" },
      { id: "grade-3", name: "Third Year", label: "Grade 3", status: "Pending" },
    ],
  },
  evaluation: {
    intro:
      "Standing is tracked through a point system, with results recorded against individual and class registers. Figures are held in sealed files until their release is authorized.",
    items: [
      {
        id: "eval-class",
        label: "Class Points",
        detail: "Allocated to class standing",
        status: "Recorded",
      },
      {
        id: "eval-private",
        label: "Private Points",
        detail: "Individual allocation",
        status: "Recorded",
      },
      {
        id: "eval-exam",
        label: "Examination Results",
        detail: "Sealed pending release",
        status: "Sealed",
      },
    ],
  },
  notes: {
    intro: "The following conventions govern the maintenance of this archive.",
    items: [
      { id: "01", body: "Records are filed under the Office of Records." },
      { id: "02", body: "Entries are written in the order events occur." },
      { id: "03", body: "Sealed entries are not opened until authorized." },
      { id: "04", body: "Placeholder fields remain open pending verification." },
      { id: "05", body: "The archive follows the academic year." },
    ],
  },
  colophon: {
    line: "End of File",
    record: "ANHS // Recorded // Second Year",
  },
};