"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { portfolioData } from "@/data/portfolio";

export function Projects() {
  const featuredProjects = portfolioData.projects.filter((p) => p.featured);
  const additionalProjects = portfolioData.projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 border-b border-black/[0.08] dark:border-white/[0.07]"
    >
      <Container>
        <SectionHeader
          index="04"
          label="Engineering Projects"
          title="Flagship Systems &amp; Deployed Applications"
          description="Native macOS applications, real-time 3D orbital simulations, and production web client systems."
        />

        {/* Flagship Projects Stack */}
        <div className="space-y-8 sm:space-y-10 mb-14 sm:mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isFeaturedLayout={true}
            />
          ))}
        </div>

        {/* Additional Engineering Projects */}
        {additionalProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500">
                // ADDITIONAL SYSTEMS &amp; EXPERIMENTS
              </span>
              <div className="h-px flex-1 bg-black/[0.08] dark:bg-white/[0.07]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
