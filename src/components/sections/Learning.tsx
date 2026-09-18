import React from "react";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolio";
import { BookOpen, Globe, Sparkles, Box, Cpu } from "lucide-react";

export function Learning() {
  const getTopicIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 1:
        return <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 2:
        return <Box className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 3:
        return <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  const getTopicDescription = (index: number) => {
    switch (index) {
      case 0:
        return "Deepening understanding of modern web architectures, component state, and responsive UX.";
      case 1:
        return "Studying motion timing curves, keyframes, and CSS/canvas micro-interactions.";
      case 2:
        return "Learning 3D modeling fundamentals in Blender and spatial asset integration.";
      case 3:
        return "Strengthening algorithmic thinking, clean code principles, and software architecture.";
      default:
        return "Expanding technical capabilities through continuous self-driven practice.";
    }
  };

  return (
    <section id="learning" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60 mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Skill Development</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Currently Learning
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              As a Software Engineering student, I actively spend time exploring emerging areas and expanding my foundational skill set.
            </p>
          </div>

          {/* 4 Learning Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioData.currentlyLearning.map((topic, idx) => (
              <div
                key={topic}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md transition-all duration-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center mb-3">
                    {getTopicIcon(idx)}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-1.5">
                    {topic}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {getTopicDescription(idx)}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                  <span>In Progress</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 dark:text-slate-400 font-mono mt-6">
            Note: These reflect active student learning goals and are not represented as professional experience.
          </p>
        </div>
      </Container>
    </section>
  );
}
