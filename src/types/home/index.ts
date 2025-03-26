import { IconType } from 'react-icons';

export interface ISkillWithCategory {
  category: string;
  skills: ISkill[];
}

export interface ISkill {
  name: string;
  icon: React.ComponentType;
  color: string;
}

export interface IExperience {
  company: string;
  period: string;
  role: string;
  description: React.ReactNode;
  projects: string[];
}

export interface IProject {
  id: string;
  name: string;
  period: string;
  description: string;
  link: string;
  media: IProjectMedia[];
  techStack: string[];
  achievements: React.ReactNode;
  summary: string[];
  background: string[];
  meaning: { title?: string; description: string[] }[];
  contributionPercentage: string;
  technicalContributions: string[];
}

export interface IProjectMedia {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
}

export interface ILearn {
  title: string;
  period: string;
  type: string;
  description: string;
  url: string;
  operations: string[];
}

export interface IContact {
  icon: IconType;
  label: string;
  value: string;
  href: string;
}
