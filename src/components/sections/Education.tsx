"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award, Building, Calendar, MapPin } from "lucide-react";

export function Education() {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      className="py-20 sm:py-24 border-b border-black/[0.08] dark:border-white/[0.07]"
    >
      <Container>
        <SectionHeader
          index="03"
          label="Education"
          title="Academic Qualifications"
          description="Formal software engineering education, curriculum focus, and verified academic credentials."
        />

        <div className="max-w-3xl mx-auto">
          {/* Vertical Academic Timeline with subtle hairline */}
          <div className="relative border-l border-black/10 dark:border-white/[0.08] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8 sm:space-y-10">
            {education.map((item, idx) => (
              <div key={item.id || idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 p-1.5 rounded-full bg-zinc-100 dark:bg-[#121215] border border-black/20 dark:border-white/[0.15] text-zinc-700 dark:text-zinc-300 shadow-sm">
                  {idx === 0 ? (
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                  ) : idx === 1 ? (
                    <Award className="w-3.5 h-3.5" />
                  ) : (
                    <Building className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Institution Card */}
                <div className="p-6 sm:p-7 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-black/10 dark:border-white/[0.07] shadow-sm transition-all duration-200 hover:border-black/20 dark:hover:border-white/[0.15]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    {item.status ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {item.status}
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-zinc-500">
                        ACADEMIC RECORD
                      </span>
                    )}

                    {item.location && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-500">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-mono tracking-tight text-zinc-900 dark:text-[#f4f4f5]">
                    {item.institution}
                  </h3>

                  {(item.degree || item.program) && (
                    <p className="mt-1 text-sm sm:text-base font-semibold text-zinc-800 dark:text-zinc-200 font-sans">
                      {item.degree || item.program}
                    </p>
                  )}

                  {item.period && (
                    <p className="mt-1 text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </p>
                  )}

                  {/* Academic Metrics: Year and GPA */}
                  {(item.gpa || item.year) && (
                    <div className="mt-4 pt-3 border-t border-black/[0.06] dark:border-white/[0.05] flex flex-wrap items-center gap-3">
                      {item.year && (
                        <span className="px-2.5 py-0.5 rounded text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06]">
                          Completed: {item.year}
                        </span>
                      )}
                      {item.gpa && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          <Award className="w-3 h-3 text-emerald-400" />
                          <span>GPA: {item.gpa}</span>
                        </span>
                      )}
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
