"use client";

import React, { useState } from "react";
import { VscSend } from "react-icons/vsc";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { inter } from "../../public/fonts/Fonts";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    const res = await fetch("/api/resend/send", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setLoading(false);
    setSuccess(res.ok);
    const now = new Date();
    const time = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(now);

    toast("Message sent successfully!", {
      description: time,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  }
  return (
    <div className="flex grid gap-8">
      <h1 className={`${inter.className} font-light text-neutral-200 text-5xl tracking-wide`}>Contact me</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-2 sm:grid-cols-2"
      >
        <div className="h-16">
          <Input
            className=""
            type="text"
            placeholder="Name"
            name="name"
            required
          />
        </div>
        <div className="h-16">
          <Input
            className=""
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <div className="h-32 sm:col-span-2 ">
          <Textarea
            className="  resize-none h-25"
            placeholder="Leave feedback about the site, career opportunities or just to say hello etc."
            name="message"
          
            required
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="cursor-pointer sm:col-span-2"
        >
          Send <VscSend />
        </Button>
      </form>
    </div>
  );
}
