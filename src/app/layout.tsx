import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ServiceWorkerRegistration } from '@/components/ServiceWorkerRegistration';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const viewport: Viewport = {
  themeColor: '#07090e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'TaxiMaster TVT | CBR Taxi Theorie & Praktijk Exam',
  description: 'Officieel voorbereidingsplatform voor het CBR Taxi Theorie-examen (TVT) en praktijkgesprekken. Met meertalige ondersteuning (Nederlands, Engels, Arabisch).',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'TaxiMaster TVT',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="dark">
      <body className={`${inter.className} min-h-screen bg-[#07090e] text-slate-100 flex flex-col`}>
        <ServiceWorkerRegistration />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
