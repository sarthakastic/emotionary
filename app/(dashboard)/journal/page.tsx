import EntryCard from "@/components/EntryCard";
import Loading from "@/components/Loading";
import NewEntryCard from "@/components/NewEntryCard";
import Question from "@/components/Question";
import { analyze } from "@/utils/ai";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import Link from "next/link";
import { openai } from "../../../utils/openai";
import Image from "@/components/Image";

const getEntries = async () => {
  const user = await getUserByClerkID();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      analysis: true,
    },
  });
  console.log(entries, "entrues");
  return entries;
};

const JournalPage = async () => {
  const entries = getEntries();

  // const response = await openai.images.generate({
  //   model: "dall-e-3",
  //   prompt: "a pan cake",
  //   n: 1,
  //   size: "1024x1024",
  // });

  // let image = response.data[0].url;

  // console.log(response.data[0].url, "dalle");

  return (
    <div className="p-10 bg-zinc-400/10 backgroundPattern h-full bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-200 via-violet-200 to-orange-100 ">
      {/* <img src={image} alt="iamge" /> */}
      {/* <Loading /> */}
      {/* <Image /> */}
      <h2 className="text-3xl mb-8 ">Journal</h2>
      <div className="my-8">
        <Question />
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        <NewEntryCard />
        {(await entries).map((entry, id) => (
          // <Link key={entry.id} href={`/journal/${entry.id}`}>
          <EntryCard key={id} entry={entry} />
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
