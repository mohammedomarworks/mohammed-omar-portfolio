"use client";

import React from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        aria-label="Theme toggle loading"
        className="w-8 h-8 flex items-center justify-center rounded-lg border border-black/10 dark:border-white/[0.07] bg-black/[0.02] dark:bg-white/[0.02] text-zinc-500 opacity-50 cursor-default"
      >
        <span className="w-3.5 h-3.5 rounded-full bg-zinc-500/20" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to obsidian theme"}
      title={isDark ? "Switch to light theme" : "Switch to obsidian theme"}
      className="w-8 h-8 flex items-center justify-center rounded-lg border border-black/10 dark:border-white/[0.07] bg-black/[0.02] dark:bg-white/[0.02] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-[#f4f4f5] hover:bg-black/[0.05] dark:hover:bg-white/[0.06] transition-colors duration-150 focus-visible:ring-1 focus-visible:ring-emerald-400"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-zinc-300" />
      ) : (
        <Moon className="w-4 h-4 text-zinc-700" />
      )}
    </button>
  );
}
