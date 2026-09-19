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
      "A client e-commerce storefront website featuring product catalog browsing, responsive navigation, and streamlined order checkout.",
    image: "/images/projects/sidra-essentials.png",
    imageAlt: "Sidra Essentials ecommerce website",
    featured: true,
    type: "client",
    typeLabel: "Client Project",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/mohammedomarworks",
    githubUrl: "https://github.com/mohammedomarworks",
    website: "https://sidraessentials.vercel.app/",
    liveUrl: "https://sidraessentials.vercel.app/",
    liveButtonLabel: "Visit Website",
    category: "Client Project",
  },
  {
    id: "studyflow",
    title: "StudyFlow",
    description:
      "A responsive study planner and task management web app featuring coursework sprint tracking, calendar planning, notes, and local storage persistence.",
    image: "/images/projects/studyflow.png",
    imageAlt: "StudyFlow student productivity interface",
    featured: false,
    type: "personal",
    typeLabel: "Productivity",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    techStack: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    github: "https://github.com/mohammedomarworks/StudyFlow",
    githubUrl: "https://github.com/mohammedomarworks/StudyFlow",
    website: "https://mohammedomarworks.github.io/StudyFlow/",
    liveUrl: "https://mohammedomarworks.github.io/StudyFlow/",
    liveButtonLabel: "Visit Website",
    category: "Productivity",
  },
  {
    id: "brewpos",
    title: "BrewPOS",
    description:
      "A point-of-sale web application designed for café and small business workflows, streamlining order tracking, item management, and checkout tallying.",
    image: "/images/projects/brewpos.png",
    imageAlt: "BrewPOS point of sale interface",
    featured: false,
    type: "personal",
    typeLabel: "Business System",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/mohammedomarworks/BrewPOS",
    githubUrl: "https://github.com/mohammedomarworks/BrewPOS",
    website: "",
    liveUrl: "",
    category: "Business System",
  },
  {
    id: "marketbridge",
    title: "MarketBridge — DIU Student Hub",
    description:
      "A peer-to-peer campus marketplace concept designed for verified Daffodil International University students to exchange textbooks, electronics, and hostel essentials.",
    image: "/images/projects/marketbridge.png",
    imageAlt: "MarketBridge student marketplace interface",
    featured: false,
    type: "academic",
    typeLabel: "Campus Platform",
    technologies: ["JavaScript", "Next.js", "Tailwind CSS"],
    techStack: ["JavaScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/mohammedomarworks",
    githubUrl: "https://github.com/mohammedomarworks",
    website: "https://marketbridge-student-etsluiej1-sadid-ahmeds-projects-8f65bec3.vercel.app/",
    liveUrl: "https://marketbridge-student-etsluiej1-sadid-ahmeds-projects-8f65bec3.vercel.app/",
    liveButtonLabel: "Visit Website",
    category: "Campus Platform",
  },
];
