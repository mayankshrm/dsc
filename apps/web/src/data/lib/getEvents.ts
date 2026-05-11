import { events } from '../events';
import type { Event } from './types';

/**
 * Migration seam: pages call these functions, never the raw `events` array.
 * Swap the bodies to call Contentful (or any other source) without touching pages.
 */

export async function getEvents(): Promise<Event[]> {
  return events;
}

export async function getUpcomingEvents(limit?: number): Promise<Event[]> {
  const upcoming = events
    .filter((e) => e.status === 'upcoming')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return typeof limit === 'number' ? upcoming.slice(0, limit) : upcoming;
}

export async function getPastEvents(): Promise<Event[]> {
  return events
    .filter((e) => e.status === 'past')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  return events.find((e) => e.slug === slug) ?? null;
}
