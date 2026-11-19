# PRD — Website Portofolio Rayhan

Versi 1.2 (Draft) · 19 November 2026 · Pemilik produk: Rayhan · Sumber konten: github.com/KingVolveyRAY

## 1. Ringkasan

Website portofolio dwibahasa (Indonesia dan Inggris) untuk Muhammad Rayhan Ramadhan, mahasiswa Teknik Informatika UIN Syarif Hidayatullah Jakarta, dengan dua tujuan utama: mendapatkan tempat magang dan klien freelance. Isinya memadukan proyek dari GitHub (IoT, web, backend), pengalaman mengajar robotika, dan rekam jejak kepemimpinan dari CV, dengan tampilan Glassmorphism yang modern.

Catatan sumber: daftar repo di GitHub belum dibaca langsung (akses ditolak sementara), jadi proyek di bagian 5.2 tetap berupa kandidat yang dicocokkan dengan repo publik. Versi 1.1 menambahkan isi CV (bagian 5.4) dan keputusan terbaru: target magang dan freelance, dua bahasa, gaya Glassmorphism.

## 2. Latar Belakang dan Masalah

- Profil GitHub memperlihatkan kode, tetapi tidak menceritakan konteks, peran, keputusan teknis, dan dampak proyek.
- Recruiter dan tech lead biasanya hanya punya satu sampai dua menit untuk menyaring kandidat.
- Proyek yang dikerjakan beragam (backend, IoT, aplikasi web, tugas kuliah), sehingga perlu satu narasi yang menyatukannya.

Rumusan masalah: bagaimana membuat satu tempat yang dalam hitungan detik meyakinkan pengunjung bahwa Rayhan mampu membangun sistem yang berjalan, bukan sekadar menyimpan repositori. CV saat ini menonjolkan organisasi dan robotika, sedangkan kemampuan teknis baru terlihat di repo; website menyatukan keduanya dalam dua bahasa.

## 3. Tujuan, Non-Tujuan, dan Metrik

### Tujuan

- G1: Pengunjung memahami peran, keahlian utama, dan 3 proyek terbaik dalam waktu kurang dari 30 detik, baik dalam bahasa Indonesia maupun Inggris.
- G2: Setiap proyek unggulan punya bukti nyata: tautan repo, demo atau screenshot, dan penjelasan keputusan teknis.
- G3: Konten proyek tersinkron dengan GitHub tanpa perlu edit manual berulang.
- G4: Recruiter magang bisa melihat bidang yang dicari, keahlian, dan CV dalam satu layar tanpa banyak klik.
- G5: Calon klien freelance memahami layanan yang ditawarkan dan bisa menghubungi dalam satu klik.

### Non-tujuan (versi 1.0)

- Bukan platform blog skala penuh atau CMS.
- Tidak ada sistem login atau dashboard admin.
- Tidak menampilkan semua repo; hanya yang dikurasi.

### Metrik keberhasilan (usulan target)

| Metrik | Target |
| --- | --- |
| Skor Lighthouse (Performance, Accessibility, SEO, Best Practices) | 90 ke atas untuk semuanya |
| Largest Contentful Paint | di bawah 2,5 detik pada jaringan 4G, termasuk dengan efek Glassmorphism |
| Waktu menemukan 3 proyek unggulan dari beranda | di bawah 30 detik |
| Klik ke repo atau studi kasus dari beranda | 25% dari kunjungan atau lebih |
| Pesan masuk (magang dan freelance) | 2 atau lebih per bulan pada 3 bulan pertama |
| Proyek unggulan dengan studi kasus lengkap | 4 sampai 6, masing-masing dalam dua bahasa |
| Halaman MVP yang tersedia dalam bahasa Indonesia dan Inggris saat rilis | 100% |

### Positioning dan penawaran

