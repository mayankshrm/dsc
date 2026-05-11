import type { Metadata } from 'next';
import { Anton, Instrument_Serif, JetBrains_Mono, Noto_Serif_Devanagari } from 'next/font/google';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { buildMetadata } from '@/lib/seo';

import './globals.css';

// Display: narrow, tall, all-caps headlines — the skate-mag voice
const display = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

// Body: characterful editorial serif (anti-generic per frontend-design)
const body = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

// Mono for metadata: dates, locations, badges, IDs (zine convention)
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Devanagari: weighted to match Anton's presence in the wordmark
const deva = Noto_Serif_Devanagari({
  weight: ['700', '900'],
  subsets: ['devanagari'],
  variable: '--font-deva',
  display: 'swap',
});

export const metadata: Metadata = buildMetadata({});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${deva.variable}`}
    >
      <body className="relative flex min-h-screen flex-col">
        <Header />
        <main className="relative z-[2] flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
