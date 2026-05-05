import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crappie Fishing — Spring Spawning, Best Baits & Techniques | BaitCastCatch',
  description:
    'The crappie fishing guide: black vs. white crappie, spring spawn timing (water hits 55-65°F), dock fishing technique, tube jigs vs. live minnows, and size limit overview.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Crappie Fishing — Spring Spawning, Best Baits & Techniques',
      description:
        'The crappie fishing guide: black vs. white crappie, spring spawn timing (water hits 55-65°F), dock fishing technique, tube jigs vs. live minnows, and size limit overview.',
      url: 'https://www.baitcastcatch.com/crappie-fishing',
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
          name: 'Crappie Fishing',
          item: 'https://www.baitcastcatch.com/crappie-fishing',
        },
      ],
    },
  ],
};

export default function CrappieFishingPage() {
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
              Fishing Guide
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Crappie Fishing
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Crappie are the most popular panfish in the US, and for good reason. They are predictable in spring, respond to simple techniques, and taste excellent. This guide covers where they hold, when they bite, and how to catch them consistently — from first spawn through fall dock fishing.
            </p>
          </div>
        </section>

        {/* Black vs. White Crappie */}
        <section aria-label="Black crappie vs white crappie identification" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Know Which Crappie You Are Targeting</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Two species of crappie live in US waters. Both are excellent tablefish. Both respond to the same basic techniques. The main differences come down to appearance and habitat preference.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mb-6">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">Black Crappie</h3>
                <p className="text-sm text-gray-600 mb-2"><em>Pomoxis nigromaculatus</em></p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Dark spots scattered randomly, no pattern</li>
                  <li>Prefers clearer water with vegetation</li>
                  <li>Found in lakes, ponds, backwaters</li>
                  <li>Slightly deeper bodied than white crappie</li>
                  <li>7-8 dorsal spines (vs. 5-6 on white)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">White Crappie</h3>
                <p className="text-sm text-gray-600 mb-2"><em>Pomoxis annularis</em></p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Dark spots in 7-8 vertical bars along sides</li>
                  <li>Tolerates murkier, warmer water</li>
                  <li>Common in rivers and turbid reservoirs</li>
                  <li>More elongated body shape</li>
                  <li>5-6 dorsal spines</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Both species reach 10-14 inches in most waters. Trophy crappie push 17-19 inches and weigh 3-4 lbs. The world record for each species is over 5 lbs. For most fishing purposes, the two species are interchangeable.
            </p>
          </div>
        </section>

        {/* Spawn Timing */}
        <section aria-label="Spring spawn timing and location" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hit the Spawn Window — Best Action of the Year</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When water temperature reaches 55-65 degrees F, crappie move from deep open water to shallow areas to spawn. This happens from March through May depending on your location. Southern states see it in early March. Northern states may not hit spawn conditions until late April or May.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              During spawn, crappie concentrate in 2-6 feet of water near structure. They build nests on hard or sandy bottom and guard the nest aggressively. This is when crappie are the most predictable and accessible of the entire year.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Good spawn locations include:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 list-disc list-inside">
              <li>Flooded brush and timber near the bank</li>
              <li>Dock pilings in 2-4 feet of water</li>
              <li>Stumps and submerged logs in coves</li>
              <li>Riprap banks on reservoirs</li>
              <li>Any shallow flat with hard bottom near deeper water</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              A good rule: check the shallows slowly and look for nests. Crappie nest beds are often visible in clear water. A spawning crappie will not move far from the nest.
            </p>
          </div>
        </section>

        {/* Dock Fishing */}
        <section aria-label="Dock fishing technique" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Work the Docks and Find Crappie Year-Round</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              After spawn, crappie school up under docks and other overhead structure. Docks create shade. Shade attracts baitfish. Baitfish attract crappie. This pattern holds from June through October in most parts of the country.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The technique is simple. Drop a 1/32 or 1/16 oz tube jig straight down through the gaps in the dock boards. Let it fall slowly. Most strikes come on the fall. If the jig reaches the bottom with no strike, pull it up a foot and let it fall again.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Use 4-lb monofilament or light fluorocarbon. The thin line drops more naturally and spooks fish less in clear water. A 6-7 foot light action spinning rod gives you the sensitivity to feel soft crappie strikes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Shaded docks on the north side of a lake fish best on hot summer days. Move systematically from dock to dock. If you catch one crappie, drop back in the same spot. They school, so there are almost always more.
            </p>
          </div>
        </section>

        {/* Tube Jig vs. Live Minnow */}
        <section aria-label="Tube jigs vs live minnows for crappie" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pick the Right Bait for the Water Temperature</h2>
            <div className="grid sm:grid-cols-2 gap-5 mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Tube Jig</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>1/32 to 1/8 oz, 1.5-2 inch tube</li>
                  <li>Best colors: chartreuse, white, pink, pink and white</li>
                  <li>Cheaper and easier to use than live bait</li>
                  <li>Good in warm water when fish are active</li>
                  <li>Drop straight down or cast and retrieve slowly</li>
                  <li>Ideal for dock fishing and vertical jigging</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Live Minnow</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>1-2 inch shiners or fathead minnows</li>
                  <li>Often more effective in cold water</li>
                  <li>Use a small slip float to suspend minnow at depth</li>
                  <li>Hook through the back or lips for longer minnow life</li>
                  <li>More effective when crappie are lethargic</li>
                  <li>Great option for beginners fishing from shore</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              In warm water conditions during spring spawn and summer activity, tube jigs match live minnows almost perfectly. In cold water below 50 degrees F, a live minnow often outperforms artificial by a wide margin because it moves naturally and creates vibration that draws sluggish fish.
            </p>
          </div>
        </section>

        {/* Equipment */}
        <section aria-label="Gear and equipment recommendations" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Light Gear, Simple Setup — Under $40 and Ready to Fish</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Crappie fishing is one of the most accessible forms of freshwater fishing. You do not need expensive gear to catch a lot of fish.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Rod:</strong> 6-7 ft light action spinning rod. Longer rods help you reach under docks without spooking fish.</li>
              <li><strong>Reel:</strong> Any light spinning reel. 1000-2500 size.</li>
              <li><strong>Line:</strong> 4-8 lb monofilament or 6-10 lb braid with a 4-6 lb fluorocarbon leader.</li>
              <li><strong>Hooks:</strong> Size 1 or 1/0 for live minnows. Small jig heads (1/32 to 1/8 oz) for tube jigs.</li>
              <li><strong>Float:</strong> A small slip float for minnow fishing. Adjust depth so the minnow is just above where fish are holding.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              A basic crappie setup costs under $40. Kids learn to fish on crappie because the gear is light, bites are frequent in spring, and the fish are big enough to be exciting but forgiving enough for beginners.
            </p>
          </div>
        </section>

        {/* Edibility */}
        <section aria-label="Eating crappie, flavor and preparation" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Catch Them in the Morning, Eat Them by Dinner</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Crappie are among the best-eating freshwater fish in North America. The meat is white, firm, and flaky with a mild flavor that does not taste strongly fishy. Most anglers fillet crappie, dredge in seasoned cornmeal or flour, and fry in hot oil. The result is excellent.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Crappie populations recover quickly because they reproduce in large numbers. Most states allow daily bag limits of 25-30 fish with a 9-10 inch minimum size. Keeping fish from a healthy water body is sustainable and encouraged.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A crappie fry in the spring is a tradition across much of the South and Midwest. Catch them in the morning, clean them by noon, and eat by dinner. It is hard to beat.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="App download call to action" className="py-14 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Crappie school tight. Log the spot and you will find them there again.
            </h2>
            <p className="text-gray-600 mb-6">
              Record date, depth, water temp, and lure color in BaitCastCatch after each trip. Over a season you see exactly which docks and coves hold fish — and at what depth and water temp they bite. Next spring you are not starting over. You already know where to go. Free download, no subscription.
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
                { href: '/largemouth-bass', label: 'Largemouth Bass Guide' },
                { href: '/smallmouth-bass', label: 'Smallmouth Bass Guide' },
                { href: '/trout-fishing', label: 'Trout Fishing Guide' },
                { href: '/walleye-fishing', label: 'Walleye Fishing Guide' },
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
