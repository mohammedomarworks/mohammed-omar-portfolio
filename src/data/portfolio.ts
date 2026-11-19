import { SiteData } from "@/types/portfolio";
import { projectsData } from "@/data/projects";

/**
 * =====================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =====================================================================
 * Engineering specification, background, and project registry for Mohammed Omar.
 */

export const portfolioData: SiteData = {
  // Identity & Headline
  name: "Mohammed Omar",
  title: "Software Engineering Student",
  university: "Daffodil International University",
  headline:
    "Software Engineering Student building native macOS systems, 3D simulations, and full-stack web apps.",
  tagline:
    "Software Engineering Student at Daffodil International University building native macOS systems, 3D simulations, and full-stack web apps.",

  // Editorial Bio (Two-Column Narrative)
  bio: [
    "I'm Mohammed Omar, a Software Engineering student at Daffodil International University.",
    "I build practical projects across native macOS development, 3D simulations, and full-stack web applications.",
  ],

  editorialBio: {
    column1: [
      "I am an undergraduate Software Engineering student at Daffodil International University with a passion for building native desktop tools, interactive 3D simulations, and modern web applications.",
      "I focus on hands-on software development across the stack—writing native macOS utilities with Swift, AppKit, and SwiftUI, creating cooperative 3D simulations in Godot and WebGL, and crafting responsive web apps with TypeScript and Next.js.",
    ],
    column2: [
      "My approach to engineering emphasizes clean project structure, thoughtful user experience, and practical problem-solving. I value writing maintainable code with clear boundaries and responsive interfaces.",
      "Currently expanding my knowledge in on-device CoreML integrations for voice triggers, real-time 3D physics and rendering in Godot, and relational database design with PostgreSQL.",
    ],
  },

  // Compact Quick Facts
  quickFacts: {
    location: "Dhaka, BD",
    university: "Daffodil International University, B.Sc. SWE",
    degree: "B.Sc. in Software Engineering",
    focus: "Full-Stack, 3D WebGL & Native Swift",
  },

  interests: [
    "Native macOS Systems (Swift / AppKit)",
    "3D Computer Graphics & Simulation (Godot / WebGL)",
    "Full-Stack Web Engineering (TypeScript / Next.js)",
    "On-Device Machine Intelligence (CoreML / Audio DSP)",
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
      degree: "B.Sc. in Software Engineering",
      period: "Fall 2024 – Summer 2028",
      status: "Current Student",
      location: "Dhaka, Bangladesh",
    },
    {
      id: "gimc",
      institution: "Giasuddin Islamic Model College",
      degree: "Higher Secondary Certificate (HSC)",
      year: "2022",
      gpa: "4.83 / 5.00",
      location: "Narayanganj, Bangladesh",
    },
    {
      id: "risc",
      institution: "Rafiqul Islam School & College",
      degree: "Secondary School Certificate (SSC)",
      year: "2020",
      gpa: "4.44 / 5.00",
      location: "Dhaka, Bangladesh",
    },
  ],

  // Skills Categories (Engineered Specification Structure)
  skillCategories: [
    {
      id: "native-systems",
      categoryIndex: "01",
      title: "Systems & Native Engineering",
      description: "Low-level system programming, memory-safe architectures, and native macOS desktop runtimes.",
      skills: [
        { name: "Swift", level: "Core" },
        { name: "C", level: "Core" },
        { name: "AppKit / SwiftUI", level: "Advanced" },
        { name: "Unix / POSIX Shell", level: "Core" },
      ],
    },
    {
      id: "graphics-3d",
      categoryIndex: "02",
      title: "3D Graphics & Simulation",
      description: "Real-time spatial rendering engines, orbital trajectory math, and interactive WebGL environments.",
      skills: [
        { name: "Godot Engine", level: "Core" },
        { name: "Three.js / React Three Fiber", level: "Core" },
        { name: "WebGL / GLSL Shaders", level: "Advanced" },
        { name: "Blender", level: "Active" },
      ],
    },
    {
      id: "web-frontend",
      categoryIndex: "03",
      title: "Frontend & Web Architecture",
      description: "Type-safe reactive client architecture, server components, and responsive interaction design.",
      skills: [
        { name: "TypeScript", level: "Core" },
        { name: "Next.js", level: "Core" },
        { name: "Tailwind CSS", level: "Core" },
        { name: "React", level: "Core" },
        { name: "HTML5 / Canvas API", level: "Core" },
      ],
    },
    {
      id: "backend-data",
      categoryIndex: "04",
      title: "Backend & Data Architecture",
      description: "Relational data modeling, schema indexing, and type-safe server APIs.",
      skills: [
        { name: "PostgreSQL", level: "Core" },
        { name: "Python", level: "Core" },
        { name: "SQL", level: "Core" },
        { name: "Data Structures & Algorithms (DSA)", level: "Core" },
        { name: "Object-Oriented Programming (OOP)", level: "Core" },
      ],
    },
    {
      id: "machine-intelligence",
      categoryIndex: "05",
      title: "Machine Intelligence & Audio DSP",
      description: "Edge neural network deployment, digital signal processing, and low-latency acoustic inference.",
      skills: [
        { name: "CoreML", level: "Core" },
        { name: "DSP Audio Feature Extraction", level: "Advanced" },
        { name: "PyTorch / ONNX Runtime", level: "Active" },
        { name: "Quantization & On-Device Inference", level: "Active" },
      ],
    },
    {
      id: "toolchain-infra",
      categoryIndex: "06",
      title: "Engineering Toolchain & DevOps",
      description: "Deterministic version control, automated build systems, and terminal development environments.",
      skills: [
        { name: "Git", level: "Core" },
        { name: "GitHub Workflows", level: "Core" },
        { name: "Docker", level: "Active" },
        { name: "VS Code / Xcode", level: "Core" },
      ],
    },
  ],

  // Currently Learning (Active Focus)
  currentlyLearning: [
    {
      title: "Native macOS Development",
      description: "AppKit, SwiftUI, custom floating window management, and CoreML voice command triggers.",
      status: "In Progress",
      tags: ["Swift", "SwiftUI", "AppKit", "CoreML"],
    },
    {
      title: "3D Game & WebGL Development",
      description: "Godot Engine physics, scene lighting, spatial asset design, and browser WebGL optimization.",
      status: "In Progress",
      tags: ["Godot Engine", "GDScript", "WebGL", "Three.js"],
    },
    {
      title: "Full-Stack Web Architecture",
      description: "Next.js, TypeScript, responsive client design, REST APIs, and PostgreSQL schema design.",
      status: "In Progress",
      tags: ["Next.js", "TypeScript", "REST APIs", "PostgreSQL"],
    },
    {
      title: "Software Engineering Fundamentals",
      description: "Object-oriented design patterns, automated QA and testing workflows, and algorithmic data structures.",
      status: "In Progress",
      tags: ["Design Patterns", "Testing", "DSA", "Git"],
    },
  ],

  // Featured Projects
  projects: projectsData,
};
