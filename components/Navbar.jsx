"use client";

import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Buttons from "./Buttons";
import ThemeToggle from "@/components/ThemeToggle";
const NAV_LINKS = [
  { link: "Home", href: "/" },
  { link: "Listed Books", href: "/listed-books" },
  { link: "Pages to Read", href: "/pages-to-read" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  const { user, isSignedIn } = useUser();
  const name = user?.firstName || user?.username || "User";
  const initials = name.slice(0, 2).toUpperCase();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-base-100 border-b border-base-200 px-4 md:px-10 h-16 flex items-center justify-between shadow-sm">
      <Link href="/" className="text-2xl font-bold tracking-tight">
        Boi <span className="text-success">Tori</span>
      </Link>

      <ul className="hidden md:flex items-center gap-1">
        {NAV_LINKS.map((i) => {
          const isActive = pathname === i.href;
          return (
            <li key={i.link}>
              <Link
                href={i.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-success/10 text-success"
                    : "text-base-content/60 hover:text-base-content hover:bg-base-200"
                }`}
              >
                {i.link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="hidden md:flex items-center gap-2">
        <ThemeToggle />
        {!isSignedIn ? (
          <>
            <Link href="/sign-in">
              <Buttons content="Sign In" />
            </Link>
            <Link href="/sign-up">
              <Buttons content="Sign Up" extraClass="btn-accent!" />
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-3 bg-base-200 border border-base-300 rounded-full pl-4 pr-1.5 py-1.5">
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] text-base-content/40 uppercase tracking-widest">
                Welcome back
              </span>
              <span className="text-[13px] font-medium text-base-content">
                {name}
              </span>
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <button
          className="btn btn-ghost btn-sm text-success"
          onClick={() => setOpenMenu((p) => !p)}
        >
          {openMenu ? <IoCloseOutline size={22} /> : <CiMenuFries size={22} />}
        </button>
      </div>

      {openMenu && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-base-100/90 backdrop-blur-xl border-b border-base-200 px-6 py-6 flex flex-col gap-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((i) => {
              const isActive = pathname === i.href;
              return (
                <li key={i.link}>
                  <Link
                    href={i.href}
                    onClick={() => setOpenMenu(false)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? "bg-success/10 text-success"
                        : "text-base-content/60 hover:text-base-content hover:bg-base-200"
                    }`}
                  >
                    {i.link}
                  </Link>
                </li>
              );
            })}
          </ul>

          {!isSignedIn ? (
            <div className="flex gap-3">
              <Link href="/sign-in" onClick={() => setOpenMenu((p) => !p)}>
                <Buttons content="Sign In" />
              </Link>
              <Link href="/sign-up" onClick={() => setOpenMenu((p) => !p)}>
                <Buttons content="Sign Up" extraClass="btn-accent!" />
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3 bg-base-200 rounded-xl px-4 py-3">
              <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-xs font-medium text-success">
                {initials}
              </div>
              <div className="flex flex-col leading-tight flex-1">
                <span className="text-[10px] text-base-content/40 uppercase tracking-widest">
                  Signed in as
                </span>
                <span className="text-sm font-medium">{name}</span>
              </div>
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
