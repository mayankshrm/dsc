import type { Metadata } from 'next';

import { Container } from '@/components/layout/Container';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { Sticker } from '@/components/ui/Sticker';
import { getGallery } from '@/data/lib/getGallery';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Gallery',
  description:
    'Photos from Delhi Skating Community meetups, workshops, and events across Delhi.',
  path: '/gallery',
});

export default async function GalleryPage() {
  const images = await getGallery();

  return (
    <>
      <Container className="pb-10 pt-12 md:pt-16">
        <div className="grid grid-cols-12 gap-4">
          <header className="col-span-12 lg:col-span-9">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-ink/50">
              · The Roll
            </p>
            <h1 className="mt-3 font-display text-mega uppercase leading-[0.85] tracking-headline text-ink">
              <span className="text-primary">Gallery</span>
            </h1>
            <p className="mt-6 max-w-xl font-serif text-xl italic leading-snug text-ink/80 md:text-2xl">
              Moments from meetups, workshops, and late-night cruises across Delhi.
            </p>
          </header>
          <aside className="col-span-12 hidden self-end lg:col-span-3 lg:block">
            <Sticker rotate={5} variant="accent" size="lg">
              EST &apos;19
            </Sticker>
          </aside>
        </div>
      </Container>

      <SectionDivider label="The Roll" meta="दिल्ली" />

      <Container className="py-12 md:py-16">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="font-display text-super uppercase leading-none tracking-headline">
            All Photos
          </h2>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
            {images.length} {images.length === 1 ? 'photo' : 'photos'}
          </span>
        </div>
        <GalleryGrid images={images} />
      </Container>
    </>
  );
}
