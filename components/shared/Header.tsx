"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-[#020000]">
      <nav className="mx-auto flex max-w-7xl items-center justify-around  px-5 py-3 md:px-10">
        <div className="flex-1">
          <Link href="/">
            <Image
              src="/assets/images/Logo.png"
              alt="logo-img"
              width={140}
              height={40}
            />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-5 sm:gap-10">
          <ul className="hidden items-center justify-center gap-10 sm:flex">
            {navLinks.map((link) => {
              const activeLink = pathname === link.path;
              return (
                <Link
                  href={link.path}
                  key={link._id}
                  className={`text-white ${activeLink && "text-lg font-bold !text-[#C43EDB]"}`}
                >
                  {link.title}
                </Link>
              );
            })}
          </ul>
          <Button className="h-8 rounded-full !bg-[#5663FA] hover:!bg-[#1120cc]">
            Lanunch App
          </Button>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
