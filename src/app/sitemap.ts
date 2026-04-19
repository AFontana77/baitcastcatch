import type { MetadataRoute } from 'next';
import { getAllFish, getCategories, toSlug } from '@/lib/items';

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [categories, allFish] = await Promise.all([getCategories(), getAllFish()]);

  const categoryUrls: MetadataRoute.Sitemap = categories.map(({ category }) => ({
    url: `${BASE}/library/${toSlug(category)}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const itemUrls: MetadataRoute.Sitemap = allFish.map((item) => ({
    url: `${BASE}/library/${toSlug(item.category)}/${toSlug(item.name)}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const licenseUrls: MetadataRoute.Sitemap = LICENSE_STATES.map((slug) => ({
    url: `${BASE}/fishing-license/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/library`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/free-download`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/fishing-license`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/support`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    ...licenseUrls,
    ...categoryUrls,
    ...itemUrls,
  ];
}
