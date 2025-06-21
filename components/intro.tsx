"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrow90DegRight } from "react-icons/bs";
import { useChat, useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Greeting } from "./greeting";
import { Loader } from "./loader";
import { ChatMessages } from "./chat-messages";
import { ChatForm } from "./chat-form";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { messages, loading, error, sendChat } = useChat();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const input = formData.get('message') as string;
    e.currentTarget.reset();

    await sendChat(input);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] mx-auto text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <Greeting />

      <div className="flex flex-col mx-auto">
        <ChatMessages messages={messages} />
        {loading && (
          <Loader />
        )}
      </div>

      <ChatForm handleSubmit={handleSubmit} />

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
