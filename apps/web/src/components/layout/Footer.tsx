import Link from 'next/link';
import { Instagram, Mail, ArrowUpRight } from 'lucide-react';

import { Container } from './Container';
import { Marquee } from '@/components/ui/Marquee';
import { siteConfig } from '@/lib/seo';

const TICKER = [
  'दिल्ली',
  'SKATE OR DIE',
  'EST 2019',
  'BYO HELMET',
  'ALL AGES',
  'INLINE',
  'QUAD',
  'SKATEBOARD',
  'HOVERBOARD',
  'NO FEES',
  'WEEKENDS',
];

export function Footer() {
  return (
    <footer className="relative z-[2] mt-24 bg-paper">
      <Marquee items={TICKER} variant="ink" speed="slow" size="md" />

      <Container className="grid gap-12 py-16 md:grid-cols-12">
        {/* Wordmark column — takes most of the width */}
        <div className="md:col-span-7">
          <Link href="/" className="inline-block">
            <div className="flex flex-col leading-[0.85]">
              <span
                className="font-deva text-[clamp(2.75rem,14vw,8rem)] font-black text-ink"
                lang="hi"
              >
                दिल्ली
              </span>
              <span className="font-display text-[clamp(2.75rem,14vw,8rem)] uppercase tracking-headline text-ink">
                Skating
              </span>
              <span className="font-display text-[clamp(2.5rem,14vw,8rem)] uppercase tracking-headline text-primary">
                Community
              </span>
            </div>
          </Link>
          <p className="mt-6 max-w-md font-serif text-lg italic text-ink/70">
            A community for skaters of every age and style across Delhi — inline, quad, skateboard,
            and hoverboard. We meet on weekends.
          </p>
        </div>

        {/* Explore */}
        <div className="md:col-span-2">
          <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50">
            Index
          </h4>
          <ul className="mt-4 space-y-2.5 font-display text-2xl uppercase">
            {[
              { href: '/', label: 'Home' },
              { href: '/events', label: 'Events' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-baseline gap-1 text-ink hover:text-primary"
                >
                  {item.label}
                  <ArrowUpRight className="size-4" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div className="md:col-span-3">
          <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50">
            Connect
          </h4>
          <ul className="mt-4 space-y-3 font-mono text-sm">
            <li>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-2 text-ink hover:text-primary"
              >
                <Instagram className="size-4" />
                <span className="border-b-2 border-transparent group-hover:border-primary">
                  {siteConfig.socials.instagramHandle}
                </span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.socials.contactInstagram}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-2 text-ink hover:text-primary"
              >
                <Instagram className="size-4" />
                <span className="border-b-2 border-transparent group-hover:border-primary">
                  {siteConfig.socials.contactHandle}
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="group flex items-center gap-2 text-ink hover:text-primary"
              >
                <Mail className="size-4" />
                <span className="break-all border-b-2 border-transparent group-hover:border-primary">
                  {siteConfig.contactEmail}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t-3 border-ink bg-ink text-paper">
        <Container className="flex flex-col items-start justify-between gap-2 py-4 font-mono text-[11px] uppercase tracking-[0.2em] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} · DELHI SKATING COMMUNITY · DELHI, IN</p>
          <p>Made by skaters, for skaters.</p>
        </Container>
      </div>
    </footer>
  );
}
