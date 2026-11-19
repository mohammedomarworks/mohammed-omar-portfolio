"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import { Mail, Copy, Check, ArrowUpRight, Terminal } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Could not copy email", err);
    }
  };

  const githubLink = portfolioData.socialLinks.find((s) => s.name === "GitHub");
  const linkedinLink = portfolioData.socialLinks.find((s) => s.name === "LinkedIn");

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 border-b border-black/[0.08] dark:border-white/[0.07]"
    >
      <Container>
        <SectionHeader
          index="05"
          label="Contact"
          title="Get in Touch"
          description="Feel free to reach out for software engineering opportunities, collaborative projects, or questions."
        />

        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl bg-zinc-50 dark:bg-[#121215] border border-black/10 dark:border-white/[0.07] p-6 sm:p-8 shadow-sm">
            {/* Social Connection Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
              {githubLink && (
                <a
                  href={githubLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-lg border border-black/10 dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.02] hover:border-black/20 dark:hover:border-white/[0.15] hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-black/[0.04] dark:bg-white/[0.04] text-zinc-800 dark:text-zinc-200">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-mono font-bold text-zinc-900 dark:text-[#f4f4f5] group-hover:text-emerald-400 transition-colors">
                        GitHub
                      </h4>
                      <p className="text-xs text-zinc-500 font-mono">
                        mohammedomarworks
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}

              {linkedinLink && (
                <a
                  href={linkedinLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-lg border border-black/10 dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.02] hover:border-black/20 dark:hover:border-white/[0.15] hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-black/[0.04] dark:bg-white/[0.04] text-zinc-800 dark:text-zinc-200">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-mono font-bold text-zinc-900 dark:text-[#f4f4f5] group-hover:text-emerald-400 transition-colors">
                        LinkedIn
                      </h4>
                      <p className="text-xs text-zinc-500 font-mono">
                        omar-mohammed-2118b5428
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>

            {/* Email Command Box */}
            <div className="p-4 sm:p-5 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/[0.07] flex items-center justify-center text-zinc-800 dark:text-zinc-200">
                  <Mail className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                    Primary Inbox
                  </span>
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="text-xs sm:text-sm font-mono font-medium text-zinc-900 dark:text-[#f4f4f5] hover:text-emerald-400 transition-colors"
                  >
                    {portfolioData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-black/[0.04] dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 hover:bg-black/[0.08] dark:hover:bg-white/[0.08] border border-black/10 dark:border-white/[0.07] transition-colors focus-visible:ring-1 focus-visible:ring-emerald-400"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-500 dark:text-emerald-400 font-semibold">
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${portfolioData.email}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold text-zinc-950 bg-[#f4f4f5] hover:bg-white transition-all shadow-sm focus-visible:ring-1 focus-visible:ring-emerald-400"
                >
                  <span>Compose</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
