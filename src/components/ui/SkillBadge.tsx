import React from "react";
import { SkillItem } from "@/types/portfolio";

interface SkillBadgeProps {
  skill: SkillItem;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 hover:border-sky-500/50 dark:hover:border-sky-400/50 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors duration-150">
      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
      <span>{skill.name}</span>
      {skill.note && (
        <span className="text-[11px] text-slate-500 dark:text-slate-400">({skill.note})</span>
      )}
    </div>
  );
}
