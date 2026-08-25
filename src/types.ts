export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Real-World Full Stack' | 'Full Stack & Security' | 'AI & Machine Learning' | 'Web & Backend';
  technologies: string[];
  description: string;
  keyHighlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  visualType: 'farm-management' | 'security' | 'machine-learning' | 'ticket-booking';
  stats?: { label: string; value: string }[];
  isFlagship?: boolean;
  myContribution?: string;
  badges?: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    description: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  location?: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage';
  description?: string;
  location?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  type: 'Internship' | 'Course' | 'Professional Certification' | 'Hackathon';
  skillsGained: string[];
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  url: string;
  stars: number;
  forks: number;
  updatedAt?: string;
  topics?: string[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'experience' | 'present';
  tag: string;
}
