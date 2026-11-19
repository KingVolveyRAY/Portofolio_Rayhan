import React from 'react';
import { notFound } from 'next/navigation';
import { Language } from '@/types';
import { CvView } from '@/components/CvView';
import { translations } from '@/lib/translations';

interface CvPageProps {
  params: Promise<{ lang: string }>;
}

export default async function CvPage({ params }: CvPageProps) {
  const { lang } = await params;

  if (lang !== 'id' && lang !== 'en') {
    notFound();
  }

  const validLang = lang as Language;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <CvView lang={validLang} />
    </div>
  );
}
