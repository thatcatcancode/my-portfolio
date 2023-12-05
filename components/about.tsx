"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="italic">I began </span> my professional journey in 2008 as an application developer on a secret 🤫 government contract.
        During this time, I earned a graduate degree in engineering. Since then, I've worked across various industries and tech stacks,
        solving interesting problems and making lifelong friends along the way.
      </p>
      <p className="mb-3">
        <span className="italic">My favorite part about programming</span> is being able to easily volunteer my skillset to nonprofits and fun side projects, 
        whether that's creating a wedding vendor platform, an outdoor cat safety app or helping rescue dogs find a forever home 🐶. 
        I'm lucky to have skills that apply to so many different areas of life.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I'm cherishing time
        with family, while watching "footie" matches ⚽️, playing in a lively kickball league,
        <span className="font-medium"> and making improvements to my home</span>. I am currently
        learning about coral reefs with my daughter. 🐠
      </p>
    </motion.section>
  );
}
