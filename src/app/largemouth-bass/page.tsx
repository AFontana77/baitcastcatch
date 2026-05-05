import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Largemouth Bass — Species Guide, World Record & Fishing Tips | BaitCastCatch',
  description:
    'Everything about largemouth bass: world record (22 lbs 4 oz), habitat, seasonal feeding patterns, best baits and lures by season, and how to tell largemouth from smallmouth.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Largemouth Bass — Species Guide, World Record & Fishing Tips',
      description:
        'Everything about largemouth bass: world record (22 lbs 4 oz), habitat, seasonal feeding patterns, best baits and lures by season, and how to tell largemouth from smallmouth.',
      url: 'https://www.baitcastcatch.com/largemouth-bass',
      publisher: {
        '@type': 'Organization',
        name: 'BaitCastCatch',
        url: 'https://www.baitcastcatch.com',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.baitcastcatch.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Largemouth Bass',
          item: 'https://www.baitcastcatch.com/largemouth-bass',
        },
      ],
    },
  ],
};

export default function LargemouthBassPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section aria-label="Page introduction" className="py-16 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide mb-3">
              Species Guide
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Largemouth Bass
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              The most popular gamefish in the US. Found in almost every state. Hard to resist once you catch your first one. Here is what you need to know.
            </p>
          </div>
        </section>

        {/* Species Profile */}
        <section aria-label="Species profile" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Species Profile</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The largemouth bass (<em>Micropterus salmoides</em>) is native to eastern North America. It has been stocked in nearly every US state, plus dozens of countries around the world. Few fish have spread as far or as fast.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The body is olive-green to dark green on the back, fading to white or yellow on the belly. A bold horizontal stripe runs along each side from head to tail. That stripe is the easiest way to spot a largemouth at a glance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The jaw is the defining feature. On a largemouth, the upper jaw extends past the eye when the mouth is closed. On a smallmouth, it stops below the eye. This one check settles most ID debates at the water.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-3">Largemouth vs. Smallmouth: 5 Key Differences</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Jaw line:</strong> Largemouth jaw goes past the eye. Smallmouth jaw stops below the eye.</li>
                <li><strong>Body markings:</strong> Largemouth has a horizontal stripe. Smallmouth has vertical dark bars on the sides.</li>
                <li><strong>Habitat:</strong> Largemouth prefers warm, weedy, shallow water. Smallmouth prefers cool, rocky, clear water.</li>
                <li><strong>Fight style:</strong> Largemouth jumps and thrashes. Smallmouth runs deep and pulls harder for its size.</li>
                <li><strong>Geographic range:</strong> Largemouth thrives in hot southern climates. Smallmouth dominates in northern lakes and Ozark rivers.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* World Record */}
        <section aria-label="World record" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The World Record</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              George Perry caught a largemouth bass weighing 22 lbs 4 oz on June 2, 1932, at Montgomery Lake in Georgia. The record stood alone for 77 years.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In 2009, Japanese angler Manabu Kurita caught a bass of the same weight, 22 lbs 4 oz, at Lake Biwa in Japan. IGFA ruled it a co-world record. The Perry record was not broken, only tied.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Most largemouth in the US run 1-5 lbs. A 10-lb bass is a trophy almost anywhere. A fish over 15 lbs is a rare lifetime catch for most anglers.
            </p>
          </div>
        </section>

        {/* Habitat */}
        <section aria-label="Habitat and water preferences" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Habitat and Water Preferences</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Largemouth bass love warm, shallow water. Their sweet spot is 65-75 degrees F. They tolerate water much warmer than trout or smallmouth can handle, which is why they thrive in southern ponds and reservoirs.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bass are ambush predators. They hold tight to cover and wait for prey to come close. The best spots are:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 list-disc list-inside">
              <li>Submerged logs and fallen trees</li>
              <li>Weed edges and lily pad fields</li>
              <li>Dock pilings, especially shaded ones</li>
              <li>Rocky points where shallow meets deep</li>
              <li>Laydowns along the shoreline</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Look for structure. Bass rarely sit in open water with nothing around them. If you can see cover from the bank, there is probably a bass nearby.
            </p>
          </div>
        </section>

        {/* Seasonal Patterns */}
        <section aria-label="Seasonal fishing patterns" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Seasonal Patterns</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-3">Spring (March to May)</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  When water hits 58-65 degrees F, bass spawn. Females move to shallow water, 2-6 feet deep, and build nests on hard bottom. Males guard the nest after the female lays eggs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Spring is the best fishing of the year for most anglers. Bass are shallow, visible, and aggressive. A male on a nest will strike almost anything that comes near it. Target spawning flats with creature baits and topwater lures.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-3">Summer (June to August)</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Midday heat pushes bass to deeper, cooler water. Fishing slows from about 10am to 5pm. But early morning and dusk are excellent.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At first light, bass push into shallow water to feed before the sun gets high. At dusk, they do it again. Fish the shallows hard during those windows. Midday, go deep or slow down your presentation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-3">Fall (September to November)</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Cooling water triggers a feeding frenzy. Bass know winter is coming and eat aggressively to build fat. October is often as productive as spring for trophy fish.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Shad and baitfish school up in fall. Bass follow. Look for birds diving on the water, which signals baitfish near the surface and bass below them.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-3">Winter (December to February)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cold water slows bass metabolism. They move deep, 10-20 feet, and barely feed. Slow presentations are the only ones that work. A blade bait or jig fished very slowly along the bottom can produce a bite, but it takes patience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Baits by Season */}
        <section aria-label="Best baits and lures by season" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Baits by Season</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">Spring</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>Senko worm (Texas rigged)</li>
                  <li>Crawfish imitation</li>
                  <li>Topwater popper</li>
                  <li>Hollow-body frog over lily pads</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">Summer</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>Deep-diving crankbait</li>
                  <li>Drop shot rig</li>
                  <li>Finesse jig</li>
                  <li>Swimbait on deep structure</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">Fall</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>Spinnerbait</li>
                  <li>Swimbait matching shad color</li>
                  <li>Medium-running crankbait</li>
                  <li>Chatterbait</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">Winter</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>Blade bait (lift and drop)</li>
                  <li>Slow-rolled jig</li>
                  <li>Ned rig with tiny bait</li>
                  <li>Drop shot, barely moving</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Regulations */}
        <section aria-label="Size and catch regulations" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Size Limits and Regulations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most states set a minimum size of 12-15 inches for largemouth bass. Daily bag limits typically run 5-10 fish. Some trophy fisheries protect big fish with slot limits, where you can only keep fish below a certain size, not above it.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Rules change by water body and state. Always check your state wildlife agency before you fish a new lake or reservoir.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="App download call to action" className="py-14 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Log your next largemouth in BaitCastCatch.
            </h2>
            <p className="text-gray-600 mb-6">
              Record the date, water temp, lure, and size. Over time you will see exactly what works on your favorite water. Free download, no subscription.
            </p>
            <Link
              href="/free-download"
              className="inline-flex items-center justify-center bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-800 transition-colors min-h-[48px]"
            >
              Free Download
            </Link>
          </div>
        </section>

        {/* Related Pages */}
        <section aria-label="Related fishing guides" className="py-14 px-4 bg-blue-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6">More Fishing Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: '/smallmouth-bass', label: 'Smallmouth Bass Guide' },
                { href: '/striped-bass', label: 'Striped Bass Guide' },
                { href: '/crappie-fishing', label: 'Crappie Fishing Guide' },
                { href: '/trout-fishing', label: 'Trout Fishing Guide' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block bg-white rounded-xl px-5 py-4 border border-blue-100 hover:border-blue-300 text-blue-800 font-semibold text-sm transition-colors min-h-[48px] flex items-center"
                >
                  {link.label}
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
