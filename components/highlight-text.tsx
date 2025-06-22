"use client";

import { useWordsContext } from '@/context/words-context';
import React from 'react';

export const HighlightText = ({ children }: { children: string }) => {
    const { words } = useWordsContext();
    if (!words) return <>{children}</>;

    // Split text and wrap keywords
    const regex = new RegExp(`\\b(${words.join("|")})\\b`, "gi");
    const parts = children.split(regex);
    const wordSet = new Set(words)
    return (
        <>
            {parts.map((part, i) => part && wordSet.has(part.toLowerCase()) ?
                (
                    <mark key={i} className="bg-yellow-200 dark:bg-yellow-600 rounded px-1">{part}</mark>
                ) : (part))
            }
        </>
    )
}