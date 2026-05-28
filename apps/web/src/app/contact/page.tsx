import type { Metadata } from 'next';
import { Instagram, Mail, MapPin } from 'lucide-react';

import { Container } from '@/components/layout/Container';
import { LinksSection } from '@/components/home/LinksSection';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { Sticker } from '@/components/ui/Sticker';
import { buildMetadata, siteConfig } from '@/lib/seo';
import { getLinks } from '@/data/lib/getLinks';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Get in touch with the Delhi Skating Community — book a school or college workshop, ask about events, or just say hi.',
  path: '/contact',
});

export default async function ContactPage() {
  const links = await getLinks();

  return (
    <>
      <Container className="pb-10 pt-12 md:pt-16">
        <div className="grid grid-cols-12 gap-4">
          <header className="col-span-12 lg:col-span-9">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-ink/50">
              · Get in touch
            </p>
            <h1 className="mt-3 font-display text-mega uppercase leading-[0.85] tracking-headline text-ink">
              Holler at <span className="italic text-primary">us.</span>
            </h1>
            <p className="mt-6 max-w-xl font-serif text-xl italic leading-snug text-ink/80 md:text-2xl">
              For workshop bookings, partnerships, press, or just to say hello.
            </p>
          </header>
          <aside className="col-span-12 lg:col-span-3 lg:self-end lg:text-right">
            <Sticker rotate={-5} variant="highlight" size="lg">
              REPLIES IN 2-3 DAYS
            </Sticker>
          </aside>
        </div>
      </Container>

      <SectionDivider label="Contact" meta="REACH US" />

      <Container className="py-12 md:py-16">
        {/* Three contact cards — stacked on mobile, side by side on md+ */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Instagram main */}
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="group block border-3 border-ink bg-paper p-6 md:p-8 -rotate-1 transition-all duration-200 hover:rotate-0 hover:shadow-mag"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Instagram className="size-5 text-ink" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">
                  Instagram
                </span>
              </div>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-ink/30">
                01
              </span>
            </div>
            <p className="mt-5 font-display text-xl uppercase leading-tight text-ink group-hover:text-primary lg:text-2xl">
              {siteConfig.socials.instagramHandle}
            </p>
            <p className="mt-3 font-serif text-base italic leading-snug text-ink/60">
              Follow for event announcements, photos and updates.
            </p>
          </a>

          {/* DM for queries — lime bg, slightly different rotation */}
          <a
            href={siteConfig.socials.contactInstagram}
            target="_blank"
            rel="noreferrer noopener"
            className="group block border-3 border-ink bg-accent p-6 md:p-8 rotate-1 transition-all duration-200 hover:rotate-0 hover:shadow-mag"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Instagram className="size-5 text-ink" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink/60">
                  DM for queries
                </span>
              </div>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-ink/30">
                02
              </span>
            </div>
            <p className="mt-5 font-display text-3xl uppercase leading-tight text-ink md:text-2xl lg:text-3xl">
              {siteConfig.socials.contactHandle}
            </p>
            <p className="mt-3 font-serif text-base italic leading-snug text-ink/70">
              Fastest reply. Questions about events, workshops, anything.
            </p>
          </a>

          {/* Email — ink bg, inverted */}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="group block border-3 border-ink bg-ink p-6 md:p-8 text-paper -rotate-1 transition-all duration-200 hover:rotate-0 hover:shadow-mag-primary"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail className="size-5 text-paper" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-paper/50">
                  Email
                </span>
              </div>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-paper/30">
                03
              </span>
            </div>
            <p className="mt-5 break-all font-mono text-lg font-bold uppercase text-paper md:text-base lg:text-lg">
              {siteConfig.contactEmail}
            </p>
            <p className="mt-3 font-serif text-base italic leading-snug text-paper/60">
              Best for bookings, partnerships and press.
            </p>
          </a>
        </div>

        {/* Location strip */}
        <div className="mt-6 flex items-center gap-4 border-2 border-ink bg-paper px-6 py-4">
          <MapPin className="size-5 shrink-0 text-ink/50" />
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
            <span className="font-display text-xl uppercase leading-tight text-ink">Delhi-NCR</span>
            <span className="hidden font-mono text-[10px] text-ink/30 sm:inline">·</span>
            <span className="font-serif text-sm italic text-ink/60">
              Events at parks across the city — no fixed venue
            </span>
          </div>
        </div>
      </Container>

      <SectionDivider label="Further" meta="EXPLORE" />
      <Container className="py-12 md:py-16">
        <LinksSection links={links} />
      </Container>
    </>
  );
}
