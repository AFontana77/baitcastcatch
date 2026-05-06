import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smallmouth Bass — Species Guide, Record & Fishing Techniques | BaitCastCatch',
  description:
    'The complete smallmouth bass guide: world record (11 lbs 15 oz), river vs. lake habitat, seasonal patterns, and the techniques that catch the hardest-fighting bass pound for pound.',
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
      headline: 'Smallmouth Bass — Species Guide, Record & Fishing Techniques',
      description: 'The complete smallmouth bass guide: world record (11 lbs 15 oz), river vs. lake habitat, seasonal patterns, and the techniques that catch the hardest-fighting bass pound for pound.',
      url: 'https://www.baitcastcatch.com/smallmouth-bass',
      publisher: { '@type': 'Organization', name: 'BaitCastCatch', url: 'https://www.baitcastcatch.com' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.baitcastcatch.com' },
        { '@type': 'ListItem', position: 2, name: 'Smallmouth Bass', item: 'https://www.baitcastcatch.com/smallmouth-bass' },
      ],
    },
  ],
};

const ID_DIFFS = [
  { title: 'Jaw', body: 'Smallmouth jaw ends below the eye. Largemouth jaw goes past the eye.' },
  { title: 'Body pattern', body: 'Smallmouth has vertical dark bars. Largemouth has a horizontal stripe.' },
  { title: 'Water preference', body: 'Smallmouth needs cool, clear, rocky water (65-72 degrees F). Largemouth tolerates warm, murky conditions.' },
  { title: 'Record weight', body: 'Smallmouth record is 11 lbs 15 oz. Largemouth record is 22 lbs 4 oz.' },
  { title: 'Fight quality', body: 'Smallmouth pulls harder per pound. Largemouth jumps more and is heavier overall.' },
];

const SEASONS = [
  { title: 'Spring Spawn', body: 'Smallmouth spawn slightly earlier than largemouth. The trigger is water temperature reaching 55-60 degrees F, compared to 58-65 degrees F for largemouth. Males sweep nests on gravel or rocky bottom in 3-8 feet of water and guard aggressively until fry disperse.' },
  { title: 'Summer Activity', body: 'Summer smallmouth hold on deep rocky structure during the heat of the day. Fishing is best early and late. In rivers, smallmouth remain active longer into the day because moving water stays cooler. Fast current oxygenates well and keeps fish active.' },
  { title: 'Fall Feeding', body: 'Fall is prime time. Cooling water brings smallmouth into shallower water to feed. Crayfish are active and abundant in fall, and smallmouth gorge on them. Overcast days in September and October can produce exceptional fishing.' },
  { title: 'Winter Slowdown', body: 'Cold water pushes smallmouth to their deepest holding spots. They feed little. Ice fishing for smallmouth is possible in northern states but requires slow presentation and small baits.' },
];

const TECHNIQUES = [
  { title: 'Tube Jig on Rocky Bottom', body: 'A 3-4 inch tube jig in green pumpkin or cinnamon brown is the classic smallmouth lure. Let it fall to the bottom, hop it forward, let it settle. This mimics a crayfish perfectly. Use a 3/16 to 3/8 oz jig head depending on depth. The tube jig catches smallmouth in rivers and lakes year-round.' },
  { title: 'Drop Shot with Finesse Worm', body: 'A 4-6 inch finesse worm on a drop shot rig, fished in 10-20 feet of water over rock, is deadly on pressured smallmouth. The bait hovers in place and barely moves. This works best in summer and early fall when fish are deep and slow.' },
  { title: 'Crayfish Imitation', body: 'Smallmouth eat more crayfish than almost any other forage. A creature bait, crawfish jig, or small crankbait in orange and brown tones works well. Live crayfish under a float is one of the most effective natural baits on the planet for smallmouth.' },
  { title: 'River: Upstream Cast and Drift', body: 'In rivers, cast upstream at a 45-degree angle. Let the current carry the bait back through the strike zone. Feel for the bump as the bait hops on the rocky bottom. This natural drift presentation often outperforms anything else in moving water.' },
  { title: 'Topwater and Swimbait', body: 'Early morning topwater fishing with a small popper or walk-the-dog bait is excellent in summer. For larger fish, a 4-inch swimbait on a light jig head matches shad and draws aggressive strikes.' },
];

const RELATED = [
  { href: '/largemouth-bass', label: 'Largemouth Bass Guide' },
  { href: '/striped-bass', label: 'Striped Bass Guide' },
  { href: '/crappie-fishing', label: 'Crappie Fishing Guide' },
  { href: '/walleye-fishing', label: 'Walleye Fishing Guide' },
];

