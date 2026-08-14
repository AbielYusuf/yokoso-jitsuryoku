import type { ExamRecord } from "@/data/exams";
import { ExamDetailMotion } from "@/components/exams/detail/ExamDetailMotion";
import { ExamDetailHeader } from "@/components/exams/detail/ExamDetailHeader";
import { ExamDetailMeta } from "@/components/exams/detail/ExamDetailMeta";
import { ExamParticipants } from "@/components/exams/detail/ExamParticipants";

export function ExamDetail({ exam }: { exam: ExamRecord }) {
  return (
    <ExamDetailMotion>
      <main className="relative mx-auto w-full max-w-[1440px] px-6 pb-36 pt-32 sm:px-10 lg:px-16 lg:pt-36 xl:px-24">
        <ExamDetailHeader exam={exam} />

        <section
          aria-label="Examination record"
          className="mt-16 grid grid-cols-12 gap-y-14 lg:mt-24"
        >
          <div className="col-span-12 lg:col-span-9 lg:col-start-2">
            <ExamDetailMeta exam={exam} />
          </div>

          <div className="col-span-12 lg:col-span-9 lg:col-start-2">
            <ExamParticipants exam={exam} />
          </div>
        </section>
      </main>
    </ExamDetailMotion>
  );
}