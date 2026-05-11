import type { Event } from './lib/types';

/**
 * Hardcoded event list for the MVP.
 * Replace `registrationUrl` with the live Google Form link from the organisers.
 * To migrate to a CMS later, only `data/lib/getEvents.ts` needs to change.
 */
export const events: Event[] = [
  {
    slug: 'sunday-skate-cp-may-2026',
    title: 'Sunday Skate at Connaught Place',
    date: '2026-05-17T07:00:00+05:30',
    location: 'Central Park, Connaught Place, New Delhi',
    description:
      'Our weekly Sunday morning roll-out. Bring your skates, water, and a friend. Beginners welcome — we have skaters around to help you find your feet.',
    ageGroups: ['All ages'],
    disciplines: ['inline', 'quad', 'skateboard'],
    status: 'upcoming',
    registrationUrl: 'https://forms.gle/REPLACE_ME',
  },
  {
    slug: 'beginners-workshop-may-2026',
    title: 'Beginners Workshop — Inline Basics',
    date: '2026-05-24T08:00:00+05:30',
    location: 'Nehru Park, Chanakyapuri',
    description:
      'A focused 2-hour workshop for first-timers and returning skaters. We cover stance, stride, slowing down, and falling safely. Limited seats — please register.',
    ageGroups: ['Kids 8-12', 'Teens', 'Adults'],
    disciplines: ['inline'],
    status: 'upcoming',
    registrationUrl: 'https://forms.gle/REPLACE_ME',
  },
  {
    slug: 'late-night-cruise-jun-2026',
    title: 'Late-Night Cruise — India Gate Loop',
    date: '2026-06-07T21:00:00+05:30',
    location: 'India Gate, Rajpath',
    description:
      'A relaxed 8 km group cruise around the India Gate hexagon. Lights and helmets required. Intermediate and above.',
    ageGroups: ['Teens', 'Adults'],
    disciplines: ['inline', 'quad'],
    status: 'upcoming',
  },
  {
    slug: 'school-workshop-april-2026',
    title: 'School Workshop — DPS R.K. Puram',
    date: '2026-04-12T09:00:00+05:30',
    location: 'DPS R.K. Puram',
    description:
      'A morning workshop for ~40 students introducing skating fundamentals and safety. Booked through the school sports department.',
    ageGroups: ['Kids 6-12', 'Teens'],
    disciplines: ['inline', 'skateboard'],
    status: 'past',
  },
  {
    slug: 'holi-skate-march-2026',
    title: 'Holi Skate Meetup',
    date: '2026-03-09T08:00:00+05:30',
    location: 'Lodhi Garden, Lodhi Road',
    description:
      'Festive morning meet — colours, music, and a slow community ride. ~120 skaters joined.',
    ageGroups: ['All ages'],
    disciplines: ['inline', 'quad', 'skateboard', 'hoverboard'],
    status: 'past',
  },
];
