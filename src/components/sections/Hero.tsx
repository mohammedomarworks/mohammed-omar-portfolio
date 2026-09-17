import React from "react";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Mail, ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/Icons";

export function Hero() {
  const githubLink = portfolioData.socialLinks.find((s) => s.name === "GitHub")?.url || "https://github.com/mohammedomarworks";

  return (
    <section
      id="hero"
      aria-label="Introduction and Overview"
      className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      {/* Subtle Engineering Grid Background (Restrained, no flashy neon) */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-40 dark:opacity-20 [mask-image:radial-gradient(ellipse_at_top,transparent_20%,black_75%)]"
        aria-hidden="true"
      >
        <svg
          className="h-full w-full stroke-slate-300 dark:stroke-slate-800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="engineering-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 48 0 L 0 0 0 48" fill="none" strokeWidth="0.8" />
              <circle cx="0" cy="0" r="1" className="fill-slate-400 dark:fill-slate-700" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#engineering-grid)" />
        </svg>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 max-w-2xl">
            {/* Engineering Status Chip */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20 mb-6 sm:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
              </span>
              <span>Software Engineering Student • Daffodil International University</span>
            </div>

            {/* Large Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.1]">
              Mohammed Omar
            </h1>

            {/* Role / Subtitle */}
            <p className="mt-4 text-xl sm:text-2xl font-semibold text-sky-600 dark:text-sky-400">
              Software Engineering Student
            </p>

            {/* Concise Tagline */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Building practical software, experimenting with creative technology, and learning through real projects.
            </p>

            {/* Two Primary Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-sm transition-all duration-150 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-slate-300/90 dark:border-slate-700 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-sky-500 shadow-sm"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Secondary GitHub Social Link */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                GitHub:
              </span>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/70 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <Github className="w-3.5 h-3.5 text-slate-800 dark:text-slate-200" />
                <span>github.com/mohammedomarworks</span>
                <ExternalLink className="w-3 h-3 text-slate-400 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Minimal Engineering Decorative Element (Desktop) */}
          <div className="hidden lg:block lg:col-span-4" aria-hidden="true">
            <div className="relative rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80 font-mono text-[11px] text-slate-400 dark:text-slate-500">
                <span>IDENTITY_SPEC</span>
                <span>SWE // DIU</span>
              </div>

              <div className="py-5 space-y-4 font-mono text-xs">
                <div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                    Major Discipline
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    B.Sc. Software Engineering
                  </div>
                </div>

                <div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                    Institution
                  </div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">
                    Daffodil International University
                  </div>
                </div>

                <div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                    Core Focus Areas
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    <span className="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Web Development
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Software Architecture
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Animation &amp; 3D
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between font-mono text-[10px] text-slate-400 dark:text-slate-500">
                <span>Learning by building</span>
                <span className="text-emerald-600 dark:text-emerald-400">● Active</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
