import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { Sticker } from '@/components/ui/Sticker';
import { getCommunity } from '@/data/lib/getCommunity';
import { DISCIPLINE_LABELS } from '@/data/lib/types';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description:
    'About the Delhi Skating Community — a fee-free, community-run group of skaters meeting on weekends across Delhi.',
  path: '/about',
});

export default async function AboutPage() {
  const community = await getCommunity();
  const yearsRunning = new Date().getFullYear() - community.foundedYear;

  return (
    <>
      <Container className="pb-12 pt-12 md:pt-16">
        <div className="grid grid-cols-12 gap-6">
          <header className="col-span-12 lg:col-span-9">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-ink/50">
              · About / The Crew
            </p>
            <h1 className="mt-3 font-display text-mega uppercase leading-[0.85] tracking-headline text-ink">
              About <span className="italic text-primary">DSC</span>
            </h1>
            <p className="mt-6 max-w-xl font-serif text-2xl italic leading-snug text-ink md:text-3xl">
              {community.tagline}
            </p>
          </header>
          <aside className="col-span-12 flex justify-start gap-3 lg:col-span-3 lg:flex-col lg:items-end lg:justify-end">
            <Sticker rotate={-6} variant="highlight" size="md">
              EST {community.foundedYear}
            </Sticker>
            <Sticker rotate={4} variant="primary" size="md">
              {yearsRunning} YRS ROLLING
            </Sticker>
          </aside>
        </div>
      </Container>

      <SectionDivider label="The Crew" meta="EST 2019" />

      <Container className="py-12 md:py-20">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-7">
            <h2 className="font-display text-super uppercase leading-none tracking-headline">
              Mission
            </h2>
            <p className="mt-6 font-serif text-xl italic leading-relaxed text-ink/85 md:text-2xl">
              {community.mission}
            </p>

            <h2 className="mt-16 font-display text-super uppercase leading-none tracking-headline">
              The <span className="text-primary">story</span>
            </h2>
            <div className="mt-6 space-y-5 font-serif text-lg leading-relaxed text-ink/85 md:text-xl">
              {community.story.map((para, i) => (
                <p key={i}>
                  <span className="float-left mr-3 font-display text-6xl leading-[0.8] text-primary">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {para}
                </p>
              ))}
            </div>
          </div>

          <aside className="col-span-12 flex flex-col gap-5 md:col-span-5">
            <div className="border-3 border-ink bg-paper p-6 -rotate-1 hover:rotate-0 transition-transform">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">
                Who skates with us
              </p>
              <ul className="mt-4 space-y-2 font-display text-2xl uppercase leading-tight text-ink">
                {community.ageGroupsServed.map((group) => (
                  <li key={group} className="flex items-baseline gap-2">
                    <span className="text-primary">·</span>
                    {group}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-3 border-ink bg-accent p-6 rotate-1 hover:rotate-0 transition-transform">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink/60">
                Disciplines
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {community.disciplines.map((d) => (
                  <Badge key={d} variant="ink">
                    {DISCIPLINE_LABELS[d]}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="border-3 border-ink bg-ink p-6 text-paper">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-paper/60">
                When we meet
              </p>
              <p className="mt-3 font-display text-3xl uppercase leading-tight">
                {community.meetingCadence}
              </p>
            </div>
          </aside>
        </div>
      </Container>

      <section className="border-t-3 border-ink bg-primary text-primary-foreground">
        <Container className="py-16 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <h2 className="font-display text-jumbo uppercase leading-[0.85] tracking-headline">
                Come skate this <span className="italic">weekend.</span>
              </h2>
              <p className="mt-4 max-w-xl font-serif text-xl italic text-primary-foreground/90">
                No paperwork, no membership. Find the next event and turn up.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
              <Button asChild size="lg" variant="ink">
                <Link href="/events">See events →</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-paper bg-transparent text-paper hover:bg-paper hover:text-ink"
              >
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
