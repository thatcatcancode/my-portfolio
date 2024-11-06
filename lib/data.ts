import React from "react";
import { FaAngular, FaJs, FaMediumM, FaNodeJs, FaPen, FaReact } from "react-icons/fa";
import { LuBriefcase, LuGraduationCap, LuPartyPopper } from "react-icons/lu";
import floHockeyImg from "@/public/flohockey.png";
import floWrestlingImg from "@/public/flowrestling.png";
import inspiratoImg from "@/public/inspirato.png";
import flightTrackerImg from "@/public/flight-tracker.png";
import builtInAtxImg from "@/public/builtinatx.png";
import stashImg from "@/public/stash2.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
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
    name: "Articles",
    hash: "#articles",
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
      "I earned a graduate degree in engineering, while working full time.",
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
      "I ran my own consulting business for a few years. My clients ranged from the Department of Energy to hardware startups.",
    icon: React.createElement(FaAngular),
    date: "2018-2019",
  },
  {
    title: "Dev Lead",
    location: "Orlando, FL",
    description:
      "As the cross-team dev led at FloSports, I led all major initiatives for four years! I upskilled in Performance, Observability & Node.js.",
    icon: React.createElement(FaNodeJs),
    date: "2019 - 2024",
  },
  {
    title: "Staff Software Engineer",
    location: "New York, NY",
    description: "Currently building the future of finance for everyday people!",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  }
] as const;

export const projectsData = [
  {
    title: "Stash",
    description: "A large fintech product, powered by React and a custom component design system.",
    tags: ["React", "Next.JS", "TailwindCSS", "Storybook", "A/B Test", "Jest", "Playwright"],
    imageUrl: stashImg
  },
  {
    title: "FloHockey.tv",
    description:
      "Developed league & teams features so hockey fans have an ESSENTIAL destination for their favorite sport.",
    tags: ["Node.js", "BFF", "SSR", "A/B Test", "Server Driven UI", "Storybook", "TypeScript", "Jest", "Cypress"],
    imageUrl: floHockeyImg,
  },
  {
    title: "Athlete Profiles",
    description:
      "Built full stack pipeline for ingesting & displaying sport data on newly crafted Wrestling & Juijitsu athlete profiles.",
    tags: ["Fullstack", "TypeScript", "SEO", "Node.js", "Firestore", "NoSQL", "Storybook", "SSR", "Redis", "CDN", "A/B Test", "Jest"],
    imageUrl: floWrestlingImg,
  },
  {
    title: "Flight Tracker",
    description:
      "Developed Flight Tracker, the most feature and data rich application for globally tracking and managing private jets.",
    tags: ["Geological Mapping", "MapBox", "Leaflet.js", "Angular", "Typescript", "SaaS"],
    imageUrl: flightTrackerImg,
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
  "Performance",
  "Caching",
  "Discoverability",
  "Monitoring & Alerting",
  "DX",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Redux",
  "Nest.js",
  "Git",
  "Next.js",
  "Vite",
  "A/B Testing",
  "Terraform",
  "Docker",
  "CI/CD",
  "Jest",
  "Playwright",
  "Cypress",
  "Supertest",
  "NoSQL",
  "SQL",
  "Redis",
  "Firebase",
  "API Design",
  "C#",
] as const;

export const articleData = [
  {
    title: 'Ship More Frequently 🚀',
    description: 'by Automatically Generating TypeScript Types',
    url: 'https://medium.com/flosports-engineering/ship-more-frequently-4fa7d543440',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:600/format:webp/0*dQNljcCyHDUaWocM',
    icon: React.createElement(FaMediumM),
    source: 'Medium'
  },
  {
    title: 'Looking to Sharpen Your Full-Stack Skills?',
    description: 'These 3 Local Developers Share Their Advice.',
    url: 'https://www.builtinaustin.com/2021/09/01/austin-full-stack-developer-skills',
    imageUrl: builtInAtxImg,
    icon: React.createElement(FaPen),
    source: 'Built in ATX'
  },
  {
    title: 'Simple Reactive Data Streams',
    description: 'Building Observables with the RxJs Library',
    url: 'https://engineering.flosports.tv/simple-stream-composition-40e0165a7f6a',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:600/format:webp/0*U1cmAhQGCDh2hS2t',
    icon: React.createElement(FaMediumM),
    source: 'Medium'
  },
]
