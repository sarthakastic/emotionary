"use client";

import { useLoadContext } from "@/utils/context";

const Loading = () => {
  const { loading } = useLoadContext();
  console.log("loading");
  return (
    loading && (
      <div className="absolute z-10">
        <div className="w-screen h-[100vh] text-4xl text-orange-500 overflow-hidden  flex justify-center items-center bg-black/80  bg-opacity-100  absolute animate-">
          m<span className="text-orange-800 animate-spin ">oo</span>d
        </div>
      </div>
    )
  );
};

export default Loading;
