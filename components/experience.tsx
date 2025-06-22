"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { HighlightText } from "./highlight-text";

// Type assertion to fix TypeScript issues
const Timeline = VerticalTimeline as React.ComponentType<any>;
const TimelineElement = VerticalTimelineElement as React.ComponentType<any>;

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <Timeline 
        lineColor=""
        className="[&_.vertical-timeline-element]:!transform-none [&_.vertical-timeline-element]:!transition-none [&_.vertical-timeline-element]:!animate-none"
      >
        {experiencesData.map((item) => (
          <TimelineElement
            key={item.id}
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
              transform: "none !important",
              transition: "none !important",
              animation: "none !important",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
              transform: "none !important",
              transition: "none !important",
              animation: "none !important",
            }}
          >
            <h3 className="font-semibold capitalize">
              <HighlightText>
                {item.title}
              </HighlightText>
            </h3>
            <p className="font-normal !mt-0">
              <HighlightText>
                {item.location}
              </HighlightText>
            </p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              <HighlightText>
                {item.description}
              </HighlightText>
            </p>
          </TimelineElement>
        ))}
      </Timeline>
    </section>
  );
}
