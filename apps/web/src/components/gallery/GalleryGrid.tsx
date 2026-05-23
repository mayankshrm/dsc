import Image from 'next/image';

import { cn } from '@/lib/utils';
import type { GalleryImage } from '@/data/lib/types';

function GalleryPlaceholder({ alt }: { alt: string }) {
  return (
    <div className="flex aspect-square w-full items-center justify-center border-2 border-dashed border-ink/30 bg-paper">
      <div className="text-center">
        <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-ink/30">
          Photo
        </p>
        <p className="mt-1 font-mono text-[8px] uppercase tracking-widest text-ink/20">
          Coming soon
        </p>
      </div>
      <span className="sr-only">{alt}</span>
    </div>
  );
}

function GalleryCard({ image }: { image: GalleryImage }) {
  return (
    <figure className="group relative overflow-hidden border-2 border-ink bg-ink transition-[transform,box-shadow] duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-mag">
      <div className="relative aspect-square w-full overflow-hidden">
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <GalleryPlaceholder alt={image.alt} />
        )}
      </div>
      {image.caption && (
        <figcaption className="px-3 py-2.5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-paper/70">
            {image.caption}
          </p>
        </figcaption>
      )}
    </figure>
  );
}

export function GalleryGrid({
  images,
  className,
}: {
  images: GalleryImage[];
  className?: string;
}) {
  if (images.length === 0) {
    return (
      <div className="border-3 border-dashed border-ink/30 p-12 text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-ink/60">
          No photos yet
        </p>
        <p className="mt-2 font-serif text-lg italic text-ink/80">
          Check back after the next meetup.
        </p>
      </div>
    );
  }

  return (
    <div className={cn('grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {images.map((image) => (
        <GalleryCard key={image.id} image={image} />
      ))}
    </div>
  );
}
