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
    id: "sidraessentials",
    title: "Sidra Essentials",
    description:
      "A client e-commerce storefront website built with Next.js, TypeScript, and Tailwind CSS, featuring product catalog browsing, responsive navigation, and streamlined order checkout.",
    highlight: "Client storefront project delivering product catalog browsing, responsive cart, and modern web interface design.",
    featured: true,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/mohammedomarworks", // <-- PLACEHOLDER: Replace with specific repository URL when published
    liveUrl: "https://sidraessentials.vercel.app/",
    liveButtonLabel: "Visit Website",
    category: "Client Project",
  },
  {
    id: "studyflow",
    title: "StudyFlow",
    description:
      "A responsive study planner and task management web app featuring coursework sprint tracking, calendar planning, notes, and local storage persistence.",
    featured: false,
    techStack: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    githubUrl: "https://github.com/mohammedomarworks/StudyFlow",
    liveUrl: "https://mohammedomarworks.github.io/StudyFlow/",
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
    id: "marketbridge",
    title: "MarketBridge — DIU Student Hub",
    description:
      "A peer-to-peer campus marketplace concept designed for verified Daffodil International University students to exchange textbooks, electronics, and hostel essentials.",
    highlight: "Campus verification and escrow transaction model.",
    featured: false,
    techStack: ["Next.js", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/mohammedomarworks", // <-- PLACEHOLDER: Replace with specific repository URL when published
    liveUrl: "https://marketbridge-student-etsluiej1-sadid-ahmeds-projects-8f65bec3.vercel.app/",
    category: "Campus Platform",
  },
];
