"use client";

import Image from "next/image";
import { Key, useState } from "react";
import { X, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SiGithub, SiAndroid } from "react-icons/si";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Project } from "@/types/Project";
interface Props {
  project: Project;
}
export default function ProjectCard({ project }: Props) {
  const [isModelOpen, OpenModel] = useState(false);
  const {
    title,
    description,
    github,
    image,
    live,
    android,
    githubApp,
    githubSketch,
    tech,
  } = project;

  return (
    <Card className="w-full max-w-ms gap-4 bg-background">
      <CardHeader
        className="relative rounded-lg overflow-hidden h-50 px-5 aspect-[4/3]  flex items-center justify-center "
        onClick={() => OpenModel(true)}
      >
        <Image
          src={image}
          alt={""}
          width={800}
          height={800}
          className="w-full h-full object-cover rounded-lg cursor-pointer  "
        />
      </CardHeader>
      <CardContent className="px-5 grid gap-2">
        <CardTitle className="">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex gap-2 py-4">
          {tech.map((tech: string, id: Key) => (
            <Badge
              key={id}
              variant={"outline"}
              className="hover:bg-secondary/70 transition hover:cursor-default "
            >
              {/* {IconsMap[tech.toLowerCase()]} */}
              {tech}{" "}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 mt-auto px-5">
        {android && (
          <Link href={android} target="_blank">
            <Badge className="text-[10px] px-3 py-1 ">
              <SiAndroid /> Install
            </Badge>
          </Link>
        )}
        {live && (
          <Link href={live} target="_blank">
            <Badge className="text-[10px] px-3 py-1">
              <Globe /> Website
            </Badge>
          </Link>
        )}
        {github && (
          <Link href={github} target="_blank">
            <Badge className="text-[10px] px-3 py-1">
              <SiGithub />
              Github
            </Badge>
          </Link>
        )}
        {githubApp && (
          <Link href={githubApp} target="_blank">
            <Badge className="text-[10px] px-3 py-1">
              <SiGithub /> Github (App)
            </Badge>
          </Link>
        )}
        {githubSketch && (
          <Link href={githubSketch} target="_blank">
            <Badge className="text-[10px] px-3 py-1">
              <SiGithub /> Github (Sketch)
            </Badge>
          </Link>
        )}
      </CardFooter>
      {isModelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8">
          <div
            className="absolute inset-0 bg-opacity-90 backdrop-blur-sm "
            onClick={() => OpenModel(false)}
          />

          <div className="relative z-10 ">
            <button
              onClick={() => OpenModel(false)}
              className="absolute top-2 right-2 z-20 p-2 rounded-full bg-opacity-100 text-white hover:bg-opacity-70 cursor-pointer "
            >
              <X className="w-6 h-6" />
            </button>

            <Image
              src={image}
              alt="Chess project - expanded"
              width={850}
              height={200}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl "
            />
          </div>
        </div>
      )}
    </Card>
  );
}
