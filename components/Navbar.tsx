"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/game", label: "Play" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/roadmap/map", label: "World Map" },
  { href: "/presale", label: "Presale" },
  { href: "/capsules", label: "Capsules" },
  { href: "/city", label: "City" },
  { href: "/leaderboards", label: "Leaderboards" },
  { href: "/profile", label: "Profile" },
  { href: "/tech-omnis", label: "Tech Omnis" },
  { href: "/faq", label: "FAQ" },
  { href: "/team", label: "Team" },
];

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-cyan-500/20 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-[0.3em] text-cyan-100"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-fuchsia-500 shadow-[0_0_30px_rgba(56,189,248,0.8)]">
              <span className="h-4 w-4 rounded-full bg-slate-950/80 shadow-[0_0_16px_rgba(15,23,42,1)]" />
              <span className="pointer-events-none absolute -inset-0.5 rounded-2xl border border-white/10" />
            </span>
            <span className="hidden text-[0.7rem] uppercase text-slate-200/90 sm:inline">
              EZZI WORLD
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={classNames(
                  "relative rounded-full px-3 py-1.5 text-[0.7rem] font-medium tracking-wide transition-all",
                  "text-slate-300 hover:text-cyan-100 hover:bg-cyan-500/10",
                  active &&
                    "text-cyan-50 shadow-[0_0_18px_rgba(56,189,248,0.7)] bg-cyan-500/15 border border-cyan-400/60"
                )}
              >
                {active && (
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/25 via-sky-400/10 to-fuchsia-400/20 opacity-70" />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Right zone */}
        <div className="flex items-center gap-2">
          <Link
            href="/presale"
            className="hidden items-center gap-2 rounded-full border border-amber-400/70 bg-amber-500/10 px-3 py-1.5 text-[0.7rem] font-semibold text-amber-100 shadow-[0_0_22px_rgba(245,158,11,0.7)] transition-all hover:border-amber-300 hover:bg-amber-400/20 hover:shadow-[0_0_30px_rgba(251,191,36,0.95)] md:inline-flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,1)]" />
            <span>Capsule Presale</span>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/90 text-slate-200 shadow-[0_0_18px_rgba(15,23,42,0.9)] md:hidden"
          >
            <span className="sr-only">Open navigation</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-4 rounded-full bg-slate-200" />
              <span className="block h-0.5 w-3 rounded-full bg-slate-400" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <div className="border-t border-slate-800/80 bg-slate-950/95 px-4 pb-3 pt-2 md:hidden">
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={classNames(
                    "rounded-full px-3 py-1.5 text-[0.75rem] font-medium",
                    "text-slate-300 hover:text-cyan-100 hover:bg-cyan-500/10",
                    active &&
                      "text-cyan-50 bg-cyan-500/20 border border-cyan-400/70 shadow-[0_0_18px_rgba(56,189,248,0.7)]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
