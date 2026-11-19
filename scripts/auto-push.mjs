import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('[Auto-Push] Pengawas sinkronisasi otomatis GitHub aktif...');
console.log('[Auto-Push] Memantau repositori https://github.com/KingVolveyRAY/Portofolio_Rayhan.git');

let debounceTimer = null;
const DEBOUNCE_DELAY_MS = 5000; // 5 detik setelah perubahan terakhir

function syncToGitHub() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf-8' }).trim();
    if (!status) {
      return;
    }

    console.log('[Auto-Push] Terdeteksi perubahan berkas, melakukan komit dan push...');
    execSync('git add .', { stdio: 'inherit' });

    const timestamp = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
    execSync(`git commit -m "auto: sinkronisasi perubahan (${timestamp})"`, { stdio: 'inherit' });
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('[Auto-Push] Berhasil dipush ke GitHub main branch!');
  } catch (error) {
    console.error('[Auto-Push] Gagal melakukan push:', error.message);
  }
}

// Watch directory recursively
fs.watch('.', { recursive: true }, (eventType, filename) => {
  if (!filename) return;

  // Abaikan folder internal dan file temporer
  if (
    filename.startsWith('.git') ||
    filename.startsWith('.next') ||
    filename.startsWith('node_modules') ||
    filename.startsWith('.playwright-mcp')
  ) {
    return;
  }

  // Debounce to batch multiple simultaneous file saves
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    syncToGitHub();
  }, DEBOUNCE_DELAY_MS);
});

// Jalankan sinkronisasi awal jika ada sisa perubahan
syncToGitHub();
