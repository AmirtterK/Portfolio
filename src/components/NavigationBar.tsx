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
            <Link className={`${inter.className}  text-foreground/70 transition hover:text-foreground` } href="/">home</Link>
            <Link className={`${inter.className}  text-foreground/70 transition hover:text-foreground` } href="projects">projects</Link>
            <Link className={`${inter.className}  text-foreground/70 transition hover:text-foreground` } href="contact">contact</Link>
          </div>
          <div className="relative flex items-center space-x-2">
            <ThemeButton />
          </div>
        </nav>
      </div>
    </header> 
  );
}
