import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Walleye Fishing — Why They\'re Hard to Catch & How to Fix It | BaitCastCatch',
  description:
    "The walleye fishing guide: the biology behind their low-light feeding behavior, the Lindy rig, jig-and-minnow technique, Great Lakes populations, size limits, and why walleye are the most sought-after eating fish in the Midwest.",
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
      headline: "Walleye Fishing — Why They're Hard to Catch & How to Fix It",
      description: 'The walleye fishing guide: the biology behind their low-light feeding behavior, the Lindy rig, jig-and-minnow technique, Great Lakes populations, size limits.',
      url: 'https://www.baitcastcatch.com/walleye-fishing',
      publisher: { '@type': 'Organization', name: 'BaitCastCatch', url: 'https://www.baitcastcatch.com' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.baitcastcatch.com' },
        { '@type': 'ListItem', position: 2, name: 'Walleye Fishing', item: 'https://www.baitcastcatch.com/walleye-fishing' },
      ],
    },
  ],
};

const FIX = [
  'Fish at dusk, dawn, and after dark. These are peak feeding windows.',
  'On overcast days, fish all day. Clouds cut light and walleye feed throughout the day in low-light conditions.',
  'Fish in stained or tannic water where light penetration is reduced. Walleye feel comfortable in those conditions and feed more actively.',
  'If you must fish midday in clear water, go deep where light intensity drops.',
];

const TECHNIQUES = [
  {
    title: 'Lindy Rig with Live Bait',
    paras: [
      'The Lindy rig (also called a live bait rig) is the most reliable walleye technique in the country. The key component is a walking sinker: a long, flat sinker with a hole through it that allows the line to slide freely. This means a walleye can pick up the bait and feel almost no resistance before you set the hook.',
      'Slide the walking sinker on the main line. Tie a small barrel swivel below it. Attach 18-36 inches of 8-10 lb fluorocarbon leader to the swivel. Tie a size 6-8 hook at the end.',
      'Bait the hook with a live nightcrawler (hook through the nose end) or a live minnow (hook through the back). Drag the rig slowly along the bottom as the boat drifts or motors at 0.5-1 mph. Feel for bottom contact. When a walleye picks up the bait, free-spool 5-10 seconds, then reel tight and set the hook.',
    ],
  },
  {
    title: 'Jig and Minnow',
    paras: [
      'A 1/8 to 3/8 oz round-head jig tipped with a live or frozen minnow is the most versatile walleye lure. Color matters more for walleye than for many fish: chartreuse, pink, and orange jig heads are proven in stained water; white and yellow work in clearer conditions.',
      'Fish it vertically. Lower the jig to the depth where fish are holding on sonar, 10-20 feet in most cases. Lift the jig one foot and let it fall back. The minnow kicks on the fall. Strikes come mostly on the drop.',
      'In rivers, cast upstream and drift the jig with the current along the bottom. Walleye hold in current breaks behind rocks, in deep holes, and along the seam where fast water meets slow water.',
    ],
  },
  {
    title: 'Trolling Crankbaits',
    paras: [
      'Trolling covers water fast and is excellent for finding walleye schools on large lakes. Deep-diving crankbaits like the Rapala Deep Tail Dancer, Salmo Hornet, or Berkley Flicker Shad are all productive. Troll at 1.5-2.5 mph along depth contour lines.',
      'Run the lures at the depth where walleye are suspended or holding. Use a line counter reel to repeat the exact amount of line that produced fish. Color preferences vary by water clarity: natural shad colors work in clear water; brighter colors like fire tiger or orange work in stained water.',
    ],
  },
];

const RELATED = [
  { href: '/largemouth-bass', label: 'Largemouth Bass Guide' },
  { href: '/smallmouth-bass', label: 'Smallmouth Bass Guide' },
  { href: '/crappie-fishing', label: 'Crappie Fishing Guide' },
  { href: '/trout-fishing', label: 'Trout Fishing Guide' },
];

