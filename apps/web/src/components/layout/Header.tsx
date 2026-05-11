'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Instagram, Mail, Menu, X } from 'lucide-react';

import { Container } from './Container';
import { WordmarkLockup } from '@/components/ui/WordmarkLockup';
import { siteConfig } from '@/lib/seo';
import { cn } from '@/lib/utils';

const NAV = [
  { href: '/', label: 'Home', meta: 'Start here' },
  { href: '/events', label: 'Events', meta: 'Calendar' },
  { href: '/about', label: 'About', meta: 'The Crew' },
  { href: '/contact', label: 'Contact', meta: 'Holler at us' },
];

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 w-full border-b-3 border-ink bg-paper/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label="Delhi Skating Community — home" className="block">
          <WordmarkLockup variant="compact" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-3 py-2 font-mono text-sm font-bold uppercase tracking-[0.2em] transition-colors',
                  active ? 'text-primary' : 'text-ink hover:text-primary',
                )}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
                {active && (
                  <span aria-hidden className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center border-2 border-ink bg-paper text-ink transition-colors hover:bg-ink hover:text-paper md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {/* Backdrop dim */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={cn(
          'fixed inset-0 top-16 z-30 bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      {/* Slide-in side panel — 75% width, max 300px, slides from right */}
      <aside
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          'fixed right-0 top-16 z-40 flex h-[calc(100dvh-4rem)] w-[75%] max-w-[300px] flex-col overflow-y-auto border-l-3 border-ink bg-paper md:hidden',
          'transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'invisible translate-x-full',
        )}
      >
        {/* Tiny meta header */}
        <div className="flex items-center justify-between border-b-2 border-ink/15 px-4 py-2.5 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-ink/50">
          <span>· Menu</span>
          <span>04 sections</span>
        </div>

        {/* Nav links — compact, single-line display type with index */}
        <nav className="flex-1">
          <ul>
            {NAV.map((item, i) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'group flex items-center justify-between gap-3 border-b-2 border-ink/10 px-4 py-3.5 transition-colors',
                      active ? 'bg-primary/5' : 'hover:bg-ink/5',
                    )}
                  >
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">
                        0{i + 1}
                      </span>
                      <span
                        className={cn(
                          'font-display text-2xl uppercase leading-none tracking-tight',
                          active ? 'text-primary' : 'text-ink group-hover:text-primary',
                        )}
                      >
                        {item.label}
                      </span>
                    </div>
                    <span
                      aria-hidden
                      className={cn(
                        'font-mono text-base transition-transform',
                        active ? 'text-primary' : 'text-ink/30 group-hover:translate-x-1 group-hover:text-primary',
                      )}
                    >
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Connect block at bottom of panel */}
        <div className="border-t-3 border-ink bg-ink px-4 py-4 text-paper">
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-paper/60">
            · Connect
          </p>
          <div className="mt-2.5 flex flex-col gap-2 font-mono text-xs">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-paper hover:text-primary"
            >
              <Instagram className="size-3.5" />
              <span className="border-b border-paper/30">{siteConfig.socials.instagramHandle}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-flex items-center gap-2 break-all text-paper hover:text-primary"
            >
              <Mail className="size-3.5" />
              <span className="border-b border-paper/30">{siteConfig.contactEmail}</span>
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}
