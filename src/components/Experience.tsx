"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { inter } from "./Fonts";
import work from "@/data/work.json"
import education from "@/data/education.json"
import Timeline from "./Timeline";
export function Experience() {
  return (
    <section>
      <p
        className={`${inter.className} text-xl font-light text-neutral-200 mb-5 tracking-widest text-left `}
      >
        Experience
      </p>
      <Tabs defaultValue="work" className="gap-2">
        <TabsList className="w-full bg-transparent border">
          <TabsTrigger
            value="work"
            className="flex-1 font-medium text-sm cursor-pointer
                       data-[state=active]:!bg-foreground data-[state=active]:!text-background
                       data-[state=inactive]:!bg-background data-[state=inactive]:!text-foreground 
                       transition-all duration-200"
          >
            Work
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="flex-1 font-medium text-sm  cursor-pointer
                       data-[state=active]:!bg-foreground data-[state=active]:!text-background
                       data-[state=inactive]:!bg-background data-[state=inactive]:!text-foreground
                       transition-all duration-200"
          >
            Education
          </TabsTrigger>
        </TabsList>

        <TabsContent value="work">
          <Timeline experience={work}></Timeline>
         </TabsContent>

        <TabsContent value="education">
          <Timeline  experience={education}></Timeline>

        </TabsContent>
      </Tabs>
    </section>
  );
}
