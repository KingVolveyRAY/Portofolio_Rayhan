import { ServiceItem, WorkflowStep } from '@/types';

export const services: ServiceItem[] = [
  {
    id: 'iot-dashboard',
    title: {
      id: 'Sistem IoT & Dashboard Monitoring',
      en: 'IoT Systems & Monitoring Dashboards',
    },
    tagline: {
      id: 'Solusi terpadu dari pemilihan sensor fisik, mikrokontroler, hingga dashboard telemetri real-time.',
      en: 'End-to-end solutions from sensor probe selection and microcontroller firmware to real-time dashboards.',
    },
    description: {
      id: 'Membangun sistem pemantauan dan otomasi berbasis mikrokontroler (ESP32, Arduino) yang membaca kondisi lingkungan atau mesin, memproses data dengan filter andal, dan menampilkan grafik telemetri interaktif melalui web/PWA.',
      en: 'Building microcontroller-driven monitoring and automation systems (ESP32, Arduino) that read environmental metrics, process reliable signals, and stream interactive telemetry to web and PWA dashboards.',
    },
    deliverables: {
      id: [
        'Skematik rangkaian dan panduan perkabelan sirkuit sensor',
        'Firmware mikrokontroler optimal dengan konsumsi daya terukur',
        'Web dashboard interaktif real-time dengan status indikator visual',
        'Protokol komunikasi MQTT atau WebSockets latensi rendah',
        'Dokumentasi kalibrasi sensor dan manual pengoperasian',
      ],
      en: [
        'Circuit schematics and sensor wiring documentation',
        'Optimized microcontroller firmware with measured power efficiency',
        'Interactive real-time web dashboard with clear status indicators',
        'Low-latency MQTT or WebSocket telemetry pipelines',
        'Sensor calibration manual and technical operational guide',
      ],
    },
    techStack: ['ESP32', 'Arduino IDE', 'Sensor Analog/Digital', 'Next.js', 'MQTT', 'WebSockets', 'Tailwind CSS'],
    icon: 'Cpu',
  },
  {
    id: 'web-backend',
    title: {
      id: 'Aplikasi Web & Backend API',
      en: 'Web Applications & Backend APIs',
    },
    tagline: {
      id: 'Sistem web modular, API berkinerja tinggi, dan integrasi basis data relasional yang kokoh.',
      en: 'Modular web applications, high-throughput APIs, and solid relational database integrations.',
    },
    description: {
      id: 'Mengembangkan aplikasi web responsif dan layanan backend tangguh menggunakan NestJS atau Node.js, dilengkapi otentikasi role-based, arsitektur modular, dan dokumentasi OpenAPI/Swagger.',
      en: 'Developing responsive web applications and reliable backend microservices using NestJS or Node.js, complete with role-based auth, clean architecture, and OpenAPI/Swagger documentation.',
    },
    deliverables: {
      id: [
        'Arsitektur RESTful API modular yang mudah dikembangkan',
        'Otentikasi aman berbasis JWT dan sistem hak akses pengguna (RBAC)',
        'Perancangan skema database teroptimasi (PostgreSQL / MySQL)',
        'Antarmuka web modern dengan desain Glassmorphism responsif',
        'Dokumentasi API interaktif Swagger untuk kemudahan integrasi tim',
      ],
      en: [
        'Maintainable modular RESTful API architecture',
        'Secure JWT authentication with Role-Based Access Control',
        'Optimized relational database schemas (PostgreSQL / MySQL)',
        'Modern responsive web frontend with Glassmorphism aesthetic',
        'Interactive Swagger OpenAPI documentation for seamless team integration',
      ],
    },
    techStack: ['NestJS', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'Prisma ORM', 'Tailwind CSS'],
    icon: 'Server',
  },
  {
    id: 'robotics-training',
    title: {
      id: 'Pelatihan Robotika & IoT',
      en: 'Robotics & IoT Educational Workshops',
    },
    tagline: {
      id: 'Program bimbingan praktis untuk sekolah, madrasah, dan komunitas dari dasar hingga kompetisi.',
      en: 'Hands-on training programs for schools, academies, and clubs from fundamentals to tournament prep.',
    },
    description: {
      id: 'Menyediakan sesi workshop teknis, bimbingan intensif persiapan lomba, dan penyusunan modul kurikulum robotika berbasis pengalaman nyata sebagai mentor di Scitech Academy dan pimpinan klub robotika.',
      en: 'Providing interactive technical workshops, competition coaching sessions, and practical robotics curriculum development drawn from real mentorship experience at Scitech Academy and club leadership.',
    },
    deliverables: {
      id: [
        'Modul ajar terstruktur dari dasar elektronika hingga logika kode mikrokontroler',
        'Sesi praktik langsung (hands-on) perakitan modul sirkuit dan sensor',
        'Bimbingan teknis persiapan lomba robotika regional atau nasional',
        'Konsultasi pengadaan alat dan komponen laboratorium robotika sekolah',
      ],
      en: [
        'Structured learning kits covering electronics basics to microcontroller code logic',
        'Hands-on assembly sessions with circuits, motor drivers, and telemetry sensors',
        'Technical mentoring sessions tailored for regional and national tournaments',
        'Procurement guidance for school robotics lab toolsets and hardware inventory',
      ],
    },
    techStack: ['Arduino C++', 'ESP32', 'Motor DC & Encoders', 'Sensor Interfacing', 'Curriculum Kits'],
    icon: 'GraduationCap',
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: {
      id: 'Diskusi & Pemetaan Kebutuhan',
      en: 'Discovery & Requirements Mapping',
    },
    description: {
      id: 'Membahas ruang lingkup proyek, target fungsionalitas, parameter sensor yang dibutuhkan, atau target silabus pelatihan.',
      en: 'Discussing project scope, target operational deliverables, sensor parameters, or training curriculum goals.',
    },
  },
  {
    step: 2,
    title: {
      id: 'Perancangan Skematik & Arsitektur',
      en: 'Schematic Design & System Architecture',
    },
    description: {
      id: 'Menyusun rancangan sirkuit hardware, skema database, atau diagram alur data telemetri sebelum masuk ke tahap pembuatan.',
      en: 'Drafting circuit schematics, database models, or telemetry pipeline diagrams prior to build execution.',
    },
  },
  {
    step: 3,
    title: {
      id: 'Pengembangan & Pengondisian Sinyal',
      en: 'Implementation & Firmware Calibration',
    },
    description: {
      id: 'Menulis firmware mikrokontroler, kalibrasi filter sensor, membangun antarmuka web, serta integrasi endpoint backend.',
      en: 'Writing microcontroller firmware, calibrating sensor filters, crafting the web UI, and integrating backend endpoints.',
    },
  },
  {
    step: 4,
    title: {
      id: 'Pengujian Lapangan & Serah Terima',
      en: 'Field Testing & Handover',
    },
    description: {
      id: 'Uji keandalan sistem dalam skenario nyata, penyerahan dokumentasi teknis, kode sumber, dan panduan pengoperasian.',
      en: 'Stress-testing systems in real conditions, delivering full source code, technical schematics, and operating guides.',
    },
  },
];
