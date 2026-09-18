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
    "I'm Mohammed Omar, a Software Engineering student at Daffodil International University.",
    "I learn by building practical projects and exploring web development, software engineering, animation, and 3D development.",
  ],

  // Personal Details Area
  personalDetails: {
    name: "Mohammed Omar",
    dateOfBirth: "9 November, 2003",
    phone: "+8801833799480",
    email: "mohammedomarworks@gmail.com",
    university: "Daffodil International University",
    field: "Software Engineering",
  },

  interests: [
    "Web Development",
    "Software Engineering",
    "Animation & Motion",
    "3D Development (Blender)",
  ],

  // Direct Contact Details
  email: "mohammedomarworks@gmail.com",

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/mohammedomarworks",
      label: "Mohammed Omar on GitHub",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/omar-mohammed-2118b5428/",
      label: "Mohammed Omar on LinkedIn",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:mohammedomarworks@gmail.com",
      label: "Send an Email to Mohammed Omar",
      icon: "mail",
    },
  ],

  // Education Details (Chronological academic timeline)
  education: [
    {
      id: "diu",
      institution: "Daffodil International University",
      program: "Software Engineering",
      degree: "B.Sc. in Software Engineering",
      level: "Undergraduate",
      status: "Current Student",
      location: "Dhaka, Bangladesh",
      highlights: [
        "Core coursework in Data Structures, Algorithms, and Software Engineering methodologies",
        "Practical software development and engineering projects",
      ],
    },
    {
      id: "gimc",
      institution: "Giasuddin Islamic Model College",
      program: "Higher Secondary Certificate (HSC)",
      level: "HSC",
      year: "2022",
      gpa: "4.83 / 5.00",
      status: "Completed (2022)",
      location: "Narayanganj, Bangladesh",
    },
    {
      id: "risc",
      institution: "Rafiqul Islam School & College",
      program: "Secondary School Certificate (SSC)",
      level: "SSC",
      year: "2020",
      gpa: "4.44 / 5.00",
      status: "Completed (2020)",
      location: "Dhaka, Bangladesh",
    },
  ],

  // Skills Categories (6 distinct groups)
  skillCategories: [
    {
      title: "Programming Languages",
      description: "Core languages for software logic and scripting.",
      skills: [
        { name: "C" },
        { name: "JavaScript" },
      ],
    },
    {
      title: "Core Computer Science",
      description: "Theoretical foundations and algorithmic problem solving.",
      skills: [
        { name: "Data Structures & Algorithms (DSA)" },
        { name: "Object-Oriented Programming (OOP)" },
      ],
    },
    {
      title: "Database",
      description: "Relational data structuring and structured querying.",
      skills: [
        { name: "SQL" },
      ],
    },
    {
      title: "Web Development",
      description: "Building responsive, modern user interfaces.",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      title: "Tools",
      description: "Version control, developer environments, and collaboration.",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
      ],
    },
    {
      title: "Creative / 3D",
      description: "Visual modeling, animation, and motion experiments.",
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
