"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolio";
import { Terminal } from "lucide-react";

export function Learning() {
  return (
    <section
      id="learning"
      className="py-16 sm:py-20 border-b border-black/[0.08] dark:border-white/[0.07] bg-black/[0.015] dark:bg-[#121215]/40"
    >
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-500 dark:text-emerald-400 font-semibold">
                // ACTIVE BENCHWORK &amp; RESEARCH LOG
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-zinc-900 dark:text-[#f4f4f5] tracking-tight">
              Currently Investigating
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Active engineering tracks undergoing rapid prototyping, performance profiling, and systems testing.
            </p>
          </div>

          {/* Clean Horizontal Research Rows */}
          <div className="border-t border-b border-black/[0.08] dark:border-white/[0.08] divide-y divide-black/[0.08] dark:divide-white/[0.08]">
            {portfolioData.currentlyLearning.map((item, idx) => (
              <div
                key={item.title}
                className="py-4 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start"
              >
                {/* Track Index & Title */}
                <div className="md:col-span-5">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500 mb-1">
                    <span>TRACK_0{idx + 1} //</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-500 dark:text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {item.status}
                    </span>
                  </div>
                  <h3 className="font-mono text-sm sm:text-base font-semibold text-zinc-900 dark:text-[#f4f4f5]">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-4">
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="md:col-span-3 flex flex-wrap gap-1.5 justify-start md:justify-end">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
