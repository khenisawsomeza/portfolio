export type NavItem = {
  id: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  links: {
    github: string;
    demo: string;
  };
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Tech" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const skills: SkillGroup[] = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { title: "Frameworks", items: ["Next.js", "React", "Node.js", "Express"] },
  { title: "Cloud & DevOps", items: ["Vercel", "AWS", "Docker", "CI/CD"] },
  {
    title: "Practices",
    items: ["Clean Architecture", "Testing", "Design Systems", "Accessibility"],
  },
];

export const projects: Project[] = [
  {
  title: "Smart Study App",
  description:
    "An AI-powered study management web app that helps students focus, retain information, and study efficiently through active recall and behavior-driven planning.",
  tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Vercel"],
  features: [
    "AI-driven study scheduling with spaced repetition",
    "Built-in focus mode for deep, distraction-free sessions",
    "Learning analytics to track mastery and weak areas",
  ],
  links: {
    github: "https://github.com/khenisawsomeza/smart-app",
    demo: "https://smart-study25.vercel.app",
  },
}

];

export const experience: ExperienceItem[] = [
  {
    role: "Software Tester",
    company: "Blackbox.ai",
    period: "2024 — 2025",
    bullets: [
      "Developed and executed comprehensive manual and automated test cases for web applications, ensuring robust feature delivery and minimal regression.",
      "Collaborated closely with engineers and product teams to identify, track, and resolve critical bugs.",
      "Designed test plans for new product features, focusing on edge cases, usability, and real-world stress scenarios.",
      "Documented test results and provided detailed feedback to drive continuous improvement in both product quality and engineering processes.",
    ],
  },
  {
    role: "BS Computer Science",
    company: "Ateneo de Davao University",
    period: "2024 — 2028",
    bullets: [
      "Completed coursework in algorithms, data structures, software engineering, and artificial intelligence.",
      "Gained hands-on experience in software development, system design, and project management.",
      "Collaborated with peers on group projects, enhancing communication and teamwork skills.",
      "Developed a strong foundation in computer science principles and problem-solving techniques.",
      "Gained exposure to real-world software development challenges and industry best practices.",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    title: "Learn React",
    issuer: "Scrimba",
    date: "2026",
    credentialUrl: "https://scrimba.com/@khenisawsomeza:certs;cert24zAwPPowNTBxVhVdUuEzeUS1mCGoygZykct8",
  },
  {
    title: "OpenxAI Coding Session",
    issuer: "OpenxAI",
    date: "2025",
    credentialUrl: "https://explorer.certifika.org/token/BASE-938",
  },
  {
    title: "Legacy Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2025",
    credentialUrl: "https://freecodecamp.org/certification/khenshi/responsive-web-design",
  },
];
