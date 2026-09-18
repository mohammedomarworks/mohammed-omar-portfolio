import React from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${className}`}>
      <div className="flex items-center gap-2.5 mb-3">
        <span className="font-mono text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
          {label}
        </span>
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-12 sm:w-20" />
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
