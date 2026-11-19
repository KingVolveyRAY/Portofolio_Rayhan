export type Language = 'id' | 'en';

export interface LocalizedString {
  id: string;
  en: string;
}

export interface LocalizedList {
  id: string[];
  en: string[];
}

export interface ProjectMetric {
  label: LocalizedString;
  value: string;
}

export interface TechDecision {
  tech: string;
  reason: LocalizedString;
}

export interface ProjectChallenge {
  problem: LocalizedString;
  solution: LocalizedString;
}

export interface ProjectCaseStudy {
  context: LocalizedString;
  roleDetail: LocalizedString;
  features: LocalizedList;
  architecture: {
    description: LocalizedString;
    techDecisions: TechDecision[];
  };
  challenges: ProjectChallenge[];
  results: LocalizedString;
  metrics?: ProjectMetric[];
}

export interface Project {
  slug: string;
  title: LocalizedString;
  summary: LocalizedString;
  category: 'IoT & Web' | 'IoT' | 'Web App' | 'Backend';
  stack: string[];
  role: LocalizedString;
  status: 'completed' | 'in-progress' | 'prototype';
  featured: boolean;
  featuredOrder?: number;
  repoUrl: string;
  demoUrl?: string;
  coverImage: string;
  caseStudy: ProjectCaseStudy;
}

export interface SkillItem {
  name: string;
  level: string;
  linkedProjectSlugs?: string[];
}

export interface SkillGroup {
  id: string;
  name: LocalizedString;
  icon: string;
  description: LocalizedString;
  skills: SkillItem[];
}

export interface TimelineItem {
  id: string;
  role: LocalizedString;
  institution: string;
  period: LocalizedString;
  type: 'work' | 'leadership' | 'education' | 'certificate';
  description: LocalizedString;
  achievements?: LocalizedList;
  tags?: string[];
}

export interface ServiceItem {
  id: string;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  deliverables: LocalizedList;
  techStack: string[];
  icon: string;
}

export interface WorkflowStep {
  step: number;
  title: LocalizedString;
  description: LocalizedString;
}
