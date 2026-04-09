import type { Metadata } from 'next';
import './globals.css';
import business from '@/data/business.json';

export const metadata: Metadata = {
  title: business.seo.title,
  description: business.seo.description,
  keywords: business.seo.keywords.join(', '),
  openGraph: {
    title: business.seo.title,
    description: business.seo.description,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: business.seo.title,
    description: business.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
