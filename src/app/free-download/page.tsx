import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { EmailCaptureForm } from '@/components/EmailCaptureForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Fishing Trip Log Sheet",
  description: "A printable one-day trip log — species, size, location, bait, weather, and notes for up to 12 catches. Free printable from FishLog — no signup required.",
};

const fg = 'oklch(0.15 0.025 240)';
const muted = 'oklch(0.35 0.020 240)';
const subtle = 'oklch(0.55 0.018 240)';
const accent = 'oklch(0.43 0.22 255)';
const border = 'oklch(0.84 0.020 240)';

const INSIDE = [
  'Space for 12 catch entries per trip',
  'Species, length, weight, and release columns',
  'Bait and rig notes',
  'Weather and water conditions',
  'GPS / location field for each catch',
];

export default function FreeDownloadPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        <section style={{ background: 'oklch(0.95 0.010 240)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
            <div>
              <span
                style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
                className="uppercase text-sm font-semibold mb-6 block"
              >
                Free Printable
              </span>
              <h1
                style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }}
                className="text-5xl sm:text-6xl font-bold uppercase mb-6"
              >
                FREE FISHING TRIP LOG SHEET
              </h1>
              <p
                style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '50ch' }}
                className="text-lg leading-relaxed mb-8"
              >
                A printable one-day trip log. Species, size, location, bait, weather, and notes for up to 12 catches.
              </p>

              <span
                style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}
                className="uppercase text-sm font-semibold mb-2 block"
              >
                What is inside
              </span>
              <div>
                {INSIDE.map((item, i) => (
                  <div
                    key={item}
                    style={{
                      borderTop: `1px solid ${border}`,
                      borderBottom: i === INSIDE.length - 1 ? `1px solid ${border}` : 'none',
                    }}
                    className="py-3 grid grid-cols-[24px_1fr] gap-3"
                  >
                    <span
                      style={{ color: accent, fontFamily: 'var(--font-display)' }}
                      className="text-sm font-bold"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ color: muted, fontFamily: 'var(--font-body)' }} className="text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: 'oklch(0.99 0.005 240)',
                border: `1px solid ${border}`,
                borderRadius: '0.375rem',
              }}
              className="p-8"
            >
              <span
                style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}
                className="uppercase text-xs font-semibold mb-2 block"
              >
                Get Your Copy
              </span>
              <h2
                style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }}
                className="text-2xl font-bold uppercase mb-2"
              >
                SEND IT TO MY INBOX
              </h2>
              <p style={{ color: muted, fontFamily: 'var(--font-body)' }} className="text-sm mb-6">
                Enter your email and we will send the PDF right away.
              </p>
              <EmailCaptureForm buttonLabel="Send Me the Free PDF" />
              <p style={{ color: subtle, fontFamily: 'var(--font-body)' }} className="text-xs mt-4 text-center">
                No spam. Unsubscribe any time.
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <span
              style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
              className="uppercase text-sm font-semibold mb-4 block"
            >
              The Full Database
            </span>
            <h2
              style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }}
              className="text-4xl sm:text-5xl font-bold uppercase mb-4"
            >
              WANT THE SEARCHABLE DATABASE?
            </h2>
            <p
              style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '60ch' }}
              className="text-base mb-8"
            >
              The free PDF covers the basics. The FishLog app gives you the full searchable library and your personal log. Free on iPhone and Android.
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
                Get on App Store
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
                Get on Google Play
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