Poros sudah diputuskan: IoT Developer. Usulan tagline (final ditentukan Rayhan): IoT Developer yang membangun sistem dari sensor sampai dashboard. Versi Inggris: IoT Developer building systems from sensor to dashboard.

CV menyebut minat pada pengembangan mobile dan IoT, sedangkan repo kandidat banyak berisi IoT, web, dan backend. Poros IoT Developer dipakai konsisten di hero, CV, bio GitHub, dan LinkedIn; proyek web dan backend ditampilkan sebagai pendukung (dashboard, API, dan integrasi untuk sistem IoT).

- Untuk magang: bidang yang dicari (menyusul), ketersediaan (mulai kapan dan berapa lama), CV yang bisa diunduh, dan proyek yang relevan.
- Untuk freelance, tiga layanan (usulan; daftar final dan tarif menyusul): sistem IoT dan dashboard monitoring; aplikasi web dan backend; pelatihan robotika dan IoT untuk sekolah atau komunitas.
- Pembeda: pengalaman mengajar robotika di Scitech Academy, memimpin tim dan organisasi, serta pengalaman mengelola anggaran dan penjualan di HIMTI UIN Jakarta.

## 4. Pengguna Target

| Persona | Kebutuhan | Yang harus cepat ditemukan |
| --- | --- | --- |
| Recruiter / HRD magang | Menyaring kandidat dengan cepat | Bidang yang dicari, stack, CV, ketersediaan, kontak |
| Tech lead / hiring manager | Bukti kemampuan teknis | Kualitas kode, arsitektur, repo, demo |
| Calon klien freelance | Kepercayaan dan hasil nyata | Layanan, contoh proyek, cara bekerja, kontak |
| Sekolah mitra dan komunitas | Pelatih robotika dan IoT | Pengalaman mengajar, sertifikat lomba, kontak |
| Dosen, pembimbing, panitia lomba | Relevansi akademik | Proyek kuliah, dokumentasi, hasil |
| Sesama developer | Kolaborasi | Repo, stack, kontribusi |

## 5. Strategi Konten dari GitHub

### 5.1 Kriteria repo unggulan (maksimal 6)

- README jelas: tujuan, fitur, cara menjalankan.
- Ada demo, tangkapan layar, atau diagram arsitektur.
- Kode rapi dan ada aktivitas commit yang masuk akal.
- Mewakili variasi keahlian (backend, IoT, aplikasi web).
- Aman dipublikasikan: tidak ada kredensial, data pribadi, atau data klien.

### 5.2 Kandidat proyek unggulan (cocokkan dengan repo publik)

| Kandidat | Kategori | Sorotan potensial |
| --- | --- | --- |
| Dashboard kualitas air cuci sayur | IoT dan Web | ESP32, monitoring, PWA |
| WOODGUARD | IoT dan Web | Monitoring tanaman, ESP32-CAM, deteksi hama, notifikasi |
| RiverGuard | IoT | Monitoring ketinggian dan kekeruhan air |
| TransSim | Web App | Simulasi robot untuk uji motor GA25 dan encoder |
| Backend DWP Kemenag | Backend | NestJS, API untuk proyek instansi pemerintah |
| KantinKu | Web App | Pre-order kantin, antrean digital, QR pengambilan |
| Kost Isnina Dashboard | Web App | Manajemen kamar, penghuni, laporan WiFi dan kerusakan |
| Peminjaman barang Mandala Robotics Club | Web App | Inventaris, peminjaman, riwayat, laporan |

Urutan mengikuti poros IoT Developer: tiga proyek IoT teratas menjadi proyek unggulan di Beranda.

Sebelum dipublikasikan, pastikan tiap kandidat punya repo atau demo yang boleh dilihat publik. Proyek yang dikerjakan untuk instansi atau klien perlu dicek izin publikasinya, dan bila perlu ditampilkan sebagai studi kasus tanpa kode.

### 5.3 Perapian GitHub sebelum rilis

