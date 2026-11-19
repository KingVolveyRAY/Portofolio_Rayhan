import { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'iot-embedded',
    name: {
      id: 'IoT & Embedded Systems',
      en: 'IoT & Embedded Systems',
    },
    icon: 'Cpu',
    description: {
      id: 'Perancangan sirkuit mikrokontroler, integrasi sensor fisik, dan transmisi telemetri real-time.',
      en: 'Microcontroller circuit design, physical sensor integration, and real-time telemetry pipelines.',
    },
    skills: [
      { name: 'ESP32 / ESP8266', level: 'Advanced', linkedProjectSlugs: ['dashboard-kualitas-air', 'woodguard', 'riverguard'] },
      { name: 'Arduino IDE & C/C++', level: 'Advanced', linkedProjectSlugs: ['dashboard-kualitas-air', 'woodguard'] },
      { name: 'ESP32-CAM', level: 'Proficient', linkedProjectSlugs: ['woodguard'] },
      { name: 'Sensor Analog & Digital (pH, TDS, Ultrasonic, PIR, Turbidity)', level: 'Advanced', linkedProjectSlugs: ['dashboard-kualitas-air', 'riverguard'] },
      { name: 'MQTT & WebSockets Protocol', level: 'Advanced', linkedProjectSlugs: ['dashboard-kualitas-air', 'riverguard'] },
      { name: 'Low Power & Deep Sleep Architecture', level: 'Proficient', linkedProjectSlugs: ['woodguard'] },
    ],
  },
  {
    id: 'backend',
    name: {
      id: 'Backend & API Architecture',
      en: 'Backend & API Architecture',
    },
    icon: 'Server',
    description: {
      id: 'Pengembangan RESTful API terstruktur, otentikasi aman, dan pemrosesan data asinkron.',
      en: 'Structured RESTful API design, secure authentication, and asynchronous data processing.',
    },
    skills: [
      { name: 'NestJS', level: 'Proficient', linkedProjectSlugs: ['dwp-kemenag'] },
      { name: 'Node.js & Express', level: 'Advanced', linkedProjectSlugs: ['woodguard', 'kost-isnina'] },
      { name: 'RESTful API Design', level: 'Advanced', linkedProjectSlugs: ['dwp-kemenag', 'kost-isnina'] },
      { name: 'JWT & Role-Based Access Control', level: 'Proficient', linkedProjectSlugs: ['dwp-kemenag'] },
      { name: 'Prisma ORM', level: 'Proficient', linkedProjectSlugs: ['dwp-kemenag'] },
    ],
  },
  {
    id: 'database',
    name: {
      id: 'Database & Data Storage',
      en: 'Database & Data Storage',
    },
    icon: 'Database',
    description: {
      id: 'Pemodelan skema relasional, optimasi query, dan sinkronisasi data real-time.',
      en: 'Relational schema modeling, query optimization, and real-time data synchronization.',
    },
    skills: [
      { name: 'PostgreSQL', level: 'Proficient', linkedProjectSlugs: ['dwp-kemenag', 'peminjaman-mandala-robotics'] },
      { name: 'MySQL', level: 'Proficient', linkedProjectSlugs: ['kost-isnina'] },
      { name: 'Supabase Realtime', level: 'Proficient', linkedProjectSlugs: ['kantinku'] },
      { name: 'Relational Schema Design & Indexing', level: 'Proficient', linkedProjectSlugs: ['dwp-kemenag', 'kost-isnina'] },
    ],
  },
  {
    id: 'frontend',
    name: {
      id: 'Frontend & Web Applications',
      en: 'Frontend & Web Applications',
    },
    icon: 'Layout',
    description: {
      id: 'Antarmuka web interaktif, dasbor monitoring telemetri, dan Progressive Web Apps responsif.',
      en: 'Interactive web interfaces, telemetry monitoring dashboards, and responsive Progressive Web Apps.',
    },
    skills: [
      { name: 'React & Next.js (App Router)', level: 'Advanced', linkedProjectSlugs: ['dashboard-kualitas-air', 'kantinku', 'peminjaman-mandala-robotics'] },
      { name: 'TypeScript', level: 'Advanced', linkedProjectSlugs: ['dashboard-kualitas-air', 'transsim', 'dwp-kemenag'] },
      { name: 'Tailwind CSS & Glassmorphism Design', level: 'Advanced', linkedProjectSlugs: ['dashboard-kualitas-air', 'woodguard', 'riverguard'] },
      { name: 'HTML5 Canvas & Kinematic Simulation', level: 'Proficient', linkedProjectSlugs: ['transsim'] },
      { name: 'Progressive Web Apps (PWA)', level: 'Proficient', linkedProjectSlugs: ['dashboard-kualitas-air'] },
    ],
  },
  {
    id: 'tools-hardware',
    name: {
      id: 'Tools, Hardware & Methodology',
      en: 'Tools, Hardware & Methodology',
    },
    icon: 'Wrench',
    description: {
      id: 'Perakitan fisik, pengujian instrumentasi laboratorium, serta kolaborasi pengembangan kode.',
      en: 'Physical hardware assembly, laboratory instrumentation testing, and software collaboration workflows.',
    },
    skills: [
      { name: 'Git & GitHub Collaboration', level: 'Advanced', linkedProjectSlugs: ['dwp-kemenag', 'peminjaman-mandala-robotics'] },
      { name: 'Postman & API Testing', level: 'Proficient', linkedProjectSlugs: ['dwp-kemenag'] },
      { name: 'Soldering & Circuit Prototyping', level: 'Advanced', linkedProjectSlugs: ['dashboard-kualitas-air', 'woodguard', 'riverguard'] },
      { name: 'Motor Drivers (GA25, L298N) & Encoders', level: 'Advanced', linkedProjectSlugs: ['transsim', 'peminjaman-mandala-robotics'] },
      { name: 'Docker (Containerization basics)', level: 'Intermediate', linkedProjectSlugs: ['dwp-kemenag'] },
    ],
  },
];
