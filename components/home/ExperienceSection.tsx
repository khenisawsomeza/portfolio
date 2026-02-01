"use client";

import { ExperienceItem } from "@/data/home";

import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

type ExperienceSectionProps = {
  experience: ExperienceItem[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="mt-16 space-y-6">
      <ScrollAnimate>
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-[var(--muted)]/40 to-transparent" />
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
            Experience & Education
          </p>
        </div>
      </ScrollAnimate>
      <div className="grid gap-4 lg:grid-cols-2">
        {experience.map((item, index) => (
          <ScrollAnimate key={item.role} delay={index * 100}>
            <div className="rounded-3xl border border-white/10 bg-[#0c0f16]/70 p-6 shadow-lg shadow-black/30">
              <div className="flex items-center justify-between text-sm text-zinc-300">
                <span className="font-semibold text-white">{item.role}</span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-400">{item.company}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </section>
  );
}

