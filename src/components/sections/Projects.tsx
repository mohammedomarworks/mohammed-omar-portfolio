import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { portfolioData } from "@/data/portfolio";

export function Projects() {
  const [featuredProject, ...otherProjects] = portfolioData.projects;

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
      <Container>
        <SectionHeader
          label="Projects"
          title="Featured Projects"
          description="Projects designed to explore real problems, university workflows, and responsive web systems."
        />

        {/* Primary Featured Project Showcase (Sidra Essentials) */}
        {featuredProject && (
          <div className="mb-10 sm:mb-12">
            <ProjectCard project={featuredProject} isFeaturedLayout={true} />
          </div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Additional Projects
              </span>
              <div className="h-px flex-1 bg-slate-200/80 dark:border-slate-800/80" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
