import localFont from "next/font/local";
import path from "path";

export const inter = localFont({
  src: [{path:"../../public/fonts/interVariable.woff2"}],
  variable: "--font-myfont",   
});

export const avant = localFont({
  src:[{path:"../../public/fonts/avantgarde.woff2"}],
  variable: "--font-myfont",   
});