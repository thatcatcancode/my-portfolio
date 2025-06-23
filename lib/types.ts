import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ChatMessage = {
    role: 'user' | 'agent';
    content: string;
    id: string;
}

export type AgentMessage = {
    role: 'agent',
    content: string,
}

export function isAgentMessage(message: any): message is AgentMessage {
    return message?.role === 'agent' && !!message?.content
}  