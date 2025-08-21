"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    // Render a placeholder to match server output (no mismatch)
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-8 cursor-pointer dark:hover:bg-gray-1000 "
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-yellow-500 transition-all duration-300 scale-100" />
      ) : (
        <Moon className="h-4 w-4 text-blue-400 transition-all duration-300 scale-100" />
      )}{" "}
    </Button>
  );
}