export default function WalleyeFishingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteNav />
      <main id="main-content" className="pt-20">

        <section style={{ background: 'oklch(0.95 0.010 240)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-6 block">Fishing Guide</span>
            <h1 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }} className="text-5xl sm:text-6xl font-bold uppercase mb-6">WALLEYE FISHING</h1>
            <p style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '60ch' }} className="text-lg leading-relaxed">
              Walleye are hard to catch because most anglers fish at the wrong time of day. Once you understand why, the fix is simple. This guide covers the biology behind their feeding behavior, where they hold by season, and the three techniques that consistently put walleye in the boat.
            </p>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Biology</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">UNDERSTAND THEIR EYES, KNOW WHEN TO FISH</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed mb-8">
              <p>Walleye have a layer of cells behind their retina called a tapetum lucidum. This layer reflects light back through the retina, amplifying available light. The same structure is in cat eyes, and it is why both glow when a light hits them at night.</p>
              <p>In a walleye, this means the fish sees clearly in low light when other species are nearly blind. In bright midday sun, the opposite happens: walleye eyes are overwhelmed. They retreat to deep water, shaded areas, or turbid water to avoid the discomfort. They stop feeding.</p>
              <p>This is why most anglers fish midday and catch nothing. Their timing is off.</p>
            </div>

            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }} className="uppercase text-xs font-semibold mb-2 block">The Fix</span>
            <div>
              {FIX.map((step, i) => (
                <div key={step} style={{ borderTop: `1px solid ${border}`, borderBottom: i === FIX.length - 1 ? `1px solid ${border}` : 'none' }} className="py-5 grid grid-cols-[40px_1fr] gap-4">
                  <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-lg font-bold">{String(i + 1).padStart(2, '0')}</span>
                  <p style={{ color: muted, fontFamily: 'var(--font-body)' }} className="leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Profile</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">KNOW YOUR TARGET BEFORE YOU RIG UP</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>The walleye (<em>Sander vitreus</em>) is olive to gold in color with a pale belly. The eyes are large and glassy. When a light hits a walleye eye in the dark, the tapetum lucidum reflects a bright golden glow. This is how the fish got its name.</p>
              <p>Walleye are the largest member of the perch family and are not related to bass or trout. They are native to Canada and the northern US, including the Great Lakes basin, and the Missouri and Ohio River systems.</p>
              <p>The world record walleye weighed 25 lbs. It was caught by Mabry Harper at Old Hickory Lake in Tennessee in 1960. Most walleye caught by anglers run 1-4 lbs. A 7-lb walleye is a notable fish. Anything pushing 10 lbs is a rare trophy.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Where to Fish</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">WHERE THE BEST WATER IS IN NORTH AMERICA</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>Lake Erie is the most productive walleye fishery in the world. The western basin of Lake Erie holds enormous populations of walleye and supports a major commercial fishing industry in addition to a massive sport fishery. Ohio, Michigan, Pennsylvania, and New York anglers all target Lake Erie walleye.</p>
              <p>Walleye is the state fish of Minnesota. The state has thousands of lakes with strong walleye populations, and fishing for walleye is deeply embedded in Minnesota culture. Lake of the Woods on the Minnesota and Canadian border is one of the most famous walleye lakes in the world.</p>
              <p>Other major walleye fisheries include Lake Winnebago in Wisconsin, the Missouri River system through the Dakotas, and the reservoir chain along the Missouri River (Lake Oahe, Lake Sakakawea, Fort Peck).</p>
              <p>Walleye have been stocked widely outside their native range. They now exist in many Southern and Western reservoirs where they were not originally found.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Three Techniques</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-10">THREE PROVEN SETUPS</h2>
            <div>
              {TECHNIQUES.map((t, i) => (
                <div key={t.title} style={{ borderTop: `1px solid ${border}`, borderBottom: i === TECHNIQUES.length - 1 ? `1px solid ${border}` : 'none' }} className="py-8 grid sm:grid-cols-[260px_1fr] gap-4">
                  <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">{t.title}</span>
                  <div style={{ color: muted, fontFamily: 'var(--font-body)' }} className="space-y-3 leading-relaxed">
                    {t.paras.map((p) => <p key={p}>{p}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Timing</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">TIMING MATTERS MORE THAN TECHNIQUE</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>Time of day matters more for walleye than for almost any other fish. The single best adjustment most anglers can make is to start fishing at dusk and fish through the first hour of dark. Walleye move shallow at low light and feed aggressively.</p>
              <p>Dawn is the second window. Fish move back to shallower feeding areas from their daytime deep holding spots in the half hour before and after sunrise.</p>
              <p>Seasonally, spring is a top period. Walleye spawn in March and April in most of their range when water hits 38-44 degrees F. They move shallow to rocky or gravel areas and feed actively before, during, and just after the spawn. Post-spawn walleye are hungry and aggressive.</p>
              <p>Fall is the second peak. Cooling water and active baitfish draw walleye into shallower areas. October fishing on many Midwestern lakes rivals spring in terms of fish activity.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Edibility</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">THE BEST TABLE FISH IN THE MIDWEST</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>Walleye is widely considered the best-eating freshwater fish in North America among Midwesterners. The meat is white, firm, flaky, and has almost no fishy taste. It holds together well when cooked and does not fall apart in the pan.</p>
              <p>The walleye fry is a cultural institution in Minnesota, Wisconsin, and throughout the Midwest. VFW halls, church basements, and lakeside restaurants all serve walleye fish fries, usually on Fridays. Dredge in flour or cornmeal, fry in butter or oil, serve with tartar sauce. Simple and excellent.</p>
              <p>Most states set minimum size limits of 15-18 inches and daily bag limits of 3-6 fish. Some trophy walleye waters have slot limits that protect large fish (for example, fish between 15 and 20 inches must be released, while fish below or above that slot may be kept). Check regulations for the specific water you plan to fish.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }} className="text-4xl sm:text-5xl font-bold uppercase mb-4">WALLEYE ARE PATTERN FISH. LOG THE DETAILS.</h2>
            <p style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '60ch' }} className="text-base mb-8">
              Record time of day, water depth, technique, and clarity for every walleye in BaitCastCatch. After one full season of entries, you know exactly when your home water turns on and what the fish respond to at each time of year. Free download, no subscription.
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
