"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { LuFileDown } from "react-icons/lu";
import { SiLinkedin, SiGithub } from "react-icons/si";

export function Introduction() {
  return (
    <section className="flex flex-col items-start md:flex-row-reverse md:items-center md:justify-between gap-8">
        <Image
          className="rounded-lg"
          src={"/personal-picture.jpg"}
          alt={""}
          width={175}
          height={0}
        ></Image>
        <div className="flex flex-col max-w-[320px] sm:max-x-full">
          <h1 className="title text-4xl sm:text-5xl">I'm Amir</h1>
          <p className="mt-2 whitespace-nowrap text-sm font-medium sm:text-base">
            20yo Computer Science student from algeria{" "}
          </p>
          <p className="mt-4 max-w-sm text-balance text-sm sm:text-base">
            Full-Stack Web & Mobile Developer <br /> You ask, I deliver.{" "}
          </p>
          <div className="flex flex-row items-center mt-10 gap-6 ">
            <a href="" target="_blank">
              <Button className="flex gap-3 cursor-pointer">
                <span>Resume</span>
                <LuFileDown />
              </Button>
            </a>
            <div className="flex gap-8">
              <a   className="text-neutral-300 transition hover:text-neutral-100" href="https://www.linkedin.com/in/amir-hattab" target="_blank">
                <SiLinkedin size={20}/>
              </a>
              <a className="text-neutral-300 transition hover:text-neutral-100" href="https://github.com/AmirtterK" target="_blank">
                <SiGithub size={20}/>
              </a>
              <a className="text-neutral-300 transition hover:text-neutral-100" href="mailto:amirhattab2018@gmail.com">
                <IoMdMail size={20} />
              </a>
            </div>
          </div>
        </div>
      </section> 
  );
}
