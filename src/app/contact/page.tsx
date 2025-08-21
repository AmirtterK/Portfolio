import { ContactForm } from "@/components/ContactForm";
import { inter } from "@/components/Fonts";

export default function Home() {
  return (
    <div className="flex grid gap-8">
      <h1
        className={`${inter.className} font-light text-foreground text-5xl tracking-wide`}
      >
        Contact me
      </h1>

      <ContactForm />
    </div>
  );
}
