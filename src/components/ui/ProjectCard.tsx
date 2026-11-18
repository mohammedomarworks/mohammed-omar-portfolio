"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/types/portfolio";
import { ExternalLink, Lock, Terminal, Activity, Radio, Cpu, Compass } from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
  isFeaturedLayout?: boolean;
}

/**
 * High-precision bespoke visual schematics for projects
 */
function ProjectVisualMockup({ project }: { project: Project }) {
  // 1. MARGIN // HELIOS-4 (NASA Space Apps Challenge 3D Orbital Simulation)
  if (project.id === "helios4") {
    return (
      <div className="relative w-full h-full min-h-[280px] sm:min-h-[340px] bg-[#09090b] overflow-hidden flex flex-col justify-between p-4 sm:p-5 font-mono select-none">
        {/* Orbital grid background */}
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#22d3ee_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Header telemetry bar */}
        <div className="relative z-10 flex items-center justify-between text-[11px] border-b border-cyan-500/20 pb-2.5 text-zinc-400">
          <div className="flex items-center gap-2 text-cyan-400">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span className="font-bold tracking-wider">HELIOS-4 // ORBITAL HUD</span>
          </div>
          <div className="flex items-center gap-3 text-[10px]">
            <span className="text-zinc-500">SIM_ENGINE: GODOT/WEBGL</span>
            <span className="text-emerald-400 font-semibold">[TRAJECTORY_LOCKED]</span>
          </div>
        </div>

        {/* Central 3D orbital simulation wireframe */}
        <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center">
          <div className="relative w-48 h-36 sm:w-64 sm:h-44 flex items-center justify-center">
            {/* Outer elliptical orbit */}
            <div className="absolute inset-0 rounded-[50%] border border-cyan-500/40 transform -rotate-12 animate-[spin_40s_linear_infinite]" />
            {/* Inner transfer orbit */}
            <div className="absolute inset-4 rounded-[50%] border border-emerald-500/40 border-dashed transform rotate-45" />

            {/* Central gravitational body (Sun / Planet) */}
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 shadow-lg shadow-amber-500/50 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            </div>

            {/* Orbital spacecraft node with velocity vector */}
            <div className="absolute top-2 right-8 flex items-center gap-1.5 bg-black/80 px-2 py-0.5 rounded border border-cyan-500/40 text-[9px] text-cyan-300">
              <Compass className="w-2.5 h-2.5 text-cyan-400" />
              <span>CRAFT_01 [V: 29.8 km/s]</span>
            </div>

            {/* Lagrange point */}
            <div className="absolute bottom-4 left-6 text-[9px] text-zinc-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>L1 EQUILIBRIUM</span>
            </div>
          </div>
        </div>

        {/* Bottom Keplerian parameters telemetry */}
        <div className="relative z-10 pt-2 border-t border-white/[0.08] grid grid-cols-3 gap-2 text-[10px]">
          <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.05]">
            <span className="text-zinc-500 block text-[9px]">SEMI-MAJOR (a)</span>
            <span className="text-zinc-200 font-semibold">1.496e8 km</span>
          </div>
          <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.05]">
            <span className="text-zinc-500 block text-[9px]">ECCENTRICITY (e)</span>
            <span className="text-cyan-400 font-semibold">0.0167</span>
          </div>
          <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.05]">
            <span className="text-zinc-500 block text-[9px]">SOLVER</span>
            <span className="text-emerald-400 font-semibold">RK4 N-BODY</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. AMORA (Native macOS Dynamic Island / Notch Floating Assistant)
  if (project.id === "amora") {
    return (
      <div className="relative w-full h-full min-h-[280px] sm:min-h-[340px] bg-[#09090b] overflow-hidden flex flex-col justify-between p-4 sm:p-5 font-mono select-none">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,#a1a1aa_1px,transparent_1px),linear-gradient(to_bottom,#a1a1aa_1px,transparent_1px)] bg-[size:20px_20px]" />

        {/* macOS Top Status Bar Mockup */}
        <div className="relative z-10 flex items-center justify-between text-[11px] border-b border-white/[0.08] pb-2 text-zinc-400">
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-bold text-[#f4f4f5] tracking-wider">AMORA.APP // MACOS APPKIT</span>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-400 font-semibold">DSP COREML: 12.4ms</span>
          </div>
        </div>

        {/* Simulated Floating Notch / Dynamic Island Capsule */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center py-4">
          {/* Dynamic Island Capsule */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] rounded-2xl bg-zinc-950 border border-white/[0.15] p-3 shadow-2xl shadow-black/80 flex items-center justify-between gap-3">
            {/* Interactive 3D Bot Avatar Indicator */}
            <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/[0.1] flex items-center justify-center shrink-0">
              <span className="font-mono text-xs font-bold text-emerald-400">⌘A</span>
            </div>

            {/* Real-time DSP Spectrogram Frequency Waveform */}
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between text-[9px] text-zinc-400">
                <span>ACOUSTIC WAKE-WORD</span>
                <span className="text-emerald-400">LISTENING</span>
              </div>
              <div className="flex items-center gap-0.5 h-4 w-full">
                {[40, 75, 55, 90, 65, 30, 85, 100, 70, 45, 80, 60, 95, 50, 65, 35, 70].map(
                  (val, i) => (
                    <span
                      key={i}
                      className="flex-1 bg-emerald-400/80 rounded-full"
                      style={{ height: `${val}%` }}
                    />
                  )
                )}
              </div>
            </div>

            {/* Hardware Telemetry Dial */}
            <div className="text-right shrink-0 text-[9px]">
              <span className="block text-zinc-500">M-CHIP</span>
              <span className="text-zinc-200 font-semibold">4.2% CPU</span>
            </div>
          </div>

          <span className="mt-3 text-[10px] text-zinc-500 font-mono">
            Floating Window Server Level: NSStatusWindowLevel
          </span>
        </div>

        {/* Bottom Systems Architecture Stats */}
        <div className="relative z-10 pt-2 border-t border-white/[0.08] grid grid-cols-3 gap-2 text-[10px]">
          <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.05]">
            <span className="text-zinc-500 block text-[9px]">AUDIO PIPELINE</span>
            <span className="text-zinc-200 font-semibold">AudioEngine + DSP</span>
          </div>
          <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.05]">
            <span className="text-zinc-500 block text-[9px]">WAKE-WORD</span>
            <span className="text-emerald-400 font-semibold">CoreML Local</span>
          </div>
          <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.05]">
            <span className="text-zinc-500 block text-[9px]">IPC PROTOCOL</span>
            <span className="text-zinc-200 font-semibold">AppleScript / Mach</span>
          </div>
        </div>
      </div>
    );
  }

  // 3. Sidra Essentials (Fixed Padded Browser Frame Mockup)
  if (project.id === "sidraessentials") {
    return (
      <div className="w-full h-full bg-[#121215] flex flex-col justify-between p-3 sm:p-4 select-none">
        {/* Browser Mockup Window Chrome */}
        <div className="rounded-lg bg-zinc-950 border border-white/[0.08] overflow-hidden shadow-2xl flex flex-col">
          {/* Browser Header Bar */}
          <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 border-b border-white/[0.06] text-xs font-mono">
            {/* Window control buttons */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>

            {/* URL address bar */}
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-black/60 border border-white/[0.06] text-[11px] text-zinc-400 max-w-[260px] truncate">
              <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="truncate">sidraessentials.vercel.app</span>
            </div>

            {/* Right spacer */}
            <div className="text-[10px] text-zinc-600 hidden sm:block">HTTPS / 200 OK</div>
          </div>

          {/* Screenshot viewport with padding & no clipping */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.imageAlt || "Sidra Essentials ecommerce storefront"}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-102"
              />
            ) : null}
          </div>
        </div>

        {/* Engineering status strip */}
        <div className="mt-2 px-1 flex items-center justify-between text-[10px] font-mono text-zinc-500">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>PRODUCTION STOREFRONT</span>
          </span>
          <span>NEXT.JS // TYPESCRIPT // TAILWIND</span>
        </div>
      </div>
    );
  }

  // Fallback schematic for other projects (StudyFlow, BrewPOS, MarketBridge)
  return (
    <div className="w-full h-full bg-[#121215] flex flex-col justify-between p-3 select-none">
      <div className="rounded-lg bg-zinc-950 border border-white/[0.08] overflow-hidden shadow-lg flex flex-col">
        {/* Simple browser header */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-zinc-900 border-b border-white/[0.06] text-[10px] font-mono text-zinc-400">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-zinc-700" />
            <span className="w-2 h-2 rounded-full bg-zinc-700" />
            <span className="w-2 h-2 rounded-full bg-zinc-700" />
          </div>
          <span className="truncate max-w-[180px] text-zinc-500">{project.title}</span>
          <span className="text-zinc-600">APP</span>
        </div>

        {/* Screenshot viewport */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt || `${project.title} interface`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
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
        {/* Visual / Simulation / Frame Section */}
        <div className="w-full lg:w-7/12 overflow-hidden bg-[#09090b] border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/[0.08]">
          <ProjectVisualMockup project={project} />
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 lg:p-9 flex-1 flex flex-col justify-between">
          <div>
            {/* Category / Type Chip */}
            <div className="flex flex-wrap items-center gap-2 mb-3 font-mono text-xs">
              <span className="text-emerald-500 dark:text-emerald-400 font-bold uppercase tracking-wider">
                FLAGSHIP PROJECT
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

            {/* Metrics if available */}
            {project.metrics && (
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-[11px]">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-2 rounded bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.05]"
                  >
                    <span className="block text-[9px] uppercase text-zinc-500">
                      {m.label}
                    </span>
                    <span className="text-zinc-800 dark:text-zinc-200 font-semibold truncate block">
                      {m.value}
                    </span>
                  </div>
                ))}
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
                <span>{project.liveButtonLabel || "View Live System"}</span>
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
          <ProjectVisualMockup project={project} />
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
