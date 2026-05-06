import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Striped Bass — Coastal vs. Landlocked, World Record & Fishing Guide | BaitCastCatch',
  description:
    'The striped bass guide: anadromous biology, Hudson River and Chesapeake Bay runs, landlocked striper in freshwater reservoirs, world record (81 lbs 14 oz), and size limit overview.',
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
      headline: 'Striped Bass — Coastal vs. Landlocked, World Record & Fishing Guide',
      description: 'The striped bass guide: anadromous biology, Hudson River and Chesapeake Bay runs, landlocked striper in freshwater reservoirs, world record (81 lbs 14 oz), and size limit overview.',
      url: 'https://www.baitcastcatch.com/striped-bass',
      publisher: { '@type': 'Organization', name: 'BaitCastCatch', url: 'https://www.baitcastcatch.com' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.baitcastcatch.com' },
        { '@type': 'ListItem', position: 2, name: 'Striped Bass', item: 'https://www.baitcastcatch.com/striped-bass' },
      ],
    },
  ],
};

const TECHNIQUES = [
  { title: 'Live Bait for Coastal Stripers', body: 'Live bunker (menhaden) is the gold standard for large coastal stripers. Hook a bunker through the back just behind the dorsal fin. Use a fish finder rig with a 3-5 oz sinker. Fish it near the bottom in tidal rivers and coastal inlets. Live eels are the top choice at night when big fish feed in the shallows.' },
  { title: 'Bucktail Jig for Landlocked Fish', body: 'A 1-3 oz bucktail jig in white or chartreuse fished at the depth where fish are holding on a sonar reading is a proven landlocked striper technique. Let the jig fall to the school, pop it, let it fall again. When fish are at the surface busting bait, cast a bucktail or topwater plug directly into the boil.' },
  { title: 'Trolling Umbrella Rigs', body: 'Trolling is effective for covering water and finding schools of coastal stripers. Umbrella rigs (multi-arm wire rigs with shad bodies) mimic a school of baitfish. Troll at 4-6 mph in open water or along rip lines where cold and warm water meet.' },
  { title: 'Chunk Bait from Shore at Night', body: 'Shore fishing with chunk bunker or clam on a fish finder rig, cast to the edge of a tidal rip, produces large fish after dark. This is an accessible technique for anglers without a boat. The surf along the Northeast coast at night is excellent striped bass territory from May through October.' },
];

const RELATED = [
  { href: '/largemouth-bass', label: 'Largemouth Bass Guide' },
  { href: '/smallmouth-bass', label: 'Smallmouth Bass Guide' },
  { href: '/trout-fishing', label: 'Trout Fishing Guide' },
  { href: '/walleye-fishing', label: 'Walleye Fishing Guide' },
];

