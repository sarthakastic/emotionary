"use client";

import { createNewEntry } from "@/utils/api";
import { useLoadContext } from "@/utils/context";
import { useRouter } from "next/navigation";

const NewEntryCard = () => {
  const router = useRouter();

  const { loading, setLoading } = useLoadContext();

  const handleOnClick = async () => {
    setLoading(true);
    const data = await createNewEntry();
    router.push(`/journal/${data.id}`);
    setLoading(false);
  };

  return (
    <div
      className="cursor-pointer overflow-hidden rounded-lg bg-[#ff6961] shadow-2xl hover:cursor-pointer hover:animate-wiggle  "
      onClick={handleOnClick}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="text-3xl">New Entry</span>
      </div>
    </div>
  );
};

export default NewEntryCard;
