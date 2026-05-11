import Link from 'next/link';
import { ArrowRight, Instagram } from 'lucide-react';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Sticker } from '@/components/ui/Sticker';

export function Hero({ tagline }: { tagline: string }) {
  return (
    <section className="relative overflow-hidden border-b-3 border-ink">
      {/* Diagonal stripe accent in the background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/4 hidden h-[600px] w-[140%] -rotate-[8deg] bg-primary/10 md:block"
      />

      <Container className="relative grid grid-cols-12 gap-4 pb-12 pt-10 md:pb-24 md:pt-20">
        {/* Top meta row */}
        <div className="col-span-12 mb-6 flex items-end justify-between border-b-2 border-ink/20 pb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink/60 md:mb-10 md:pb-4 md:text-[11px]">
          <span>VOL. 06 · {new Date().getFullYear()}</span>
          <span className="hidden sm:inline">EST. 2019 · DELHI, IN</span>
          <span>↓ ROLL CALL</span>
        </div>

        {/* Main headline + sticker overlays */}
        <div className="relative col-span-12 lg:col-span-8">
          <div className="flex flex-col leading-[0.82]">
            <span
              className="font-deva text-[clamp(3rem,11vw,9rem)] font-black text-ink"
              lang="hi"
            >
              दिल्ली
            </span>
            <span className="font-display text-[clamp(3rem,11vw,9rem)] uppercase tracking-headline text-ink">
              Skating
            </span>
            <span className="font-display text-[clamp(2.6rem,11vw,9rem)] uppercase tracking-headline text-primary">
              Community
            </span>
          </div>

          {/* Sticker cluster — desktop only */}
          <div className="absolute -top-2 right-0 hidden flex-col items-end gap-2 md:flex lg:right-8">
            <Sticker rotate={-8} variant="highlight">
              EST &apos;19
            </Sticker>
            <Sticker rotate={6} variant="primary" size="sm">
              FREE TO JOIN
            </Sticker>
          </div>

          {/* Tagline */}
          <p className="mt-6 max-w-xl font-serif text-xl italic leading-snug text-ink md:mt-8 md:text-3xl">
            {tagline}
          </p>

          <p className="mt-3 max-w-xl font-mono text-[13px] leading-relaxed text-ink/70 md:mt-4 md:text-sm">
            Weekend skating meetups, beginner workshops, and school sessions across Delhi —
            for inline, quad, skateboard, and hoverboard skaters of every age.
          </p>

          {/* Actions: full-width stacked on mobile, inline auto-width on md+ */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:mt-10">
            <Button asChild size="lg" variant="default" className="w-full sm:w-auto md:h-16 md:px-10 md:text-base">
              <Link href="/events">
                See upcoming events <ArrowRight className="size-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto md:h-16 md:px-10 md:text-base">
              <Link href="/about">About DSC</Link>
            </Button>
          </div>
        </div>

        {/* Right column.
            Mobile: tight horizontal strip — stat + IG link inline.
            Desktop (lg+): full vertical aside with stat block, WE DO list, and BYO HELMET sticker. */}
        <aside className="relative col-span-12 mt-8 lg:col-span-4 lg:mt-0">
          {/* Mobile-only compact strip */}
          <div className="flex items-stretch border-3 border-ink lg:hidden">
            <div className="flex flex-1 items-center gap-3 bg-ink px-4 py-3 text-paper">
              <span className="font-display text-3xl leading-none">~9.4K</span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-paper/70">
                Skaters<br />on IG
              </span>
            </div>
            <a
              href="https://www.instagram.com/delhiskatingcommunity/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Follow @delhiskatingcommunity on Instagram"
              className="flex items-center gap-2 border-l-3 border-ink bg-paper px-4 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="size-4" />
              Follow
            </a>
          </div>

          {/* Desktop full aside */}
          <div className="hidden flex-col gap-6 lg:flex">
            <div className="border-3 border-ink bg-ink p-6 text-paper shadow-mag-primary">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-paper/60">
                Roll call
              </p>
              <p className="mt-3 font-display text-7xl uppercase leading-[0.85] tracking-tight">
                ~9.4k
              </p>
              <p className="mt-1 font-serif text-base italic text-paper/80">
                skaters following us on Instagram
              </p>
              <a
                href="https://www.instagram.com/delhiskatingcommunity/"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-1 border-b-2 border-primary font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary"
              >
                @delhiskatingcommunity →
              </a>
            </div>

            <div className="border-3 border-ink bg-paper p-6">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">
                We do
              </p>
              <ul className="mt-3 space-y-1.5 font-display text-2xl uppercase leading-tight text-ink">
                <li>· Inline</li>
                <li>· Quad</li>
                <li>· Skateboard</li>
                <li>· Hoverboard</li>
              </ul>
            </div>

            <Sticker rotate={4} variant="accent" size="lg" className="self-start">
              BYO HELMET ✦
            </Sticker>
          </div>
        </aside>
      </Container>
    </section>
  );
}
