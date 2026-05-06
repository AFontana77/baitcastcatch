import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — FishLog',
  description: 'Privacy policy for the FishLog mobile application and baitcastcatch.com website.',
};

const fg = 'oklch(0.15 0.025 240)';
const muted = 'oklch(0.35 0.020 240)';
const subtle = 'oklch(0.55 0.018 240)';
const accent = 'oklch(0.43 0.22 255)';

export default function PrivacyPage() {
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
              Legal
            </span>
            <h1
              style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }}
              className="text-5xl sm:text-6xl font-bold uppercase mb-3"
            >
              PRIVACY POLICY
            </h1>
            <p style={{ color: subtle, fontFamily: 'var(--font-body)' }} className="text-sm">
              Last updated: April 17, 2026
            </p>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-xl font-bold uppercase mt-2 mb-3">1. Who We Are</h2>
            <p style={{ color: muted }} className="leading-relaxed mb-4">
              Anvil Road LLC operates baitcastcatch.com and the FishLog mobile application.
              Contact: <a href="mailto:support@baitcastcatch.com" style={{ color: accent }} className="hover:underline">support@baitcastcatch.com</a>
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-xl font-bold uppercase mt-8 mb-3">2. Information We Collect</h2>
            <ul style={{ color: muted }} className="list-disc pl-6 mb-4 space-y-1">
              <li><strong style={{ color: fg }}>Account email address</strong> — optional, for cross-device sync only.</li>
              <li><strong style={{ color: fg }}>Catch logs you create</strong> — stored locally on your device and, if you have an account, in our secure cloud database (Supabase).</li>
              <li><strong style={{ color: fg }}>Purchase confirmation</strong> — via RevenueCat when you unlock premium features. We do not receive your payment details.</li>
              <li><strong style={{ color: fg }}>Device identifiers</strong> — used by RevenueCat to associate your purchase with your device.</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-xl font-bold uppercase mt-8 mb-3">3. How We Use Your Information</h2>
            <ul style={{ color: muted }} className="list-disc pl-6 mb-4 space-y-1">
              <li>To operate the app and sync your data across devices (if you have an account)</li>
              <li>To restore your purchase on new devices</li>
              <li>To respond to support requests</li>
            </ul>
            <p style={{ color: muted }} className="mb-4">We do not use your data for advertising. We do not sell your data to any third party.</p>

            <h2 style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-xl font-bold uppercase mt-8 mb-3">4. Third-Party Services</h2>
            <ul style={{ color: muted }} className="list-disc pl-6 mb-4 space-y-1">
              <li><strong style={{ color: fg }}>Supabase</strong> — secure cloud database for optional account sync. Hosted on AWS US-East.</li>
              <li><strong style={{ color: fg }}>RevenueCat</strong> — in-app purchase management and subscription tracking.</li>
              <li><strong style={{ color: fg }}>Apple App Store / Google Play</strong> — app distribution and payment processing.</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-xl font-bold uppercase mt-8 mb-3">5. Data Deletion</h2>
            <p style={{ color: muted }} className="leading-relaxed mb-4">
              You may delete your account and all associated cloud data at any time from the app settings.
              We will delete your data within 30 days of the request. Local device data is deleted when you uninstall the app.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-xl font-bold uppercase mt-8 mb-3">6. Children</h2>
            <p style={{ color: muted }} className="leading-relaxed mb-4">
              This app is not directed at children under 13. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-xl font-bold uppercase mt-8 mb-3">7. Changes to This Policy</h2>
            <p style={{ color: muted }} className="leading-relaxed mb-4">
              We may update this policy. We will post the revised policy at this URL with a new last updated date.
              Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-xl font-bold uppercase mt-8 mb-3">8. Contact</h2>
            <p style={{ color: muted }} className="leading-relaxed">
              Questions about this policy? Email <a href="mailto:support@baitcastcatch.com" style={{ color: accent }} className="hover:underline">support@baitcastcatch.com</a>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
