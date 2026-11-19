'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { Language } from '@/types';
import { translations } from '@/lib/translations';
import { Menu, X, Sun, Moon, FileText, Globe, Cpu } from 'lucide-react';

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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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

  // Route paths per language
  const navLinks = [
    { href: `/${lang}`, label: t.home[lang] },
    { href: `/${lang}/proyek`, label: t.projects[lang] },
    { href: `/${lang}/layanan`, label: t.services[lang] },
    { href: `/${lang}/tentang`, label: t.about[lang] },
    { href: `/${lang}/kontak`, label: t.contact[lang] },
  ];

  const handleLanguageSwitch = () => {
    const targetLang: Language = lang === 'id' ? 'en' : 'id';
    // Preserve sub-path when switching
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-2">
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl transition-all duration-300 ${
            scrolled ? 'glass-nav shadow-lg' : 'glass-panel'
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo / Brand */}
          <Link
            href={`/${lang}`}
            className="flex items-center gap-2.5 font-bold text-base sm:text-lg tracking-tight group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold leading-none text-slate-100 dark:text-slate-100 light:text-slate-900">
                Rayhan<span className="text-orange-500">.</span>
              </span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">
                IoT Dev
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                    active
                      ? 'bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Controls: Language, Theme, CV, and Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              onClick={handleLanguageSwitch}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/40 hover:bg-slate-700/50 border border-slate-700/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
              aria-label={`Switch language to ${lang === 'id' ? 'English' : 'Bahasa Indonesia'}`}
              title={`Ganti ke ${lang === 'id' ? 'English' : 'Bahasa Indonesia'}`}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/40 hover:bg-slate-700/50 border border-slate-700/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Mode ${theme === 'dark' ? 'Terang' : 'Gelap'}`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-400" />
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
              className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/40 border border-slate-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl glass-panel border border-slate-700/50 flex flex-col gap-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? 'bg-orange-500/20 text-orange-400 font-semibold border border-orange-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-2 border-t border-slate-700/50 flex flex-col gap-2">
              <Link
                href={`/${lang}/cv`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>{t.downloadCv[lang]}</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
