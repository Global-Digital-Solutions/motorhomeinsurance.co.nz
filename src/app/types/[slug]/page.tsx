import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { coverageTypes } from '@/data/coverage-types';
import QuoteForm from '@/components/QuoteForm';

export const dynamicParams = false;

/* ── Local hero image map ── */
const heroImages: Record<string, string> = {
  'comprehensive':            '/hero-motorhome-1.jpg',
  'third-party-liability':   '/hero-motorhome-2.jpg',
  'agreed-value':            '/hero-motorhome-3.jpg',
  'market-value':            '/hero-motorhome-1.jpg',
  'contents-cover':          '/hero-motorhome-2.jpg',
  'rental-excess-reduction': '/hero-motorhome-3.jpg',
  'roadside-assistance':     '/hero-motorhome-1.jpg',
  'storage-cover':           '/hero-motorhome-2.jpg',
};

export async function generateStaticParams() {
  return coverageTypes.map((type) => ({ slug: type.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const type = coverageTypes.find((t) => t.slug === slug);
  if (!type) return {};

  const title = `${type.title} Motorhome Insurance NZ | MotorHomeInsurance.co.nz`;
  const description = `${type.description} Compare NZ providers, understand your options, and get expert broker quotes for ${type.title.toLowerCase()} motorhome cover.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.motorhomeinsurance.co.nz/types/${slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.motorhomeinsurance.co.nz/types/${slug}/`,
      siteName: 'MotorHomeInsurance.co.nz',
      type: 'website',
      images: [{ url: 'https://www.motorhomeinsurance.co.nz/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

/* ── Per-type rich content ── */
const typeSpecificContent: Record<string, {
  features: string[];
  whoIsItFor: string;
  expandedSection: React.ReactNode;
  providerHighlights?: { name: string; note: string }[];
}> = {
  'comprehensive': {
    features: [
      'Accidental damage from collisions and impacts — including single-vehicle accidents',
      'Theft of the motorhome, parts, or accessories 24/7 (campsite, home, or storage)',
      'Fire and explosion damage including LPG system events',
      'Weather-related damage: storms, hail, flooding, fallen trees',
      'Vandalism and malicious damage',
      'Third-party liability up to $20 million',
      'Windscreen and glass cover — often available excess-free',
      'Emergency accommodation if your motorhome is uninhabitable after a covered event',
      'Towing costs to the nearest approved repairer',
    ],
    whoIsItFor: 'Comprehensive cover is the right choice for the majority of New Zealand motorhome owners. It is ideal for motorhomes valued at $30,000 or more, owners who tour frequently or for extended periods, self-contained motorhomes used for freedom camping, and anyone who wants complete financial protection for their investment. If you use your motorhome as a home or have significant contents on board, comprehensive cover is essential.',
    providerHighlights: [
      { name: 'Covi Insurance', note: 'NZMCA\'s preferred partner. Agreed value, excess-free glass, Wings roadside add-on.' },
      { name: 'Star Insure CamperCare', note: 'NZRA roadside included. Comprehensive with flexible excess options.' },
      { name: 'AA Insurance', note: 'AA Roadside included. Strong claims network and nationwide repair coverage.' },
    ],
    expandedSection: (
      <>
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Is Comprehensive Cover Worth the Cost?</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Comprehensive motorhome insurance costs more than third-party only, but for most owners the protection easily justifies the premium. Consider that a single theft claim, fire event, or significant collision repair could cost $10,000–$50,000 or more. Even a minor repair (windscreen replacement, panel damage from a campsite tree branch) can exceed $1,000. Against these risks, annual premiums of $900–$2,000 are modest.
          </p>
          <p className="text-slate-700 leading-relaxed">
            New Zealand motorhomes face specific risks that make comprehensive cover especially important: high-value imports targeted by organised theft rings, Freedom Camping locations in remote areas far from rescue services, and coastal conditions that accelerate corrosion and storm damage. Comprehensive cover addresses all of these scenarios and ensures you are never left facing a major financial loss alone.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Excess-Free Glass Cover — A Valuable Add-On</h3>
          <p className="text-slate-700 leading-relaxed">
            Many comprehensive motorhome policies offer excess-free or reduced-excess glass cover for windscreens, windows, and mirrors. This is valuable because glass damage is among the most common motorhome insurance claims in New Zealand — stone chips from gravel roads, tree branches at campsites, and hail all cause frequent glass damage. Repair costs run $200–$600 per incident. Excess-free glass cover means you can repair chips and cracks without paying excess, keeping your windscreen clear and your no-claims bonus intact.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Tips to Reduce Your Comprehensive Premium</h3>
          <ul className="space-y-4 text-slate-700">
            {[
              'Install a GPS tracker or approved alarm system — specialist insurers often offer 5–15% discounts for monitored security devices.',
              'Increase your voluntary excess — choosing a $1,500 excess instead of $500 can reduce your annual premium by 15–25%. Choose an excess you could comfortably pay if needed.',
              'Compare specialist vs mainstream insurers — Covi and Star Insure are designed for motorhomes and typically offer better cover at competitive premiums compared to generalist insurers.',
              'Bundle policies — insuring your car, home, and motorhome with one insurer often attracts multi-policy discounts of 5–15%.',
              'Store securely — insurers offer lower premiums for motorhomes stored in approved, secured facilities rather than on-street or open driveway storage.',
            ].map((tip, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-sky-600 font-bold flex-shrink-0">{i + 1}.</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </>
    ),
  },

  'third-party-liability': {
    features: [
      'Legal liability coverage up to $20 million per event',
      'Property damage claims from third parties you are responsible for',
      'Legal defence costs covered',
      'Damage to other vehicles, fences, structures, and infrastructure',
      'Most affordable motorhome coverage option',
      'Included as standard in all comprehensive motorhome policies',
    ],
    whoIsItFor: 'Third-party only cover suits owners of low-value motorhomes (under $10,000) who cannot justify comprehensive premiums, or owners who have an older second motorhome in storage with minimal road use. However, because comprehensive premiums are only marginally higher, most NZ motorhome owners choose comprehensive cover for dramatically better protection.',
    providerHighlights: [
      { name: 'All major NZ insurers', note: 'Third-party liability up to $20 million included in comprehensive policies.' },
      { name: 'ACC (NZ Government)', note: 'Covers personal injury in accidents — third-party insurance covers property damage only.' },
    ],
    expandedSection: (
      <>
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Third-Party Liability Is Non-Negotiable</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            New Zealand has no compulsory third-party property insurance, but the financial consequences of driving uninsured are severe. If your motorhome damages another vehicle, a commercial property, or public infrastructure — even in a minor incident — you are personally liable for all repair costs. A relatively modest accident involving a new car ($30,000–$80,000) or a commercial vehicle could result in a claim that threatens your personal finances for years.
          </p>
          <p className="text-slate-700 leading-relaxed">
            The $20 million third-party liability limit included in standard NZ motorhome policies provides comprehensive protection against even the most extreme scenarios. In practice, claims rarely reach more than a few hundred thousand dollars, but having the full $20 million limit costs nothing extra and provides complete peace of mind.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">How NZ Third-Party Liability Differs from Other Countries</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            In New Zealand, ACC (Accident Compensation Corporation) handles personal injury claims from road accidents through a government-funded no-fault scheme. This means if your motorhome injures another person, they receive medical care and income support through ACC regardless of fault — and they cannot sue you for personal injury damages. This is a significant difference from many other countries.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Your third-party liability insurance therefore only needs to cover property damage — not personal injury — which keeps NZ motorhome insurance premiums relatively affordable compared to countries without a universal accident compensation scheme.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Only vs Comprehensive — The Real Cost Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Factor</th>
                  <th className="px-4 py-3 text-center font-semibold">Third-Party Only</th>
                  <th className="px-4 py-3 text-center font-semibold">Comprehensive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['Annual premium (approx.)', '$300–$600', '$800–$2,000'],
                  ['Covers damage to your motorhome', '✗ No', '✓ Yes'],
                  ['Covers theft', '✗ No', '✓ Yes'],
                  ['Covers weather damage', '✗ No', '✓ Yes'],
                  ['Third-party liability', '✓ Yes', '✓ Yes'],
                  ['Emergency accommodation', '✗ No', '✓ Yes'],
                  ['Glass cover', '✗ No', '✓ Often available'],
                ].map(([factor, tpo, comp], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-800">{factor}</td>
                    <td className="px-4 py-3 text-center text-slate-600">{tpo}</td>
                    <td className="px-4 py-3 text-center text-slate-600">{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    ),
  },

  'agreed-value': {
    features: [
      'Insured value agreed and locked in writing at policy start',
      'No depreciation deductions at claim time for total loss',
      'Certainty of payout — you know exactly what you\'ll receive',
      'No market comparison or valuation disputes at claim time',
      'Ideal for newer, high-value, or hard-to-value motorhomes',
      'Protects your full investment in custom builds and imports',
      'Standard with specialist NZ motorhome insurers (Covi, Star Insure)',
    ],
    whoIsItFor: 'Agreed value is the preferred choice for motorhomes purchased in the last five years, motorhomes valued over $60,000, imported or custom-built motorhomes that are difficult to value on the open market, and any owner who wants absolute certainty about their claim payout. NZMCA members in particular tend to choose agreed value due to the significant values involved in self-contained setups.',
    providerHighlights: [
      { name: 'Covi Insurance', note: 'Agreed value offered as standard. NZMCA\'s preferred insurer, NZI-underwritten.' },
      { name: 'Star Insure CamperCare', note: 'Agreed value available with CamperCare specialist policy.' },
      { name: 'AA Insurance', note: 'Agreed value option available. Best discussed with an AA agent directly.' },
    ],
    expandedSection: (
      <>
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Agreed Value vs Market Value — The Numbers</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Motorhome depreciation in New Zealand is significant. A motorhome purchased for $100,000 new may be worth $75,000 two years later and $55,000 four years after purchase, depending on the model, condition, and market demand. With market value insurance, a total loss after two years pays $75,000 — leaving a $25,000 gap from your original investment. With agreed value (set at purchase price of $100,000), you receive the full agreed amount regardless of when the claim occurs during the policy period.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="font-semibold text-slate-900 mb-2">Premium difference example</p>
            <p className="text-sm text-slate-700">For a $80,000 motorhome: market value premium might be $1,400/year; agreed value premium might be $1,600/year. The extra $200/year buys certainty on a $20,000+ potential depreciation gap. For most owners, this is an obvious investment.</p>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Getting Your Motorhome Valued Correctly</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            For the agreed value to protect you properly, it must accurately reflect your motorhome&apos;s true replacement cost. For new motorhomes, use the purchase price plus accessories and modifications. For used motorhomes, obtain a professional valuation from a specialist familiar with your make and model. NZMCA classifieds, TradeMe, and motorhome dealer valuations are all useful reference points. Ensure your agreed value is reviewed at each renewal — if motorhome market values have changed significantly, your agreed value should be updated accordingly.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">When Agreed Value Makes the Most Sense</h3>
          <ul className="space-y-3 text-slate-700">
            {[
              'Motorhome is less than 5 years old — depreciation is steepest in early years',
              'Motorhome value exceeds $60,000 — larger gap between purchase price and future market value',
              'Imported motorhome — market comparables are harder to establish at claim time',
              'Custom-built or extensively modified motorhome — insurer\'s market valuation may undervalue your investment',
              'Self-contained motorhome with significant habitation upgrades (solar, lithium batteries, water tanks) that add value beyond the base vehicle',
              'Using motorhome as your primary residence (full-time living) where replacement is not optional',
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-sky-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </>
    ),
  },

  'market-value': {
    features: [
      'Lower annual premiums than agreed value (typically 10–20% cheaper)',
      'Payout reflects what similar motorhomes actually sell for at claim time',
      'No upfront professional valuation required',
      'Straightforward and transparent claim process for well-documented models',
      'Good fit for older motorhomes with stable, well-established market values',
      'Available from all major NZ motorhome insurers',
    ],
    whoIsItFor: 'Market value insurance suits owners of motorhomes over 10 years old where depreciation has largely plateaued, owners prioritising the lowest possible premium, and those who understand and accept that their payout may be less than their original purchase price. If your motorhome is worth under $30,000 and values in your category are stable, market value is a pragmatic choice.',
    providerHighlights: [
      { name: 'Tower Insurance', note: 'Market value standard. Competitive premiums for older motorhomes.' },
      { name: 'AMI Insurance', note: 'Market value basis. Good option for older NZ-registered motorhomes.' },
      { name: 'NZI', note: 'Market value available. Underwriter for some specialist policies.' },
    ],
    expandedSection: (
      <>
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">How Market Value Is Assessed in a Claim</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            When a market value motorhome is written off or stolen, your insurer will assess its market value using New Zealand sales data at the time of the claim. This typically involves reviewing current TradeMe listings for comparable models, dealer valuations, industry price guides (such as Glass&apos;s Guide), and recent private sale records. The condition, mileage, service history, and regional demand for your specific model all influence the assessed value.
          </p>
          <p className="text-slate-700 leading-relaxed">
            If you believe the insurer&apos;s market value assessment is too low, you have the right to provide your own market evidence — comparable listings, independent valuations — and request a review. Disputes that cannot be resolved can be escalated to the Insurance and Financial Services Ombudsman (IFSO) at no cost to you.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Market Value Pros and Cons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-semibold text-slate-900 mb-3">Advantages</p>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  'Lower annual premiums (10–20% cheaper than agreed value)',
                  'No upfront valuation required',
                  'Reflects actual motorhome market conditions',
                  'Good for motorhomes with stable, predictable values',
                  'Suitable when minimising cost is the priority',
                ].map((item, i) => <li key={i} className="flex gap-2"><span className="text-green-600 font-bold">+</span>{item}</li>)}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="font-semibold text-slate-900 mb-3">Disadvantages</p>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  'Payout uncertainty — you don\'t know the exact amount until claim time',
                  'Depreciation means payout may be significantly less than purchase price',
                  'Potential for valuation disputes with the insurer',
                  'Market fluctuations can affect payout up or down',
                  'May not fully cover the cost of a like-for-like replacement',
                ].map((item, i) => <li key={i} className="flex gap-2"><span className="text-red-600 font-bold">−</span>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Protecting Your Market Value Payout</h3>
          <p className="text-slate-700 leading-relaxed">
            If you choose market value cover, take steps to maximise your potential payout: maintain detailed service records, document any improvements or accessories that add value, keep receipts for significant repairs or upgrades, and photograph your motorhome thoroughly inside and out annually. This documentation strengthens your position if the insurer&apos;s initial assessment is lower than expected. Consider switching to agreed value if your motorhome appreciates in value — some European and premium models have increased in value in recent years.
          </p>
        </div>
      </>
    ),
  },

  'contents-cover': {
    features: [
      'Camping furniture, tables, chairs, and outdoor equipment',
      'Cooking equipment: portable BBQ, camp stove, cookware',
      'Electronics: GPS, tablets, cameras, entertainment systems',
      'Bedding, clothing, and personal items',
      'Bicycles, e-bikes, kayaks, and recreational gear',
      'Tools and maintenance equipment',
      'Generator (portable) and portable solar panels',
      'Protection against theft, accidental damage, fire, and weather',
    ],
    whoIsItFor: 'Contents cover is essential for motorhome owners who carry significant belongings on tour. If you have camping gear, a portable generator, bicycles, electronics, or personal items worth more than $5,000 in your motorhome at any time, contents cover provides critical protection that your standard motorhome policy does not. It is particularly important for full-timers and NZMCA members with well-equipped self-contained setups.',
    providerHighlights: [
      { name: 'Covi Insurance', note: 'Contents add-on available with flexible coverage limits up to $20,000.' },
      { name: 'Star Insure CamperCare', note: 'Contents cover add-on available; confirm sub-limits for high-value items.' },
      { name: 'AA Insurance', note: 'Contents add-on available; check limits for electronics and recreational gear.' },
    ],
    expandedSection: (
      <>
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">How Much Are Your Motorhome Contents Worth?</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Many motorhome owners significantly underestimate the value of what they carry. A well-equipped NZ touring motorhome might contain: camping furniture and chairs ($500–$1,500), a portable BBQ and camp stove ($300–$800), GPS and navigation devices ($400–$1,200), a portable generator ($600–$3,000), an e-bike or two ($2,000–$8,000), cameras and electronics ($1,000–$5,000), clothing and personal items ($500–$2,000), and tools and maintenance supplies ($500–$1,500). Add it up and it is common to have $8,000–$20,000 worth of belongings aboard — all unprotected without contents cover.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Sub-Limits and High-Value Items</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Contents policies typically have sub-limits (maximum payouts per item category). Electronics might be limited to $2,000 per item; bicycles to $1,500; jewellery to $1,000. If you carry items worth more than these sub-limits, you may need to schedule them separately — specifically listing them on your policy with an agreed value. Ask your insurer about sub-limits before purchasing contents cover, especially if you carry expensive cameras, laptops, or high-end e-bikes.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Permanently Fitted vs Portable — What Is Covered Where</h3>
          <p className="text-slate-700 leading-relaxed">
            Permanently fitted fixtures in your motorhome — the fridge, cooker, built-in solar panels, inverter, water tanks, and cabinetry — are typically covered under your main motorhome insurance policy as part of the vehicle. Portable equipment that you can remove and use outside the motorhome falls under contents cover. The line can blur for items like slide-out awnings, external bike racks, and roof-mounted solar panels — confirm with your insurer how these are classified under your specific policy.
          </p>
        </div>
      </>
    ),
  },

  'rental-excess-reduction': {
    features: [
      'Covers the standard rental excess ($2,500–$5,000) in full',
      'Available as a daily add-on ($10–$45 per day depending on source)',
      'Applies to damage during the rental period regardless of fault',
      'Windscreen, tyre, and panel damage typically included',
      'Covers single-vehicle accidents, not just collisions',
      'Available for most NZ motorhome rental companies (Britz, Jucy, Pacific, Apollo)',
      'Essential for gravel-road touring in NZ\'s South Island and remote areas',
    ],
    whoIsItFor: 'Rental excess reduction is recommended for anyone hiring a motorhome in New Zealand — particularly first-time motorhome drivers, those travelling on unsealed roads in the South Island, anyone sharing driving duties with less experienced drivers, and renters who want complete peace of mind during their holiday. Given the potential excess of $3,000–$5,000, the daily cost of protection is very small relative to the financial risk.',
    providerHighlights: [
      { name: 'Britz / Jucy / Pacific Motorhomes', note: 'Offer excess reduction directly — typically $25–$45/day. Convenient but expensive.' },
      { name: 'Travel insurance providers', note: 'Some policies include rental vehicle excess — confirm campervans/motorhomes are covered.' },
      { name: 'Specialist excess reduction insurers', note: 'Standalone policies $10–$20/day. Read carefully for exclusions (tyres, roof, undercarriage).' },
    ],
    expandedSection: (
      <>
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">What Damage Types Are Most Common in NZ Motorhome Rentals?</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            New Zealand&apos;s rental motorhome conditions create specific damage risks that make excess reduction essential:
          </p>
          <ul className="space-y-3 text-slate-700 mb-4">
            {[
              'Stone chips and windscreen cracks from South Island gravel roads — extremely common, especially on the West Coast and inland routes.',
              'Campsite access damage — overhanging trees, narrow entries, and unpaved access roads cause panel and roof damage.',
              'Tight manoeuvring in freedom camping areas — reversing damage is the single most common motorhome rental claim.',
              'Tyre damage on rough roads — punctures and sidewall damage in remote areas.',
              'Water ingress from awning damage during unexpected rain — often classified as driver error.',
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-sky-600 font-bold flex-shrink-0">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-700 leading-relaxed">
            With any of these resulting in the full excess being charged, excess reduction cover pays for itself with a single minor incident.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Buying Smart: Rental Company vs Standalone Cover</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Provider</th>
                  <th className="px-4 py-3 text-center font-semibold">Typical Daily Cost</th>
                  <th className="px-4 py-3 text-center font-semibold">14-Day Trip Cost</th>
                  <th className="px-4 py-3 text-left font-semibold">Key Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['Rental company add-on', '$25–$45', '$350–$630', 'Convenient; may fully cover all damage types'],
                  ['Standalone specialist policy', '$10–$20', '$140–$280', 'Cheaper; check exclusions for tyres/undercarriage'],
                  ['Travel insurance (if included)', '$0 extra', '$0', 'Confirm motorhomes explicitly covered in wording'],
                ].map(([provider, daily, trip, notes], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-800">{provider}</td>
                    <td className="px-4 py-3 text-center text-slate-600">{daily}</td>
                    <td className="px-4 py-3 text-center text-slate-600">{trip}</td>
                    <td className="px-4 py-3 text-slate-600 text-xs">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Exclusions to Watch For</h3>
          <p className="text-slate-700 leading-relaxed">
            Not all rental excess reduction policies cover every type of damage. Common exclusions include: tyre damage and punctures (often excluded from third-party excess cover), roof damage from height restrictions or overhanging branches, underbody damage from rough terrain, driving on roads not rated for standard vehicles (some NZ 4WD tracks), and damage caused by driving under the influence. Read your policy wording carefully and if in doubt, purchase the rental company&apos;s own excess reduction product to ensure complete coverage.
          </p>
        </div>
      </>
    ),
  },

  'roadside-assistance': {
    features: [
      '24/7 emergency breakdown response throughout New Zealand',
      'Towing to the nearest suitable motorhome repairer',
      'Specialist motorhome-scale recovery vehicles',
      'Emergency fuel delivery',
      'Lockout assistance',
      'On-road minor mechanical assistance',
      'Coverage in remote areas including Fiordland, Far North, and Catlins',
      'Emergency accommodation support (some providers)',
    ],
    whoIsItFor: 'All motorhome owners — but especially those who tour remote areas of New Zealand, use their motorhome for extended trips, or live in their motorhome full-time. When your motorhome breaks down far from home, roadside assistance is not a luxury but a necessity.',
    providerHighlights: [
      { name: 'Covi Wings Roadside', note: 'From $57/year add-on. RV-specific recovery. $200 callout fee per incident.' },
      { name: 'NZRA (Star Insure)', note: 'Included with CamperCare at no extra cost. 24/7 nationwide coverage.' },
      { name: 'AA Roadside', note: 'Included with AA Insurance motorhome policies. Wide national network.' },
    ],
    expandedSection: (
      <>
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Standard Car Roadside Assistance Isn&apos;t Enough</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Standard car roadside assistance services are designed for passenger vehicles. Motorhome recovery requires different equipment — larger tow trucks, wider-load knowledge, and understanding of habitation systems. Specialist motorhome roadside assistance providers know this and deploy appropriate resources. Covi Wings and NZRA (included with Star Insure CamperCare) are designed specifically for RV recovery.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Comparing Your Options: Wings, NZRA, and AA</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            <strong>Covi Wings:</strong> Available as an add-on with Covi Insurance from $57/year. Specifically designed for motorhomes and caravans. $200 callout fee applies. Best for Covi policyholders who want dedicated RV roadside support.
          </p>
          <p className="text-slate-700 mb-4 leading-relaxed">
            <strong>NZRA (with Star Insure CamperCare):</strong> Included at no extra cost in Star&apos;s CamperCare premium. 24/7 response, nationwide coverage, no callout fee. Best value for Star policyholders.
          </p>
          <p className="text-slate-700 leading-relaxed">
            <strong>AA Roadside:</strong> Included with AA Insurance motorhome policies. AA&apos;s nationwide network is comprehensive and reliable. Best for AA Insurance policyholders who value brand recognition and wide coverage.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">What to Do When You Break Down</h3>
          <p className="text-slate-700 leading-relaxed">
            Move to a safe location, activate hazard lights, and call your roadside assistance provider with your policy number, location, and vehicle description. In remote areas, use your phone&apos;s GPS to get coordinates. Response times in remote areas (Fiordland, Far North) can be 2–4 hours — carry water, food, and a blanket as standard preparation. If anyone is injured, call 111 first.
          </p>
        </div>
      </>
    ),
  },

  'storage-cover': {
    features: [
      'Theft protection during off-season storage periods',
      'Fire and explosion cover while motorhome is stationary',
      'Storm, hail, and weather damage protection',
      'Vandalism and malicious damage cover',
      'Typically 30–50% less than full comprehensive premium',
      'Applies at home, storage facilities, or motorhome parks',
      'Available for periods from 1 month to 6 months+',
      'Can be activated and deactivated as needed each season',
    ],
    whoIsItFor: 'Storage and lay-up cover is ideal for motorhome owners who use their vehicle seasonally — typically touring October to April and storing May to September. It also suits owners travelling overseas for extended periods, motorhomes awaiting sale or repair, or any situation where the motorhome will not be driven for four weeks or more.',
    providerHighlights: [
      { name: 'Covi Insurance', note: 'Lay-up cover available — contact Covi directly to arrange storage period cover.' },
      { name: 'Star Insure CamperCare', note: 'Storage cover available; confirm with Star when commencing lay-up period.' },
      { name: 'AA / Tower / AMI', note: 'Lay-up options available — premiums vary. Discuss with your insurer before storage begins.' },
    ],
    expandedSection: (
      <>
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">The True Risks of Stored Motorhomes</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            A motorhome sitting in storage is not risk-free. Break-ins at home properties and storage facilities are common — motorhomes are high-value, visible targets. LPG and electrical systems present fire risk even when stationary. Storm damage to exposed motorhomes can cause thousands in repair costs. Rodent damage to wiring and upholstery is a genuine storage risk in many NZ regions. Cancelling insurance during storage creates a gap that one incident can make catastrophically expensive.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">How to Activate Lay-Up Cover</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Contact your insurer before your storage period begins — not after. Request lay-up or storage-period cover explicitly and get written confirmation. Most specialist insurers (Covi, Star Insure) process this within 24–48 hours. When recommencing touring in spring, reinstate full comprehensive cover before taking the motorhome on the road. Never drive on lay-up cover — the driving component is removed and you would be uninsured for any road incident.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Home vs Facility Storage — Insurance Implications</h3>
          <p className="text-slate-700 leading-relaxed">
            Dedicated storage facilities with 24/7 CCTV, gated access, and security patrols represent lower risk than home driveway storage. Some insurers offer 5–15% discounts for approved facility storage. Home garage storage is intermediate. Wherever you store, tell your insurer the accurate location — incorrect information can complicate claims. Secure storage is also good practice beyond insurance: GPS trackers, wheel clamps, and motion-activated lighting are worthwhile investments regardless of cover level.
          </p>
        </div>
      </>
    ),
  },
};

export default async function CoverageTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const type = coverageTypes.find((t) => t.slug === slug);

  if (!type) notFound();

  const imageUrl = heroImages[slug] || '/hero-motorhome-1.jpg';

  const content = typeSpecificContent[slug] || {
    features: [
      'Comprehensive protection against covered perils',
      'Flexible excess options to suit your budget',
      'Fast and fair claims settlement',
      'Optional add-ons available',
      'Support from licensed brokers',
      'Competitive pricing from multiple providers',
    ],
    whoIsItFor: 'Motorhome owners who want protection tailored to their specific coverage needs and circumstances.',
    expandedSection: null,
    providerHighlights: [],
  };

  /* JSON-LD schema */
  const faqSchema = type.faqs && type.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: type.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }
    : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.motorhomeinsurance.co.nz/' },
      { '@type': 'ListItem', position: 2, name: 'Coverage Guide', item: 'https://www.motorhomeinsurance.co.nz/coverage/' },
      { '@type': 'ListItem', position: 3, name: type.title, item: `https://www.motorhomeinsurance.co.nz/types/${slug}/` },
    ],
  };

  const relatedTypes = coverageTypes.filter((t) => t.slug !== slug).slice(0, 4);

  return (
    <>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Hero */}
      <section
        className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center 60%' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 to-slate-900/40" />
        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/coverage" className="hover:text-white transition-colors">Coverage Guide</Link>
            <span>/</span>
            <span className="text-white">{type.title}</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-2xl">{type.icon}</span>
            <span className="text-sky-300 text-sm font-semibold uppercase tracking-wide">Coverage Type</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight">
            {type.title} Motorhome Insurance
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">{type.description}</p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            {/* ── Left: main content (8 cols) ── */}
            <div className="lg:col-span-8">

              {/* Understanding section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding {type.title}</h2>
                <p className="text-slate-700 text-lg leading-relaxed">{type.details}</p>
              </div>

              {/* Key features */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">What&apos;s Included</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {content.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expanded content */}
              {content.expandedSection && (
                <div className="mb-12">
                  {content.expandedSection}
                </div>
              )}

              {/* Who is it for */}
              <div className="mb-12 bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Who Is This Coverage For?</h2>
                <p className="text-slate-700 text-lg leading-relaxed">{content.whoIsItFor}</p>
              </div>

              {/* Provider highlights */}
              {content.providerHighlights && content.providerHighlights.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Top NZ Providers for {type.title}</h2>
                  <div className="space-y-4">
                    {content.providerHighlights.map((provider) => (
                      <div key={provider.name} className="flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5 hover:border-sky-300 hover:shadow-sm transition-all">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{provider.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{provider.name}</p>
                          <p className="text-sm text-slate-600 mt-1">{provider.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {type.faqs && type.faqs.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {type.faqs.map((faq, i) => (
                      <details key={i} className="group border border-slate-200 rounded-xl overflow-hidden">
                        <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer bg-white hover:bg-slate-50 transition-colors list-none">
                          <span className="font-semibold text-slate-900">{faq.question}</span>
                          <span className="text-sky-600 flex-shrink-0 group-open:rotate-45 transition-transform duration-200 text-2xl font-light leading-none">+</span>
                        </summary>
                        <div className="px-6 py-5 bg-slate-50 border-t border-slate-100">
                          <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Related coverage types */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Coverage Types</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedTypes.map((relatedType) => (
                    <Link
                      key={relatedType.slug}
                      href={`/types/${relatedType.slug}`}
                      className="flex gap-4 items-start p-5 border border-slate-200 rounded-xl hover:border-sky-300 hover:shadow-md transition-all group"
                    >
                      <span className="text-3xl flex-shrink-0">{relatedType.icon}</span>
                      <div>
                        <h3 className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">{relatedType.title}</h3>
                        <p className="text-sm text-slate-600 mt-1">{relatedType.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-3">Ready to Get Covered?</h2>
                <p className="text-slate-300 mb-6">
                  Compare {type.title.toLowerCase()} options from licensed NZ brokers. No fee, no obligation.
                </p>
                <Link
                  href="/#quote-form"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3.5 px-10 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Get a Free Quote →
                </Link>
              </div>
            </div>

            {/* ── Right: sticky sidebar (4 cols) ── */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">

                {/* Quote form */}
                <QuoteForm mode="compact" />

                {/* Coverage info box */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{type.icon}</span>
                    <h3 className="font-bold text-slate-900">{type.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{type.description}</p>
                  <Link href="/coverage" className="text-sky-600 hover:text-sky-700 font-semibold text-sm inline-flex items-center gap-1">
                    View all coverage types <span>→</span>
                  </Link>
                </div>

                {/* Quick navigation */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="bg-slate-800 px-5 py-4">
                    <h3 className="text-white font-bold text-sm">Quick Links</h3>
                  </div>
                  <div className="p-4 space-y-2">
                    {[
                      { label: 'Compare Providers', href: '/compare' },
                      { label: 'Coverage Guide', href: '/coverage' },
                      { label: 'FAQs', href: '/faqs' },
                      { label: 'Making a Claim', href: '/claims' },
                      { label: 'About Our Service', href: '/about' },
                    ].map(({ label, href }) => (
                      <Link
                        key={href}
                        href={href}
                        className="flex items-center justify-between px-4 py-2.5 bg-slate-50 hover:bg-sky-50 hover:text-sky-700 rounded-lg transition-colors text-sm font-medium text-slate-700"
                      >
                        {label}
                        <span className="text-slate-400">→</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Trust note */}
                <div className="bg-sky-600/10 border border-sky-500/20 rounded-xl p-5">
                  <p className="text-sky-800 text-sm font-semibold mb-1">100% Free Service</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We connect you with ICNZ-registered motorhome brokers at no cost. Brokers compete to earn your business — you get better quotes without the legwork.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
