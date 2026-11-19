import React from 'react';
import { notFound } from 'next/navigation';
import { Language } from '@/types';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

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
      {/* Background Ambient Glow Elements */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] glow-orb-orange -translate-y-1/2 -translate-x-1/2 opacity-30 pointer-events-none" />
      <div className="fixed top-1/3 right-0 w-[600px] h-[600px] glow-orb-cyan translate-x-1/3 opacity-25 pointer-events-none" />
      <div className="fixed bottom-10 left-10 w-[450px] h-[450px] glow-orb-orange opacity-20 pointer-events-none" />

      {/* Top Navbar */}
      <Navbar lang={validLang} />

      {/* Main Content */}
      <main className="flex-1 pt-24 sm:pt-28 pb-12 relative z-10">
        {children}
      </main>

      {/* Bottom Footer */}
      <Footer lang={validLang} />
    </div>
  );
}
