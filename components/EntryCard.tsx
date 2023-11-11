"use client";
import { deleteJournal } from "@/utils/api";
import { getUserByClerkID } from "@/utils/auth";
import { useLoadContext } from "@/utils/context";
import { prisma } from "@/utils/db";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { openai } from "@/utils/openai";
import { Trash2 } from "lucide-react";

const EntryCard = ({ entry }: { entry: any }) => {
  const date = new Date(entry?.analysis?.createdAt).toDateString();

  const colors = [
    "#ffda9e",
    "#84b6f4",
    "#ff94a2",
    "#c5c6c8",
    "#eaffc2",
    "#e79eff",
    "#ffe4e1",
  ];

  const animation = [
    "animate-fade-in-down",
    "animate-fade-in-left",
    "animate-fade-in-up",
    "animate-fade-in-right",
  ];

  const width = ["w-64", "w-52", "w-80", "w-72"];

  function pickRandomColor(): number {
    // Generate a random number between 0 (inclusive) and 5 (exclusive)
    const randomNumber = Math.floor(Math.random() * 7);
    return randomNumber;
  }

  const randomColor = pickRandomColor();

  function pickRandomAnimation(): number {
    // Generate a random number between 0 (inclusive) and 5 (exclusive)
    const randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
  }

  const randomAnimation = pickRandomColor();

  const router = useRouter();

  const { loading, setLoading } = useLoadContext();

  const getEntries = async () => {
    const user = await getUserByClerkID();
    const entries = await prisma.journalEntry.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(entries, "entries");
    return entries;
  };
  // console.log(entry, "entry");

  const onDeleteSuccess = () => {
    setLoading(false);
    router.refresh();
  };

  const deleteJournl = async (entry: any) => {
    console.log(entry, "called");
    setLoading(true);
    const deleteStatus = await deleteJournal({
      id: entry.analysis?.entryId,
      userId: entry.analysis?.userId,
    });
    console.log(deleteStatus, "deleteStatus");
    deleteStatus?.status === 200 && onDeleteSuccess();
  };

  return (
    <div
      className={` overflow-hidden ${animation[randomAnimation]} text-2xl divide-y divide-orange-200 w-96 bg-orange-50 max-w-sm rounded-lg shadow-2xl  hover:scale-105  `}
      // style={{ backgroundColor: colors[randomColor] }}
    >
      {}
      <div className="px-4 py-5 sm:px-6">{date}</div>
      <div className="px-4 py-5 sm:p-6">{entry.analysis?.summary}</div>
      <div className="px-4 py-4 sm:px-6">{entry.analysis?.mood}</div>

      <div className="flex items-center justify-between p-2 ">
        <Link key={entry.id} href={`/journal/${entry.analysis?.entryId}`}>
          <div
            onClick={() => setLoading(true)}
            className="px-2 border-black rounded-lg border sm:px-6 hover:outline-double "
          >
            Edit or View{" "}
          </div>
        </Link>
        <button
          className="px-4 py-4 sm:px-6"
          type="button"
          onClick={() => deleteJournl(entry)}
        >
          <Trash2 color="red" />
        </button>
      </div>
    </div>
  );
};

export default EntryCard;
