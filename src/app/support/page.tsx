import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support — FishLog',
  description: 'Get help with the FishLog app. Contact support or browse common questions.',
};

const fg = 'oklch(0.15 0.025 240)';
const muted = 'oklch(0.35 0.020 240)';
const subtle = 'oklch(0.55 0.018 240)';
const accent = 'oklch(0.43 0.22 255)';
const border = 'oklch(0.84 0.020 240)';

const FAQS = [
  {
    q: 'How do I get the app?',
    a: 'Search "FishLog" in the App Store or Google Play. The app is free to download. The $6.99 one-time unlock removes entry limits and adds premium features.',
  },
  {
    q: 'What does the $6.99 unlock include?',
    a: 'Unlimited catch logs, GPS tagging, species photo upload, and full PDF export. One-time payment, no subscription, no expiration.',
  },
  {
    q: 'How do I restore my purchase?',
    a: 'Open the app, go to Settings, and tap "Restore Purchases." Make sure you are signed in to the same Apple ID or Google account you used to purchase.',
  },
  {
    q: 'Does the app require an account?',
    a: 'No account is required for offline use. An optional free account lets you sync your catch logs across devices.',
  },
  {
    q: 'Is there a subscription?',
    a: 'No. FishLog is free to download with entry limits, and $6.99 one-time to unlock everything. No monthly fees, ever.',
  },
  {
    q: 'How do I delete my account and data?',
    a: 'Go to Settings in the app and tap "Delete Account." This removes all cloud data within 30 days. Local data is removed when you uninstall the app.',
  },
];

export default function SupportPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">
        <section style={{ background: 'oklch(0.95 0.010 240)' }} className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <span
              style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
              className="uppercase text-sm font-semibold mb-4 block"
            >
              Help Center
            </span>
            <h1
              style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }}
              className="text-5xl sm:text-6xl font-bold uppercase mb-3"
            >
              APP SUPPORT
            </h1>
            <p style={{ color: muted, fontFamily: 'var(--font-body)' }} className="text-lg">
              Get help with FishLog or give us feedback.
            </p>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-3xl mx-auto">

            <div
              style={{ background: 'oklch(0.95 0.010 240)', border: `1px solid ${border}` }}
              className="rounded-md p-6 mb-12 flex gap-4 items-start"
            >
              <div
                style={{ background: 'oklch(0.99 0.005 240)', border: `1px solid ${border}` }}
                className="w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 mt-1"
              >
                <Mail style={{ color: accent }} size={20} />
              </div>
              <div>
                <h2
                  style={{ fontFamily: 'var(--font-display)', color: fg, letterSpacing: '0.05em' }}
                  className="text-base font-semibold uppercase mb-1"
                >
                  Email Support
                </h2>
                <p style={{ color: muted, fontFamily: 'var(--font-body)' }} className="text-sm mb-2">
                  We respond within 1-2 business days.
                </p>
                <a
                  href="mailto:support@baitcastcatch.com"
                  style={{ color: accent, fontFamily: 'var(--font-body)' }}
                  className="font-semibold hover:underline"
                >
                  support@baitcastcatch.com
                </a>
              </div>
            </div>

            <span
              style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
              className="uppercase text-sm font-semibold mb-4 block"
            >
              FAQ
            </span>
            <h2
              style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }}
              className="text-3xl sm:text-4xl font-bold uppercase mb-8"
            >
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div>
              {FAQS.map((item, i) => (
                <details
                  key={item.q}
                  style={{
                    borderTop: `1px solid ${border}`,
                    borderBottom: i === FAQS.length - 1 ? `1px solid ${border}` : 'none',
                  }}
                  className="py-2"
                >
                  <summary
                    style={{ fontFamily: 'var(--font-display)', color: fg, letterSpacing: '0.03em' }}
                    className="px-2 py-4 font-semibold uppercase cursor-pointer list-none flex justify-between items-center text-base"
                  >
                    {item.q}
                    <span style={{ color: accent }} className="text-xl">+</span>
                  </summary>
                  <div
                    style={{ color: muted, fontFamily: 'var(--font-body)' }}
                    className="px-2 pb-5 leading-relaxed"
                  >
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            <p style={{ color: subtle, fontFamily: 'var(--font-body)' }} className="mt-10 text-sm text-center">
              See our <a href="/privacy" style={{ color: accent }} className="hover:underline">Privacy Policy</a> for information on how we handle your data.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
