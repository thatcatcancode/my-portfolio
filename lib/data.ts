import React from "react";
import { CgAirplane, CgWorkAlt } from "react-icons/cg";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Graduate Degree from FIT",
    location: "Denver, CO",
    description:
      "I graduated with a Master of Science after 3 years of part-time studies, while working full time for my first employer.",
    icon: React.createElement(LuGraduationCap),
    date: "2012",
  },
  {
    title: "Senior Software Engineer",
    location: "Melbourne, FL",
    description:
      "My first official senior role was at Satcom Direct building full stack aviation software. I LOVED working with geospatial data! I upskilled my leadership skills, even becoming a Software Manager.",
    icon: React.createElement(CgAirplane),
    date: "2015 - 2018",
  },
  {
    title: "My Consulting Business",
    location: "Melbourne, FL",
    description:
      "I ran my own consulting business for a few years. My clients ranged from government to hardware startups. I upskilled in React & Node.js!",
    icon: React.createElement(FaReact),
    date: "2018-2019",
  },
  {
    title: "Dev Lead",
    location: "Orlando, FL",
    description:
      "Now I'm the cross-team lead for web at FloSports. I've technically led all major initiatives here for the past four years. I upskilled in Performance, Observability & TypeScript.",
    icon: React.createElement(FaNodeJs),
    date: "2019 - present",
  },
] as const;

export const projectsData = [
  {
    title: "FloHockey.tv",
    description:
      "Developed league & teams features so hockey fans have an ESSENTIAL destination to enjoy their favorite sport.",
    tags: ["Node.js", "SSR", "A/B Test", "Server Driven UI", "Storybook", "TypeScript", "Display Ads", "JavaScript Framework"],
    imageUrl: floHockeyImg,
  },
  {
    title: "Consulting in CO",
    description:
      "I used agile scrum to deliver projects on time to hosting.com, Inspirato, Vail Ski Resorts, and other companies in Denver.",
    tags: ["Backbone.js", "ASP.NET Web Api", "PCI Compliance", "Agile Scrum", "Payment Processing"],
    imageUrl: inspiratoImg,
  },
  {
    title: "Athlete Profiles",
    description:
      "Built full stack pipeline for ingesting & displaying sport data on newly crafted Wrestling & Juijitsu athlete profiles.",
    tags: ["Fullstack", "TypeScript", "SEO", "Node.js", "Firestore", "NoSQL", "Storybook", "SSR", "Redis", "CDN", "A/B Test" ],
    imageUrl: floWrestlingImg,
  },
  {
    title: "Flight Tracker",
    description:
      "Developed Flight Tracker, the most feature and data rich application for globally tracking and managing private jets.",
    tags: ["Geological Mapping", "MapBox", "Leaflet.js", "Angular", "Typescript", "SaaS" ],
    imageUrl: flightTrackerImg,
  },
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
