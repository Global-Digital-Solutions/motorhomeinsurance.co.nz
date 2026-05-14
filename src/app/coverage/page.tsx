import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: 'Motorhome Insurance Coverage Guide | MotorHomeInsurance.co.nz',
  description: 'Complete guide to motorhome insurance coverage in NZ. Understand what\'s covered, compare coverage levels, and find the right policy for your motorhome.',
};

const whatsCovered = [
  'Accidental damage from collisions and impact',
  'Theft and attempted theft',
  'Fire and explosion damage',
  'Storm, hail, and weather-related damage',
  'Flood damage (depending on location)',
  'Vandalism and malicious damage',
  'Windscreen and glass damage (often excess-free)',
  'Third-party liability up to $20 million',
  'Legal liability cover',
  'Emergency accommodation costs',
  'Towing after breakdown',
];

const whatsNotCovered = [
  'Mechanical or electrical breakdown',
  'Tyres (wear and tear)',
  'Driver negligence without valid licence',
  'Intentional damage',
  'Commercial use (unless specified)',
  'Items not listed in schedule',
  'Damage while motorhome is being used illegally',
  'Damage due to lack of maintenance',
  'Financial losses unrelated to physical damage',
];

const breadcrumbs = [
  { name: 'Home', url: 'https://motorhomeinsurance.co.nz' },
  { name: 'Coverage', url: 'https://motorhomeinsurance.co.nz/coverage' }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is my motorhome covered while parked at a campsite?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, comprehensive motorhome insurance covers your motorhome 24/7 — whether driving, parked at a commercial campground, stored at home, or freedom camping (if self-contained). This is why standalone motorhome insurance is essential, as standard car policies typically don't cover you when parked. Make sure your policy specifically mentions coverage at campsites."
      }
    },
    {
      "@type": "Question",
      "name": "Does my policy cover contents inside the motorhome?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard motorhome insurance covers the motorhome structure but not contents like camping gear, personal items, or appliances inside. You can add contents cover as an optional add-on to protect these items. Contents cover typically protects against theft, accidental damage, and weather damage to items stored in your motorhome."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if someone else drives my motorhome?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most motorhome policies allow named drivers to use the motorhome. However, cover may be restricted to the named policyholder and specified drivers. If an uninsured or non-named person damages your motorhome, you may not be covered. Always declare all potential drivers when getting quotes and check your policy wording about who can drive."
      }
    },
    {
      "@type": "Question",
      "name": "Am I covered for freedom camping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You're covered at freedom camping sites if your motorhome is self-contained (with integrated water, waste, and power systems) and your policy explicitly covers freedom camping. New Zealand's Freedom Camping Act 2011 allows self-contained motorhomes to camp at designated sites. Non-self-contained motorhomes must use commercial campsites. Always confirm your motorhome has an MSD certificate if planning to freedom camp."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get cover for a motorhome I live in full-time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but you need a full-time living policy rather than a recreational motorhome policy. Full-time living policies are specifically designed for people who permanently reside in their motorhomes. They provide higher contents protection, cover wear from year-round living, and ensure liability protection is appropriate for residential use. Ask insurers specifically about full-time living cover."
      }
    }
  ]
};