- Pin 6 repo unggulan dan tulis bio singkat yang sama dengan hero website.
- Buat profile README yang mengarah ke website portofolio.
- Lengkapi deskripsi, topics, dan README tiap repo unggulan.
- Arsipkan atau sembunyikan repo percobaan yang tidak ingin ditampilkan.
- Periksa riwayat commit dan file .env untuk kunci API, token, atau password yang pernah ter-commit, lalu rotasi bila ada.

### 5.4 Konten dari CV

CV (3 halaman, berbahasa Inggris) menjadi sumber bagian Tentang, Pengalaman, Sertifikat, dan Keahlian.

| Bagian CV | Dipakai di website | Catatan |
| --- | --- | --- |
| Summary | Hero dan Tentang | Selaraskan dengan positioning; tulis ulang dalam bahasa Indonesia |
| Robotics Mentor, Scitech Academy (08/2025 sampai sekarang) | Pengalaman, sorotan di Beranda | Pembeda utama untuk magang dan pelatihan |
| Head of Robotic Club, Mandala Robotic Club (01/2023 sampai 01/2024) | Pengalaman dan proyek | Smart Farmer, Smart Trolley, dan tempat sampah otomatis sensor ultrasonik: tautkan ke repo atau dokumentasi bila ada |
| Head of Department Entrepreneurship dan Staff Entrepreneurship, HIMTI UIN Jakarta (07/2025 sampai sekarang) | Pengalaman (kepemimpinan) | Tampilkan hasil yang terukur bila ada |
| Head of IMALA (03/2025 sampai 03/2026) | Pengalaman (organisasi) | Cukup ringkas |
| Pramuka dan OSIS MAN 2 Lebak | Pengalaman lain, dilipat | Prioritas rendah |
| GDGoC AI/ML Weekly Class, Workshop Product Manager GDGoC, ARCK, IYMRC, KRON | Sertifikat dan lomba | Ganti penanda “Present” dengan tahun |
| Skills: IoT (sensor, ESP board, Arduino IDE), pemrograman, Office 365, kewirausahaan | Keahlian | CV menulis bahasa pemrograman di tingkat Basic dan belum menyebut proyek di bagian 5.2; sinkronkan dengan repo |

Perbaikan CV sebelum dipublikasikan:

- Ringkasan menulis “Second year student”, sedangkan masuk kuliah 09/2024 berarti sekarang tahun ketiga; sesuaikan.
- Perbaiki ejaan: “Excell” menjadi “Excel”, “Enterpreneurship” menjadi “Entrepreneurship”, “Insttitute” menjadi “Institute”.
- Siapkan CV publik tanpa nomor telepon, dalam versi Indonesia dan Inggris.

## 6. Ruang Lingkup

| Fitur | MVP | Fase 2 |
| --- | --- | --- |
| Beranda dengan hero, proyek unggulan, keahlian, ajakan menghubungi | Ya |  |
| Dwibahasa Indonesia dan Inggris dengan pengalih bahasa | Ya |  |
| Tema Glassmorphism dengan mode gelap dan terang | Ya |  |
| Daftar proyek dengan filter kategori dan teknologi | Ya |  |
| Halaman studi kasus per proyek | Ya |  |
| Sinkronisasi data repo dari GitHub | Ya |  |
| Halaman Layanan (freelance) dan penanda terbuka untuk magang | Ya |  |
| Pengalaman, pendidikan, dan sertifikat | Ya |  |
| Unduh CV (Indonesia dan Inggris) | Ya |  |
| Formulir kontak dan tautan sosial | Ya |  |
| Catatan teknis (blog) |  | Ya |
| Ringkasan aktivitas kontribusi GitHub |  | Ya |
| Testimoni klien dan sekolah mitra |  | Ya |
| API backend sendiri (NestJS) untuk proyek dan kontak |  | Ya |

## 7. Kebutuhan Fungsional

