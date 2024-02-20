"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavData from "../data/NavData";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="w-full dark:gray-800 bg-white dark:bg-neutral-900 shadow top-0 z-50 fixed py-4 px-4 md:px-16">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-primary-800 font-bold text-3xl">Ngaji Kuy!</h1>
        <div className="mobile-menu block lg:hidden">
          {!navOpen ? (
            <button
              onClick={() => setNavOpen(true)}
              className="flex items-center px-3 py-2 text-white border rounded bg-primary-800 border-primary-800 hover:border-white"
            >
              <FaBars size={25} />
            </button>
          ) : (
            <button
              onClick={() => setNavOpen(false)}
              className="flex items-center px-3 py-2 text-white border rounded bg-primary-800 border-primary-800 hover:border-white"
            >
              <FaTimes size={25} />
            </button>
          )}
        </div>
        <div className="menu hidden lg:block lg:w-auto">
          <ul className="flex justify-between items-center gap-8 text-lg font-semibold">
            {NavData.map((nav, i) => {
              return (
                <li
                  key={i}
                  className="text-primary-800 px-4 py-2 bg-transparent hover:text-white hover:bg-primary-800 duration-200"
                >
                  <Link href={nav.url}>{nav.name}</Link>
                </li>
              );
            })}
            <li className="text-white px-4 py-2 bg-primary-800 border border-primary-800 hover:text-primary-800 hover:bg-transparent duration-200">
              <Link href={"/"}>Kontak Saya</Link>
            </li>
          </ul>
        </div>
        <ul
          className={`flex lg:hidden absolute top-0 z-50 flex-col py-24 gap-8 items-center min-h-screen w-full bg-primary-800 duration-300 ${
            !navOpen ? "-right-full" : "right-0"
          }`}
        >
          {!navOpen ? (
            <button
              onClick={() => setNavOpen(true)}
              className="absolute top-4 right-4 px-3 py-2 text-white border rounded bg-primary-800 border-primary-800 hover:border-white"
            >
              <FaBars size={25} />
            </button>
          ) : (
            <button
              onClick={() => setNavOpen(false)}
              className="absolute top-4 right-4 px-3 py-2 text-white border rounded bg-primary-800 border-primary-800 hover:border-white"
            >
              <FaTimes size={25} />
            </button>
          )}
          {NavData.map((nav, i) => (
            <li key={i}>
              <Link
                href={nav.url}
                className="block py-2 pl-3 pr-4 text-gray-200 text-xl sm:text-2xl rounded md:p-0 hover:text-white"
                onClick={() => setNavOpen(!navOpen)}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
