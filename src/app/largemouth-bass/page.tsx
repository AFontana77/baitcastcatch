import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Largemouth Bass — Species Guide, World Record & Fishing Tips | BaitCastCatch',
  description:
    'Everything about largemouth bass: world record (22 lbs 4 oz), habitat, seasonal feeding patterns, best baits and lures by season, and how to tell largemouth from smallmouth.',
};

const fg = 'oklch(0.15 0.025 240)';
const muted = 'oklch(0.35 0.020 240)';
const subtle = 'oklch(0.55 0.018 240)';
const accent = 'oklch(0.43 0.22 255)';
const border = 'oklch(0.84 0.020 240)';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Largemouth Bass — Species Guide, World Record & Fishing Tips',
      description:
        'Everything about largemouth bass: world record (22 lbs 4 oz), habitat, seasonal feeding patterns, best baits and lures by season, and how to tell largemouth from smallmouth.',
      url: 'https://www.baitcastcatch.com/largemouth-bass',
      publisher: { '@type': 'Organization', name: 'BaitCastCatch', url: 'https://www.baitcastcatch.com' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.baitcastcatch.com' },
        { '@type': 'ListItem', position: 2, name: 'Largemouth Bass', item: 'https://www.baitcastcatch.com/largemouth-bass' },
      ],
    },
  ],
};

const ID_DIFFS = [
  { title: 'Jaw line', body: 'Largemouth jaw goes past the eye. Smallmouth jaw stops below the eye.' },
  { title: 'Body markings', body: 'Largemouth has a horizontal stripe. Smallmouth has vertical dark bars on the sides.' },
  { title: 'Habitat', body: 'Largemouth prefers warm, weedy, shallow water. Smallmouth prefers cool, rocky, clear water.' },
  { title: 'Fight style', body: 'Largemouth jumps and thrashes. Smallmouth runs deep and pulls harder for its size.' },
  { title: 'Geographic range', body: 'Largemouth thrives in hot southern climates. Smallmouth dominates in northern lakes and Ozark rivers.' },
];

const SEASONS = [
  {
    title: 'Spring (March to May)',
    body: 'When water hits 58-65 degrees F, bass spawn. Females move to shallow water, 2-6 feet deep, and build nests on hard bottom. Males guard the nest after the female lays eggs. Spring is the best fishing of the year for most anglers. Bass are shallow, visible, and aggressive. A male on a nest will strike almost anything that comes near it. Target spawning flats with creature baits and topwater lures.',
  },
  {
    title: 'Summer (June to August)',
    body: 'Midday heat pushes bass to deeper, cooler water. Fishing slows from about 10am to 5pm. But early morning and dusk are excellent. At first light, bass push into shallow water to feed before the sun gets high. At dusk, they do it again. Fish the shallows hard during those windows. Midday, go deep or slow down your presentation.',
  },
  {
    title: 'Fall (September to November)',
    body: 'Cooling water triggers a feeding frenzy. Bass know winter is coming and eat aggressively to build fat. October is often as productive as spring for trophy fish. Shad and baitfish school up in fall. Bass follow. Look for birds diving on the water, which signals baitfish near the surface and bass below them.',
  },
  {
    title: 'Winter (December to February)',
    body: 'Cold water slows bass metabolism. They move deep, 10-20 feet, and barely feed. Slow presentations are the only ones that work. A blade bait or jig fished very slowly along the bottom can produce a bite, but it takes patience.',
  },
];

const BAITS = [
  { season: 'Spring', items: ['Senko worm (Texas rigged)', 'Crawfish imitation', 'Topwater popper', 'Hollow-body frog over lily pads'] },
  { season: 'Summer', items: ['Deep-diving crankbait', 'Drop shot rig', 'Finesse jig', 'Swimbait on deep structure'] },
  { season: 'Fall', items: ['Spinnerbait', 'Swimbait matching shad color', 'Medium-running crankbait', 'Chatterbait'] },
  { season: 'Winter', items: ['Blade bait (lift and drop)', 'Slow-rolled jig', 'Ned rig with tiny bait', 'Drop shot, barely moving'] },
];

const RELATED = [
  { href: '/smallmouth-bass', label: 'Smallmouth Bass Guide' },
  { href: '/striped-bass', label: 'Striped Bass Guide' },
  { href: '/crappie-fishing', label: 'Crappie Fishing Guide' },
  { href: '/trout-fishing', label: 'Trout Fishing Guide' },
];

