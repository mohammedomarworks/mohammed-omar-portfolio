import { SiteData } from "@/types/portfolio";

/**
 * =====================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =====================================================================
 * Welcome, Mohammed Omar!
 * Edit your links, projects, skills, and details directly in this file.
 * Any update here will automatically reflect across the entire site.
 */

export const portfolioData: SiteData = {
  // Personal Details
  name: "Mohammed Omar",
  title: "Software Engineering Student",
  university: "Daffodil International University",
  tagline: "Software Engineering student focused on building practical, reliable web applications and learning through hands-on projects.",

  // About Section Content
  bio: [
    "I am a Software Engineering student at Daffodil International University with a strong enthusiasm for crafting purposeful software solutions. My journey in technology centers on understanding how systems work from the ground up, transforming problem statements into clean code, and continually improving my engineering practices.",
    "I focus on modern web development, software architecture, interactive animations, and exploring 3D graphics on the web. I enjoy turning complex student and business workflows into intuitive, functional applications.",
  ],

  interests: [
    "Web Development & Systems Architecture",
    "Interactive UI Motion & Animation",
    "3D Development & Modeling Basics",
    "Developer Tooling & Problem Solving",
  ],

  // Direct Contact Details
  // Replace these placeholders with your active profiles
  email: "omar.swe.diu@example.com", // <-- REPLACE WITH YOUR REAL EMAIL

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername", // <-- REPLACE WITH YOUR GITHUB PROFILE
      label: "Mohammed Omar on GitHub",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername", // <-- REPLACE WITH YOUR LINKEDIN PROFILE
      label: "Mohammed Omar on LinkedIn",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:omar.swe.diu@example.com", // <-- REPLACE WITH YOUR EMAIL LINK
      label: "Send an Email to Mohammed Omar",
      icon: "mail",
    },
  ],

  // Education Details
  education: {
    institution: "Daffodil International University",
    degree: "Bachelor of Science in Software Engineering",
    department: "Department of Software Engineering",
    status: "Undergraduate Student",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Core focus on Software Engineering Fundamentals, Object-Oriented Design, and Software Architecture",
      "Hands-on project work developing student-centric web applications and system workflows",
      "Active participant in campus academic problem solving and collaborative development",
    ],
  },

  // Categorized Skills (Structured for easy modification)
  skillCategories: [
    {
      title: "Frontend",
      description: "Building responsive, modern, and accessible user interfaces.",
      skills: [
        { name: "HTML5 / CSS3" },
        { name: "JavaScript (ES6+)" },
        { name: "TypeScript" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Responsive UI Design" },
      ],
    },
    {
      title: "Programming / Development",
      description: "Core languages and software design principles.",
      skills: [
        { name: "C / C++" },
        { name: "Java" },
        { name: "Python" },
        { name: "Object-Oriented Programming (OOP)" },
        { name: "Data Structures & Algorithms" },
        { name: "REST API Integration" },
      ],
    },
    {
      title: "Tools & Environment",
      description: "Essential developer tooling and version control.",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "Postman" },
        { name: "Linux / Bash Basics" },
        { name: "npm / package management" },
      ],
    },
    {
      title: "Creative / 3D",
      description: "Animation, interactive styling, and 3D exploration.",
      skills: [
        { name: "Blender (3D Modeling Basics)" },
        { name: "CSS Animation & Transitions" },
        { name: "UI Micro-interactions" },
        { name: "SVG Design & Vector Graphics" },
      ],
    },
  ],

  // Featured Projects
  // Replace the placeholder URLs with your actual repository and deployment links
  projects: [
    {
      id: "marketbridge",
      title: "MarketBridge — DIU Student Hub",
      description: "A peer-to-peer campus marketplace concept engineered for verified Daffodil International University students to exchange study resources, electronics, and academic essentials safely.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Authentication", "REST API"],
      githubUrl: "https://github.com/yourusername/marketbridge", // <-- REPLACE WITH YOUR GITHUB REPO
      liveUrl: "https://marketbridge-diu.example.com", // <-- REPLACE WITH YOUR LIVE DEMO (OR "#")
      category: "Campus Platform",
    },
    {
      id: "studyflow",
      title: "StudyFlow",
      description: "A student productivity and task-management web project designed to structure study sprints, track course deadlines, and organize academic commitments with minimal distraction.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "State Management", "LocalStorage API"],
      githubUrl: "https://github.com/yourusername/studyflow", // <-- REPLACE WITH YOUR GITHUB REPO
      liveUrl: "https://studyflow-app.example.com", // <-- REPLACE WITH YOUR LIVE DEMO (OR "#")
      category: "Productivity",
    },
    {
      id: "brewpos",
      title: "BrewPOS",
      description: "A streamlined point-of-sale project built for café and small business workflows, handling order processing, inventory status, and receipt summaries through a clean UI.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Component Architecture"],
      githubUrl: "https://github.com/yourusername/brewpos", // <-- REPLACE WITH YOUR GITHUB REPO
      liveUrl: "https://brewpos.example.com", // <-- REPLACE WITH YOUR LIVE DEMO (OR "#")
      category: "Business System",
    },
    {
      id: "sidraessentials",
      title: "SidraEssentials",
      description: "A specialized e-commerce bag store website featuring product catalog filtering, interactive cart management, responsive image showcases, and a seamless checkout interface.",
      techStack: ["React", "Next.js", "Tailwind CSS", "E-Commerce UI", "Responsive Layout"],
      githubUrl: "https://github.com/yourusername/sidra-essentials", // <-- REPLACE WITH YOUR GITHUB REPO
      liveUrl: "https://sidra-essentials.example.com", // <-- REPLACE WITH YOUR LIVE DEMO (OR "#")
      category: "E-Commerce",
    },
  ],
};
