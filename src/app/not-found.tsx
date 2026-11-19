import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Cpu } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glow-orb-orange opacity-25 pointer-events-none" />

      <div className="glass-panel p-8 sm:p-12 rounded-3xl max-w-lg w-full text-center space-y-6 border border-slate-800 shadow-2xl relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 mx-auto flex items-center justify-center">
          <Cpu className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
            Error 404 • Endpoint Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            Halaman atau tautan yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>
          <p className="text-xs text-slate-500 font-mono">
            The requested resource or case study does not exist.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/id"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-orange-500 hover:bg-orange-600 text-white shadow-md transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Kembali ke Beranda (ID)</span>
          </Link>

          <Link
            href="/en"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-all cursor-pointer"
          >
            <span>Back to Home (EN)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
