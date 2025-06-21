"use client";

import React from 'react';
import { motion } from "framer-motion";
import { BsExclamationTriangle } from "react-icons/bs";

interface ChatErrorProps {
  error: unknown | null;
}

export const ChatError = ({ error }: ChatErrorProps) => {
  if (!error) return null;

  // Convert error to string
  const errorMessage = error instanceof Error ? error.message : String(error);

  return (
    <motion.div
      className="flex justify-start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="relative text-left bg-red-500/10 dark:bg-red-500/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg mt-6 max-w-[85%] rounded-tl-none border border-red-200 dark:border-red-500/20">
        <div className="relative z-10 flex items-start gap-3">
          <BsExclamationTriangle className="text-red-500 dark:text-red-400 mt-0.5 flex-shrink-0" />
          <div>
            <div className="text-red-700 dark:text-red-300 font-medium mb-1">
              Error: {errorMessage}
            </div>
            <div className="text-red-600 dark:text-red-400 text-sm">
              Please try again or refresh the page
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 