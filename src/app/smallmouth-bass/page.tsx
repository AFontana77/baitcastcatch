import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smallmouth Bass — Species Guide, Record & Fishing Techniques | BaitCastCatch',
  description:
    'The complete smallmouth bass guide: world record (11 lbs 15 oz), river vs. lake habitat, seasonal patterns, and the techniques that catch the hardest-fighting bass pound for pound.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Smallmouth Bass — Species Guide, Record & Fishing Techniques',
      description:
        'The complete smallmouth bass guide: world record (11 lbs 15 oz), river vs. lake habitat, seasonal patterns, and the techniques that catch the hardest-fighting bass pound for pound.',
      url: 'https://www.baitcastcatch.com/smallmouth-bass',
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
          name: 'Smallmouth Bass',
          item: 'https://www.baitcastcatch.com/smallmouth-bass',
        },
      ],
    },
  ],
};

export default function SmallmouthBassPage() {
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
              Smallmouth Bass
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Smallmouth bass live in cold, clear water and fight harder per pound than almost anything in freshwater. This guide covers where they hold, how to read their seasonal behavior, and which techniques produce — so you can target them with a plan instead of guessing.
            </p>
          </div>
        </section>

        {/* Species Profile */}
        <section aria-label="Species profile and identification" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Know Your Target Before You Cast</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The smallmouth bass (<em>Micropterus dolomieu</em>) is brown to olive-brown with 8-12 dark vertical bars running down its sides. This bar pattern is the key visual difference from the largemouth, which shows a horizontal stripe instead.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The jaw ends below the eye. This is the fastest ID check in the field. Largemouth jaw goes past the eye; smallmouth jaw stops below it.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Many bass anglers call smallmouth "the hardest-fighting freshwater fish in North America, pound for pound." A 3-lb smallmouth will test your gear in a way a 3-lb largemouth will not. They run deep, make strong sustained runs, and jump multiple times during the fight.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-3">Smallmouth vs. Largemouth: Quick Reference</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Jaw:</strong> Smallmouth jaw ends below the eye. Largemouth jaw goes past the eye.</li>
                <li><strong>Body pattern:</strong> Smallmouth has vertical dark bars. Largemouth has a horizontal stripe.</li>
                <li><strong>Water preference:</strong> Smallmouth needs cool, clear, rocky water (65-72 degrees F). Largemouth tolerates warm, murky conditions.</li>
                <li><strong>Record weight:</strong> Smallmouth record is 11 lbs 15 oz. Largemouth record is 22 lbs 4 oz.</li>
                <li><strong>Fight quality:</strong> Smallmouth pulls harder per pound. Largemouth jumps more and is heavier overall.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* World Record */}
        <section aria-label="World record and trophy fish" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Benchmark: 11 Lbs 15 Oz Since 1955</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              David Hayes caught a smallmouth bass weighing 11 lbs 15 oz on July 9, 1955, at Dale Hollow Lake on the Kentucky and Tennessee border. The record has held for over 70 years.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dale Hollow is still known as one of the best smallmouth lakes in the country. Cold, clear water and a rocky bottom create ideal conditions for big fish.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Most smallmouth caught by anglers run 1-3 lbs. A 5-lb smallmouth is an excellent fish. Anything pushing 6-7 lbs is exceptional and will be remembered for a long time.
            </p>
          </div>
        </section>

        {/* Habitat */}
        <section aria-label="Habitat and water quality requirements" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Clean, Cold Water — Find Smallmouth</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Smallmouth bass require cleaner, cooler water than largemouth. Their preferred range is 65-72 degrees F. Where largemouth can tolerate murky, warm conditions, smallmouth cannot. This makes them a water quality indicator species, meaning their presence tells you the water is clean and cold.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The best smallmouth water in the US includes the Great Lakes system, the Ozark rivers of Missouri and Arkansas, New England cold-water lakes, and clear northern lakes in Minnesota, Wisconsin, and Michigan. The St. Lawrence River system in New York holds excellent populations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Within a water body, look for these features:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 list-disc list-inside">
              <li>Rocky points dropping into deep water</li>
              <li>Boulder fields in 5-15 feet of water</li>
              <li>Gravel beds during spawn</li>
              <li>Current seams where fast water meets slow water in rivers</li>
              <li>Submerged rock piles and ledges</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Smallmouth in rivers behave differently from lake fish. River smallmouth hold in current, use rocks as current breaks, and feed facing upstream. Casting upstream and drifting a bait back down through current seams is the standard river approach.
            </p>
          </div>
        </section>

        {/* Seasonal Patterns */}
        <section aria-label="Seasonal behavior and timing" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fish the Right Spot by Season</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-2">Spring Spawn</h3>
                <p className="text-gray-700 leading-relaxed">
                  Smallmouth spawn slightly earlier than largemouth. The trigger is water temperature reaching 55-60 degrees F, compared to 58-65 degrees F for largemouth. Males sweep nests on gravel or rocky bottom in 3-8 feet of water and guard aggressively until fry disperse.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-2">Summer Activity</h3>
                <p className="text-gray-700 leading-relaxed">
                  Summer smallmouth hold on deep rocky structure during the heat of the day. Fishing is best early and late. In rivers, smallmouth remain active longer into the day because moving water stays cooler. Fast current oxygenates well and keeps fish active.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-2">Fall Feeding</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fall is prime time. Cooling water brings smallmouth into shallower water to feed. Crayfish are active and abundant in fall, and smallmouth gorge on them. Overcast days in September and October can produce exceptional fishing.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-2">Winter Slowdown</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cold water pushes smallmouth to their deepest holding spots. They feed little. Ice fishing for smallmouth is possible in northern states but requires slow presentation and small baits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Techniques */}
        <section aria-label="Fishing techniques and lure selection" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Present the Right Bait and Land More Fish</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tube Jig on Rocky Bottom</h3>
                <p className="text-gray-700 leading-relaxed">
                  A 3-4 inch tube jig in green pumpkin or cinnamon brown is the classic smallmouth lure. Let it fall to the bottom, hop it forward, let it settle. This mimics a crayfish perfectly. Use a 3/16 to 3/8 oz jig head depending on depth. The tube jig catches smallmouth in rivers and lakes year-round.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Drop Shot with Finesse Worm</h3>
                <p className="text-gray-700 leading-relaxed">
                  A 4-6 inch finesse worm on a drop shot rig, fished in 10-20 feet of water over rock, is deadly on pressured smallmouth. The bait hovers in place and barely moves. This works best in summer and early fall when fish are deep and slow.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Crayfish Imitation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Smallmouth eat more crayfish than almost any other forage. A creature bait, crawfish jig, or small crankbait in orange and brown tones works well. Live crayfish under a float is one of the most effective natural baits on the planet for smallmouth.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">River Technique: Upstream Cast and Drift</h3>
                <p className="text-gray-700 leading-relaxed">
                  In rivers, cast upstream at a 45-degree angle. Let the current carry the bait back through the strike zone. Feel for the bump as the bait hops on the rocky bottom. This natural drift presentation often outperforms anything else in moving water.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Topwater and Swimbait</h3>
                <p className="text-gray-700 leading-relaxed">
                  Early morning topwater fishing with a small popper or walk-the-dog bait is excellent in summer. For larger fish, a 4-inch swimbait on a light jig head matches shad and draws aggressive strikes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="App download call to action" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Smallmouth patterns take time to learn. Log them as you go.
            </h2>
            <p className="text-gray-600 mb-6">
              Record water temp, depth, lure, and time of day in BaitCastCatch after each trip. Over a season you build a clear picture of what your water responds to — so next time you arrive at that river bend or rocky point, you already know what to throw. Free download, no subscription.
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
        <section aria-label="Related fishing guides" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6">More Fishing Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: '/largemouth-bass', label: 'Largemouth Bass Guide' },
                { href: '/striped-bass', label: 'Striped Bass Guide' },
                { href: '/crappie-fishing', label: 'Crappie Fishing Guide' },
                { href: '/walleye-fishing', label: 'Walleye Fishing Guide' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block bg-blue-50 rounded-xl px-5 py-4 border border-blue-100 hover:border-blue-300 text-blue-800 font-semibold text-sm transition-colors min-h-[48px] flex items-center"
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
