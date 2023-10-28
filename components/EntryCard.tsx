"use client";
import { deleteJournal } from "@/utils/api";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import Link from "next/link";
import { useEffect } from "react";

const EntryCard = ({ entry }: { entry: any }) => {
  const date = new Date(entry.analysis.createdAt).toDateString();

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

  const deleteJournl = async (entry: any) => {
    console.log(entry, "called");
    const deleteStatus = await deleteJournal({
      id: entry.analysis.entryId,
      userId: entry.analysis.userId,
    });

    deleteStatus === 200 && getEntries();
  };

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6">{date}</div>
      <div className="px-4 py-5 sm:p-6">{entry.analysis.summary}</div>
      <div className="px-4 py-4 sm:px-6">{entry.analysis.mood}</div>

      <div className="flex">
        <Link key={entry.id} href={`/journal/${entry.id}`}>
          <div className="px-4 py-4 sm:px-6">Edit or View </div>
        </Link>
        <button
          className="px-4 py-4 sm:px-6"
          type="button"
          onClick={() => deleteJournl(entry)}
        >
          delete{" "}
        </button>
      </div>
    </div>
  );
};

export default EntryCard;
