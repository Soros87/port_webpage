"use client";

import React from "react";
import ProfilePic from "@/public/ProfilePic.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
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
      <motion.p
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
      </motion.p>
      <motion.div
        className="flex items-center justify-center space-x-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Contact me here <BsArrowRight />
        </Link>
        <a
          href="https://www.linkedin.com/in/timothy-kwan-b8758087/"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full"
        >
          {" "}
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Soros87"
          target="_blank"
          className="bg-white p-4 text-gray-700 text-[1.3rem] flex items-center gap-2 rounded-full"
        >
          {" "}
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
