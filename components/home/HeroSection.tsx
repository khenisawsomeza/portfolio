"use client";

import { RefObject } from "react";

type HeroSectionProps = {
  heroRef: RefObject<HTMLElement | null>;
};

export function HeroSection({ heroRef }: HeroSectionProps) {
  return (
    <section
      ref={heroRef}
      id="hero"
      className="flex min-h-[90vh] flex-col items-start gap-12 pb-10 pt-10 lg:flex-row lg:items-center lg:justify-between"
    >
      <div className="max-w-2xl space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-300">
          Software Developer · Portfolio
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Hi, I&apos;m Khenyshi — building reliable, scalable web experiences.
          </h1>
          <p className="text-lg leading-relaxed text-zinc-300">
            I design and ship products with clean architecture, thoughtful DX, and a relentless
            focus on performance. I love turning complex problems into elegant, maintainable
            systems.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
          >
            Let&apos;s collaborate
          </a>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            Performance-first builds
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            Systems thinking
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            Growth mindset
          </span>
        </div>
      </div>

      <div className="relative w-full max-w-md self-center lg:flex-shrink-0 animate-fade-in-up">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-purple-400/10 to-cyan-300/10 blur-3xl" />
        <div className="relative rounded-3xl border border-white/10 bg-[#0c0f16]/70 p-8 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="flex items-center justify-between text-sm text-zinc-300">
            <span className="font-semibold text-white">Currently coding</span>
            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-300">
              Available
            </span>
          </div>
          <div className="mt-6 space-y-4 text-sm text-zinc-200">
            <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
              <span className="text-zinc-300">Primary stack</span>
              <span className="font-medium text-white">Next.js · TypeScript</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
              <span className="text-zinc-300">Focus</span>
              <span className="font-medium text-white">Performance & DX</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
              <span className="text-zinc-300">Mindset</span>
              <span className="font-medium text-white">Clean, scalable systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
