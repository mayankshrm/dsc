import { Hero } from '@/components/home/Hero';
import { AboutTeaser } from '@/components/home/AboutTeaser';
import { UpcomingEvents } from '@/components/home/UpcomingEvents';
import { getCommunity } from '@/data/lib/getCommunity';
import { getUpcomingEvents } from '@/data/lib/getEvents';

export default async function HomePage() {
  const [community, upcoming] = await Promise.all([getCommunity(), getUpcomingEvents(3)]);

  return (
    <>
      <Hero tagline={community.tagline} />
      <UpcomingEvents events={upcoming} />
      <AboutTeaser />
    </>
  );
}
