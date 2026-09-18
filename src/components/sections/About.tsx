import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Code2, Compass, Layers, Box, Sparkles } from "lucide-react";

export function About() {
  const engineeringPillars = [
    {
      title: "Software Engineering",
      description: "Pursuing my degree at Daffodil International University, building a strong core in data structures, algorithms, and clean software architecture.",
      icon: <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "Learning by Building",
      description: "Translating concepts into functional code through hands-on personal projects rather than purely theoretical study.",
      icon: <Compass className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "Web Development",
      description: "Developing modern, responsive frontend applications with React, Next.js, and TypeScript with an emphasis on speed and accessibility.",
      icon: <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "Animation & 3D",
      description: "Exploring creative interaction design through CSS animations, browser motion physics, and 3D modeling fundamentals in Blender.",
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
              I am <span className="font-semibold text-zinc-900 dark:text-zinc-100">Mohammed Omar</span>, a Software Engineering student at <span className="font-semibold text-zinc-900 dark:text-zinc-100">Daffodil International University</span>.
            </p>
            <p>
              My path in engineering is guided by curiosity and pragmatic building. Rather than waiting for senior years, I dive directly into real problems—building web applications that solve campus workflows, experiment with interactive interfaces, and implement clean software patterns.
            </p>
            <p>
              Alongside core software engineering, I have a strong creative pull toward UI animation and 3D development with Blender. I believe that thoughtful software should not only work reliably under the hood, but also feel responsive, lively, and human in use.
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
