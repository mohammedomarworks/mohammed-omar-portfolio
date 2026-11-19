import React from "react";
import { SkillItem } from "@/types/portfolio";

interface SkillBadgeProps {
  skill: SkillItem;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-black/10 dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] text-xs font-mono text-zinc-800 dark:text-zinc-200 hover:border-black/20 dark:hover:border-white/[0.2] transition-colors">
      <span className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500" />
      <span className="font-medium">{skill.name}</span>
    </span>
  );
}
