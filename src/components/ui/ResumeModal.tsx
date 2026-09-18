"use client";

import React, { useState, useEffect } from "react";
import { FileText, X, Download, ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-all"
    >
      {/* Backdrop click dismiss */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xl p-6 sm:p-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close resume details"
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-5">
          <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400 shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/60 mb-1.5">
              <AlertCircle className="w-3 h-3" />
              File Placeholder
            </span>
            <h3 id="resume-modal-title" className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Mohammed Omar — Resume
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
              Software Engineering Student • Daffodil International Univ.
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          <p className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 text-xs font-mono text-slate-700 dark:text-slate-300">
            <span className="font-semibold text-slate-900 dark:text-slate-100 block mb-1">
              Resume Path Notice:
            </span>
            Direct download is configured for <code className="text-indigo-600 dark:text-indigo-400">public/resume/Mohammed-Omar-Resume.pdf</code>. When you add your official PDF to that directory, clicking the button will automatically download it.
          </p>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
            <div className="font-semibold text-slate-900 dark:text-slate-100 font-mono uppercase tracking-wider text-[11px] flex items-center gap-1.5 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Verified Academic Credentials</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              <strong>Institution:</strong> Daffodil International University
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              <strong>Degree:</strong> Software Engineering (Current Student)
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              <strong>Core Competencies:</strong> React, Next.js, TypeScript, Tailwind CSS, Git, Blender
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <a
            href="https://github.com/mohammedomarworks"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Profile</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm shadow-indigo-600/20"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Hook to trigger resume download or open fallback modal
 */
export function useResumeDownload() {
  const [modalOpen, setModalOpen] = useState(false);

  const downloadResume = async () => {
    try {
      const res = await fetch("/resume/Mohammed-Omar-Resume.pdf", { method: "HEAD" });
      if (res.ok && res.headers.get("content-type")?.includes("pdf")) {
        const link = document.createElement("a");
        link.href = "/resume/Mohammed-Omar-Resume.pdf";
        link.download = "Mohammed-Omar-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setModalOpen(true);
      }
    } catch {
      setModalOpen(true);
    }
  };

  return {
    isResumeModalOpen: modalOpen,
    openResumeModal: () => setModalOpen(true),
    closeResumeModal: () => setModalOpen(false),
    downloadResume,
  };
}
