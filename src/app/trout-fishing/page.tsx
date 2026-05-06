import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trout Fishing — Rainbow, Brown & Brook Trout Guide | BaitCastCatch',
  description:
    'The trout fishing guide: three main US species (rainbow, brown, brook), stocked vs. wild trout differences, PowerBait for hatchery fish, catch-and-release best practices, and regulation overview.',
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
      headline: 'Trout Fishing — Rainbow, Brown & Brook Trout Guide',
      description: 'The trout fishing guide: three main US species, stocked vs. wild trout differences, PowerBait for hatchery fish, catch-and-release best practices, and regulation overview.',
      url: 'https://www.baitcastcatch.com/trout-fishing',
      publisher: { '@type': 'Organization', name: 'BaitCastCatch', url: 'https://www.baitcastcatch.com' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.baitcastcatch.com' },
        { '@type': 'ListItem', position: 2, name: 'Trout Fishing', item: 'https://www.baitcastcatch.com/trout-fishing' },
      ],
    },
  ],
};

const STOCKED = ['Raised on pellets, so they eat floating bait', 'Less wary, easier to approach', 'Often stocked in accessible public areas', 'Respond very well to PowerBait', 'Intended to be kept and eaten', 'Typically planted weekly during trout season'];
const WILD = ['Feed on insects, nymphs, and small fish', 'Very wary, spook easily from vibration and shadow', 'Hold in specific lies: deep pools, current breaks', 'Require finesse presentations', 'Often catch-and-release required by regulation', 'The most challenging and rewarding trout fishing'];

const SPECIES = [
  {
    title: 'Rainbow Trout',
    paras: [
      'The rainbow trout (Oncorhynchus mykiss) is the most widely stocked trout in the United States. Originally native to the Pacific Coast from Alaska to Northern California, it has been introduced to all 50 states and dozens of countries worldwide.',
      'The body is silver to olive-green with a pink or red stripe running along the lateral line, plus black spots on the body, dorsal fin, and tail. Hatchery rainbows are often paler and fatter than wild fish, which are leaner and more colorful.',
      'Rainbow trout are the classic put-and-take fish. Hatcheries raise millions each year and stock them in streams and lakes. Many state programs stock weekly during trout season. These fish are easy to catch and available to almost every angler in the country.',
    ],
  },
  {
    title: 'Brown Trout',
    paras: [
      'Brown trout (Salmo trutta) were introduced from Europe and have naturalized in cold-water streams across much of the US. They are the most wary and difficult to catch of the three common species.',
      'The body is brown to golden-brown with red and black spots, each surrounded by a pale halo. Adult fish in good water develop bright yellow-gold flanks that are among the most beautiful of any freshwater fish.',
      'Brown trout feed more at night than rainbow or brook trout. They hold in deeper pools and undercut banks during the day and move to feed at dusk and after dark. Large brown trout eat other fish, including smaller trout, and will take big streamers and night crawlers.',
      'Many fly anglers consider a large wild brown trout in a technical tailwater or limestone spring creek to be the highest-difficulty target in freshwater fishing. The combination of wariness, selective feeding, and difficult water makes them a challenging and rewarding fish.',
    ],
  },
  {
    title: 'Brook Trout',
    paras: [
      'The brook trout (Salvelinus fontinalis) is technically a char, not a true trout. Despite the name, it is more closely related to lake trout and Arctic char than to rainbow or brown trout. It is the only trout species native to the eastern US, and native to cold mountain streams from Georgia to Labrador.',
      'Brook trout are visually stunning. The olive back is marked with pale worm-like patterns called vermiculations. The sides show red spots with blue halos. The lower fins are red-orange with a distinctive black-and-white edge, which no other trout has.',
      'Brook trout require the coldest, cleanest water of the three main species. Water temperatures above 65 degrees F stress them quickly. Siltation and poor land use have eliminated brook trout from much of their original range. Where brookies exist, the water is excellent.',
      'Most stream brook trout run 6-10 inches. Fish over 12 inches from a wild stream are exceptional. Brook trout in large lakes (Great Lakes and certain Canadian lakes) can reach 10+ lbs, but stream fish are small and fast in cold mountain water.',
    ],
  },
];

const POWERBAIT = [
  'Tie a size 10 or 12 treble hook to 4-6 lb monofilament using a Palomar knot.',
  'Add a small barrel swivel 18 inches above the hook, then add a 1/4 to 1/2 oz sliding egg sinker above the swivel. The sinker slides, so a striking fish feels no resistance.',
  'Take a pea-sized ball of PowerBait (chartreuse, rainbow, or salmon egg colors all work) and mold it tightly around the treble hook, covering all three points. Press it together until it forms a smooth ball.',
  'Cast to open water 20-30 feet from shore. The sinker sinks to the bottom. The PowerBait floats up 18 inches above the bottom, right in front of fish cruising through.',
  'Set the rod in a forked stick or rod holder. Wait for the tip to bend. Strike and reel.',
];

const RELATED = [
  { href: '/largemouth-bass', label: 'Largemouth Bass Guide' },
  { href: '/smallmouth-bass', label: 'Smallmouth Bass Guide' },
  { href: '/crappie-fishing', label: 'Crappie Fishing Guide' },
  { href: '/walleye-fishing', label: 'Walleye Fishing Guide' },
];

