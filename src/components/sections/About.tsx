"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import {
  User,
  Calendar,
  Phone,
  Mail,
  Building2,
  GraduationCap,
  FileDown,
  Sparkles,
} from "lucide-react";
import { useResumeDownload, ResumeModal } from "@/components/ui/ResumeModal";

export function About() {
  const { isResumeModalOpen, closeResumeModal, downloadResume } = useResumeDownload();
  const { personalDetails } = portfolioData;

  const detailItems = [
    {
      icon: <User className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
      label: "Name",
      value: personalDetails.name,
      isPlaceholder: false,
    },
    {
      icon: <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
      label: "Field",
      value: personalDetails.field,
      isPlaceholder: false,
    },
    {
      icon: <Building2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
      label: "University",
      value: personalDetails.university,
      isPlaceholder: false,
    },
    {
      icon: <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
      label: "Email",
      value: personalDetails.email,
      href: `mailto:${personalDetails.email}`,
      isPlaceholder: false,
    },
    {
      icon: <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
      label: "Date of Birth",
      value: personalDetails.dateOfBirth,
      isPlaceholder: personalDetails.dateOfBirth.includes("PLACEHOLDER"),
    },
    {
      icon: <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
      label: "Phone",
      value: personalDetails.phone,
      isPlaceholder: personalDetails.phone.includes("PLACEHOLDER"),
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
      <Container>
        <SectionHeader
          label="About"
          title="About Me"
          description="Academic foundation, practical software approach, and verified personal details."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Direct, Concise 2-Sentence Narrative */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3">
            <p className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
              I&apos;m Mohammed Omar, a Software Engineering student at Daffodil International University.
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I learn by building practical projects and exploring web development, software engineering, animation, and 3D development.
            </p>
          </div>

          {/* Personal Details Area */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-base font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-slate-100">
                Personal Details
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {detailItems.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-xs border border-slate-200/80 dark:border-slate-700/80 shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-0.5">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : item.isPlaceholder ? (
                      <span className="text-xs sm:text-sm font-mono text-slate-400 dark:text-slate-500 italic block">
                        {item.value}
                      </span>
                    ) : (
                      <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 block">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Section — ONLY INSIDE ABOUT ME */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                  Curriculum Vitae
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                  Academic qualifications, engineering coursework, and technical skills summary.
                </p>
              </div>

              <button
                type="button"
                onClick={downloadResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm shadow-indigo-600/20 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-indigo-500 hover:-translate-y-0.5 shrink-0"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Graceful modal fallback when PDF is in preparation */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
    </section>
  );
}

