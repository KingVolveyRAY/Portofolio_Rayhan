import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Language } from '@/types';
import { ContactForm } from '@/components/ContactForm';
import { translations } from '@/lib/translations';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  Mail,
  MapPin,
  FileText,
  Clock,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

interface ContactPageProps {
  params: Promise<{ lang: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;

  if (lang !== 'id' && lang !== 'en') {
    notFound();
  }

  const validLang = lang as Language;
  const t = translations.contactPage;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-semibold">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{validLang === 'id' ? 'Komunikasi & Diskusi' : 'Get in Touch'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          {t.title[validLang]}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          {t.subtitle[validLang]}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Form Column (7 cols) */}
        <ScrollReveal animation="fade-right" className="lg:col-span-7">
          <ContactForm lang={validLang} />
        </ScrollReveal>

        {/* Right Info Column (5 cols) */}
        <ScrollReveal animation="fade-left" delayMs={150} className="lg:col-span-5 space-y-6">
          {/* Direct Channels Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6">
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                {t.directContactsTitle[validLang]}
              </h2>

              <ul className="space-y-4 text-xs sm:text-sm">
                <li>
                  <a
                    href={`mailto:${t.emailAddress}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 hover:bg-slate-200/60 dark:hover:bg-slate-900 transition-all text-slate-800 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase font-mono">Email Resmi</span>
                      <span className="font-semibold truncate block">{t.emailAddress}</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href={t.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:bg-slate-200/60 dark:hover:bg-slate-900 transition-all text-slate-800 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase font-mono">GitHub Profile</span>
                      <span className="font-semibold truncate block">KingVolveyRAY</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-cyan-500 ml-auto shrink-0" />
                  </a>
                </li>

                <li>
                  <a
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:bg-slate-200/60 dark:hover:bg-slate-900 transition-all text-slate-800 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase font-mono">LinkedIn Profile</span>
                      <span className="font-semibold truncate block">Muhammad Rayhan Ramadhan</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-blue-500 ml-auto shrink-0" />
                  </a>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-3 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0" />
                  <span>Jakarta / Tangerang Selatan (WIB / UTC+7)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>Estimasi respon dalam waktu 1x24 jam kerja</span>
                </div>
              </div>
            </div>

            {/* Quick CV Download card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-200">
                  {validLang === 'id' ? 'Membutuhkan Berkas CV?' : 'Need Curriculum Vitae?'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  {validLang === 'id' ? 'Versi publik tanpa nomor telepon' : 'Public verified version'}
                </p>
              </div>

              <Link
                href={`/${validLang}/cv`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-orange-500 hover:bg-orange-600 text-white shadow-md transition-all shrink-0"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{validLang === 'id' ? 'Buka CV' : 'Open CV'}</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
