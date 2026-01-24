"use client";

import Link from "next/link";

import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

export function ContactSection() {
  return (
    <ScrollAnimate>
      <section
        id="contact"
        className="mt-16 rounded-3xl border border-white/10 bg-[#0c0f16]/70 p-8 shadow-2xl shadow-black/40"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">Contact</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              Let&apos;s build something high-impact together.
            </h3>
            <p className="mt-3 max-w-xl text-sm text-zinc-300">
              I&apos;m open to full-time roles, freelance engagements, and internships. Reach out with a
              brief note about the problem you&apos;re solving and I&apos;ll respond quickly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-white">
            <a
              href="mailto:hinlogkhenyshi@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
            >
              Email
            </a>
            <Link
              href="https://github.com/khenisawsomeza"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/khenyshi-hinlog-27269539b/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
            >
              LinkedIn
            </Link>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-black transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20"
            >
              View portfolio
            </a>
          </div>
        </div>
      </section>
    </ScrollAnimate>
  );
}

