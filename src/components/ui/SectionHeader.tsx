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
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs uppercase tracking-wider text-sky-500 dark:text-sky-400 font-semibold">
          {label}
        </span>
        <div className="h-px bg-slate-200 dark:bg-slate-800 w-12 sm:w-20" />
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
