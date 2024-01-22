import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import loginPage from "@/public/LoginPage.png";
import infiniteNested from "@/public/infiniteNested.png";
import miniblockprojects from "@/public/Miniblockprojects.png";
import TelegramBot from "@/public/TelegramBot.png";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Social Media",
    description:
      "Social media MERN full stack web application using React and mongoDB.",
    tags: [
      "React",
      "Redux",
      "MongoDB",
      "Tailwind",
      "IT security",
      "nodemailer",
      "Express Node JS",
      "Javascript",
      "Postman",
    ],
    imageUrl: loginPage,
    githubLink: "https://github.com/Soros87/project_socialmediaapp",
  },
  {
    title: "Infinite nested comment post",
    description: "Infinite nested comment",
    tags: ["Javascript", "Recursion algo", "Tailwind"],
    imageUrl: infiniteNested,
    githubLink: "https://github.com/Soros87/test_infinite_nested_comments",
  },
  {
    title: "Understanding blockchain",
    description:
      "List of mini projects to learn about how blockchain works in ethereum",
    tags: ["Ether JS", "Web3 JS", "Tailwind", "React JS"],
    imageUrl: miniblockprojects,
    githubLink: "https://github.com/Soros87/project_mywebpage",
  },
  {
    title: "Personal Telegram Bot",
    description:
      "Search message in chat group with Party A and forward message to Party B",
    tags: ["Python", "Telegram API"],
    imageUrl: TelegramBot,
    githubLink: "https://github.com/Soros87/telegram-bot-personal",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
