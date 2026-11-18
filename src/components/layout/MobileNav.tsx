"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  activeSection: string;
}

export function MobileNav({
  isOpen,
  onClose,
  links,
  activeSection,
}: MobileNavProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
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
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 md:hidden flex flex-col bg-black/80 backdrop-blur-md"
    >
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col h-full bg-[#09090b] border-b border-white/[0.07] p-6 shadow-2xl">
        <div className="flex items-center justify-between pb-5 border-b border-white/[0.07]">
          <div className="flex items-center gap-2 text-zinc-100 font-bold tracking-tight">
            <span className="text-base tracking-tight font-extrabold font-mono text-[#f4f4f5]">OMAR</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest pl-1 border-l border-white/[0.1]">
              SYS.SWE
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-lg border border-white/[0.07] bg-white/[0.02] text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06] transition-colors focus-visible:ring-1 focus-visible:ring-emerald-400"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 py-8 font-mono text-sm">
          <ul className="flex flex-col space-y-2">
            {links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      onClose();
                      if (link.href === "#hero") {
                        window.history.replaceState(null, "", window.location.pathname);
                      } else {
                        window.history.replaceState(null, "", link.href);
                      }
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-white/[0.08] text-[#f4f4f5] border border-white/[0.1] font-semibold"
                        : "text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-100 border border-transparent"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="pt-5 border-t border-white/[0.07] text-xs font-mono text-zinc-500 text-center">
          Daffodil International University • B.Sc. Software Engineering
        </div>
      </div>
    </div>
  );
}