export default function TroutFishingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteNav />
      <main id="main-content" className="pt-20">

        <section style={{ background: 'oklch(0.95 0.010 240)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-6 block">Fishing Guide</span>
            <h1 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }} className="text-5xl sm:text-6xl font-bold uppercase mb-6">TROUT FISHING</h1>
            <p style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '60ch' }} className="text-lg leading-relaxed">
              Stocked trout and wild trout need completely different approaches. Most anglers treat them the same and catch far fewer fish than they should. This guide breaks down the three main species and the right technique for each situation.
            </p>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Three Species</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-10">KNOW WHICH TROUT YOU ARE AFTER</h2>
            <div>
              {SPECIES.map((s, i) => (
                <div key={s.title} style={{ borderTop: `1px solid ${border}`, borderBottom: i === SPECIES.length - 1 ? `1px solid ${border}` : 'none' }} className="py-8 grid sm:grid-cols-[200px_1fr] gap-4">
                  <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">{s.title}</span>
                  <div style={{ color: muted, fontFamily: 'var(--font-body)' }} className="space-y-3 leading-relaxed">
                    {s.paras.map((p) => <p key={p}>{p}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Stocked vs. Wild</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-10">MATCH YOUR APPROACH TO THE FISH IN FRONT OF YOU</h2>
            <p style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="leading-relaxed mb-6">
              The two situations call for different approaches. Treating them the same is the most common mistake new trout anglers make.
            </p>

            <div style={{ borderTop: `1px solid ${border}` }} className="py-6 grid sm:grid-cols-[200px_1fr] gap-4">
              <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">Stocked Trout</span>
              <ul style={{ color: muted, fontFamily: 'var(--font-body)' }} className="space-y-1 list-disc list-inside">{STOCKED.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
            <div style={{ borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }} className="py-6 grid sm:grid-cols-[200px_1fr] gap-4">
              <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">Wild Trout</span>
              <ul style={{ color: muted, fontFamily: 'var(--font-body)' }} className="space-y-1 list-disc list-inside">{WILD.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>

            <p style={{ color: muted, fontFamily: 'var(--font-body)' }} className="mt-6 leading-relaxed">
              Many streams have both stocked and wild sections. Stocked fish are usually in the easily accessible lower sections. Wild fish are upstream, often in harder-to-reach water that fewer people fish.
            </p>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">PowerBait Setup</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">CATCH MORE STOCKED TROUT</h2>
            <p style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="leading-relaxed mb-8">
              PowerBait is a floating dough bait from Berkley. It works specifically on hatchery trout because those fish were raised on floating pellets. They are conditioned to eat food that floats, and PowerBait mimics exactly that.
            </p>
            <div>
              {POWERBAIT.map((step, i) => (
                <div key={step} style={{ borderTop: `1px solid ${border}`, borderBottom: i === POWERBAIT.length - 1 ? `1px solid ${border}` : 'none' }} className="py-5 grid grid-cols-[40px_1fr] gap-4">
                  <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-lg font-bold">{String(i + 1).padStart(2, '0')}</span>
                  <p style={{ color: muted, fontFamily: 'var(--font-body)' }} className="leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <p style={{ color: muted, fontFamily: 'var(--font-body)' }} className="mt-6 leading-relaxed">
              This setup catches stocked rainbow trout consistently. It does not work as well on wild fish, which have never eaten pellets and ignore floating dough.
            </p>
          </div>
        </section>

        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Catch and Release</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">RELEASE WILD TROUT RIGHT</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>Wild trout populations are fragile. Many wild trout streams have catch-and-release regulations for good reason. Even on waters without that rule, releasing wild fish protects the resource and keeps quality fishing available.</p>
              <ul className="space-y-3">
                <li><strong style={{ color: fg }}>Use barbless hooks.</strong> Crimp the barb with pliers before you fish. Hook removal takes seconds and causes far less damage.</li>
                <li><strong style={{ color: fg }}>Wet your hands</strong> before touching the fish. Dry hands strip the protective slime coat.</li>
                <li><strong style={{ color: fg }}>Keep the fish in the water</strong> as much as possible during release. Do not hold it out for photos longer than 10 seconds.</li>
                <li><strong style={{ color: fg }}>Point the fish upstream</strong> and hold it gently until it swims away on its own. Do not drop it back in or toss it.</li>
                <li><strong style={{ color: fg }}>Do not squeeze the fish</strong> or put fingers in the gills. Support the body from below.</li>
                <li><strong style={{ color: fg }}>Avoid fishing in water above 68 degrees F.</strong> Warm water stresses trout and reduces survival rates after release.</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Regulations</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">FISH LEGAL: RULES VARY BY STREAM</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>Trout fishing regulations are more complex than bass or panfish rules. Many waters have special restrictions beyond the standard statewide license and bag limit.</p>
              <ul className="space-y-3">
                <li><strong style={{ color: fg }}>Catch and release only:</strong> Many wild trout streams, especially designated trophy trout waters, require you to release all fish.</li>
                <li><strong style={{ color: fg }}>Artificial lures only:</strong> Some sections ban bait entirely, including PowerBait and worms. Only flies and artificial lures are allowed.</li>
                <li><strong style={{ color: fg }}>Fly fishing only:</strong> A smaller category, but some stretches are restricted to fly fishing specifically.</li>
                <li><strong style={{ color: fg }}>No-kill zones:</strong> Certain pools or sections within a stream may be marked as no-kill even when the rest of the stream allows harvest.</li>
              </ul>
              <p>Always read the specific regulation pamphlet for your state, and check for any additional rules on the exact stream or section you plan to fish. Regulations are different by water body, not just by state.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }} className="text-4xl sm:text-5xl font-bold uppercase mb-4">TROUT FISHING REWARDS DETAILS</h2>
            <p style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '60ch' }} className="text-base mb-8">
              Log species, method, water temp, and stream conditions for every outing in BaitCastCatch. Over a season you see exactly which water holds fish and which presentations work in each condition. Free download, no subscription.
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
