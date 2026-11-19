import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Language } from '@/types';
import { skillGroups } from '@/data/skills';
import { timelineItems } from '@/data/experience';
import { translations } from '@/lib/translations';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  User,
  GraduationCap,
  Award,
  Briefcase,
  FileText,
  Cpu,
  Server,
  Layers,
  Wrench,
  Database,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;

  if (lang !== 'id' && lang !== 'en') {
    notFound();
  }

  const validLang = lang as Language;
  const t = translations.aboutPage;

  // Group timeline by type
  const workItems = timelineItems.filter((i) => i.type === 'work' || i.type === 'leadership');
  const eduItems = timelineItems.filter((i) => i.type === 'education');
  const certItems = timelineItems.filter((i) => i.type === 'certificate');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-semibold">
          <User className="w-3.5 h-3.5" />
          <span>{validLang === 'id' ? 'Profil & Filosofi Rekayasa' : 'Profile & Engineering Philosophy'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          {t.title[validLang]}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          {t.subtitle[validLang]}
        </p>
      </div>

      {/* Bio & Photo Section */}
      <ScrollReveal>
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/25 to-cyan-500/25 rounded-3xl blur-2xl -z-10" />
              <div className="glass-panel p-4 rounded-3xl border border-slate-300 dark:border-slate-700/60 shadow-2xl space-y-4">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700/60">
                  <Image
                    src="/images/rayhan.jpg"
                    alt="Muhammad Rayhan Ramadhan"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center">
                  <span className="font-bold text-sm text-slate-900 dark:text-slate-100 block">Muhammad Rayhan Ramadhan</span>
                  <span className="text-xs text-orange-600 dark:text-orange-400 font-mono">UIN Syarif Hidayatullah Jakarta</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Story */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>{t.bio1[validLang]}</p>
            <p>{t.bio2[validLang]}</p>
            <p>{t.bio3[validLang]}</p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                href={`/${validLang}/cv`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                <FileText className="w-4 h-4" />
                <span>{t.downloadCv[validLang]}</span>
              </Link>

              <Link
                href={`/${validLang}/kontak`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-900/80 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-all"
              >
                <span>{validLang === 'id' ? 'Hubungi Saya' : 'Contact Me'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Skills Matrix (FR-05) */}
      <ScrollReveal>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{t.skillsTitle[validLang]}</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {validLang === 'id'
                ? 'Dikelompokkan menurut bidang rekayasa dan terhubung dengan proyek pembuktiannya.'
                : 'Grouped by engineering domain and linked directly to demonstration projects.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => (
              <ScrollReveal
                key={group.id}
                animation="fade-up"
                delayMs={index * 100}
                threshold={0.1}
              >
                <div className="glass-panel p-6 rounded-2xl space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                        {group.id === 'iot-embedded' ? (
                          <Cpu className="w-4 h-4" />
                        ) : group.id === 'backend' ? (
                          <Server className="w-4 h-4" />
                        ) : group.id === 'database' ? (
                          <Database className="w-4 h-4" />
                        ) : group.id === 'frontend' ? (
                          <Layers className="w-4 h-4" />
                        ) : (
                          <Wrench className="w-4 h-4" />
                        )}
                      </div>
                      <h3 className="font-bold text-sm text-slate-900 dark:text-slate-200">{group.name[validLang]}</h3>
                    </div>

                    <div className="space-y-2">
                      {group.skills.map((s) => (
                        <div key={s.name} className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                          <span className="text-slate-800 dark:text-slate-200 font-medium">{s.name}</span>
                          <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20 dark:border-cyan-800/40">
                            {s.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Experience & Leadership Timeline (FR-06) */}
      <ScrollReveal>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{t.experienceTitle[validLang]}</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {validLang === 'id'
                ? 'Rekam jejak kepengurusan, pendampingan robotika, dan kontribusi organisasi mahasiswa.'
                : 'Chronicle of leadership roles, robotics mentorship, and student body governance.'}
            </p>
          </div>

          <div className="space-y-6">
            {workItems.map((item, index) => (
              <ScrollReveal
                key={item.id}
                animation="fade-up"
                delayMs={index * 120}
                threshold={0.1}
              >
                <div className="glass-panel p-6 rounded-2xl space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      {item.role[validLang]} <span className="text-orange-600 dark:text-orange-400 font-normal">at {item.institution}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800 self-start sm:self-auto">
                      {item.period[validLang]}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description[validLang]}
                  </p>

                  {item.achievements && (
                    <ul className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-800/70">
                      {item.achievements[validLang].map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Education & Competitions */}
      <ScrollReveal>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span>{validLang === 'id' ? 'Pendidikan Formal' : 'Formal Education'}</span>
            </h2>
            {eduItems.map((item) => (
              <div key={item.id} className="glass-panel p-6 rounded-2xl space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{item.institution}</h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{item.period[validLang]}</span>
                </div>
                <p className="text-xs font-semibold text-orange-600 dark:text-orange-400">{item.role[validLang]}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.description[validLang]}</p>
              </div>
            ))}
          </div>

          {/* Certifications & Competitions */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500 dark:text-amber-400" />
              <span>{validLang === 'id' ? 'Sertifikat & Kompetisi Robotika' : 'Certificates & Competitions'}</span>
            </h2>
            <div className="space-y-3">
              {certItems.map((item) => (
                <div key={item.id} className="glass-panel p-4 rounded-xl flex items-start justify-between gap-3 text-xs">
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-200">{item.role[validLang]}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{item.institution} • {item.description[validLang]}</p>
                  </div>
                  <span className="font-mono text-cyan-700 dark:text-cyan-400 shrink-0 font-medium">{item.period[validLang]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
