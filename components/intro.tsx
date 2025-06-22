"use client";

import React from "react";
import { useChat, useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Greeting } from "./greeting";
import { Loader } from "./loader";
import { ChatMessages } from "./chat-messages";
import { ChatForm } from "./chat-form";
import { ProjectLink } from "./project-link";
import { ChatError } from "./chat-error";
import { useWordsContext } from "@/context/words-context";

export default function Intro() {
  const { words, highlightWords } = useWordsContext();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { messages, loading, error, sendChat } = useChat();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    // Get the form value
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const input = formData.get('message') as string;

    // Update the global words context
    highlightWords(input);

    // Reset the form
    e.currentTarget.reset();

    // Call the api
    await sendChat(input);
  };

  const handleProjectNav = () => {
    setActiveSection("Projects");
    setTimeOfLastClick(Date.now());
  }

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
        <ChatError error={error} />
      </div>

      <ChatForm handleSubmit={handleSubmit} />

      <ProjectLink handleProjectNav={handleProjectNav} />
    </section>
  );
}