- FR-01 Beranda: hero berisi nama, peran, satu kalimat nilai jual, penanda “Terbuka untuk magang dan freelance”, dan tiga tombol (Lihat Proyek, Unduh CV, Hubungi).
- FR-02 Daftar proyek: kartu proyek berisi judul, ringkasan satu kalimat, teknologi, status, dan tautan; dapat difilter menurut kategori dan teknologi.
- FR-03 Studi kasus: halaman detail memakai template pada bagian 10.
- FR-04 Sinkronisasi GitHub: bintang, bahasa dominan, tanggal pembaruan terakhir, topics, dan tautan repo ditarik otomatis dan disimpan sementara (cache).
- FR-05 Keahlian: dikelompokkan menjadi IoT dan Embedded, Backend, Database, Frontend, serta Tools; setiap kelompok terhubung ke proyek yang membuktikannya.
- FR-06 Pengalaman, pendidikan, dan sertifikat: linimasa yang bersumber dari CV (bagian 5.4).
- FR-07 Layanan: bagian berisi tiga layanan freelance, alur kerja singkat, dan tombol Mulai diskusi.
- FR-08 Pengalih bahasa Indonesia dan Inggris di navigasi; bahasa awal mengikuti pengaturan browser, pilihan pengunjung diingat, dan setiap halaman punya URL per bahasa (/id dan /en).
- FR-09 Unduh CV: tombol memberi PDF sesuai bahasa halaman, tanpa nomor telepon.
- FR-10 Kontak: formulir dengan pilihan keperluan (Magang, Freelance, Lainnya), validasi, perlindungan spam, dan pesan konfirmasi; tersedia juga tautan email, LinkedIn, dan GitHub.
- FR-11 Tema Glassmorphism dengan mode gelap dan terang yang mengikuti pengaturan perangkat dan dapat diganti manual.
- FR-12 Halaman 404 dan halaman galat yang ramah dengan tautan kembali ke beranda.

## 8. Kebutuhan Non-Fungsional

- Performa: halaman statis atau ter-render di server, gambar dioptimalkan (WebP atau AVIF), font dibatasi dua keluarga; efek blur dibatasi (sekitar tiga lapisan blur terlihat sekaligus) agar tetap lancar di HP kelas menengah.
- Responsif: nyaman dari lebar 360 px sampai layar desktop.
- Aksesibilitas: standar WCAG 2.1 AA; kontras teks di atas panel kaca minimal 4,5:1 (beri lapisan gelap atau terang di bawah teks bila perlu), navigasi keyboard, teks alternatif gambar, dan reduced motion dihormati.
- Fallback kaca: bila browser tidak mendukung backdrop-filter, panel memakai warna semi-solid lewat @supports sehingga teks tetap terbaca.
- SEO dua bahasa: URL terpisah per bahasa, tag hreflang, judul dan meta deskripsi per bahasa, Open Graph, sitemap.xml, robots.txt.
- Keandalan: bila GitHub API gagal atau terkena batas laju, situs tetap tampil memakai snapshot data terakhir.
- Keamanan: tidak ada rahasia di sisi klien, formulir dilindungi dari spam dan injeksi, HTTPS wajib.
- Pemeliharaan: menambah proyek baru cukup dengan satu berkas konten per bahasa.

## 9. Struktur Halaman

- Beranda: hero, 3 proyek unggulan, ringkasan keahlian, penanda terbuka untuk magang dan freelance, ajakan menghubungi.
- Proyek: daftar dan filter, lalu halaman detail per proyek.
- Layanan: tiga layanan freelance, alur kerja, dan ajakan diskusi.
- Tentang: cerita singkat, keahlian, pengalaman, pendidikan, sertifikat, foto.
- Kontak: formulir, email, tautan sosial, tombol unduh CV.
- Fase 2: Catatan (blog).

Setiap halaman tersedia di /id dan /en.

Navigasi utama: Proyek, Layanan, Tentang, Kontak, tombol Unduh CV, dan pengalih bahasa ID/EN.

