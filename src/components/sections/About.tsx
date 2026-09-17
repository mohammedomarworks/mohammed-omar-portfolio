import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import { Code2, Compass, Layers, Box } from "lucide-react";

export function About() {
  const factualFocusAreas = [
    {
      title: "Learning by Building",
      description: "Focusing on hands-on project work rather than passive theory to understand software from the ground up.",
      icon: <Compass className="w-4 h-4 text-sky-500" />,
    },
    {
      title: "Web Development",
      description: "Developing responsive frontend applications using modern tools like React, Next.js, and TypeScript.",
      icon: <Code2 className="w-4 h-4 text-sky-500" />,
    },
    {
      title: "Animation & 3D",
      description: "Experimenting with creative CSS animations, interactive UI motion, and 3D modeling fundamentals in Blender.",
      icon: <Box className="w-4 h-4 text-sky-500" />,
    },
    {
      title: "Software Engineering",
      description: "Strengthening core computer science foundations, clean code practices, and system architecture through university coursework.",
      icon: <Layers className="w-4 h-4 text-sky-500" />,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
      <Container>
        <SectionHeader
          label="01 // About"
          title="About &amp; Engineering Focus"
          description="A Software Engineering student combining practical web engineering with creative technology experiments."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Bio Column */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {portfolioData.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-1.5">
                Current Studies
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Currently pursuing a degree in Software Engineering at Daffodil International University. My coursework provides the foundation for data structures, algorithms, and software design patterns that I apply directly in my projects.
              </p>
            </div>
          </div>

          {/* Factual Focus Area Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            <h3 className="lg:col-span-1 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-0.5">
              Current Engineering Focus
            </h3>
            {factualFocusAreas.map((area) => (
              <div
                key={area.title}
                className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 hover:border-sky-500/40 dark:hover:border-sky-400/40 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-1.5 rounded-md bg-sky-500/10">
                    {area.icon}
                  </div>
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                    {area.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
