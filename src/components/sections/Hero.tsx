"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Terminal, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { NetworkBackground } from "@/components/ui/NetworkBackground";

export function Hero() {
  const githubLink =
    portfolioData.socialLinks.find((s) => s.name === "GitHub")?.url ||
    "https://github.com/mohammedomarworks";
  const linkedinLink =
    portfolioData.socialLinks.find((s) => s.name === "LinkedIn")?.url ||
    "https://www.linkedin.com/in/omar-mohammed-2118b5428/";
  const emailLink =
    portfolioData.socialLinks.find((s) => s.name === "Email")?.url ||
    `mailto:${portfolioData.email}`;

  return (
    <section
      id="hero"
      aria-label="Personal Introduction"
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden border-b border-black/[0.08] dark:border-white/[0.07]"
    >
      {/* 1. Monochromatic engineering grid / particle background */}
      <NetworkBackground />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-center">
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7">
            {/* Location Status Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono bg-black/[0.03] dark:bg-white/[0.03] text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/[0.08] mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[11px] text-zinc-600 dark:text-zinc-400">
                Dhaka, Bangladesh
              </span>
            </div>

            {/* Engineer Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-[#f4f4f5] leading-[1.08]">
              Mohammed Omar
            </h1>

            {/* Sharp Static Engineering Headline */}
            <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-800 dark:text-zinc-200 tracking-tight leading-snug">
              Software Engineering Student building native macOS systems, 3D simulations, and full-stack web apps.
            </h2>

            {/* Concise Mission / Focus Statement */}
            <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              Undergraduate at Daffodil International University working at the intersection of low-level systems programming in Swift &amp; C, real-time spatial graphics in Godot &amp; WebGL, and scalable TypeScript applications.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-zinc-950 bg-[#f4f4f5] hover:bg-white shadow-sm transition-all duration-150 focus-visible:ring-1 focus-visible:ring-emerald-400"
              >
                <span>View Engineering Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-black/[0.02] dark:bg-white/[0.03] hover:bg-black/[0.05] dark:hover:bg-white/[0.07] border border-black/10 dark:border-white/[0.08] transition-all duration-150 focus-visible:ring-1 focus-visible:ring-emerald-400"
              >
                <span>About Me</span>
              </a>

              <a
                href="/resume/Mohammed-Omar-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-[#f4f4f5] border border-transparent hover:border-black/10 dark:hover:border-white/[0.08] transition-all"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Resume.pdf</span>
              </a>
            </div>

            {/* Connect Strip */}
            <div className="mt-8 pt-5 border-t border-black/[0.08] dark:border-white/[0.07]">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold mr-1">
                  Links:
                </span>

                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mohammed Omar on GitHub"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-black/[0.02] dark:bg-white/[0.03] hover:text-zinc-950 dark:hover:text-[#f4f4f5] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] border border-black/10 dark:border-white/[0.07] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mohammed Omar on LinkedIn"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-black/[0.02] dark:bg-white/[0.03] hover:text-zinc-950 dark:hover:text-[#f4f4f5] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] border border-black/10 dark:border-white/[0.07] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={emailLink}
                  aria-label="Email Mohammed Omar"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-black/[0.02] dark:bg-white/[0.03] hover:text-zinc-950 dark:hover:text-[#f4f4f5] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] border border-black/10 dark:border-white/[0.07] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[280px] sm:max-w-[310px] lg:max-w-[330px]">
              {/* Clean Dark Frame */}
              <div className="rounded-xl bg-zinc-100 dark:bg-[#121215] p-2.5 border border-black/10 dark:border-white/[0.08] shadow-xl shadow-black/20">
                {/* Portrait Aspect Ratio */}
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-900 border border-black/10 dark:border-white/[0.05]">
                  <Image
                    src="/images/profile.jpg"
                    alt="Mohammed Omar - Software Engineering Student"
                    width={960}
                    height={1280}
                    priority
                    className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[0.98]"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 310px, 330px"
                  />
                </div>

                {/* Status Readout Footer */}
                <div className="mt-2.5 px-2.5 py-1.5 rounded-md bg-black/[0.03] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.05] flex items-center justify-between font-mono text-[11px]">
                  <span className="text-zinc-600 dark:text-zinc-400">
                    Daffodil International University
                  </span>
                  <span className="text-emerald-500 dark:text-emerald-400 font-semibold text-[10px] uppercase tracking-wider">
                    B.Sc. SWE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
