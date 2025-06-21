"use client";

import React from 'react';
import { motion } from "framer-motion";

export const Loader = () => {
    return (
        <motion.div
            className="flex justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="relative text-left bg-white/10 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg mt-6 max-w-[85%] rounded-tl-none">
                <div className="relative z-10 text-gray-900 dark:text-white">
                    <span className="inline-block animate-pulse">Thinking</span>
                    <span className="inline-block animate-bounce delay-100">.</span>
                    <span className="inline-block animate-bounce delay-200">.</span>
                    <span className="inline-block animate-bounce delay-300">.</span>
                </div>
            </div>
        </motion.div>
    )
}