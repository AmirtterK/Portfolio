import { Introduction } from "@/components/Introduction";
import { ProjectsLook } from "@/components/ProjectsLook";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Introduction/>
      <Experience/>
      <TechStack/>
      <ProjectsLook/>
    </div>
  );
}
