"use client";

import React from "react";
import ProfilePic from "@/public/ProfilePic.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
            id="Home"
          >
            <Image
              src={ProfilePic}
              alt="profilepic"
              width="150"
              height="150"
              quality="95"
              priority={true}
              className="h-30 w-30 rounded-full border-[0.35rem] border-white object-cover"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-2 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="text-center pt-4 m-6 text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <strong>Hello I'm Tim.</strong> I aspire to be a
        <strong> Full Stack </strong>
        Blockchain developer. <br /> I want to
        <strong> build </strong>blockchain applications that improve the way we
        live and solves problems to maximise our utility and productivity.{" "}
        <br />
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center space-x-4 gap-2"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
        </Link>
        <a
          href="https://www.linkedin.com/in/timothy-kwan-b8758087/"
          target="_blank"
          className="bg-white p-4 text-gray-700 text-[1.3rem] flex items-center gap-2 rounded-full borderBlack outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          {" "}
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Soros87"
          target="_blank"
          className="bg-white p-4 text-gray-700 text-[1.3rem] flex items-center gap-2 rounded-full borderBlack outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          {" "}
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
