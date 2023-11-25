import Editor from "@/components/Editor";
import AiImage from "@/components/Image";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getEntry = async (id: string) => {
  const user = await getUserByClerkID();

  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      analysis: true,
    },
  });
  return entry;
};

const EntryPage = async ({ params }: { params: any }) => {
  const entry = await getEntry(params.id);
  console.log(entry, "entry props");
  return (
    <div className="h-full w-full  ">
      <AiImage mood={entry?.analysis?.summary} />
      <Editor entry={entry} />
    </div>
  );
};

export default EntryPage;
