import type { Metadata } from 'next';

const SITE_NAME = 'Delhi Skating Community';
const SITE_DESCRIPTION =
  'Delhi Skating Community (DSC) — weekend skating events for all age groups across inline, quad, skateboard, and hoverboard disciplines. Workshops for schools and colleges.';
const SITE_URL = 'https://delhiskatingcommunity.in';

export function buildMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = '/',
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: { canonical: url },
  };
}

export const siteConfig = {
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  socials: {
    instagram: 'https://www.instagram.com/delhiskatingcommunity/',
    instagramHandle: '@delhiskatingcommunity',
    contactHandle: '@gosk8erboi',
    contactInstagram: 'https://www.instagram.com/gosk8erboi/',
  },
  contactEmail: 'hello@delhiskatingcommunity.in',
};
