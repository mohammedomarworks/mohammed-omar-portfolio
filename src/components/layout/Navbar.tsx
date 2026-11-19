"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isClickingRef = useRef(false);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));

    const updateActiveSection = () => {
      setScrolled(window.scrollY > 20);

      // Avoid fighting with instant programmatic click scroll
      if (isClickingRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Top of page
      if (scrollY < 120) {
        if (activeSection !== "hero") {
          setActiveSection("hero");
          if (window.location.hash) {
            window.history.replaceState(null, "", window.location.pathname);
          }
        }
        return;
      }

      // Reached near bottom of page
      if (windowHeight + scrollY >= docHeight - 80) {
        const lastSection = sectionIds[sectionIds.length - 1];
        if (activeSection !== lastSection) {
          setActiveSection(lastSection);
          window.history.replaceState(null, "", `#${lastSection}`);
        }
        return;
      }

      // Check section bounding rects
      // A section is active if its top is above 35% of the viewport and its bottom is below 20%
      let currentSection = "hero";
      const activationLine = windowHeight * 0.35;

      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= activationLine && rect.bottom > 100) {
            currentSection = sectionId;
          }
        }
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
        if (currentSection === "hero") {
          window.history.replaceState(null, "", window.location.pathname);
        } else {
          window.history.replaceState(null, "", `#${currentSection}`);
        }
      }
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [activeSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetId = href.replace("#", "");
    isClickingRef.current = true;
    setActiveSection(targetId);

    if (targetId === "hero") {
      window.history.replaceState(null, "", window.location.pathname);
    } else {
      window.history.replaceState(null, "", `#${targetId}`);
    }

    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#09090b]/85 dark:bg-[#09090b]/85 backdrop-blur-md border-b border-black/[0.08] dark:border-white/[0.07] shadow-sm shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <Container>
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "h-14 sm:h-15" : "h-16 sm:h-18"
            }`}
          >
            {/* Logo / Brand Monogram */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="group flex items-center gap-2 text-foreground font-bold tracking-tight focus-visible:ring-1 focus-visible:ring-emerald-400 rounded p-1"
            >
              <span className="text-base sm:text-lg tracking-tight font-extrabold font-mono text-zinc-900 dark:text-[#f4f4f5]">
                OMAR
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 font-mono text-xs" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1.5 rounded-md transition-all duration-150 ${
                      isActive
                        ? "text-zinc-900 dark:text-[#f4f4f5] bg-zinc-200/80 dark:bg-white/[0.08] border border-black/10 dark:border-white/[0.1] font-semibold"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] border border-transparent"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Actions: Theme Toggle & Mobile Menu Trigger */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="md:hidden p-2 rounded-lg border border-black/10 dark:border-white/[0.07] bg-black/[0.02] dark:bg-white/[0.02] text-zinc-700 dark:text-zinc-300 hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus-visible:ring-1 focus-visible:ring-emerald-400"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={NAV_LINKS}
        activeSection={activeSection}
      />
    </>
  );
}
