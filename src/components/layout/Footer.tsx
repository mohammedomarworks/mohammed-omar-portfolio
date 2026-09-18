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
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800 bg-[#faf9f6] dark:bg-[#0d0f17]/90 py-12 transition-colors">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Identity & Status */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {portfolioData.name}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-mono">
              Software Engineering Student • {portfolioData.university}
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
                className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Next.js attribution */}
        <div className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Personal Engineering Portfolio • Daffodil International University
          </p>
        </div>
      </Container>
    </footer>
  );
}
