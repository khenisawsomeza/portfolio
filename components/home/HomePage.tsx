"use client";

import { useEffect, useRef, useState } from "react";

import { certificates, experience, navItems, projects, skills } from "@/data/home";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import ScrollContext from "@/components/ui/ScrollContext";

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
      <div className="pointer-events-none absolute inset-0 " />

      <FloatingNav items={navItems} show={showNav} />

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-20 pt-12 sm:px-10">
        <ScrollContext>
          <HeroSection heroRef={heroRef} />
          <AboutSection />
          <SkillsSection skills={skills} />
          <ProjectsSection projects={projects} />
          <ExperienceSection experience={experience} />
          <CertificatesSection certificates={certificates} />
          <ContactSection />
        </ScrollContext>
      </main>

      <Chatbot />
    </div>
  );
}
