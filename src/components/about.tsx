"use client";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I have been in the{" "}
        <span className="font-medium">finance and accounting</span>📖 profession
        for close to 11 years. During this time, I decided to pursue my passion
        for programming. I took up a part time{" "}
        <span className="font-medium">
          Information Communication and Technology
        </span>{" "}
        degree and learned{" "}
        <span className="font-medium">full-stack web development</span> which I
        thoroughly enjoy 🫶. I am always looking to learn new technologies such
        as{" "}
        <strong>
          Blockchain, Robotics Process Automation and Data Analytics
        </strong>
        . After I finished my studies, I finally decided to quit my job to
        pursue my long term career goals. I am currently looking for an{" "}
        <span className="font-medium">internship</span> as a
        software/web/blockchain developer.😄
      </p>
      <p>
        <span className="italic">In my free time</span>, I practice calisthenics
        and I'm currently training to do a muscle up 💪.
      </p>
    </motion.section>
  );
}
