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
        <span className="italic">I started programming in 2006</span> as a creative outlet for telling stories in a new medium.
        It was before JavaScript frameworks and "frontend" positions existed.
        As an ungrad, I rebuilt my college's science library portal & interned at the Digital Library Center.
        Upon graduating from the University of Florida with a degree in English Literature,
        I landed my first professional job as an application developer.
        During this time, I formalized my tech knowledge, earning a Master of Science
        from FIT's College of Engineering.
      </p>
      <p className="mb-3">
      <span className="italic">Since then</span>, I've worked across various industries and tech stacks,
        solving interesting problems and making lifelong friends along the way.
        My favorite part of programming is going up against Goliath problems
        that stare you down and make you question your ability.
        There is nothing more satisfying than solving the gnarliest of problems,
        looking back at it in your rearview mirror and thinking "that was easy",
        as you zoom away to slay your next giant.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I'm cherishing time
        with family, while watching "footie" matches, playing in a lively kickball league,
        <span className="font-medium">and making improvements to my home</span>. I am currently
        learning about coral reefs with my daughter.
      </p>
    </motion.section>
  );
}
