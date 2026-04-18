import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ArrowRight } from 'lucide-react';
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
        <section className="py-20 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About FishLog</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              FishLog was built for anglers who want more than a fishing app — they want a record book. FishBase and NOAA species data is scattered across research sites designed for scientists. FishLog brings that data to anglers in a searchable format with size limits and regulation links. Log a catch, search the species profile, and build a permanent record of every fish worth remembering. The app for iPhone and Android adds GPS pinning, photo logs, and personal records by species. Whether you fish three times a year or three times a week, FishLog keeps the record.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              FishLog is published by Anvil Road LLC, a small product studio building practical apps and reference tools for hobbyists, professionals, and makers. Every product in the portfolio follows the same principle: a curated, searchable database paired with a personal log. Search what the experts know. Record what you discover.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/library" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-800 transition-colors press-feedback min-h-[48px]">
                Browse the Library <ArrowRight size={18} />
              </Link>
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors min-h-[48px]">
                Free Download
              </Link>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Built by Anvil Road LLC</h2>
            <p className="text-gray-600 leading-relaxed">
              Anvil Road is an independent publisher and app studio based in New Jersey. We build reference databases, log apps, KDP books, and companion print products across a range of hobby and professional categories. FishLog is one of 20+ apps in the Anvil Road portfolio. All apps are free to start, with one-time unlocks for unlimited features. No subscriptions.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
