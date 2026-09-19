"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { NetworkBackground } from "@/components/ui/NetworkBackground";

const ROTATING_ROLES = [
  "Software Engineering Student",
  "Web Developer",
  "Creative Developer",
  "3D & Animation Learner",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState(ROTATING_ROLES[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Smooth typing effect
  useEffect(() => {
    if (reducedMotion) {
      setDisplayedRole(ROTATING_ROLES[0]);
      return;
    }

    const currentTarget = ROTATING_ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedRole.length < currentTarget.length) {
        timer = setTimeout(() => {
          setDisplayedRole(currentTarget.slice(0, displayedRole.length + 1));
        }, 75);
      } else {
        // Pause when full role is typed
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2500);
      }
    } else {
      if (displayedRole.length > 0) {
        timer = setTimeout(() => {
          setDisplayedRole(currentTarget.slice(0, displayedRole.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex, reducedMotion]);

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
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden"
    >
      {/* 1. Animated network/particle background */}
      <NetworkBackground />

      <Container>
        {/*
          12-column grid on desktop.
          Mobile hierarchy requested:
          1. text (order-1)
          2. buttons (order-2)
          3. socials (order-3)
          4. photo (order-4)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-12 lg:gap-y-6 items-center">
          {/* 1. Header Text */}
          <div className="order-1 lg:col-span-7">
            {/* Greeting badge with entrance animation */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-indigo-50/90 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60 mb-4 sm:mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
              <span>Hi There,</span>
            </div>

            {/* Large prominent name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              I&apos;m Mohammed Omar
            </h1>

            {/* Role with typing / rotation animation */}
            <div className="mt-3 sm:mt-4 flex items-center min-h-[2rem] sm:min-h-[2.5rem]">
              <p
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight"
                aria-live="polite"
              >
                {displayedRole}
              </p>
              {!reducedMotion && (
                <span
                  className="inline-block w-0.5 h-6 sm:h-7 bg-indigo-600 dark:bg-indigo-400 ml-1.5 animate-pulse"
                  aria-hidden="true"
                />
              )}
            </div>

            {/* Short clear description */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              I build practical software projects while exploring web development, animation, and 3D development.
            </p>
          </div>

          {/* 2. Primary Buttons: [ About Me ] and [ View Projects ] */}
          <div className="order-2 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm shadow-indigo-600/20 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 hover:-translate-y-0.5"
              >
                <span>About Me</span>
                <ArrowRight className="w-4 h-4" />
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

          {/* 3. Social Links below buttons (order-3 on mobile) */}
          <div className="order-3 lg:col-span-7 pt-3 border-t border-slate-200/80 dark:border-slate-800">
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

              {/* LinkedIn */}
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mohammed Omar on LinkedIn"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              {/* Email */}
              <a
                href={emailLink}
                aria-label="Email Mohammed Omar"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* 4. Personal Photo Presentation (order-4 on mobile, right column on desktop) */}
          <div className="order-4 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-4 flex justify-center lg:justify-end my-3 lg:my-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]">
              {/* Subtle geometric offset backplate */}
              <div
                className="absolute -inset-2 sm:-inset-2.5 rounded-3xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/50 transform rotate-2 sm:rotate-2.5 scale-[0.98] -z-10 transition-transform duration-300"
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
        </div>
      </Container>
    </section>
  );
}

