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
    <article className="glass-panel rounded-2xl overflow-hidden p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl group">
      <div>
        {/* Top Header: Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Cpu className="w-3 h-3" />
            <span>{project.category}</span>
          </span>

          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3" />
            <span>{project.status === 'completed' ? (lang === 'id' ? 'Selesai' : 'Completed') : project.status}</span>
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-orange-400 transition-colors mb-2">
          <Link href={`/${lang}/proyek/${project.slug}`} className="focus:outline-none focus-visible:underline">
            {project.title[lang]}
          </Link>
        </h3>

        {/* Project Summary */}
        <p className="text-sm text-slate-400 line-clamp-3 mb-5 leading-relaxed">
          {project.summary[lang]}
        </p>

        {/* Technology Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/60"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-800/40 text-slate-400">
              +{project.stack.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Footer Actions & GitHub info */}
      <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between gap-3">
        <Link
          href={`/${lang}/proyek/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded p-0.5"
        >
          <span>{t.readCaseStudy[lang]}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>

        <div className="flex items-center gap-2">
          {snapshot && (
            <span className="text-[11px] text-slate-400 font-mono hidden sm:inline-block">
              ★ {snapshot.stars}
            </span>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label={`${project.title[lang]} GitHub repository`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
