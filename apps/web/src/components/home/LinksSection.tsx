import { Instagram, Youtube, Globe, Users } from 'lucide-react';

import type { CommunityLink, LinkCategory } from '@/data/lib/types';

const CATEGORY_LABEL: Record<LinkCategory, string> = {
  social: 'Social',
  video: 'Video',
  community: 'Community',
  partner: 'Partner',
};

function categoryIcon(category: LinkCategory) {
  switch (category) {
    case 'social':
      return <Instagram className="size-5" />;
    case 'video':
      return <Youtube className="size-5" />;
    case 'community':
      return <Users className="size-5" />;
    case 'partner':
      return <Globe className="size-5" />;
  }
}

function LinkCard({ link }: { link: CommunityLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex flex-col border-2 border-ink bg-paper p-5 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-mag"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-ink/40">
          {CATEGORY_LABEL[link.category]}
        </span>
        <span className="text-ink/40 transition-colors group-hover:text-primary">
          {categoryIcon(link.category)}
        </span>
      </div>
      <p className="mt-3 font-display text-xl uppercase leading-tight tracking-tight text-ink group-hover:text-primary">
        {link.title}
      </p>
      {link.handle && (
        <p className="mt-1 font-mono text-xs font-bold text-ink/50">{link.handle}</p>
      )}
      {link.description && (
        <p className="mt-2 font-serif text-sm leading-snug text-ink/70">{link.description}</p>
      )}
    </a>
  );
}

export function LinksSection({ links }: { links: CommunityLink[] }) {
  if (links.length === 0) return null;

  return (
    <section>
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-display text-super uppercase leading-none tracking-headline">
          Find us
        </h2>
        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
          {links.length} {links.length === 1 ? 'channel' : 'channels'}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
    </section>
  );
}
