import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Code2, Sparkles, Box } from "lucide-react";

export function About() {
  const interestCards = [
    {
      title: "Web Development",
      description: "Building responsive, modern applications using React, Next.js, and TypeScript.",
      icon: <Code2 className="w-5 h-5 text-sky-500" />,
    },
    {
      title: "Software Engineering",
      description: "Applying software design principles, structured problem-solving, and clean modular code.",
      icon: <GraduationCap className="w-5 h-5 text-sky-500" />,
    },
    {
      title: "UI Animation",
      description: "Crafting fluid transitions and purposeful micro-interactions that enhance user experience.",
      icon: <Sparkles className="w-5 h-5 text-sky-500" />,
    },
    {
      title: "3D Development",
      description: "Exploring 3D modeling fundamentals in Blender and web-based spatial representations.",
      icon: <Box className="w-5 h-5 text-sky-500" />,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
      <Container>
        <SectionHeader
          label="01 // About"
          title="Engineering Mindset & Background"
          description="A quick look into my studies, my approach to writing software, and where I channel my curiosity."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {portfolioData.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">
                Academic Foundation
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Pursuing a B.Sc. in Software Engineering at Daffodil International University. Coursework strengthens my knowledge in computer science foundations, algorithms, database concepts, and scalable software architecture.
              </p>
            </div>
          </div>

          {/* Interest Areas Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <h3 className="lg:col-span-1 text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Core Technical Interests
            </h3>
            {interestCards.map((interest) => (
              <div
                key={interest.title}
                className="p-4 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 hover:border-sky-500/40 dark:hover:border-sky-400/40 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-1.5 rounded-md bg-sky-500/10">
                    {interest.icon}
                  </div>
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                    {interest.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
