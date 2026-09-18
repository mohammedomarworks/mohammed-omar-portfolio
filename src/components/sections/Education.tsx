import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 sm:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <Container>
        <SectionHeader
          label="Education"
          title="Education"
          description="Formal academic foundations in Software Engineering at Daffodil International University."
        />

        <div className="max-w-3xl mx-auto">
          {/* Education Timeline Card */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/40 dark:border-indigo-500/30">
            {/* Timeline node icon */}
            <div className="absolute -left-[17px] top-0 p-1.5 rounded-full bg-white dark:bg-zinc-900 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 shadow-sm">
              <GraduationCap className="w-4 h-4" />
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60">
                  <Calendar className="w-3.5 h-3.5" />
                  {education.status}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  {education.location}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {education.degree}
              </h3>

              <p className="mt-1 text-base font-semibold text-indigo-600 dark:text-indigo-400">
                {education.institution}
              </p>

              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                {education.department}
              </p>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Academic Focus</span>
                </div>
                <ul className="space-y-2">
                  {education.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
