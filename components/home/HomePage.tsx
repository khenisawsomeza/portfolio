"use client";

import { useEffect, useRef, useState } from "react";

import { certificates, experience, navItems, projects, skills } from "@/data/home";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

import { AboutSection } from "./AboutSection";
import { CertificatesSection } from "./CertificatesSection";
import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { FloatingNav } from "./FloatingNav";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { Chatbot } from "@/components/chatbot/Chatbot";

export function HomePage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [showNav, setShowNav] = useState(false);

  useSmoothScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setShowNav(!entry.isIntersecting), {
      threshold: 0.35,
    });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.18),transparent_28%),radial-gradient(circle_at_75%_10%,rgba(34,211,238,0.14),transparent_24%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.05),transparent_34%)]" />

      <FloatingNav items={navItems} show={showNav} />

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-20 pt-12 sm:px-10">
        <HeroSection heroRef={heroRef} />
        <AboutSection />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experience={experience} />
        <CertificatesSection certificates={certificates} />
        <ContactSection />
      </main>

      <Chatbot />
    </div>
  );
}
