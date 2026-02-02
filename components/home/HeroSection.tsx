"use client";

import { RefObject } from "react";
import { ScrollAnimate } from "../ui/ScrollAnimate";

type HeroSectionProps = {
  heroRef: RefObject<HTMLElement | null>;
};

export function HeroSection({ heroRef }: HeroSectionProps) {
  return (
    <section
      ref={heroRef}
      id="hero"
      className="flex min-h-[90vh] flex-col items-center justify-center gap-12 pb-10 pt-10 text-center lg:flex-row"
    >
      <ScrollAnimate>
      <div className="max-w-2xl space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[var(--foreground)]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
          Software Developer · Portfolio
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl">
            Khenyshi Hinlog
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            I design and ship products with clean architecture, performance focused, and with the integration of AI for faster and smarter solutions.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--foreground2)] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[var(--foreground)]/5 px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:bg-[var(--foreground)]/10 hover:shadow-lg hover:shadow-purple-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
          >
            Let&apos;s collaborate
          </a>
        </div>
      </div>  
      </ScrollAnimate> 
    </section>
  );
}
