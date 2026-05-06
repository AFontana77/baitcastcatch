import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crappie Fishing — Spring Spawning, Best Baits & Techniques | BaitCastCatch',
  description:
    'The crappie fishing guide: black vs. white crappie, spring spawn timing (water hits 55-65°F), dock fishing technique, tube jigs vs. live minnows, and size limit overview.',
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
      headline: 'Crappie Fishing — Spring Spawning, Best Baits & Techniques',
      description: 'The crappie fishing guide: black vs. white crappie, spring spawn timing, dock fishing technique, tube jigs vs. live minnows, and size limit overview.',
      url: 'https://www.baitcastcatch.com/crappie-fishing',
      publisher: { '@type': 'Organization', name: 'BaitCastCatch', url: 'https://www.baitcastcatch.com' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.baitcastcatch.com' },
        { '@type': 'ListItem', position: 2, name: 'Crappie Fishing', item: 'https://www.baitcastcatch.com/crappie-fishing' },
      ],
    },
  ],
};

const BLACK = ['Dark spots scattered randomly, no pattern', 'Prefers clearer water with vegetation', 'Found in lakes, ponds, backwaters', 'Slightly deeper bodied than white crappie', '7-8 dorsal spines (vs. 5-6 on white)'];
const WHITE = ['Dark spots in 7-8 vertical bars along sides', 'Tolerates murkier, warmer water', 'Common in rivers and turbid reservoirs', 'More elongated body shape', '5-6 dorsal spines'];
const TUBE = ['1/32 to 1/8 oz, 1.5-2 inch tube', 'Best colors: chartreuse, white, pink, pink and white', 'Cheaper and easier to use than live bait', 'Good in warm water when fish are active', 'Drop straight down or cast and retrieve slowly', 'Ideal for dock fishing and vertical jigging'];
const MINNOW = ['1-2 inch shiners or fathead minnows', 'Often more effective in cold water', 'Use a small slip float to suspend minnow at depth', 'Hook through the back or lips for longer minnow life', 'More effective when crappie are lethargic', 'Great option for beginners fishing from shore'];

const RELATED = [
  { href: '/largemouth-bass', label: 'Largemouth Bass Guide' },
  { href: '/smallmouth-bass', label: 'Smallmouth Bass Guide' },
  { href: '/trout-fishing', label: 'Trout Fishing Guide' },
  { href: '/walleye-fishing', label: 'Walleye Fishing Guide' },
];

