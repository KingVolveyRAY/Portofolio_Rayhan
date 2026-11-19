'use client';

import React, { useState, useMemo } from 'react';
import { Project, Language } from '@/types';
import { ProjectCard } from './ProjectCard';
import { translations } from '@/lib/translations';
import { Filter, Search, RotateCcw, Cpu } from 'lucide-react';

interface ProjectFilterProps {
  projects: Project[];
  lang: Language;
}

export function ProjectFilter({ projects, lang }: ProjectFilterProps) {
  const t = translations.projectsPage;

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract all categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, [projects]);

  // Extract all technologies
  const allTechs = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.stack.forEach((tech) => set.add(tech)));
    return Array.from(set).sort();
  }, [projects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category match
      if (selectedCategory !== 'all' && project.category !== selectedCategory) {
        return false;
      }

      // Tech match
      if (selectedTech !== 'all' && !project.stack.includes(selectedTech)) {
        return false;
      }

      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const titleMatch = project.title[lang].toLowerCase().includes(query);
        const summaryMatch = project.summary[lang].toLowerCase().includes(query);
        const stackMatch = project.stack.some((tech) => tech.toLowerCase().includes(query));
        if (!titleMatch && !summaryMatch && !stackMatch) {
          return false;
        }
      }

      return true;
    });
  }, [projects, selectedCategory, selectedTech, searchQuery, lang]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSelectedTech('all');
    setSearchQuery('');
  };

  return (
    <div className="space-y-8">
      {/* Filters Bar */}
      <div className="glass-panel p-4 sm:p-6 rounded-2xl space-y-4">
        {/* Search input & Active count */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'id' ? 'Cari judul, sensor, atau teknologi...' : 'Search title, sensor, or stack...'}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex items-center gap-2 justify-between sm:justify-end">
            <span className="text-xs text-slate-400 font-mono">
              {t.showingCount[lang].replace('{count}', filteredProjects.length.toString())}
            </span>

            {(selectedCategory !== 'all' || selectedTech !== 'all' || searchQuery !== '') && (
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-orange-400 hover:text-orange-300 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/20 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.resetFilter[lang]}</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
          <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.filterCategory[lang]}:</span>
          </span>

          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-orange-500 text-white font-semibold shadow-md shadow-orange-500/20'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50'
            }`}
          >
            {t.allCategories[lang]}
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-orange-500 text-white font-semibold shadow-md shadow-orange-500/20'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Popular Tech Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <span className="text-xs font-semibold text-slate-400 mr-1">
            {t.filterTech[lang]}:
          </span>

          <button
            onClick={() => setSelectedTech('all')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer ${
              selectedTech === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-slate-800/30 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {t.allTech[lang]}
          </button>

          {['ESP32', 'Next.js', 'NestJS', 'MQTT', 'React', 'TypeScript', 'Supabase'].map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(selectedTech === tech ? 'all' : tech)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer ${
                selectedTech === tech
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-800/30 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid or Empty State */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} lang={lang} />
          ))}
        </div>
      ) : (
        /* Empty State adhering to R-27 */
        <div className="glass-panel rounded-2xl p-12 text-center max-w-lg mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 mx-auto flex items-center justify-center">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-100">{t.emptyTitle[lang]}</h3>
          <p className="text-sm text-slate-400 leading-relaxed">{t.emptyDesc[lang]}</p>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-orange-500 hover:bg-orange-600 text-white transition-all shadow-md cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.resetFilter[lang]}</span>
          </button>
        </div>
      )}
    </div>
  );
}
