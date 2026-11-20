import React from 'react';
import Link from 'next/link';
import { Language } from '@/types';
import { translations } from '@/lib/translations';
import { Mail, Cpu, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const t = translations.footer;
  const navT = translations.nav;
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/90 dark:bg-slate-950/70 pt-12 sm:pt-16 pb-10 sm:pb-12 mt-12 sm:mt-16 relative overflow-hidden transition-colors">
      {/* Subtle background glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 glow-orb-orange opacity-20 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 glow-orb-cyan opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Positioning */}
          <div className="md:col-span-2 space-y-4">
            <Link href={`/${lang}`} className="inline-flex items-center gap-2 font-bold text-xl group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-slate-900 dark:text-slate-100 font-extrabold tracking-tight">
                Rayhan<span className="text-orange-500">.</span>
              </span>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              {t.tagline[lang]}
            </p>

            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span>{t.statusValue[lang]}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">
              {t.navigationTitle[lang]}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${lang}`} className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  {navT.home[lang]}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/proyek`} className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  {navT.projects[lang]}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/layanan`} className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  {navT.services[lang]}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/tentang`} className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  {navT.about[lang]}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/kontak`} className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  {navT.contact[lang]}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/cv`} className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  {navT.downloadCv[lang]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">
              {t.connectTitle[lang]}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://github.com/KingVolveyRAY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors group"
                >
                  <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-orange-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/muhammad-rayhan-ramadhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors group"
                >
                  <LinkedinIcon className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:rayhanramadan402@gmail.com"
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover:text-amber-500" />
                  <span>Kirim Email Langsung</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-amber-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>{t.copyright[lang]}</p>
          <p className="flex items-center gap-1.5">
            <span>Dirancang dengan dedikasi di UIN Jakarta</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
