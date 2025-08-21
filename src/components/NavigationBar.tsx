"use client";
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import { inter } from "./Fonts";

export function NavigationBar() {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-50">
      <div className=" py-6">
        <nav className="flex items-center justify-between">
          <div className="space-x-8 flex itms-center ">
            <Link className={`${inter.className} font-light text-neutral-300 transition hover:text-neutral-100` } href="/">home</Link>
            <Link className={`${inter.className} font-light text-neutral-300 transition hover:text-neutral-100` } href="projects">projects</Link>
            <Link className={`${inter.className} font-light text-neutral-300 transition hover:text-neutral-100` } href="contact">contact</Link>
          </div>
          <div className="relative flex items-center space-x-2">
            <ThemeButton />
          </div>
        </nav>
      </div>
    </header> 
  );
}
