import React from 'react';
import { notFound } from 'next/navigation';
import { Language } from '@/types';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';

export function generateStaticParams() {
  return [{ lang: 'id' }, { lang: 'en' }];
}

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (lang !== 'id' && lang !== 'en') {
    notFound();
  }

  const validLang = lang as Language;

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* High-End Ambient Mesh & Aurora Gradients for True Glass Refraction */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        {/* Subtle Cyber Grid Matrix */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_70%,transparent_100%)] opacity-35 dark:opacity-25" />

        {/* Luminous Glowing Blobs */}
        <div className="absolute -top-32 left-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-orange-500/30 via-amber-500/20 to-transparent blur-[120px] dark:opacity-80 opacity-55 animate-pulse duration-[7000ms]" />
        <div className="absolute top-[25%] -right-24 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-cyan-500/30 via-blue-600/20 to-transparent blur-[130px] dark:opacity-75 opacity-50" />
        <div className="absolute top-[55%] -left-28 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-amber-600/25 via-orange-500/20 to-transparent blur-[125px] dark:opacity-70 opacity-45" />
        <div className="absolute -bottom-24 right-[15%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-cyan-600/30 via-emerald-500/20 to-transparent blur-[140px] dark:opacity-75 opacity-50" />
      </div>

      {/* Top Navbar */}
      <Navbar lang={validLang} />

      {/* Main Content */}
      <main className="flex-1 pt-24 sm:pt-28 pb-12 relative z-10">
        <PageTransition>{children}</PageTransition>
      </main>

      {/* Bottom Footer */}
      <Footer lang={validLang} />
    </div>
  );
}
