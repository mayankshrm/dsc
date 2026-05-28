import {
  Instagram,
  Youtube,
  MessageCircle,
  Globe,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react';

import type { CommunityLink, LinkType } from '@/data/lib/types';

const TYPE_LABEL: Record<LinkType, string> = {
  social:   'Social',
  video:    'Video',
  partner:  'Partners',
  resource: 'Resources',
};

const TYPE_ORDER: LinkType[] = ['social', 'video', 'partner', 'resource'];

const TYPE_STYLES: Record<LinkType, { hover: string; accent: string }> = {
  social:   { hover: 'hover:shadow-mag-primary', accent: 'text-primary' },
  video:    { hover: 'hover:shadow-mag',          accent: 'text-ink/60' },
  partner:  { hover: 'hover:shadow-mag',          accent: 'text-ink/40' },
  resource: { hover: 'hover:shadow-mag',          accent: 'text-ink/60' },
};

function iconFromUrl(url: string) {
  const cls = 'size-7';
  try {
    const host = new URL(url).hostname.replace('www.', '');
    if (host.includes('instagram.com'))  return <Instagram className={cls} />;
    if (host.includes('youtube.com') || host.includes('youtu.be')) return <Youtube className={cls} />;
    if (host.includes('wa.me') || host.includes('whatsapp.com'))   return <MessageCircle className={cls} />;
  } catch {
    // fall through
  }
  return <Globe className={cls} />;
}

function iconFromType(type: LinkType) {
  const cls = 'size-7';
  switch (type) {
    case 'social':   return <Instagram className={cls} />;
    case 'video':    return <Youtube className={cls} />;
    case 'resource': return <BookOpen className={cls} />;
    case 'partner':  return <Globe className={cls} />;
  }
}

function linkIcon(link: CommunityLink) {
  const fromUrl = iconFromUrl(link.url);
  // iconFromUrl returns Globe as fallback — if URL gave us something specific, use it
  // otherwise fall back to type-based icon
  try {
    const host = new URL(link.url).hostname.replace('www.', '');
    const recognised =
      host.includes('instagram.com') ||
      host.includes('youtube.com') ||
      host.includes('youtu.be') ||
      host.includes('wa.me') ||
      host.includes('whatsapp.com');
    if (recognised) return fromUrl;
  } catch {
    // ignore
  }
  return iconFromType(link.type);
}

function LinkCard({ link }: { link: CommunityLink }) {
  const styles = TYPE_STYLES[link.type];
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer noopener"
      className={`group flex flex-col border-2 border-ink bg-paper p-5 transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 ${styles.hover}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-ink/50 transition-colors duration-200 group-hover:text-ink">
          {linkIcon(link)}
        </span>
        <ArrowUpRight className="size-4 text-ink/20 transition-colors duration-200 group-hover:text-ink/60 mt-0.5" />
      </div>

      <p className="mt-4 font-display text-xl uppercase leading-tight tracking-tight text-ink">
        {link.title}
      </p>

      {link.handle && (
        <p className="mt-1 font-mono text-xs font-bold text-ink/40">{link.handle}</p>
      )}

      {link.description && (
        <p className="mt-2 font-serif text-sm italic leading-snug text-ink/60">
          {link.description}
        </p>
      )}

    </a>
  );
}

function TypeGroup({ type, links }: { type: LinkType; links: CommunityLink[] }) {
  const styles = TYPE_STYLES[type];
  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.25em] ${styles.accent}`}>
          {TYPE_LABEL[type]}
        </span>
        <div className="h-px flex-1 bg-ink/15" />
        <span className="font-mono text-[9px] text-ink/30">{links.length}</span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
    </div>
  );
}

export function LinksSection({ links }: { links: CommunityLink[] }) {
  if (links.length === 0) return null;

  const grouped = links.reduce<Partial<Record<LinkType, CommunityLink[]>>>((acc, link) => {
    if (!acc[link.type]) acc[link.type] = [];
    acc[link.type]!.push(link);
    return acc;
  }, {});

  const activeTypes = TYPE_ORDER.filter((t) => (grouped[t]?.length ?? 0) > 0);

  return (
    <section>
      <div className="mb-8 flex items-baseline justify-between">
        <h2 className="font-display text-super uppercase leading-none tracking-headline">
          Further
        </h2>
        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/40">
          {links.length} {links.length === 1 ? 'link' : 'links'}
        </span>
      </div>

      <div className="flex flex-col gap-10">
        {activeTypes.map((type) => (
          <TypeGroup key={type} type={type} links={grouped[type]!} />
        ))}
      </div>
    </section>
  );
}