export default function CrappieFishingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteNav />
      <main id="main-content" className="pt-20">

        <section style={{ background: 'oklch(0.95 0.010 240)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-6 block">Fishing Guide</span>
            <h1 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }} className="text-5xl sm:text-6xl font-bold uppercase mb-6">CRAPPIE FISHING</h1>
            <p style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '60ch' }} className="text-lg leading-relaxed">
              Crappie are the most popular panfish in the US. They are predictable in spring, respond to simple techniques, and taste excellent. This guide covers where they hold, when they bite, and how to catch them consistently.
            </p>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Identification</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">KNOW WHICH CRAPPIE YOU ARE TARGETING</h2>
            <p style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="leading-relaxed mb-8">
              Two species of crappie live in US waters. Both are excellent tablefish. Both respond to the same basic techniques. The main differences come down to appearance and habitat preference.
            </p>

            <div style={{ borderTop: `1px solid ${border}` }} className="py-6 grid sm:grid-cols-[200px_1fr] gap-4">
              <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">Black Crappie</span>
              <div style={{ color: muted, fontFamily: 'var(--font-body)' }}>
                <p className="text-sm mb-2"><em>Pomoxis nigromaculatus</em></p>
                <ul className="space-y-1 list-disc list-inside">{BLACK.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            </div>
            <div style={{ borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }} className="py-6 grid sm:grid-cols-[200px_1fr] gap-4">
              <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">White Crappie</span>
              <div style={{ color: muted, fontFamily: 'var(--font-body)' }}>
                <p className="text-sm mb-2"><em>Pomoxis annularis</em></p>
                <ul className="space-y-1 list-disc list-inside">{WHITE.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            </div>

            <p style={{ color: muted, fontFamily: 'var(--font-body)' }} className="mt-6 leading-relaxed">
              Both species reach 10-14 inches in most waters. Trophy crappie push 17-19 inches and weigh 3-4 lbs. The world record for each species is over 5 lbs. For most fishing purposes, the two species are interchangeable.
            </p>
          </div>
        </section>

        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Spawn Timing</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">HIT THE SPAWN WINDOW</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>When water temperature reaches 55-65 degrees F, crappie move from deep open water to shallow areas to spawn. This happens from March through May depending on your location. Southern states see it in early March. Northern states may not hit spawn conditions until late April or May.</p>
              <p>During spawn, crappie concentrate in 2-6 feet of water near structure. They build nests on hard or sandy bottom and guard the nest aggressively. This is when crappie are the most predictable and accessible of the entire year.</p>
              <p>Good spawn locations include:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Flooded brush and timber near the bank</li>
                <li>Dock pilings in 2-4 feet of water</li>
                <li>Stumps and submerged logs in coves</li>
                <li>Riprap banks on reservoirs</li>
                <li>Any shallow flat with hard bottom near deeper water</li>
              </ul>
              <p>A good rule: check the shallows slowly and look for nests. Crappie nest beds are often visible in clear water. A spawning crappie will not move far from the nest.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Dock Pattern</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">WORK THE DOCKS YEAR-ROUND</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>After spawn, crappie school up under docks and other overhead structure. Docks create shade. Shade attracts baitfish. Baitfish attract crappie. This pattern holds from June through October in most parts of the country.</p>
              <p>The technique is simple. Drop a 1/32 or 1/16 oz tube jig straight down through the gaps in the dock boards. Let it fall slowly. Most strikes come on the fall. If the jig reaches the bottom with no strike, pull it up a foot and let it fall again.</p>
              <p>Use 4-lb monofilament or light fluorocarbon. The thin line drops more naturally and spooks fish less in clear water. A 6-7 foot light action spinning rod gives you the sensitivity to feel soft crappie strikes.</p>
              <p>Shaded docks on the north side of a lake fish best on hot summer days. Move systematically from dock to dock. If you catch one crappie, drop back in the same spot. They school, so there are almost always more.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Bait Choice</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-10">PICK THE RIGHT BAIT FOR THE WATER TEMPERATURE</h2>

            <div style={{ borderTop: `1px solid ${border}` }} className="py-6 grid sm:grid-cols-[200px_1fr] gap-4">
              <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">Tube Jig</span>
              <ul style={{ color: muted, fontFamily: 'var(--font-body)' }} className="space-y-1 list-disc list-inside">{TUBE.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
            <div style={{ borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }} className="py-6 grid sm:grid-cols-[200px_1fr] gap-4">
              <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">Live Minnow</span>
              <ul style={{ color: muted, fontFamily: 'var(--font-body)' }} className="space-y-1 list-disc list-inside">{MINNOW.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>

            <p style={{ color: muted, fontFamily: 'var(--font-body)' }} className="mt-6 leading-relaxed">
              In warm water conditions during spring spawn and summer activity, tube jigs match live minnows almost perfectly. In cold water below 50 degrees F, a live minnow often outperforms artificial by a wide margin because it moves naturally and creates vibration that draws sluggish fish.
            </p>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Equipment</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">LIGHT GEAR, SIMPLE SETUP</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-3 leading-relaxed">
              <p>Crappie fishing is one of the most accessible forms of freshwater fishing. You do not need expensive gear to catch a lot of fish.</p>
              <ul className="space-y-3">
                <li><strong style={{ color: fg }}>Rod:</strong> 6-7 ft light action spinning rod. Longer rods help you reach under docks without spooking fish.</li>
                <li><strong style={{ color: fg }}>Reel:</strong> Any light spinning reel. 1000-2500 size.</li>
                <li><strong style={{ color: fg }}>Line:</strong> 4-8 lb monofilament or 6-10 lb braid with a 4-6 lb fluorocarbon leader.</li>
                <li><strong style={{ color: fg }}>Hooks:</strong> Size 1 or 1/0 for live minnows. Small jig heads (1/32 to 1/8 oz) for tube jigs.</li>
                <li><strong style={{ color: fg }}>Float:</strong> A small slip float for minnow fishing. Adjust depth so the minnow is just above where fish are holding.</li>
              </ul>
              <p>A basic crappie setup costs under $40. Kids learn to fish on crappie because the gear is light, bites are frequent in spring, and the fish are big enough to be exciting but forgiving enough for beginners.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Edibility</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">CATCH IN MORNING, EAT BY DINNER</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>Crappie are among the best-eating freshwater fish in North America. The meat is white, firm, and flaky with a mild flavor that does not taste strongly fishy. Most anglers fillet crappie, dredge in seasoned cornmeal or flour, and fry in hot oil. The result is excellent.</p>
              <p>Crappie populations recover quickly because they reproduce in large numbers. Most states allow daily bag limits of 25-30 fish with a 9-10 inch minimum size. Keeping fish from a healthy water body is sustainable and encouraged.</p>
              <p>A crappie fry in the spring is a tradition across much of the South and Midwest. Catch them in the morning, clean them by noon, and eat by dinner. It is hard to beat.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }} className="text-4xl sm:text-5xl font-bold uppercase mb-4">CRAPPIE SCHOOL TIGHT. LOG THE SPOT.</h2>
            <p style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '60ch' }} className="text-base mb-8">
              Record date, depth, water temp, and lure color in BaitCastCatch after each trip. Over a season you see exactly which docks and coves hold fish. Free download, no subscription.
            </p>
            <Link href="/free-download" style={{ background: accent, color: 'oklch(0.99 0 0)', fontFamily: 'var(--font-display)', letterSpacing: '0.05em', textTransform: 'uppercase', borderRadius: 'var(--radius)' }} className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-colors min-h-[48px] hover:opacity-90">Free Download</Link>
          </div>
        </section>

        <section style={{ background: 'oklch(0.92 0.015 240)', borderTop: `1px solid ${border}` }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">More Guides</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-2xl sm:text-3xl font-bold uppercase mb-8">MORE FISHING GUIDES</h2>
            <div>
              {RELATED.map((link, i) => (
                <Link key={link.href} href={link.href} style={{ borderTop: `1px solid ${border}`, borderBottom: i === RELATED.length - 1 ? `1px solid ${border}` : 'none' }} className="block py-5 grid grid-cols-[1fr_auto] gap-4 items-center hover:opacity-80 transition-opacity">
                  <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">{link.label}</span>
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
