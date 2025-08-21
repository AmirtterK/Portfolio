"use client";

import { Experience } from "@/types/Experience";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { inter } from "./Fonts";
interface Props {
  experience: Experience;
}
export default function TimelineItem({ experience }: Props) {
  const { name, href, title, logo, start, end, description } = experience;
  return (
    <li className="relative ml-10 py-4 pr-2">
      <Link
        href={href}
        target="_blank"
        className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
      >
        <Avatar className="size-12 border">
          <AvatarImage
            src={logo}
            alt={name}
            className="bg-backgroud obejct-contin"
          />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
      </Link>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {start && (
          <time className={`${inter.className}  text-xs text-gray-400`}>
            <span>
              {start}
              {" - "}
              {end ? end : "Present"}
            </span>
          </time>
        )}
        <h2 className="font-semibold leading-none">{name}</h2>
        {<p  className={`${inter.className}  text-xs text-gray-400`}>{title}</p>}
        {description && (
          <ul className=" list-outside ">
            {description.map((desc, id) => (
              <li key={id} className={`${inter.className}  text-xs text-gray-400`}>
                {desc}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
