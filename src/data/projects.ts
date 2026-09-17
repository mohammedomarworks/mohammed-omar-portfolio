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
      "A peer-to-peer campus marketplace concept designed for verified DIU students to buy and sell items such as textbooks, calculators, electronics, and hostel-related items.",
    highlight: "Escrow-based transaction flow with campus handover verification.",
    featured: true,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Escrow Concept", "Verification Flow"],
    githubUrl: "https://github.com/mohammedomarworks/marketbridge", // <-- Replace with your repository link
    liveUrl: "#", // <-- Replace with your live demo URL when ready
    category: "Campus Platform",
  },
  {
    id: "studyflow",
    title: "StudyFlow",
    description:
      "A student productivity web application focused on tasks, planning, and organizing academic work with a distraction-free interface.",
    featured: false,
    techStack: ["React", "TypeScript", "Tailwind CSS", "Productivity System", "Client Storage"],
    githubUrl: "https://github.com/mohammedomarworks/studyflow", // <-- Replace with your repository link
    liveUrl: "#", // <-- Replace with your live demo URL when ready
    category: "Productivity",
  },
  {
    id: "brewpos",
    title: "BrewPOS",
    description:
      "A point-of-sale web application concept designed around café and small business workflows, streamlining order tracking and item management.",
    featured: false,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Workflow Architecture", "State Management"],
    githubUrl: "https://github.com/mohammedomarworks/brewpos", // <-- Replace with your repository link
    liveUrl: "#", // <-- Replace with your live demo URL when ready
    category: "Business System",
  },
  {
    id: "birthday-animation",
    title: "Interactive Birthday Animation",
    description:
      "A browser-based interactive animation experiment combining creative visuals, smooth timing curves, and JavaScript-driven motion effects.",
    featured: false,
    techStack: ["JavaScript", "CSS Animation", "Canvas / DOM Motion", "Interactive UI"],
    githubUrl: "https://github.com/mohammedomarworks/birthday-animation", // <-- Replace with your repository link
    liveUrl: "#", // <-- Replace with your live demo URL when ready
    category: "Creative & Motion",
  },
];
