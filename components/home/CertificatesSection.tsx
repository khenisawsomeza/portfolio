"use client";

import Link from "next/link";

import { Certificate } from "@/data/home";

import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

type CertificatesSectionProps = {
  certificates: Certificate[];
};

export function CertificatesSection({ certificates }: CertificatesSectionProps) {
  return (
    <section id="certificates" className="mt-16 space-y-6">
      <ScrollAnimate>
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-[var(--muted)]/40 to-transparent" />
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Certificates</p>
        </div>
      </ScrollAnimate>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <ScrollAnimate key={certificate.title} delay={index * 100}>
            <div className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-[#0c0f16]/70 p-6 shadow-lg shadow-black/30 transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-x-6 top-6 h-[2px] rounded-full bg-gradient-to-r from-purple-400/50 via-cyan-300/50 to-white/30 opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{certificate.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{certificate.issuer}</p>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200">
                  {certificate.date}
                </span>
              </div>
              {certificate.credentialId && (
                <p className="mt-4 text-xs text-zinc-500">Credential ID: {certificate.credentialId}</p>
              )}
              {certificate.credentialUrl && (
                <div className="mt-auto pt-4">
                  <Link
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-purple-300"
                  >
                    View certificate <span aria-hidden>↗</span>
                  </Link>
                </div>
              )}
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </section>
  );
}
