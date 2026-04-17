import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { EmailCaptureForm } from '@/components/EmailCaptureForm';
import { Download, CheckCircle, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Fishing Trip Log Sheet",
  description: "A printable one-day trip log — species, size, location, bait, weather, and notes for up to 12 catches. Free printable from FishLog — no signup required.",
};

export default function FreeDownloadPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">
        <section className="py-20 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex w-16 h-16 bg-blue-50 rounded-2xl items-center justify-center mb-6">
              <Download className="text-blue-700" size={28} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Free Fishing Trip Log Sheet
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              A printable one-day trip log — species, size, location, bait, weather, and notes for up to 12 catches.
            </p>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-left mb-6">
              <h2 className="font-bold text-gray-900 text-lg mb-4">What is inside</h2>
              <ul className="space-y-3">
                            <li key="Space for 12 catch entries per trip" className="flex items-start gap-3 text-gray-600 text-sm"><CheckCircle size={16} className="text-blue-700 mt-0.5 shrink-0" /> Space for 12 catch entries per trip</li>
            <li key="Species, length, weight, and release columns" className="flex items-start gap-3 text-gray-600 text-sm"><CheckCircle size={16} className="text-blue-700 mt-0.5 shrink-0" /> Species, length, weight, and release columns</li>
            <li key="Bait and rig notes" className="flex items-start gap-3 text-gray-600 text-sm"><CheckCircle size={16} className="text-blue-700 mt-0.5 shrink-0" /> Bait and rig notes</li>
            <li key="Weather and water conditions" className="flex items-start gap-3 text-gray-600 text-sm"><CheckCircle size={16} className="text-blue-700 mt-0.5 shrink-0" /> Weather and water conditions</li>
            <li key="GPS / location field for each catch" className="flex items-start gap-3 text-gray-600 text-sm"><CheckCircle size={16} className="text-blue-700 mt-0.5 shrink-0" /> GPS / location field for each catch</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="font-bold text-gray-900 text-xl mb-2">Get your free copy</h2>
              <p className="text-gray-500 text-sm mb-6">Enter your email and we will send it right to your inbox.</p>
              <EmailCaptureForm buttonLabel="Send Me the Free PDF" />
              <p className="text-xs text-gray-400 mt-4 text-center">No spam. Unsubscribe any time.</p>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Want the searchable database?</h2>
            <p className="text-gray-500 mb-6">The free PDF covers the basics. The FishLog app gives you the full searchable library and your personal log — free on iPhone and Android.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                Get on App Store <ArrowRight size={18} />
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                Get on Google Play <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
