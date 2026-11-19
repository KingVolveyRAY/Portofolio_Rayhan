import React from 'react';
import { notFound } from 'next/navigation';
import { Language } from '@/types';
import { projects } from '@/data/projects';
import { ProjectFilter } from '@/components/ProjectFilter';
import { translations } from '@/lib/translations';
import { Layers } from 'lucide-react';

interface ProjectsPageProps {
  params: Promise<{ lang: string }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { lang } = await params;

  if (lang !== 'id' && lang !== 'en') {
    notFound();
  }

  const validLang = lang as Language;
  const t = translations.projectsPage;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>{validLang === 'id' ? 'Katalog Portofolio' : 'Portfolio Catalog'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          {t.title[validLang]}
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          {t.subtitle[validLang]}
        </p>
      </div>

      {/* Interactive Project Filter & Grid */}
      <ProjectFilter projects={projects} lang={validLang} />
    </div>
  );
}
