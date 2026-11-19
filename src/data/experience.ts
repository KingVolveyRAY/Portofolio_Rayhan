import { TimelineItem } from '@/types';

export const timelineItems: TimelineItem[] = [
  {
    id: 'scitech-mentor',
    role: {
      id: 'Robotics Mentor',
      en: 'Robotics Mentor',
    },
    institution: 'Scitech Academy',
    period: {
      id: '08/2025 - Sekarang',
      en: '08/2025 - Present',
    },
    type: 'work',
    description: {
      id: 'Membimbing dan melatih siswa dalam perakitan robot, logika pemrograman mikrokontroler Arduino/ESP32, serta pemahaman sensor elektronika terapan.',
      en: 'Instructing and mentoring students in robotics assembly, Arduino/ESP32 microcontroller programming logic, and practical electronic sensors.',
    },
    achievements: {
      id: [
        'Menyusun silabus pembelajaran praktis dari dasar elektronika hingga integrasi sensor',
        'Membimbing tim siswa dalam persiapan kompetisi robotika tingkat regional dan nasional',
        'Mengembangkan modul peraga mikrokontroler interaktif untuk mempermudah pemahaman konsep logika sirkuit',
      ],
      en: [
        'Authored practical curricula spanning fundamentals of electronics to complex sensor integration',
        'Coached student teams preparing for regional and national youth robotics competitions',
        'Engineered interactive demonstration hardware kits to clarify circuit logic concepts',
      ],
    },
    tags: ['Robotics', 'Mentorship', 'Arduino', 'Electronics', 'Curriculum Design'],
  },
  {
    id: 'mandala-robotics',
    role: {
      id: 'Head of Robotic Club',
      en: 'Head of Robotic Club',
    },
    institution: 'Mandala Robotic Club',
    period: {
      id: '01/2023 - 01/2024',
      en: '01/2023 - 01/2024',
    },
    type: 'leadership',
    description: {
      id: 'Memimpin organisasi klub robotika sekolah, mengoordinasikan tim riset prototipe otomatisasi, serta mengelola inventaris komponen laboratorium.',
      en: 'Led school robotics club operations, coordinated prototyping teams in automation research, and managed lab hardware inventory.',
    },
    achievements: {
      id: [
        'Memimpin pengembangan prototipe Smart Farmer (monitoring kelembapan tanah otomatis)',
        'Merancang prototipe Smart Trolley berbasis sensor pelacak rute',
        'Menginisiasi proyek tempat sampah otomatis berbasis sensor ultrasonik',
        'Membangun sistem portal inventaris peminjaman modul lab untuk mencegah kehilangan alat',
      ],
      en: [
        'Spearheaded development of the Smart Farmer automated soil monitoring prototype',
        'Engineered a line-following Smart Trolley prototype for transport logistics',
        'Initiated touchless automated trash bin prototypes utilizing ultrasonic transducers',
        'Built a centralized lab components borrowing portal eliminating component loss',
      ],
    },
    tags: ['Team Leadership', 'Robotics Prototyping', 'Smart Systems', 'Sensor Integration'],
  },
  {
    id: 'himti-uin',
    role: {
      id: 'Head of Department Entrepreneurship',
      en: 'Head of Department Entrepreneurship',
    },
    institution: 'HIMTI UIN Syarif Hidayatullah Jakarta',
    period: {
      id: '07/2025 - Sekarang',
      en: '07/2025 - Present',
    },
    type: 'leadership',
    description: {
      id: 'Memimpin departemen kewirausahaan Himpunan Mahasiswa Teknik Informatika, merencanakan inisiatif pendanaan mandiri dan program kemitraan.',
      en: 'Leading the Entrepreneurship Department for the Informatics Student Association, planning sustainable revenue initiatives and sponsorships.',
    },
    achievements: {
      id: [
        'Mengelola alokasi anggaran dan strategi penjualan merchandise resmi organisasi mahasiswa',
        'Mengoordinasikan kemitraan sponsorship untuk agenda seminar dan workshop teknologi',
        'Sebelumnya berkontribusi aktif sebagai Staff Entrepreneurship (2024 - 2025)',
      ],
      en: [
        'Managed financial allocation and sales strategies for official student association merchandise',
        'Coordinated sponsor partnerships backing tech seminars and student hackathons',
        'Previously contributed as active Staff of Entrepreneurship (2024 - 2025)',
      ],
    },
    tags: ['Budget Management', 'Strategic Planning', 'Student Leadership', 'Partnerships'],
  },
  {
    id: 'imala',
    role: {
      id: 'Head of IMALA',
      en: 'Head of IMALA',
    },
    institution: 'Ikatan Mahasiswa Lebak (IMALA)',
    period: {
      id: '03/2025 - 03/2026',
      en: '03/2025 - 03/2026',
    },
    type: 'leadership',
    description: {
      id: 'Memimpin wadah organisasi kedaerahan mahasiswa asal Lebak, mengoordinasikan kegiatan pengabdian sosial dan edukasi kepemudaan.',
      en: 'Leading regional university student association, coordinating community outreach and youth educational development programs.',
    },
    tags: ['Community Outreach', 'Organization', 'Youth Advocacy'],
  },
  {
    id: 'uin-jakarta',
    role: {
      id: 'Mahasiswa S1 Teknik Informatika (Tahun ke-3)',
      en: 'Undergraduate Student in Informatics Engineering (3rd Year)',
    },
    institution: 'UIN Syarif Hidayatullah Jakarta',
    period: {
      id: '09/2024 - Sekarang',
      en: '09/2024 - Present',
    },
    type: 'education',
    description: {
      id: 'Fokus studi pada arsitektur sistem komputasi, Internet of Things (IoT), rekayasa perangkat lunak backend, dan struktur data.',
      en: 'Coursework emphasizing computing systems architecture, Internet of Things (IoT), backend software engineering, and data structures.',
    },
    tags: ['Computer Science', 'IoT Systems', 'Software Engineering', 'Networking'],
  },
  {
    id: 'cert-gdoc-aiml',
    role: {
      id: 'Peserta GDGoC AI/ML Weekly Class',
      en: 'Participant GDGoC AI/ML Weekly Class',
    },
    institution: 'Google Developer Groups on Campus (GDGoC)',
    period: {
      id: '2025',
      en: '2025',
    },
    type: 'certificate',
    description: {
      id: 'Pelatihan intensif implementasi model machine learning, neural networks, dan computer vision terapan.',
      en: 'Intensive weekly workshops on practical machine learning models, neural networks, and computer vision deployment.',
    },
    tags: ['Artificial Intelligence', 'Machine Learning', 'Computer Vision'],
  },
  {
    id: 'cert-gdoc-pm',
    role: {
      id: 'Peserta Workshop Product Manager',
      en: 'Participant Product Manager Workshop',
    },
    institution: 'Google Developer Groups on Campus (GDGoC)',
    period: {
      id: '2025',
      en: '2025',
    },
    type: 'certificate',
    description: {
      id: 'Workshop penyusunan Product Requirement Document (PRD), perancangan alur produk digital, dan validasi kebutuhan pengguna.',
      en: 'Hands-on training on authoring Product Requirement Documents (PRDs), digital roadmap drafting, and user feedback validation.',
    },
    tags: ['Product Management', 'PRD', 'Agile Product Lifecycle'],
  },
  {
    id: 'comp-arck',
    role: {
      id: 'Peserta Kompetisi Robotika Internasional ARCK',
      en: 'Participant Asian Robotic Competition for Kids (ARCK)',
    },
    institution: 'Asian Robotic Competition for Kids',
    period: {
      id: '2024',
      en: '2024',
    },
    type: 'certificate',
    description: {
      id: 'Kompetisi robotika tingkat Asia dengan tantangan pemrograman robot navigasi dan otomasi mekanik presisi.',
      en: 'Pan-Asian competitive robotics tournament focusing on navigational programming and precision electro-mechanical automation.',
    },
    tags: ['International Competition', 'Robotics', 'Autonomous Navigation'],
  },
  {
    id: 'comp-iymrc',
    role: {
      id: 'Peserta IYMRC',
      en: 'Participant IYMRC',
    },
    institution: 'International Youth Metaverse Robot Challenge',
    period: {
      id: '2024',
      en: '2024',
    },
    type: 'certificate',
    description: {
      id: 'Kompetisi tantangan inovasi robotika dan integrasi teknologi digital pemuda internasional.',
      en: 'International youth tournament spotlighting innovative robotics problem solving and digital systems integration.',
    },
    tags: ['IYMRC', 'Robotics Challenge', 'Innovation'],
  },
  {
    id: 'comp-kron',
    role: {
      id: 'Peserta Kontes Robot Nusantara (KRON)',
      en: 'Participant Kontes Robot Nusantara (KRON)',
    },
    institution: 'Kontes Robot Nusantara',
    period: {
      id: '2023',
      en: '2023',
    },
    type: 'certificate',
    description: {
      id: 'Ajang kompetisi robotika nasional yang menguji ketangguhan desain sirkuit mikrokontroler dan algoritma manuver sensor.',
      en: 'National robotics tournament assessing microcontroller circuitry resilience and sensor maneuvering algorithms.',
    },
    tags: ['National Competition', 'Hardware Reliability', 'Circuit Engineering'],
  },
];
