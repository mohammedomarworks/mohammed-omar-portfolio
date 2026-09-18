import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { User, GraduationCap, Building2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
      <Container>
        <SectionHeader
          label="About"
          title="About Me"
          description="A direct overview of my academic foundation and learning approach."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Direct, Concise Text */}
          <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            <p className="font-medium text-slate-900 dark:text-slate-100 text-lg sm:text-xl">
              I&apos;m Mohammed Omar, a Software Engineering student at Daffodil International University.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              I learn by building real projects and exploring web development, software engineering, animation, and 3D.
            </p>
          </div>

          {/* Small Factual Information Area */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 shadow-sm">
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {/* Name */}
                <div className="pb-3.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider mb-1">
                    <User className="w-3.5 h-3.5" />
                    <span>Name</span>
                  </div>
                  <p className="text-base font-bold text-slate-900 dark:text-slate-100">
                    Mohammed Omar
                  </p>
                </div>

                {/* Field */}
                <div className="py-3.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider mb-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Field</span>
                  </div>
                  <p className="text-base font-bold text-slate-900 dark:text-slate-100">
                    Software Engineering
                  </p>
                </div>

                {/* University */}
                <div className="pt-3.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>University</span>
                  </div>
                  <p className="text-base font-bold text-slate-900 dark:text-slate-100">
                    Daffodil International University
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

