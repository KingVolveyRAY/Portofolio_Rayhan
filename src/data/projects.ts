import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'dashboard-kualitas-air',
    title: {
      id: 'Dashboard Kualitas Air Cuci Sayur',
      en: 'Vegetable Washing Water Quality Dashboard',
    },
    summary: {
      id: 'Sistem monitoring kualitas air berbasis ESP32 dan sensor terintegrasi dengan antarmuka PWA real-time untuk pengolahan pangan higienis.',
      en: 'ESP32-based water quality monitoring system with integrated sensors and real-time PWA dashboard for hygienic food processing.',
    },
    category: 'IoT & Web',
    stack: ['ESP32', 'Sensor pH', 'Sensor TDS', 'Sensor Turbidity', 'Next.js', 'Tailwind CSS', 'MQTT', 'WebSockets', 'PWA'],
    role: {
      id: 'Lead IoT & Fullstack Developer',
      en: 'Lead IoT & Fullstack Developer',
    },
    status: 'completed',
    featured: true,
    featuredOrder: 1,
    repoUrl: 'https://github.com/KingVolveyRAY',
    demoUrl: 'https://github.com/KingVolveyRAY',
    coverImage: '/images/projects/water-quality.svg',
    caseStudy: {
      context: {
        id: 'Proses pencucian sayur pada skala komersial dan rumah tangga membutuhkan air dengan tingkat keasaman, kejernihan, dan total padatan terlarut (TDS) yang terkontrol. Mengandalkan pengamatan visual sering kali terlambat mendeteksi air yang telah jenuh kotoran.',
        en: 'Washing vegetables at commercial or food preparation scale requires water with verified pH levels, clarity, and controlled total dissolved solids (TDS). Visual observation often fails to detect contaminated or saturated water in time.',
      },
      roleDetail: {
        id: 'Merancang arsitektur perangkat keras mikrokontroler ESP32, melakukan pengondisian sinyal analog untuk sensor pH, TDS, dan kekeruhan, memprogram transmisi data melalui protokol MQTT, serta membangun dashboard web responsif bertipe Progressive Web App (PWA).',
        en: 'Designed ESP32 hardware architecture, implemented analog signal conditioning for pH, TDS, and turbidity probes, programmed telemetry data transmission over MQTT, and built a responsive Progressive Web App (PWA) dashboard.',
      },
      features: {
        id: [
          'Pengukuran nilai pH, TDS (PPM), dan Turbidity (NTU) secara kontinyu',
          'Dashboard visual berbasis PWA dengan indikator status kelayakan air otomatis (Aman, Waspada, Ganti Air)',
          'Protokol pertukaran data berbobot ringan via MQTT dengan latensi rendah',
          'Fitur offline capability dan instalasi PWA pada ponsel pengguna',
          'Riwayat pengukuran harian untuk pencatatan standar sanitasi',
        ],
        en: [
          'Continuous telemetry of pH, TDS (PPM), and Turbidity (NTU) parameters',
          'PWA visual dashboard with automatic water status indicator (Safe, Caution, Replace)',
          'Lightweight MQTT messaging protocol with low-latency updates',
          'Offline caching and homescreen installability as a PWA on mobile devices',
          'Historical measurement logs for sanitation compliance records',
        ],
      },
      architecture: {
        description: {
          id: 'Perangkat akuisisi sensor (ESP32) membaca sinyal analog melalui voltage divider dan filter hardware, kemudian memproses nilai rata-rata bergerak (moving average). Data dikirim setiap 3 detik ke broker MQTT, lalu diterima oleh server Next.js yang mendistribusikan data ke antarmuka klien via WebSockets.',
          en: 'Sensor probe signals are acquired by an ESP32 microcontroller using hardware filters and voltage conditioning, smoothed with a moving-average algorithm, and pushed every 3 seconds to an MQTT broker. The Next.js dashboard receives and streams updates to clients via WebSockets.',
        },
        techDecisions: [
          {
            tech: 'ESP32 Microcontroller',
            reason: {
              id: 'Memiliki modul WiFi bawaan bertenaga rendah dengan ADC multi-kanal yang cukup untuk 3 sensor analog sekaligus.',
              en: 'Built-in WiFi connectivity with sufficient multi-channel ADCs to drive three analog sensors simultaneously without external ADC chips.',
            },
          },
          {
            tech: 'MQTT Protocol',
            reason: {
              id: 'Overhead paket data sangat kecil sehingga hemat bandwidth dan stabil pada jaringan nirkabel lokal.',
              en: 'Extremely lightweight packet overhead, ensuring reliable delivery even over congested local wireless networks.',
            },
          },
          {
            tech: 'Next.js & PWA',
            reason: {
              id: 'Menyediakan rendering cepat, integrasi WebSockets native, serta dapat dipasang di smartphone petugas tanpa perlu instalasi aplikasi toko.',
              en: 'Fast rendering, native WebSocket integration, and ability to be installed directly on operator smartphones without app store friction.',
            },
          },
        ],
      },
      challenges: [
        {
          problem: {
            id: 'Fluktuasi pembacaan analog pada sensor kekeruhan akibat noise listrik dari pompa air.',
            en: 'Analog reading fluctuations on the turbidity sensor caused by electrical noise from adjacent water pump motors.',
          },
          solution: {
            id: 'Menambahkan kapasitor decoupling pada jalur power sensor dan menerapkan algoritma exponential moving average pada firmware ESP32.',
            en: 'Added decoupling capacitors to sensor power rails and implemented an exponential moving average algorithm in the ESP32 firmware.',
          },
        },
        {
          problem: {
            id: 'Kebutuhan pemantauan di area dapur basah dengan koneksi internet yang kadang putus-nyambung.',
            en: 'Need for continuous monitoring in wet kitchen environments with intermittent internet connectivity.',
          },
          solution: {
            id: 'Penerapan caching data lokal di memori ESP32 serta konfigurasi Service Worker pada PWA untuk tetap menampilkan data sesi terakhir saat offline.',
            en: 'Implemented local buffer caching on the ESP32 and configured PWA Service Workers to preserve and display last known readings during offline periods.',
          },
        },
      ],
      results: {
        id: 'Prototipe berhasil diuji dengan akurasi pembacaan pH mendekati 97% dibandingkan alat ukur laboratorium standar, serta memberikan peringatan dini pergantian air dalam waktu kurang dari 2 detik saat kekeruhan melebihi ambang batas.',
        en: 'The prototype demonstrated 97% pH reading accuracy compared to standard laboratory probes, successfully alerting operators to replace water within 2 seconds of turbidity exceeding safety thresholds.',
      },
      metrics: [
        { label: { id: 'Latensi Telemetri', en: 'Telemetry Latency' }, value: '< 2.0s' },
        { label: { id: 'Akurasi Pengukuran', en: 'Measurement Accuracy' }, value: '97%' },
        { label: { id: 'Sensor Terintegrasi', en: 'Integrated Sensors' }, value: '3 Probes' },
      ],
    },
  },
  {
    slug: 'woodguard',
    title: {
      id: 'WOODGUARD',
      en: 'WOODGUARD',
    },
    summary: {
      id: 'Solusi monitoring tanaman dan deteksi dini hama kayu berbasis ESP32-CAM dengan transmisi visual serta notifikasi bot Telegram otomatis.',
      en: 'Plant monitoring and early wood pest detection solution powered by ESP32-CAM with visual transmission and automated Telegram notifications.',
    },
    category: 'IoT & Web',
    stack: ['ESP32-CAM', 'Sensor PIR', 'Node.js', 'WebSockets', 'Telegram Bot API', 'Tailwind CSS'],
    role: {
      id: 'IoT Hardware & Backend Developer',
      en: 'IoT Hardware & Backend Developer',
    },
    status: 'completed',
    featured: true,
    featuredOrder: 2,
    repoUrl: 'https://github.com/KingVolveyRAY',
    demoUrl: 'https://github.com/KingVolveyRAY',
    coverImage: '/images/projects/woodguard.svg',
    caseStudy: {
      context: {
        id: 'Kerusakan pada tanaman dan komoditas kayu bernilai tinggi akibat hama rayap dan serangga perusak sering kali baru disadari setelah struktur dalamnya keropos. Diperlukan sistem pengawasan visual terdistribusi yang hemat energi.',
        en: 'Pest damage on valuable timber and agricultural plants is frequently discovered only after internal structural compromise has occurred. A low-power, distributed visual monitoring system was required.',
      },
      roleDetail: {
        id: 'Merancang arsitektur low-power dengan mode deep-sleep pada ESP32-CAM, menghubungkan trigger sensor gerak pasif infra-merah (PIR), mengoptimalkan kompresi gambar JPEG, dan mengintegrasikan webhook bot Telegram untuk peringatan instan.',
        en: 'Engineered low-power deep-sleep architecture on the ESP32-CAM, interfaced passive infrared (PIR) motion triggers, optimized JPEG image compression, and integrated Telegram bot webhooks for instantaneous mobile alerts.',
      },
      features: {
        id: [
          'Pengambilan foto otomatis beresolusi teroptimasi saat sensor mendeteksi aktivitas pergerakan',
          'Mode deep-sleep untuk menghemat konsumsi baterai di area minim pasokan listrik',
          'Notifikasi pesan instan beserta tangkapan foto langsung ke grup Telegram pengelola',
          'Dashboard web untuk meninjau arsip tangkapan kamera dan log waktu deteksi',
          'Indikator tegangan baterai telemetri untuk pemantauan daya jarak jauh',
        ],
        en: [
          'Automatic optimized resolution photo capture triggered by motion sensor detection',
          'Deep-sleep power management maximizing battery life in off-grid deployments',
          'Instant notification with captured image delivered straight to a Telegram channel',
          'Web dashboard to browse chronological photo archives and event timestamps',
          'Remote telemetry battery level monitoring for timely maintenance',
        ],
      },
      architecture: {
        description: {
          id: 'Modul ESP32-CAM berada dalam status sleep berdaya ultra-rendah (<1mA). Saat sensor PIR mendeteksi pergerakan, mikrokontroler bangun dalam hitungan milidetik, menginisialisasi modul OV2640, mengambil gambar, mengunggahnya ke server via HTTP POST, memicu pengiriman Telegram, lalu kembali ke mode deep-sleep.',
          en: 'The ESP32-CAM unit remains in an ultra-low power sleep state (<1mA). When the PIR sensor detects motion, the module wakes in milliseconds, initializes the OV2640 camera, captures an image, transmits it via HTTP POST to the backend, triggers the Telegram alert, and re-enters sleep.',
        },
        techDecisions: [
          {
            tech: 'ESP32-CAM with OV2640',
            reason: {
              id: 'Kombinasi mikrokontroler dan kamera mandiri yang sangat terjangkau dengan konsumsi daya yang dapat diatur.',
              en: 'Self-contained, highly cost-effective microcontroller and camera module with customizable power configurations.',
            },
          },
          {
            tech: 'Telegram Bot API',
            reason: {
              id: 'Memungkinkan staf menerima peringatan foto secara instan tanpa perlu membangun infrastruktur push notification yang rumit.',
              en: 'Provides zero-friction instant photo delivery without requiring complex dedicated push-notification infrastructure.',
            },
          },
          {
            tech: 'Node.js Event-driven Server',
            reason: {
              id: 'Menangani aliran data biner gambar dan dispatch notifikasi asinkron dengan konsumsi memori ringan.',
              en: 'Efficient handling of binary image streams and asynchronous notification dispatching with a minimal memory footprint.',
            },
          },
        ],
      },
      challenges: [
        {
          problem: {
            id: 'Konsumsi daya kamera modul OV2640 yang boros baterai jika dihidupkan secara kontinyu.',
            en: 'High power consumption of the OV2640 camera module when kept continuously active on battery power.',
          },
          solution: {
            id: 'Menerapkan arsitektur wake-on-interrupt menggunakan pin RTC GPIO, memutus daya kamera saat tidak mengambil gambar.',
            en: 'Implemented RTC GPIO wake-on-interrupt architecture, cutting camera power rails when not capturing images.',
          },
        },
        {
          problem: {
            id: 'Keterbatasan memori internal RAM ESP32 saat memproses frame gambar resolusi tinggi.',
            en: 'Internal RAM constraints on the ESP32 when allocating buffers for high-resolution image frames.',
          },
          solution: {
            id: 'Mengaktifkan alokasi buffer ke PSRAM eksternal sebesar 4MB serta mengatur format kompresi JPEG tingkat 10-12 untuk efisiensi transfer.',
            en: 'Enabled buffer allocation in the 4MB external PSRAM and configured JPEG quality compression levels 10-12 for optimal transfer efficiency.',
          },
        },
      ],
      results: {
        id: 'Sistem mampu beroperasi hingga 3 minggu dengan satu daya baterai 18650 pada frekuensi deteksi rata-rata 15 kali per hari, dengan waktu pengiriman foto ke Telegram di bawah 4 detik.',
        en: 'The system operated reliably for up to 3 weeks on a single 18650 cell at an average trigger rate of 15 events per day, delivering photos to Telegram in under 4 seconds.',
      },
      metrics: [
        { label: { id: 'Waktu Pengiriman Alert', en: 'Alert Dispatch Time' }, value: '< 4.0s' },
        { label: { id: 'Daya Siaga', en: 'Standby Current' }, value: '< 1.2mA' },
        { label: { id: 'Masa Pakai Baterai', en: 'Field Battery Life' }, value: '~3 Minggu' },
      ],
    },
  },
  {
    slug: 'riverguard',
    title: {
      id: 'RiverGuard',
      en: 'RiverGuard',
    },
    summary: {
      id: 'Sistem telemetri ketinggian dan kekeruhan air sungai untuk peringatan dini potensi banjir dan pemantauan sedimentasi berbasis IoT.',
      en: 'River water level and turbidity telemetry system for early flood warning and sedimentation tracking built with IoT.',
    },
    category: 'IoT',
    stack: ['ESP32', 'Sensor Ultrasonik JSN-SR04T', 'Sensor Turbidity', 'Modul Panel Surya', 'MQTT', 'Tailwind CSS'],
    role: {
      id: 'IoT Hardware & Telemetry Developer',
      en: 'IoT Hardware & Telemetry Developer',
    },
    status: 'completed',
    featured: true,
    featuredOrder: 3,
    repoUrl: 'https://github.com/KingVolveyRAY',
    demoUrl: 'https://github.com/KingVolveyRAY',
    coverImage: '/images/projects/riverguard.svg',
    caseStudy: {
      context: {
        id: 'Fluktuasi debit air sungai saat musim penghujan sering memicu banjir bandang di pemukiman sekitar tanpa adanya waktu evakuasi yang memadai bagi warga.',
        en: 'Abrupt water level surges in rivers during monsoon seasons frequently cause flash floods in adjacent settlements without sufficient warning for evacuation.',
      },
      roleDetail: {
        id: 'Merancang instalasi sensor ultrasonik tahan air (waterproof), kalibrasi rentang jarak permukaan air dari bibir sungai, kalkulasi status siaga (Normal, Waspada, Siaga, Awas), dan integrasi modul transmisi jarak jauh.',
        en: 'Engineered waterproof ultrasonic sensor mounting, calibrated water surface distance calculations, computed flood warning alert tiers, and integrated remote telemetry transmission.',
      },
      features: {
        id: [
          'Sensor ultrasonik tahan air JSN-SR04T untuk pengukuran jarak muka air tanpa kontak langsung',
          'Sensor kekeruhan untuk mendeteksi peningkatan lumpur dan material erosi hulu sungai',
          'Sistem catu daya mandiri dengan panel surya dan modul charging baterai',
          'Alarm peringatan bertingkat otomatis saat muka air melampaui batas aman',
          'Grafik tren kenaikan permukaan air per jam untuk analisis kecepatan luapan',
        ],
        en: [
          'Waterproof JSN-SR04T ultrasonic sensor measuring water distance without physical fluid contact',
          'Turbidity telemetry detecting upstream erosion and silt surges',
          'Self-sufficient power system using a solar panel and charging circuit',
          'Graduated multi-tier alert triggers when water breaches threshold levels',
          'Hourly water level trend graphs for flood crest progression analysis',
        ],
      },
      architecture: {
        description: {
          id: 'Sensor JSN-SR04T ditempatkan pada struktur jembatan di atas sungai mengukur jarak ke air. Data diproses oleh ESP32 dengan filter toleransi pantulan gelombang air, dipaketkan dalam format JSON ringan, dan dikirim ke server pusat melalui MQTT.',
          en: 'The JSN-SR04T probe is mounted on bridge structures overlooking the river. The ESP32 filters surface wave noise, packages metric payloads as concise JSON, and forwards data to the central server via MQTT.',
        },
        techDecisions: [
          {
            tech: 'JSN-SR04T Waterproof Transducer',
            reason: {
              id: 'Tahan percikan air dan kelembapan tinggi di lingkungan luar ruangan dengan jangkauan ukur 20cm hingga 600cm.',
              en: 'Moisture and splash resistant in harsh outdoor conditions with a dependable measuring range of 20cm to 600cm.',
            },
          },
          {
            tech: 'Solar Power Integration',
            reason: {
              id: 'Menjamin sistem tetap hidup di lokasi sungai terpencil tanpa ketergantungan pada jaringan listrik PLN.',
              en: 'Ensures continuous operation at remote riverbank sites without reliance on municipal power grids.',
            },
          },
          {
            tech: 'Multi-Threshold Alert System',
            reason: {
              id: 'Memberikan jeda waktu tindakan preventif sebelum air benar-benar meluap ke pemukiman penduduk.',
              en: 'Provides critical action windows for emergency teams before flood waters spill over riverbanks.',
            },
          },
        ],
      },
      challenges: [
        {
          problem: {
            id: 'Permukaan air sungai yang bergelombang dan sampah yang lewat menyebabkan deviasi pembacaan ultrasonik.',
            en: 'Ripples on turbulent water surfaces and floating debris causing momentary ultrasonic echo deviations.',
          },
          solution: {
            id: 'Menerapkan algoritma median filtering dari 10 kali pembacaan berturut-turut untuk mengeliminasi nilai anomali (outliers).',
            en: 'Applied a statistical median filter across 10 consecutive pulses to eliminate sporadic outliers before broadcasting.',
          },
        },
        {
          problem: {
            id: 'Kondisi cuaca ekstrem luar ruangan dengan panas dan kelembapan tinggi.',
            en: 'Harsh outdoor environmental conditions with high thermal variability and humidity.',
          },
          solution: {
            id: 'Merakit komponen ke dalam enclosure berventilasi kedap air IP65 dengan penahan kondensasi silika gel.',
            en: 'Housed all circuitry inside an IP65 waterproof ventilated enclosure with silica gel condensation absorbers.',
          },
        },
      ],
      results: {
        id: 'Telah teruji akurat dalam mendeteksi kenaikan air dengan deviasi kurang dari 1.5 cm pada rentang pengukuran 3 meter, memberikan notifikasi status Siaga 20 menit lebih cepat daripada metode manual.',
        en: 'Successfully tested with distance deviation under 1.5 cm across a 3-meter measurement envelope, delivering alert notifications 20 minutes earlier than manual patrols.',
      },
      metrics: [
        { label: { id: 'Toleransi Akurasi', en: 'Accuracy Tolerance' }, value: '±1.5cm' },
        { label: { id: 'Jarak Pengukuran', en: 'Operating Range' }, value: '20-600cm' },
        { label: { id: 'Peringatan Dini', en: 'Early Warning Advantage' }, value: '20 Menit' },
      ],
    },
  },
  {
    slug: 'transsim',
    title: {
      id: 'TransSim Robot Simulator',
      en: 'TransSim Robot Simulator',
    },
    summary: {
      id: 'Aplikasi web simulasi kinematis pergerakan robot untuk menguji motor DC GA25 dan feedback rotary encoder secara visual sebelum perakitan mekanik.',
      en: 'Kinematic robot simulation web app for testing GA25 DC motors and rotary encoder feedback before physical assembly.',
    },
    category: 'Web App',
    stack: ['React', 'TypeScript', 'HTML5 Canvas API', 'Chart.js', 'Tailwind CSS'],
    role: {
      id: 'Frontend & Simulation Developer',
      en: 'Frontend & Simulation Developer',
    },
    status: 'completed',
    featured: false,
    repoUrl: 'https://github.com/KingVolveyRAY',
    demoUrl: 'https://github.com/KingVolveyRAY',
    coverImage: '/images/projects/transsim.svg',
    caseStudy: {
      context: {
        id: 'Dalam perakitan robot di klub robotika, pengujian motor dan tuning parameter kontrol PID langsung di sirkuit fisik sering kali berisiko merusak roda gigi atau gearbox akibat overcurrent dan tabrakan.',
        en: 'During robotics prototyping at Mandala Robotic Club, physical trial-and-error testing of motors and PID tuning posed risks of gear stripped damage and overcurrent burnout.',
      },
      roleDetail: {
        id: 'Mengembangkan visualisasi canvas interaktif berbasis matematika kinematis diferensial, menghitung simulasi pulsa encoder per rotasi (PPR), serta memplot grafik kecepatan motor secara real-time.',
        en: 'Developed interactive HTML5 canvas visualizations based on differential kinematic equations, simulated encoder pulses per revolution (PPR), and plotted real-time velocity curves.',
      },
      features: {
        id: [
          'Simulasi visual pergerakan robot 2 roda diferensial pada kanvas grafis interaktif',
          'Konfigurasi parameter motor GA25: tegangan PWM, rasio gir, dan PPR encoder',
          'Grafik telemetri kecepatan putar (RPM) dan sudut tempuh berbasis Chart.js',
          'Uji algoritma PID sederhana untuk mengamati respon kestabilan kecepatan motor',
          'Ekspor parameter kalkulasi untuk dimasukkan ke kode Arduino / ESP32 fisik',
        ],
        en: [
          'Interactive 2-wheel differential drive robot movement simulation on HTML5 canvas',
          'Configurable GA25 motor specs: PWM input voltage, gear ratio, and encoder PPR',
          'Real-time RPM telemetry and rotation angle plots rendered with Chart.js',
          'Basic PID controller tuner to inspect velocity stabilization response curves',
          'Export calculation configurations directly for physical Arduino / ESP32 sketch integration',
        ],
      },
      architecture: {
        description: {
          id: 'Aplikasi murni berjalan di sisi klien (client-side physics engine) dengan siklus frame requestAnimationFrame 60 FPS. Logika kalkulasi pulsa encoder dieksekusi secara diskrit untuk merefleksikan karakteristik sirkuit mikrokontroler.',
          en: 'Pure client-side physics engine running at 60 FPS using requestAnimationFrame. Discrete encoder pulse calculations reflect actual microcontroller interrupt behavior.',
        },
        techDecisions: [
          {
            tech: 'HTML5 Canvas API',
            reason: {
              id: 'Memberikan kinerja rendering grafis tinggi dan fleksibilitas manipulasi koordinat 2D robot tanpa overhead DOM.',
              en: 'Delivers high graphic rendering performance and flexible 2D coordinate transformation without DOM tree overhead.',
            },
          },
          {
            tech: 'TypeScript',
            reason: {
              id: 'Mencegah kesalahan tipe pada kalkulasi trigonometri kinematis dan vektor fisika yang rumit.',
              en: 'Strict type safety preventing runtime bugs during complex trigonometric kinematics and physics vector calculations.',
            },
          },
        ],
      },
      challenges: [
        {
          problem: {
            id: 'Menjaga sinkronisasi waktu simulasi fisika (delta time) agar stabil di berbagai spesifikasi layar dan refresh rate.',
            en: 'Maintaining consistent physics simulation timing (delta time) across varying monitor refresh rates.',
          },
          solution: {
            id: 'Menerapkan fixed time-step physics loop yang independen dari rendering frame rate.',
            en: 'Implemented a fixed time-step physics loop detached from the visual rendering frame rate.',
          },
        },
      ],
      results: {
        id: 'TransSim menghemat waktu perakitan dan tuning mekanik tim robotika hingga 40%, serta mencegah kerusakan komponen fisik selama fase eksperimen parameter roda gigi.',
        en: 'TransSim reduced physical assembly and tuning time by 40% for the robotics team while preventing hardware component failure during gear ratio experimentation.',
      },
      metrics: [
        { label: { id: 'Frame Rate', en: 'Simulation Rate' }, value: '60 FPS' },
        { label: { id: 'Efisiensi Waktu Tuning', en: 'Tuning Efficiency' }, value: '+40%' },
      ],
    },
  },
  {
    slug: 'dwp-kemenag',
    title: {
      id: 'Backend DWP Kemenag',
      en: 'Backend DWP Kemenag',
    },
    summary: {
      id: 'Arsitektur backend modular berkinerja tinggi untuk pendataan anggota, manajemen agenda kegiatan, dan sistem pelaporan organisasi kementerian.',
      en: 'High-performance modular backend architecture for member records, event agendas, and departmental reporting for government agency.',
    },
    category: 'Backend',
    stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'JWT', 'Docker'],
    role: {
      id: 'Backend Architecture Developer',
      en: 'Backend Architecture Developer',
    },
    status: 'completed',
    featured: false,
    repoUrl: 'https://github.com/KingVolveyRAY',
    demoUrl: 'https://github.com/KingVolveyRAY',
    coverImage: '/images/projects/dwp-kemenag.svg',
    caseStudy: {
      context: {
        id: 'Dharma Wanita Persatuan (DWP) Kementerian Agama membutuhkan sistem digital terpadu untuk mendokumentasikan keanggotaan lintas wilayah kerja dan mengelola arsip laporan kegiatan secara transparan.',
        en: 'Dharma Wanita Persatuan (DWP) Ministry of Religious Affairs required an integrated digital backend to manage multi-regional member data and streamline activity reporting.',
      },
      roleDetail: {
        id: 'Merancang arsitektur RESTful API modular berbasis NestJS, pemodelan relasi database PostgreSQL dengan Prisma ORM, implementasi otentikasi JWT dengan Role-Based Access Control (RBAC), serta pembuatan dokumentasi Swagger OpenAPI.',
        en: 'Architected modular RESTful API services in NestJS, modeled relational PostgreSQL schemas via Prisma ORM, implemented JWT authentication with Role-Based Access Control (RBAC), and generated Swagger OpenAPI documentation.',
      },
      features: {
        id: [
          'Arsitektur modular (Users, Events, Reports, Auth, Audit Logs)',
          'Sistem otentikasi aman JWT dengan token refresh dan hashing password Argon2',
          'Role-Based Access Control untuk pemisahan akses Admin Pusat, Cabang, dan Anggota',
          'Sistem filter dan paginasi teroptimasi untuk query data ribuan anggota',
          'Dokumentasi API interaktif menggunakan Swagger UI',
        ],
        en: [
          'Modular domain architecture (Users, Events, Reports, Auth, Audit Logs)',
          'Secure JWT authentication pipeline with token refreshes and Argon2 password hashing',
          'Role-Based Access Control segregating Central Admin, Regional Branch, and Member privileges',
          'Optimized filtering and pagination queries serving thousands of membership records',
          'Interactive OpenAPI documentation via Swagger UI',
        ],
      },
      architecture: {
        description: {
          id: 'Struktur NestJS berlapis (Controllers -> Services -> Repositories/Prisma) menerapkan prinsip Dependency Injection untuk kemudahan pengujian dan perawatan jangka panjang. Containerized dengan Docker.',
          en: 'Layered NestJS architecture (Controllers -> Services -> Repositories/Prisma) leveraging Dependency Injection for testability and maintainability. Containerized with Docker.',
        },
        techDecisions: [
          {
            tech: 'NestJS Framework',
            reason: {
              id: 'Menyediakan standar arsitektur enterprise siap pakai dengan struktur modul yang terorganisir dan dukungan TypeScript penuh.',
              en: 'Provides opinionated enterprise architecture out-of-the-box with clean modular structure and first-class TypeScript support.',
            },
          },
          {
            tech: 'Prisma ORM & PostgreSQL',
            reason: {
              id: 'Memberikan schema migration yang aman, type-safe query generation, dan integritas data relasional yang kokoh.',
              en: 'Ensures robust schema migrations, type-safe query generation, and ironclad relational data integrity.',
            },
          },
        ],
      },
      challenges: [
        {
          problem: {
            id: 'Kebutuhan pemisahan data laporan antar wilayah kerja yang ketat tanpa terjadi kebocoran akses data.',
            en: 'Strict data boundary requirements between regional administrative branches without data cross-contamination.',
          },
          solution: {
            id: 'Menerapkan Custom Guards dan Interceptors di tingkat NestJS yang secara otomatis menginjeksi filter scope ID cabang pada setiap query database.',
            en: 'Implemented custom NestJS Guards and Interceptors automatically injecting regional branch scope parameters into database queries.',
          },
        },
      ],
      results: {
        id: 'Layanan API berjalan stabil melayani seluruh modul administrasi dengan response time rata-rata di bawah 80 milidetik pada query kompleks bertingkat.',
        en: 'The API service operated reliably across all administrative endpoints, achieving average response times under 80 milliseconds on complex joined queries.',
      },
      metrics: [
        { label: { id: 'Kecepatan Respon', en: 'Avg Response Time' }, value: '< 80ms' },
        { label: { id: 'Endpoint Terdokumentasi', en: 'Documented Endpoints' }, value: '25+' },
      ],
    },
  },
  {
    slug: 'kantinku',
    title: {
      id: 'KantinKu',
      en: 'KantinKu',
    },
    summary: {
      id: 'Aplikasi pemesanan makanan kantin kampus secara pre-order dengan antrean digital terintegrasi dan validasi kode QR saat pengambilan.',
      en: 'Campus canteen pre-order web application with digital queue management and QR code pickup verification.',
    },
    category: 'Web App',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'QR API'],
    role: {
      id: 'Fullstack Web Developer',
      en: 'Fullstack Web Developer',
    },
    status: 'completed',
    featured: false,
    repoUrl: 'https://github.com/KingVolveyRAY',
    demoUrl: 'https://github.com/KingVolveyRAY',
    coverImage: '/images/projects/kantinku.svg',
    caseStudy: {
      context: {
        id: 'Waktu istirahat mahasiswa yang terbatas sering terbuang sia-sia hanya untuk mengantre di kantin kampus, sedangkan pedagang kesulitan memperkirakan porsi masakan harian.',
        en: 'Short lecture break intervals were habitually wasted standing in long canteen lines, while food vendors struggled to forecast daily ingredient preparation.',
      },
      roleDetail: {
        id: 'Membangun aplikasi web mobile-first dengan Next.js, merancang basis data pesanan real-time di Supabase, dan membuat alur pembuatan kode QR dinamis untuk penukaran makanan.',
        en: 'Built mobile-first web app with Next.js, designed real-time order database in Supabase, and engineered dynamic QR code generation for counter redemption.',
      },
      features: {
        id: [
          'Katalog menu makanan per tenant kantin dengan foto dan status ketersediaan porsi',
          'Fitur pre-order terjadwal dengan penentuan jam estimasi pengambilan makanan',
          'Papan antrean pesanan digital untuk pedagang (Pesanan Masuk, Dimasak, Siap Diambil)',
          'Tiket kode QR digital pada smartphone pembeli untuk verifikasi pengambilan cepat',
        ],
        en: [
          'Menu catalog per canteen tenant with item imagery and live portion availability',
          'Scheduled pre-ordering allowing students to specify desired pickup time slots',
          'Digital vendor order board (Incoming, Preparing, Ready for Pickup)',
          'Digital QR ticket on customer smartphones for frictionless pickup verification',
        ],
      },
      architecture: {
        description: {
          id: 'Next.js App Router mengonsumsi data pesanan dari Supabase Database dengan fitur Realtime Subscriptions via PostgreSQL replication sehingga status pesanan langsung berubah di layar tenant tanpa refresh.',
          en: 'Next.js App Router connects to Supabase PostgreSQL using Realtime Subscriptions, enabling live order status transitions on vendor screens without page reloads.',
        },
        techDecisions: [
          {
            tech: 'Supabase Realtime',
            reason: {
              id: 'Sinkronisasi status pesanan seketika antara kasir dan pembeli tanpa perlu mengelola server WebSocket manual.',
              en: 'Instant order state synchronization between vendors and patrons without managing dedicated WebSocket servers.',
            },
          },
        ],
      },
      challenges: [
        {
          problem: {
            id: 'Menghindari pesanan ganda atau salah ambil saat antrean kantin ramai.',
            en: 'Preventing duplicate redemptions or erroneous order pickups during rush hours.',
          },
          solution: {
            id: 'Setiap kode QR diberi payload terenkripsi yang hanya dapat discan sekali oleh akun merchant terdaftar.',
            en: 'Each pickup QR contains a single-use encrypted payload that validates exclusively against authenticated vendor accounts.',
          },
        },
      ],
      results: {
        id: 'Memangkas waktu tunggu fisik mahasiswa dari rata-rata 18 menit menjadi kurang dari 2 menit saat jam puncak istirahat kampus.',
        en: 'Reduced in-person physical student wait times from an average of 18 minutes down to under 2 minutes during peak lunch hours.',
      },
      metrics: [
        { label: { id: 'Reduksi Waktu Tunggu', en: 'Wait Time Reduction' }, value: '-88%' },
        { label: { id: 'Waktu Pengambilan', en: 'Pickup Time' }, value: '< 2 Menit' },
      ],
    },
  },
  {
    slug: 'kost-isnina',
    title: {
      id: 'Kost Isnina Dashboard',
      en: 'Kost Isnina Dashboard',
    },
    summary: {
      id: 'Sistem informasi pengelolaan hunian kost, pencatatan pembayaran sewa kamar, serta kanal pelaporan gangguan WiFi dan kerusakan fasilitas.',
      en: 'Residential boarding house management dashboard with rent payment logs and tenant maintenance reporting channels.',
    },
    category: 'Web App',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    role: {
      id: 'Fullstack Developer',
      en: 'Fullstack Developer',
    },
    status: 'completed',
    featured: false,
    repoUrl: 'https://github.com/KingVolveyRAY',
    demoUrl: 'https://github.com/KingVolveyRAY',
    coverImage: '/images/projects/kost-isnina.svg',
    caseStudy: {
      context: {
        id: 'Pengelolaan kamar sewa, penagihan bulanan, dan komplain fasilitas seperti WiFi atau perbaikan keran air sebelumnya dilakukan melalui pesan chat yang mudah terlewat.',
        en: 'Boarding house room occupancies, monthly rent notices, and maintenance requests (WiFi, plumbing) were previously managed via messy chat threads.',
      },
      roleDetail: {
        id: 'Merancang dasbor terpadu untuk pemilik kost dan portal aduan sederhana untuk para penghuni dengan integrasi status penanganan tiket masalah.',
        en: 'Designed an integrated administration dashboard for property owners and a ticket submission portal for tenants with real-time status updates.',
      },
      features: {
        id: [
          'Visualisasi status okupansi kamar (Terisi, Kosong, Perbaikan)',
          'Pencatatan riwayat pembayaran sewa kamar dan tanggal jatuh tempo',
          'Sistem pelaporan kendala (Kategori: WiFi, Listrik, Sanitasi, Keamanan) dengan foto bukti',
          'Pelacakan status penanganan aduan (Menunggu, Dikerjakan, Selesai)',
        ],
        en: [
          'Visual room occupancy status overview (Occupied, Vacant, Maintenance)',
          'Rent payment ledger tracking renewal due dates and payment receipts',
          'Tenant ticket reporting (WiFi, Power, Sanitation, Security) with photo attachments',
          'Resolution progress tracker (Pending, In Progress, Resolved)',
        ],
      },
      architecture: {
        description: {
          id: 'Arsitektur klien-server klasik yang ringan dan teruji menggunakan React SPA, Express REST API, dan basis data MySQL.',
          en: 'Lightweight client-server architecture utilizing React SPA, Express REST APIs, and a relational MySQL database.',
        },
        techDecisions: [
          {
            tech: 'MySQL Database',
            reason: {
              id: 'Sangat cocok untuk data relasional terstruktur seperti relasi kamar, penghuni, dan invoice pembayaran.',
              en: 'Ideal for structured transactional records linking rooms, tenants, and payment invoices.',
            },
          },
        ],
      },
      challenges: [
        {
          problem: {
            id: 'Pemilik kost yang kurang terbiasa dengan sistem komputer yang rumit.',
            en: 'Property owner required a simple, intuitive user interface that did not require training.',
          },
          solution: {
            id: 'Merancang antarmuka bersih dengan indikator warna yang jelas dan alur kerja satu klik untuk memperbarui status sewa.',
            en: 'Designed an uncluttered interface with high-contrast color indicators and one-click payment status toggles.',
          },
        },
      ],
      results: {
        id: 'Membantu pemilik mengelola 20+ kamar hunian dengan tertib tanpa ada keterlambatan penanganan laporan kerusakan fasilitas lebih dari 24 jam.',
        en: 'Successfully managed 20+ tenant units with zero unresolved maintenance tickets exceeding a 24-hour turnaround window.',
      },
      metrics: [
        { label: { id: 'Waktu Respon Aduan', en: 'Avg Resolution Time' }, value: '< 24 Jam' },
        { label: { id: 'Kamar Dikelola', en: 'Managed Units' }, value: '20+ Kamar' },
      ],
    },
  },
  {
    slug: 'peminjaman-mandala-robotics',
    title: {
      id: 'Inventaris & Peminjaman Mandala Robotics',
      en: 'Mandala Robotics Inventory System',
    },
    summary: {
      id: 'Portal inventaris modul mikrokontroler, sensor, dan peralatan lab robotika dengan sistem tracking sirkulasi peminjaman barang.',
      en: 'Robotics lab inventory portal tracking microcontroller modules, sensors, and lab equipment circulation.',
    },
    category: 'Web App',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    role: {
      id: 'Fullstack Developer & Lab Coordinator',
      en: 'Fullstack Developer & Lab Coordinator',
    },
    status: 'completed',
    featured: false,
    repoUrl: 'https://github.com/KingVolveyRAY',
    demoUrl: 'https://github.com/KingVolveyRAY',
    coverImage: '/images/projects/mandala-inventory.svg',
    caseStudy: {
      context: {
        id: 'Peralatan robotika seperti modul ESP32, mikrokontroler Arduino, driver motor L298N, dan toolset sering tercecer atau tidak diketahui peminjamnya saat persiapan lomba robotika.',
        en: 'Valuable robotics parts such as ESP boards, Arduino microcontrollers, L298N motor drivers, and toolsets were often misplaced or untracked during competition prep cycles.',
      },
      roleDetail: {
        id: 'Membangun aplikasi inventaris peralatan terpusat dengan sistem barcode/serial ID, formulir peminjaman terverifikasi, dan rekapitulasi kondisi fisik barang.',
        en: 'Built centralized inventory web portal with barcode/serial ID tracking, verified checkout forms, and physical condition audit logging.',
      },
      features: {
        id: [
          'Database katalog modul elektronik lengkap dengan jumlah stok dan kondisi fisik',
          'Sistem permohonan peminjaman komponen dengan estimasi tanggal pengembalian',
          'Riwayat log peminjaman per anggota klub robotika',
          'Rekapitulasi otomatis untuk evaluasi pengadaan komponen menjelang kompetisi',
        ],
        en: [
          'Component catalog database detailing stock quantities and component health conditions',
          'Borrowing request workflow with projected return milestones',
          'Complete circulation logs organized per club member',
          'Automated audit reports for procurement planning before robotics tournaments',
        ],
      },
      architecture: {
        description: {
          id: 'Next.js App Router dengan Server Actions untuk mutasi database langsung ke PostgreSQL, menghasilkan performa cepat tanpa boilerplate API terpisah.',
          en: 'Next.js App Router with Server Actions handling direct transactional mutations to PostgreSQL for optimal speed and zero API boilerplate.',
        },
        techDecisions: [
          {
            tech: 'Next.js Server Actions',
            reason: {
              id: 'Menyederhanakan logika mutasi data stok barang dan peminjaman secara aman di server.',
              en: 'Streamlined secure server-side mutations for inventory stock transactions without boilerplate.',
            },
          },
        ],
      },
      challenges: [
        {
          problem: {
            id: 'Keterlambatan pengembalian modul mikrokontroler yang dibutuhkan anggota lain untuk persiapan lomba.',
            en: 'Overdue component returns delaying other team members preparing for robotics tournaments.',
          },
          solution: {
            id: 'Menyediakan dasbor penanda barang jatuh tempo dengan notifikasi otomatis kepada peminjam.',
            en: 'Created an automated overdue alert board flagging pending returns with reminder logs.',
          },
        },
      ],
      results: {
        id: 'Mengeliminasi insiden kehilangan komponen elektronik laboratorium hingga 0 kasus selama dua periode kompetisi berturut-turut.',
        en: 'Achieved zero lost component incidents across two consecutive competition cycles for the robotics club.',
      },
      metrics: [
        { label: { id: 'Tingkat Kehilangan', en: 'Item Loss Rate' }, value: '0%' },
        { label: { id: 'Komponen Terdata', en: 'Tracked Components' }, value: '150+ Unit' },
      ],
    },
  },
];
