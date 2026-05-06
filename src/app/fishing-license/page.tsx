import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { stateLicenses } from '@/data/fishingLicenses';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fishing License by State — Prices, Requirements & Where to Buy',
  description:
    'Current fishing license prices and requirements for all 10 top fishing states. Find your state, get the exact price, and link directly to buy online.',
  alternates: { canonical: 'https://www.baitcastcatch.com/fishing-license' },
};

const fg = 'oklch(0.15 0.025 240)';
const muted = 'oklch(0.35 0.020 240)';
const subtle = 'oklch(0.55 0.018 240)';
const accent = 'oklch(0.43 0.22 255)';
const border = 'oklch(0.84 0.020 240)';

export default function FishingLicenseIndexPage() {
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
              2026 License Guide
            </span>
            <h1
              style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }}
              className="text-5xl sm:text-6xl font-bold uppercase mb-6"
            >
              FISHING LICENSE BY STATE
            </h1>
            <p
              style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '60ch' }}
              className="text-lg leading-relaxed"
            >
              Fishing licenses are administered by state fish and wildlife agencies. Prices, rules, and endorsements vary significantly by state. This guide covers the 10 most popular fishing states.
            </p>
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
              className="text-3xl sm:text-4xl font-bold uppercase mb-10"
            >
              SELECT YOUR STATE
            </h2>

            <div>
              {stateLicenses.map((license, i) => (
                <Link
                  key={license.slug}
                  href={`/fishing-license/${license.slug}`}
                  style={{
                    borderTop: `1px solid ${border}`,
                    borderBottom: i === stateLicenses.length - 1 ? `1px solid ${border}` : 'none',
                  }}
                  className="block py-5 grid grid-cols-[60px_1fr_auto_auto] gap-4 items-center hover:opacity-80 transition-opacity"
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: accent,
                      letterSpacing: '0.05em',
                    }}
                    className="text-base font-bold uppercase"
                  >
                    {license.stateAbbr}
                  </span>
                  <span
                    style={{ fontFamily: 'var(--font-display)', color: fg, letterSpacing: '0.03em' }}
                    className="text-base font-semibold uppercase"
                  >
                    {license.state}
                  </span>
                  <span
                    style={{ color: muted, fontFamily: 'var(--font-body)' }}
                    className="text-sm hidden sm:block"
                  >
                    Resident <strong style={{ color: fg }}>{license.residentAnnual}</strong>
                  </span>
                  <span
                    style={{ color: muted, fontFamily: 'var(--font-body)' }}
                    className="text-sm hidden sm:block"
                  >
                    Non-res <strong style={{ color: fg }}>{license.nonResidentAnnual}</strong>
                  </span>
                </Link>
              ))}
            </div>

            <p style={{ color: subtle, fontFamily: 'var(--font-body)' }} className="mt-10 text-sm">
              Prices current as of April 2026. Always verify with your state agency before purchasing. Fees change annually.
            </p>
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
              LOG YOUR CATCHES WITH FISHLOG
            </h2>
            <p
              style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '50ch' }}
              className="text-base mb-8"
            >
              Track species, weight, length, GPS location, and photos. Free download for iOS and Android.
            </p>
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
