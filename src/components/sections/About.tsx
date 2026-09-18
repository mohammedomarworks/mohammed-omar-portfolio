import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Code2, Compass, Layers, Box, Sparkles } from "lucide-react";

export function About() {
  const engineeringPillars = [
    {
      title: "Software Engineering",
      description: "Pursuing my degree at Daffodil International University, building a solid foundation in data structures, algorithms, and software design.",
      icon: <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "Hands-on Practice",
      description: "Applying classroom theory directly to functional projects, student utilities, and web applications.",
      icon: <Compass className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "Web Development",
      description: "Building responsive frontends with React, Next.js, and TypeScript with attention to clean layout and accessibility.",
      icon: <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "Animation & 3D",
      description: "Learning CSS motion, canvas interactions, and 3D asset modeling fundamentals in Blender.",
      icon: <Box className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <Container>
        <SectionHeader
          label="About Me"
          title="Engineering &amp; Creative Foundations"
          description="A Software Engineering student combining practical web engineering with creative technology experiments."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Natural Student Narrative */}
          <div className="lg:col-span-6 space-y-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            <p>
              I am <span className="font-semibold text-zinc-900 dark:text-zinc-100">Mohammed Omar</span>, an undergraduate Software Engineering student at <span className="font-semibold text-zinc-900 dark:text-zinc-100">Daffodil International University</span>.
            </p>
            <p>
              My focus is on understanding core computer science principles and applying them by building practical software applications. From campus tools to workflow utilities, I learn best by writing code, structuring systems, and solving real user problems.
            </p>
            <p>
              Alongside core software engineering, I explore web animation and 3D modeling with Blender. I care about writing maintainable code and building interfaces that feel responsive and well-crafted.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 text-xs font-mono text-indigo-800 dark:text-indigo-300">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Continuous student learning through code &amp; design</span>
              </div>
            </div>
          </div>

          {/* Pillars & Focus Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {engineeringPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md transition-all duration-200 shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center mb-3">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
