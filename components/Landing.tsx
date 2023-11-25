"use client";

import data from "@/utils/hero";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Hero from "./Hero";
import HeroSection from "./HeroSection";
import Link from "next/link";

const Landing = ({ href }: { href: string }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[700vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex ">
          <HeroSection href={href} />
          {data.map((data) => {
            return (
              <Hero
                text={data.text}
                key={data.id}
                id={data.id}
                url={data.url}
                href={href}
                subtext={data.subtext}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
