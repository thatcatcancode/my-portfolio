import React from "react";
import { CgAirplane, CgWorkAlt } from "react-icons/cg";
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { LuBriefcase, LuGraduationCap, LuPartyPopper } from "react-icons/lu";
import floHockeyImg from "@/public/flohockey.png";
import floWrestlingImg from "@/public/flowrestling.png";
import inspiratoImg from "@/public/inspirato.png";
import flightTrackerImg from "@/public/flight-tracker.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University of Florida 🐊",
    location: "Gainesville, FL",
    description:
      "Graduated with an English Literature degree. I love linguistics, which is how I discovered coding. Programming is really just a different syntax for communicating... except with computers. 🤖",
    icon: React.createElement(LuGraduationCap),
    date: "2003 - 2007",
  },
  {
    title: "My First Job",
    location: "Satellite Beach, FL",
    description:
      "Began my professional journey as an Application Developer on a secret 🤫 government contract.",
    icon: React.createElement(LuPartyPopper),
    date: "2007 - 2012",
  },
  {
    title: "Graduate Degree from FIT",
    location: "Denver, CO",
    description:
      "I earned a graduate degree in engineering, while working full time for my first employer.",
    icon: React.createElement(LuGraduationCap),
    date: "2009 - 2012",
  },
  {
    title: "Consulting in Colorado",
    location: "Denver, CO",
    description:
      "I worked full time for a small software consulting company called Aspenware. We shipped as an agile scrum team to solve problems at various companies. Besides all the cool tech, I learned how to set customer expectations & deliver on time.",
    icon: React.createElement(LuBriefcase),
    date: "2012 - 2015",
  },
  {
    title: "Senior Software Engineer",
    location: "Melbourne, FL",
    description:
      "My first official senior role was at Satcom Direct building full stack aviation software. I LOVED working with geospatial data!",
    icon: React.createElement(FaJs),
    date: "2015 - 2018",
  },
  {
    title: "My Consulting Business",
    location: "Melbourne, FL",
    description:
      "I ran my own consulting business for a few years. My clients ranged from government to hardware startups. I upskilled in React!",
    icon: React.createElement(FaReact),
    date: "2018-2019",
  },
  {
    title: "Dev Lead",
    location: "Orlando, FL",
    description:
      "Now I'm the cross-team lead for web at FloSports. I've technically led all major initiatives here for the past four years. I upskilled in Performance, Observability & Node.js.",
    icon: React.createElement(FaNodeJs),
    date: "2019 - present",
  },
] as const;

export const projectsData = [
  {
    title: "FloHockey.tv",
    description:
      "Developed league & teams features so hockey fans have an ESSENTIAL destination to enjoy their favorite sport.",
    tags: ["Node.js", "SSR", "A/B Test", "Server Driven UI", "Storybook", "TypeScript", "Jest", "Cypress", "JavaScript Framework"],
    imageUrl: floHockeyImg,
  },
  {
    title: "Flight Tracker",
    description:
      "Developed Flight Tracker, the most feature and data rich application for globally tracking and managing private jets.",
    tags: ["Geological Mapping", "MapBox", "Leaflet.js", "Angular", "Typescript", "SaaS"],
    imageUrl: flightTrackerImg,
  },
  {
    title: "Athlete Profiles",
    description:
      "Built full stack pipeline for ingesting & displaying sport data on newly crafted Wrestling & Juijitsu athlete profiles.",
    tags: ["Fullstack", "TypeScript", "SEO", "Node.js", "Firestore", "NoSQL", "Storybook", "SSR", "Redis", "CDN", "A/B Test", "Jest"],
    imageUrl: floWrestlingImg,
  },
  {
    title: "Payment Processing",
    description:
      "I worked on an agile team to deliver a more flexible payment processing platform to a luxury travel company.",
    tags: ["JavaScript", "ASP.NET Web Api", "Agile Scrum", "Git"],
    imageUrl: inspiratoImg,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Angular",
  "Nest.js",
  "Git",
  "Next.js",
  "React",
  "Redux",
  "A/B Testing",
  "Terraform",
  "Docker",
  "CI/CD",
  "Jest",
  "Cypress",
  "NoSQL",
  "Firebase",
  "API Design",
  "PHP",
  "C#",
] as const;
