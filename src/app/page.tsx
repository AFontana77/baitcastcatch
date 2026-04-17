import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Database, BookOpen, BarChart3, Star, ArrowRight, Download, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FishLog — Search 375 fish species with size limits and regulations",
  description: "FishLog has 375 fish species from FishBase and NOAA with size limits, habitat, and state regulation links. Log your catches, track your best fish, and build a record book worth keeping.",
};

const FEATURES = [
  { icon: Database, title: "Species database", body: "375 fish species with habitat, size limits, and regulation links." },
  { icon: BookOpen, title: "Catch log", body: "Log species, weight, length, location, and time. Add a photo. Rate the fight." },
  { icon: BarChart3, title: "Personal records", body: "Your biggest fish by species — updated every time you log a new catch." },
  { icon: Star, title: "GPS location", body: "Pin exact spots. See your catch history on a map." },
];

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-20 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-6">
              Search 375 fish species. Log your own.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Search 375 fish species with size limits and regulations.
              <br />
              <span className="text-blue-800">Log your catches.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              FishLog combines FishBase and NOAA species data with a personal catch log. Search any fish by name, find its habitat and typical size range, check size limits, and log your own catches with notes and location. Every fish deserves a record.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/library" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-800 transition-colors press-feedback min-h-[48px]">
                Browse the FishLog Library <ArrowRight size={18} />
              </Link>
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors min-h-[48px]">
                <Download size={18} /> Free Download
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Free app. No credit card. 375 fish species from FishBase + NOAA.
            </p>
          </div>
        </section>

        {/* Database pitch */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              The database IS the app.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Most log apps give you a blank screen. FishLog gives you 375 fish species from FishBase + NOAA — searchable, organized, and ready to use. Log what you do. Build your personal collection alongside the reference library.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl bg-gray-50 card-hover">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Get the free download first.
            </h2>
            <p className="text-gray-600 mb-6">
              Start with the printable reference sheet. Use it today, no app required. When you want the searchable database and log, get the app free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-800 transition-colors press-feedback min-h-[48px]">
                <Download size={18} /> Get the Free PDF
              </Link>
              <Link href="/library" className="inline-flex items-center justify-center gap-2 border border-blue-200 text-blue-800 font-medium px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors min-h-[48px]">
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
