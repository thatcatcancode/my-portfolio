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
        <span className="italic">I started programming </span> as a creative outlet for telling stories in a new medium.
        As an ungrad, I landed my first contract gig rebuilding my college's science library portal.
        After graduating with a Bachelor of Arts, I began my professional journey as an application developer on a secret 🤫 government contract.
        During this time, I formalized my tech knowledge, earning a graduate degree in engineering from FIT.
      </p>
      <p className="mb-3">
      <span className="italic">Since then</span>, I've worked across various industries and tech stacks,
        solving interesting problems and making lifelong friends along the way.
        My favorite part of programming is going up against Goliath problems
        that stare you down and make you question your ability.
        There is nothing more satisfying than solving the gnarliest of problems,
        looking back at it in your rearview mirror and thinking "that was easy",
        as you zoom away to slay your next giant challenge.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I'm cherishing time
        with family, while watching "footie" matches, playing in a lively kickball league,
        <span className="font-medium">and making improvements to my home</span>. I am currently
        learning about coral reefs with my daughter. 🐠
      </p>
    </motion.section>
  );
}
