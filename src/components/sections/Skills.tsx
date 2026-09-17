import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { portfolioData } from "@/data/portfolio";
import { Layout, Terminal, Wrench, Palette } from "lucide-react";

export function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layout className="w-5 h-5 text-sky-500" />;
      case 1:
        return <Terminal className="w-5 h-5 text-sky-500" />;
      case 2:
        return <Wrench className="w-5 h-5 text-sky-500" />;
      case 3:
        return <Palette className="w-5 h-5 text-sky-500" />;
      default:
        return <Terminal className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30">
      <Container>
        <SectionHeader
          label="02 // Skills"
          title="Technical Competencies"
          description="Technologies, languages, and tools I utilize across coursework and independent software projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {portfolioData.skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-sky-500/10">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                  {category.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
