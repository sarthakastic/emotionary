import HistoryChart from "@/components/HistoryChart";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getData = async () => {
  const user = await getUserByClerkID();
  const analyses = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
  });

  const sum = analyses.reduce(
    (all, current) => all + current.sentimentScore,
    0
  );
  const avg = Math.round(sum / analyses.length);

  return { analyses, avg };
};

const History = async () => {
  const { avg, analyses } = await getData();
  //   console.log(analyses);

  return (
    <div className="w-full h-full font-bold text-orange-400 font-sans mt-20 ">
      <div>
        Mood Throughout the Journalling:{" "}
        {avg > 4 ? (
          <span className="text-orange-500">Happy</span>
        ) : avg < 0 ? (
          <span className="text-orange-500">Sad</span>
        ) : (
          <span className="text-orange-500">Neutral</span>
        )}
      </div>
      <div className="w-full h-full ">
        <HistoryChart data={analyses} />
      </div>
    </div>
  );
};

export default History;
