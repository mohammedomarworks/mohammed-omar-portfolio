import React from "react";
import { SkillItem } from "@/types/portfolio";

interface SkillBadgeProps {
  skill: SkillItem;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700/60 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:bg-indigo-50/60 dark:hover:bg-indigo-950/40 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-150">
      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
      <span>{skill.name}</span>
      {skill.note && (
        <span className="text-[11px] text-slate-500 dark:text-slate-400">({skill.note})</span>
      )}
    </div>
  );
}
