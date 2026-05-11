import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Container } from '@/components/layout/Container';
import { EventCard } from '@/components/events/EventCard';
import { Button } from '@/components/ui/button';
import { SectionDivider } from '@/components/ui/SectionDivider';
import type { Event } from '@/data/lib/types';

export function UpcomingEvents({ events }: { events: Event[] }) {
  return (
    <>
      <SectionDivider index="02" label="Calendar" meta="Next up" />
      <section className="relative py-14 md:py-24">
        <Container>
          <div className="mb-8 flex flex-col items-start justify-between gap-6 md:mb-10 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-jumbo uppercase leading-[0.85] tracking-headline text-ink">
                Roll up,
                <br />
                <span className="text-primary">show up.</span>
              </h2>
            </div>
            <Button asChild variant="outline" size="lg" className="hidden sm:inline-flex">
              <Link href="/events">
                All events <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          {events.length === 0 ? (
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
              {events.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          )}

          <div className="mt-8 sm:hidden">
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link href="/events">All events →</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

