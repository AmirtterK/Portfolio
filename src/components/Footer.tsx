"use client";

import { IoMdMail } from "react-icons/io";
import { SiGithub, SiLinkedin} from "react-icons/si";

export function Footer() {
  return (
    <footer className="w-full pt-12">
      <div className="pb-32 flex flex-col items-center justify-center sm:justify-between sm:flex-row-reverse">
        <div className="flex gap-8">
          <a className="text-foreground/85 transition hover:text-foreground" href="https://www.linkedin.com/in/amir-hattab" target="_blank">
            <SiLinkedin size={20} />
          </a>
          <a className="text-foreground/85 transition hover:text-foreground" href="https://github.com/AmirtterK" target="_blank">
            <SiGithub size={20} />
          </a>
          <a className="text-foreground/85 transition hover:text-foreground" href="mailto:amirhattab2018@gmail.com">
            <IoMdMail size={20} />
          </a>
        </div>
        <div className="mt-8 text-center sm:mt-0 sm:text-left">
          <p className="text-xs text-foreground/85 tracking-wider">
            © 2025 
            <a className="text-foreground/85 transition hover:text-foreground" href="https://amirhattab.vercel.app"> amirhattab.vercel.app</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
