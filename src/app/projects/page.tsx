
import { inter } from "@/components/Fonts";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className={`${inter.className} font-light text-foreground text-5xl tracking-wide`}>My Projects</h1>

    <Projects/>
    </section>
  );
}
