'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { Language } from '@/types';
import { translations } from '@/lib/translations';
import {
  Home,
  Briefcase,
  Wrench,
  User,
  Mail,
  Sun,
  Moon,
  FileText,
  Globe,
  Cpu,
  Menu,
  X,
} from 'lucide-react';

interface NavbarProps {
  lang: Language;
}

export function Navbar({ lang }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations.nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Route paths per language with corresponding icons
  const navLinks = [
    { href: `/${lang}`, label: t.home[lang], icon: Home },
    { href: `/${lang}/proyek`, label: t.projects[lang], icon: Briefcase },
    { href: `/${lang}/layanan`, label: t.services[lang], icon: Wrench },
    { href: `/${lang}/tentang`, label: t.about[lang], icon: User },
    { href: `/${lang}/kontak`, label: t.contact[lang], icon: Mail },
  ];

  const handleLanguageSwitch = () => {
    const targetLang: Language = lang === 'id' ? 'en' : 'id';
    let newPath = pathname.replace(`/${lang}`, `/${targetLang}`);
    if (newPath === pathname) {
      newPath = `/${targetLang}`;
    }
    router.push(newPath);
  };

  const isActive = (href: string) => {
    if (href === `/${lang}` && pathname === `/${lang}`) return true;
    if (href !== `/${lang}` && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out flex justify-center ${
        scrolled ? 'pt-3 sm:pt-4 px-3 sm:px-6' : 'pt-4 sm:pt-5 px-4 sm:px-8'
      }`}
    >
      {/* 
        When Scrolled: Morphs into a compact floating icon dock (Reference Image 2)
        When Top: Shows full standard navbar with brand logo and text links
      */}
      {scrolled ? (
        <div className="floating-nav rounded-full px-2.5 sm:px-4 py-2 shadow-2xl flex items-center gap-1 sm:gap-1.5 animate-in fade-in zoom-in-95 duration-300">
          <nav className="flex items-center gap-1 sm:gap-1.5" aria-label="Quick Dock Navigation">
            {/* Dock Icon Links (No text labels) */}
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  title={link.label}
                  aria-label={link.label}
                  className={`p-2 sm:p-2.5 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                    active
                      ? 'bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30 shadow-sm'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </Link>
              );
            })}

            {/* Subtle Vertical Divider */}
            <div className="w-[1px] h-4 sm:h-5 bg-slate-300 dark:bg-slate-700/60 mx-1 sm:mx-1.5" />

            {/* Theme Toggle (Circular Button like Reference) */}
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-full text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-200/60 dark:bg-slate-800/40 hover:bg-slate-300/60 dark:hover:bg-slate-700/50 border border-slate-300 dark:border-slate-700/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Ubah ke Mode ${theme === 'dark' ? 'Terang' : 'Gelap'}`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-600" />
              )}
            </button>

            {/* Circular Language/Avatar Badge (Matches RT circle in Reference) */}
            <button
              onClick={handleLanguageSwitch}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-extrabold text-[11px] sm:text-xs flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              aria-label={`Switch language to ${lang === 'id' ? 'English' : 'Bahasa Indonesia'}`}
              title={`Ganti Bahasa ke ${lang === 'id' ? 'English' : 'Bahasa Indonesia'}`}
            >
              {lang.toUpperCase()}
            </button>

            {/* CV Download / Export Action Icon */}
            <Link
              href={`/${lang}/cv`}
              className="p-2 sm:p-2.5 rounded-full text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-500/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              title={t.downloadCv[lang]}
              aria-label={t.downloadCv[lang]}
            >
              <FileText className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      ) : (
        /* Full Top Navbar (When not scrolled) */
        <div className="w-full max-w-7xl glass-panel rounded-2xl px-4 sm:px-6 py-3.5 transition-all duration-500 ease-out">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Logo / Brand */}
            <Link
              href={`/${lang}`}
              className="flex items-center gap-2.5 font-bold text-base sm:text-lg tracking-tight group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg p-1"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold leading-none text-slate-900 dark:text-slate-100">
                  Rayhan<span className="text-orange-500">.</span>
                </span>
                <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono tracking-widest uppercase">
                  IoT Dev
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                      active
                        ? 'bg-orange-500/15 text-orange-600 dark:text-orange-400 font-semibold border border-orange-500/30'
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Controls: Language, Theme, CV CTA, Mobile Toggle */}
            <div className="flex items-center gap-2">
              {/* Language Switcher */}
              <button
                onClick={handleLanguageSwitch}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-200/60 dark:bg-slate-800/40 hover:bg-slate-300/60 dark:hover:bg-slate-700/50 border border-slate-300 dark:border-slate-700/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
                aria-label={`Switch language to ${lang === 'id' ? 'English' : 'Bahasa Indonesia'}`}
                title={`Ganti ke ${lang === 'id' ? 'English' : 'Bahasa Indonesia'}`}
              >
                <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{lang.toUpperCase()}</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-200/60 dark:bg-slate-800/40 hover:bg-slate-300/60 dark:hover:bg-slate-700/50 border border-slate-300 dark:border-slate-700/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Ubah ke Mode ${theme === 'dark' ? 'Terang' : 'Gelap'}`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-cyan-600" />
                )}
              </button>

              {/* Download CV CTA (Desktop) */}
              <Link
                href={`/${lang}/cv`}
                className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-md shadow-orange-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{t.downloadCv[lang]}</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-200/60 dark:bg-slate-800/40 border border-slate-300 dark:border-slate-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 p-4 rounded-2xl glass-panel border border-slate-300 dark:border-slate-700/50 flex flex-col gap-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      active
                        ? 'bg-orange-500/20 text-orange-600 dark:text-orange-400 font-semibold border border-orange-500/30'
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-orange-500" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}

              <div className="pt-2 border-t border-slate-300 dark:border-slate-800 flex justify-between items-center">
                <Link
                  href={`/${lang}/cv`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-orange-500 text-white"
                >
                  <FileText className="w-4 h-4" />
                  <span>{t.downloadCv[lang]}</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
