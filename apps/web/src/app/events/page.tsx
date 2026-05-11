import type { Metadata } from 'next';

import { Container } from '@/components/layout/Container';
import { EventCard } from '@/components/events/EventCard';
import { PastEventList } from '@/components/events/PastEventList';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { Sticker } from '@/components/ui/Sticker';
import { getPastEvents, getUpcomingEvents } from '@/data/lib/getEvents';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Events',
  description:
    'Upcoming and past Delhi Skating Community events — weekend meetups, beginner workshops, and school sessions across Delhi.',
  path: '/events',
});

export default async function EventsPage() {
  const [upcoming, past] = await Promise.all([getUpcomingEvents(), getPastEvents()]);

  return (
    <>
      <Container className="pb-12 pt-12 md:pt-16">
        <div className="grid grid-cols-12 gap-6">
          <header className="relative col-span-12 lg:col-span-9">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-ink/50">
              · The Calendar
            </p>
            <h1 className="mt-3 font-display text-mega uppercase leading-[0.85] tracking-headline text-ink">
              <span className="text-primary">Events</span>
            </h1>
            <p className="mt-6 max-w-xl font-serif text-xl italic leading-snug text-ink/80 md:text-2xl">
              Open to all skaters. Pick a date that works, register if there&apos;s a form,
              and roll up.
            </p>
          </header>
          <aside className="col-span-12 hidden self-end lg:col-span-3 lg:block">
            <Sticker rotate={-6} variant="highlight" size="lg">
              FREE TO JOIN
            </Sticker>
          </aside>
        </div>
      </Container>

      <SectionDivider label="The Calendar" meta="दिल्ली" />

      <Container className="py-12 md:py-16">
        <section>
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-display text-super uppercase leading-none tracking-headline">
              Upcoming
            </h2>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
              {upcoming.length} {upcoming.length === 1 ? 'event' : 'events'}
            </span>
          </div>
          {upcoming.length === 0 ? (
            <div className="border-3 border-dashed border-ink/30 p-12 text-center">
              <p className="font-mono text-sm uppercase tracking-widest text-ink/60">
                No events on the calendar right now
              </p>
              <p className="mt-2 font-serif text-lg italic text-ink/80">
                Follow us on Instagram for the next one.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          )}
        </section>

        {past.length > 0 && (
          <section className="mt-20">
            <div className="mb-8 flex items-baseline justify-between">
              <h2 className="font-display text-super uppercase leading-none tracking-headline">
                Past <span className="text-primary">events</span>
              </h2>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
                Index
              </span>
            </div>
            <PastEventList events={past} />
          </section>
        )}
      </Container>
    </>
  );
}
