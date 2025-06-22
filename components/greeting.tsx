"use client";

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import profileImg from "@/public/profile.jpeg";
import { HighlightText } from './highlight-text';

export const Greeting = () => {
    return (
        <>
            <div className="flex items-start justify-center gap-4 pr-2">
                <div className="relative flex-shrink-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src={profileImg}
                            alt="Lee portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-16 w-16 rounded-full object-cover border-[1px] border-white shadow-xl"
                        />
                    </motion.div>
                </div>

                <motion.div
                    className="relative text-left bg-white/10 dark:bg-white/10 backdrop-blur-sm rounded-tl-none rounded-2xl p-4 shadow-lg mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.h1
                        className="text-xl sm:text-2xl font-medium !leading-[1.5] text-gray-900 dark:text-white"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="font-bold">Hello! I'm Leila, </span> a {" "}
                        <span className="font-bold"><HighlightText>full-stack engineer</HighlightText></span> with a focus on {" "}
                        <span className="font-bold">AI-powered solutions</span>. I enjoy building {" "}
                        <span className="italic">intelligent</span>, <span className="italic">data-driven</span> {" "}
                        systems that <span className="underline">personalize</span> user experience and drive {" "}
                        <span className="underline">business growth</span>.
                    </motion.h1>
                </motion.div>
            </div>
        </>
    )
}