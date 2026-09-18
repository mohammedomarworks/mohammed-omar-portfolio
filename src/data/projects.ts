import { Project } from "@/types/portfolio";

/**
 * =====================================================================
 * FEATURED PROJECTS DATA
 * =====================================================================
 * Edit your projects, descriptions, tags, and URLs in this file.
 * Any update here will automatically reflect in the Projects section.
 */

export const projectsData: Project[] = [
  {
    id: "marketbridge",
    title: "MarketBridge — DIU Student Hub",
    description:
      "A peer-to-peer campus marketplace concept designed for verified Daffodil International University students to exchange textbooks, electronics, and hostel essentials.",
    highlight: "Campus verification and escrow transaction model.",
    featured: true,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/mohammedomarworks", // <-- PLACEHOLDER: Links to GitHub profile. Update with specific repo URL when published.
    liveUrl: "", // <-- PLACEHOLDER: Add live demo URL when deployed
    category: "Campus Platform",
  },
  {
    id: "studyflow",
    title: "StudyFlow",
    description:
      "A responsive study planner and task management web app featuring coursework sprint tracking, calendar planning, notes, and local storage persistence.",
    featured: false,
    techStack: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    githubUrl: "https://github.com/mohammedomarworks/StudyFlow",
    liveUrl: "", // <-- PLACEHOLDER: Add live demo URL when deployed
    category: "Productivity",
  },
  {
    id: "brewpos",
    title: "BrewPOS",
    description:
      "A point-of-sale web application designed for café and small business workflows, streamlining order tracking, item management, and checkout tallying.",
    featured: false,
    techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/mohammedomarworks/BrewPOS",
    liveUrl: "", // <-- PLACEHOLDER: Add live demo URL when deployed
    category: "Business System",
  },
  {
    id: "sidraessentials",
    title: "SidraEssentials",
    description:
      "An e-commerce bag store interface featuring product catalog filtering, interactive cart management, responsive item showcases, and a checkout layout.",
    featured: false,
    techStack: ["React", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/mohammedomarworks", // <-- PLACEHOLDER: Links to GitHub profile. Update with specific repo URL when published.
    liveUrl: "", // <-- PLACEHOLDER: Add live demo URL when deployed
    category: "E-Commerce",
  },
];
