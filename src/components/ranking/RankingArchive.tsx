import { RANKING } from "@/data/ranking";
import { RankingMotion } from "@/components/ranking/RankingMotion";
import { RankingHeader } from "@/components/ranking/RankingHeader";
import { RankingRecord } from "@/components/ranking/RankingRecord";

export function RankingArchive() {
  return (
    <RankingMotion>
      <main className="relative mx-auto w-full max-w-[1440px] px-6 pb-36 pt-32 sm:px-10 lg:px-16 lg:pt-40 xl:px-24">
        <RankingHeader />

        <div className="mt-20 lg:mt-28">
          {RANKING.map((record, index) => (
            <RankingRecord key={record.id} record={record} index={index} />
          ))}
        </div>
      </main>
    </RankingMotion>
  );
}