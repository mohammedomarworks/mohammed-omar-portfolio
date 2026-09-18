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
  tagline: "I build practical software projects while exploring web development, animation, and 3D development.",

  // About Section Content
  bio: [
    "I'm Mohammed Omar, a Software Engineering student at Daffodil International University. I learn by building practical projects and experimenting with web development, software engineering, animation, and 3D development.",
    "My engineering focus is on understanding core computer science principles and applying them by building practical software applications. Alongside core software engineering, I explore web animation and 3D modeling with Blender, caring about writing maintainable code and building interfaces that feel responsive and well-crafted.",
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

  // Skills Categories (3 clean groups as requested)
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
      title: "Tools",
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

  // Currently Learning (Continuous student skill development)
  currentlyLearning: [
    "Web Development",
    "Animation",
    "3D Development",
    "Software Engineering",
  ],

  // Featured Projects (Imported from dedicated projects.ts)
  projects: projectsData,
};
