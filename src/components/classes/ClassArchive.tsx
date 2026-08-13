import { CLASSES } from "@/data/classes";
import { ClassesMotion } from "@/components/classes/ClassesMotion";
import { ClassHeader } from "@/components/classes/ClassHeader";
import { ClassRecord } from "@/components/classes/ClassRecord";

export function ClassArchive() {
  return (
    <ClassesMotion>
      <main className="relative mx-auto w-full max-w-[1440px] px-6 pb-36 pt-32 sm:px-10 lg:px-16 lg:pt-40 xl:px-24">
        <ClassHeader />

        <div className="mt-20 lg:mt-28">
          {CLASSES.map((klass, index) => (
            <ClassRecord
              key={klass.id}
              klass={klass}
              index={index}
              side={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </main>
    </ClassesMotion>
  );
}