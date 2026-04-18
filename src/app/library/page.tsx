import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { getCategories, toSlug } from '@/lib/items';
import { Database, Search } from 'lucide-react';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'FishLog Library — 375 Fish Species',
  description:
    'Species data from FishBase and NOAA — habitat, typical size ranges, and state regulation links for US waters. Browse the FishLog reference database — available in the free app.',
};

export default async function LibraryPage() {
  const categories = await getCategories();

  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-blue-50 rounded-2xl items-center justify-center mb-6">
              <Database className="text-blue-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              FishLog Library
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              375 fish species from FishBase + NOAA. Habitat, typical size ranges, fishing techniques, and state regulation links for US waters.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-blue-800 bg-blue-50 px-4 py-2 rounded-full">
              <Search size={14} /> Full search available in the free app
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Browse by Category
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map(({ category, count }) => {
                const slug = toSlug(category);
                return (
                  <Link
                    key={category}
                    href={`/library/${slug}`}
                    className="group block bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-800 transition-colors">
                      {category}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mb-2">
                      {count} species
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {category === 'Freshwater' &&
                        'Bass, trout, panfish, catfish, pike, and more — the full range of inland species.'}
                      {category === 'Saltwater' &&
                        'Redfish, snook, flounder, tuna, and coastal gamefish along both US coasts.'}
                      {category === 'Anadromous' &&
                        'Salmon, steelhead, striped bass, and shad — fish that run between ocean and river.'}
                      {category !== 'Freshwater' &&
                        category !== 'Saltwater' &&
                        category !== 'Anadromous' &&
                        `Browse all ${count} species in the ${category} category.`}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* App CTA */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Search the full database in the app.
            </h2>
            <p className="text-gray-600 mb-6">
              The FishLog app has the complete 375 fish species with full-text search, filters, and your personal log — all free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]"
              >
                App Store
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]"
              >
                Google Play
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">Free. No subscription. No credit card.</p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
