"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { auth } from "@clerk/nextjs";
import cw from "../app/Creative writing.gif";
import { ArrowBigDown } from "lucide-react";
import { Carattere } from "next/font/google";

const tapestry = Carattere({
  subsets: ["latin"],
  weight: "400",
});

const HeroSection = ({ href }: { href?: string }) => {
  return (
    <div className="flex flex-col w-screen h-screen  m-auto justify-center items-center ">
      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="absolute -top-14 -left-14  md:-left-40 md:w-96 md:h-96 w-40 h-40 md:-top-28 animate-fade-in-down "
      >
        {" "}
        <defs>
          {" "}
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            {" "}
            <stop
              id="stop1"
              stop-color="rgba(248, 117, 55, 1)"
              offset="0%"
            ></stop>{" "}
            <stop
              id="stop2"
              stop-color="rgba(251, 168, 31, 1)"
              offset="100%"
            ></stop>{" "}
          </linearGradient>{" "}
        </defs>{" "}
        <path
          fill="url(#sw-gradient)"
          d="M16.7,-26.5C23.9,-24.8,33.4,-24.8,35.3,-20.7C37.3,-16.5,31.7,-8.3,30.3,-0.8C28.9,6.6,31.7,13.3,30.1,18.1C28.6,22.9,22.6,26,16.9,28.8C11.2,31.7,5.6,34.4,0.2,34.1C-5.3,33.8,-10.5,30.6,-13.6,26.2C-16.8,21.8,-17.8,16.4,-17.7,11.8C-17.5,7.3,-16.2,3.6,-16.7,-0.3C-17.2,-4.2,-19.5,-8.4,-18.8,-11.4C-18,-14.4,-14.2,-16.2,-10.5,-19.8C-6.9,-23.5,-3.4,-29,0.7,-30.1C4.8,-31.3,9.6,-28.1,16.7,-26.5Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          //   style="transition: all 0.3s ease 0s;"
          stroke="url(#sw-gradient)"
        ></path>{" "}
      </svg>

      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="absolute left-[70vw]  top-[90vh] md:left-[82vw] md:top-[72vh] md:w-96 md:h-96 w-40 h-40 animate-fade-in-up "
      >
        {" "}
        <defs>
          {" "}
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            {" "}
            <stop
              id="stop1"
              stop-color="rgba(248, 117, 55, 1)"
              offset="0%"
            ></stop>{" "}
            <stop
              id="stop2"
              stop-color="rgba(251, 168, 31, 1)"
              offset="100%"
            ></stop>{" "}
          </linearGradient>{" "}
        </defs>{" "}
        <path
          fill="url(#sw-gradient)"
          d="M16.7,-26.5C23.9,-24.8,33.4,-24.8,35.3,-20.7C37.3,-16.5,31.7,-8.3,30.3,-0.8C28.9,6.6,31.7,13.3,30.1,18.1C28.6,22.9,22.6,26,16.9,28.8C11.2,31.7,5.6,34.4,0.2,34.1C-5.3,33.8,-10.5,30.6,-13.6,26.2C-16.8,21.8,-17.8,16.4,-17.7,11.8C-17.5,7.3,-16.2,3.6,-16.7,-0.3C-17.2,-4.2,-19.5,-8.4,-18.8,-11.4C-18,-14.4,-14.2,-16.2,-10.5,-19.8C-6.9,-23.5,-3.4,-29,0.7,-30.1C4.8,-31.3,9.6,-28.1,16.7,-26.5Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          //   style="transition: all 0.3s ease 0s;"
          stroke="url(#sw-gradient)"
        ></path>{" "}
      </svg>

      <div className=" flex w-screen mx-5 flex-col md:flex-row md:justify-around justify-center items-center  ">
        <div className="flex flex-col items-center justify-center  md:justify-start md:items-start ">
          <p
            className={`font-semibold text-4xl md:text-8xl animate-fade-in-right ${tapestry.className} `}
          >
            Emotionary
          </p>
          <p className="animate-fade-in-right ml-8 md:ml-0 text-xl md:text-4xl text-orange-400 ">
            Your AI Journal to understand all your emotions
          </p>
        </div>
        <Image
          src={cw}
          width={500}
          height={500}
          alt="image"
          unoptimized={true}
        />
      </div>
      {typeof href === "string" && (
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
    </div>
  );
};

export default HeroSection;
