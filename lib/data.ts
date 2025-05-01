import React from "react";
import { FaDatabase, FaMap, FaMediumM, FaNodeJs, FaPen, FaPython, FaReact, FaServer } from "react-icons/fa";
import { LuBriefcase, LuGraduationCap } from "react-icons/lu";
import eventHubApi from "@/public/event-hub-api.png";
import floWrestlingImg from "@/public/flowrestling.png";
import inspiratoImg from "@/public/inspirato.png";
import flightTrackerImg from "@/public/flight-tracker.png";
import builtInAtxImg from "@/public/builtinatx.png";
import stashAiImg from "@/public/stash-ai-money-coach.png";
import sciGuardImg from "@/public/sci-guard-screenshot.png";

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
    id: 9,
    title: "Enrolled in Purdue University's Applied Generative AI Program",
    location: "",
    description: "Gaining foundational knowledge of Transformer Architecture, LLMs, RAG, and the use cases for each in order innovate. Creating projects with Hugging Face transformers, Open AI GPTs, Ollama, and cloud-hosted services + vector databases.",
    icon: React.createElement(FaPython),
    date: "March 2025 - July 2025",
  },
  {
    id: 8,
    title: "Senior Software Engineer IV at Stash",
    location: "New York, NY",
    description: "Currently building the future of finance for everyday people with the help of our robust AI system!",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
  {
    id: 7,
    title: "Dev Lead",
    location: "Orlando, FL",
    description:
      "As the cross-team dev lead at FloSports, I led all major initiatives for four years! I upskilled in Performance & Observability.",
    icon: React.createElement(FaNodeJs),
    date: "2019 - 2024",
  },
  {
    id: 6,
    title: "My Consulting Business",
    location: "Melbourne, FL",
    description:
      "I ran my own consulting business for a few years. My clients ranged from the Department of Energy to hardware startups.",
    icon: React.createElement(FaServer),
    date: "2018-2019",
  },
  {
    id: 5,
    title: "Senior Software Engineer",
    location: "Melbourne, FL",
    description:
      "My first official senior role was at Satcom Direct building full stack aviation software. I LOVED working with geospatial data and building map features!",
    icon: React.createElement(FaMap),
    date: "2015 - 2018",
  },
  {
    id: 4,
    title: "Consulting in Colorado",
    location: "Denver, CO",
    description:
      "I worked full time for a small software consulting company called Aspenware. We shipped as an agile scrum team to solve problems at various companies. Besides all the cool tech, I learned how to set customer expectations & deliver on time.",
    icon: React.createElement(LuBriefcase),
    date: "2012 - 2015",
  },
  {
    id: 3,
    title: "Graduate Degree from FIT",
    location: "Denver, CO",
    description:
      "I earned a graduate degree from the College of Engineering while working full-time.",
    icon: React.createElement(LuGraduationCap),
    date: "2009 - 2012",
  },
  {
    id: 2,
    title: "My First Job",
    location: "Satellite Beach, FL",
    description:
      "Began my professional journey as an Application Developer on a secret 🤫 government contract. I worked mainly with relational databases and server-driven web applications.",
    icon: React.createElement(FaDatabase),
    date: "2007 - 2012",
  },

  {
    id: 1,
    title: "University of Florida 🐊",
    location: "Gainesville, FL",
    description:
      "Go Gators! As a student, I rebuilt my college's science library and worked at the Digital Library Center using technology to bring old stories to life.",
    icon: React.createElement(LuGraduationCap),
    date: "2003 - 2007",
  },
];

export const projectsData = [
  {
    title: "Sci-Guard: Saving science one word at a time with GenAI ✨",
    description: "I developed this free AI tool that scans grant proposals for banned words and rewrites sentences using OpenAI's GPT-4.1-mini.",
    tags: ["Python", "FastAPI", "ntlk", "spaCy", "GPT-4.1-mini", "OpenAI", "Hugging Face", "Docker", "AWS", "React"],
    imageUrl: sciGuardImg,
    url: 'https://github.com/thatcatcancode/sci-guard'
  },
  {
    title: "Stash Money Coach",
    description: "Brought AI-powered Money Coach to life on web. Fine-tuned GPT agents provide personalized financial advice.",
    tags: ["OpenAI", "Python", "FastAPI", "HTTP Streaming", "React", "Vite", "TypeScript", "A/B Test",],
    imageUrl: stashAiImg
  },
  {
    title: "Versatile Event Hubs",
    description:
      "Developed a unified BFF API and UI to support event hubs for 25+ sports.",
    tags: ["Node.js", "Nest.js", "BFF", "SSR", "A/B Test", "Server Driven UI", "Storybook", "TypeScript", "Jest", "Cypress"],
    imageUrl: eventHubApi,
  },
  {
    title: "Athlete Profiles",
    description:
      "Built full stack pipeline for ingesting & displaying sport data on expertly crafted athlete profiles.",
    tags: ["TypeScript", "SEO", "Node.js", "Nest.js", "Firestore", "NoSQL", "Storybook", "SSR", "Redis", "CDN", "A/B Test", "Jest"],
    imageUrl: floWrestlingImg,
  },
  {
    title: "Flight Tracker",
    description:
      "Developed Flight Tracker, the most feature and data rich application for globally tracking and managing private jets.",
    tags: ["Geological Mapping", "MapBox", "Geometry", "Typescript", "SaaS", "Data Feeds", "Map Projection"],
    imageUrl: flightTrackerImg,
  },
  {
    title: "Payment Processing",
    description:
      "I worked on an agile team to deliver a more flexible payment processing platform to a luxury travel company.",
    tags: ["JavaScript", "ASP.NET Web Api", "SQL", "Agile Scrum", "Git"],
    imageUrl: inspiratoImg,
  }
] as const;

export const skillsData = [
  "TypeScript",
  "Nest.js",
  "Git",
  "Python",
  "FastAPI",
  "OpenAI",
  "Hugging Face",
  "GenAI",
  "HTML",
  "CSS",
  "JavaScript",
  "Next.js",
  "React",
  "Vite",
  "Redux",
  "Node.js",
  "A/B Testing",
  "Segment",
  "Mixpanel",
  "Analytics",
  "Terraform",
  "Docker",
  "CI/CD",
  "Jest",
  "Playwright",
  "Cypress",
  "Supertest",
  "NoSQL",
  "SQL",
  "Postgres",
  "Redis",
  "Firebase",
  "API Design",
  "Http Streaming",
  "C#",
  "Performance",
  "Caching",
  "Discoverability",
  "Monitoring & Alerting",
  "DX",
] as const;

export const articleData = [
  {
    title: 'Using AI to Protect Scientific Research',
    description: 'Sci-Guard: Saving science one word at a time with GenAI',
    url: 'https://medium.com/@leeadams1414/using-ai-to-protect-scientific-research-4764bf91b9c1',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*KnUDCdc9akrGfxZdAUHwSg.png',
    icon: React.createElement(FaMediumM),
    source: 'Medium'
  },
  {
    title: 'Improve the Product and DX with Types',
    description: 'Use ts-morph to Auto Generate Types',
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
