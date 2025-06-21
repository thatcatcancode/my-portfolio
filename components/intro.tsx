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

      <motion.div
        className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-t border-gray-200/50 dark:border-white/10 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="max-w-[40rem] mx-auto">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              name="message"
              placeholder="Ask a question about me..."
              className="w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-white/10 focus:outline-none focus:border-gray-300 dark:focus:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 shadow-lg"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
          <p className="text-center text-xs text-gray-600 dark:text-white/40 mt-2">
            RAG-based chatbot powered by Groq, Llama, HuggingFace, Pinecone, Python, FastAPI, LangChain + LangSmith
          </p>
        </div>
      </motion.div>

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
