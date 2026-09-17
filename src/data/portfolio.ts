import { SiteData } from "@/types/portfolio";
import { projectsData } from "@/data/projects";

/**
 * =====================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =====================================================================
 * Personal information, skills, and configuration for Mohammed Omar.
 */

export const portfolioData: SiteData = {
  // Personal Details
  name: "Mohammed Omar",
  title: "Software Engineering Student",
  university: "Daffodil International University",
  tagline: "Building practical software, experimenting with creative technology, and learning through real projects.",

  // About Section Content
  bio: [
    "I am a Software Engineering student at Daffodil International University with a focus on building practical, dependable software applications. Rather than just studying theory, I prioritize learning by building real projects from scratch.",
    "My engineering interests span modern web development, software engineering principles, and creative technologies including UI animation and 3D development with Blender. I am constantly working to strengthen my foundations and write cleaner, more maintainable code.",
  ],

  interests: [
    "Web Development",
    "Software Engineering",
    "Animation & Motion",
    "3D Development (Blender)",
  ],

  // Direct Contact Details
  // Replace these placeholders with your active profiles
  email: "your.email@example.com", // <-- PLACEHOLDER: Replace with your actual email

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/mohammedomarworks", // Verified active profile
      label: "Mohammed Omar on GitHub",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername", // <-- PLACEHOLDER: Replace with your LinkedIn URL
      label: "Mohammed Omar on LinkedIn",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com", // <-- PLACEHOLDER: Replace with your email link
      label: "Send an Email to Mohammed Omar",
      icon: "mail",
    },
  ],

  // Education Details (Strictly factual, no invented dates or metrics)
  education: {
    institution: "Daffodil International University",
    degree: "Software Engineering",
    department: "Department of Software Engineering",
    status: "Current Student",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Core coursework in software engineering methodologies, data structures, and algorithms",
      "Practical project work developing functional web applications and student workflows",
      "Collaborative teamwork and problem solving within campus engineering labs",
    ],
  },

  // Skills Categories (Requested 3 clean categories)
  skillCategories: [
    {
      title: "Frontend",
      description: "Building responsive, modern, and accessible user interfaces.",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      title: "Development & Tools",
      description: "Core version control, editor tooling, and development workflow.",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
      ],
    },
    {
      title: "Creative / 3D",
      description: "Visual experiments, spatial models, and interactive animation.",
      skills: [
        { name: "Blender" },
        { name: "Animation" },
      ],
    },
  ],

  // Featured Projects (Imported from dedicated projects.ts)
  projects: projectsData,
};
