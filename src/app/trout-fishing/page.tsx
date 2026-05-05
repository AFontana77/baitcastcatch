import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trout Fishing — Rainbow, Brown & Brook Trout Guide | BaitCastCatch',
  description:
    'The trout fishing guide: three main US species (rainbow, brown, brook), stocked vs. wild trout differences, PowerBait for hatchery fish, catch-and-release best practices, and regulation overview.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Trout Fishing — Rainbow, Brown & Brook Trout Guide',
      description:
        'The trout fishing guide: three main US species (rainbow, brown, brook), stocked vs. wild trout differences, PowerBait for hatchery fish, catch-and-release best practices, and regulation overview.',
      url: 'https://www.baitcastcatch.com/trout-fishing',
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
          name: 'Trout Fishing',
          item: 'https://www.baitcastcatch.com/trout-fishing',
        },
      ],
    },
  ],
};

export default function TroutFishingPage() {
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
              Trout Fishing
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Stocked trout and wild trout need completely different approaches. Most anglers treat them the same and catch far fewer fish than they should. This guide breaks down the three main species and the right technique for each situation — so you spend more time catching and less time wondering why nothing is biting.
            </p>
          </div>
        </section>

        {/* Three Main Species */}
        <section aria-label="Three main trout species in the United States" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Know Which Trout You Are After Before You Rig Up</h2>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Rainbow Trout</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The rainbow trout (<em>Oncorhynchus mykiss</em>) is the most widely stocked trout in the United States. Originally native to the Pacific Coast from Alaska to Northern California, it has been introduced to all 50 states and dozens of countries worldwide.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The body is silver to olive-green with a pink or red stripe running along the lateral line, plus black spots on the body, dorsal fin, and tail. Hatchery rainbows are often paler and fatter than wild fish, which are leaner and more colorful.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Rainbow trout are the classic "put and take" fish. Hatcheries raise millions each year and stock them in streams and lakes. Many state programs stock weekly during trout season. These fish are easy to catch and available to almost every angler in the country.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Brown Trout</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Brown trout (<em>Salmo trutta</em>) were introduced from Europe and have naturalized in cold-water streams across much of the US. They are the most wary and difficult to catch of the three common species.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The body is brown to golden-brown with red and black spots, each surrounded by a pale halo. Adult fish in good water develop bright yellow-gold flanks that are among the most beautiful of any freshwater fish.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Brown trout feed more at night than rainbow or brook trout. They hold in deeper pools and undercut banks during the day and move to feed at dusk and after dark. Large brown trout eat other fish, including smaller trout, and will take big streamers and night crawlers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Many fly anglers consider a large wild brown trout in a technical tailwater or limestone spring creek to be the highest-difficulty target in freshwater fishing. The combination of wariness, selective feeding, and difficult water makes them a challenging and rewarding fish.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Brook Trout</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The brook trout (<em>Salvelinus fontinalis</em>) is technically a char, not a true trout. Despite the name, it is more closely related to lake trout and Arctic char than to rainbow or brown trout. It is the only trout species native to the eastern US, and native to cold mountain streams from Georgia to Labrador.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Brook trout are visually stunning. The olive back is marked with pale worm-like patterns called vermiculations. The sides show red spots with blue halos. The lower fins are red-orange with a distinctive black-and-white edge, which no other trout has.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Brook trout require the coldest, cleanest water of the three main species. Water temperatures above 65 degrees F stress them quickly. Siltation and poor land use have eliminated brook trout from much of their original range. Where brookies exist, the water is excellent.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Most stream brook trout run 6-10 inches. Fish over 12 inches from a wild stream are exceptional. Brook trout in large lakes (Great Lakes and certain Canadian lakes) can reach 10+ lbs, but stream fish are small and fast in cold mountain water.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stocked vs. Wild */}
        <section aria-label="Stocked trout vs wild trout differences" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Match Your Approach to the Fish in Front of You</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The two situations call for different approaches. Treating them the same is the most common mistake new trout anglers make.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mb-6">
              <div className="bg-white rounded-xl p-5 border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-3">Stocked Trout</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Raised on pellets, so they eat floating bait</li>
                  <li>Less wary, easier to approach</li>
                  <li>Often stocked in accessible public areas</li>
                  <li>Respond very well to PowerBait</li>
                  <li>Intended to be kept and eaten</li>
                  <li>Typically planted weekly during trout season</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-3">Wild Trout</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Feed on insects, nymphs, and small fish</li>
                  <li>Very wary, spook easily from vibration and shadow</li>
                  <li>Hold in specific lies: deep pools, current breaks</li>
                  <li>Require finesse presentations</li>
                  <li>Often catch-and-release required by regulation</li>
                  <li>The most challenging and rewarding trout fishing</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Many streams have both stocked and wild sections. Stocked fish are usually in the easily accessible lower sections. Wild fish are upstream, often in harder-to-reach water that fewer people fish.
            </p>
          </div>
        </section>

        {/* PowerBait */}
        <section aria-label="PowerBait setup for stocked trout" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Catch More Stocked Trout with the Right Setup</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              PowerBait is a floating dough bait from Berkley. It works specifically on hatchery trout because those fish were raised on floating pellets. They are conditioned to eat food that floats, and PowerBait mimics exactly that.
            </p>
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="font-bold text-blue-700 text-lg leading-tight">1.</span>
                <span>Tie a size 10 or 12 treble hook to 4-6 lb monofilament using a Palomar knot.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-700 text-lg leading-tight">2.</span>
                <span>Add a small barrel swivel 18 inches above the hook, then add a 1/4 to 1/2 oz sliding egg sinker above the swivel. The sinker slides, so a striking fish feels no resistance.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-700 text-lg leading-tight">3.</span>
                <span>Take a pea-sized ball of PowerBait (chartreuse, rainbow, or salmon egg colors all work) and mold it tightly around the treble hook, covering all three points. Press it together until it forms a smooth ball.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-700 text-lg leading-tight">4.</span>
                <span>Cast to open water 20-30 feet from shore. The sinker sinks to the bottom. The PowerBait floats up 18 inches above the bottom, right in front of fish cruising through.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-700 text-lg leading-tight">5.</span>
                <span>Set the rod in a forked stick or rod holder. Wait for the tip to bend. Strike and reel.</span>
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-4">
              This setup catches stocked rainbow trout consistently. It does not work as well on wild fish, which have never eaten pellets and ignore floating dough.
            </p>
          </div>
        </section>

        {/* Catch and Release */}
        <section aria-label="Catch and release best practices for wild trout" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Release Wild Trout Right — Keep the Fishery Healthy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wild trout populations are fragile. Many wild trout streams have catch-and-release regulations for good reason. Even on waters without that rule, releasing wild fish protects the resource and keeps quality fishing available.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Use barbless hooks.</strong> Crimp the barb with pliers before you fish. Hook removal takes seconds and causes far less damage.</li>
              <li><strong>Wet your hands</strong> before touching the fish. Dry hands strip the protective slime coat.</li>
              <li><strong>Keep the fish in the water</strong> as much as possible during release. Do not hold it out for photos longer than 10 seconds.</li>
              <li><strong>Point the fish upstream</strong> and hold it gently until it swims away on its own. Do not drop it back in or toss it.</li>
              <li><strong>Do not squeeze the fish</strong> or put fingers in the gills. Support the body from below.</li>
              <li><strong>Avoid fishing in water above 68 degrees F.</strong> Warm water stresses trout and reduces survival rates after release.</li>
            </ul>
          </div>
        </section>

        {/* Regulations */}
        <section aria-label="Trout regulations and stream rules" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fish Legal: Trout Rules Vary by Stream, Not Just State</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trout fishing regulations are more complex than bass or panfish rules. Many waters have special restrictions beyond the standard statewide license and bag limit.
            </p>
            <ul className="space-y-3 text-gray-700 mb-4">
              <li><strong>Catch and release only:</strong> Many wild trout streams, especially designated trophy trout waters, require you to release all fish.</li>
              <li><strong>Artificial lures only:</strong> Some sections ban bait entirely, including PowerBait and worms. Only flies and artificial lures are allowed.</li>
              <li><strong>Fly fishing only:</strong> A smaller category, but some stretches are restricted to fly fishing specifically.</li>
              <li><strong>No-kill zones:</strong> Certain pools or sections within a stream may be marked as no-kill even when the rest of the stream allows harvest.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Always read the specific regulation pamphlet for your state, and check for any additional rules on the exact stream or section you plan to fish. Regulations are different by water body, not just by state.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="App download call to action" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Trout fishing rewards anglers who pay attention to details.
            </h2>
            <p className="text-gray-600 mb-6">
              Log species, method, water temp, and stream conditions for every outing in BaitCastCatch. Over a season you see exactly which water holds fish and which presentations work in each condition — so you walk into your next stretch of stream with confidence, not a guess. Free download, no subscription.
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
                { href: '/smallmouth-bass', label: 'Smallmouth Bass Guide' },
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