export default function CoveragePage() {
  return (
    <>
      <BreadcrumbSchema crumbs={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-end px-4 sm:px-6 lg:px-8 pt-28 pb-32"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1629222247198-00b164054719?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80" />
        <div className="relative max-w-4xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/40 rounded-full px-4 py-1.5 mb-5">
            <span className="text-sky-300 text-sm font-semibold">Complete NZ Coverage Guide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">Motorhome Insurance Coverage Guide</h1>
          <p className="text-xl text-slate-200 max-w-2xl">Understand exactly what's covered, compare policy levels, and find the right cover for your motorhome.</p>
        </div>
      </section>

      {/* Visual Coverage Comparison */}
      <section className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8 pb-0 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/20 p-8 sm:p-12">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/30 rounded-full px-4 py-1.5 mb-4">
                <span className="text-sky-600 text-sm font-semibold">Coverage Overview</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What Motorhome Insurance Covers</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Comprehensive motorhome insurance in NZ protects you against the risks that matter most — on the road and at camp.</p>
            </div>

            {/* Large icon grid for covered items */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
              {[
                { icon: '🛡️', title: 'Accidental Damage', desc: 'Covers repair costs from collisions, rollovers, and accidental damage to your motorhome.' },
                { icon: '🔒', title: 'Theft & Vandalism', desc: 'Full replacement or repair if your motorhome is stolen or deliberately damaged.' },
                { icon: '🔥', title: 'Fire & Explosion', desc: 'Protection against fire, explosion, and smoke damage — inside and out.' },
                { icon: '🌊', title: 'Storm & Flood', desc: 'Cover for weather events including floods, storms, hail, and snow damage.' },
                { icon: '🪟', title: 'Glass & Windscreen', desc: 'Often excess-free glass repair — a key benefit of specialist motorhome policies.' },
                { icon: '⚖️', title: 'Third-Party Liability', desc: 'Up to $20M cover for damage or injury you cause to others while driving.' },
                { icon: '🏕️', title: 'Emergency Accommodation', desc: 'If your motorhome is uninhabitable after an event, we cover accommodation costs.' },
                { icon: '🚛', title: 'Recovery & Towing', desc: 'Towing to the nearest repairer after a covered incident is included.' },
                { icon: '📦', title: 'Contents Cover', desc: 'Optional add-on covering camping gear, electronics, and personal items inside.' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center p-5 rounded-2xl bg-sky-50 border border-sky-100 hover:shadow-md hover:border-sky-300 transition-all">
                  <span className="text-4xl mb-3">{item.icon}</span>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Not Covered strip */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-10">
              <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                <span className="text-xl">⚠️</span> Typical Exclusions — What's Not Covered
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  'Mechanical or electrical breakdown',
                  'Tyre wear and punctures',
                  'Driving without a valid licence',
                  'Intentional or deliberate damage',
                  'Commercial rental use (without endorsement)',
                  'Gradual deterioration or poor maintenance',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">✕</span>
                    <span className="text-red-800 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prominent CTA */}
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Get Covered?</h3>
              <p className="text-sky-100 mb-6 text-lg">Compare motorhome insurance quotes from NZ's leading providers. Free, impartial, and fast.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/#quote-form" className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 font-bold px-8 py-4 rounded-xl hover:bg-sky-50 transition-colors text-lg shadow-lg">
                  Get Free Quotes →
                </a>
                <a href="tel:+6498859549" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg">
                  📞 09 885 9549
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Your Policy Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Understanding Your Motorhome Insurance Policy</h2>

          <div className="space-y-12">
            {/* Policy Wording Subsection */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Policy Wording — What to Look For</h3>
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">When reviewing motorhome insurance quotes, understanding key policy terms ensures you get the right cover:</p>

                <div className="bg-sky-50 border border-sky-200 rounded-xl p-6">
                  <p className="font-semibold text-slate-900 mb-3">Excess Amounts</p>
                  <p className="text-sm leading-relaxed">Standard motorhome insurance excess typically ranges from $500 to $2,500. Your excess is the amount you pay toward any claim. Higher voluntary excess reduces your annual premium. Choose an excess you can comfortably afford if you need to claim.</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <p className="font-semibold text-slate-900 mb-3">No-Claims Bonus (NCB)</p>
                  <p className="text-sm leading-relaxed">In New Zealand, maintaining a claims-free record often qualifies you for NCB discounts (typically 20-50% after 3-5 years). Some insurers also offer NCB protection as an optional add-on, preventing loss of discount if you have an at-fault claim. This can be valuable peace of mind.</p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <p className="font-semibold text-slate-900 mb-3">Agreed vs Market Value Explained</p>
                  <p className="text-sm leading-relaxed">Agreed value means you both agree on your motorhome's worth upfront. If it's written off, you get that amount. Market value means the insurer pays current market value at claim time. Agreed value removes depreciation disputes but may cost slightly more in premiums.</p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <p className="font-semibold text-slate-900 mb-3">Lay-Up Periods</p>
                  <p className="text-sm leading-relaxed">If you store your motorhome seasonally (e.g., winter storage), many insurers offer reduced premiums for lay-up periods. Ask whether your insurer allows this and what coverage continues while the motorhome is stored. Some policies reduce cover during lay-up periods.</p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <p className="font-semibold text-slate-900 mb-3">Geographical Limits</p>
                  <p className="text-sm leading-relaxed">Most motorhome policies cover travel throughout New Zealand. Some policies include Pacific Islands coverage (Fiji, Samoa, Tonga). Confirm your policy's geographical scope before traveling. International travel outside NZ/Pacific requires specific cover.</p>
                </div>
              </div>
            </div>

            {/* NZ-Specific Requirements */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">NZ-Specific Motorhome Requirements & Regulations</h3>
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">New Zealand has specific regulations for motorhomes that affect insurance and compliance:</p>

                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-sky-600 font-bold flex-shrink-0">•</span>
                    <span><strong>Maximum Dimensions:</strong> Motorhomes cannot exceed 2.55m wide and 4.3m tall to be classified as standard motorhomes. Larger vehicles require different registration.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-600 font-bold flex-shrink-0">•</span>
                    <span><strong>Warrant of Fitness (WOF):</strong> Motorhomes over 3,500 kg require WOF inspections every 6 months (or annually for newer motorhomes). Some insurers offer premium discounts for maintaining valid WOF.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-600 font-bold flex-shrink-0">•</span>
                    <span><strong>Self-Containment Certification (MSD Cert):</strong> For freedom camping eligibility, motorhomes must have a Ministry of Environment Motorhome Self-Containment (MSD) certificate. This certifies proper water, waste, and power systems. Some campsites require this certification.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-600 font-bold flex-shrink-0">•</span>
                    <span><strong>Freedom Camping Act 2011:</strong> Self-contained motorhomes can freedom camp at designated sites and council reserves (free or low cost). Non-self-contained motorhomes must use commercial campsites. Insurance should specifically cover freedom camping if this is part of your plans.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Specialist vs Standard */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Specialist vs Standard Policies</h3>
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">Why specialist motorhome insurers often provide better value than standard car insurers:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-6">
                    <h4 className="font-bold text-slate-900 mb-3">Specialist Motorhome Insurers</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2"><span className="text-sky-600">✓</span> Deep understanding of motorhome risks and needs</li>
                      <li className="flex gap-2"><span className="text-sky-600">✓</span> Tailored coverage for living facilities and appliances</li>
                      <li className="flex gap-2"><span className="text-sky-600">✓</span> Better claims service from motorhome-experienced adjusters</li>
                      <li className="flex gap-2"><span className="text-sky-600">✓</span> Flexible options for full-time living, seasonal use, rentals</li>
                      <li className="flex gap-2"><span className="text-sky-600">✓</span> Often more competitive pricing for motorhome-specific risks</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-6">
                    <h4 className="font-bold text-slate-900 mb-3">Standard Car Insurers</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2"><span className="text-red-600">✕</span> May not understand motorhome-specific features</li>
                      <li className="flex gap-2"><span className="text-red-600">✕</span> Limited cover for living facilities and built-in appliances</li>
                      <li className="flex gap-2"><span className="text-red-600">✕</span> Claims may be slower if adjuster lacks motorhome experience</li>
                      <li className="flex gap-2"><span className="text-red-600">✕</span> May decline or restrict cover for full-time living use</li>
                      <li className="flex gap-2"><span className="text-red-600">✕</span> Limited understanding of self-contained motorhome requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-Time Living Coverage */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Full-Time Living Coverage</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you live in your motorhome full-time, ensure your policy explicitly covers this use. Many standard motorhome policies are written for recreational or holiday use and may not provide adequate protection for permanent residence. Full-time living policies typically cover:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2"><span className="text-sky-600 font-bold">•</span> Extended occupancy and wear from living in the motorhome year-round</li>
                <li className="flex gap-2"><span className="text-sky-600 font-bold">•</span> Higher contents protection for personal belongings and furniture</li>
                <li className="flex gap-2"><span className="text-sky-600 font-bold">•</span> Protection while the motorhome is your principal residence</li>
                <li className="flex gap-2"><span className="text-sky-600 font-bold">•</span> Often higher liability protection since your home is your motorhome</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Comparison Table */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Coverage Tier Comparison</h2>
          <p className="text-slate-700 mb-8">Compare key features across different coverage levels to find the right option for your motorhome:</p>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-sky-500 to-blue-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Coverage Feature</th>
                  <th className="px-4 py-3 text-center font-semibold">Third-Party Only</th>
                  <th className="px-4 py-3 text-center font-semibold">Comprehensive</th>
                  <th className="px-4 py-3 text-center font-semibold">Comp + Contents</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Third-Party Liability', thirdParty: true, comp: true, contents: true },
                  { feature: 'Accidental Damage', thirdParty: false, comp: true, contents: true },
                  { feature: 'Theft Protection', thirdParty: false, comp: true, contents: true },
                  { feature: 'Fire & Weather', thirdParty: false, comp: true, contents: true },
                  { feature: 'Windscreen/Glass', thirdParty: false, comp: true, contents: true },
                  { feature: 'Malicious Damage', thirdParty: false, comp: true, contents: true },
                  { feature: 'Contents (Gear/Items)', thirdParty: false, comp: false, contents: true },
                  { feature: 'Emergency Accommodation', thirdParty: false, comp: true, contents: true },
                  { feature: 'Roadside Assistance', thirdParty: false, comp: true, contents: true },
                  { feature: 'Agreed Value Option', thirdParty: false, comp: true, contents: true },
                ].map((row, i) => (
                  <tr key={i} className={`border-t border-slate-200 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <td className="px-4 py-3 font-semibold text-slate-900">{row.feature}</td>
                    <td className="px-4 py-3 text-center">
                      {row.thirdParty ? <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700 font-bold">✓</span> : <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-600">✕</span>}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.comp ? <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700 font-bold">✓</span> : <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-600">✕</span>}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.contents ? <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700 font-bold">✓</span> : <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-600">✕</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Coverage FAQ Accordion */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Coverage Questions & Answers</h2>

          <div className="space-y-3">
            {[
              {
                q: 'Is my motorhome covered while parked at a campsite?',
                a: 'Yes, comprehensive motorhome insurance covers your motorhome 24/7 — whether driving, parked at a commercial campground, stored at home, or freedom camping (if self-contained). This is why standalone motorhome insurance is essential, as standard car policies typically don\'t cover you when parked. Make sure your policy specifically mentions coverage at campsites.'
              },
              {
                q: 'Does my policy cover contents inside the motorhome?',
                a: 'Standard motorhome insurance covers the motorhome structure but not contents like camping gear, personal items, or appliances inside. You can add contents cover as an optional add-on to protect these items. Contents cover typically protects against theft, accidental damage, and weather damage to items stored in your motorhome.'
              },
              {
                q: 'What happens if someone else drives my motorhome?',
                a: 'Most motorhome policies allow named drivers to use the motorhome. However, cover may be restricted to the named policyholder and specified drivers. If an uninsured or non-named person damages your motorhome, you may not be covered. Always declare all potential drivers when getting quotes and check your policy wording about who can drive.'
              },
              {
                q: 'Am I covered for freedom camping?',
                a: 'You\'re covered at freedom camping sites if your motorhome is self-contained (with integrated water, waste, and power systems) and your policy explicitly covers freedom camping. New Zealand\'s Freedom Camping Act 2011 allows self-contained motorhomes to camp at designated sites. Non-self-contained motorhomes must use commercial campsites. Always confirm your motorhome has an MSD certificate if planning to freedom camp.'
              },
              {
                q: 'Can I get cover for a motorhome I live in full-time?',
                a: 'Yes, but you need a full-time living policy rather than a recreational motorhome policy. Full-time living policies are specifically designed for people who permanently reside in their motorhomes. They provide higher contents protection, cover wear from year-round living, and ensure liability protection is appropriate for residential use. Ask insurers specifically about full-time living cover.'
              },
              {
                q: 'What\'s the difference between agreed value and market value?',
                a: 'Agreed value means you both agree on your motorhome\'s worth upfront. If it\'s written off, you receive that amount. Market value means the insurer pays current market value at claim time — which may be less if your motorhome has depreciated. Agreed value removes depreciation disputes and gives certainty, while market value typically has lower premiums. Choose based on your motorhome\'s age and your risk tolerance.'
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-sky-300 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-semibold text-slate-900 hover:bg-slate-50">
                  <span>{faq.q}</span>
                  <span className="text-sky-600 group-open:rotate-180 transition-transform text-lg">▼</span>
                </summary>
                <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 text-slate-700">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Key Coverage Types Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Coverage Types Explained</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Compare different motorhome insurance coverage options to find what suits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Comprehensive Cover',
                icon: '🛡️',
                description: 'Full protection including accidental damage, theft, fire, and weather events. The most popular choice for motorhome owners.',
                link: '/types/comprehensive',
              },
              {
                title: 'Third-Party Liability',
                icon: '⚖️',
                description: 'Covers damage or injury you cause to others while driving. Essential protection up to $20 million.',
                link: '/types/third-party-liability',
              },
              {
                title: 'Agreed Value',
                icon: '💰',
                description: 'Lock in your motorhome value upfront. Get the agreed amount if your motorhome is written off.',
                link: '/types/agreed-value',
              },
              {
                title: 'Market Value',
                icon: '📊',
                description: 'Insured for current market value at claim time. Typically lower premiums than agreed value.',
                link: '/types/market-value',
              },
              {
                title: 'Contents & Accessories',
                icon: '🎒',
                description: 'Covers personal belongings, camping gear, and accessories inside your motorhome.',
                link: '/types/contents-cover',
              },
              {
                title: 'Rental Excess Reduction',
                icon: '🚐',
                description: 'Reduces or eliminates the excess on rental motorhome policies. Essential for hire motorhomes.',
                link: '/types/rental-excess-reduction',
              },
            ].map((type) => (
              <Link
                key={type.link}
                href={type.link}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{type.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/compare" className="p-4 bg-white border border-slate-200 rounded-lg hover:border-sky-300 hover:shadow-md transition-all text-center font-semibold text-sky-600 hover:text-sky-700">
              Compare Providers →
            </Link>
            <Link href="/faqs" className="p-4 bg-white border border-slate-200 rounded-lg hover:border-sky-300 hover:shadow-md transition-all text-center font-semibold text-sky-600 hover:text-sky-700">
              FAQs →
            </Link>
            <Link href="/types/comprehensive" className="p-4 bg-white border border-slate-200 rounded-lg hover:border-sky-300 hover:shadow-md transition-all text-center font-semibold text-sky-600 hover:text-sky-700">
              Comprehensive Cover →
            </Link>
            <Link href="/types/agreed-value" className="p-4 bg-white border border-slate-200 rounded-lg hover:border-sky-300 hover:shadow-md transition-all text-center font-semibold text-sky-600 hover:text-sky-700">
              Agreed Value →
            </Link>
            <Link href="/motorhome-insurance/cheap-motorhome-insurance-nz" className="p-4 bg-white border border-slate-200 rounded-lg hover:border-sky-300 hover:shadow-md transition-all text-center font-semibold text-sky-600 hover:text-sky-700">
              Cheap Insurance →
            </Link>
            <Link href="/motorhome-insurance/best-motorhome-insurance-nz" className="p-4 bg-white border border-slate-200 rounded-lg hover:border-sky-300 hover:shadow-md transition-all text-center font-semibold text-sky-600 hover:text-sky-700">
              Best Insurance →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Ready to Get Covered?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Compare motorhome insurance providers and find the right coverage for your needs. Get quotes within 24 hours.
          </p>
          <Link href="/#quote-form" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-sky-500/25">
            Get a Free Quote <span>→</span>
          </Link>
        </div>
      </section>

      <QuoteForm mode="full" />
    </>
  );
}