export default function StripedBassPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteNav />
      <main id="main-content" className="pt-20">

        <section style={{ background: 'oklch(0.95 0.010 240)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-6 block">Species Guide</span>
            <h1 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }} className="text-5xl sm:text-6xl font-bold uppercase mb-6">STRIPED BASS</h1>
            <p style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '60ch' }} className="text-lg leading-relaxed">
              Striped bass exist in two very different worlds. Coastal fish migrate hundreds of miles through tidal rivers each spring. Landlocked fish pack into reservoirs and chase shad year-round. This guide explains both.
            </p>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Profile</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">KNOW YOUR TARGET BEFORE YOU CAST</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>Striped bass (<em>Morone saxatilis</em>) have a bright silver body crossed by 7-8 bold dark horizontal stripes. The stripes run from behind the gill plate straight to the tail. You cannot miss them.</p>
              <p>Striped bass are the largest member of the temperate bass family. They are not closely related to largemouth or smallmouth bass. Those species belong to the sunfish family (Centrarchidae). Stripers belong to Moronidae, along with white bass and white perch.</p>
              <p>Adult coastal stripers routinely reach 20-40 lbs. Trophy fish push 50-60 lbs. They are built for open water and strong current, which makes them powerful fighters on the right tackle.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Two Populations</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-10">TWO POPULATIONS, TWO COMPLETELY DIFFERENT APPROACHES</h2>

            <div style={{ borderTop: `1px solid ${border}` }} className="py-8 grid sm:grid-cols-[260px_1fr] gap-6">
              <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">Anadromous (Coastal)</span>
              <div style={{ color: muted, fontFamily: 'var(--font-body)' }} className="space-y-3 leading-relaxed">
                <p>Anadromous means the fish are born in freshwater, migrate to the ocean to grow, and return to freshwater rivers each spring to spawn. Striped bass do exactly this.</p>
                <p>The Chesapeake Bay is the single most important spawning ground on the Atlantic Coast. About 70-80 percent of all Atlantic coastal stripers are born in the Chesapeake and its tributaries. The Potomac, Susquehanna, and Choptank rivers are key spawning rivers inside the bay.</p>
                <p>The Hudson River in New York is the other major spawning system. Hudson River stripers spawn in April and May when the river warms. Anglers line the banks at West Point, Newburgh, and Kingston during the spring run.</p>
                <p>After spawning, adult fish migrate north along the coast. By summer, large schools of stripers feed off the coasts of New Jersey, New York, Connecticut, Rhode Island, and Massachusetts. They follow bait, particularly bunker (menhaden), along the coast.</p>
              </div>
            </div>

            <div style={{ borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }} className="py-8 grid sm:grid-cols-[260px_1fr] gap-6">
              <span style={{ fontFamily: 'var(--font-display)', color: accent, letterSpacing: '0.05em' }} className="text-base font-semibold uppercase">Landlocked</span>
              <div style={{ color: muted, fontFamily: 'var(--font-body)' }} className="space-y-3 leading-relaxed">
                <p>Striped bass were stocked in freshwater reservoirs starting in the 1940s. The fish adapted and now sustain wild populations in many inland waters. They never see the ocean and spend their entire lives in the reservoir.</p>
                <p>Major landlocked striper fisheries include the Santee-Cooper lakes in South Carolina (one of the original landlocked populations), Lake Texoma on the Texas and Oklahoma border, Lake Hartwell in Georgia and South Carolina, and many Tennessee Valley Authority reservoirs.</p>
                <p>Landlocked stripers grow large on shad. They school tightly and can be found on the surface chasing bait in summer and fall. When stripers are busting bait on the surface, anglers can catch dozens of fish in a short window.</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">The Benchmark</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">81 LBS 14 OZ FROM SHORE IN 2011</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>Gregory Myerson caught an 81 lb 14 oz striped bass from Long Island Sound in Connecticut on August 4, 2011. He was fishing from shore, which makes the record even more remarkable. Shore-caught fish this large are almost unheard of.</p>
              <p>The Connecticut coast has produced several very large stripers because the fish congregate there in late summer to feed on the abundant bait. Myerson used live eels, the preferred bait for trophy-sized stripers.</p>
              <p>Most anglers targeting coastal stripers are happy to land a 20-lb fish. Anything over 40 lbs is called a cow and represents a milestone catch for even experienced striper anglers.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Techniques</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-10">MATCH THE METHOD TO WHERE YOUR FISH ARE</h2>
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

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Spring Run</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">TIME THE SPRING RUN RIGHT</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>The striped bass spring run is one of the most anticipated fishing events in the Northeast each year. Starting in March, fish leave the ocean and move into tidal rivers to spawn. The Hudson River run peaks in April and May. The Connecticut River, Delaware River, and Chesapeake Bay tributaries all have significant runs.</p>
              <p>Shore fishing during the run can be exceptional. Fish stack up in pools below dams and at river bends where current slows. Shad and herring are moving up the same rivers at the same time, and stripers follow them.</p>
              <p>Smaller schoolie stripers (fish under 28 inches) make up the majority of what anglers catch during the run. Larger fish move through too, but in smaller numbers. Handle all stripers carefully during spawn season, and follow your state slot limit rules closely.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.92 0.015 240)' }} className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span style={{ color: accent, fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }} className="uppercase text-sm font-semibold mb-4 block">Regulations</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.05 }} className="text-3xl sm:text-4xl font-bold uppercase mb-6">FISH LEGAL: SLOT LIMITS CHANGE</h2>
            <div style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '70ch' }} className="space-y-4 leading-relaxed">
              <p>Coastal striped bass are managed by the Atlantic States Marine Fisheries Commission. Most states along the Atlantic Coast now use slot limits, where only fish within a specific size range may be kept. In many states the slot is around 28-35 inches, though this changes regularly based on stock assessments.</p>
              <p>Daily bag limits are typically 1-2 fish per angler in coastal states. Some states have reduced to catch and release only during spawning seasons to protect recovering populations.</p>
              <p>Landlocked striper regulations vary widely by state and by reservoir. Some lakes have no slot limit; others protect large fish. Always check the state wildlife agency for the exact body of water you plan to fish.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'oklch(0.99 0.005 240)' }} className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 style={{ fontFamily: 'var(--font-display)', color: fg, lineHeight: 1.0 }} className="text-4xl sm:text-5xl font-bold uppercase mb-4">STRIPER FISHING IS ABOUT TIMING</h2>
            <p style={{ color: muted, fontFamily: 'var(--font-body)', maxWidth: '60ch' }} className="text-base mb-8">
              Record size, location, bait, tide phase, and water temp for every fish in BaitCastCatch. After one season of entries you stop guessing when the run peaks and what the fish are eating. Free download, no subscription.
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
