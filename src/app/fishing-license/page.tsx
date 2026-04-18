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

export default function FishingLicenseIndexPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-700 bg-white px-3 py-1 rounded-full mb-5">
              2026 License Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Fishing License by State — Prices, Requirements & Where to Buy
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Fishing licenses are administered by state fish and wildlife agencies. Prices, rules, and endorsements vary significantly by state — this guide covers the 10 most popular fishing states.
            </p>
          </div>
        </section>

        {/* State cards grid */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              {stateLicenses.map((license) => (
                <Link
                  key={license.slug}
                  href={`/fishing-license/${license.slug}`}
                  className="group block rounded-xl border border-gray-200 bg-white p-5 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center justify-center h-8 w-10 rounded-md bg-blue-50 text-blue-700 text-xs font-bold tracking-wide">
                      {license.stateAbbr}
                    </span>
                    <h2 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors text-sm sm:text-base leading-snug">
                      {license.state}
                    </h2>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Resident</span>
                      <span className="font-medium text-gray-900">{license.residentAnnual}/yr</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Non-resident</span>
                      <span className="font-medium text-gray-900">{license.nonResidentAnnual}/yr</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-blue-700 font-medium group-hover:underline">
                    View details &rarr;
                  </p>
                </Link>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="mt-10 text-sm text-gray-400 text-center">
              Prices current as of April 2026. Always verify with your state agency before purchasing — fees change annually.
            </p>
          </div>
        </section>

        {/* App CTA */}
        <section className="py-14 px-4 bg-blue-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Log your catches with FishLog
            </h2>
            <p className="text-gray-600 mb-6">
              Track species, weight, length, GPS location, and photos. Free download for iOS and Android.
            </p>
            <Link
              href="/free-download"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-800 transition-colors min-h-[48px]"
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
