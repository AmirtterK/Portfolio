"use client";
import { inter } from "../../public/fonts/Fonts";
import { Badge } from "@/components/ui/badge";
import tech from "@/data/techStack.json" assert { type: "json" };
import { IconsMap } from "./Icons";

export function TechStack() {
  return (
    <section className="">
      <p
        className={`${inter.className} text-xl font-light text-neutral-200 mb-5 tracking-widest text-left `}
      >
        Tech Stack
      </p>
      <div className="flex flex-wrap gap-2 items-center">
        {tech.map((tech, index) => {
          const IconComponent = IconsMap[tech.toLowerCase()];
          return (
            <Badge
              key={tech + index}
              variant={"outline"}
              className=" hover:bg-secondary/70 transition gap-1 py-2 px-2 [&>svg]:w-6 [&>svg]:h-6"
            >
              <IconComponent />
              <p
                className={`${inter.className} ml-2 mr-1 text-sm text-neutral-300`}
              >
                {tech}
              </p>
            </Badge>
          );
        })}
      </div>
    </section>
  );
}
