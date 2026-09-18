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
        <div className="relative w-full h-full bg-slate-900 overflow-hidden flex items-center justify-center p-6 border-b border-zinc-200/80 dark:border-zinc-800">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:16px_16px]" />
          <div className="relative z-10 flex flex-col items-center gap-2 text-center">
            <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="font-mono text-xs text-slate-200 font-semibold tracking-wider">
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
        <div className="relative w-full h-full bg-slate-900 overflow-hidden flex items-center justify-center p-6 border-b border-zinc-200/80 dark:border-zinc-800">
          <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(#6366f1_1px,transparent_1px)] [background-size:14px_14px]" />
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
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Task Scheduling
              </span>
              <span className="text-slate-500">Planning</span>
            </div>
          </div>
        </div>
      );
    case "brewpos":
      return (
        <div className="relative w-full h-full bg-slate-900 overflow-hidden flex items-center justify-center p-6 border-b border-zinc-200/80 dark:border-zinc-800">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="relative z-10 flex flex-col items-center gap-1.5 font-mono text-center">
            <div className="px-3 py-1 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
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
        <div className="relative w-full h-full bg-slate-900 overflow-hidden flex items-center justify-center p-6 border-b border-zinc-200/80 dark:border-zinc-800">
          <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_center,#6366f1_1px,transparent_1px)] [background-size:18px_18px]" />
          <div className="relative z-10 flex items-center gap-3 font-mono text-center">
            <div className="w-12 h-12 rounded-full border border-dashed border-indigo-400/60 flex items-center justify-center text-indigo-400 animate-[spin_12s_linear_infinite]">
              <div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-400" />
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
        <div className="relative w-full h-full bg-slate-900 flex items-center justify-center p-6 border-b border-zinc-200/80 dark:border-zinc-800">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
            {project.title}
          </span>
        </div>
      );
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasValidLive = project.liveUrl && project.liveUrl !== "#" && !project.liveUrl.includes("example.com");

  return (
    <article className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 overflow-hidden transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl hover:shadow-indigo-950/5 dark:hover:shadow-black/40">
      <div>
        {/* Large Visual Area */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <ProjectVisualPlaceholder project={project} />
          )}

          {/* Featured & Category Tags Overlay */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
            {project.category ? (
              <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-slate-950/80 text-slate-200 backdrop-blur-sm border border-slate-700/60 shadow-sm">
                {project.category}
              </span>
            ) : <span />}

            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-indigo-600 text-white backdrop-blur-sm shadow-sm">
                <Star className="w-3 h-3 fill-white" />
                <span>Featured</span>
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          {/* Highlight Callout (e.g. Escrow handover for MarketBridge) */}
          {project.highlight && (
            <div className="mt-4 p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-800/60 flex items-start gap-2 text-xs text-indigo-900 dark:text-indigo-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <span>{project.highlight}</span>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="mt-5">
            <ul className="flex flex-wrap gap-1.5" aria-label={`Technologies used in ${project.title}`}>
              {project.techStack.map((tech) => (
                <li
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
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
        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} repository on GitHub`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
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
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 shadow-sm shadow-indigo-600/20"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-zinc-400 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/40 cursor-default"
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
