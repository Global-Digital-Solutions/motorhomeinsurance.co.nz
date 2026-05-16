import { CheckCircle, XCircle } from 'lucide-react';
import { providers } from '@/data/providers';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: 'Compare Motorhome Insurance Providers NZ | MotorHomeInsurance.co.nz',
  description: 'Compare NZ motorhome insurance providers side-by-side. See ratings, prices, features, and choose the best coverage for your motorhome.',
};

const breadcrumbs = [
  { name: 'Home', url: 'https://motorhomeinsurance.co.nz' },
  { name: 'Compare Providers', url: 'https://motorhomeinsurance.co.nz/compare' }
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": providers.map((provider, index) => ({
    "@type": "Organization",
    "position": index + 1,
    "name": provider.name
  }))
};

export default function ComparePage() {
  return (
    <>
      <BreadcrumbSchema crumbs={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1596470693312-9a3686a0af0f?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/30" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Compare Motorhome Insurance Providers</h1>
          <p className="text-xl text-slate-200">See how the top motorhome insurers stack up on coverage, features, and value.</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding the Motorhome Insurance Market</h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              The motorhome insurance market includes several excellent providers, each with different specialties and strengths. Motorhome insurance premiums can vary by 40% or more between providers for identical vehicles and coverage levels — which is why comparing quotes is so important for finding genuine value.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Multiple factors affect motorhome insurance pricing: your motorhome's age, value, type (campervan, Class A, B, or C), self-contained status, usage patterns (weekend, seasonal, or full-time), where it's stored, your location, driving history, chosen excess, and security measures installed. Some providers specialize in specific motorhome types or usage patterns, which is why getting quotes from multiple insurers is essential.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              Using our service, you'll get quotes from multiple ICNZ-registered brokers who understand motorhome insurance thoroughly. Rather than shopping around yourself, our brokers do the legwork, saving you time and ensuring you get genuinely competitive quotes based on your specific situation.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/coverage" className="text-sky-600 font-semibold hover:text-sky-700 transition-colors inline-flex items-center gap-2">
              Learn about coverage types <span>→</span>
            </Link>
            <Link href="/faqs" className="text-slate-600 font-semibold hover:text-slate-700 transition-colors inline-flex items-center gap-2 border-l border-slate-300 pl-4">
              View common questions <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Provider Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Motorhome Insurance — Provider Comparison</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">Compare coverage features across the leading motorhome insurance providers. ✓ = Included &nbsp; ◐ = Optional add-on &nbsp; ✗ = Not available</p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-xl border border-slate-200">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-sky-500 to-blue-600">
                  <th className="text-left text-white font-bold p-5 w-52 text-sm">Coverage Feature</th>
                  {providers.map((p) => (
                    <th key={p.name} className="text-center text-white font-bold p-5 text-sm">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-2xl">{p.logo}</span>
                        <span>{p.name}</span>
                        {(p.name === 'Covi Insurance' || p.name === 'Star Insure') && <span className="text-xs bg-white/20 rounded-full px-2 py-0.5">Specialist</span>}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Comprehensive Cover', values: ['✓','✓','✓','✓','✓','✓'] },
                  { feature: 'Agreed Value', values: ['✓','✓','✗','✓','✗','✓'] },
                  { feature: 'Market Value', values: ['✓','✓','✓','✓','✓','✓'] },
                  { feature: 'Third-Party Liability', values: ['✓','✓','✓','✓','✓','✓'] },
                  { feature: 'Windscreen / Glass', values: ['◐','✓','◐','◐','◐','✓'] },
                  { feature: 'Contents Cover', values: ['◐','✓','✗','◐','✗','✓'] },
                  { feature: 'Roadside Assistance', values: ['✓','✓','✗','✓','✗','✓'] },
                  { feature: 'Emergency Accommodation', values: ['✓','✓','◐','✓','◐','✓'] },
                  { feature: 'Full-Time Living Cover', values: ['✗','✓','✗','✗','✗','✓'] },
                  { feature: 'Imported Motorhomes', values: ['✓','✓','◐','✓','◐','✓'] },
                  { feature: 'Self-Contained Cert', values: ['✓','✓','✓','✓','✓','✓'] },
                  { feature: 'Online Claims', values: ['✓','✓','✓','✓','✓','◐'] },
                  { feature: '24/7 Claims Line', values: ['✓','✓','✗','✓','✗','✓'] },
                  { feature: 'No-Claims Bonus', values: ['✓','✓','✓','✓','✓','✓'] },
                  { feature: 'Price Tier', values: ['$$','$$','$','$$','$','$$$'] },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="p-4 font-semibold text-slate-800 text-sm border-r border-slate-200">{row.feature}</td>
                    {row.values.map((val, j) => (
                      <td key={j} className="p-4 text-center text-lg border-r border-slate-100 last:border-r-0">
                        <span className={
                          val === '✓' ? 'text-green-600 font-bold' :
                          val === '✗' ? 'text-red-400' :
                          val === '◐' ? 'text-amber-500 font-semibold' :
                          val === '$' ? 'text-sky-600 font-bold text-sm' :
                          val === '$$' ? 'text-sky-600 font-bold text-sm' :
                          val === '$$$' ? 'text-sky-700 font-bold text-sm' :
                          'text-slate-600 text-sm font-semibold'
                        }>{val}</span>
                      </td>
                    ))}
                  </tr>
                ))}
                {/* CTA row */}
                <tr className="bg-gradient-to-r from-sky-50 to-blue-50">
                  <td className="p-5 font-bold text-slate-800 text-sm">Get a Quote</td>
                  {providers.map((p) => (
                    <td key={p.name} className="p-4 text-center">
                      <a
                        href="/#quote-form"
                        className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold px-4 py-2.5 rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all text-sm shadow-md hover:shadow-lg whitespace-nowrap"
                      >
                        Get Quote →
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-slate-600">
            <span className="flex items-center gap-2"><span className="text-green-600 font-bold text-lg">✓</span> Included as standard</span>
            <span className="flex items-center gap-2"><span className="text-amber-500 font-semibold text-lg">◐</span> Optional add-on</span>
            <span className="flex items-center gap-2"><span className="text-red-400 text-lg">✗</span> Not available</span>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-xs text-slate-400 text-center max-w-3xl mx-auto">* Coverage details are indicative and subject to change. Always verify current policy terms directly with the insurer. Pricing tiers: $ = budget, $$ = mid-range, $$$ = premium.</p>

          {/* Why Compare Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-slate-200 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-sky-500/20">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Save Money</h3>
              <p className="text-slate-600">Compare quotes and find the most competitive pricing for your motorhome type and usage pattern.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-sky-500/20">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Find the Right Cover</h3>
              <p className="text-slate-600">Different providers offer different features. Find the coverage that matches your specific motorhome needs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-sky-500/20">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Service</h3>
              <p className="text-slate-600">Our brokers compare the market and deliver personalized recommendations based on your situation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Comparison Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">What to Compare</h2>
          <p className="text-slate-600 mb-12 max-w-2xl">When comparing motorhome insurance providers, look for:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Coverage Options</h3>
                  <p className="text-slate-600 text-sm">Comprehensive, agreed value, third-party liability, contents cover, and add-ons.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Premium Costs</h3>
                  <p className="text-slate-600 text-sm">Compare annual premiums, but also check what's included at each price point.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Excess Options</h3>
                  <p className="text-slate-600 text-sm">Flexible excess choices and discounts for safe driving or security measures.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Claims Service</h3>
                  <p className="text-slate-600 text-sm">24/7 claims support, fast settlement, and a strong repair network.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Customer Reviews</h3>
                  <p className="text-slate-600 text-sm">Check ratings and testimonials from other motorhome owners.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Specialist Knowledge</h3>
                  <p className="text-slate-600 text-sm">Does the provider understand motorhomes and unique motorhome risks?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Motorhome Insurance Market Overview</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-sky-500 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">ICNZ Regulation & Fair Dealing</h3>
              <p className="text-slate-700 leading-relaxed">
                The motorhome insurance market is regulated by the Insurance Council of New Zealand (ICNZ). All legitimate motorhome insurers are bound by ICNZ's Code of Good Insurance Practice, which ensures fair dealing, transparency, and quality service. When you get quotes through our service, you're dealing exclusively with ICNZ-registered brokers and insurers who must comply with these standards. This protection ensures your claims are handled fairly and your information remains secure.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fair Insurance Code & Consumer Rights</h3>
              <p className="text-slate-700 leading-relaxed">
                The Financial Markets Authority (FMA) oversees the Fair Insurance Code, which sets standards for insurance provider conduct. This code ensures you receive clear information about what's covered, fair claims handling, and proper dispute resolution processes. If you have a complaint about your motorhome insurance, the Insurance and Dispute Resolution Scheme (IDRS) provides free independent mediation. These protections are built into every motorhome insurance contract in NZ.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Going Direct vs Using a Broker</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                You have two options: contact insurance providers directly, or use a licensed broker. Here's what you should know about each:
              </p>

              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-4">
                <p className="font-semibold text-slate-900 mb-2">Direct from Insurer</p>
                <p className="text-sm text-slate-700">Contacting insurers directly means you only see their quotes. You're responsible for comparing multiple providers. This saves insurers money, so they often offer "direct discount" online quotes.</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="font-semibold text-slate-900 mb-2">Through a Licensed Broker (Our Service)</p>
                <p className="text-sm text-slate-700">Licensed brokers have access to multiple insurers and receive your information once. They compare options on your behalf and provide expert recommendations. Our brokers never charge you fees — they earn commission from insurers. You get more choice and expert guidance at no extra cost.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/coverage" className="p-4 bg-slate-50 border border-slate-200 rounded-lg hover:border-sky-300 hover:shadow-md transition-all text-center font-semibold text-sky-600 hover:text-sky-700">
              Coverage Guide →
            </Link>
            <Link href="/faqs" className="p-4 bg-slate-50 border border-slate-200 rounded-lg hover:border-sky-300 hover:shadow-md transition-all text-center font-semibold text-sky-600 hover:text-sky-700">
              FAQs →
            </Link>
            <Link href="/motorhome-insurance/best-motorhome-insurance-nz" className="p-4 bg-slate-50 border border-slate-200 rounded-lg hover:border-sky-300 hover:shadow-md transition-all text-center font-semibold text-sky-600 hover:text-sky-700">
              Best Insurance →
            </Link>
            <Link href="/motorhome-insurance/compare-motorhome-insurance-nz" className="p-4 bg-slate-50 border border-slate-200 rounded-lg hover:border-sky-300 hover:shadow-md transition-all text-center font-semibold text-sky-600 hover:text-sky-700">
              Comparison Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison FAQ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Comparison Questions</h2>

          <div className="space-y-3">
            {[
              {
                q: 'Which is the best motorhome insurance provider?',
                a: 'There\'s no single "best" provider — the best insurer for you depends on your motorhome type, age, value, usage patterns, and priorities. Some providers excel at comprehensive cover, others at competitive pricing, and some specialize in specific motorhome types. By comparing quotes from multiple providers, you\'ll find the best fit for your situation.'
              },
              {
                q: 'Is it cheaper to go direct or through a broker?',
                a: 'It\'s usually cheaper to go through a broker like ours. Brokers have access to multiple insurers and can compare options comprehensively. Since we don\'t charge you fees, you save the same amount as going direct while getting the benefit of expert comparison and recommendations.'
              },
              {
                q: 'What should I compare when getting motorhome insurance quotes?',
                a: 'Compare the annual premium, excess amounts, coverage options (agreed vs market value), what\'s included in each quote (contents, roadside assistance, emergency accommodation), claims process and service reputation, and specialist knowledge of motorhomes. Don\'t just pick the cheapest — consider overall value and quality.'
              },
              {
                q: 'Does AA Insurance cover motorhomes?',
                a: 'Yes, AA Insurance offers motorhome insurance with comprehensive coverage options. AA is one of NZ\'s largest and most established providers, offering competitive rates and good customer service. However, comparing their quotes with specialist motorhome insurers is recommended, as specialist providers often offer better value for motorhome-specific needs.'
              },
              {
                q: 'What makes specialist motorhome insurers different?',
                a: 'Specialist motorhome insurers like Covi Insurance have deep expertise in motorhome risks and coverage needs. They understand self-contained motorhomes, full-time living situations, and rental motorhome coverage better than general insurers. Specialists often provide more tailored policies, better claims service, and sometimes more competitive pricing for motorhomes.'
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

      <QuoteForm mode="full" />
    </>
  );
}
