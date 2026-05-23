import { contentfulClient } from '@/lib/contentful';
import type { Event, Discipline } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toEvent(entry: any): Event {
  const f = entry.fields;
  return {
    slug: f.slug,
    title: f.title,
    date: f.date,
    location: f.location,
    description: f.description ?? '',
    ageGroups: f.ageGroups ?? [],
    disciplines: (f.disciplines ?? []) as Discipline[],
    status: f.status,
    registrationUrl: f.registrationUrl ?? undefined,
    coverImage: f.coverImage?.fields?.file?.url
      ? `https:${f.coverImage.fields.file.url}`
      : undefined,
  };
}

export async function getEvents(): Promise<Event[]> {
  const res = await contentfulClient.getEntries({ content_type: 'event' });
  return res.items.map(toEvent);
}

export async function getUpcomingEvents(limit?: number): Promise<Event[]> {
  const res = await contentfulClient.getEntries({
    content_type: 'event',
    'fields.status': 'upcoming',
    order: ['fields.date'],
    ...(limit ? { limit } : {}),
  });
  return res.items.map(toEvent);
}

export async function getPastEvents(): Promise<Event[]> {
  const res = await contentfulClient.getEntries({
    content_type: 'event',
    'fields.status': 'past',
    order: ['-fields.date'],
  });
  return res.items.map(toEvent);
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  const res = await contentfulClient.getEntries({
    content_type: 'event',
    'fields.slug': slug,
    limit: 1,
  });
  return res.items.length ? toEvent(res.items[0]) : null;
}
