import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { getCategories, getFishByCategory, toSlug, type FishItem } from '@/lib/items';
import type { Metadata } from 'next';

// ── Category copy ─────────────────────────────────────────────────────────────

const CATEGORY_COPY: Record<string, { intro: string; detail: string }> = {
  Freshwater: {
    intro:
      'Freshwater fish inhabit the lakes, rivers, streams, and ponds that stretch across North America. From the bass-heavy reservoirs of the South to the cold trout streams of the Rockies, freshwater fishing draws more anglers than any other discipline. Species in this category range from fast-growing panfish to trophy largemouth that can top 20 pounds. Knowing the habitat preferences, seasonal patterns, and feeding habits of each species is the difference between a slow afternoon and a memorable day on the water.',
    detail: 'freshwater fish species',
  },
  Saltwater: {
    intro:
      'Saltwater species roam the bays, flats, nearshore reefs, and open ocean along both US coasts and the Gulf of Mexico. These fish tend to be stronger fighters pound-for-pound than their freshwater cousins, and many are prized as table fare as well as sport. From redfish tailing on shallow grass flats to tuna running offshore, saltwater fishing demands an understanding of tides, structure, and bait presentation. This library covers the most sought-after saltwater gamefish in US waters, with data sourced from FishBase and NOAA.',
    detail: 'saltwater fish species',
  },
  Anadromous: {
    intro:
      'Anadromous fish are born in freshwater, migrate to the ocean to grow, and return to rivers to spawn — completing one of nature\'s most remarkable journeys. Salmon, steelhead, striped bass, and shad are the most famous members of this group. Targeting anadromous fish requires timing runs precisely, understanding river systems, and often traveling to specific waterways when fish are actively moving. The runs are predictable by season but vary year to year based on water temperature and flow. This library covers the key anadromous species found in North American waters.',
    detail: 'anadromous fish species',
  },
};

function getCategoryCopy(category: string): { intro: string; detail: string } {
  return (
    CATEGORY_COPY[category] ?? {
      intro: `Browse all ${category.toLowerCase()} fish species in the FishLog database. Each profile includes habitat, size data, fishing techniques, and world record information sourced from FishBase.`,
      detail: `${category.toLowerCase()} fish species`,
    }
  );
}

// ── Static params ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ category: toSlug(c.category) }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const categories = await getCategories();
  const match = categories.find((c) => toSlug(c.category) === categorySlug);
  if (!match) return {};

  const { category, count } = match;
  return {
    title: `${category} Fish Species — FishLog Library | FishLog`,
    description: `Browse ${count} ${category.toLowerCase()} fish species in the FishLog database. Habitat, size ranges, fishing techniques, and world record data from FishBase for US waters.`,
    alternates: {
      canonical: `https://www.baitcastcatch.com/library/${categorySlug}`,
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;

  // Resolve canonical category name from slug
  const categories = await getCategories();
  const match = categories.find((c) => toSlug(c.category) === categorySlug);
  if (!match) notFound();

  const { category } = match;
  const fish = await getFishByCategory(category);
  if (!fish.length) notFound();

  const copy = getCategoryCopy(category);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.baitcastcatch.com' },
      { '@type': 'ListItem', position: 2, name: 'Library', item: 'https://www.baitcastcatch.com/library' },
      { '@type': 'ListItem', position: 3, name: `${category} Fish`, item: `https://www.baitcastcatch.com/library/${categorySlug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero + Breadcrumb */}
        <section className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-gray-500 flex items-center gap-1.5 flex-wrap">
              <Link href="/" className="hover:text-blue-700 hover:underline">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/library" className="hover:text-blue-700 hover:underline">Library</Link>
              <span aria-hidden="true">/</span>
              <span className="text-gray-700 font-medium">{category} Fish</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {category} Fish Species
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              {copy.intro}
            </p>
            <p className="mt-3 text-sm text-blue-700 font-medium">
              {fish.length} species in this category
            </p>
          </div>
        </section>

        {/* Fish Grid */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {fish.map((item: FishItem) => {
                const itemSlug = toSlug(item.name);
                const snippet = item.description
                  ? item.description.slice(0, 80) + (item.description.length > 80 ? '…' : '')
                  : `A ${category.toLowerCase()} species in the FishLog database.`;

                return (
                  <Link
                    key={item.name}
                    href={`/library/${categorySlug}/${itemSlug}`}
                    className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                  >
                    {/* Image or placeholder */}
                    {item.image_url ? (
                      <div className="w-full h-32 rounded-lg overflow-hidden mb-4">
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-32 rounded-lg mb-4 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <span className="text-blue-400 text-3xl" aria-hidden="true">🐟</span>
                      </div>
                    )}

                    {/* Subcategory badge */}
                    {item.subcategory && (
                      <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full mb-2">
                        {item.subcategory}
                      </span>
                    )}

                    <h2 className="font-bold text-gray-900 mb-1 group-hover:text-blue-800 transition-colors">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">{snippet}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* App CTA */}
        <section className="py-14 px-4 bg-blue-700">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Log your {category.toLowerCase()} catches in FishLog
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              The FishLog app has the full species database plus a personal catch log — species, weight, length, GPS location, and photos. Free for iOS and Android.
            </p>
            <Link
              href="/free-download"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors min-h-[48px]"
            >
              Free Download
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
