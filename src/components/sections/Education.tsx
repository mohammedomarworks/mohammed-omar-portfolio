import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award, Building, Calendar, MapPin } from "lucide-react";

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
      <Container>
        <SectionHeader
          label="Education"
          title="Academic Background"
          description="Formal academic qualifications and software engineering foundation."
        />

        <div className="max-w-3xl mx-auto">
          {/* Vertical Academic Timeline */}
          <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900/60 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8 sm:space-y-10">
            {education.map((item, idx) => (
              <div key={item.id || idx} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1 p-2 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 shadow-sm transition-transform duration-200 group-hover:scale-110">
                  {idx === 0 ? (
                    <GraduationCap className="w-4 h-4" />
                  ) : idx === 1 ? (
                    <Award className="w-4 h-4" />
                  ) : (
                    <Building className="w-4 h-4" />
                  )}
                </div>

                {/* Institution Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm transition-all duration-200 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.status}
                    </span>

                    {item.location && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    {item.institution}
                  </h3>

                  {item.program && (
                    <p className="mt-1 text-base font-semibold text-indigo-600 dark:text-indigo-400">
                      Program: {item.program}
                    </p>
                  )}

                  {/* Academic Metrics: GPA and Level Badges */}
                  {(item.gpa || item.year) && (
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
                      {item.level && item.year && (
                        <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60">
                          {item.level}: {item.year}
                        </span>
                      )}
                      {item.gpa && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60">
                          <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          <span>GPA: {item.gpa}</span>
                        </span>
                      )}
                    </div>
                  )}

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <ul className="space-y-1.5">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
