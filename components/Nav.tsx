"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/resume";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-cream transition-colors hover:text-ember"
        >
          bc<span className="text-ember">.</span>
        </a>
        <div className="hidden items-center gap-7 font-mono text-[13px] text-muted sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${site.email}`}
          className="rounded-full border border-line px-4 py-1.5 font-mono text-[13px] text-cream transition-colors hover:border-ember hover:text-ember"
        >
          Say hi
        </a>
      </nav>
    </header>
  );
}
