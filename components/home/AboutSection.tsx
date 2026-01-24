"use client";

import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

export function AboutSection() {
  return (
    <section id="about" className="space-y-4 border-t border-white/5 pt-12">
      <ScrollAnimate>
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">About</p>
        </div>
      </ScrollAnimate>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr]">
        <ScrollAnimate delay={0}>
          <div className="space-y-4 text-lg leading-relaxed text-zinc-200">
            <p>
              I build software with a balance of speed, quality, and long-term maintainability. I
              thrive in collaborative environments, pairing closely with designers, product managers,
              and stakeholders to deliver features users love.
            </p>
            <p>
              My work spans end-to-end architecture, frontend craft, and backend services. I care
              deeply about DX, observability, and leaving codebases better than I found them.
            </p>
          </div>
        </ScrollAnimate>
        <ScrollAnimate delay={100}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-200 shadow-lg shadow-black/30">
            <h3 className="text-lg font-semibold text-white">What I bring</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                <span>Clear communication with realistic timelines and crisp status updates.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                <span>Design empathy and accessibility baked into every feature.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                <span>Performance budgets, instrumentation, and tight feedback loops.</span>
              </li>
            </ul>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
