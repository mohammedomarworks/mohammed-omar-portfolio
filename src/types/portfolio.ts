export interface Project {
  id: string;
  title: string;
  description: string;
  highlight?: string;
  featured?: boolean;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  liveButtonLabel?: string;
  image?: string;
  category?: string;
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
  year?: string;
  gpa?: string;
  status: string;
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
