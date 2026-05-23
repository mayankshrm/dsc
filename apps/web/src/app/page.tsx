import { Hero } from '@/components/home/Hero';
import { AboutTeaser } from '@/components/home/AboutTeaser';
import { UpcomingEvents } from '@/components/home/UpcomingEvents';
import { GalleryTeaser } from '@/components/home/GalleryTeaser';
import { LinksSection } from '@/components/home/LinksSection';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { Container } from '@/components/layout/Container';
import { getCommunity } from '@/data/lib/getCommunity';
import { getUpcomingEvents } from '@/data/lib/getEvents';
import { getGalleryTeaser } from '@/data/lib/getGallery';
import { getLinks } from '@/data/lib/getLinks';

export default async function HomePage() {
  const [community, upcoming, galleryTeaser, links] = await Promise.all([
    getCommunity(),
    getUpcomingEvents(3),
    getGalleryTeaser(3),
    getLinks(),
  ]);

  return (
    <>
      <Hero tagline={community.tagline} />
      <UpcomingEvents events={upcoming} />

      <SectionDivider label="Gallery" meta="DSC // DELHI" />
      <Container className="py-12 md:py-16">
        <GalleryTeaser images={galleryTeaser} />
      </Container>

      <SectionDivider label="About" meta="EST 2019" />
      <AboutTeaser />

      <SectionDivider label="Find Us" meta="CONNECT" />
      <Container className="py-12 md:py-16">
        <LinksSection links={links} />
      </Container>
    </>
  );
}
