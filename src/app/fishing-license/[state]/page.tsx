import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { stateLicenses } from '@/data/fishingLicenses';
import type { Metadata } from 'next';

// ── Static params ──────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return stateLicenses.map((s) => ({ state: s.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { state: string };
}): Promise<Metadata> {
  const license = stateLicenses.find((s) => s.slug === params.state);
  if (!license) return {};

  return {
    title: `${license.state} Fishing License — Prices, Requirements & Where to Buy (2026)`,
    description: `${license.state} fishing license costs ${license.residentAnnual} for residents and ${license.nonResidentAnnual} for non-residents annually. Get exact fees, youth exemptions, endorsements, and a direct link to buy from ${license.agencyName}.`,
    alternates: {
      canonical: `https://www.baitcastcatch.com/fishing-license/${license.slug}`,
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function StateLicensePage({
  params,
}: {
  params: { state: string };
}) {
  const license = stateLicenses.find((s) => s.slug === params.state);
  if (!license) notFound();

  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero + Breadcrumb */}
        <section className="py-14 px-4 bg-blue-50">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-gray-500 flex items-center gap-1.5 flex-wrap">
              <Link href="/" className="hover:text-blue-700 hover:underline">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/fishing-license" className="hover:text-blue-700 hover:underline">Fishing License</Link>
              <span aria-hidden="true">/</span>
              <span className="text-gray-700 font-medium">{license.state}</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {license.state} Fishing License — Prices, Requirements & Where to Buy (2026)
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Issued by the <strong>{license.agencyName}</strong>. All fees listed are for annual licenses unless noted.
            </p>
          </div>
        </section>

        {/* Quick reference card */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 mb-8">
              <h2 className="text-lg font-semibold text-blue-900 mb-4">Quick Reference — {license.state}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-600 mb-1 font-medium">Resident Annual</p>
                  <p className="text-2xl font-bold text-gray-900">{license.residentAnnual}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-600 mb-1 font-medium">Non-Resident Annual</p>
                  <p className="text-2xl font-bold text-gray-900">{license.nonResidentAnnual}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-600 mb-1 font-medium">Youth Exemption</p>
                  <p className="text-base font-medium text-gray-800">Under {license.youthAge} — no license required</p>
                </div>
                {license.seniorDiscount && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-blue-600 mb-1 font-medium">Senior Discount</p>
                    <p className="text-base font-medium text-gray-800">{license.seniorDiscount}</p>
                  </div>
                )}
              </div>
              <div className="mt-6">
                <a
                  href={license.buyOnline}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors min-h-[48px]"
                >
                  Buy your {license.state} license online &rarr;
                </a>
              </div>
            </div>

            {/* License types and prices */}
            <h2 className="text-xl font-bold text-gray-900 mb-4">License Types and Prices</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">License Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Resident</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Non-Resident</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-800">Annual fishing license</td>
                    <td className="px-4 py-3 text-gray-700">{license.residentAnnual}</td>
                    <td className="px-4 py-3 text-gray-700">{license.nonResidentAnnual}</td>
                  </tr>
                  {license.residentShortTerm && (
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-800">Short-term (resident)</td>
                      <td className="px-4 py-3 text-gray-700">{license.residentShortTerm}</td>
                      <td className="px-4 py-3 text-gray-400">—</td>
                    </tr>
                  )}
                  {license.nonResidentShortTerm && (
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-800">Short-term (non-resident)</td>
                      <td className="px-4 py-3 text-gray-400">—</td>
                      <td className="px-4 py-3 text-gray-700">{license.nonResidentShortTerm}</td>
                    </tr>
                  )}
                  {license.saltwater && license.saltwater !== 'Not applicable' && (
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-800">Saltwater access</td>
                      <td className="px-4 py-3 text-gray-700" colSpan={2}>{license.saltwater}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Youth and senior */}
            <h2 className="text-xl font-bold text-gray-900 mb-3">Youth and Senior Exemptions</h2>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5 mb-8 space-y-2 text-gray-700 leading-relaxed">
              <p>
                <strong>Youth:</strong> Anglers under {license.youthAge} years old do not need a fishing license in {license.state}.
              </p>
              {license.seniorDiscount ? (
                <p>
                  <strong>Senior:</strong> {license.seniorDiscount}.
                </p>
              ) : (
                <p>
                  <strong>Senior:</strong> No special senior discount available — standard license fees apply.
                </p>
              )}
            </div>

            {/* Endorsements */}
            {license.endorsements.length > 0 && (
              <>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Required Endorsements and Stamps</h2>
                <div className="rounded-xl bg-gray-50 border border-gray-200 p-5 mb-8">
                  <ul className="space-y-2">
                    {license.endorsements.map((item) => (
                      <li key={item} className="flex gap-2 text-gray-700 text-sm leading-relaxed">
                        <span className="mt-0.5 text-blue-500 flex-shrink-0" aria-hidden="true">&#8226;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Where to buy */}
            <h2 className="text-xl font-bold text-gray-900 mb-3">Where to Buy</h2>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5 mb-8 text-gray-700 leading-relaxed space-y-3">
              <p>
                Buy your {license.state} fishing license online directly from the{' '}
                <a
                  href={license.buyOnline}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  {license.agencyName} online portal
                </a>
                . Licenses are also sold at most sporting goods stores, bait shops, and Walmart locations throughout {license.state}.
              </p>
              <p>
                Most licenses are available as a printable PDF or digital card on your phone — check the agency site for their current accepted formats.
              </p>
            </div>

            {/* Seasons */}
            <h2 className="text-xl font-bold text-gray-900 mb-3">Season Dates and Regulations</h2>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5 mb-8 text-gray-700 leading-relaxed">
              <p>
                Check the{' '}
                <a
                  href={license.agencyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  {license.agencyName}
                </a>{' '}
                for current season dates before heading out. Regulations — including bag limits, size limits, and open seasons — change annually and vary by water body.
              </p>
            </div>

            {/* Notes */}
            {license.notes && (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 mb-8">
                <p className="text-sm font-semibold text-amber-800 mb-1">Good to know</p>
                <p className="text-sm text-amber-900 leading-relaxed">{license.notes}</p>
              </div>
            )}

            {/* App CTA */}
            <div className="rounded-xl bg-blue-700 text-white p-6 text-center">
              <h2 className="text-lg font-bold mb-2">Track your {license.state} catches with FishLog</h2>
              <p className="text-blue-100 text-sm mb-4">
                Log species, weight, length, GPS location, and photos. Free app for iOS and Android.
              </p>
              <Link
                href="/free-download"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors min-h-[48px]"
              >
                Free Download
              </Link>
            </div>

            {/* Disclaimer */}
            <p className="mt-8 text-xs text-gray-400 text-center">
              Prices and rules as of April 2026. Verify current fees at{' '}
              <a
                href={license.agencyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-600"
              >
                {license.agencyUrl}
              </a>{' '}
              before purchasing.
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
