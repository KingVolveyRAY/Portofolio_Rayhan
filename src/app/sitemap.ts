import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rayhanramadhan.dev';
  const languages = ['id', 'en'];
  const routes = ['', '/proyek', '/layanan', '/tentang', '/kontak', '/cv'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  const staticDate = new Date('2026-11-19T00:00:00Z');

  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: staticDate,
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });

    projects.forEach((p) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/proyek/${p.slug}`,
        lastModified: staticDate,
        changeFrequency: 'monthly',
        priority: 0.9,
      });
    });
  });

  return sitemapEntries;
}
