<div align="center">

# 🌐 Muhammad Rayhan Ramadhan
### **IoT Developer • Embedded Systems • Fullstack Web**
> *"Membangun sistem terdistribusi dari sensor fisik sampai dashboard web interaktif."*  
> *(Building end-to-end systems from physical sensors to modern web dashboards)*

<br />

[![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![ESP32](https://img.shields.io/badge/ESP32_Hardware-E7352C?style=for-the-badge&logo=espressif&logoColor=white)](https://www.espressif.com/)
[![NestJS](https://img.shields.io/badge/NestJS_Backend-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

<br />

[✨ Kunjungi Website](#-fitur-unggulan-website) •
[🛠️ Tech Stack](#-arsitektur--tech-stack-menyeluruh) •
[🔬 Proyek Unggulan](#-koleksi-proyek-unggulan) •
[📜 Pengalaman & CV](#-pengalaman--rekam-jejak) •
[📬 Kontak](#-saluran-komunikasi)

</div>

---

## 📌 Sekilas Tentang Portofolio

Repositori ini memuat kode sumber website portofolio dwibahasa (**Bahasa Indonesia & English**) milik **Muhammad Rayhan Ramadhan**, mahasiswa Teknik Informatika di **UIN Syarif Hidayatullah Jakarta (Tahun ke-3)**. 

Portofolio ini dirancang khusus untuk memamerkan keahlian hands-on di bidang:
1. **Internet of Things (IoT) & Mikrokontroler**: Perancangan sirkuit ESP32/Arduino, pengondisian sinyal analog, dan telemetri nirkabel.
2. **Backend & Arsitektur API**: Pembuatan RESTful API modular berkinerja tinggi menggunakan NestJS dan Node.js.
3. **Frontend & Dashboard Web**: Antarmuka modern dengan gaya visual **Glassmorphism**, Progressive Web App (PWA), dan performa responsif lintas perangkat.

---

## 🚀 Alur Rekayasa: Dari Sensor ke Dashboard

Portofolio ini membuktikan kemampuan eksekusi di setiap lapisan arsitektur komputasi:

```
┌─────────────────────────────────┐
│     1. INSTRUMENTASI SENSOR     │  -> Sensor Analog/Digital (pH, TDS, Kekeruhan, Ultrasonik JSN-SR04T, PIR)
└────────────────┬────────────────┘
                 │ Sinyal Tegangan & Filtering Moving-Average
┌────────────────▼────────────────┐
│    2. EDGE COMPUTING (ESP32)    │  -> C/C++, FreeRTOS, Deep Sleep Low-Power (<1.2mA standby)
└────────────────┬────────────────┘
                 │ Protokol Telemetri Ringan (MQTT / WebSockets / HTTP)
┌────────────────▼────────────────┐
│   3. BACKEND & INTEGRASI API    │  -> NestJS, Node.js, PostgreSQL / Supabase, Role-Based Access Control
└────────────────┬────────────────┘
                 │ Data Streaming Real-Time
┌────────────────▼────────────────┐
│  4. DASHBOARD INTERAKTIF & PWA  │  -> Next.js 16 (App Router), Tailwind CSS, Glassmorphism, Chart.js
└─────────────────────────────────┘
```

---

## 🔬 Koleksi Proyek Unggulan

Berikut adalah beberapa sistem rekayasa terpilih yang telah dibangun dan terdokumentasi lengkap dengan studi kasus teknisnya:

| Proyek | Kategori | Sorotan Arsitektur & Teknologi | Status |
| :--- | :---: | :--- | :---: |
| **💧 Dashboard Kualitas Air Cuci Sayur** | `IoT & Web` | ESP32, Sensor pH, TDS, Kekeruhan, MQTT Broker, Next.js PWA, Latensi < 2.0s | `Selesai` |
| **🌲 WOODGUARD** | `IoT & Web` | ESP32-CAM, Sensor PIR, Mode Deep-Sleep, Bot Telegram Webhook, Node.js | `Selesai` |
| **🌊 RiverGuard** | `IoT Telemetry` | Sensor Ultrasonik Tahan Air JSN-SR04T, Catu Daya Panel Surya, Toleransi ±1.5cm | `Selesai` |
| **🤖 TransSim Kinematics** | `Web Simulation` | Simulasi Kinematis Robot Roda Diferensial, Canvas API 60 FPS, Pengujian Motor GA25 | `Selesai` |
| **🏛️ Backend DWP Kemenag** | `Backend API` | NestJS Modular, Prisma ORM, PostgreSQL, JWT Authentication, RBAC, Swagger | `Selesai` |
| **🍱 KantinKu** | `Fullstack Web` | Next.js, Supabase Realtime, Antrean Digital, Tiket Kode QR Dinamis | `Selesai` |
| **🏠 Kost Isnina Dashboard** | `Fullstack Web` | React SPA, Express.js, MySQL, Sistem Tiket Pelaporan Kerusakan Fasilitas | `Selesai` |
| **🔬 Inventaris Mandala Robotics** | `Fullstack Web` | Next.js Server Actions, PostgreSQL, Pelacakan Sirkulasi Modul Mikrokontroler Lab | `Selesai` |

---

## 🛠️ Arsitektur & Tech Stack Menyeluruh

### ⚡ Internet of Things & Embedded Systems
- **Mikrokontroler**: ESP32, ESP8266, ESP32-CAM (OV2640), Arduino Uno / Nano.
- **Bahasa & Firmware**: C / C++, Arduino IDE, FreeRTOS basics.
- **Sensor Terintegrasi**: pH probe, TDS analog meter, Optical Turbidity, Ultrasonik Waterproof (JSN-SR04T), PIR motion sensor, DHT22.
- **Manajemen Daya**: Mode RTC Deep-Sleep, efisiensi standby baterai 18650, integrasi panel surya luar ruangan.
- **Protokol Komunikasi**: MQTT (Message Queuing Telemetry Transport), WebSockets, HTTP REST.

### 💻 Backend & Basis Data
- **Framework**: NestJS, Express.js, Node.js.
- **Basis Data**: PostgreSQL, MySQL, Supabase Realtime.
- **ORM & Pemodelan Data**: Prisma ORM, SQL schema design, Relational Indexing.
- **Keamanan & Otentikasi**: JSON Web Token (JWT), Role-Based Access Control (RBAC), Hashing Argon2.

### 🎨 Frontend & Pengalaman Pengguna
- **Framework**: Next.js 16 (App Router), React 19.
- **Bahasa**: TypeScript (Strict mode).
- **Styling**: Tailwind CSS, Modern Glassmorphism System (`backdrop-filter: blur(16px)` dengan fallback solid).
- **Ikonografi & Grafis**: Lucide React, Custom Hardware SVGs, HTML5 Canvas API.

---

## ✨ Fitur Unggulan Website

- **Dwibahasa Penuh (ID & EN)**: Pengunjung dapat menjelajahi seluruh konten dalam Bahasa Indonesia maupun Bahasa Inggris dengan satu klik.
- **Tema Ganda Teruji (Dark & Light Mode)**: Mode gelap elegan sebagai tema utama serta mode terang yang memenuhi rasio kontras WCAG AA (minimal 4.5:1).
- **Studi Kasus Standar Industri**: Setiap proyek dilengkapi rincian masalah, peran spesifik, diagram arsitektur, tantangan teknis, serta bukti hasil yang terukur.
- **Formulir Kontak Anti-Spam**: Dilengkapi validasi interaktif di sisi klien dan server serta perlindungan honeypot.
- **Curriculum Vitae Siap Cetak**: Fitur preview CV yang langsung dapat diunduh atau dicetak bersih (print-to-PDF) tanpa menyertakan nomor telepon sensitif.
- **SEO Teroptimasi**: Tag Open Graph, URL terstruktur per bahasa, generator otomatis `sitemap.xml`, dan `robots.txt`.

---

## 👨‍💻 Pengalaman & Rekam Jejak

- **Robotics Mentor** di *Scitech Academy* (08/2025 - Sekarang)  
  *Membimbing siswa dalam perakitan sirkuit elektronika, mikrokontroler, dan persiapan tim menuju kompetisi robotika nasional.*
- **Head of Robotic Club** di *Mandala Robotic Club* (01/2023 - 01/2024)  
  *Memimpin riset prototipe otomasi (Smart Farmer, Smart Trolley) dan tata kelola laboratorium.*
- **Head of Department Entrepreneurship** di *HIMTI UIN Syarif Hidayatullah Jakarta* (07/2025 - Sekarang)  
  *Mengoordinasikan alokasi dana mandiri, sponsorship seminar teknologi, dan penjualan merchandise himpunan.*
- **Head of IMALA** di *Ikatan Mahasiswa Lebak* (03/2025 - 03/2026)  
  *Memimpin organisasi kedaerahan dalam kegiatan sosial dan literasi digital pemuda.*

### Prestasi & Kompetisi Robotika:
- 🏆 **Silver Medal**: *AI Robot Challenge Korea (ARCK)* (2024)
- 🏆 **Bronze Medal**: *International Youth Metaverse Robot Challenge (IYMRC)* (2024)
- 🏆 **Juara Harapan 1**: *Kontes Robot Nusantara (KRON)* (2023)
- 🎓 Peserta *GDGoC AI/ML Weekly Class* (2025)
- 🎓 Peserta *GDGoC Product Manager Workshop* (2025)

---

## 💻 Panduan Menjalankan Proyek

### Kebutuhan Sistem:
- Node.js versi 18.x atau yang lebih baru (disarankan v20+)
- npm / pnpm / yarn

### Langkah Instalasi:

1. **Clone Repositori**:
   ```bash
   git clone https://github.com/KingVolveyRAY/Portofolio_Rayhan.git
   cd Portofolio_Rayhan
   ```

2. **Pasang Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Server Lokal (Development)**:
   ```bash
   npm run dev
   ```
   Buka peramban Anda di [http://localhost:3000](http://localhost:3000).

4. **Kompilasi Build Produksi**:
   ```bash
   npm run build
   npm run start
   ```

5. **Skrip Otomatisasi Git**:
   ```bash
   npm run push    # Langsung add, commit, dan push perubahan ke GitHub
   npm run sync    # Mengaktifkan daemon pemantau auto-push secara realtime
   ```

---

## 📬 Saluran Komunikasi

Tertarik mendiskusikan peluang **magang (internship)**, kolaborasi proyek freelance, atau workshop robotika? Hubungi saya melalui saluran berikut:

- 📧 **Email**: [rayhanramadan402@gmail.com](mailto:rayhanramadan402@gmail.com)
- 💬 **WhatsApp**: [+62 857-7641-8145](https://wa.me/6285776418145)
- 🐙 **GitHub**: [github.com/KingVolveyRAY](https://github.com/KingVolveyRAY)
- 💼 **LinkedIn**: [linkedin.com/in/muhammad-rayhan-ramadhan](https://linkedin.com/in/muhammad-rayhan-ramadhan)
- 📍 **Lokasi**: Jakarta / Tangerang Selatan, Banten, Indonesia

<br />

<div align="center">
  <sub>Hak Cipta © 2026 Muhammad Rayhan Ramadhan. Seluruh hak cipta dilindungi.</sub>
</div>
