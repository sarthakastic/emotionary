"use client";

import { createNewEntry } from "@/utils/api";
import { useLoadContext } from "@/utils/context";
import { PenSquareIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NewEntryCard = () => {
  const router = useRouter();

  const { loading, setLoading } = useLoadContext();

  const handleOnClick = async () => {
    setLoading(true);
    const data = await createNewEntry();
    router.push(`/journal/${data.id}`);
  };

  return (
    <div
      className="cursor-pointer overflow-hidden rounded-lg animate-fade-in-right min-h-[200px] bg-orange-200  w-96 shadow-2xl hover:cursor-pointer hover:animate-wiggle  "
      onClick={handleOnClick}
    >
      <div className="px-4 py-5 sm:p-6 flex items-center justify-start ">
        <PenSquareIcon /> <span className="text-3xl pl-5 ">Add New Entry</span>
      </div>
      <p className="p-5">Write about your day!</p>
    </div>
  );
};

export default NewEntryCard;
