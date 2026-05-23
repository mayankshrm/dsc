import { contentfulClient } from '@/lib/contentful';
import type { CommunityLink, LinkCategory } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toCommunityLink(entry: any): CommunityLink {
  const f = entry.fields;
  return {
    id: entry.sys.id,
    title: f.title,
    url: f.url,
    description: f.description ?? undefined,
    category: f.category as LinkCategory,
    handle: f.handle ?? undefined,
  };
}

export async function getLinks(): Promise<CommunityLink[]> {
  const res = await contentfulClient.getEntries({ content_type: 'communityLink' });
  return res.items.map(toCommunityLink);
}

