"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrow90DegRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import profileImg from "@/public/profile.jpeg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] mx-auto text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-start justify-center gap-4 pr-2">
        <div className="relative flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profileImg}
              alt="Lee portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-16 w-16 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>

        <motion.div
          className="relative text-left bg-white/10 backdrop-blur-sm rounded-tl-none rounded-2xl p-4 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1
            className="text-xl sm:text-2xl font-medium !leading-[1.5] relative z-10"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Hello! I'm Leila, </span> a {" "}
            <span className="font-bold">full-stack engineer</span> with a focus on {" "}
            <span className="font-bold">AI-powered solutions</span>. I enjoy building {" "}
            <span className="italic">intelligent</span>, <span className="italic">data-driven</span> {" "}
            systems that <span className="underline">personalize</span> user experience and drive {" "}
            <span className="underline">business innovation</span>.
          </motion.h1>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#projects"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
          }}
        >
          My work{" "}
          <BsArrow90DegRight style={{ transform: 'rotate(90deg)' }} className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
      </motion.div>
    </section>
  );
}
