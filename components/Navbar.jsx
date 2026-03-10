"use client";
import Link from "next/link";
import React, { useState } from "react";
import Buttons from "./Buttons";
import { usePathname } from "next/navigation";

import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const NAV_LINKS = [
  { link: "Home", href: "/" },
  { link: "Listed Books", href: "/listed-books" },
  { link: "Pages to Read", href: "/pages-to-read" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4  mx-auto px-4 md:px-10 py-6 justify-between shadow mb-6 fixed  top-0 left-0 right-0 bg-base-100 z-10">
      <Link href={"/"}>
        <h2 className="text-3xl font-bold ">
          Book <span className="text-success">Vibe</span>{" "}
        </h2>
      </Link>
      <ul className="hidden md:flex items-center gap-8 ">
        {NAV_LINKS.map((i) => {
          const isActive = pathname === i.href;
          return (
            <li key={i.link}>
              <Link
                className={`border ${isActive ? "border-success text-success" : "border-transparent text-black"} hover:border-success hover:text-success transition-all duration-150 cursor-pointer px-4 py-2 rounded-sm `}
                href={i.href}
              >
                {i.link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="hidden md:flex gap-4 items-center ">
        <Buttons content={"Sign In"} />
        <Buttons content={"Sign Up"} extraClass={"btn-accent!"} />
      </div>

      {/* mobile navigation */}

      <button
        className="btn btn-success btn-ghost hover:text-white block md:hidden"
        onClick={() => setOpenMenu((p) => !p)}
      >
        {openMenu ? <IoCloseOutline size={25} /> : <CiMenuFries size={25} />}
      </button>

      {openMenu && (
        <div className="block md:hidden fixed top-18 left-0 right-0 p-6 shadow-md backdrop-blur-2xl bg-white/30" >
          <ul className="flex flex-col items-center gap-8 mb-6 ">
            {NAV_LINKS.map((i) => {
              const isActive = pathname === i.href;
              return (
                <li key={i.link}>
                  <Link
                    className={`border ${isActive ? "border-success text-success" : "border-transparent text-black"} hover:border-success hover:text-success transition-all duration-150 cursor-pointer px-4 py-2 rounded-sm  `}
                    href={i.href}
                  >
                    {i.link}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-4 items-center justify-center ">
            <Buttons content={"Sign In"} />
            <Buttons content={"Sign Up"} extraClass={"btn-accent!"} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
