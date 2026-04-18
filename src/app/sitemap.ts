import type { MetadataRoute } from 'next';

const BASE = 'https://www.baitcastcatch.com';
const now = new Date();

const LICENSE_STATES = [
  'florida',
  'texas',
  'minnesota',
  'wisconsin',
  'michigan',
  'new-york',
  'montana',
  'colorado',
  'arkansas',
  'louisiana',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/library`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/free-download`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/fishing-license`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    ...LICENSE_STATES.map((slug) => ({
      url: `${BASE}/fishing-license/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
