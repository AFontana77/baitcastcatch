const SUPABASE_URL = 'https://yypztrtmikyksjrsipzy.supabase.co';
const ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5cHp0cnRtaWt5a3NqcnNpcHp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNTY0MDYsImV4cCI6MjA5MTkzMjQwNn0.bg4qwTqwra8iAl3X88ZN8jGcfZeFASUFpz1zo75N5aw';

export type FishItem = {
  name: string;
  category: string;
  subcategory: string | null;
  description: string | null;
  image_url: string | null;
  source_url: string | null;
  source_name: string | null;
  rating: number | null;
  data: {
    habitat?: string;
    best_bait?: string;
    technique?: string;
    common_name?: string;
    avg_weight_lbs?: number;
    scientific_name?: string;
    avg_length_inches?: number;
    record_weight_lbs?: number;
    world_record_location?: string;
  } | null;
};

export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function supaFetch(path: string): Promise<Response> {
  return fetch(`${SUPABASE_URL}${path}`, {
    headers: {
      apikey: ANON_KEY,
      Authorization: `Bearer ${ANON_KEY}`,
    },
    cache: 'force-cache',
  });
}

export async function getAllFish(): Promise<FishItem[]> {
  const res = await supaFetch(
    '/rest/v1/items?skin_id=eq.fishing&select=name,category,subcategory,description,image_url,source_url,source_name,rating,data&order=name.asc'
  );
  if (!res.ok) return [];
  return res.json() as Promise<FishItem[]>;
}

export async function getFishByCategory(category: string): Promise<FishItem[]> {
  const res = await supaFetch(
    `/rest/v1/items?skin_id=eq.fishing&category=eq.${encodeURIComponent(category)}&select=name,category,subcategory,description,image_url,source_url,source_name,rating,data&order=name.asc`
  );
  if (!res.ok) return [];
  return res.json() as Promise<FishItem[]>;
}

export async function getFishBySlug(slug: string): Promise<FishItem | null> {
  const all = await getAllFish();
  return all.find((f) => toSlug(f.name) === slug) ?? null;
}

export async function getCategories(): Promise<{ category: string; count: number }[]> {
  const all = await getAllFish();
  const map = new Map<string, number>();
  for (const item of all) {
    if (item.category) map.set(item.category, (map.get(item.category) || 0) + 1);
  }
  return [...map.entries()]
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}
