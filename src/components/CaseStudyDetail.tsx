import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Language } from '@/types';
import { projects } from '@/data/projects';
import { getRepoData } from '@/lib/github';
import { translations } from '@/lib/translations';
import { GithubIcon } from '@/components/Icons';
import {
  ArrowLeft,
  ExternalLink,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Check,
} from 'lucide-react';

interface CaseStudyDetailProps {
  slug: string;
  lang: Language;
}

export async function CaseStudyDetail({ slug, lang }: CaseStudyDetailProps) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const t = translations.caseStudy;
  const cs = project.caseStudy;
  const repoData = await getRepoData(project.slug);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Back Link */}
      <div>
        <Link
          href={`/${lang}/proyek`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors group p-1"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>{t.back[lang]}</span>
        </Link>
      </div>

      {/* Header Banner */}
      <header className="space-y-4 border-b border-slate-800 pb-8">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </span>

          <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t.completedBadge[lang]}</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          {project.title[lang]}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          {project.summary[lang]}
        </p>

        {/* Meta Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/60 text-xs">
          <div>
            <span className="text-slate-500 block uppercase font-mono text-[10px]">{t.roleLabel[lang]}</span>
            <span className="font-semibold text-slate-200">{project.role[lang]}</span>
          </div>
          <div>
            <span className="text-slate-500 block uppercase font-mono text-[10px]">{t.categoryLabel[lang]}</span>
            <span className="font-semibold text-slate-200">{project.category}</span>
          </div>
          <div>
            <span className="text-slate-500 block uppercase font-mono text-[10px]">{t.statusLabel[lang]}</span>
            <span className="font-semibold text-emerald-400">Production Ready</span>
          </div>
          <div>
            <span className="text-slate-500 block uppercase font-mono text-[10px]">GitHub Status</span>
            <span className="font-mono text-slate-300">
              ★ {repoData?.stars ?? 0} • {repoData?.language || 'Hardware/Code'}
            </span>
          </div>
        </div>
      </header>

      {/* Action Buttons (External Links) */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        >
          <GithubIcon className="w-4 h-4 text-slate-300" />
          <span>Lihat Repositori Kode (GitHub)</span>
          <ExternalLink className="w-3 h-3 text-slate-500" />
        </a>

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 border border-orange-500/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <span>Buka Dokumentasi & Demo</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Case Study Sections (PRD Section 10) */}
      <div className="space-y-10 text-sm sm:text-base leading-relaxed text-slate-300">
        {/* 1. Context & Problem */}
        <section className="glass-panel p-6 sm:p-8 rounded-2xl space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            <span>{t.contextTitle[lang]}</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">{cs.context[lang]}</p>
        </section>

        {/* 2. Rayhan's Role */}
        <section className="glass-panel p-6 sm:p-8 rounded-2xl space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>{t.roleTitle[lang]}</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">{cs.roleDetail[lang]}</p>
        </section>

        {/* 3. Key Features & Solution */}
        <section className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>{t.featuresTitle[lang]}</span>
          </h2>
          <ul className="space-y-2.5">
            {cs.features[lang].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Architecture & Technical Decisions */}
        <section className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>{t.architectureTitle[lang]}</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">{cs.architecture.description[lang]}</p>

          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
              {lang === 'id' ? 'Alasan Pemilihan Komponen Teknis:' : 'Rationale Behind Technical Choices:'}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {cs.architecture.techDecisions.map((td) => (
                <div key={td.tech} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="font-semibold text-xs text-orange-400 font-mono block mb-1">
                    {td.tech}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">{td.reason[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Technical Challenges & Overcoming Them */}
        <section className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>{t.challengesTitle[lang]}</span>
          </h2>
          <div className="space-y-4">
            {cs.challenges.map((challenge, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-start gap-2 text-xs font-semibold text-amber-300">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{lang === 'id' ? 'Tantangan:' : 'Challenge:'} {challenge.problem[lang]}</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300 pl-5">
                  <Lightbulb className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{lang === 'id' ? 'Solusi:' : 'Solution:'} {challenge.solution[lang]}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Results & Metrics */}
        <section className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>{t.resultsTitle[lang]}</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">{cs.results[lang]}</p>

          {cs.metrics && cs.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {cs.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-orange-400 font-mono block">
                    {m.value}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    {m.label[lang]}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 7. Technology Stack Badges */}
        <section className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>{t.stackTitle[lang]}</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-700/80 text-slate-200 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Back Button */}
      <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
        <Link
          href={`/${lang}/proyek`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors group p-2"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>{t.back[lang]}</span>
        </Link>
      </div>
    </article>
  );
}
