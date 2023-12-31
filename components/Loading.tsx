"use client";

import { useLoadContext } from "@/utils/context";

const Loading = () => {
  const { loading } = useLoadContext();
  console.log("loading");
  return (
    loading && (
      <div className=" fixed z-10  ">
        <div className="w-screen h-screen  text-4xl text-orange-200 overflow-hidden  flex justify-center items-center bg-black/80  bg-opacity-100  absolute animate-">
          Em<span className="text-orange-400 animate-spin ">o</span>tionary
        </div>
      </div>
    )
  );
};

export default Loading;
