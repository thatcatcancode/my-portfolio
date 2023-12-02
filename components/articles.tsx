"use client";

import { useTheme } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { articleData } from "@/lib/data";
import React from "react";
import Article from "./article";

export default function Articles() {
    const { ref } = useSectionInView('Articles');
    const { theme } = useTheme();
    return (
        <section id="articles" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>My articles</SectionHeading>
            <div>
                {articleData.map((article, i) => (
                    <React.Fragment key={i}>
                        <Article {...article} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}