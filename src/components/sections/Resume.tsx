"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FileDown, GraduationCap, Building2, CheckCircle, Sparkles } from "lucide-react";
import { useResumeDownload, ResumeModal } from "@/components/ui/ResumeModal";

export function Resume() {
  const { isResumeModalOpen, closeResumeModal, downloadResume } = useResumeDownload();

  return (
    <section id="resume" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/20">
      <Container>
        <SectionHeader
          label="Resume"
          title="Curriculum Vitae"
          description="Academic qualifications, engineering coursework, and technical skills summary."
        />

        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Curriculum Vitae</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Mohammed Omar
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                  Software Engineering Student • Daffodil International University
                </p>
              </div>

              {/* Download Resume Button */}
              <button
                type="button"
                onClick={downloadResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-150 shadow-sm shadow-indigo-600/20 focus-visible:ring-2 focus-visible:ring-indigo-500 hover:-translate-y-0.5 shrink-0"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Factual Academic Snapshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>Program</span>
                </div>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Software Engineering
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Current Undergraduate Student
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider mb-1">
                  <Building2 className="w-4 h-4" />
                  <span>Institution</span>
                </div>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Daffodil International University
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* Note regarding real PDF location */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <CheckCircle className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span>Direct PDF download configured for /resume/Mohammed-Omar-Resume.pdf</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Fallback info modal if PDF is not placed yet */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
    </section>
  );
}
