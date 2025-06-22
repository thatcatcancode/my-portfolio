"use client";

import React, { createContext, useContext, useState } from 'react';

type WordsContextType = {
    words: string[]
    highlightWords: (input: string) => void
}

const WordsContext = createContext<WordsContextType | null>(null);

const STOP_WORDS = new Set([
    "the", "a", "all", "an", "and", "or", "but", "in", "on", "at", "to", "for", "of", "with", "by",
    "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "do", "does", "did",
    "will", "would", "could", "should", "may", "might", "more", "must", "can", "this", "that", "these", "those",
    "i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them",
    "my", "your", "his", "her", "its", "our", "their", "mine", "yours", "hers", "ours", "theirs"
])

export default function WordsContextProvider({ children }: { children: React.ReactNode }) {
    const [words, setWords] = useState<string[]>([])

    const highlightWords = (input: string) => {
        setWords((prev) => [
            ...prev,
            ...input.split(' ')
                .map(word => word.replace(/[^\w]/g, ''))
                .map(word => word.toLowerCase())
                .filter(word => word.length > 2 && !STOP_WORDS.has(word))]);
    }

    return (
        <WordsContext.Provider value={{ words, highlightWords }}>
            {children}
        </WordsContext.Provider>
    )
}

export function useWordsContext() {
    const context = useContext(WordsContext)

    if (context == null) {
        throw Error('useWords must be used within a WordsContextProvider.')
    }

    return context;
}