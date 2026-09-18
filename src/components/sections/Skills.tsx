import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { portfolioData } from "@/data/portfolio";
import { Terminal, Cpu, Database, Layout, Wrench, Palette } from "lucide-react";

export function Skills() {
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "programming languages":
        return <Terminal className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case "core computer science":
        return <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case "database":
        return <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case "web development":
        return <Layout className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case "creative / 3d":
        return <Palette className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Terminal className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
      <Container>
        <SectionHeader
          label="Skills"
          title="Skills &amp; Abilities"
          description="Foundational programming languages, core computer science concepts, web engineering, and creative tools."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skillCategories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 transition-all duration-200 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md shadow-sm"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
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
