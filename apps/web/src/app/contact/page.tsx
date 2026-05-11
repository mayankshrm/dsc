import type { Metadata } from 'next';
import { Instagram, Mail, MapPin } from 'lucide-react';

import { Container } from '@/components/layout/Container';
import { ContactForm } from '@/components/contact/ContactForm';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { Sticker } from '@/components/ui/Sticker';
import { buildMetadata, siteConfig } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Get in touch with the Delhi Skating Community — book a school or college workshop, ask about events, or just say hi.',
  path: '/contact',
});

export default function ContactPage() {
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

      <SectionDivider label="Channels" meta="REPLIES IN 2-3 DAYS" />

      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Channels */}
          <aside className="col-span-12 md:col-span-5 lg:col-span-4">
            <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-ink/50">
              · Reach us
            </h2>
            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group block border-3 border-ink bg-paper p-5 -rotate-1 transition-all hover:rotate-0 hover:shadow-mag"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="size-5 text-ink" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">
                      Instagram
                    </span>
                  </div>
                  <p className="mt-2 font-display text-2xl uppercase leading-tight text-ink group-hover:text-primary">
                    {siteConfig.socials.instagramHandle}
                  </p>
                  <p className="mt-1 font-serif text-sm italic text-ink/70">
                    Follow for event announcements
                  </p>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.contactInstagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group block border-3 border-ink bg-accent p-5 rotate-1 transition-all hover:rotate-0 hover:shadow-mag"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="size-5 text-ink" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink/60">
                      DM for queries
                    </span>
                  </div>
                  <p className="mt-2 font-display text-2xl uppercase leading-tight text-ink">
                    {siteConfig.socials.contactHandle}
                  </p>
                  <p className="mt-1 font-serif text-sm italic text-ink/80">
                    Direct message gets the fastest reply
                  </p>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="group block border-3 border-ink bg-ink p-5 text-paper -rotate-1 transition-all hover:rotate-0 hover:shadow-mag-primary"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="size-5" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-paper/50">
                      Email
                    </span>
                  </div>
                  <p className="mt-2 break-all font-mono text-base font-bold uppercase text-paper">
                    {siteConfig.contactEmail}
                  </p>
                  <p className="mt-1 font-serif text-sm italic text-paper/70">
                    Best for bookings & partnerships
                  </p>
                </a>
              </li>
              <li className="flex items-center gap-3 border-l-4 border-ink pl-4">
                <MapPin className="size-5 shrink-0 text-ink" />
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">
                    Where
                  </p>
                  <p className="font-display text-xl uppercase leading-tight">Delhi-NCR</p>
                  <p className="font-serif text-sm italic text-ink/70">
                    Events at parks across the city
                  </p>
                </div>
              </li>
            </ul>
          </aside>

          {/* Form */}
          <section className="col-span-12 md:col-span-7 lg:col-span-8">
            <div className="border-3 border-ink bg-paper p-6 shadow-mag md:p-8">
              <h2 className="font-display text-super uppercase leading-none tracking-headline text-ink">
                Send us a <span className="text-primary">message.</span>
              </h2>
              <p className="mt-3 font-serif text-lg italic text-ink/80">
                Booking a workshop? Mention your school/college, expected number of students,
                and a couple of date options.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
