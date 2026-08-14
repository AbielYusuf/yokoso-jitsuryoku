import { SectionLabel } from "@/components/common/SectionLabel";

export function ExamHeader() {
  return (
    <header>
      <SectionLabel data-exam-label>Examination Archive // ANHS</SectionLabel>

      <h1 className="mt-8">
        <span className="block overflow-hidden pb-1">
          <span
            data-exam-title
            className="block font-display text-6xl uppercase leading-none tracking-[0.02em] sm:text-7xl lg:text-[6rem]"
          >
            Exams
          </span>
        </span>
      </h1>

      <p
        data-exam-sub
        className="mt-8 max-w-[24rem] font-display text-xl italic leading-snug tracking-[0.01em] text-muted sm:text-2xl"
      >
        A confidential log of examinations — rules issued, standing changed, outcomes recorded.
      </p>
    </header>
  );
}