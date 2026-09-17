import React from "react";
import { Project } from "@/types/portfolio";
import { ExternalLink, Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

// Clean bespoke architectural schematics for missing project images
function ProjectVisualPlaceholder({ project }: { project: Project }) {
  switch (project.id) {
    case "marketbridge":
      return (
        <div className="relative w-full h-full bg-slate-900 overflow-hidden flex items-center justify-center p-6 border-b border-slate-200/80 dark:border-slate-800">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:16px_16px]" />
          <div className="relative z-10 flex flex-col items-center gap-2 text-center">
            <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="font-mono text-xs text-slate-300 font-semibold tracking-wider">
              CAMPUS VERIFICATION &amp; ESCROW PROTOCOL
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Verified DIU Student Marketplace
            </div>
          </div>
        </div>
      );
    case "studyflow":
      return (
        <div className="relative w-full h-full bg-slate-900 overflow-hidden flex items-center justify-center p-6 border-b border-slate-200/80 dark:border-slate-800">
          <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:14px_14px]" />
          <div className="relative z-10 w-full max-w-[220px] space-y-2 font-mono text-[10px]">
            <div className="p-2 rounded bg-slate-800/90 border border-slate-700/80 flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Coursework Sprint
              </span>
              <span className="text-slate-500">In Progress</span>
            </div>
            <div className="p-2 rounded bg-slate-800/60 border border-slate-700/60 flex items-center justify-between text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Task Scheduling
              </span>
              <span className="text-slate-500">Planning</span>
            </div>
          </div>
        </div>
      );
    case "brewpos":
      return (
        <div className="relative w-full h-full bg-slate-900 overflow-hidden flex items-center justify-center p-6 border-b border-slate-200/80 dark:border-slate-800">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="relative z-10 flex flex-col items-center gap-1.5 font-mono text-center">
            <div className="px-3 py-1 rounded bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold">
              POS_WORKFLOW // CAFE_ORDER_DISPATCH
            </div>
            <span className="text-[11px] text-slate-400">
              Receipt &bull; Inventory &bull; Order State
            </span>
          </div>
        </div>
      );
    case "birthday-animation":
      return (
        <div className="relative w-full h-full bg-slate-900 overflow-hidden flex items-center justify-center p-6 border-b border-slate-200/80 dark:border-slate-800">
          <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_center,#38bdf8_1px,transparent_1px)] [background-size:18px_18px]" />
          <div className="relative z-10 flex items-center gap-3 font-mono text-center">
            <div className="w-12 h-12 rounded-full border border-dashed border-sky-400/60 flex items-center justify-center text-sky-400 animate-[spin_12s_linear_infinite]">
              <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-400" />
            </div>
            <div className="text-left">
              <div className="text-xs text-slate-200 font-semibold">CANVAS_ANIMATION</div>
              <div className="text-[11px] text-slate-400">Interactive Particle &bull; Motion Physics</div>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="relative w-full h-full bg-slate-900 flex items-center justify-center p-6 border-b border-slate-800">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
            {project.title}
          </span>
        </div>
      );
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasValidLive = project.liveUrl && project.liveUrl !== "#" && !project.liveUrl.includes("example.com");
  const hasValidRepo = project.githubUrl && project.githubUrl !== "#" && !project.githubUrl.includes("yourusername");

  return (
    <article className="group flex flex-col justify-between rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 overflow-hidden transition-all duration-200 hover:border-sky-500/60 dark:hover:border-sky-400/60 hover:shadow-md hover:shadow-sky-500/5 dark:hover:shadow-sky-950/20">
      <div>
        {/* Large Visual Area */}
        <div className="relative w-full h-44 sm:h-48 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <ProjectVisualPlaceholder project={project} />
          )}

          {/* Featured & Category Tags Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            {project.category ? (
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-950/80 text-slate-200 backdrop-blur-sm border border-slate-700/60">
                {project.category}
              </span>
            ) : <span />}

            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-sky-500/90 text-white backdrop-blur-sm shadow-sm">
                <Star className="w-3 h-3 fill-white" />
                <span>Featured</span>
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            {project.title}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>

          {/* Highlight Callout (e.g. Escrow handover for MarketBridge) */}
          {project.highlight && (
            <div className="mt-4 p-3 rounded-lg bg-sky-500/5 dark:bg-sky-950/30 border border-sky-500/20 flex items-start gap-2 text-xs text-sky-800 dark:text-sky-300">
              <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
              <span>{project.highlight}</span>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="mt-5">
            <ul className="flex flex-wrap gap-1.5" aria-label={`Technologies used in ${project.title}`}>
              {project.techStack.map((tech) => (
                <li
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="p-6 pt-0 sm:p-7 sm:pt-0 mt-2">
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} repository on GitHub`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          ) : null}

          {hasValidLive ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo for ${project.title}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500 shadow-sm"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/40 cursor-default"
              title="Live demo link will be added once deployed"
            >
              <span>Demo Coming Soon</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
