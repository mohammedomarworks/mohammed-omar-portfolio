import React from "react";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Mail, Terminal } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export function Hero() {
  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "mail":
        return <Mail className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction and Overview"
      className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20 mb-6 sm:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
              </span>
              <span>Software Engineering Student • DIU</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.1]">
              Mohammed Omar
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300">
              Software Engineering Student &amp; Aspiring Developer
            </p>

            {/* Concise Introduction */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {portfolioData.tagline} Currently studying Software Engineering at Daffodil International University, turning concepts into dependable software through coursework and project-driven learning.
            </p>

            {/* Call to Actions */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-sm transition-all duration-150 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & University Tag */}
            <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Connect:
                </span>
                <div className="flex items-center gap-2">
                  {portfolioData.socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500"
                    >
                      {getSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <Terminal className="w-4 h-4 text-sky-500" />
                <span>Daffodil International University</span>
              </div>
            </div>
          </div>

          {/* Developer Code / Snapshot Card (Desktop & Large screens) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-5 shadow-sm font-mono text-xs">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[11px] text-slate-400 dark:text-slate-500">
                  student.profile.ts
                </span>
              </div>

              {/* Code Content */}
              <div className="py-4 space-y-1.5 text-slate-700 dark:text-slate-300 leading-relaxed select-none">
                <div>
                  <span className="text-sky-600 dark:text-sky-400 font-semibold">const</span>{" "}
                  developer = &#123;
                </div>
                <div className="pl-4">
                  name: <span className="text-emerald-600 dark:text-emerald-400">&quot;Mohammed Omar&quot;</span>,
                </div>
                <div className="pl-4">
                  institution:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;Daffodil International Univ.&quot;</span>,
                </div>
                <div className="pl-4">
                  discipline:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;Software Engineering&quot;</span>,
                </div>
                <div className="pl-4">interests: [</div>
                <div className="pl-8 text-amber-700 dark:text-amber-300">
                  &quot;Web Development&quot;,
                </div>
                <div className="pl-8 text-amber-700 dark:text-amber-300">
                  &quot;Software Engineering&quot;,
                </div>
                <div className="pl-8 text-amber-700 dark:text-amber-300">
                  &quot;UI Animation &amp; 3D&quot;,
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  learningByBuilding:{" "}
                  <span className="text-sky-600 dark:text-sky-400 font-semibold">true</span>,
                </div>
                <div>&#125;;</div>
              </div>

              {/* Terminal Footer Status */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Actively Learning &amp; Coding</span>
                </span>
                <span className="text-slate-400">SWE • DIU</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
