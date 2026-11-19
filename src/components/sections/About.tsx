"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import { FileDown, ExternalLink, Terminal } from "lucide-react";

export function About() {
  const { editorialBio, quickFacts } = portfolioData;

  return (
    <section
      id="about"
      className="py-20 sm:py-24 border-b border-black/[0.08] dark:border-white/[0.07]"
    >
      <Container>
        <SectionHeader
          index="01"
          label="About"
          title="About Me"
          description="Software Engineering student focused on native macOS apps, 3D simulations, and full-stack web development."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Two-Column Editorial Bio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-black/10 dark:border-white/[0.07] shadow-sm">
            {/* Column 1: Background */}
            <div className="space-y-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-500 dark:text-emerald-400 font-semibold">
                  Background
                </span>
              </div>
              {editorialBio.column1.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Column 2: Engineering Focus */}
            <div className="space-y-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans border-t md:border-t-0 md:border-l border-black/[0.08] dark:border-white/[0.07] pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                  Engineering Focus
                </span>
              </div>
              {editorialBio.column2.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Compact Quick Facts Metadata Strip */}
          <div className="p-4 sm:p-5 rounded-xl bg-zinc-100/80 dark:bg-[#121215] border border-black/10 dark:border-white/[0.07] shadow-sm">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-black/[0.06] dark:border-white/[0.05]">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                QUICK FACTS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 font-mono text-xs">
              <div className="p-3 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.05]">
                <span className="block text-[10px] uppercase text-zinc-500 mb-1">
                  Location
                </span>
                <span className="font-semibold text-zinc-900 dark:text-[#f4f4f5]">
                  {quickFacts.location}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.05]">
                <span className="block text-[10px] uppercase text-zinc-500 mb-1">
                  University
                </span>
                <span className="font-semibold text-zinc-900 dark:text-[#f4f4f5]">
                  {quickFacts.university}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.05]">
                <span className="block text-[10px] uppercase text-zinc-500 mb-1">
                  Focus
                </span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {quickFacts.focus}
                </span>
              </div>
            </div>
          </div>

          {/* Official Resume Action Bar */}
          <div className="p-5 sm:p-6 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-black/10 dark:border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-[#f4f4f5]">
                  Curriculum Vitae &amp; Credentials
                </h3>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-1">
                Official PDF documentation covering coursework, engineering projects, and technical proficiencies.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="/resume/Mohammed-Omar-Resume.pdf"
                download="Mohammed-Omar-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-zinc-950 bg-[#f4f4f5] hover:bg-white transition-all shadow-sm focus-visible:ring-1 focus-visible:ring-emerald-400"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>

              <a
                href="/resume/Mohammed-Omar-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-black/[0.02] dark:bg-white/[0.03] hover:bg-black/[0.05] dark:hover:bg-white/[0.06] border border-black/10 dark:border-white/[0.07] transition-all"
                aria-label="Open resume PDF in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                <span>View in Tab</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
