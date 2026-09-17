import React from "react";
import { Project } from "@/types/portfolio";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasValidLive = project.liveUrl && project.liveUrl !== "#" && !project.liveUrl.includes("example.com");
  const hasValidRepo = project.githubUrl && project.githubUrl !== "#" && !project.githubUrl.includes("yourusername");

  const primaryUrl = hasValidLive ? project.liveUrl : hasValidRepo ? project.githubUrl : undefined;

  return (
    <article className="group relative flex flex-col justify-between rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 transition-all duration-200 hover:border-sky-500/60 dark:hover:border-sky-400/60 hover:shadow-md hover:shadow-sky-500/5 dark:hover:shadow-sky-950/20">
      <div>
        {/* Top Header & Category Tag */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
              <FolderGit2 className="w-5 h-5" aria-hidden="true" />
            </div>
            {project.category && (
              <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {project.category}
              </span>
            )}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                title="View GitHub Repository"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo for ${project.title}`}
                title="View Live Demo"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span
                className="px-2 py-1 rounded text-[11px] font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800/60"
                title="Live preview in development"
              >
                In Progress
              </span>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-150">
          {primaryUrl ? (
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
            >
              <span>{project.title}</span>
            </a>
          ) : (
            <span>{project.title}</span>
          )}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tech Stack Badges */}
      <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80">
        <ul className="flex flex-wrap gap-1.5" aria-label={`Technologies used in ${project.title}`}>
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
