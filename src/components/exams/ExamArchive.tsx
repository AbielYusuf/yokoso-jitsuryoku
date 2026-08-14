import { EXAMS } from "@/data/exams";
import { ExamsMotion } from "@/components/exams/ExamsMotion";
import { ExamHeader } from "@/components/exams/ExamHeader";
import { ExamRecord } from "@/components/exams/ExamRecord";

export function ExamArchive() {
  return (
    <ExamsMotion>
      <main className="relative mx-auto w-full max-w-[1440px] px-6 pb-36 pt-32 sm:px-10 lg:px-16 lg:pt-40 xl:px-24">
        <ExamHeader />

        <div className="mt-20 lg:mt-28">
          {EXAMS.map((exam, index) => (
            <ExamRecord key={exam.id} exam={exam} index={index} />
          ))}
        </div>
      </main>
    </ExamsMotion>
  );
}