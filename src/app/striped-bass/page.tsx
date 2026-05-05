import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Striped Bass — Coastal vs. Landlocked, World Record & Fishing Guide | BaitCastCatch',
  description:
    'The striped bass guide: anadromous biology, Hudson River and Chesapeake Bay runs, landlocked striper in freshwater reservoirs, world record (81 lbs 14 oz), and size limit overview.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Striped Bass — Coastal vs. Landlocked, World Record & Fishing Guide',
      description:
        'The striped bass guide: anadromous biology, Hudson River and Chesapeake Bay runs, landlocked striper in freshwater reservoirs, world record (81 lbs 14 oz), and size limit overview.',
      url: 'https://www.baitcastcatch.com/striped-bass',
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
          name: 'Striped Bass',
          item: 'https://www.baitcastcatch.com/striped-bass',
        },
      ],
    },
  ],
};

export default function StripedBassPage() {
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
              Striped Bass
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Striped bass exist in two very different worlds. Coastal fish migrate hundreds of miles through tidal rivers each spring. Landlocked fish pack into reservoirs and chase shad year-round. This guide explains both — so you know where to find them and how to fish them wherever you are.
            </p>
          </div>
        </section>

        {/* Species Profile */}
        <section aria-label="Species profile and identification" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Know Your Target Before You Cast</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Striped bass (<em>Morone saxatilis</em>) have a bright silver body crossed by 7-8 bold dark horizontal stripes. The stripes run from behind the gill plate straight to the tail. You cannot miss them.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Striped bass are the largest member of the temperate bass family. They are not closely related to largemouth or smallmouth bass. Those species belong to the sunfish family (Centrarchidae). Stripers belong to Moronidae, along with white bass and white perch.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Adult coastal stripers routinely reach 20-40 lbs. Trophy fish push 50-60 lbs. They are built for open water and strong current, which makes them powerful fighters on the right tackle.
            </p>
          </div>
        </section>

        {/* Two Populations */}
        <section aria-label="Coastal and landlocked populations" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Two Populations, Two Completely Different Approaches</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Anadromous (Coastal) Striped Bass</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Anadromous means the fish are born in freshwater, migrate to the ocean to grow, and return to freshwater rivers each spring to spawn. Striped bass do exactly this.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The Chesapeake Bay is the single most important spawning ground on the Atlantic Coast. About 70-80 percent of all Atlantic coastal stripers are born in the Chesapeake and its tributaries. The Potomac, Susquehanna, and Choptank rivers are key spawning rivers inside the bay.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The Hudson River in New York is the other major spawning system. Hudson River stripers spawn in April and May when the river warms. Anglers line the banks at West Point, Newburgh, and Kingston during the spring run.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  After spawning, adult fish migrate north along the coast. By summer, large schools of stripers feed off the coasts of New Jersey, New York, Connecticut, Rhode Island, and Massachusetts. They follow bait, particularly bunker (menhaden), along the coast.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Landlocked Striped Bass</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Striped bass were stocked in freshwater reservoirs starting in the 1940s. The fish adapted and now sustain wild populations in many inland waters. They never see the ocean and spend their entire lives in the reservoir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Major landlocked striper fisheries include the Santee-Cooper lakes in South Carolina (one of the original landlocked populations), Lake Texoma on the Texas and Oklahoma border, Lake Hartwell in Georgia and South Carolina, and many Tennessee Valley Authority reservoirs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Landlocked stripers grow large on shad. They school tightly and can be found on the surface chasing bait in summer and fall. When stripers are "busting" bait on the surface, anglers can catch dozens of fish in a short window.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* World Record */}
        <section aria-label="World record striper" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Benchmark: 81 Lbs 14 Oz from Shore in 2011</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gregory Myerson caught an 81 lb 14 oz striped bass from Long Island Sound in Connecticut on August 4, 2011. He was fishing from shore, which makes the record even more remarkable. Shore-caught fish this large are almost unheard of.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Connecticut coast has produced several very large stripers because the fish congregate there in late summer to feed on the abundant bait. Myerson used live eels, the preferred bait for trophy-sized stripers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Most anglers targeting coastal stripers are happy to land a 20-lb fish. Anything over 40 lbs is called a "cow" and represents a milestone catch for even experienced striper anglers.
            </p>
          </div>
        </section>

        {/* Fishing Techniques */}
        <section aria-label="Best fishing techniques for striped bass" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Match the Method to Where Your Fish Are</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Live Bait for Coastal Stripers</h3>
                <p className="text-gray-700 leading-relaxed">
                  Live bunker (menhaden) is the gold standard for large coastal stripers. Hook a bunker through the back just behind the dorsal fin. Use a fish finder rig with a 3-5 oz sinker. Fish it near the bottom in tidal rivers and coastal inlets. Live eels are the top choice at night when big fish feed in the shallows.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Bucktail Jig for Landlocked Fish</h3>
                <p className="text-gray-700 leading-relaxed">
                  A 1-3 oz bucktail jig in white or chartreuse fished at the depth where fish are holding on a sonar reading is a proven landlocked striper technique. Let the jig fall to the school, pop it, let it fall again. When fish are at the surface busting bait, cast a bucktail or topwater plug directly into the boil.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Trolling Umbrella Rigs</h3>
                <p className="text-gray-700 leading-relaxed">
                  Trolling is effective for covering water and finding schools of coastal stripers. Umbrella rigs (multi-arm wire rigs with shad bodies) mimic a school of baitfish. Troll at 4-6 mph in open water or along rip lines where cold and warm water meet.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Chunk Bait from Shore at Night</h3>
                <p className="text-gray-700 leading-relaxed">
                  Shore fishing with chunk bunker or clam on a fish finder rig, cast to the edge of a tidal rip, produces large fish after dark. This is an accessible technique for anglers without a boat. The surf along the Northeast coast at night is excellent striped bass territory from May through October.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Spring Runs */}
        <section aria-label="Spring river runs and timing" className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Time the Spring Run Right — Fish Stack Up Fast</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The striped bass spring run is one of the most anticipated fishing events in the Northeast each year. Starting in March, fish leave the ocean and move into tidal rivers to spawn. The Hudson River run peaks in April and May. The Connecticut River, Delaware River, and Chesapeake Bay tributaries all have significant runs.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Shore fishing during the run can be exceptional. Fish stack up in pools below dams and at river bends where current slows. Shad and herring are moving up the same rivers at the same time, and stripers follow them.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Smaller "schoolie" stripers (fish under 28 inches) make up the majority of what anglers catch during the run. Larger fish move through too, but in smaller numbers. Handle all stripers carefully during spawn season, and follow your state slot limit rules closely.
            </p>
          </div>
        </section>

        {/* Regulations */}
        <section aria-label="Size limits and conservation" className="py-14 px-4" style={{ backgroundColor: '#EFF6FF' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fish Legal: Slot Limits Change — Check Before You Launch</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Coastal striped bass are managed by the Atlantic States Marine Fisheries Commission. Most states along the Atlantic Coast now use slot limits, where only fish within a specific size range may be kept. In many states the slot is around 28-35 inches, though this changes regularly based on stock assessments.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Daily bag limits are typically 1-2 fish per angler in coastal states. Some states have reduced to catch and release only during spawning seasons to protect recovering populations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Landlocked striper regulations vary widely by state and by reservoir. Some lakes have no slot limit; others protect large fish. Always check the state wildlife agency for the exact body of water you plan to fish.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="App download call to action" className="py-14 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Striper fishing is about timing. Log the details so you nail it next season.
            </h2>
            <p className="text-gray-600 mb-6">
              Record size, location, bait, tide phase, and water temp for every fish in BaitCastCatch. After one season of entries you stop guessing when the run peaks and what the fish are eating — and every trip to your striper water becomes productive instead of a hope. Free download, no subscription.
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
