import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About FishLog",
  description: "The story behind FishLog. Search 375+ fish species with size limits and regulations. Log your catches. Build your fishing log.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">
        <section style={{ background: 'oklch(0.95 0.010 240)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <span
              style={{ color: 'oklch(0.43 0.22 255)', fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
              className="uppercase text-sm font-semibold mb-6 block"
            >
              About FishLog
            </span>
            <h1
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.15 0.025 240)', lineHeight: 1.0 }}
              className="text-5xl sm:text-6xl font-bold uppercase leading-tight mb-8"
            >
              A FIELD GUIDE FOR ANGLERS WHO WANT A REAL RECORD.
            </h1>
            <p
              style={{ color: 'oklch(0.35 0.020 240)', fontFamily: 'var(--font-body)', maxWidth: '60ch' }}
              className="text-lg leading-relaxed mb-6"
            >
              FishLog was built for anglers who want more than a fishing app. They want a record book. FishBase and NOAA species data is scattered across research sites designed for scientists. FishLog brings that data to anglers in a searchable format with size limits and regulation links. Log a catch, search the species profile, and build a permanent record of every fish worth remembering. The app for iPhone and Android adds GPS pinning, photo logs, and personal records by species. Whether you fish three times a year or three times a week, FishLog keeps the record.
            </p>
            <p
              style={{ color: 'oklch(0.35 0.020 240)', fontFamily: 'var(--font-body)', maxWidth: '60ch' }}
              className="text-base leading-relaxed mb-10"
            >
              FishLog is published by Anvil Road LLC, a small product studio building practical apps and reference tools for hobbyists, professionals, and makers. Every product in the portfolio follows the same principle: a curated, searchable database paired with a personal log. Search what the experts know. Record what you discover.
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
              >
                Browse the Library
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
                Free Download
              </Link>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <span
              style={{ color: 'oklch(0.43 0.22 255)', fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
              className="uppercase text-sm font-semibold mb-6 block"
            >
              Publisher
            </span>
            <h2
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.15 0.025 240)', lineHeight: 1.05 }}
              className="text-4xl sm:text-5xl font-bold uppercase mb-6"
            >
              BUILT BY ANVIL ROAD LLC
            </h2>
            <p
              style={{ color: 'oklch(0.35 0.020 240)', fontFamily: 'var(--font-body)', maxWidth: '60ch' }}
              className="text-base leading-relaxed"
            >
              Anvil Road is an independent publisher and app studio based in New Jersey. We build reference databases, log apps, KDP books, and companion print products across a range of hobby and professional categories. FishLog is one of 20+ apps in the Anvil Road portfolio. All apps are free to start, with one-time unlocks for unlimited features. No subscriptions.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
