import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Walleye Fishing — Why They\'re Hard to Catch & How to Fix It | BaitCastCatch',
  description:
    "The walleye fishing guide: the biology behind their low-light feeding behavior, the Lindy rig, jig-and-minnow technique, Great Lakes populations, size limits, and why walleye are the most sought-after eating fish in the Midwest.",
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: "Walleye Fishing — Why They're Hard to Catch & How to Fix It",
      description:
        'The walleye fishing guide: the biology behind their low-light feeding behavior, the Lindy rig, jig-and-minnow technique, Great Lakes populations, size limits, and why walleye are the most sought-after eating fish in the Midwest.',
      url: 'https://www.baitcastcatch.com/walleye-fishing',
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
          name: 'Walleye Fishing',
          item: 'https://www.baitcastcatch.com/walleye-fishing',
        },
      ],
    },
  ],
};

export default function WalleyeFishingPage() {
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
              Walleye Fishing
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Most anglers fish midday and catch nothing. Walleye anglers know better. This guide explains why walleye are hard to catch and exactly how to fix that problem.
            </p>
          </div>
        </section>

        {/* The Walleye Secret */}
        <section aria-label="Why walleye are hard to catch: the biology" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Real Reason Walleye Are Hard to Catch</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Walleye have a layer of cells behind their retina called a tapetum lucidum. This layer reflects light back through the retina, amplifying available light. The same structure is in cat eyes, and it is why both glow when a light hits them at night.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In a walleye, this means the fish sees clearly in low light when other species are nearly blind. In bright midday sun, the opposite happens: walleye eyes are overwhelmed. They retreat to deep water, shaded areas, or turbid water to avoid the discomfort. They stop feeding.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is why most anglers fish midday and catch nothing. Their timing is off.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-3">The Fix</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>Fish at dusk, dawn, and after dark. These are peak feeding windows.</li>
                <li>On overcast days, fish all day. Clouds cut light and walleye feed throughout the day in low-light conditions.</li>
                <li>Fish in stained or tannic water where light penetration is reduced. Walleye feel comfortable in those conditions and feed more actively.</li>
                <li>If you must fish midday in clear water, go deep where light intensity drops.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Species Profile */}
        <section aria-label="Walleye species profile and identification" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Species Profile</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The walleye (<em>Sander vitreus</em>) is olive to gold in color with a pale belly. The eyes are large and glassy. When a light hits a walleye's eye in the dark, the tapetum lucidum reflects a bright golden glow. This is how the fish got its name.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Walleye are the largest member of the perch family and are not related to bass or trout. They are native to Canada and the northern US, including the Great Lakes basin, and the Missouri and Ohio River systems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The world record walleye weighed 25 lbs. It was caught by Mabry Harper at Old Hickory Lake in Tennessee in 1960. Most walleye caught by anglers run 1-4 lbs. A 7-lb walleye is a notable fish. Anything pushing 10 lbs is a rare trophy.
            </p>
          </div>
        </section>

        {/* Where They Live */}
        <section aria-label="Walleye habitat and major fisheries" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Great Lakes and Midwest Fisheries</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lake Erie is the most productive walleye fishery in the world. The western basin of Lake Erie holds enormous populations of walleye and supports a major commercial fishing industry in addition to a massive sport fishery. Ohio, Michigan, Pennsylvania, and New York anglers all target Lake Erie walleye.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Walleye is the state fish of Minnesota. The state has thousands of lakes with strong walleye populations, and fishing for walleye is deeply embedded in Minnesota culture. Lake of the Woods on the Minnesota and Canadian border is one of the most famous walleye lakes in the world.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Other major walleye fisheries include Lake Winnebago in Wisconsin, the Missouri River system through the Dakotas, and the reservoir chain along the Missouri River (Lake Oahe, Lake Sakakawea, Fort Peck).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Walleye have been stocked widely outside their native range. They now exist in many Southern and Western reservoirs where they were not originally found.
            </p>
          </div>
        </section>

        {/* Three Techniques */}
        <section aria-label="Three primary walleye fishing techniques" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Three Techniques That Catch Walleye</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">1. Lindy Rig with Live Bait</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The Lindy rig (also called a live bait rig) is the most reliable walleye technique in the country. The key component is a walking sinker: a long, flat sinker with a hole through it that allows the line to slide freely. This means a walleye can pick up the bait and feel almost no resistance before you set the hook.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Slide the walking sinker on the main line. Tie a small barrel swivel below it. Attach 18-36 inches of 8-10 lb fluorocarbon leader to the swivel. Tie a size 6-8 hook at the end.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Bait the hook with a live nightcrawler (hook through the nose end) or a live minnow (hook through the back). Drag the rig slowly along the bottom as the boat drifts or motors at 0.5-1 mph. Feel for bottom contact. When a walleye picks up the bait, free-spool 5-10 seconds, then reel tight and set the hook.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">2. Jig and Minnow</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A 1/8 to 3/8 oz round-head jig tipped with a live or frozen minnow is the most versatile walleye lure. Color matters more for walleye than for many fish: chartreuse, pink, and orange jig heads are proven in stained water; white and yellow work in clearer conditions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Fish it vertically. Lower the jig to the depth where fish are holding on sonar, 10-20 feet in most cases. Lift the jig one foot and let it fall back. The minnow kicks on the fall. Strikes come mostly on the drop.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In rivers, cast upstream and drift the jig with the current along the bottom. Walleye hold in current breaks behind rocks, in deep holes, and along the seam where fast water meets slow water.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">3. Trolling Crankbaits</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Trolling covers water fast and is excellent for finding walleye schools on large lakes. Deep-diving crankbaits like the Rapala Deep Tail Dancer, Salmo Hornet, or Berkley Flicker Shad are all productive. Troll at 1.5-2.5 mph along depth contour lines.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Run the lures at the depth where walleye are suspended or holding. Use a line counter reel to repeat the exact amount of line that produced fish. Color preferences vary by water clarity: natural shad colors work in clear water; brighter colors like fire tiger or orange work in stained water.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timing */}
        <section aria-label="Best time of day and seasonal timing for walleye" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Fish</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Time of day matters more for walleye than for almost any other fish. The single best adjustment most anglers can make is to start fishing at dusk and fish through the first hour of dark. Walleye move shallow at low light and feed aggressively.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dawn is the second window. Fish move back to shallower feeding areas from their daytime deep holding spots in the half hour before and after sunrise.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Seasonally, spring is a top period. Walleye spawn in March and April in most of their range when water hits 38-44 degrees F. They move shallow to rocky or gravel areas and feed actively before, during, and just after the spawn. Post-spawn walleye are hungry and aggressive.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Fall is the second peak. Cooling water and active baitfish draw walleye into shallower areas. October fishing on many Midwestern lakes rivals spring in terms of fish activity.
            </p>
          </div>
        </section>

        {/* Edibility */}
        <section aria-label="Walleye as table fare" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Best-Eating Freshwater Fish in the Midwest</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Walleye is widely considered the best-eating freshwater fish in North America among Midwesterners. The meat is white, firm, flaky, and has almost no fishy taste. It holds together well when cooked and does not fall apart in the pan.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The walleye fry is a cultural institution in Minnesota, Wisconsin, and throughout the Midwest. VFW halls, church basements, and lakeside restaurants all serve walleye fish fries, usually on Fridays. Dredge in flour or cornmeal, fry in butter or oil, serve with tartar sauce. Simple and excellent.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Most states set minimum size limits of 15-18 inches and daily bag limits of 3-6 fish. Some trophy walleye waters have slot limits that protect large fish (for example, fish between 15 and 20 inches must be released, while fish below or above that slot may be kept). Check regulations for the specific water you plan to fish.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="App download call to action" className="py-14 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Log your walleye catches in BaitCastCatch.
            </h2>
            <p className="text-gray-600 mb-6">
              Track the time of day, water depth, technique, and water clarity for every fish. Build a personal data set that shows exactly when and how walleye feed on your home water. Free download, no subscription.
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
