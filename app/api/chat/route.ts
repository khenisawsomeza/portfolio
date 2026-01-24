import { NextRequest, NextResponse } from "next/server";

// Free rule-based chatbot for portfolio questions
// Works on Vercel without any API keys or external dependencies
// Contains all specific information from the portfolio
export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";

    let response = "";

    // About/Introduction questions
    if (
      lastMessage.includes("about") ||
      lastMessage.includes("who") ||
      lastMessage.includes("introduce") ||
      lastMessage.includes("tell me") ||
      lastMessage.includes("background")
    ) {
      response =
        "Khenyshi is a software developer passionate about building reliable, scalable web experiences. They design and ship products with clean architecture, thoughtful developer experience (DX), and a relentless focus on performance. Khenyshi builds software with a balance of speed, quality, and long-term maintainability, thriving in collaborative environments and pairing closely with designers, product managers, and stakeholders. Their work spans end-to-end architecture, frontend craft, and backend services, with deep care for DX, observability, and leaving codebases better than they found them. They bring clear communication with realistic timelines, design empathy and accessibility baked into every feature, and performance budgets with tight feedback loops.";
    }
    // Skills/Technology questions
    else if (
      lastMessage.includes("skill") ||
      lastMessage.includes("tech") ||
      lastMessage.includes("technology") ||
      lastMessage.includes("stack") ||
      lastMessage.includes("language") ||
      lastMessage.includes("framework") ||
      lastMessage.includes("tools")
    ) {
      if (lastMessage.includes("language")) {
        response =
          "Khenyshi works with these programming languages: TypeScript, JavaScript, Python, and SQL.";
      } else if (lastMessage.includes("framework") || lastMessage.includes("react") || lastMessage.includes("next")) {
        response =
          "Khenyshi's frameworks and libraries include: Next.js, React, Node.js, and Express.";
      } else if (lastMessage.includes("cloud") || lastMessage.includes("devops") || lastMessage.includes("aws") || lastMessage.includes("vercel")) {
        response =
          "Khenyshi has experience with Cloud & DevOps technologies: Vercel, AWS, Docker, and CI/CD.";
      } else if (lastMessage.includes("practice") || lastMessage.includes("methodology")) {
        response =
          "Khenyshi focuses on these practices: Clean Architecture, Testing, Design Systems, and Accessibility.";
      } else {
        response =
          "Khenyshi's tech stack includes:\n\n**Languages:** TypeScript, JavaScript, Python, SQL\n**Frameworks:** Next.js, React, Node.js, Express\n**Cloud & DevOps:** Vercel, AWS, Docker, CI/CD\n**Practices:** Clean Architecture, Testing, Design Systems, Accessibility\n\nTheir primary stack is Next.js and TypeScript, with a focus on Performance & DX and a mindset of building clean, scalable systems.";
      }
    }
    // Specific project questions
    else if (
      lastMessage.includes("project launchpad") ||
      lastMessage.includes("launchpad")
    ) {
      response =
        "Project Launchpad is a deployment-ready starter that pairs Next.js with CI/CD, role-based access, and observability wiring so teams can ship faster. Key features include: Auth, RBAC, and audit logging baked-in for production readiness; End-to-end tests with seeded demo data for reliable releases; Zero-downtime deploys and feature flags for safe rollouts. Built with Next.js, TypeScript, PostgreSQL, Playwright, and Vercel.";
    } else if (
      lastMessage.includes("insight dashboard") ||
      lastMessage.includes("dashboard")
    ) {
      response =
        "Insight Dashboard is a real-time analytics dashboard that transforms event streams into actionable metrics with rich visualizations and alerts. Key features include: Stream processing pipeline with debounced updates for snappy UI; Composable chart components with accessibility-first defaults; Alerting rules and incident timeline for rapid triage. Built with React, Next.js, WebSockets, Redis, and Tailwind CSS.";
    } else if (
      lastMessage.includes("studio cms") ||
      lastMessage.includes("cms")
    ) {
      response =
        "Studio CMS is a custom CMS for marketing teams with modular content blocks, live preview, and SEO controls that keep pages blazing fast. Key features include: Schema-driven content blocks with guardrails to prevent layout drift; Live preview that mirrors production rendering for confidence; Edge caching strategy that keeps TTFB low across regions. Built with Next.js, TypeScript, MDX, Edge Functions, and Analytics.";
    }
    // General project questions
    else if (
      lastMessage.includes("project") ||
      lastMessage.includes("work") ||
      lastMessage.includes("portfolio") ||
      lastMessage.includes("build") ||
      lastMessage.includes("app")
    ) {
      response =
        "Khenyshi has worked on several projects:\n\n1. **Project Launchpad** - A deployment-ready starter with Next.js, CI/CD, and role-based access\n2. **Insight Dashboard** - Real-time analytics dashboard with WebSockets and Redis\n3. **Studio CMS** - Custom CMS for marketing teams with modular content blocks\n\nAll projects use modern technologies like Next.js, React, and TypeScript. You can find more details in the Projects section above!";
    }
    // Experience questions - Blackbox.ai
    else if (
      lastMessage.includes("blackbox") ||
      lastMessage.includes("tester") ||
      lastMessage.includes("testing")
    ) {
      response =
        "Khenyshi worked as a Software Tester at Blackbox.ai from 2024 to 2025. Their responsibilities included:\n\n• Developed and executed comprehensive manual and automated test cases for web applications, ensuring robust feature delivery and minimal regression\n• Collaborated closely with engineers and product teams to identify, track, and resolve critical bugs\n• Designed test plans for new product features, focusing on edge cases, usability, and real-world stress scenarios\n• Documented test results and provided detailed feedback to drive continuous improvement in both product quality and engineering processes";
    }
    // Experience questions - General
    else if (
      lastMessage.includes("experience") ||
      lastMessage.includes("job") ||
      lastMessage.includes("employment") ||
      lastMessage.includes("career") ||
      lastMessage.includes("work history")
    ) {
      response =
        "Khenyshi's experience:\n\n**Software Tester at Blackbox.ai (2024-2025)**\n• Developed and executed comprehensive manual and automated test cases\n• Collaborated with engineers and product teams to identify and resolve bugs\n• Designed test plans focusing on edge cases and usability\n• Documented test results and provided feedback for continuous improvement\n\n**BS Computer Science at Ateneo de Davao University (2024-2028)**\n• Currently pursuing degree with coursework in algorithms, data structures, software engineering, and AI\n• Gained hands-on experience in software development, system design, and project management\n• Collaborated on group projects, enhancing communication and teamwork skills\n• Developed strong foundation in computer science principles and problem-solving";
    }
    // Education questions
    else if (
      lastMessage.includes("education") ||
      lastMessage.includes("school") ||
      lastMessage.includes("university") ||
      lastMessage.includes("degree") ||
      lastMessage.includes("ateneo") ||
      lastMessage.includes("davao")
    ) {
      response =
        "Khenyshi is currently pursuing a BS in Computer Science at Ateneo de Davao University (2024-2028). Their education includes:\n\n• Completed coursework in algorithms, data structures, software engineering, and artificial intelligence\n• Gained hands-on experience in software development, system design, and project management\n• Collaborated with peers on group projects, enhancing communication and teamwork skills\n• Developed a strong foundation in computer science principles and problem-solving techniques\n• Gained exposure to real-world software development challenges and industry best practices";
    }
    // Certificate questions - Specific
    else if (lastMessage.includes("react") && lastMessage.includes("cert")) {
      response =
        "Khenyshi has a 'Learn React' certificate from Scrimba (2026). You can view it at: https://scrimba.com/@khenisawsomeza:certs;cert24zAwPPowNTBxVhVdUuEzeUS1mCGoygZykct8";
    } else if (lastMessage.includes("openxai") || lastMessage.includes("openx")) {
      response =
        "Khenyshi completed the 'OpenxAI Coding Session' certificate from OpenxAI (2025). You can view it at: https://explorer.certifika.org/token/BASE-938";
    } else if (lastMessage.includes("responsive") || lastMessage.includes("web design")) {
      response =
        "Khenyshi has a 'Legacy Responsive Web Design' certificate from freeCodeCamp (2025). You can view it at: https://freecodecamp.org/certification/khenshi/responsive-web-design";
    }
    // Certificate questions - General
    else if (
      lastMessage.includes("certificate") ||
      lastMessage.includes("certification") ||
      lastMessage.includes("cert")
    ) {
      response =
        "Khenyshi has the following certificates:\n\n1. **Learn React** from Scrimba (2026)\n   View: https://scrimba.com/@khenisawsomeza:certs;cert24zAwPPowNTBxVhVdUuEzeUS1mCGoygZykct8\n\n2. **OpenxAI Coding Session** from OpenxAI (2025)\n   View: https://explorer.certifika.org/token/BASE-938\n\n3. **Legacy Responsive Web Design** from freeCodeCamp (2025)\n   View: https://freecodecamp.org/certification/khenshi/responsive-web-design\n\nCheck the Certificates section for more details!";
    }
    // Contact questions
    else if (
      lastMessage.includes("contact") ||
      lastMessage.includes("email") ||
      lastMessage.includes("reach") ||
      lastMessage.includes("get in touch") ||
      lastMessage.includes("connect") ||
      lastMessage.includes("github") ||
      lastMessage.includes("linkedin")
    ) {
      if (lastMessage.includes("email")) {
        response = "You can reach Khenyshi via email at: hinlogkhenyshi@gmail.com";
      } else if (lastMessage.includes("github")) {
        response = "Khenyshi's GitHub profile: https://github.com/khenisawsomeza";
      } else if (lastMessage.includes("linkedin")) {
        response = "Khenyshi's LinkedIn: https://www.linkedin.com/in/khenyshi-hinlog-27269539b/";
      } else {
        response =
          "You can contact Khenyshi through:\n\n• **Email:** hinlogkhenyshi@gmail.com\n• **GitHub:** https://github.com/khenisawsomeza\n• **LinkedIn:** https://www.linkedin.com/in/khenyshi-hinlog-27269539b/\n\nCheck the Contact section for all the links!";
      }
    }
    // Philosophy/Approach questions
    else if (
      lastMessage.includes("philosophy") ||
      lastMessage.includes("approach") ||
      lastMessage.includes("mindset") ||
      lastMessage.includes("values")
    ) {
      response =
        "Khenyshi's approach to software development:\n\n• **Performance-first builds** - Focus on speed and efficiency\n• **Systems thinking** - Understanding the bigger picture\n• **Growth mindset** - Continuous learning and improvement\n• **Clean, scalable systems** - Building maintainable code\n• **Balance of speed, quality, and maintainability** - Not sacrificing one for another\n• **Design empathy and accessibility** - User-focused development\n• **Performance budgets and tight feedback loops** - Data-driven decisions";
    }
    // Greetings
    else if (
      lastMessage.includes("hello") ||
      lastMessage.includes("hi") ||
      lastMessage.includes("hey") ||
      lastMessage.includes("greetings")
    ) {
      response =
        "Hello! I'm here to help answer questions about Khenyshi's portfolio. Feel free to ask about their skills, experience, projects, certificates, education, contact information, or anything else!";
    }
    // Help/What can you do
    else if (
      lastMessage.includes("help") ||
      lastMessage.includes("what can you") ||
      lastMessage.includes("what do you") ||
      lastMessage.includes("what questions")
    ) {
      response =
        "I can help answer questions about:\n\n• Khenyshi's background and about section\n• Technical skills and tech stack (languages, frameworks, tools)\n• Specific projects (Project Launchpad, Insight Dashboard, Studio CMS)\n• Work experience (Software Tester at Blackbox.ai)\n• Education (BS Computer Science at Ateneo de Davao University)\n• Certificates (React, OpenxAI, Responsive Web Design)\n• Contact information (email, GitHub, LinkedIn)\n• Development philosophy and approach\n\nJust ask me anything!";
    }
    // Default response
    else {
      response =
        "That's a great question! I can help with information about Khenyshi's skills, experience, projects, certificates, education, or contact details. For more specific information, you can also check out the relevant sections above or reach out directly via email at hinlogkhenyshi@gmail.com. What would you like to know?";
    }

    return NextResponse.json({ message: response });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      {
        message:
          "I'm having trouble processing that. Please try again or reach out via email at hinlogkhenyshi@gmail.com!",
      },
      { status: 500 }
    );
  }
}
