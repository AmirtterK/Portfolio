"use client";

import { Project } from "@/types/Project";
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projects.json" assert { type: "json" };
import { inter } from "./Fonts";
const projects: Project[] = projectsData;

export default function Projects() {
  return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pb-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
  );
}
