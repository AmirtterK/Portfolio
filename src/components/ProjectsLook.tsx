"use client";
import { inter } from "./Fonts";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import projectsData  from "@/data/projects.json" assert { type: "json" };
import { Project } from "@/types/Project";
const projects: Project[] = projectsData ;


export function ProjectsLook() {
  return (
    <section className="">
      <div className="flex items-center flex-row justify-between mb-5">
        <p
          className={`${inter.className} text-xl font-light text-neutral-200 tracking-widest text-left `}
        >
          Projects
        </p>
        <Link
          href={"projects"}
          className={`${inter.className} text-l font-light text-neutral-500 items-center hover:text-neutral-300 transition`}
        >
          {" "}
          View More
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pb-16">
        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
