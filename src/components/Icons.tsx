import { IconType } from "react-icons";

import {
  SiFlutter,
  SiDart,
  SiThreedotjs,
  SiPhp,
  SiSqlite,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiArduino,
  SiExpress,
  SiShadcnui,
  SiC,
  SiVite,
  SiGit,
  SiNextdotjs,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

export const IconsMap: Record<string,  IconType> = {
  javascript: SiJavascript ,
  typescript: SiTypescript ,
  flutter: SiFlutter ,
  dart: SiDart ,
  php: SiPhp ,
  sqlite: SiSqlite ,
  mysql: SiMysql ,
  tailwindcss: SiTailwindcss ,
  threejs: SiThreedotjs ,
  nextjs: SiNextdotjs ,
  nodejs: SiNodedotjs ,
  firebase: IoLogoFirebase ,
  arduino: SiArduino ,
  express: SiExpress ,
  shadcn: SiShadcnui ,
  vite: SiVite ,
  c: SiC ,
  git: SiGit ,
};