export default function LargemouthBassPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section style={{ background: 'oklch(0.95 0.010 240)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-6 block">
              Species Guide
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }} className="text-5xl sm:text-6xl font-bold uppercase mb-6">
              LARGEMOUTH BASS
            </h1>
            <p style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '60ch' }} className="text-lg leading-relaxed">
              Largemouth bass are in almost every lake and pond in the country. This guide covers where they hold, when they feed, and what to throw in each season. So you spend less time guessing and more time fighting fish.
            </p>
          </div>
        </section>

        {/* Species Profile */}
        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">
              Profile
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">
              KNOW YOUR TARGET BEFORE YOU CAST
            </h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed mb-8">
              <p>The largemouth bass (<em>Micropterus salmoides</em>) is native to eastern North America. It has been stocked in nearly every US state, plus dozens of countries around the world. Few fish have spread as far or as fast.</p>
              <p>The body is olive-green to dark green on the back, fading to white or yellow on the belly. A bold horizontal stripe runs along each side from head to tail. That stripe is the easiest way to spot a largemouth at a glance.</p>
              <p>The jaw is the defining feature. On a largemouth, the upper jaw extends past the eye when the mouth is closed. On a smallmouth, it stops below the eye. This one check settles most ID debates at the water.</p>
            </div>

            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }} className="uppercase text-xs font-semibold mb-2 block">
              Largemouth vs. Smallmouth
            </span>
            <div>
              {ID_DIFFS.map((item, i) => (
                <div
                  key={item.title}
                  style={{
                    borderTop: `1px solid ${border}`,
                    borderBottom: i === ID_DIFFS.length - 1 ? `1px solid ${border}` : 'none',
                  }}
                  className="py-5 grid sm:grid-cols-[200px_1fr] gap-4"
                >
                  <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">
                    {item.title}
                  </span>
                  <p style={{ color: muted, fontFamily: 'var(--font-body)' }} className="leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* World Record */}
        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">
              The Benchmark
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">
              22 LBS 4 OZ SINCE 1932
            </h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>George Perry caught a largemouth bass weighing 22 lbs 4 oz on June 2, 1932, at Montgomery Lake in Georgia. The record stood alone for 77 years.</p>
              <p>In 2009, Japanese angler Manabu Kurita caught a bass of the same weight, 22 lbs 4 oz, at Lake Biwa in Japan. IGFA ruled it a co-world record. The Perry record was not broken, only tied.</p>
              <p>Most largemouth in the US run 1-5 lbs. A 10-lb bass is a trophy almost anywhere. A fish over 15 lbs is a rare lifetime catch for most anglers.</p>
            </div>
          </div>
        </section>

        {/* Habitat */}
        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">
              Habitat
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">
              WHERE BASS HOLD AND WHY COVER ALWAYS WINS
            </h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>Largemouth bass love warm, shallow water. Their sweet spot is 65-75 degrees F. They tolerate water much warmer than trout or smallmouth can handle, which is why they thrive in southern ponds and reservoirs.</p>
              <p>Bass are ambush predators. They hold tight to cover and wait for prey to come close. The best spots are:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Submerged logs and fallen trees</li>
                <li>Weed edges and lily pad fields</li>
                <li>Dock pilings, especially shaded ones</li>
                <li>Rocky points where shallow meets deep</li>
                <li>Laydowns along the shoreline</li>
              </ul>
              <p>Look for structure. Bass rarely sit in open water with nothing around them. If you can see cover from the bank, there is probably a bass nearby.</p>
            </div>
          </div>
        </section>

        {/* Seasonal */}
        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">
              Seasonal Patterns
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-10">
              FISH THE RIGHT SPOT BY SEASON
            </h2>
            <div>
              {SEASONS.map((s, i) => (
                <div
                  key={s.title}
                  style={{
                    borderTop: `1px solid ${border}`,
                    borderBottom: i === SEASONS.length - 1 ? `1px solid ${border}` : 'none',
                  }}
                  className="py-6 grid sm:grid-cols-[220px_1fr] gap-4"
                >
                  <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">
                    {s.title}
                  </span>
                  <p style={{ color: muted, fontFamily: 'var(--font-body)' }} className="leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Baits */}
        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">
              Bait Selection
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-10">
              MATCH THE BAIT TO THE SEASON
            </h2>
            <div>
              {BAITS.map((b, i) => (
                <div
                  key={b.season}
                  style={{
                    borderTop: `1px solid ${border}`,
                    borderBottom: i === BAITS.length - 1 ? `1px solid ${border}` : 'none',
                  }}
                  className="py-6 grid sm:grid-cols-[200px_1fr] gap-4"
                >
                  <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">
                    {b.season}
                  </span>
                  <ul style={{ color: muted, fontFamily: 'var(--font-body)' }} className="space-y-1 list-disc list-inside">
                    {b.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulations */}
        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">
              Regulations
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">
              FISH LEGAL: CHECK BEFORE YOU LAUNCH
            </h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>Most states set a minimum size of 12-15 inches for largemouth bass. Daily bag limits typically run 5-10 fish. Some trophy fisheries protect big fish with slot limits, where you can only keep fish below a certain size, not above it.</p>
              <p>Rules change by water body and state. Always check your state wildlife agency before you fish a new lake or reservoir.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }} className="text-4xl sm:text-5xl font-bold uppercase mb-4">
              THE ANGLERS WHO CATCH THE MOST FISH HAVE ONE THING IN COMMON
            </h2>
            <p style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '60ch' }} className="text-base mb-8">
              They know what worked last time. Log the date, water temp, lure, and strike location in BaitCastCatch. After one season of data, you know exactly which spots and presentations produce on your water. Free download, no subscription.
            </p>
            <Link
              href="/free-download"
              style={{
                background: accent,
                color: 'oklch(0.99 0 0)',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                borderRadius: 'var(--radius)',
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-colors min-h-[48px] hover:opacity-90"
            >
              Free Download
            </Link>
          </div>
        </section>

        {/* Related */}
        <section style={{ background: 'oklch(0.92 0.015 240)', borderTop: `1px solid ${border}` }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">
              More Guides
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-2xl sm:text-3xl font-bold uppercase mb-8">
              MORE FISHING GUIDES
            </h2>
            <div>
              {RELATED.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    borderTop: `1px solid ${border}`,
                    borderBottom: i === RELATED.length - 1 ? `1px solid ${border}` : 'none',
                  }}
                  className="block py-5 grid grid-cols-[1fr_auto] gap-4 items-center hover:opacity-80 transition-opacity"
                >
                  <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">
                    {link.label}
                  </span>
                  <span style={{ color: subtle, fontFamily: 'var(--font-body)' }} className="text-sm">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
