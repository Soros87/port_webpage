"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const linksRef = useRef<{ [key: string]: HTMLAnchorElement }>({});

  interface NavBarItemProps {
    title: string;
    classprops?: string;
    hash: string;
  }

  const NavBarItem: React.FC<NavBarItemProps> = ({
    title,
    classprops,
    hash,
  }) => (
    <Link
      href={hash}
      ref={(el) => {
        if (el) linksRef.current[hash] = el;
      }}
      onClick={() => setToggleMenu(false)}
      className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"
    >
      <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
    </Link>
  );

  return (
    <>
      <header className="z-[999] relative flex justify-between items-center">
        <motion.div
          className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        >
          {/* Menu Bar */}
          <div className="fixed top-5 right-3">
            {toggleMenu ? null : (
              <IoMdMenu
                className="text-gray-500 cursor-pointer md:hidden h-9 w-9"
                onClick={() => {
                  setToggleMenu(true);
                }}
              />
            )}
            {toggleMenu && (
              <ul
                className="z-[1000] fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md 
             text-black animate-slide-in"
              >
                <li className="text-xl w-full my-2">
                  <AiOutlineClose
                    onClick={() => setToggleMenu(false)}
                    className="text-gray-500"
                  />
                </li>
                {links.map((link, index) => (
                  <NavBarItem
                    key={link.name + index}
                    title={link.name}
                    classprops="my-2 text-lg"
                    hash={link.hash}
                  />
                ))}
              </ul>
            )}
          </div>
        </motion.div>
        <nav className="md:flex hidden list-none fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  href={link.hash}
                  className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
