# DESIGN.md — Desain & Style Direction Portofolio Rayhan

## 1. Dials (Antislop Liveliness Bar)
- **ENERGY: 2 (Balanced)** — Profesional, teknikal, kredibel untuk tech lead dan recruiter magang, sekaligus menarik untuk calon klien freelance.
- **RHYTHM: 2 (Varied & Structured)** — Komposisi terstruktur dengan variasi visual yang disengaja (Hero dengan live telemetry badge, Grid kartu proyek interaktif berfilter, Timeline pengalaman, Detail studi kasus bertingkat).
- **MOTION: 2 (Purposeful Transitions)** — Hover lift pada panel kaca, transisi filter kategori, indikator telemetry pulsing halus, menghormati `prefers-reduced-motion`.

## 2. Identitas & Positioning
- **Nama**: Muhammad Rayhan Ramadhan
- **Positioning**: IoT Developer yang membangun sistem dari sensor sampai dashboard (EN: *IoT Developer building systems from sensor to dashboard*).
- **Persona & Karakter**: Mahasiswa Teknik Informatika UIN Syarif Hidayatullah Jakarta, praktisi IoT & Web hands-on, mentor robotika di Scitech Academy, pemimpin organisasi mahasiswa.
- **Tone of Voice**: Lugas, percaya diri, berbasis bukti nyata (kode, skematik, sensor, arsitektur), tanpa jargon klise AI.

## 3. Palet Warna (Glassmorphism Modern)
Warna diselaraskan dengan foto profil asli Rayhan (`IMG_20241024_134331.jpg` berlatar terakota/oranye hangat) dipadukan dengan aksen IoT Cyan untuk memberi nuansa sistem telemetri modern.

### Mode Gelap (Tampilan Utama):
- **Latar Dasar (`--bg`)**: `#090d16` (Deep Obsidian Slate)
- **Latar Sekunder (`--bg-card`)**: `rgba(15, 23, 42, 0.65)` dengan `backdrop-filter: blur(16px)`
- **Garis Tepi Kaca (`--glass-border`)**: `rgba(255, 255, 255, 0.10)`
- **Glow Background (`--glow-1`, `--glow-2`)**: `rgba(249, 115, 22, 0.12)` (Terracotta) & `rgba(6, 182, 212, 0.12)` (IoT Cyan)
- **Aksen Primer (`--accent-orange`)**: `#f97316` (Warm Amber Terracotta)
- **Aksen IoT (`--accent-cyan`)**: `#06b6d4` (Sensor & Telemetry Cyan)
- **Teks Utama (`--text-primary`)**: `#f8fafc` (Kontras > 12:1)
- **Teks Redup (`--text-muted`)**: `#94a3b8` (Kontras > 5:1, memenuhi WCAG AA)

### Mode Terang (Alternatif Fungsional Penuh):
- **Latar Dasar (`--bg`)**: `#f8fafc` (Clean Crisp Slate)
- **Latar Sekunder (`--bg-card`)**: `rgba(255, 255, 255, 0.85)` dengan `backdrop-filter: blur(16px)`
- **Garis Tepi Kaca (`--glass-border`)**: `rgba(15, 23, 42, 0.08)`
- **Aksen Primer (`--accent-orange`)**: `#ea580c`
- **Aksen IoT (`--accent-cyan`)**: `#0891b2`
- **Teks Utama (`--text-primary`)**: `#0f172a`
- **Teks Redup (`--text-muted`)**: `#475569` (Kontras > 5:1, memenuhi WCAG AA)

## 4. Tipografi
- **Headings & Tampilan**: Font sans-serif modern (Plus Jakarta Sans / Inter / system-ui), bobot 600-800.
- **Teks Bodi**: Font sans-serif bersih, terbaca pada ukuran 14-16px, line-height 1.6.
- **Label Telemetri & Kode**: Monospace bersih (JetBrains Mono / ui-monospace) khusus untuk spesifikasi mikrokontroler, pin sensor, dan metrik sistem.

## 5. Komponen Glassmorphism & Aksesibilitas
- Efek kaca menggunakan `backdrop-filter: blur(16px)` dibatasi maksimal 2 sampai 3 layer aktif sekaligus untuk performa tinggi pada perangkat mobile.
- Fallback `@supports not (backdrop-filter: blur(16px))` menggunakan background semi-solid beropasitas tinggi sehingga teks tetap terbaca dengan jelas.
- Seluruh elemen interaktif memiliki `focus-visible:ring-2` dengan warna aksen untuk aksesibilitas keyboard (R-32).

## 6. Kepatuhan Aturan Antislop
- **R-02 Copywriting**: Tidak menggunakan tanda em dash (`—`) dalam teks UI atau konten portofolio.
- **R-03 Responsiveness**: Layout mobile-first, uji dari 360px hingga layar desktop, tap target minimum 44px.
- **R-17 & R-18 Data & Testimoni**: Tidak ada data statistik atau ulasan testimoni palsu.
- **R-24 Navigasi**: Setiap tautan navigasi mengarah ke rute/bagian nyata.
- **R-26 Interaktivitas**: Setiap tombol, filter, tab, dan toggle memiliki fungsionalitas nyata.
- **R-27 State UI**: Tersedia state kosong (empty state), loading, dan pesan validasi/sukses formulir.
- **R-34 Multi-Tema**: Mode Gelap dan Terang keduanya berfungsi sempurna dengan kontras teruji.
