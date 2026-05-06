import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { getCategories, toSlug } from '@/lib/items';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'FishLog Library — 375 Fish Species',
  description:
    'Species data from FishBase and NOAA — habitat, typical size ranges, and state regulation links for US waters. Browse the FishLog reference database — available in the free app.',
};

const fg = 'oklch(0.15 0.025 240)';
const muted = 'oklch(0.35 0.020 240)';
const subtle = 'oklch(0.55 0.018 240)';
const accent = 'oklch(0.43 0.22 255)';
const border = 'oklch(0.84 0.020 240)';

function categoryDescription(category: string, count: number) {
  if (category === 'Freshwater') return 'Bass, trout, panfish, catfish, pike, and more. The full range of inland species.';
  if (category === 'Saltwater') return 'Redfish, snook, flounder, tuna, and coastal gamefish along both US coasts.';
  if (category === 'Anadromous') return 'Salmon, steelhead, striped bass, and shad. Fish that run between ocean and river.';
  return `Browse all ${count} species in the ${category} category.`;
}

export default async function LibraryPage() {
  const categories = await getCategories();

  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        <section style={{ background: 'oklch(0.95 0.010 240)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <span
              style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
              className="uppercase text-sm font-semibold mb-6 block"
            >
              FishBase · NOAA · 375 Species
            </span>
            <h1
              style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }}
              className="text-5xl sm:text-6xl font-bold uppercase mb-6"
            >
              FISHLOG LIBRARY
            </h1>
            <p
              style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '60ch' }}
              className="text-lg leading-relaxed mb-6"
            >
              375 fish species from FishBase and NOAA. Habitat, typical size ranges, fishing techniques, and state regulation links for US waters.
            </p>
            <div
              style={{
                display: 'inline-flex',
                background: 'oklch(0.99 0.005 240)',
                border: `1px solid ${border}`,
                color: accent,
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.05em',
              }}
              className="px-4 py-2 rounded-md text-sm font-semibold uppercase items-center gap-2"
            >
              Full search available in the free app
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <span
              style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
              className="uppercase text-sm font-semibold mb-4 block"
            >
              Index
            </span>
            <h2
              style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }}
              className="text-4xl sm:text-5xl font-bold uppercase mb-12"
            >
              BROWSE BY CATEGORY
            </h2>

            <div>
              {categories.map(({ category, count }, i) => {
                const slug = toSlug(category);
                return (
                  <Link
                    key={category}
                    href={`/library/${slug}`}
                    style={{
                      borderTop: `1px solid ${border}`,
                      borderBottom: i === categories.length - 1 ? `1px solid ${border}` : 'none',
                    }}
                    className="block py-6 grid sm:grid-cols-[220px_1fr_auto] gap-4 items-center hover:opacity-80 transition-opacity"
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: accent,
                        letterSpacing: '0.05em',
                      }}
                      className="text-lg font-bold uppercase"
                    >
                      {category}
                    </span>
                    <p style={{ color: muted, fontFamily: 'var(--font-body)' }} className="text-base leading-relaxed">
                      {categoryDescription(category, count)}
                    </p>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: fg,
                        letterSpacing: '0.05em',
                      }}
                      className="text-sm font-semibold uppercase"
                    >
                      {count} species &rarr;
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section
          style={{ background: 'oklch(0.92 0.015 240)', borderTop: `1px solid ${border}` }}
          className="py-20 px-6"
        >
          <div className="max-w-3xl mx-auto">
            <span
              style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
              className="uppercase text-sm font-semibold mb-4 block"
            >
              Free App
            </span>
            <h2
              style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }}
              className="text-4xl sm:text-5xl font-bold uppercase mb-4"
            >
              SEARCH THE FULL DATABASE IN THE APP
            </h2>
            <p
              style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '50ch' }}
              className="text-base mb-8"
            >
              The FishLog app has the complete 375 fish species with full-text search, filters, and your personal log. All free.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'oklch(0.43 0.22 255)',
                  color: 'oklch(0.99 0 0)',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  borderRadius: 'var(--radius)',
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-colors min-h-[48px] hover:opacity-90"
              >
                App Store
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: `1px solid ${border}`,
                  color: accent,
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  borderRadius: 'var(--radius)',
                  background: 'transparent',
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-colors min-h-[48px]"
              >
                Google Play
              </a>
            </div>
            <p style={{ color: subtle, fontFamily: 'var(--font-body)' }} className="mt-6 text-sm">
              Free. No subscription. No credit card.
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
