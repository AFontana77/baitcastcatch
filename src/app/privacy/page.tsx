import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — BaitCastCatch',
  description: 'Privacy policy for the BaitCastCatch mobile application and baitcastcatch.com website.',
};

const fg = 'oklch(0.15 0.025 240)';
const muted = 'oklch(0.35 0.020 240)';
const accent = 'oklch(0.43 0.22 255)';

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">
        <section style={{ background: 'oklch(0.95 0.010 240)' }} className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xs font-semibold uppercase mb-6"
              style={{ color: accent, letterSpacing: '0.18em', fontFamily: 'var(--font-display)' }}
            >
              Legal
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold mb-3"
              style={{ color: fg, fontFamily: 'var(--font-display)', lineHeight: 1.1 }}
            >
              Privacy Policy
            </h1>
            <p className="text-sm mb-12" style={{ color: muted }}>Last updated: April 17, 2026</p>

            <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: fg, fontFamily: 'var(--font-display)' }}>1. Who We Are</h2>
            <p className="leading-relaxed mb-4" style={{ color: muted }}>
              Anvil Road LLC operates baitcastcatch.com and the BaitCastCatch mobile application.
              Contact: <a href="mailto:support@baitcastcatch.com" style={{ color: accent }} className="hover:underline">support@baitcastcatch.com</a>
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: fg, fontFamily: 'var(--font-display)' }}>2. Information We Collect</h2>
            <p className="mb-3" style={{ color: muted }}>We collect the minimum data needed to operate the app:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: muted }}>
              <li><strong style={{ color: fg }}>Catch logs you create.</strong> Stored locally on your device only. This data is never uploaded to any server.</li>
              <li><strong style={{ color: fg }}>Purchase data.</strong> When you unlock the full app, RevenueCat receives a transaction ID and device identifier to verify and restore your purchase. We do not receive your payment details.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: fg, fontFamily: 'var(--font-display)' }}>3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-4 space-y-1" style={{ color: muted }}>
              <li>To operate the app and display your logged catches</li>
              <li>To restore your purchase on new devices</li>
              <li>To respond to support requests</li>
            </ul>
            <p className="mb-4" style={{ color: muted }}>We do not use your data for advertising. We do not sell your data to any third party.</p>

            <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: fg, fontFamily: 'var(--font-display)' }}>4. Third-Party Services</h2>
            <ul className="list-disc pl-6 mb-4 space-y-1" style={{ color: muted }}>
              <li><strong style={{ color: fg }}>RevenueCat.</strong> In-app purchase management. They receive device identifiers and transaction data to process and restore purchases.</li>
              <li><strong style={{ color: fg }}>Apple App Store / Google Play.</strong> App distribution and payment processing.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: fg, fontFamily: 'var(--font-display)' }}>5. Data Deletion</h2>
            <p className="leading-relaxed mb-4" style={{ color: muted }}>
              Your data is stored only on your device. It is permanently deleted when you uninstall the app.
              We do not store any of your logged data on our servers.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: fg, fontFamily: 'var(--font-display)' }}>6. Children</h2>
            <p className="leading-relaxed mb-4" style={{ color: muted }}>
              This app is not directed at children under 13. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: fg, fontFamily: 'var(--font-display)' }}>7. Changes to This Policy</h2>
            <p className="leading-relaxed mb-4" style={{ color: muted }}>
              We may update this policy. We will post the revised policy at this URL with a new last updated date.
              Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: fg, fontFamily: 'var(--font-display)' }}>8. Email you give us on this website</h2>

            <p
              className="text-xs font-semibold uppercase mb-6"
              style={{ color: accent, letterSpacing: '0.18em', fontFamily: 'var(--font-display)' }}
            >If you enter your email address in a signup form on this website, we store it so we can send you the updates you asked for. We also record which page you signed up from and when you gave consent. We use Resend to send and manage that mail. We do not sell your address, and every email has an unsubscribe link. This is separate from anything described above: your email address is not linked to any other data on this site or in any of our apps.</p>

            <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: fg, fontFamily: 'var(--font-display)' }}>9. Contact</h2>
            <p className="leading-relaxed" style={{ color: muted }}>
              Questions about this policy? Email{' '}
              <a href="mailto:support@baitcastcatch.com" style={{ color: accent }} className="hover:underline">support@baitcastcatch.com</a>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
