'use client';

import React from 'react';
import { Language } from '@/types';
import { translations } from '@/lib/translations';
import { Printer, Download, Mail, MapPin, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

interface CvViewProps {
  lang: Language;
}

export function CvView({ lang }: CvViewProps) {
  const t = translations.cvPage;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Action Bar (hidden on print) */}
      <div className="no-print glass-panel p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-amber-400">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>{t.privacyNote[lang]}</span>
        </div>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
        >
          <Printer className="w-4 h-4" />
          <span>{t.printButton[lang]}</span>
        </button>
      </div>

      {/* CV Document Container */}
      <div className="bg-slate-900/90 text-slate-100 p-8 sm:p-12 rounded-2xl border border-slate-800 shadow-2xl space-y-8 font-sans print:bg-white print:text-black print:p-0 print:border-none print:shadow-none">
        {/* Header */}
        <header className="border-b border-slate-800 pb-6 print:border-slate-300">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-black">
                Muhammad Rayhan Ramadhan
              </h1>
              <p className="text-base font-semibold text-orange-400 print:text-orange-600 mt-1">
                {lang === 'id'
                  ? 'IoT Developer yang membangun sistem dari sensor sampai dashboard'
                  : 'IoT Developer building systems from sensor to dashboard'}
              </p>
            </div>

            <div className="text-xs text-slate-400 print:text-slate-600 space-y-1 sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Jakarta / Tangerang Selatan, Indonesia</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <a href="mailto:rayhanramadhan.official@gmail.com" className="hover:underline">
                  rayhanramadhan.official@gmail.com
                </a>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                <a href="https://github.com/KingVolveyRAY" target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/KingVolveyRAY
                </a>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                <a href="https://linkedin.com/in/muhammad-rayhan-ramadhan" target="_blank" rel="noreferrer" className="hover:underline">
                  linkedin.com/in/muhammad-rayhan-ramadhan
                </a>
              </p>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mt-4 pt-4 border-t border-slate-800/60 print:border-slate-200">
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-700 leading-relaxed">
              {lang === 'id'
                ? 'Mahasiswa Teknik Informatika UIN Syarif Hidayatullah Jakarta (Tahun ke-3) dengan spesialisasi pengembangan sistem Internet of Things (IoT), pemrograman mikrokontroler (ESP32/Arduino), dan rekayasa backend web. Berpengalaman sebagai Mentor Robotika di Scitech Academy dan mantan Head of Mandala Robotic Club dalam membimbing perakitan sirkuit dan otomasi terapan. Berorientasi pada sistem yang andal di lapangan dari integrasi sensor analog hingga visualisasi dashboard PWA.'
                : 'Third-year Informatics Engineering student at UIN Syarif Hidayatullah Jakarta specializing in Internet of Things (IoT) systems, microcontroller programming (ESP32/Arduino), and backend web engineering. Experienced Robotics Mentor at Scitech Academy and former Head of Mandala Robotic Club with a proven track record in circuit assembly and practical automation. Committed to delivering dependable field-ready solutions bridging analog sensor probes to responsive PWA dashboards.'}
            </p>
          </div>
        </header>

        {/* Education */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 border-b border-slate-800 pb-1 print:border-slate-300">
            {lang === 'id' ? 'Pendidikan' : 'Education'}
          </h2>
          <div>
            <div className="flex justify-between items-baseline text-xs sm:text-sm font-semibold text-white print:text-black">
              <span>UIN Syarif Hidayatullah Jakarta</span>
              <span className="text-slate-400 print:text-slate-600 font-normal">09/2024 - Sekarang</span>
            </div>
            <p className="text-xs text-slate-300 print:text-slate-700">
              {lang === 'id' ? 'S1 Teknik Informatika (Tahun ke-3)' : 'B.S. in Informatics Engineering (3rd Year)'}
            </p>
            <p className="text-xs text-slate-400 print:text-slate-600 mt-0.5">
              {lang === 'id'
                ? 'Fokus Studi: Arsitektur Komputer, Jaringan & IoT, Rekayasa Perangkat Lunak, Struktur Data.'
                : 'Focus: Computer Systems Architecture, Networks & IoT, Software Engineering, Data Structures.'}
            </p>
          </div>
        </section>

        {/* Experience & Leadership */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 border-b border-slate-800 pb-1 print:border-slate-300">
            {lang === 'id' ? 'Pengalaman Kerja & Kepemimpinan' : 'Experience & Leadership'}
          </h2>

          <div className="space-y-4 text-xs sm:text-sm">
            {/* Scitech Academy */}
            <div>
              <div className="flex justify-between items-baseline font-semibold text-white print:text-black">
                <span>Robotics Mentor - Scitech Academy</span>
                <span className="text-slate-400 print:text-slate-600 font-normal text-xs">08/2025 - Sekarang</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-700 mt-1.5 space-y-1">
                <li>
                  {lang === 'id'
                    ? 'Melatih dan membimbing siswa dalam perakitan sirkuit elektronika, logika mikrokontroler Arduino/ESP32, dan integrasi sensor.'
                    : 'Mentoring students in electronic circuit prototyping, Arduino/ESP32 microcontroller logic, and practical sensor integration.'}
                </li>
                <li>
                  {lang === 'id'
                    ? 'Menyusun silabus pembelajaran bertahap dan memfasilitasi persiapan tim siswa menuju kompetisi robotika regional dan nasional.'
                    : 'Designing modular hands-on curricula and coaching competitive youth teams for regional and national robotics tournaments.'}
                </li>
              </ul>
            </div>

            {/* Mandala Robotic Club */}
            <div>
              <div className="flex justify-between items-baseline font-semibold text-white print:text-black">
                <span>Head of Robotic Club - Mandala Robotic Club</span>
                <span className="text-slate-400 print:text-slate-600 font-normal text-xs">01/2023 - 01/2024</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-700 mt-1.5 space-y-1">
                <li>
                  {lang === 'id'
                    ? 'Memimpin tim riset dan pembuatan prototipe Smart Farmer (monitoring kelembapan tanah) dan Smart Trolley navigasi sensor.'
                    : 'Directed research and prototyping for the Smart Farmer automated soil telemetry system and line-following Smart Trolley.'}
                </li>
                <li>
                  {lang === 'id'
                    ? 'Membangun aplikasi web inventaris peminjaman modul elektronik lab untuk mengeliminasi risiko kehilangan komponen penting.'
                    : 'Built centralized inventory web portal tracking lab microcontrollers, eliminating hardware misplacement incidents.'}
                </li>
              </ul>
            </div>

            {/* HIMTI UIN Jakarta */}
            <div>
              <div className="flex justify-between items-baseline font-semibold text-white print:text-black">
                <span>Head of Department Entrepreneurship - HIMTI UIN Jakarta</span>
                <span className="text-slate-400 print:text-slate-600 font-normal text-xs">07/2025 - Sekarang</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-700 mt-1.5 space-y-1">
                <li>
                  {lang === 'id'
                    ? 'Mengelola perencanaan anggaran, strategi kemitraan sponsor, dan program penjualan atribut resmi himpunan mahasiswa.'
                    : 'Directing departmental budget planning, corporate sponsorships, and merchandise sales initiatives for the Informatics Association.'}
                </li>
              </ul>
            </div>

            {/* IMALA */}
            <div>
              <div className="flex justify-between items-baseline font-semibold text-white print:text-black">
                <span>Head of IMALA - Ikatan Mahasiswa Lebak</span>
                <span className="text-slate-400 print:text-slate-600 font-normal text-xs">03/2025 - 03/2026</span>
              </div>
              <p className="text-xs text-slate-300 print:text-slate-700 mt-1">
                {lang === 'id'
                  ? 'Mengoordinasikan agenda sosial kemasyarakatan dan program edukasi teknologi pemuda daerah.'
                  : 'Coordinating regional community outreach agendas and youth digital literacy programs.'}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects Highlight */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 border-b border-slate-800 pb-1 print:border-slate-300">
            {lang === 'id' ? 'Proyek Rekayasa Unggulan' : 'Featured Engineering Projects'}
          </h2>

          <div className="space-y-3 text-xs sm:text-sm">
            <div>
              <div className="flex justify-between items-baseline font-semibold text-white print:text-black">
                <span>Dashboard Kualitas Air Cuci Sayur (IoT & Web PWA)</span>
                <span className="text-slate-400 print:text-slate-600 text-xs">ESP32, pH, TDS, Turbidity, Next.js, MQTT</span>
              </div>
              <p className="text-xs text-slate-300 print:text-slate-700 mt-0.5">
                {lang === 'id'
                  ? 'Sistem monitoring kualitas air sanitasi pangan real-time dengan filter analog moving-average dan latensi telemetri < 2 detik.'
                  : 'Real-time sanitation water monitoring system featuring moving-average analog filtering and sub-2.0s telemetry latency.'}
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-semibold text-white print:text-black">
                <span>WOODGUARD (IoT Monitoring & Deteksi Hama)</span>
                <span className="text-slate-400 print:text-slate-600 text-xs">ESP32-CAM, PIR, Deep Sleep, Telegram Bot</span>
              </div>
              <p className="text-xs text-slate-300 print:text-slate-700 mt-0.5">
                {lang === 'id'
                  ? 'Perangkat proteksi visual low-power (<1.2mA standby) dengan transmisi foto otomatis ke grup Telegram saat mendeteksi gerakan.'
                  : 'Low-power visual monitoring unit (<1.2mA standby) dispatching automated photo alerts to Telegram upon motion trigger.'}
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-semibold text-white print:text-black">
                <span>RiverGuard (Telemetri Debit & Kekeruhan Sungai)</span>
                <span className="text-slate-400 print:text-slate-600 text-xs">ESP32, JSN-SR04T, Solar Powered, MQTT</span>
              </div>
              <p className="text-xs text-slate-300 print:text-slate-700 mt-0.5">
                {lang === 'id'
                  ? 'Alat telemetri peringatan dini banjir luar ruangan bertenaga surya dengan sensor ultrasonik tahan air dan toleransi akurasi ±1.5cm.'
                  : 'Solar-powered outdoor flood telemetry device utilizing waterproof ultrasonic sensors with ±1.5cm measurement precision.'}
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-semibold text-white print:text-black">
                <span>Backend DWP Kemenag (Enterprise Backend API)</span>
                <span className="text-slate-400 print:text-slate-600 text-xs">NestJS, PostgreSQL, Prisma ORM, JWT, Docker</span>
              </div>
              <p className="text-xs text-slate-300 print:text-slate-700 mt-0.5">
                {lang === 'id'
                  ? 'Arsitektur REST API modular untuk pendataan instansi dengan RBAC, response time < 80ms, dan dokumentasi OpenAPI Swagger.'
                  : 'Modular REST API service handling multi-branch administrative records with RBAC, sub-80ms response times, and OpenAPI specs.'}
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills Grid */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 border-b border-slate-800 pb-1 print:border-slate-300">
            {lang === 'id' ? 'Keahlian Teknis' : 'Technical Skills'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span className="font-semibold text-white print:text-black">IoT & Hardware:</span>
              <p className="text-slate-300 print:text-slate-700">ESP32, ESP8266, ESP32-CAM, Arduino IDE, Sensor Analog/Digital (pH, TDS, Ultrasonik JSN-SR04T, Turbidity, PIR), MQTT, WebSockets, Low-Power Deep Sleep, Soldering.</p>
            </div>
            <div>
              <span className="font-semibold text-white print:text-black">Backend & Database:</span>
              <p className="text-slate-300 print:text-slate-700">NestJS, Node.js, Express, PostgreSQL, MySQL, Prisma ORM, Supabase, JWT Authentication, RESTful API Design.</p>
            </div>
            <div>
              <span className="font-semibold text-white print:text-black">Frontend & Mobile:</span>
              <p className="text-slate-300 print:text-slate-700">Next.js (App Router), React, TypeScript, Tailwind CSS, Progressive Web Apps (PWA), HTML5 Canvas API, Chart.js.</p>
            </div>
            <div>
              <span className="font-semibold text-white print:text-black">Alat & Metodologi:</span>
              <p className="text-slate-300 print:text-slate-700">Git/GitHub, Docker basics, Postman, Linux CLI, Motor Drivers (GA25, L298N), Rotary Encoders.</p>
            </div>
          </div>
        </section>

        {/* Certifications & Competitions */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 border-b border-slate-800 pb-1 print:border-slate-300">
            {lang === 'id' ? 'Sertifikasi & Kompetisi Robotika' : 'Certifications & Competitions'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-slate-700">
            <p>• GDGoC AI/ML Weekly Class (2025)</p>
            <p>• GDGoC Product Manager Workshop (2025)</p>
            <p>• Asian Robotic Competition for Kids / ARCK (2024)</p>
            <p>• International Youth Metaverse Robot Challenge / IYMRC (2024)</p>
            <p>• Kontes Robot Nusantara / KRON (2023)</p>
          </div>
        </section>
      </div>
    </div>
  );
}