## 10. Template Studi Kasus Proyek

Setiap proyek unggulan memakai struktur yang sama agar mudah dibaca dan mudah dibandingkan:

- Judul dan ringkasan satu kalimat.
- Konteks: untuk siapa proyek ini dan masalah apa yang diselesaikan.
- Peran Rayhan: apa yang dikerjakan sendiri dan apa yang dikerjakan tim.
- Solusi dan fitur utama.
- Arsitektur: diagram singkat dan alasan memilih teknologi.
- Tantangan teknis dan cara mengatasinya.
- Hasil: angka, demo, atau umpan balik pengguna bila ada.
- Tautan: repo, demo langsung, dokumentasi.
- Stack dan galeri tangkapan layar.

Field data per proyek: slug, judul dan ringkasan (Indonesia dan Inggris), kategori, stack, peran, status (selesai, berjalan, prototipe), repoUrl, demoUrl, gambar sampul, galeri, unggulan (benar atau salah), urutan tampil. Teks studi kasus ditulis sebagai dua berkas MDX, satu per bahasa.

## 11. Desain dan UX

- Gaya Glassmorphism: panel kaca transparan (isi putih atau gelap dengan alfa sekitar 8 sampai 20 persen), blur latar 12 sampai 24 px, garis tepi 1 px semi-transparan, dan bayangan lembut, di atas latar gradien mesh dua sampai tiga warna.
- Warna modern dan berani, diambil dari dua referensi Dribbble pilihan Rayhan (lihat di bawah tabel token): satu warna dasar gelap, dua warna aksen, dan satu warna teks.
- Mode gelap menjadi tampilan utama karena efek kaca paling terlihat di latar gelap; mode terang tetap tersedia.
- Keterbacaan lebih penting dari efek: teks selalu berada di atas panel dengan kontras cukup, bukan langsung di atas gradien.
- Hero memuat nama, peran, dan satu kalimat yang spesifik tentang jenis sistem yang dibangun, bukan sekadar kata sifat.
- Kartu proyek konsisten: gambar, judul, ringkasan, chip teknologi.
- Tombol ajakan selalu terlihat di navigasi: Hubungi dan Unduh CV; penanda “Terbuka untuk magang dan freelance” di hero.
- Animasi tipis (panel terangkat saat disentuh kursor) dan menghormati pengaturan reduced motion.
- Alur rancangan: wireframe mobile lebih dulu, lalu desktop, lalu prototipe Figma sebelum implementasi.

Token desain (nilai diisi dari referensi warna):

| Token | Fungsi | Arah nilai |
| --- | --- | --- |
| --bg | Latar dasar | warna gelap dari referensi |
| --glow-1, --glow-2 | Bola gradien di latar | dua warna aksen yang diburamkan |
| --glass-fill | Isi panel | putih atau hitam, alfa 8 sampai 20% |
| --glass-border | Garis tepi panel | putih, alfa 20 sampai 30% |
| --blur | Blur latar panel | 12 sampai 24 px |
| --accent | Tombol dan tautan | warna aksen utama |
| --text, --text-muted | Teks | kontras 4,5:1 atau lebih di atas panel |