export default function SmallmouthBassPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteNav />
      <main id="main-content" className="pt-20">

        <section style={{ background: 'oklch(0.95 0.010 240)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-6 block">Species Guide</span>
            <h1 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }} className="text-5xl sm:text-6xl font-bold uppercase mb-6">SMALLMOUTH BASS</h1>
            <p style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '60ch' }} className="text-lg leading-relaxed">
              Smallmouth bass live in cold, clear water and fight harder per pound than almost anything in freshwater. This guide covers where they hold, how to read their seasonal behavior, and which techniques produce.
            </p>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Profile</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">KNOW YOUR TARGET BEFORE YOU CAST</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed mb-8">
              <p>The smallmouth bass (<em>Micropterus dolomieu</em>) is brown to olive-brown with 8-12 dark vertical bars running down its sides. This bar pattern is the key visual difference from the largemouth, which shows a horizontal stripe instead.</p>
              <p>The jaw ends below the eye. This is the fastest ID check in the field. Largemouth jaw goes past the eye; smallmouth jaw stops below it.</p>
              <p>Many bass anglers call smallmouth the hardest-fighting freshwater fish in North America, pound for pound. A 3-lb smallmouth will test your gear in a way a 3-lb largemouth will not. They run deep, make strong sustained runs, and jump multiple times during the fight.</p>
            </div>

            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }} className="uppercase text-xs font-semibold mb-2 block">Smallmouth vs. Largemouth</span>
            <div>
              {ID_DIFFS.map((item, i) => (
                <div key={item.title} style={{ borderTop: `1px solid ${border}`, borderBottom: i === ID_DIFFS.length - 1 ? `1px solid ${border}` : 'none' }} className="py-5 grid sm:grid-cols-[200px_1fr] gap-4">
                  <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">{item.title}</span>
                  <p style={{ color: muted, fontFamily: 'var(--font-body)' }} className="leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">The Benchmark</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">11 LBS 15 OZ SINCE 1955</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>David Hayes caught a smallmouth bass weighing 11 lbs 15 oz on July 9, 1955, at Dale Hollow Lake on the Kentucky and Tennessee border. The record has held for over 70 years.</p>
              <p>Dale Hollow is still known as one of the best smallmouth lakes in the country. Cold, clear water and a rocky bottom create ideal conditions for big fish.</p>
              <p>Most smallmouth caught by anglers run 1-3 lbs. A 5-lb smallmouth is an excellent fish. Anything pushing 6-7 lbs is exceptional and will be remembered for a long time.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Habitat</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">FIND CLEAN, COLD WATER. FIND SMALLMOUTH.</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>Smallmouth bass require cleaner, cooler water than largemouth. Their preferred range is 65-72 degrees F. Where largemouth can tolerate murky, warm conditions, smallmouth cannot. This makes them a water quality indicator species, meaning their presence tells you the water is clean and cold.</p>
              <p>The best smallmouth water in the US includes the Great Lakes system, the Ozark rivers of Missouri and Arkansas, New England cold-water lakes, and clear northern lakes in Minnesota, Wisconsin, and Michigan. The St. Lawrence River system in New York holds excellent populations.</p>
              <p>Within a water body, look for these features:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Rocky points dropping into deep water</li>
                <li>Boulder fields in 5-15 feet of water</li>
                <li>Gravel beds during spawn</li>
                <li>Current seams where fast water meets slow water in rivers</li>
                <li>Submerged rock piles and ledges</li>
              </ul>
              <p>Smallmouth in rivers behave differently from lake fish. River smallmouth hold in current, use rocks as current breaks, and feed facing upstream. Casting upstream and drifting a bait back down through current seams is the standard river approach.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Seasonal Patterns</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-10">FISH THE RIGHT SPOT BY SEASON</h2>
            <div>
              {SEASONS.map((s, i) => (
                <div key={s.title} style={{ borderTop: `1px solid ${border}`, borderBottom: i === SEASONS.length - 1 ? `1px solid ${border}` : 'none' }} className="py-6 grid sm:grid-cols-[220px_1fr] gap-4">
                  <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">{s.title}</span>
                  <p style={{ color: muted, fontFamily: 'var(--font-body)' }} className="leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Techniques</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-10">PRESENT THE RIGHT BAIT, LAND MORE FISH</h2>
            <div>
              {TECHNIQUES.map((t, i) => (
                <div key={t.title} style={{ borderTop: `1px solid ${border}`, borderBottom: i === TECHNIQUES.length - 1 ? `1px solid ${border}` : 'none' }} className="py-6 grid sm:grid-cols-[260px_1fr] gap-4">
                  <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">{t.title}</span>
                  <p style={{ color: muted, fontFamily: 'var(--font-body)' }} className="leading-relaxed">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }} className="text-4xl sm:text-5xl font-bold uppercase mb-4">SMALLMOUTH PATTERNS TAKE TIME. LOG THEM AS YOU GO.</h2>
            <p style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '60ch' }} className="text-base mb-8">
              Record water temp, depth, lure, and time of day in BaitCastCatch after each trip. Over a season you build a clear picture of what your water responds to. Free download, no subscription.
            </p>
            <Link href="/free-download" style={{ background: accent, color: 'oklch(0.99 0 0)', fontFamily: 'var(--font-display)', letterSpacing: '0.05em', textTransform: 'uppercase', borderRadius: 'var(--radius)' }} className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-colors min-h-[48px] hover:opacity-90">Free Download</Link>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)', borderTop: `1px solid ${border}` }} className="py-16 px-6">
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
