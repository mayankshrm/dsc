import { contentfulClient } from '@/lib/contentful';
import type { GalleryImage } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toGalleryImage(entry: any): GalleryImage {
  const f = entry.fields;
  return {
    id: entry.sys.id,
    src: f.photo?.fields?.file?.url ? `https:${f.photo.fields.file.url}` : '',
    alt: f.title,
    caption: f.caption ?? undefined,
    eventSlug: f.eventSlug ?? undefined,
    eventDate: f.eventDate ?? undefined,
  };
}

export async function getGallery(): Promise<GalleryImage[]> {
  const res = await contentfulClient.getEntries({
    content_type: 'galleryImage',
    order: ['-fields.eventDate'],
  });
  return res.items.map(toGalleryImage);
}

export async function getGalleryTeaser(limit = 3): Promise<GalleryImage[]> {
  const res = await contentfulClient.getEntries({
    content_type: 'galleryImage',
    order: ['-fields.eventDate'],
    limit,
  });
  return res.items.map(toGalleryImage);
}
