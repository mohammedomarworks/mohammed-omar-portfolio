import React from "react";
import { Project } from "@/types/portfolio";
import { ExternalLink, Star, ShieldCheck, CheckCircle2, ShoppingBag } from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
  isFeaturedLayout?: boolean;
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
    case "sidraessentials":
      return (
        <div className="relative w-full h-full bg-slate-900 overflow-hidden flex items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-zinc-200/80 dark:border-zinc-800">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="relative z-10 flex flex-col items-center gap-3 text-center max-w-[260px]">
            <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shadow-sm">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <div className="font-mono text-xs text-slate-200 font-bold tracking-wider">
              E-COMMERCE // STOREFRONT
            </div>
            <div className="text-[11px] font-mono text-slate-400 leading-relaxed">
              Product Catalog &bull; Responsive Cart &bull; Checkout Workflow
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

export function ProjectCard({ project, isFeaturedLayout = false }: ProjectCardProps) {
  const hasValidLive = Boolean(project.liveUrl && project.liveUrl !== "#" && project.liveUrl.trim() !== "" && !project.liveUrl.includes("example.com"));
  const hasValidGithub = Boolean(project.githubUrl && project.githubUrl !== "#" && project.githubUrl.trim() !== "" && !project.githubUrl.includes("example.com"));

  // 1. Expansive Featured Card Layout for Sidra Essentials
  if (isFeaturedLayout) {
    return (
      <article className="group rounded-3xl bg-white dark:bg-slate-900 border-2 border-indigo-200/90 dark:border-indigo-900/60 shadow-lg shadow-indigo-500/5 dark:shadow-black/40 overflow-hidden flex flex-col lg:flex-row transition-all duration-300 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-xl hover:-translate-y-0.5">
        {/* Visual / Schematic Section */}
        <div className="relative w-full lg:w-5/12 h-64 sm:h-72 lg:h-auto min-h-[260px] overflow-hidden bg-slate-900">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <ProjectVisualPlaceholder project={project} />
          )}

          {/* Featured Badge Overlay */}
          <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-600 text-white shadow-sm">
              <Star className="w-3.5 h-3.5 fill-white" />
              <span>Featured Project</span>
            </span>
            {project.category && (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-950/80 text-slate-200 backdrop-blur-sm border border-slate-700/60 shadow-sm">
                {project.category}
              </span>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
                Project Showcase
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {project.highlight && (
              <div className="mt-4 p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-800/60 flex items-start gap-2.5 text-xs sm:text-sm text-indigo-950 dark:text-indigo-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span>{project.highlight}</span>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div className="mt-5">
              <ul className="flex flex-wrap gap-2" aria-label={`Technologies used in ${project.title}`}>
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons Footer */}
          <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
            {hasValidGithub ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/40 cursor-default"
                title="Repository link will be added when published"
              >
                <Github className="w-4 h-4 opacity-60" />
                <span>Repo Coming Soon</span>
              </span>
            )}

            {hasValidLive ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo for ${project.title}`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 shadow-sm shadow-indigo-600/20"
              >
                <span>Live Storefront Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/40 cursor-default"
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

  // 2. Standard Card Layout
  return (
    <article className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/40 hover:-translate-y-1">
      <div>
        {/* Visual Area */}
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
          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>

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
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
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
          {hasValidGithub ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/40 cursor-default"
              title="Repository link will be added when published"
            >
              <Github className="w-3.5 h-3.5 opacity-60" />
              <span>Repo Coming Soon</span>
            </span>
          )}

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
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/40 cursor-default"
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
