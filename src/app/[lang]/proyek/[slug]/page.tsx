import React from 'react';
import { notFound } from 'next/navigation';
import { Language } from '@/types';
import { projects } from '@/data/projects';
import { CaseStudyDetail } from '@/components/CaseStudyDetail';

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  ['id', 'en'].forEach((lang) => {
    projects.forEach((p) => {
      params.push({ lang, slug: p.slug });
    });
  });
  return params;
}

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { lang, slug } = await params;

  if (lang !== 'id' && lang !== 'en') {
    notFound();
  }

  return <CaseStudyDetail slug={slug} lang={lang as Language} />;
}
