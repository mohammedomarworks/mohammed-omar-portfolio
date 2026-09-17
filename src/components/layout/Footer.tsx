"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolio";
import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "mail":
        return <Mail className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/70 py-12 transition-colors">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Identity & Status */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {portfolioData.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Software Engineering • {portfolioData.university}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {portfolioData.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500 ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Next.js attribution */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Crafted with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
