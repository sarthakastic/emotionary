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
  const entries = await getEntries();

  // const response = await openai.images.generate({
  //   model: "dall-e-3",
  //   prompt: "a pan cake",
  //   n: 1,
  //   size: "1024x1024",
  // });

  // let image = response.data[0].url;

  // console.log(response.data[0].url, "dalle");

  return (
    <div className="p-10 border-l border-orange-400   min-h-screen max-h-fit bg-white ">
      {/* <img src={image} alt="iamge" /> */}
      {/* <Loading /> */}
      {/* <Image /> */}
      <h2 className="text-3xl mb-8 "> My Journals</h2>
      <div className="my-8">
        <Question />
      </div>
      <div className="flex flex-wrap flex-grow items-center justify-evenly gap-4 ">
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
