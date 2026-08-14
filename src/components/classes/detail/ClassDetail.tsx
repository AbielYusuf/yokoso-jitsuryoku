import type { ClassRecord } from "@/data/classes";
import { ClassDetailMotion } from "@/components/classes/detail/ClassDetailMotion";
import { ClassDetailHeader } from "@/components/classes/detail/ClassDetailHeader";
import { ClassDetailMeta } from "@/components/classes/detail/ClassDetailMeta";
import { ClassStudentList } from "@/components/classes/detail/ClassStudentList";

export function ClassDetail({ klass }: { klass: ClassRecord }) {
  return (
    <ClassDetailMotion>
      <main className="relative mx-auto w-full max-w-[1440px] px-6 pb-36 pt-32 sm:px-10 lg:px-16 lg:pt-36 xl:px-24">
        <ClassDetailHeader klass={klass} />

        <section
          aria-label="Class record"
          className="mt-16 grid grid-cols-12 gap-y-14 lg:mt-24"
        >
          <div className="col-span-12 lg:col-span-9 lg:col-start-2">
            <ClassDetailMeta klass={klass} />
          </div>

          <div className="col-span-12 lg:col-span-9 lg:col-start-2">
            <ClassStudentList klass={klass} />
          </div>
        </section>
      </main>
    </ClassDetailMotion>
  );
}