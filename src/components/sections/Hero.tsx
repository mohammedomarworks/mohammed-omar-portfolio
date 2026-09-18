import React from "react";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, UserCheck } from "lucide-react";
import { Github } from "@/components/ui/Icons";

export function Hero() {
  const githubLink =
    portfolioData.socialLinks.find((s) => s.name === "GitHub")?.url ||
    "https://github.com/mohammedomarworks";

  return (
    <section
      id="hero"
      aria-label="Personal Introduction"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Subtle decorative background accents (clean, restrained, no huge neon blobs) */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-40 dark:opacity-20"
        aria-hidden="true"
      >
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
          {/* Subtle warm decorative geometric dots */}
          <svg
            className="absolute top-10 right-10 w-72 h-72 text-indigo-500/15 dark:text-indigo-400/10"
            fill="currentColor"
            viewBox="0 0 100 100"
          >
            <pattern
              id="hero-dots"
              x="0"
              y="0"
              width="16"
              height="16"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#hero-dots)" />
          </svg>
        </div>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* 1. Main Hero Text (Mobile: Order 1) */}
          <div className="lg:col-span-7 order-1">
            {/* Greeting */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60 mb-5">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
              <span>Hello, I&apos;m</span>
            </div>

            {/* Large Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.08]">
              Mohammed Omar
            </h1>

            {/* Role / Introduction */}
            <p className="mt-3 sm:mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight">
              Software Engineering Student
            </p>

            {/* Supporting Text */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl">
              I&apos;m a Software Engineering student at Daffodil International University, building practical software projects while exploring web development, animation, and 3D.
            </p>
          </div>

          {/* 2. Personal Photo Presentation (Mobile: Order 2, Desktop: Right Column spanning both rows) */}
          <div className="lg:col-span-5 lg:row-span-2 order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
              {/* Layered decorative background shape for depth */}
              <div
                className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-indigo-100/40 to-amber-500/10 dark:from-indigo-950/50 dark:via-zinc-800/40 dark:to-indigo-900/20 transform rotate-2 sm:rotate-3 scale-[0.98] -z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-1 sm:-inset-1.5 rounded-3xl border border-indigo-200/80 dark:border-indigo-800/40 -z-10"
                aria-hidden="true"
              />

              {/* Portrait Frame Container */}
              <div className="relative rounded-3xl bg-white dark:bg-zinc-900 p-2 sm:p-2.5 shadow-xl shadow-zinc-900/5 dark:shadow-black/40 border border-zinc-200/80 dark:border-zinc-800 overflow-hidden">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src="/images/profile.jpg"
                    alt="Mohammed Omar - Software Engineering Student"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    loading="eager"
                  />
                </div>

                {/* Subtle floating student status badge */}
                <div className="mt-2.5 px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="font-medium text-zinc-800 dark:text-zinc-200 font-mono text-[11px]">
                      DIU // Software Engineering
                    </span>
                  </div>
                  <UserCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Buttons & Social Links (Mobile: Order 3, Desktop: Below Text on Left) */}
          <div className="lg:col-span-7 order-3 space-y-6">
            {/* Buttons: [ About Me ] and [ View Projects ] */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm shadow-indigo-600/20 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 hover:-translate-y-0.5"
              >
                <span>About Me</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 shadow-sm transition-all duration-150 focus-visible:ring-2 focus-visible:ring-indigo-500 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </a>
            </div>

            {/* Social Icons for real available links */}
            <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800 flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
                GitHub:
              </span>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mohammed Omar on GitHub"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/70 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Github className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100" />
                <span>github.com/mohammedomarworks</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
