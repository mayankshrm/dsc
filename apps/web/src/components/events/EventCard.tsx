import { ArrowUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { DISCIPLINE_LABELS, type Event } from '@/data/lib/types';

const DAY_FORMAT = new Intl.DateTimeFormat('en-IN', {
  day: '2-digit',
  timeZone: 'Asia/Kolkata',
});
const MONTH_FORMAT = new Intl.DateTimeFormat('en-IN', {
  month: 'short',
  timeZone: 'Asia/Kolkata',
});

export function EventCard({ event }: { event: Event }) {
  const dt = new Date(event.date);
  const day = DAY_FORMAT.format(dt);
  const month = MONTH_FORMAT.format(dt).toUpperCase();
  const isUpcoming = event.status === 'upcoming';
  const meta = `${event.location} · ${event.ageGroups.join(', ')}`;
  const disciplineLine = event.disciplines.map((d) => DISCIPLINE_LABELS[d]).join(' · ').toUpperCase();

  return (
    <article className="group/card relative flex h-full w-full min-w-0 max-w-full flex-col overflow-hidden border-2 border-ink bg-paper transition-[transform,box-shadow] duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-mag">
      {/* Header: date block + title + single meta line */}
      <div className="flex w-full min-w-0 items-stretch">
        <div className="flex shrink-0 flex-col items-center justify-center border-r-2 border-ink bg-ink px-3 py-2.5 text-paper sm:px-4 sm:py-3">
          <span className="font-display text-3xl leading-none sm:text-4xl">{day}</span>
          <span className="mt-1 font-mono text-[9px] font-bold tracking-[0.2em] sm:text-[10px] sm:tracking-[0.25em]">
            {month}
          </span>
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center px-3 py-2.5 sm:px-4 sm:py-3">
          <h3 className="font-display text-lg uppercase leading-[0.95] tracking-tight text-ink sm:text-xl">
            {event.title}
          </h3>
          <p className="mt-1 truncate font-mono text-[10px] uppercase tracking-wider text-ink/60 sm:mt-1.5 sm:text-[11px]">
            {meta}
          </p>
        </div>
      </div>

      {/* Body: one short description line, clipped */}
      {event.description && (
        <p className="line-clamp-2 min-w-0 break-words px-3 pb-3 pt-2 font-serif text-sm leading-snug text-ink/70 sm:px-4 sm:pb-4 sm:pt-3 sm:text-base">
          {event.description}
        </p>
      )}

      {/* Footer: disciplines + CTA inline on all sizes. Disciplines truncate to fit. */}
      <div className="mt-auto flex w-full min-w-0 items-center justify-between gap-2 px-3 pb-3 pt-1.5 sm:gap-3 sm:px-4 sm:pb-4 sm:pt-2">
        <span className="min-w-0 truncate font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-ink/50 sm:text-[10px] sm:tracking-[0.2em]">
          {disciplineLine}
        </span>
        {isUpcoming && event.registrationUrl ? (
          <Button asChild size="sm" variant="default" className="shrink-0">
            <a href={event.registrationUrl} target="_blank" rel="noreferrer noopener">
              Register <ArrowUpRight className="size-3.5" />
            </a>
          </Button>
        ) : isUpcoming ? (
          <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">
            TBA
          </span>
        ) : (
          <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink/40">
            PAST
          </span>
        )}
      </div>
    </article>
  );
}
