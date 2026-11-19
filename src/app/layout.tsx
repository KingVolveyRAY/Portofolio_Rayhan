import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Muhammad Rayhan Ramadhan | IoT Developer',
  description:
    'Website portofolio dwibahasa Muhammad Rayhan Ramadhan, IoT Developer yang membangun sistem dari sensor sampai dashboard.',
  keywords: [
    'IoT Developer',
    'Muhammad Rayhan Ramadhan',
    'ESP32',
    'Arduino',
    'Next.js',
    'NestJS',
    'Portofolio IoT',
    'UIN Syarif Hidayatullah Jakarta',
  ],
  authors: [{ name: 'Muhammad Rayhan Ramadhan' }],
  creator: 'Muhammad Rayhan Ramadhan',
  metadataBase: new URL('https://rayhanramadhan.dev'),
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: ['en_US'],
    url: 'https://rayhanramadhan.dev',
    title: 'Muhammad Rayhan Ramadhan | IoT Developer',
    description:
      'IoT Developer yang membangun sistem dari sensor sampai dashboard. Menghubungkan mikrokontroler fisik dan antarmuka web modern.',
    siteName: 'Muhammad Rayhan Ramadhan Portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body className="antialiased selection:bg-orange-500/30 selection:text-orange-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
