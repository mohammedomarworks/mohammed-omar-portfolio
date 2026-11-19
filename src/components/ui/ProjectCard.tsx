"use client";

import React from "react";
import { Project } from "@/types/portfolio";
import { ExternalLink, Lock, Terminal } from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
  isFeaturedLayout?: boolean;
}

/**
 * Clean browser frame mockup with an aspect-[16/10] viewport for project screenshots
 */
function ProjectFrame({ project }: { project: Project }) {
  const imageSrc =
    project.id === "helios4"
      ? "/projects/helios4.png"
      : project.id === "amora"
      ? "/projects/amora.png"
      : project.image || "";

  const displayUrl =
    project.id === "helios4"
      ? "helios4.spaceapps.org"
      : project.id === "amora"
      ? "amora.app"
      : project.id === "sidraessentials"
      ? "sidraessentials.vercel.app"
      : `${project.id}.app`;

  return (
    <div className="w-full h-full bg-[#121215] flex flex-col justify-between p-3 sm:p-4 select-none">
      <div className="rounded-lg bg-zinc-950 border border-white/[0.08] overflow-hidden shadow-2xl flex flex-col">
        {/* Browser Header Bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 border-b border-white/[0.06] text-xs font-mono">
          {/* Window control dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>

          {/* URL address pill */}
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-black/60 border border-white/[0.06] text-[11px] text-zinc-400 max-w-[260px] truncate">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate">{displayUrl}</span>
          </div>

          {/* Right indicator */}
          <div className="text-[10px] text-zinc-600 hidden sm:block">PREVIEW</div>
        </div>

        {/* Screenshot viewport with object-cover and no clipping */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={project.imageAlt || `${project.title} interface`}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-102"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-mono text-xs text-zinc-500">
              {project.title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project, isFeaturedLayout = false }: ProjectCardProps) {
  const websiteUrl = project.website || project.liveUrl;
  const githubUrl = project.github || project.githubUrl;
  const hasValidLive = Boolean(
    websiteUrl &&
      websiteUrl !== "#" &&
      websiteUrl.trim() !== "" &&
      !websiteUrl.includes("example.com")
  );
  const hasValidGithub = Boolean(
    githubUrl &&
      githubUrl !== "#" &&
      githubUrl.trim() !== "" &&
      !githubUrl.includes("example.com")
  );

  const techs = project.technologies || project.techStack || [];
  const typeLabel = project.typeLabel || project.category;

  // 1. Featured Flagship Project Card Layout
  if (isFeaturedLayout) {
    return (
      <article className="group rounded-xl bg-zinc-50 dark:bg-[#121215] border border-black/10 dark:border-white/[0.08] shadow-md shadow-black/20 overflow-hidden flex flex-col lg:flex-row transition-all duration-300 hover:border-black/20 dark:hover:border-white/[0.18]">
        {/* Visual Screenshot Frame Section */}
        <div className="w-full lg:w-7/12 overflow-hidden bg-[#09090b] border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/[0.08]">
          <ProjectFrame project={project} />
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 lg:p-9 flex-1 flex flex-col justify-between">
          <div>
            {/* Category / Type Chip */}
            <div className="flex flex-wrap items-center gap-2 mb-3 font-mono text-xs">
              <span className="text-emerald-500 dark:text-emerald-400 font-bold uppercase tracking-wider">
                FEATURED PROJECT
              </span>
              <span className="text-zinc-400 dark:text-zinc-600">//</span>
              <span className="text-zinc-500 uppercase tracking-wider">
                {typeLabel}
              </span>
            </div>

            {/* Project Title */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono tracking-tight text-zinc-950 dark:text-[#f4f4f5] group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>

            {/* Project Narrative */}
            <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
              {project.description}
            </p>

            {/* Engineering Highlight */}
            {project.highlight && (
              <div className="mt-4 p-3 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.06] flex items-start gap-2.5 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{project.highlight}</span>
              </div>
            )}

            {/* Tech Badges */}
            <div className="mt-5">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-2">
                Tech Stack
              </span>
              <ul className="flex flex-wrap gap-1.5" aria-label={`Technologies in ${project.title}`}>
                {techs.map((tech) => (
                  <li
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-black/[0.03] dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/[0.07]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-6 pt-5 border-t border-black/[0.08] dark:border-white/[0.07] flex flex-wrap items-center gap-3">
            {hasValidLive && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-zinc-950 bg-[#f4f4f5] hover:bg-white shadow-sm transition-all focus-visible:ring-1 focus-visible:ring-emerald-400"
              >
                <span>{project.liveButtonLabel || "View Project"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {hasValidGithub && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-black/[0.02] dark:bg-white/[0.03] hover:text-zinc-950 dark:hover:text-[#f4f4f5] hover:bg-black/[0.05] dark:hover:bg-white/[0.06] border border-black/10 dark:border-white/[0.07] transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }

  // 2. Standard Card Layout (StudyFlow, BrewPOS, MarketBridge)
  return (
    <article className="group flex flex-col justify-between rounded-xl bg-zinc-50 dark:bg-[#121215] border border-black/10 dark:border-white/[0.08] shadow-sm overflow-hidden transition-all duration-300 hover:border-black/20 dark:hover:border-white/[0.18]">
      <div>
        {/* Visual Mockup Container */}
        <div className="border-b border-black/10 dark:border-white/[0.07] bg-[#09090b]">
          <ProjectFrame project={project} />
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-zinc-500">
            <span className="text-emerald-500 dark:text-emerald-400 font-semibold uppercase">
              {typeLabel}
            </span>
          </div>

          <h3 className="text-lg font-bold font-mono tracking-tight text-zinc-900 dark:text-[#f4f4f5] group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="mt-4">
            <ul className="flex flex-wrap gap-1.5" aria-label={`Technologies in ${project.title}`}>
              {techs.map((tech) => (
                <li
                  key={tech}
                  className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-0 sm:p-6 sm:pt-0 mt-1">
        <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.07] flex flex-wrap items-center gap-2.5">
          {hasValidLive && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Launch ${project.title}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-950 bg-[#f4f4f5] hover:bg-white transition-all shadow-sm focus-visible:ring-1 focus-visible:ring-emerald-400"
            >
              <span>{project.liveButtonLabel || "Launch App"}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {hasValidGithub && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-black/[0.02] dark:bg-white/[0.03] hover:text-zinc-950 dark:hover:text-[#f4f4f5] hover:bg-black/[0.05] dark:hover:bg-white/[0.06] border border-black/10 dark:border-white/[0.07] transition-all"
            >
              <Github className="w-3 h-3" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
