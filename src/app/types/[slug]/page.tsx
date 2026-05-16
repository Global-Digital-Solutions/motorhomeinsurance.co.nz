import { notFound } from 'next/navigation';
import Link from 'next/link';
import { coverageTypes } from '@/data/coverage-types';
import QuoteForm from '@/components/QuoteForm';

export const dynamicParams = false;

const unsplashImages: Record<string, string> = {
  comprehensive: 'photo-1608161317310-c079ae39d224',
  'third-party-liability': 'photo-1596470693312-9a3686a0af0f',
  'agreed-value': 'photo-1519001896312-85f41baa90a0',
  'market-value': 'photo-1592351763700-b9b35a6465ea',
  'contents-cover': 'photo-1635787501769-10b8e23b3ded',
  'rental-excess-reduction': 'photo-1523987355523-c7b5b0dd90a7',
};

export async function generateStaticParams() {
  return coverageTypes.map((type) => ({
    slug: type.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const type = coverageTypes.find((t) => t.slug === slug);
  if (!type) return;

  return {
    title: `${type.title} | MotorHomeInsurance.co.nz`,
    description: type.description,
  };
}

const typeSpecificContent: Record<string, { features: string[]; whoIsItFor: string; expandedSection: React.ReactNode }> = {
  'comprehensive': {
    features: [
      'Coverage for accidental damage including collisions and impacts',
      'Theft protection 24/7 — at campsites, at home, or in storage',
      'Fire and explosion damage covered',
      'Weather-related damage including storms, hail, and floods',
      'Vandalism and malicious damage protection',
      'Third-party liability up to $20 million',
      'Windscreen and glass cover (often excess-free)',
      'Emergency accommodation costs if motorhome becomes uninhabitable',
    ],
    whoIsItFor: 'Motorhome owners who want maximum peace of mind. Comprehensive cover is ideal if you own a valuable motorhome, travel frequently, or use your motorhome extensively. It\'s the most popular choice among motorhome owners.',
    expandedSection: <>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Is Comprehensive Cover Worth It?</h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Comprehensive motorhome cover costs more than third-party only, but the protection justifies the cost for most owners. Consider that a single claim for theft, fire, or weather damage could cost thousands. Even a small accident repair could exceed your annual premium. For motorhomes valued at $40,000+, comprehensive cover is almost always worth the investment.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Motorhomes are frequently targeted for theft, especially high-value self-contained models and imported vehicles. Weather events can cause significant damage. Accidents happen to careful drivers. Comprehensive cover protects you against all these scenarios, ensuring you're not left facing thousands in out-of-pocket repairs.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Excess-Free Glass Cover — A Popular Add-On</h3>
        <p className="text-slate-700 leading-relaxed">
          Many comprehensive motorhome policies include excess-free or reduced-excess glass cover for windscreens, windows, and mirrors. This is valuable because glass damage is common (stone chips on highways, tree branches at campsites) and repair costs $200-500+ per incident. Excess-free glass means you can claim without paying excess, protecting your windscreen on the road.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Getting the Best Comprehensive Deal</h3>
        <ul className="space-y-3 text-slate-700">
          <li className="flex gap-3"><span className="text-sky-600 font-bold">1.</span> <span>Install a GPS tracker or alarm system — insurers often offer 5-15% discounts for security features</span></li>
          <li className="flex gap-3"><span className="text-sky-600 font-bold">2.</span> <span>Increase your voluntary excess to reduce premium — higher excess means lower cost, so choose wisely</span></li>
          <li className="flex gap-3"><span className="text-sky-600 font-bold">3.</span> <span>Compare multiple providers — comprehensive premiums vary significantly between insurers</span></li>
          <li className="flex gap-3"><span className="text-sky-600 font-bold">4.</span> <span>Bundle policies for multi-policy discounts — motorhome + car + home insurance saves money</span></li>
        </ul>
      </div>
    </>
  },
  'third-party-liability': {
    features: [
      'Legal liability coverage up to $20 million',
      'Protection for damage you cause to other people\'s property',
      'Protection for injury claims against you',
      'Legal costs covered',
      'Most affordable motorhome coverage option',
      'Essential — highly recommended',
    ],
    whoIsItFor: 'Third-party only is suitable if you have an older motorhome with minimal value, want the most budget-friendly option, or are purchasing a second motorhome purely for storage with minimal use. However, most motorhome owners choose comprehensive for better value.',
    expandedSection: <>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Understanding Third-Party Liability</h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Third-party liability protection covers damage or injury your motorhome causes to others while you're driving. If you hit another car, damage a carpark structure, or cause injury to someone, third-party liability pays the costs up to your policy limit (typically $20 million). This is essential protection because you could face massive personal liability without it.
        </p>
        <p className="text-slate-700 leading-relaxed">
          In New Zealand, the Accident Compensation Corporation (ACC) handles personal injury claims, but property damage claims fall directly on you as the motorhome owner. Third-party liability ensures you're protected against these claims.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Liability Limits Explained</h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Standard motorhome policies include third-party liability up to $20 million, which is very comprehensive. This covers almost any scenario you could face. In rare, catastrophic situations, claims could theoretically exceed $20 million, but these are extremely uncommon. The $20 million limit provides excellent protection for typical motorhoming situations.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">When Third-Party Only Is Enough</h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Third-party only might be sufficient if: your motorhome is worth under $10,000, you use it rarely (less than a few times per year), you have alternative cover for the motorhome itself, or you're purchasing a motorhome purely as a second vehicle with minimal investment. However, most motorhome owners choose comprehensive for only slightly more premium but significantly better protection.
        </p>
      </div>
    </>
  },
  'agreed-value': {
    features: [
      'Your motorhome value is fixed upfront in writing',
      'No depreciation arguments at claim time',
      'Certainty of payout for total loss claims',
      'Peace of mind knowing exactly what you\'ll receive',
      'Ideal for newer or high-value motorhomes',
      'Works well for difficult-to-value vehicles',
    ],
    whoIsItFor: 'Agreed value is ideal for newer motorhomes where depreciation is significant, high-value motorhomes over $100,000, motorhomes that are hard to value (custom builds, imports, specialty vehicles), and anyone who wants certainty about their payout. If motorhome value is important to you, agreed value removes uncertainty.',
    expandedSection: <>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Agreed Value vs Market Value — The Key Difference</h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          <strong>Agreed Value:</strong> You and your insurer agree on motorhome value upfront. Written in your policy. If written off, you receive that exact amount. Zero depreciation arguments. Complete certainty.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Market Value:</strong> Insurer pays current market value at claim time. If motorhome has depreciated, you receive less than purchase price. Cheaper premiums but less certainty.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Agreed Value Matters for Motorhome Owners</h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Motorhomes depreciate significantly in their first few years. A motorhome purchased for $80,000 might be worth only $60,000 two years later due to wear, age, and market changes. With market value insurance, if it's written off, you'd receive $60,000, not your purchase price. With agreed value, you'd receive the $80,000 you agreed to, enabling proper replacement.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">How Agreed Value Is Set</h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          At policy start, insurers conduct valuation based on: motorhome make/model/year, current market comparables, condition assessment (you may need a professional inspection), modifications or upgrades, and your proposed value. For new motorhomes, you use purchase price. For older motorhomes, get professional valuations from specialists familiar with that model.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Is Agreed Value Right for You?</h3>
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-2"><span className="text-sky-600 font-bold">✓</span> Choose agreed value if: motorhome is under 5 years old, motorhome value exceeds $60,000, motorhome is difficult to value (import, custom build), you want certainty of payout</li>
          <li className="flex gap-2"><span className="text-slate-600 font-bold">✕</span> Consider market value if: motorhome is older (10+ years), want to minimize premium cost, motorhome is easy to value and fairly priced</li>
        </ul>
      </div>
    </>
  },
  'market-value': {
    features: [
      'Lower premiums than agreed value',
      'Payout reflects actual current value',
      'Straightforward assessment at claim time',
      'No upfront valuation required',
      'Suitable for older motorhomes',
      'Flexible coverage without fixed commitments',
    ],
    whoIsItFor: 'Market value works well for older motorhomes (10+ years), owners prioritizing lower premiums, motorhomes that are easy to value, and those who understand and accept depreciation. If cost is your primary concern and motorhome value is modest, market value offers good value.',
    expandedSection: <>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">How Market Value Is Calculated</h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          At claim time, insurers assess your motorhome\'s market value using: current comparable sales (what similar motorhomes are selling for), motorhome condition and mileage, age and depreciation, any damage history or accident records, and market trends. They may hire an independent assessor to determine value. This value is what they\'ll pay for a total loss claim.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Pros and Cons of Market Value Cover</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="font-semibold text-slate-900 mb-2">Advantages</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>Lower premiums (10-20% cheaper than agreed value)</li>
              <li>No upfront valuation needed</li>
              <li>Reflects actual motorhome value</li>
              <li>Good for older motorhomes where value is clear</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="font-semibold text-slate-900 mb-2">Disadvantages</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>Uncertainty about payout amount</li>
              <li>Depreciation means lower payout than purchase price</li>
              <li>Valuation disputes at claim time possible</li>
              <li>May not cover full replacement cost</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">When Market Value Is the Better Choice</h3>
        <p className="text-slate-700 leading-relaxed">
          Market value is often the better choice if: your motorhome is over 10 years old and values are well-established, you want to minimize annual premium costs, motorhome values in your category are stable and predictable, or you\'re purchasing a second motorhome with minimal value. For budget-conscious motorhome owners, market value can save money while still providing reasonable protection.
        </p>
      </div>
    </>
  },
  'contents-cover': {
    features: [
      'Covers camping gear and accessories inside motorhome',
      'Protects cooking equipment and appliances',
      'Covers bedding, furniture, and personal items',
      'Protection against theft, damage, and weather',
      'Optional add-on to comprehensive cover',
      'Affordable addition to your policy',
    ],
    whoIsItFor: 'Contents cover is essential for motorhome owners who carry valuable camping gear, cooking equipment, electronics, or personal items inside their motorhomes. If you have $5,000+ worth of belongings in your motorhome, contents cover is worthwhile.',
    expandedSection: <>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">What Contents Cover Includes</h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Contents cover protects items stored inside your motorhome including:
        </p>
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-2"><span className="text-sky-600 font-bold">•</span> Camping gear (tents, sleeping bags, cooking equipment)</li>
          <li className="flex gap-2"><span className="text-sky-600 font-bold">•</span> Built-in appliances and fixtures (fridge, cooker, bedding)</li>
          <li className="flex gap-2"><span className="text-sky-600 font-bold">•</span> Electronics (GPS, entertainment systems, laptops)</li>
          <li className="flex gap-2"><span className="text-sky-600 font-bold">•</span> Personal items and clothing</li>
          <li className="flex gap-2"><span className="text-sky-600 font-bold">•</span> Bicycles, kayaks, and outdoor equipment</li>
          <li className="flex gap-2"><span className="text-sky-600 font-bold">•</span> Tools and accessories</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Coverage Limits — What to Watch For</h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Contents cover comes with coverage limits, typically $5,000 to $15,000 depending on your policy. Assess your belongings\' total value — if you have $20,000 worth of equipment, ensure you have adequate limits. Some high-value items may have sub-limits (e.g., electronics capped at $2,000). Check your policy details carefully.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">High-Value Items — Do They Need Separate Cover?</h3>
        <p className="text-slate-700 leading-relaxed">
          If you carry extremely valuable items (jewelry, cameras, high-end electronics), your motorhome contents policy may have sub-limits that don\'t fully cover these items. You may want to schedule high-value items separately or add specific coverage. Discuss with your insurer if you own valuable equipment you\'re bringing in your motorhome.
        </p>
      </div>
    </>
  },
  'rental-excess-reduction': {
    features: [
      'Reduces or eliminates rental motorhome excess',
      'Protects you from high accident liability ($2,500-5,000)',
      'Affordable daily cost ($10-20 per day)',
      'Peace of mind while renting',
      'Essential for holiday motorhome rentals',
    ],
    whoIsItFor: 'Rental excess reduction is ideal for anyone renting a motorhome, whether for a week-long holiday or longer adventure. It\'s especially important if you\'re nervous about accidental damage or sharing driving duties with less experienced drivers.',
    expandedSection: <>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Understanding the Standard Rental Excess</h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          When you rent a motorhome, rental companies include basic insurance but with a significant excess. Standard excess ranges from $1,000 to $5,000, with $2,500 most common. This excess is your liability if the motorhome is damaged while renting. If you accidentally scrape a side, hit a tree, or damage interior appliances, you could face thousands in costs.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">How Rental Excess Reduction Works</h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Rental excess reduction insurance (also called rental decline insurance) covers your excess liability. You purchase this as a daily add-on ($10-20 per day typically). If damage occurs, this insurance pays your excess, leaving you protected. For a week-long rental with $3,000 excess and $15/day coverage, you spend $105 to protect yourself from potential $3,000 costs — excellent value.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Top Rental Companies and Their Excess Policies</h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Major motorhome rental companies include Britz, Maui, Hippie Campers, and Apollo. Most include standard excess of $2,000-3,000 in their rental rate. Excess reduction is offered as optional add-on daily charge. Compare excess reduction costs across rental companies — some offer it cheaper or better coverage than others. Budget excess reduction into your rental motorhome costs upfront.
        </p>
      </div>
    </>
  }
};

export default async function CoverageTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const type = coverageTypes.find((t) => t.slug === slug);

  if (!type) {
    notFound();
  }

  const imageId = unsplashImages[slug] || 'photo-1608161317310-c079ae39d224';
  const imageUrl = `https://images.unsplash.com/${imageId}?w=1920&h=1080&fit=crop`;

  const content = typeSpecificContent[slug] || {
    features: [
      'Comprehensive protection against covered perils',
      'Flexible excess options to suit your budget',
      'Fast and fair claims settlement',
      'Optional add-ons available',
      'Support from licensed brokers',
      'Competitive pricing from multiple providers',
    ],
    whoIsItFor: 'Motorhome owners who want protection tailored to their specific coverage needs and circumstances. Whether you own a campervan, Class A, B or C motorhome, or coach, we can help you find the right coverage level.',
    expandedSection: null
  };

  const keyFeatures = content.features;
  const whoIsItFor = content.whoIsItFor;

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/30" />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/coverage" className="inline-flex items-center gap-2 text-slate-200 hover:text-white font-semibold mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Coverage Guide
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{type.title}</h1>
          <p className="text-xl text-slate-200">{type.description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Details Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding {type.title}</h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                {type.details}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h3>
              <ul className="space-y-3">
                {keyFeatures.map((feature, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-sky-600 font-bold mt-1 flex-shrink-0">✓</span>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expanded Content */}
            {content.expandedSection && (
              <div className="mb-12">
                {content.expandedSection}
              </div>
            )}

            {/* Who Is It For */}
            <div className="mb-12 bg-sky-50 border border-sky-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Who Is This Coverage For?</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                {whoIsItFor}
              </p>
            </div>

            {/* Related Coverage Types */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Coverage Types</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coverageTypes
                  .filter((t) => t.slug !== slug)
                  .slice(0, 2)
                  .map((relatedType) => (
                    <Link
                      key={relatedType.slug}
                      href={`/types/${relatedType.slug}`}
                      className="p-4 border border-slate-200 rounded-lg hover:border-sky-300 hover:shadow-md transition-all group"
                    >
                      <div className="text-2xl mb-2">{relatedType.icon}</div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">{relatedType.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{relatedType.description}</p>
                    </Link>
                  ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Compare?</h3>
              <p className="text-slate-700 mb-6">
                Get quotes and find the right {type.title.toLowerCase()} coverage for your needs.
              </p>
              <Link href="/#quote-form" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-sky-500/25">
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <QuoteForm mode="compact" />

            {/* Info Box */}
            <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">Coverage Type</h4>
              <p className="text-sm text-slate-700 mb-4">{type.description}</p>
              <Link href="/coverage" className="text-sky-600 hover:text-sky-700 font-semibold text-sm inline-flex items-center gap-1">
                View all coverage types <span>→</span>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-8 space-y-3">
              <Link href="/faqs" className="block px-4 py-2 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition-colors text-center font-semibold">
                View FAQs
              </Link>
              <Link href="/coverage" className="block px-4 py-2 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition-colors text-center font-semibold">
                Coverage Guide
              </Link>
              <Link href="/compare" className="block px-4 py-2 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition-colors text-center font-semibold">
                Compare Providers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
