"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="mb-10 px-4 text-center text-gray-500"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ delay: 0.175 }}
    >
      <small className="mb-2 block text-xs">
        &copy; 2023 TKCodeChain. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Credits to
        ByteGrad{" "}
        <a
          href="https://www.youtube.com/watch?v=sUKptmUVIBM&t=8099s"
          target="_blank"
          className="underline"
        >
          https://www.youtube.com/watch?v=sUKptmUVIBM&t=8099s
        </a>{" "}
        built with React & Next.js (App Router & Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, React Email & Resend, Netlify hosting.
      </p>
    </motion.footer>
  );
}
