import React from "react";
import loginPage from "@/public/LoginPage.png";
import infiniteNested from "@/public/infiniteNested.png";
import miniblockprojects from "@/public/Miniblockprojects.png";
import TelegramBot from "@/public/TelegramBot.png";
import LoginDemo from "@/public/Login-demo.png";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { TbMoodLookRight } from "react-icons/tb";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Experience",
    hash: "/#experience",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated in Accountancy",
    location: "Singapore",
    description:
      "After graduating from college, I started my career in audit profession.",
    icon: React.createElement(LuGraduationCap),
    date: "2012-2023",
  },
  {
    title: "Early-Mid Career",
    location: "Singapore",
    description:
      "I worked in multiple accounting roles mainly Controlling, Finance Planning & Analysis, Finance Business Partner and Supply Chain Finance.",
    icon: React.createElement(CgWorkAlt),
    date: "2012 - 2023",
  },
  {
    title: "Graduated part time ICT degree",
    location: "Singapore",
    description:
      "During my career, I studied a part time ICT degree at the Singapore University of Social Sciences to pursue my interest in tech.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2022",
  },
  {
    title: "Mid Career Switch",
    location: "Singapore",
    description:
      "I am currently in the midst of doing a mid career switch to a tech-oriented role preferably in blockchain or robotic process automation",
    icon: React.createElement(TbMoodLookRight),
    date: "late 2023 - present",
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
  {
    title: "Login-demo",
    description: "Demo for custom login, Next-Auth Google and Facebook login ",
    tags: ["MongoDB", "Next-Auth", "Typescript"],
    imageUrl: LoginDemo,
    githubLink: "https://github.com/Soros87/login-nextjs-typescript",
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
  "POWER BI",
  "UiPath",
] as const;
