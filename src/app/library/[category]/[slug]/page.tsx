import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { getAllFish, getFishByCategory, toSlug, type FishItem } from '@/lib/items';
import type { Metadata } from 'next';

// ── Static params ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const all = await getAllFish();
  return all.map((item) => ({
    category: toSlug(item.category),
    slug: toSlug(item.name),
  }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category: categorySlug, slug } = await params;
  const all = await getAllFish();
  const item = all.find(
    (f) => toSlug(f.category) === categorySlug && toSlug(f.name) === slug
  );
  if (!item) return {};

  const scientificName = item.data?.scientific_name ?? '';
  const desc = item.description
    ? item.description.slice(0, 155)
    : `${item.name} (${scientificName}) — habitat, fishing techniques, size data, and world record information from FishBase.`;

  return {
    title: `${item.name} — ${item.category} Fish Species | FishLog`,
    description: desc,
    alternates: {
      canonical: `https://www.baitcastcatch.com/library/${categorySlug}/${slug}`,
    },
  };
}

// ── Star rating helper ────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f${i}`} className="text-amber-400" aria-hidden="true">★</span>
      ))}
      {half && <span className="text-amber-400" aria-hidden="true">½</span>}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e${i}`} className="text-gray-300" aria-hidden="true">★</span>
      ))}
      <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function FishDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: categorySlug, slug } = await params;

  // Find the item
  const all = await getAllFish();
  const item = all.find(
    (f) => toSlug(f.category) === categorySlug && toSlug(f.name) === slug
  );
  if (!item) notFound();

  // Related fish (same category, exclude current)
  const categoryFish = await getFishByCategory(item.category);
  const related = categoryFish
    .filter((f) => toSlug(f.name) !== slug)
    .slice(0, 5);

  // Data shorthands
  const d = item.data ?? {};
  const scientificName = d.scientific_name ?? '';
  const habitat = d.habitat ?? '';
  const bestBait = d.best_bait ?? '';
  const technique = d.technique ?? '';
  const avgWeight = d.avg_weight_lbs;
  const avgLength = d.avg_length_inches;
  const recordWeight = d.record_weight_lbs;
  const recordLocation = d.world_record_location ?? '';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.baitcastcatch.com' },
      { '@type': 'ListItem', position: 2, name: 'Library', item: 'https://www.baitcastcatch.com/library' },
      { '@type': 'ListItem', position: 3, name: `${item.category} Fish`, item: `https://www.baitcastcatch.com/library/${categorySlug}` },
      { '@type': 'ListItem', position: 4, name: item.name, item: `https://www.baitcastcatch.com/library/${categorySlug}/${slug}` },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${item.name} — ${item.category} Fish Species`,
    description: item.description ?? `${item.name} species profile from FishBase.`,
    author: { '@type': 'Organization', name: 'FishLog' },
    publisher: { '@type': 'Organization', name: 'FishLog', url: 'https://www.baitcastcatch.com' },
    url: `https://www.baitcastcatch.com/library/${categorySlug}/${slug}`,
    ...(item.image_url ? { image: item.image_url } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero + Breadcrumb */}
        <section className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-gray-500 flex items-center gap-1.5 flex-wrap">
              <Link href="/" className="hover:text-blue-700 hover:underline">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/library" className="hover:text-blue-700 hover:underline">Library</Link>
              <span aria-hidden="true">/</span>
              <Link href={`/library/${categorySlug}`} className="hover:text-blue-700 hover:underline">
                {item.category}
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-gray-700 font-medium">{item.name}</span>
            </nav>

            {/* Subcategory badge */}
            {item.subcategory && (
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
                {item.subcategory}
              </span>
            )}

            {/* Name + Scientific */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-2">
              {item.name}
            </h1>
            {scientificName && (
              <p className="text-lg text-gray-500 italic mb-3">{scientificName}</p>
            )}

            {/* Rating */}
            {item.rating != null && (
              <div className="mb-2">
                <StarRating rating={item.rating} />
              </div>
            )}
          </div>
        </section>

        {/* Main content */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-10">

            {/* Image block */}
            {item.image_url ? (
              <figure>
                <img
                  src={item.image_url}
                  alt={`${item.name} (${scientificName})`}
                  className="w-full rounded-xl object-cover max-h-80"
                  loading="eager"
                />
                {(item.source_name || item.source_url) && (
                  <figcaption className="mt-2 text-xs text-gray-400 text-center">
                    Image:{' '}
                    {item.source_url ? (
                      <a
                        href={item.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-600 underline"
                      >
                        {item.source_name ?? 'FishBase'} / Wikipedia
                      </a>
                    ) : (
                      <span>{item.source_name ?? 'FishBase'} / Wikipedia</span>
                    )}
                    . CC BY-SA 4.0.
                  </figcaption>
                )}
              </figure>
            ) : (
              <div className="w-full h-48 rounded-xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center">
                <span className="text-blue-400 text-6xl" aria-hidden="true">🐟</span>
              </div>
            )}

            {/* At-a-glance stats */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">At a Glance</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-1">Avg Length</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {avgLength != null ? `${avgLength}"` : '—'}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-1">Avg Weight</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {avgWeight != null ? `${avgWeight} lbs` : '—'}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-1">World Record</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {recordWeight != null ? `${recordWeight} lbs` : '—'}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-1">Habitat</p>
                  <p className="text-base font-semibold text-gray-900 leading-tight">
                    {habitat || '—'}
                  </p>
                </div>
              </div>
            </div>

            {/* About this species */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">About the {item.name}</h2>
              <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-3">
                {item.description && <p>{item.description}</p>}
                <p>
                  The {item.name} is one of the most recognizable {item.category.toLowerCase()} species in North American waters
                  {scientificName ? `, classified scientifically as <em>${scientificName}</em>` : ''}.
                  {item.subcategory ? ` It belongs to the ${item.subcategory} group` : ''}
                  {habitat ? `, most commonly found in ${habitat.toLowerCase()} environments` : ''}.
                  Anglers target this species for both sport and table fare, and it appears across a broad range of water bodies throughout the United States.
                </p>
                <p>
                  {avgWeight != null && avgLength != null
                    ? `A typical ${item.name} runs ${avgLength} inches in length and weighs around ${avgWeight} pounds, though fish in prime habitat regularly exceed these averages. `
                    : ''}
                  {recordWeight != null && recordLocation
                    ? `The all-tackle world record stands at ${recordWeight} lbs, set at ${recordLocation}, making it a legitimate target for anglers chasing personal bests. `
                    : ''}
                  Conservation status varies by region — check local regulations before keeping fish, as some waters have slot limits or catch-and-release requirements in place.
                </p>
              </div>
            </div>

            {/* Habitat & Range */}
            {habitat && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Habitat &amp; Range</h2>
                <div className="bg-gray-50 rounded-xl p-5 text-gray-700 leading-relaxed space-y-3">
                  <p>
                    <strong>Primary habitat:</strong> {habitat}.
                  </p>
                  <p>
                    The {item.name} thrives across a wide range of {item.category.toLowerCase()} environments throughout North America.
                    Seasonal movements are driven by water temperature — fish tend to move into shallower water during spring and fall feeding periods, and push deeper or seek cover during the heat of summer and cold of winter.
                    Understanding these patterns is critical to locating fish consistently across the season.
                  </p>
                </div>
              </div>
            )}

            {/* Fishing technique */}
            {(bestBait || technique) && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">How to Fish for {item.name}</h2>
                <div className="bg-gray-50 rounded-xl p-5 text-gray-700 leading-relaxed space-y-3">
                  {bestBait && (
                    <p>
                      <strong>Best bait:</strong> {bestBait}.
                    </p>
                  )}
                  {technique && (
                    <p>
                      <strong>Technique:</strong> {technique}.
                    </p>
                  )}
                  <p>
                    Match your presentation to the season and conditions. In clear water, downsize your bait and slow your retrieve. In stained or muddy water, switch to high-contrast colors and add vibration.
                    Early morning and evening are the most productive windows during summer months.
                    During spawning season, fish become highly territorial and will strike out of aggression as well as hunger.
                  </p>
                </div>
              </div>
            )}

            {/* World Record */}
            {recordWeight != null && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">World Record</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-gray-700 leading-relaxed">
                  <p>
                    The all-tackle world record {item.name} weighed <strong>{recordWeight} lbs</strong>
                    {recordLocation ? `, caught at ${recordLocation}` : ''}.
                    This record represents the upper end of what this species achieves under ideal conditions.
                    Most anglers targeting personal bests focus on proven trophy waters with the right combination of habitat, forage base, and light fishing pressure.
                  </p>
                </div>
              </div>
            )}

            {/* State regulations */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">State Regulations</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-gray-700 leading-relaxed">
                <p>
                  Regulations vary by state and water body. Before fishing for {item.name}, verify current size limits, bag limits, and open seasons with your state fish and wildlife agency.
                  Check your state&apos;s fishing license requirements and season dates at the{' '}
                  <Link href="/fishing-license" className="text-blue-700 hover:underline font-medium">
                    FishLog Fishing License guide
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* App CTA */}
            <div className="rounded-xl bg-blue-700 text-white p-6 text-center">
              <h2 className="text-lg font-bold mb-2">Log your {item.name} catches in FishLog</h2>
              <p className="text-blue-100 text-sm mb-4">
                Record weight, length, GPS location, and photos. Build a personal record book across 375 species. Free for iOS and Android.
              </p>
              <Link
                href="/free-download"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors min-h-[48px]"
              >
                Free Download
              </Link>
            </div>

            {/* Affiliate block */}
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
              <h2 className="text-base font-bold text-gray-900 mb-2">Gear for {item.name} fishing</h2>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                Find rods, reels, lures, and tackle for {item.name} fishing on Amazon.
              </p>
              <a
                href={`https://www.amazon.com/s?k=${encodeURIComponent(item.name + ' fishing gear')}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm min-h-[44px]"
              >
                Shop {item.name} gear on Amazon →
              </a>
              <p className="mt-2 text-xs text-gray-400">
                As an Amazon Associate, we earn from qualifying purchases.
              </p>
            </div>

            {/* Related fish */}
            {related.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  More {item.category} Species
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {related.map((rel: FishItem) => (
                    <Link
                      key={rel.name}
                      href={`/library/${categorySlug}/${toSlug(rel.name)}`}
                      className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors group"
                    >
                      {rel.image_url ? (
                        <img
                          src={rel.image_url}
                          alt={rel.name}
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-400" aria-hidden="true">🐟</span>
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors truncate">
                          {rel.name}
                        </p>
                        {rel.subcategory && (
                          <p className="text-xs text-gray-500">{rel.subcategory}</p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
