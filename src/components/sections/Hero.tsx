import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export function Hero() {
  const githubLink =
    portfolioData.socialLinks.find((s) => s.name === "GitHub")?.url ||
    "https://github.com/mohammedomarworks";
  const linkedinLink =
    portfolioData.socialLinks.find((s) => s.name === "LinkedIn")?.url ||
    "https://linkedin.com/in/yourusername";
  const emailLink =
    portfolioData.socialLinks.find((s) => s.name === "Email")?.url ||
    `mailto:${portfolioData.email}`;

  return (
    <section
      id="hero"
      aria-label="Personal Introduction"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden"
    >
      {/* Subtle decorative geometric dot pattern (restrained engineering aesthetic) */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-40 dark:opacity-20"
        aria-hidden="true"
      >
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
          <svg
            className="absolute top-8 right-6 w-64 h-64 text-indigo-500/15 dark:text-indigo-400/10"
            fill="currentColor"
            viewBox="0 0 100 100"
          >
            <pattern
              id="hero-grid-dots"
              x="0"
              y="0"
              width="16"
              height="16"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#hero-grid-dots)" />
          </svg>
        </div>
      </div>

      <Container>
        {/*
          12-column grid on desktop; single-column on mobile.
          Mobile layout order:
          1. greeting -> name -> role -> description (order-1)
          2. buttons [ About Me ] [ View Projects ] (order-2)
          3. photo (order-3)
          4. socials (order-4)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-12 lg:gap-y-6 items-center">
          {/* 1. Header Text: Greeting, Name, Role, Description */}
          <div className="order-1 lg:col-span-7">
            {/* Small greeting */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60 mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
              <span>Hi, I&apos;m</span>
            </div>

            {/* Large prominent name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Mohammed Omar
            </h1>

            {/* Role / Introduction */}
            <p className="mt-3 sm:mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight">
              Software Engineering Student
            </p>

            {/* Clear, engaging supporting text */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              I build practical software projects while exploring web development, animation, and 3D development.
            </p>
          </div>

          {/* 2. Primary Call-to-Action Buttons */}
          <div className="order-2 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm shadow-indigo-600/20 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 hover:-translate-y-0.5"
              >
                <span>About Me</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-slate-300 dark:border-slate-700 shadow-sm transition-all duration-150 focus-visible:ring-2 focus-visible:ring-indigo-500 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </a>
            </div>
          </div>

          {/* 3. Personal Photo Presentation */}
          <div className="order-3 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-3 flex justify-center lg:justify-end my-2 lg:my-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]">
              {/* Subtle geometric offset backplate */}
              <div
                className="absolute -inset-2 sm:-inset-2.5 rounded-3xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/50 transform rotate-2 sm:rotate-2.5 scale-[0.98] -z-10"
                aria-hidden="true"
              />

              {/* Portrait Frame Container */}
              <div className="relative rounded-3xl bg-white dark:bg-slate-900 p-2 sm:p-2.5 shadow-xl shadow-slate-900/5 dark:shadow-black/30 border border-slate-200/90 dark:border-slate-800 overflow-hidden">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="/images/profile.jpg"
                    alt="Mohammed Omar - Software Engineering Student"
                    width={960}
                    height={1280}
                    priority
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 340px"
                  />
                </div>

                {/* Subtle student status footer badge */}
                <div className="mt-2.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="font-medium text-slate-800 dark:text-slate-200 font-mono text-[11px]">
                      Daffodil International Univ.
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                    SWE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Social Links below buttons */}
          <div className="order-4 lg:col-span-7 pt-3 border-t border-slate-200/80 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mr-1">
                Connect:
              </span>

              {/* GitHub */}
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mohammed Omar on GitHub"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn Placeholder */}
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mohammed Omar on LinkedIn (Placeholder)"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100/70 dark:bg-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200/80 dark:border-slate-700/60 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn <span className="text-[10px] text-slate-400">(placeholder)</span></span>
              </a>

              {/* Email Placeholder */}
              <a
                href={emailLink}
                aria-label="Email Mohammed Omar (Placeholder)"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100/70 dark:bg-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200/80 dark:border-slate-700/60 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email <span className="text-[10px] text-slate-400">(placeholder)</span></span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
