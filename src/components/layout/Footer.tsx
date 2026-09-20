"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

const FOOTER_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

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
    <footer className="border-t border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 py-12 transition-colors">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity & Status */}
          <div className="text-center md:text-left">
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 text-slate-900 dark:text-white font-bold tracking-tight mb-1"
            >
              <span className="text-lg tracking-tight font-extrabold font-mono">OMAR</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            </a>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {portfolioData.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
              Software Engineering Student • {portfolioData.university}
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400" aria-label="Footer Navigation">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            {portfolioData.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 ml-1"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-slate-400">
            <span>Made with</span>
            <Heart
              className="w-3.5 h-3.5 text-rose-500 shrink-0 inline-block"
              fill="#f43f5e"
              stroke="#f43f5e"
              aria-hidden="true"
            />
            <span>by {portfolioData.name}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
