"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-24 border-b border-black/[0.08] dark:border-white/[0.07]"
    >
      <Container>
        <SectionHeader
          index="02"
          label="Skills &amp; Architecture"
          title="Technical Competencies &amp; System Stack"
          description="Engineered breakdown of systems programming, 3D spatial simulation, reactive web engineering, and machine intelligence runtimes."
        />

        {/* Asymmetric Typographic Specification Table / Horizontal Category Rows */}
        <div className="border-b border-black/[0.08] dark:border-white/[0.08]">
          {portfolioData.skillCategories.map((category) => (
            <div
              key={category.id || category.title}
              className="border-t border-black/[0.08] dark:border-white/[0.08] py-6 sm:py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors"
            >
              {/* Left Column: Index & Category Title (4 cols) */}
              <div className="md:col-span-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-zinc-500">
                    {category.categoryIndex} //
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-500 dark:text-emerald-400 font-semibold">
                    DOMAIN
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold font-mono text-zinc-900 dark:text-[#f4f4f5] tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Middle Column: Architecture Description (4 cols) */}
              <div className="md:col-span-4">
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  {category.description}
                </p>
              </div>

              {/* Right Column: Typographic Tech Badges (4 cols) */}
              <div className="md:col-span-4 flex flex-wrap gap-1.5 pt-1 md:pt-0">
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
