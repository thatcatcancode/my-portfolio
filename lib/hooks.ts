import { useActiveSectionContext } from "@/context/active-section-context";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { ChatMessage, SectionName } from "./types";
import { v4 as uuid } from 'uuid';

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const sendChat = useCallback(async (input: string) => {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    const userId = uuid();
    const userMessage: ChatMessage = { role: 'user', content: input, id: userId }
    setMessages((prev) => [...prev, userMessage]);
    setTimeout(() => {
      const message = document.getElementById(userId);
      if (message) {
        message.scrollIntoView({ behavior: 'smooth' });
      }
    }, 250);
    //TODO Move to env var CHAT_API_URL
    try {
      const response = await fetch('https://human-ai-latest.onrender.com/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input
        })
      })
      const data = await response.json();
      if (data.data.role === 'agent' && !!data.data.content) {
        setMessages((prev) => [
          ...prev,
          { id: uuid(), role: 'agent', content: data.data.content }
        ]);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [])

  return {
    sendChat,
    messages,
    loading,
    error
  }
}