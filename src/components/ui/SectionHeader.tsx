import React from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  index?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className = "",
  index,
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        {index && (
          <span className="font-mono text-xs font-semibold text-zinc-500">
            {index}
          </span>
        )}
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
          // {label}
        </span>
        <div className="h-px bg-black/[0.08] dark:bg-white/[0.07] flex-1 max-w-[120px]" />
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-[#f4f4f5]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
