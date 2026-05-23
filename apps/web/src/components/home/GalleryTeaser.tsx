import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import type { GalleryImage } from '@/data/lib/types';

function TeaserSlot({ image }: { image: GalleryImage }) {
  return (
    <div className="group relative aspect-square overflow-hidden border-2 border-ink bg-ink transition-[transform,box-shadow] duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-mag">
      {image.src ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center border-2 border-dashed border-ink/20 bg-paper">
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-ink/25">
            Photo coming soon
          </p>
        </div>
      )}
      {image.caption && (
        <div className="absolute inset-x-0 bottom-0 bg-ink/70 px-3 py-2 backdrop-blur-sm">
          <p className="truncate font-mono text-[9px] uppercase tracking-wider text-paper/80">
            {image.caption}
          </p>
        </div>
      )}
    </div>
  );
}

export function GalleryTeaser({ images }: { images: GalleryImage[] }) {
  if (images.length === 0) return null;

  return (
    <section>
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-display text-super uppercase leading-none tracking-headline">
          Photos
        </h2>
        <Button asChild variant="outline" size="sm">
          <Link href="/gallery">
            See all <ArrowUpRight className="size-3.5" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {images.slice(0, 3).map((image) => (
          <TeaserSlot key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
}
