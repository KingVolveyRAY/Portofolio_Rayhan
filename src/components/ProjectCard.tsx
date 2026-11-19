import React from 'react';
import Link from 'next/link';
import { Project, Language } from '@/types';
import { githubSnapshot } from '@/data/github-snapshot';
import { translations } from '@/lib/translations';
import { ExternalLink, ArrowRight, Cpu, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

interface ProjectCardProps {
  project: Project;
  lang: Language;
}

export function ProjectCard({ project, lang }: ProjectCardProps) {
  const t = translations.featured;
  const snapshot = githubSnapshot[project.slug];

  return (
    <article className="h-full relative overflow-hidden glass-panel rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 group">
      {/* Top Border Cyber Accent on Hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Top Header: Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25">
            <Cpu className="w-3 h-3" />
            <span>{project.category}</span>
          </span>

          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-md border border-emerald-500/25">
            <CheckCircle2 className="w-3 h-3" />
            <span>{project.status === 'completed' ? (lang === 'id' ? 'Selesai' : 'Completed') : project.status}</span>
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-2">
          <Link href={`/${lang}/proyek/${project.slug}`} className="focus:outline-none focus-visible:underline">
            {project.title[lang]}
          </Link>
        </h3>

        {/* Project Summary */}
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-5 leading-relaxed">
          {project.summary[lang]}
        </p>

        {/* Technology Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800/70 text-slate-800 dark:text-slate-300 border border-slate-300/80 dark:border-slate-700/60"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-200/50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400">
              +{project.stack.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Footer Actions & GitHub info */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800/70 flex items-center justify-between gap-3">
        <Link
          href={`/${lang}/proyek/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-500 dark:hover:text-orange-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded p-0.5"
        >
          <span>{t.readCaseStudy[lang]}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>

        <div className="flex items-center gap-2">
          {snapshot && (
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono hidden sm:inline-block">
              ★ {snapshot.stars}
            </span>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label={`${project.title[lang]} GitHub repository`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
