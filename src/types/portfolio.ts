export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  technologies: string[];
  techStack?: string[];
  github?: string;
  githubUrl?: string;
  website?: string;
  liveUrl?: string;
  liveButtonLabel?: string;
  featured?: boolean;
  type?: "flagship" | "client" | "systems" | "simulation" | "academic" | "personal" | string;
  typeLabel?: string;
  category?: string;
  highlight?: string;
}

export interface SkillItem {
  name: string;
  level?: "Core" | "Advanced" | "Active";
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  categoryIndex: string;
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  institution: string;
  program?: string;
  degree?: string;
  level?: string;
  period?: string;
  year?: string;
  gpa?: string;
  status?: string;
  location?: string;
  highlights?: string[];
}

export interface QuickFacts {
  location: string;
  university: string;
  degree: string;
  focus: string;
}

export interface SocialLink {
  name: string;
  url: string;
  label: string;
  icon: "github" | "linkedin" | "mail";
}

export interface SiteData {
  name: string;
  title: string;
  university: string;
  headline: string;
  tagline: string;
  bio: string[];
  editorialBio: {
    column1: string[];
    column2: string[];
  };
  quickFacts: QuickFacts;
  interests: string[];
  email: string;
  socialLinks: SocialLink[];
  education: EducationItem[];
  skillCategories: SkillCategory[];
  currentlyLearning: {
    title: string;
    description: string;
    status: string;
    tags: string[];
  }[];
  projects: Project[];
}
