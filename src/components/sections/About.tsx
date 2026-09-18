import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GraduationCap, Building2, Target, Sparkles, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
      <Container>
        <SectionHeader
          label="About"
          title="About Me"
          description="A Software Engineering student at Daffodil International University learning by building practical systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Overview */}
          <div className="lg:col-span-7 space-y-6">
            <blockquote className="p-6 sm:p-7 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border-l-4 border-indigo-600 text-lg sm:text-xl font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
              &ldquo;I&apos;m Mohammed Omar, a Software Engineering student at Daffodil International University. I learn by building practical projects and experimenting with web development, software engineering, animation, and 3D development.&rdquo;
            </blockquote>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                My focus as an engineering student is grounded in real-world application. Rather than treating programming solely as academic exercises, I build functional applications—from campus utilities to modern web applications—testing architecture decisions and code maintainability firsthand.
              </p>
              <p>
                Alongside core software engineering, I explore web animation and 3D modeling with Blender. I believe strong engineering practices and aesthetic refinement work together to create software that is both robust and enjoyable to use.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-mono text-slate-700 dark:text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Continuous student learning through code &amp; design</span>
              </div>
            </div>
          </div>

          {/* Structured Visual Detail Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 font-mono">
                  Academic &amp; Profile Summary
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Active Student
                </span>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {/* Program */}
                <div className="py-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>Program</span>
                  </div>
                  <p className="text-base font-bold text-slate-900 dark:text-slate-100">
                    Software Engineering
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Department of Software Engineering
                  </p>
                </div>

                {/* Institution */}
                <div className="py-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>Institution</span>
                  </div>
                  <p className="text-base font-bold text-slate-900 dark:text-slate-100">
                    Daffodil International University
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Dhaka, Bangladesh
                  </p>
                </div>

                {/* Focus */}
                <div className="py-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider mb-1">
                    <Target className="w-4 h-4" />
                    <span>Focus</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                    Building practical projects while learning web development, animation, and 3D
                  </p>
                </div>
              </div>

              {/* Verified student integrity note */}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>Factually represented student credentials</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
