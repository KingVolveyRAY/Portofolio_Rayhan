import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Language } from '@/types';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/skills';
import { services } from '@/data/services';
import { ProjectCard } from '@/components/ProjectCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionConnector } from '@/components/SectionConnector';
import { translations } from '@/lib/translations';
import {
  ArrowRight,
  FileText,
  Mail,
  Cpu,
  Server,
  Layers,
  GraduationCap,
  Sparkles,
  Activity,
  CheckCircle2,
  Wrench,
  Radio,
} from 'lucide-react';

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (lang !== 'id' && lang !== 'en') {
    notFound();
  }

  const validLang = lang as Language;
  const tHero = translations.hero;
  const tFeatured = translations.featured;
  const tNav = translations.nav;

  // Filter top 3 featured IoT projects according to PRD Section 5.2
  const featuredProjects = projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99))
    .slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section with Bi-Directional Entrance Animations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <ScrollReveal animation="fade-right" className="lg:col-span-7 space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{tHero.badge[validLang]}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold text-orange-400 tracking-wide uppercase">
                {tHero.greeting[validLang]}
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
                Muhammad Rayhan <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">Ramadhan</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-300 pt-1">
                {tHero.tagline[validLang]}
              </p>
            </div>

            {/* Value Proposition Paragraph */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              {tHero.description[validLang]}
            </p>

            {/* Three Primary CTAs (FR-01) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={`/${validLang}/proyek`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-lg shadow-orange-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                <span>{tHero.ctaProjects[validLang]}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={`/${validLang}/cv`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>{tHero.ctaCv[validLang]}</span>
              </Link>

              <Link
                href={`/${validLang}/kontak`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900/40 hover:bg-slate-800/60 text-slate-300 hover:text-white border border-slate-800 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <Mail className="w-4 h-4 text-orange-400" />
                <span>{tHero.ctaContact[validLang]}</span>
              </Link>
            </div>

            {/* Telemetry Indicator Pill */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>{tHero.statusOnline[validLang]}</span>
              </div>
              <span className="text-slate-600">•</span>
              <div>{tHero.statusLocation[validLang]}</div>
            </div>
          </ScrollReveal>

          {/* Right Profile Photo & Telemetry Card Column */}
          <ScrollReveal animation="fade-left" delayMs={150} className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Decorative Glass Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-cyan-500/20 rounded-3xl blur-2xl -z-10" />

              <div className="glass-panel p-4 rounded-3xl border border-slate-700/60 shadow-2xl space-y-4">
                {/* Photo with rounded frame */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950">
                  <Image
                    src="/images/rayhan.jpg"
                    alt="Muhammad Rayhan Ramadhan - IoT Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Microcontroller Specs Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <span className="text-slate-200">ESP32 • FreeRTOS</span>
                    </div>
                    <span className="text-emerald-400 font-semibold">97% Calibrated</span>
                  </div>
                </div>

                {/* Sub-card highlights */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-500 block font-mono text-[10px] uppercase">Fokus Studi</span>
                    <span className="font-semibold text-slate-200">Teknik Informatika UIN</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-500 block font-mono text-[10px] uppercase">Pengalaman Mengajar</span>
                    <span className="font-semibold text-slate-200">Scitech Academy</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cyber Circuit Connector: Hero -> Featured Projects */}
      <SectionConnector
        nodeNumber="NODE // 01"
        label={validLang === 'id' ? 'Proyek Unggulan' : 'Featured Projects'}
        sublabel={validLang === 'id' ? 'Sensor Fisik ke Telemetri Cloud' : 'Physical Sensor to Cloud Telemetry'}
        iconName="cpu"
        variant="orange"
      />

      {/* Featured Projects Section (FR-01 & Section 5.2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>{validLang === 'id' ? 'Poros IoT Developer' : 'IoT Core Projects'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
              {tFeatured.title[validLang]}
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mt-2 leading-relaxed">
              {tFeatured.subtitle[validLang]}
            </p>
          </div>

          <Link
            href={`/${validLang}/proyek`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors group"
          >
            <span>{tFeatured.viewAll[validLang]}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>

        {/* 3 Featured Projects Grid with Cascading Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ScrollReveal
              key={project.slug}
              animation="fade-up"
              delayMs={index * 150}
              threshold={0.1}
            >
              <ProjectCard project={project} lang={validLang} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Cyber Circuit Connector: Projects -> Architecture & Skills */}
      <SectionConnector
        nodeNumber="NODE // 02"
        label={validLang === 'id' ? 'Arsitektur & Keahlian' : 'Architecture & Skills'}
        sublabel={validLang === 'id' ? 'Hardware • Backend • Database' : 'Hardware • Backend • Database'}
        iconName="layers"
        variant="cyan"
      />

      {/* Skills & Architecture Overview (FR-05) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 relative overflow-hidden">
          <ScrollReveal animation="fade-up" className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-2">
              {validLang === 'id' ? 'Keahlian Sistem Dari Sensor ke Dashboard' : 'System Expertise: From Sensor to Dashboard'}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              {validLang === 'id'
                ? 'Kemampuan menyeluruh mencakup perakitan perangkat keras, kalibrasi sensor fisik, transmisi telemetri aman, hingga dasbor antarmuka web modern.'
                : 'Comprehensive capability bridging hardware soldering, analog sensor calibration, secure telemetry pipelines, and modern web application interfaces.'}
            </p>
          </ScrollReveal>

          {/* Staggered Skill Group Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.slice(0, 3).map((group, index) => (
              <ScrollReveal
                key={group.id}
                animation="fade-up"
                delayMs={index * 140}
                threshold={0.1}
              >
                <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 h-full flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/30 text-orange-400 flex items-center justify-center">
                        {group.id === 'iot-embedded' ? <Cpu className="w-4 h-4" /> : group.id === 'backend' ? <Server className="w-4 h-4" /> : <Layers className="w-4 h-4" />}
                      </div>
                      <h3 className="font-bold text-sm text-slate-200">{group.name[validLang]}</h3>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {group.description[validLang]}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                    {group.skills.map((s) => (
                      <span key={s.name} className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delayMs={300} className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs text-slate-400 font-mono">
              {validLang === 'id' ? 'Setiap keahlian dibuktikan melalui kode di repositori publik' : 'Each capability is verified by code in public repositories'}
            </span>
            <Link
              href={`/${validLang}/tentang`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors"
            >
              <span>{validLang === 'id' ? 'Lihat Matriks Keahlian Lengkap' : 'View Full Skills Matrix'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Cyber Circuit Connector: Architecture -> Freelance & Services */}
      <SectionConnector
        nodeNumber="NODE // 03"
        label={validLang === 'id' ? 'Solusi & Layanan' : 'Solutions & Services'}
        sublabel={validLang === 'id' ? 'Konsultasi & Implementasi Teruji' : 'Proven Consulting & Implementation'}
        icon={Server}
        variant="amber"
      />

      {/* Services Preview (FR-07) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            {validLang === 'id' ? 'Layanan Freelance & Kemitraan' : 'Freelance Services & Partnerships'}
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            {validLang === 'id'
              ? 'Tiga layanan terfokus yang siap dieksekusi dengan standar kualitas rekayasa teruji.'
              : 'Three targeted offerings ready for deployment with engineering rigor.'}
          </p>
        </ScrollReveal>

        {/* 3 Services Grid with Cascading Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.id}
              animation="fade-up"
              delayMs={index * 150}
              threshold={0.1}
            >
              <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-orange-500/40 transition-all h-full">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    {service.id === 'iot-dashboard' ? <Cpu className="w-5 h-5" /> : service.id === 'web-backend' ? <Server className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{service.title[validLang]}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{service.tagline[validLang]}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <Link
                    href={`/${validLang}/layanan`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <span>{validLang === 'id' ? 'Pelajari Rincian & Alur Kerja' : 'Explore Deliverables & Workflow'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Cyber Circuit Connector: Services -> Collaboration / CTA */}
      <SectionConnector
        nodeNumber="NODE // 04"
        label={validLang === 'id' ? 'Inisiasi Kolaborasi' : 'Initiate Collaboration'}
        sublabel={validLang === 'id' ? 'Magang • Freelance • Proyek Robotika' : 'Internship • Freelance • Robotics Projects'}
        icon={Mail}
        variant="orange"
      />

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <ScrollReveal animation="scale-up" delayMs={100} threshold={0.15}>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-orange-500/30 text-center space-y-6 relative overflow-hidden bg-gradient-to-b from-orange-500/10 to-transparent">
            <div className="max-w-xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                {validLang === 'id' ? 'Siap Membangun Sistem Bersama?' : 'Ready to Build Reliable Systems Together?'}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {validLang === 'id'
                  ? 'Terbuka untuk peluang magang sebagai IoT Developer / Backend Engineer, serta proyek freelance dan workshop pelatihan robotika.'
                  : 'Open for internship placements in IoT Development and Backend Engineering, as well as freelance projects and robotics workshops.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${validLang}/kontak`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-lg shadow-orange-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                <Mail className="w-4 h-4" />
                <span>{validLang === 'id' ? 'Kirim Pesan Diskusi' : 'Start a Discussion'}</span>
              </Link>

              <Link
                href={`/${validLang}/cv`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>{validLang === 'id' ? 'Tinjau Curriculum Vitae' : 'Review Curriculum Vitae'}</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
