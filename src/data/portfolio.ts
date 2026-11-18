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

  // Editorial Bio (Two-Column Architectural Narrative)
  bio: [
    "I'm Mohammed Omar, a Software Engineering student at Daffodil International University.",
    "I learn by building practical projects across native systems engineering, computer graphics, and distributed web platforms.",
  ],

  editorialBio: {
    column1: [
      "I am an undergraduate Software Engineering student at Daffodil International University, focused on systems programming, real-time spatial graphics, and robust web applications.",
      "My engineering philosophy centers on building from first principles. Rather than relying on boilerplate abstractions, I explore the mechanics under the hood—from native AppKit window servers and CoreML acoustic keyword detectors in Swift, to Keplerian trajectory solvers in Godot and WebGL.",
    ],
    column2: [
      "I treat frontend, backend, and native desktop systems as unified engineering disciplines. Every interface requires predictable state, low latency, clean memory boundaries, and accessible human ergonomics.",
      "Current technical investigations include Metal compute shaders, real-time orbital telemetry synchronization, on-device audio feature extraction, and high-concurrency PostgreSQL data modeling.",
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

  // Currently Learning (Active Engineering Research Log)
  currentlyLearning: [
    {
      title: "Native macOS AppKit & Metal Shaders",
      description: "Investigating low-level window composition, Metal compute pipelines, and hardware-accelerated dynamic viewport widgets.",
      status: "Benchwork",
      tags: ["Swift", "Metal", "AppKit", "macOS SDK"],
    },
    {
      title: "3D Spatial Mechanics & Orbital Solvers",
      description: "Modeling n-body gravitational perturbations, Keplerian orbital vectors, and WebGL shader pipelines in Godot and Three.js.",
      status: "Active Research",
      tags: ["Godot", "Three.js", "GLSL", "Physics"],
    },
    {
      title: "Edge Audio DSP & Keyword Spotting",
      description: "Implementing real-time mel-spectrogram transformation pipelines and sub-15ms CoreML acoustic neural inference models.",
      status: "Prototyping",
      tags: ["CoreML", "AudioKit", "DSP", "Python"],
    },
    {
      title: "Distributed Data Modeling & Concurrency",
      description: "Deepening transaction isolation guarantees, PostgreSQL query plan optimization, and lock-free async pipelines.",
      status: "Studies",
      tags: ["PostgreSQL", "Systems", "Concurrency", "DSA"],
    },
  ],

  // Featured Projects
  projects: projectsData,
};
