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
  type?: "client" | "personal" | "academic" | string;
  typeLabel?: string;
  category?: string;
  highlight?: string;
}

export interface SkillItem {
  name: string;
  note?: string;
}

export interface SkillCategory {
  title: string;
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

export interface PersonalDetails {
  name: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  university: string;
  field: string;
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
  tagline: string;
  bio: string[];
  interests: string[];
  email: string;
  personalDetails: PersonalDetails;
  socialLinks: SocialLink[];
  education: EducationItem[];
  skillCategories: SkillCategory[];
  currentlyLearning: string[];
  projects: Project[];
}
