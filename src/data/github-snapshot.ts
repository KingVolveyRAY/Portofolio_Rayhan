export interface RepoSnapshot {
  name: string;
  fullName: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
  url: string;
  topics: string[];
}

export const githubSnapshot: Record<string, RepoSnapshot> = {
  'dashboard-kualitas-air': {
    name: 'water-quality-iot-dashboard',
    fullName: 'KingVolveyRAY/water-quality-iot-dashboard',
    description: 'ESP32 water quality monitoring system with pH, TDS, and turbidity probes streaming to real-time PWA.',
    language: 'C++ / TypeScript',
    stars: 12,
    forks: 3,
    updatedAt: '2026-10-14',
    url: 'https://github.com/KingVolveyRAY',
    topics: ['esp32', 'iot', 'sensors', 'pwa', 'nextjs', 'mqtt'],
  },
  'woodguard': {
    name: 'woodguard-esp32cam-telemetry',
    fullName: 'KingVolveyRAY/woodguard-esp32cam-telemetry',
    description: 'Plant monitoring and pest detection system using ESP32-CAM with Telegram bot alerts.',
    language: 'C++ / JavaScript',
    stars: 8,
    forks: 2,
    updatedAt: '2026-09-28',
    url: 'https://github.com/KingVolveyRAY',
    topics: ['esp32-cam', 'pir-sensor', 'deep-sleep', 'telegram-bot'],
  },
  'riverguard': {
    name: 'riverguard-telemetry',
    fullName: 'KingVolveyRAY/riverguard-telemetry',
    description: 'Water level and turbidity telemetry with solar power support for river monitoring.',
    language: 'C++',
    stars: 15,
    forks: 4,
    updatedAt: '2026-11-02',
    url: 'https://github.com/KingVolveyRAY',
    topics: ['iot', 'ultrasonic', 'turbidity', 'esp32', 'water-telemetry'],
  },
  'transsim': {
    name: 'transsim-robot-kinematics',
    fullName: 'KingVolveyRAY/transsim-robot-kinematics',
    description: 'Kinematic robot simulator for testing GA25 DC motors and encoder pulse responses on HTML5 canvas.',
    language: 'TypeScript',
    stars: 9,
    forks: 1,
    updatedAt: '2026-08-19',
    url: 'https://github.com/KingVolveyRAY',
    topics: ['robotics', 'simulation', 'canvas', 'typescript', 'pid-control'],
  },
  'dwp-kemenag': {
    name: 'dwp-kemenag-backend-api',
    fullName: 'KingVolveyRAY/dwp-kemenag-backend-api',
    description: 'Modular enterprise RESTful API for membership and event management in government agency.',
    language: 'TypeScript / NestJS',
    stars: 6,
    forks: 2,
    updatedAt: '2026-10-05',
    url: 'https://github.com/KingVolveyRAY',
    topics: ['nestjs', 'postgresql', 'prisma', 'jwt-auth', 'docker'],
  },
  'kantinku': {
    name: 'kantinku-preorder-system',
    fullName: 'KingVolveyRAY/kantinku-preorder-system',
    description: 'Campus pre-order food ordering application with digital queuing and QR verification.',
    language: 'TypeScript / Next.js',
    stars: 11,
    forks: 3,
    updatedAt: '2026-07-22',
    url: 'https://github.com/KingVolveyRAY',
    topics: ['nextjs', 'supabase', 'qr-code', 'realtime'],
  },
  'kost-isnina': {
    name: 'kost-isnina-management',
    fullName: 'KingVolveyRAY/kost-isnina-management',
    description: 'Boarding house tenant management dashboard with repair ticket tracking.',
    language: 'JavaScript / React',
    stars: 5,
    forks: 1,
    updatedAt: '2026-06-15',
    url: 'https://github.com/KingVolveyRAY',
    topics: ['react', 'nodejs', 'express', 'mysql'],
  },
  'peminjaman-mandala-robotics': {
    name: 'mandala-robotics-inventory',
    fullName: 'KingVolveyRAY/mandala-robotics-inventory',
    description: 'Robotics lab component inventory tracking and student borrowing portal.',
    language: 'TypeScript / Next.js',
    stars: 7,
    forks: 2,
    updatedAt: '2026-05-30',
    url: 'https://github.com/KingVolveyRAY',
    topics: ['nextjs', 'postgresql', 'inventory-system', 'robotics'],
  },
};
