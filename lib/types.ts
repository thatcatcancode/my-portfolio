import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ChatMessage = {
    role: 'user' | 'agent';
    content: string;
    id: string;
  }