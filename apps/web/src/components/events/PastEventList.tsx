import { MapPin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { DISCIPLINE_LABELS, type Event } from '@/data/lib/types';

const DATE_FORMAT = new Intl.DateTimeFormat('en-IN', {
  day: '2-digit',
  month: 'short',
  year: '2-digit',
  timeZone: 'Asia/Kolkata',
});

export function PastEventList({ events }: { events: Event[] }) {
  if (events.length === 0) return null;

  return (
    <div className="border-3 border-ink bg-paper">
      {/* Header row — mag index style. Hidden on mobile (each row is self-describing). */}
      <div className="hidden grid-cols-12 gap-2 border-b-3 border-ink bg-ink px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-paper md:grid">
        <span className="col-span-2">Date</span>
        <span className="col-span-5">Event</span>
        <span className="col-span-3">Location</span>
        <span className="col-span-2 text-right">Style</span>
      </div>

      <ul className="divide-y-2 divide-ink/10">
        {events.map((event) => (
          <li
            key={event.slug}
            className="px-4 py-4 transition-colors hover:bg-ink/5 md:grid md:grid-cols-12 md:items-center md:gap-2"
          >
            {/* Mobile: stacked. Date pill on top, title, location row, disciplines row. */}
            {/* Desktop: 12-col grid. */}
            <span className="block font-mono text-[11px] font-bold uppercase tracking-wider text-ink/60 md:col-span-2 md:text-xs md:text-ink">
              {DATE_FORMAT.format(new Date(event.date)).toUpperCase()}
            </span>
            <div className="mt-1 md:col-span-5 md:mt-0">
              <h3 className="font-display text-lg uppercase leading-tight tracking-tight text-ink md:text-xl">
                {event.title}
              </h3>
              <div className="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-ink/60 md:hidden">
                <MapPin className="size-3 shrink-0" />
                <span className="truncate">{event.location}</span>
              </div>
            </div>
            <span className="hidden truncate font-mono text-xs text-ink/70 md:col-span-3 md:inline">
              {event.location}
            </span>
            <div className="mt-2 flex flex-wrap gap-1 md:col-span-2 md:mt-0 md:justify-end">
              {event.disciplines.slice(0, 2).map((d) => (
                <Badge key={d} variant="outline">
                  {DISCIPLINE_LABELS[d]}
                </Badge>
              ))}
              {event.disciplines.length > 2 && (
                <Badge variant="outline">+{event.disciplines.length - 2}</Badge>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
