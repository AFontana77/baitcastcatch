import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FishLog — Search 375 fish species with size limits and regulations",
  description: "FishLog has 375 fish species from FishBase and NOAA with size limits, habitat, and state regulation links. Log your catches, track your best fish, and build a record book worth keeping.",
};

const SAMPLE_SPECIES = [
  { name: "Largemouth Bass", type: "Freshwater", limit: "12–14 in." },
  { name: "Walleye", type: "Freshwater", limit: "15 in." },
  { name: "Channel Catfish", type: "Freshwater", limit: "12 in." },
  { name: "Crappie", type: "Freshwater", limit: "9 in." },
  { name: "Bluegill", type: "Freshwater", limit: "7 in." },
];

const FEATURES = [
  {
    label: "Species database",
    desc: "375 fish from FishBase and NOAA. Habitat, typical size range, and state regulation links for each one.",
  },
  {
    label: "Catch log",
    desc: "Species, weight, length, location, and time. Add a photo. Rate the fight. Every catch deserves a record.",
  },
  {
    label: "Personal records",
    desc: "Your biggest fish by species, updated every time you log. See your bests in one place.",
  },
  {
    label: "GPS location",
    desc: "Pin exact spots. See your catch history on a map. Find the good holes again.",
  },
];

const STATS = [
  { num: "375", label: "fish species" },
  { num: "50", label: "states covered" },
  { num: "$0", label: "cost to start" },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "FishLog",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Search 375+ fish species with size limits and regulations. Log your catches, track personal records, and build a catch history worth keeping.",
            "url": "https://www.baitcastcatch.com"
          })
        }}
      />
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Section 1: Hero — split layout, text left, data table right */}
        <section
          style={{ background: 'oklch(0.95 0.010 240)' }}
          className="pt-32 pb-20 px-6"
        >
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-12 items-start">

            {/* Left: text */}
            <div>
              <span
                style={{
                  color: 'oklch(0.43 0.22 255)',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.15em',
                }}
                className="text-sm font-semibold uppercase mb-6 block"
              >
                FishBase · NOAA · 375 Species
              </span>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'oklch(0.15 0.025 240)',
                  lineHeight: 1.0,
                }}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold uppercase mb-6"
              >
                KNOW YOUR FISH.<br />LOG YOUR CATCH.
              </h1>
              <p
                style={{
                  color: 'oklch(0.35 0.020 240)',
                  maxWidth: '44ch',
                  fontFamily: 'var(--font-body)',
                }}
                className="text-base leading-relaxed mb-8"
              >
                FishLog has 375 species from FishBase and NOAA. Size limits. Habitat. State regulation links. Search any fish before you cast. Log every catch after. Build a record book worth keeping.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/library"
                  style={{
                    background: 'oklch(0.43 0.22 255)',
                    color: 'oklch(0.99 0 0)',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    borderRadius: 'var(--radius)',
                  }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-colors min-h-[48px] hover:opacity-90"
                  onMouseOver={(e) => (e.currentTarget.style.background = 'oklch(0.34 0.20 255)')}
                  onMouseOut={(e) => (e.currentTarget.style.background = 'oklch(0.43 0.22 255)')}
                >
                  Browse the Library →
                </Link>
                <Link
                  href="/free-download"
                  style={{
                    border: '1px solid oklch(0.84 0.020 240)',
                    color: 'oklch(0.43 0.22 255)',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    borderRadius: 'var(--radius)',
                    background: 'transparent',
                  }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-colors min-h-[48px]"
                >
                  Free Reference Sheet
                </Link>
              </div>
              <p
                style={{ color: 'oklch(0.55 0.018 240)', fontFamily: 'var(--font-body)' }}
                className="mt-4 text-sm"
              >
                Free app. No subscription. iOS and Android.
              </p>
            </div>

            {/* Right: sample data table preview */}
            <div
              style={{
                background: 'oklch(0.99 0.005 240)',
                border: '1px solid oklch(0.84 0.020 240)',
                borderRadius: '0.375rem',
                overflow: 'hidden',
              }}
            >
              {/* Table header */}
              <div
                style={{
                  background: 'oklch(0.92 0.015 240)',
                  borderBottom: '1px solid oklch(0.84 0.020 240)',
                  padding: '0.75rem 1rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'oklch(0.43 0.22 255)',
                    letterSpacing: '0.1em',
                  }}
                  className="text-xs font-semibold uppercase"
                >
                  Sample entries
                </span>
              </div>

              {/* Species rows */}
              {SAMPLE_SPECIES.map((s, i) => (
                <div
                  key={s.name}
                  style={{
                    padding: '0.75rem 1rem',
                    borderBottom: i < SAMPLE_SPECIES.length - 1 ? '1px solid oklch(0.84 0.020 240)' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'oklch(0.15 0.025 240)',
                        fontWeight: 600,
                      }}
                      className="text-sm"
                    >
                      {s.name}
                    </div>
                    <div style={{ color: 'oklch(0.55 0.018 240)' }} className="text-xs">
                      {s.type}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'oklch(0.43 0.22 255)',
                      letterSpacing: '0.05em',
                    }}
                    className="text-sm font-medium"
                  >
                    {s.limit}
                  </div>
                </div>
              ))}

              {/* Footer link */}
              <div style={{ padding: '0.75rem 1rem', borderTop: '1px solid oklch(0.84 0.020 240)' }}>
                <Link
                  href="/library"
                  style={{ color: 'oklch(0.43 0.22 255)', fontFamily: 'var(--font-body)' }}
                  className="text-xs font-semibold"
                >
                  View all 375 species →
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Stat strip */}
        <section style={{ background: 'oklch(0.43 0.22 255)' }} className="py-12 px-6">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'oklch(0.99 0 0)',
                    lineHeight: 1,
                  }}
                  className="text-5xl font-bold"
                >
                  {s.num}
                </div>
                <div
                  style={{ color: 'oklch(0.85 0.05 240)' }}
                  className="text-sm mt-1 uppercase tracking-wider"
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Feature list — horizontal rule rows, NO card grid */}
        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                color: 'oklch(0.15 0.025 240)',
                maxWidth: '22ch',
                lineHeight: 1.1,
              }}
              className="text-4xl sm:text-5xl font-bold uppercase mb-12"
            >
              WHAT THE DATABASE GIVES YOU
            </h2>
            <div>
              {FEATURES.map((f, i) => (
                <div
                  key={f.label}
                  style={{
                    borderTop: '1px solid oklch(0.84 0.020 240)',
                    borderBottom: i === FEATURES.length - 1 ? '1px solid oklch(0.84 0.020 240)' : 'none',
                  }}
                  className="py-6 grid sm:grid-cols-[220px_1fr] gap-4"
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'oklch(0.43 0.22 255)',
                      letterSpacing: '0.05em',
                    }}
                    className="text-base font-semibold uppercase"
                  >
                    {f.label}
                  </span>
                  <p
                    style={{
                      color: 'oklch(0.35 0.020 240)',
                      fontFamily: 'var(--font-body)',
                    }}
                    className="text-base leading-relaxed"
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: CTA */}
        <section
          style={{
            background: 'oklch(0.92 0.015 240)',
            borderTop: '1px solid oklch(0.84 0.020 240)',
          }}
          className="py-20 px-6"
        >
          <div className="max-w-3xl mx-auto">
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                color: 'oklch(0.15 0.025 240)',
                lineHeight: 1.0,
              }}
              className="text-5xl font-bold uppercase mb-4"
            >
              START WITH THE PDF.
            </h2>
            <p
              style={{
                color: 'oklch(0.35 0.020 240)',
                maxWidth: '44ch',
                fontFamily: 'var(--font-body)',
              }}
              className="text-lg mb-8"
            >
              Get the printable reference sheet today. No app needed. When you want the full searchable database and catch log, download the app free.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/free-download"
                style={{
                  background: 'oklch(0.43 0.22 255)',
                  color: 'oklch(0.99 0 0)',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  borderRadius: 'var(--radius)',
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-colors min-h-[48px] hover:opacity-90"
                onMouseOver={(e) => (e.currentTarget.style.background = 'oklch(0.34 0.20 255)')}
                onMouseOut={(e) => (e.currentTarget.style.background = 'oklch(0.43 0.22 255)')}
              >
                Get the Free PDF
              </Link>
              <Link
                href="/library"
                style={{
                  border: '1px solid oklch(0.84 0.020 240)',
                  color: 'oklch(0.43 0.22 255)',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  borderRadius: 'var(--radius)',
                  background: 'transparent',
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-colors min-h-[48px]"
              >
                Browse the Library
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
