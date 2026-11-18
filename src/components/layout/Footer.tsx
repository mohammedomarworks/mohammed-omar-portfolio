"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp, Mail } from "lucide-react";
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
        return <Github className="w-3.5 h-3.5" />;
      case "linkedin":
        return <Linkedin className="w-3.5 h-3.5" />;
      case "mail":
        return <Mail className="w-3.5 h-3.5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-black/[0.08] dark:border-white/[0.07] bg-zinc-50 dark:bg-[#09090b] py-12 transition-colors">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity & Status */}
          <div className="text-center md:text-left">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-zinc-900 dark:text-[#f4f4f5] font-bold tracking-tight mb-1"
            >
              <span className="text-base tracking-tight font-extrabold font-mono">OMAR</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest pl-1 border-l border-white/[0.1]">
                SYS.PORTFOLIO
              </span>
            </a>
            <p className="text-xs font-mono text-zinc-500 mt-0.5">
              Software Engineering Student • Daffodil International University
            </p>
          </div>

          {/* Quick Links */}
          <nav
            className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400"
            aria-label="Footer Navigation"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-zinc-950 dark:hover:text-[#f4f4f5] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Channels & Back to Top */}
          <div className="flex items-center gap-2">
            {portfolioData.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-[#f4f4f5] bg-black/[0.02] dark:bg-white/[0.03] hover:bg-black/[0.05] dark:hover:bg-white/[0.06] border border-black/10 dark:border-white/[0.07] transition-colors focus-visible:ring-1 focus-visible:ring-emerald-400"
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-[#f4f4f5] bg-black/[0.02] dark:bg-white/[0.03] hover:bg-black/[0.05] dark:hover:bg-white/[0.06] border border-black/10 dark:border-white/[0.07] transition-colors focus-visible:ring-1 focus-visible:ring-emerald-400 ml-1"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Clean Minimal Colophon Typography */}
        <div className="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <p>Designed &amp; engineered by Mohammed Omar — Dhaka, 2026</p>
          <p className="text-zinc-500 dark:text-zinc-600">
            Obsidian Surface // Monochromatic Systems Theme
          </p>
        </div>
      </Container>
    </footer>
  );
}
