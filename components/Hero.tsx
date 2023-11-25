"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { auth } from "@clerk/nextjs";
import hero from "../app/Creative writing.gif";
import ai from "../app/ai.png";
import dalle from "../app/daale.png";
import analysis from "../app/analysis.png";
import chart from "../app/chart.png";
import { ArrowBigDown } from "lucide-react";
import { Carattere } from "next/font/google";

const tapestry = Carattere({
  subsets: ["latin"],
  weight: "400",
});

const Hero = ({
  text,
  url,
  id,
  href,
  subtext,
}: {
  text: string;
  url: any;
  id: number;
  subtext: string;
  href?: string;
}) => {
  const [photo, setPhoto] = useState(hero);

  useEffect(() => {
    if (id === 2) {
      setPhoto(analysis);
    } else if (id === 3) {
      setPhoto(ai);
    } else if (id === 4) {
      setPhoto(dalle);
    } else if (id === 5) {
      setPhoto(chart);
    }
  }, []);

  return (
    <div
      className={`flex flex-col w-screen h-screen  m-auto justify-center items-center ${
        id % 2 === 0 ? "bg-orange-200" : "bg-white"
      } `}
    >
      <div className=" flex w-screen mx-5 flex-col md:flex-row justify-around items-center  ">
        <div className="ml-10 mb-10">
          <p
            className={`font-semibold text-4xl md:text-8xl animate-fade-in-right ${tapestry.className} `}
          >
            {text}
          </p>
          <p className="animate-fade-in-right max-w-[80%] text-xl md:text-4xl text-orange-400 ">
            {subtext}
          </p>
        </div>
        <Image
          src={photo}
          width={id == 1 ? 500 : 200}
          height={id == 1 ? 500 : 300}
          alt="image"
          className={`rounded-3xl md:mr-28 shadow-lg -rotate-6  shadow-orange-400 `}
          unoptimized={true}
        />
      </div>
      {id === 1 && typeof href === "string" && (
        <>
          {/* <div className="m-5 animate-fade-in-up ">
            <Link href={href}>
              <button className="bg-orange-200 p-4 rounded-lg text-lg px-4 py-2 ">
                get started
              </button>
            </Link>
          </div> */}
          <div className="animate-bounce absolute bottom-5 flex justify-center text-orange-400 border-2 border-orange-400 p-2 rounded-full hover:cursor-pointer ">
            Scroll <ArrowBigDown />{" "}
          </div>
        </>
      )}
      {id === 5 && typeof href === "string" && (
        <>
          <div className="m-5 mt-16 ">
            <Link href={href}>
              <button className="bg-orange-200 p-4 rounded-lg text-lg px-4 py-2 animate-bounce ">
                get started
              </button>
            </Link>
          </div>
          {/* <div className="animate-bounce absolute bottom-5 flex justify-center text-orange-400 border-2 border-orange-400 p-2 rounded-full hover:cursor-pointer ">
            Scroll <ArrowBigDown />{" "}
          </div> */}
        </>
      )}
    </div>
  );
};

export default Hero;