Referensi visual dari Rayhan: [Landing Page Design for Lodge Booking](https://dribbble.com/shots/27389159-Landing-Page-Design-for-Lodge-Booking) dan [AI Dashboard UX/UI Product Design](https://dribbble.com/shots/27746998-AI-Dashboard-UX-UI-Product-Design) (Dribbble). Palet, tipografi, dan tata letak diambil dari kedua shot ini; token di atas diisi setelah tangkapan layarnya dianalisis.

Foto profil sudah tersedia (IMG\_20241024\_134331.jpg): potret setengah badan dengan blazer hitam dan kemeja putih di latar oranye-terakota, serupa dengan foto di CV. Latar oranye perlu diselaraskan dengan palet. Dua pilihan:

- Hapus latar, lalu tempatkan potret di atas panel kaca dengan cahaya aksen di belakangnya.
- Pertahankan oranye-terakota sebagai salah satu warna aksen dan pakai foto apa adanya dalam bingkai membulat.

## 12. Arsitektur dan Tech Stack

Rekomendasi untuk MVP (statis-dulu, biaya rendah):

- Framework: Next.js (App Router) atau Astro, dengan TypeScript.
- Dwibahasa: routing per bahasa (/id dan /en) memakai library i18n (misalnya next-intl di Next.js atau fitur i18n bawaan Astro); teks antarmuka di berkas terjemahan dan studi kasus sebagai MDX per bahasa.
- Styling: Tailwind CSS dengan token desain pada bagian 11; efek kaca memakai backdrop-filter dengan fallback @supports.
- Konten studi kasus: berkas MDX di dalam repo.
- Data GitHub: diambil di server saat build atau lewat revalidasi berkala (misalnya tiap 6 jam), bukan dari browser pengunjung.
- Deploy: Vercel atau Cloudflare Pages. Domain belum ada, jadi rilis awal bisa memakai subdomain gratis bawaan hosting; setelah itu beli domain nama sendiri (misalnya .dev, .com, atau .my.id) dan pasang sebelum tautannya dicantumkan di CV, GitHub, dan LinkedIn agar tidak berubah.
- Formulir kontak: layanan seperti Resend atau Formspree, atau endpoint serverless sendiri.
- Analitik: Plausible atau Umami (ringan dan ramah privasi).

Opsi Fase 2: membangun API kecil dengan NestJS (endpoint proyek, kontak, rate limiting) sekaligus menjadi bukti kemampuan backend yang bisa dijelaskan sebagai studi kasus tersendiri.

## 13. Integrasi GitHub API

| Kebutuhan | Cara |
| --- | --- |
| Daftar repo publik | REST: GET /users/KingVolveyRAY/repos?sort=updated |
| Bahasa per repo | REST: GET /repos/{owner}/{repo}/languages |
| Ringkasan dari README | REST: GET /repos/{owner}/{repo}/readme |
| Repo yang di-pin | GraphQL: user.pinnedItems (tidak tersedia di REST) |

Aturan integrasi:

- Batas laju tanpa autentikasi sekitar 60 permintaan per jam per IP, sedangkan dengan token sekitar 5.000 per jam; gunakan token read-only yang disimpan di environment variable server.
- Cache hasil dan lakukan revalidasi berkala; simpan snapshot JSON sebagai cadangan bila API gagal.
- Daftar putih (allowlist) slug repo unggulan di berkas konfigurasi, supaya repo yang tidak ingin ditampilkan tidak pernah muncul.
- Data kurasi (peran, hasil, gambar) tetap ditulis manual di MDX; GitHub hanya memasok data teknis.

## 14. Keamanan dan Privasi

- Token GitHub dan kunci layanan email hanya ada di environment variable server dan tidak pernah dikirim ke klien.
- Formulir kontak memakai validasi sisi server, pembatasan laju, dan honeypot atau captcha ringan.
- Nomor telepon dan alamat tidak ditampilkan di halaman maupun di PDF CV yang bisa diunduh (CV saat ini memuat nomor telepon dan kota); kontak publik cukup email, LinkedIn, dan GitHub.
- Cantumkan hanya kontak dan foto yang memang ingin dipublikasikan.
- Analitik tanpa cookie pelacak, sehingga tidak memerlukan banner persetujuan yang mengganggu.

## 15. Rencana dan Milestone (usulan 7 minggu)

| Minggu | Fokus | Keluaran |
| --- | --- | --- |
| 1 | Persiapan | Audit GitHub, pilih 4 sampai 6 proyek, perbaiki CV (bagian 5.4), tentukan palet dari referensi, pilih nama domain |
| 2 | Desain | Wireframe mobile dan desktop, token Glassmorphism, prototipe Figma |
| 3 | Fondasi | Setup proyek, i18n Indonesia dan Inggris, layout, beranda, tema gelap dan terang |
| 4 | Konten (Indonesia) | Daftar proyek, studi kasus, integrasi GitHub, Tentang, Layanan |
| 5 | Konten (Inggris) dan kontak | Terjemahan konten, formulir kontak, CV dua bahasa |
| 6 | Kualitas | SEO dua bahasa, aksesibilitas (kontras panel kaca), performa, uji di HP |
| 7 | Rilis | Beli dan pasang domain, analitik, publikasi, perbarui tautan di CV, GitHub, dan LinkedIn |

## 16. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Repo kurang rapi atau tanpa README | Kesan pertama lemah | Rapikan 4 sampai 6 repo unggulan lebih dulu |
| Proyek instansi atau klien tidak boleh dipublikasikan | Kehilangan bahan utama | Tampilkan sebagai studi kasus tanpa kode dan data sensitif |
| GitHub API terkena batas laju | Daftar proyek kosong | Cache, token, dan snapshot cadangan |
| Efek blur membuat teks sulit dibaca atau halaman berat di HP | Pengunjung pergi dan skor performa turun | Lapisan di bawah teks, batasi jumlah lapisan blur, fallback tanpa blur |
| Konten Indonesia dan Inggris tidak sinkron | Informasi berbeda antar bahasa | Satu struktur data dan terjemahkan bersamaan setiap kali memperbarui proyek |
| Data pribadi di CV ikut terpublikasi | Risiko privasi | CV publik tanpa nomor telepon |
| Cakupan melebar (blog, animasi berlebihan) | Rilis molor | Patuhi pembagian MVP dan Fase 2 |
| Konten tidak diperbarui | Portofolio terlihat usang | Sinkronisasi otomatis dan pengingat tinjauan tiap 3 bulan |

## 17. Kriteria Penerimaan (Definition of Done)

- Semua halaman pada bagian 9 tersedia di /id dan /en, dan pengalih bahasa bekerja di setiap halaman.
- Minimal 4 proyek unggulan punya studi kasus lengkap sesuai template, dalam dua bahasa.
- Data repo tampil otomatis dari GitHub dan tetap tampil saat API gagal.
- Formulir kontak berhasil mengirim pesan ke email pemilik dan menolak input tidak valid.
- Skor Lighthouse 90 ke atas pada beranda dan satu halaman studi kasus.
- Kontras teks di atas panel kaca minimal 4,5:1, dan halaman tetap terbaca di browser tanpa dukungan backdrop-filter.
- Tampilan benar di lebar 360 px, 768 px, dan 1280 px.
- Tidak ada kunci rahasia di repo website maupun di kode klien, dan tidak ada nomor telepon di halaman atau PDF CV.
- Tautan website sudah dipasang di CV, GitHub, dan LinkedIn.

## 18. Keputusan dan Pertanyaan Terbuka

Sudah diputuskan:

- Kandidat proyek di bagian 5.2 sudah sesuai; proyek tambahan diisi manual oleh Rayhan.
- Target: magang dan freelance.
- Poros positioning: IoT Developer.
- Website dwibahasa (Indonesia dan Inggris).
- Gaya visual Glassmorphism dengan warna modern, mengacu pada dua shot Dribbble (bagian 11).
- CV dan foto profil sudah tersedia.

Masih terbuka:

- Tangkapan layar kedua referensi Dribbble (atau tautan pendek tanpa parameter) agar palet dan tata letaknya bisa diambil.
- Bidang magang yang dicari serta ketersediaan (ditunda atas permintaan Rayhan).
- Layanan freelance final dan apakah rentang tarif ditampilkan (ditunda).
- Nama domain (ditunda; Rayhan akan memikirkannya).
