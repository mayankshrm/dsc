export type Discipline = 'inline' | 'quad' | 'skateboard' | 'hoverboard';

export const DISCIPLINE_LABELS: Record<Discipline, string> = {
  inline: 'Inline',
  quad: 'Quad',
  skateboard: 'Skateboard',
  hoverboard: 'Hoverboard',
};

export interface Event {
  slug: string;
  title: string;
  /** ISO 8601 date-time string */
  date: string;
  location: string;
  description: string;
  /** Free-text labels e.g. "Kids 6-12", "Teens", "Adults", "All ages" */
  ageGroups: string[];
  disciplines: Discipline[];
  coverImage?: string;
  status: 'upcoming' | 'past';
  /** Google Form URL — if absent the card shows "Details coming soon" */
  registrationUrl?: string;
}

export interface CommunityInfo {
  tagline: string;
  mission: string;
  story: string[];
  ageGroupsServed: string[];
  disciplines: Discipline[];
  foundedYear: number;
  meetingCadence: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  eventSlug?: string;
  eventDate?: string;
}

export type LinkCategory = 'social' | 'video' | 'community' | 'partner';

export interface CommunityLink {
  id: string;
  title: string;
  url: string;
  description?: string;
  category: LinkCategory;
  handle?: string;
}
