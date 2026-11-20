import { Language } from '@/types';

export const translations = {
  nav: {
    home: { id: 'Beranda', en: 'Home' },
    projects: { id: 'Proyek', en: 'Projects' },
    services: { id: 'Layanan', en: 'Services' },
    about: { id: 'Tentang', en: 'About' },
    contact: { id: 'Kontak', en: 'Contact' },
    downloadCv: { id: 'Unduh CV', en: 'Download CV' },
    switchLang: { id: 'EN', en: 'ID' },
  },
  hero: {
    badge: {
      id: 'Terbuka untuk Magang & Freelance',
      en: 'Open for Internship & Freelance',
    },
    greeting: {
      id: 'Halo, saya',
      en: 'Hello, I am',
    },
    name: {
      id: 'Muhammad Rayhan Ramadhan',
      en: 'Muhammad Rayhan Ramadhan',
    },
    tagline: {
      id: 'IoT Developer yang membangun sistem dari sensor sampai dashboard',
      en: 'IoT Developer building systems from sensor to dashboard',
    },
    description: {
      id: 'Mahasiswa Teknik Informatika UIN Syarif Hidayatullah Jakarta, mentor robotika di Scitech Academy, dan praktisi sistem terdistribusi. Menghubungkan mikrokontroler fisik, telemetri real-time, dan aplikasi web modern.',
      en: 'Informatics Engineering student at UIN Syarif Hidayatullah Jakarta, robotics mentor at Scitech Academy, and distributed systems practitioner. Bridging physical microcontrollers, real-time telemetry, and modern web applications.',
    },
    ctaProjects: { id: 'Lihat Proyek', en: 'View Projects' },
    ctaCv: { id: 'Unduh CV', en: 'Download CV' },
    ctaContact: { id: 'Hubungi Saya', en: 'Contact Me' },
    statusOnline: { id: 'Sistem Telemetri Aktif', en: 'Telemetry System Active' },
    statusLocation: { id: 'Jakarta / Tangerang Selatan', en: 'Jakarta / South Tangerang' },
  },
  featured: {
    title: { id: 'Proyek Unggulan', en: 'Featured Projects' },
    subtitle: {
      id: 'Tiga proyek sistem IoT pilihan yang menghubungkan instrumentasi fisik mikrokontroler dengan antarmuka web modern.',
      en: 'Curated IoT systems connecting physical microcontroller instrumentation to modern web interfaces.',
    },
    viewAll: { id: 'Lihat Semua 8 Proyek', en: 'View All 8 Projects' },
    readCaseStudy: { id: 'Baca Studi Kasus', en: 'Read Case Study' },
    viewRepo: { id: 'Repositori GitHub', en: 'GitHub Repository' },
  },
  projectsPage: {
    title: { id: 'Koleksi Proyek & Studi Kasus', en: 'Projects & Case Studies' },
    subtitle: {
      id: 'Eksplorasi sistem IoT, layanan backend, dan aplikasi web yang telah dibangun lengkap dengan keputusan arsitekturnya.',
      en: 'Explore IoT systems, backend services, and web applications built with intentional architectural decisions.',
    },
    allCategories: { id: 'Semua Kategori', en: 'All Categories' },
    filterCategory: { id: 'Kategori', en: 'Category' },
    filterTech: { id: 'Teknologi', en: 'Technology' },
    allTech: { id: 'Semua Teknologi', en: 'All Technologies' },
    emptyTitle: { id: 'Tidak Ada Proyek yang Cocok', en: 'No Projects Found' },
    emptyDesc: {
      id: 'Belum ada proyek dengan kombinasi filter yang Anda pilih. Silakan reset filter untuk melihat semua proyek.',
      en: 'No projects match your current filter combination. Please reset filters to view all projects.',
    },
    resetFilter: { id: 'Reset Filter', en: 'Reset Filters' },
    showingCount: { id: 'Menampilkan {count} proyek', en: 'Showing {count} projects' },
  },
  caseStudy: {
    back: { id: 'Kembali ke Daftar Proyek', en: 'Back to Projects' },
    roleLabel: { id: 'Peran Proyek', en: 'Project Role' },
    statusLabel: { id: 'Status Proyek', en: 'Project Status' },
    categoryLabel: { id: 'Kategori', en: 'Category' },
    contextTitle: { id: 'Konteks & Masalah', en: 'Context & Problem' },
    roleTitle: { id: 'Peran & Tanggung Jawab', en: 'Role & Responsibilities' },
    featuresTitle: { id: 'Solusi & Fitur Utama', en: 'Solution & Key Features' },
    architectureTitle: { id: 'Arsitektur Sistem & Keputusan Teknis', en: 'System Architecture & Technical Choices' },
    challengesTitle: { id: 'Tantangan Teknis & Cara Mengatasinya', en: 'Technical Challenges & Solutions' },
    resultsTitle: { id: 'Hasil & Dampak Nyata', en: 'Results & Tangible Impact' },
    stackTitle: { id: 'Teknologi yang Digunakan', en: 'Technologies Used' },
    actionsTitle: { id: 'Akses Tautan', en: 'Project Links' },
    completedBadge: { id: 'Selesai & Teruji', en: 'Completed & Tested' },
  },
  servicesPage: {
    title: { id: 'Layanan & Kolaborasi', en: 'Services & Collaboration' },
    subtitle: {
      id: 'Tiga penawaran layanan terarah untuk kebutuhan klien freelance, pengembangan prototipe, dan edukasi robotika.',
      en: 'Focused professional offerings for freelance clients, hardware prototyping, and robotics education.',
    },
    deliverablesTitle: { id: 'Keluaran yang Diberikan:', en: 'Deliverables Included:' },
    ctaDiscuss: { id: 'Mulai Diskusi Proyek', en: 'Start Project Discussion' },
    workflowTitle: { id: 'Alur Kerja Proyek', en: 'Project Workflow' },
    workflowSubtitle: {
      id: 'Proses bertahap yang terstruktur untuk memastikan hasil kerja sesuai kebutuhan spesifikasi Anda.',
      en: 'Structured milestone progression ensuring deliverables match your exact technical specifications.',
    },
    internshipBox: {
      title: { id: 'Sedang Mencari Tempat Magang?', en: 'Looking for an Intern?' },
      desc: {
        id: 'Saya terbuka untuk posisi magang IoT Developer, Embedded Systems, atau Backend Engineer. Siap berkontribusi dengan dedikasi tinggi dan kemampuan implementasi cepat.',
        en: 'I am open to internship opportunities in IoT Development, Embedded Systems, or Backend Engineering. Ready to contribute with strong technical execution and fast learning.',
      },
      cta: { id: 'Hubungi untuk Posisi Magang', en: 'Inquire for Internship' },
    },
  },
  aboutPage: {
    title: { id: 'Tentang Saya', en: 'About Me' },
    subtitle: {
      id: 'Cerita, filosofi kerja, dan rekam jejak teknis dalam dunia mikrokontroler dan rekayasa perangkat lunak.',
      en: 'Story, engineering philosophy, and technical track record in microcontrollers and software development.',
    },
    bio1: {
      id: 'Nama saya Muhammad Rayhan Ramadhan. Saya mahasiswa tingkat tiga Teknik Informatika di UIN Syarif Hidayatullah Jakarta. Minat saya berakar kuat pada persimpangan antara perangkat keras mikrokontroler fisik dan aplikasi web terdistribusi.',
      en: 'My name is Muhammad Rayhan Ramadhan. I am a third-year Informatics Engineering student at UIN Syarif Hidayatullah Jakarta. My passion centers on the intersection between physical microcontroller hardware and distributed web applications.',
    },
    bio2: {
      id: 'Sebagai mentor robotika di Scitech Academy dan mantan pimpinan klub robotika Mandala, saya terbiasa menerjemahkan konsep sirkuit dan logika kode menjadi perangkat fungsional yang stabil. Di kampus, saya juga dipercaya memimpin Departemen Kewirausahaan HIMTI UIN Jakarta.',
      en: 'As a robotics mentor at Scitech Academy and former leader of Mandala Robotic Club, I regularly translate circuit schematics and code logic into stable functional hardware. On campus, I lead the Entrepreneurship Department at HIMTI UIN Jakarta.',
    },
    bio3: {
      id: 'Filosofi saya sederhana: sebuah sistem harus berfungsi andal di lapangan, bukan hanya di atas kertas. Dari sensor analog di air sungai hingga dashboard responsif di ponsel pengguna, setiap baris kode ditulis dengan tujuan yang jelas.',
      en: 'My philosophy is pragmatic: a system must perform reliably in the field, not just in theory. From analog probes in riverbeds to responsive mobile dashboards, every line of code serves a verified purpose.',
    },
    skillsTitle: { id: 'Matriks Keahlian & Teknologi', en: 'Skills & Tech Matrix' },
    experienceTitle: { id: 'Pengalaman & Kepemimpinan', en: 'Experience & Leadership' },
    educationTitle: { id: 'Pendidikan & Kompetisi', en: 'Education & Competitions' },
    downloadCv: { id: 'Buka Halaman CV Lengkap', en: 'View Full CV Page' },
  },
  contactPage: {
    title: { id: 'Hubungi Saya', en: 'Get in Touch' },
    subtitle: {
      id: 'Tertarik mendiskusikan peluang magang, proyek freelance IoT, atau pelatihan robotika? Kirimkan pesan melalui formulir berikut.',
      en: 'Interested in discussing an internship opening, freelance IoT project, or robotics workshop? Reach out using the form below.',
    },
    form: {
      name: { id: 'Nama Lengkap', en: 'Full Name' },
      namePlaceholder: { id: 'Contoh: Ahmad Fauzi', en: 'e.g. Alex Johnson' },
      email: { id: 'Alamat Email', en: 'Email Address' },
      emailPlaceholder: { id: 'nama@instansi.com', en: 'name@organization.com' },
      purpose: { id: 'Keperluan Diskusi', en: 'Inquiry Purpose' },
      purposeSelect: { id: 'Pilih jenis keperluan...', en: 'Select inquiry type...' },
      purposeOptions: {
        internship: { id: 'Peluang Magang (Internship)', en: 'Internship Opportunity' },
        freelance: { id: 'Proyek Freelance IoT / Web', en: 'Freelance IoT / Web Project' },
        training: { id: 'Pelatihan Robotika / Workshop', en: 'Robotics Workshop / Training' },
        other: { id: 'Lainnya / Kolaborasi Teknis', en: 'Other / Technical Collaboration' },
      },
      message: { id: 'Pesan atau Detail Kebutuhan', en: 'Message or Project Details' },
      messagePlaceholder: {
        id: 'Jelaskan secara singkat ruang lingkup proyek atau kebutuhan magang Anda...',
        en: 'Briefly describe your project scope or internship requirements...',
      },
      submit: { id: 'Kirim Pesan', en: 'Send Message' },
      submitEmail: { id: 'Kirim via Email', en: 'Send via Email' },
      submitWhatsApp: { id: 'Kirim via WhatsApp', en: 'Send via WhatsApp' },
      channelHint: {
        id: 'Pilih jalur pengiriman: kirim pesan instan langsung ke WhatsApp Rayhan, atau kirimkan via email resmi.',
        en: 'Choose dispatch channel: start an instant chat directly on WhatsApp, or send via official email.',
      },
      sending: { id: 'Mengirimkan Pesan...', en: 'Sending Message...' },
      success: {
        id: 'Terima kasih! Pesan Anda berhasil dikirim ke email resmi saya. Saya akan menghubungi Anda kembali dalam waktu 1x24 jam.',
        en: 'Thank you! Your message was delivered successfully to my official inbox. I will get back to you within 24 hours.',
      },
      whatsappSuccess: {
        id: 'Pesan telah diformat untuk WhatsApp! Membuka percakapan langsung dengan Rayhan...',
        en: 'Message formatted for WhatsApp! Opening direct conversation with Rayhan...',
      },
      error: {
        id: 'Terjadi kendala saat mengirim pesan. Mohon periksa kembali isian formulir Anda atau gunakan tombol WhatsApp.',
        en: 'There was an issue sending your message. Please check the form fields or use the direct WhatsApp button.',
      },
      validationName: { id: 'Nama wajib diisi minimal 2 karakter.', en: 'Name is required (at least 2 characters).' },
      validationEmail: { id: 'Format alamat email tidak valid.', en: 'Invalid email address format.' },
      validationPurpose: { id: 'Silakan pilih keperluan diskusi.', en: 'Please select an inquiry purpose.' },
      validationMessage: { id: 'Pesan wajib diisi minimal 10 karakter.', en: 'Message must be at least 10 characters.' },
    },
    directContactsTitle: { id: 'Saluran Kontak Langsung', en: 'Direct Communication Channels' },
    emailAddress: 'rayhanramadhan.official@gmail.com',
    whatsappNumber: '62895333333333',
    whatsappDisplay: '+62 (WhatsApp Rayhan)',
    githubUrl: 'https://github.com/KingVolveyRAY',
    linkedinUrl: 'https://linkedin.com/in/muhammad-rayhan-ramadhan',
  },
  cvPage: {
    title: { id: 'Curriculum Vitae', en: 'Curriculum Vitae' },
    subtitle: {
      id: 'Versi publik terverifikasi untuk perekrutan magang dan evaluasi teknis.',
      en: 'Verified public version for internship recruitment and technical evaluation.',
    },
    printButton: { id: 'Cetak / Unduh PDF', en: 'Print / Save PDF' },
    privacyNote: {
      id: 'Catatan Privasi: Nomor telepon dan alamat tempat tinggal sengaja tidak dicantumkan pada versi web publik ini. Kontak resmi melalui email dan LinkedIn.',
      en: 'Privacy Notice: Phone number and personal address are intentionally excluded from this public web version. Official contact is handled via email and LinkedIn.',
    },
  },
  footer: {
    tagline: {
      id: 'Membangun jembatan antara instrumentasi fisik mikrokontroler dan antarmuka web modern.',
      en: 'Building reliable bridges between physical microcontroller instrumentation and modern web interfaces.',
    },
    navigationTitle: { id: 'Navigasi Halaman', en: 'Navigation' },
    connectTitle: { id: 'Koneksi & Kode', en: 'Connect & Code' },
    statusTitle: { id: 'Status Terkini', en: 'Current Status' },
    statusValue: {
      id: 'Terbuka untuk Magang & Freelance (2026/2027)',
      en: 'Open for Internship & Freelance (2026/2027)',
    },
    copyright: {
      id: 'Hak Cipta © 2026 Muhammad Rayhan Ramadhan. Hak cipta dilindungi.',
      en: 'Copyright © 2026 Muhammad Rayhan Ramadhan. All rights reserved.',
    },
  },
};

export function getTranslation<T>(obj: { id: T; en: T }, lang: Language): T {
  return obj[lang] || obj['id'];
}
