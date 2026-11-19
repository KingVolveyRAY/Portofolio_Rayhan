import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Language } from '@/types';
import { services, workflowSteps } from '@/data/services';
import { translations } from '@/lib/translations';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  Cpu,
  Server,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Briefcase,
} from 'lucide-react';

interface ServicesPageProps {
  params: Promise<{ lang: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { lang } = await params;

  if (lang !== 'id' && lang !== 'en') {
    notFound();
  }

  const validLang = lang as Language;
  const t = translations.servicesPage;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-semibold">
          <Briefcase className="w-3.5 h-3.5" />
          <span>{validLang === 'id' ? 'Penawaran Kolaborasi' : 'Professional Services'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          {t.title[validLang]}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          {t.subtitle[validLang]}
        </p>
      </div>

      {/* 3 Core Services Grid */}
      <ScrollReveal>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6 hover:border-orange-500/40 transition-all group"
            >
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {service.id === 'iot-dashboard' ? (
                    <Cpu className="w-6 h-6" />
                  ) : service.id === 'web-backend' ? (
                    <Server className="w-6 h-6" />
                  ) : (
                    <GraduationCap className="w-6 h-6" />
                  )}
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{service.title[validLang]}</h2>
                  <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 mb-3">{service.tagline[validLang]}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{service.description[validLang]}</p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-300 block">
                    {t.deliverablesTitle[validLang]}
                  </span>
                  <ul className="space-y-2">
                    {service.deliverables[validLang].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack & CTA */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/${validLang}/kontak`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-900 hover:bg-orange-500 text-slate-800 dark:text-slate-200 hover:text-white border border-slate-300 dark:border-slate-700/80 hover:border-orange-500 transition-all"
                >
                  <span>{t.ctaDiscuss[validLang]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </section>
      </ScrollReveal>

      {/* Structured Workflow Section */}
      <ScrollReveal>
        <section className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">
              {t.workflowTitle[validLang]}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.workflowSubtitle[validLang]}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step) => (
              <div key={step.step} className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-3 relative">
                <span className="text-3xl font-black text-orange-500/30 font-mono block">
                  0{step.step}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-200">{step.title[validLang]}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.description[validLang]}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Internship Callout Banner */}
      <ScrollReveal>
        <section className="glass-panel p-8 sm:p-10 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/20 to-slate-900/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 text-[11px] font-semibold">
              <span>Rekrutmen Talenta Mahasiswa</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              {t.internshipBox.title[validLang]}
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {t.internshipBox.desc[validLang]}
            </p>
          </div>

          <Link
            href={`/${validLang}/kontak`}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>{t.internshipBox.cta[validLang]}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>
      </ScrollReveal>
    </div>
  );
}
