import { notFound } from 'next/navigation';
import Link from 'next/link';
import { insurancePages } from '@/data/insurance-pages';
import { faqs } from '@/data/faqs';
import QuoteForm from '@/components/QuoteForm';

export const dynamicParams = false;

export async function generateStaticParams() {
  return insurancePages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = insurancePages.find((p) => p.slug === slug);
  if (!page) return;

  return {
    title: `${page.title} | MotorHomeInsurance.co.nz`,
    description: page.metaDesc,
  };
}

const pageSpecificContent: Record<string, { intro: string; guide: React.ReactNode; relatedLinks: Array<{text: string; href: string}>; faqSlice: number[] }> = {
  'cheap-motorhome-insurance-nz': {
    intro: 'Finding affordable motorhome insurance in New Zealand doesn\'t mean sacrificing coverage. Smart shopping and strategic choices can reduce your premiums significantly while maintaining comprehensive protection. Motorhome insurance premiums vary by 40% or more between providers for identical coverage — shopping around is your best bet for finding genuinely cheap motorhome insurance.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">7 Proven Strategies to Get Cheap Motorhome Insurance</h3>
      <div className="space-y-6">
        <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
          <h4 className="font-bold text-slate-900 mb-2">1. Install Security Systems</h4>
          <p className="text-slate-700 text-sm">GPS trackers, alarm systems, and immobilizers can reduce premiums by 5-15%. A $200 tracker that reduces annual premiums by $50-100 pays for itself within 2-4 years.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-bold text-slate-900 mb-2">2. Increase Your Voluntary Excess</h4>
          <p className="text-slate-700 text-sm">Raising excess from $500 to $750 or $1,000 cuts premiums 10-20%. Only do this if you have savings to cover it. Works best if you're confident you won't claim.</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
          <h4 className="font-bold text-slate-900 mb-2">3. Bundle Insurance Policies</h4>
          <p className="text-slate-700 text-sm">Combining motorhome, car, and home insurance with one provider saves 10-15% on total premiums. Multi-policy discounts are one of the best-value strategies available.</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h4 className="font-bold text-slate-900 mb-2">4. Maintain an Excellent Driving Record</h4>
          <p className="text-slate-700 text-sm">No claims over 3-5 years qualifies for no-claims discounts (20%+ reduction). Safe driving directly translates to cheaper premiums and better rates.</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h4 className="font-bold text-slate-900 mb-2">5. Store Your Motorhome Securely</h4>
          <p className="text-slate-700 text-sm">Locked garage or secure compound reduces theft risk. Many insurers offer 5-10% discounts for secure storage, improving overall security.</p>
        </div>
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
          <h4 className="font-bold text-slate-900 mb-2">6. Shop Around Regularly</h4>
          <p className="text-slate-700 text-sm">Don't stay with the same insurer. Get 3-5 quotes annually. Premiums change yearly, and loyalty isn't rewarded in insurance. Shopping saves money consistently.</p>
        </div>
      </div>
    </>,
    relatedLinks: [
      { text: 'Compare Providers', href: '/compare' },
      { text: 'Coverage Guide', href: '/coverage' },
    ],
    faqSlice: [0, 5]
  },
  'compare-motorhome-insurance-nz': {
    intro: 'Comparing motorhome insurance providers is essential because premiums vary dramatically between insurers. Two quotes for identical motorhomes could differ by $200-500+ annually. Our comparison service makes this process simple by getting quotes from multiple providers in a single step.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">How to Compare Motorhome Insurance Like a Pro</h3>
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-slate-900 mb-2">Step 1: Get Multiple Quotes (At Least 3)</h4>
          <p className="text-slate-700 mb-2">Compare premium cost, but don't stop there. Check what's included at each price point — cheaper doesn't always mean better value if coverage is limited.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">Step 2: Compare Coverage Options</h4>
          <p className="text-slate-700 mb-2">Look at agreed vs market value options, excess choices, whether contents or roadside assistance is included, and any available add-ons. A slightly more expensive policy with better coverage might be better value.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">Step 3: Check Claims Service Reputation</h4>
          <p className="text-slate-700 mb-2">Read reviews and ask providers about average claims settlement times. When you need to claim, responsive service matters more than you might think.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">Step 4: Verify Specialist Knowledge</h4>
          <p className="text-slate-700 mb-2">Does the provider understand motorhome-specific features? Specialist motorhome insurers often provide better value than general car insurers for motorhome owners.</p>
        </div>
      </div>
    </>,
    relatedLinks: [
      { text: 'Coverage Types', href: '/coverage' },
      { text: 'FAQs', href: '/faqs' },
    ],
    faqSlice: [0, 5]
  },
  'motorhome-insurance-cost-nz': {
    intro: 'Motorhome insurance costs vary widely depending on your motorhome type, value, age, usage patterns, location, and chosen coverage. Understanding what factors affect pricing helps you budget properly and potentially reduce costs. NZ motorhome insurance typically ranges from $200-800+ annually.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Understanding Motorhome Insurance Costs</h3>
      <div className="space-y-6">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <h4 className="font-bold text-slate-900 mb-3">Price Ranges by Vehicle Type</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><strong>Campervan (under $30k):</strong> $200-400/year</li>
            <li><strong>Class B Motorhome ($30-60k):</strong> $300-600/year</li>
            <li><strong>Class A Motorhome ($60-150k):</strong> $500-1000/year</li>
            <li><strong>Luxury Motorhome ($150k+):</strong> $800-1500+/year</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">Key Factors Affecting Cost</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Motorhome Value:</span> Higher value = higher premium</li>
            <li><span className="font-semibold">Age:</span> Newer motorhomes typically cost more to insure (higher replacement cost)</li>
            <li><span className="font-semibold">Self-Contained Status:</span> Self-contained costs more due to higher value and complexity</li>
            <li><span className="font-semibold">Excess Amount:</span> Higher excess = lower premium</li>
            <li><span className="font-semibold">Usage:</span> Full-time use typically costs more than seasonal use</li>
            <li><span className="font-semibold">Location:</span> High-theft areas (Auckland CBD) cost more than rural areas</li>
            <li><span className="font-semibold">Security:</span> GPS trackers can reduce premiums 5-15%</li>
          </ul>
        </div>
      </div>
    </>,
    relatedLinks: [
      { text: 'Compare Providers', href: '/compare' },
      { text: 'Reduce Costs Guide', href: '/faqs' },
    ],
    faqSlice: [12, 17]
  },
  'campervan-insurance-nz': {
    intro: 'Campervan insurance in NZ covers your compact motorhome with specialized protection for its unique features. Campervans differ from larger Class A, B, and C motorhomes in value, usage patterns, and coverage needs. Whether you own a van conversion or purpose-built campervan, specialized campervan insurance provides appropriate coverage.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Campervan vs Motorhome Insurance — Key Differences</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Campervans</strong> are typically smaller, more affordable (under $30,000), and often van-based conversions. <strong>Motorhomes</strong> are larger, purpose-built vehicles with more complex systems. Both need dedicated motorhome insurance, but campervan policies often cost less due to lower values.</p>
        <p><strong>Specific Campervan Considerations:</strong> Van conversions may have unique layouts and modifications requiring specialist insurers. Many insurers understand campervans well. Coverage for pop-top roofs and convertible features needs verification. Storage as a van (unhitched) vs motorhome usage might affect coverage.</p>
        <p>Get quotes specifically mentioning your campervan type and any modifications. Specialist campervan insurers often provide better value than general motorhome insurers for this vehicle class.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Coverage Guide', href: '/coverage' },
      { text: 'Coverage Types', href: '/types/comprehensive' },
    ],
    faqSlice: [5, 12]
  },
  'best-motorhome-insurance-nz': {
    intro: 'Finding the best motorhome insurance provider in NZ means identifying the insurer that offers the best combination of price, coverage options, and service quality for your specific situation. There\'s no single "best" provider for everyone — the best insurer for you depends on your motorhome type, age, value, and priorities.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">What Makes a Motorhome Insurance Provider "Best"?</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>For Budget-Conscious Owners:</strong> Look for providers known for competitive pricing on standard comprehensive cover. Tower and some direct online insurers often offer good value.</p>
        <p><strong>For Specialist Motorhomes:</strong> Specialist providers like Covi Insurance and Star Insure understand motorhome-specific risks better, offering more tailored policies and better service.</p>
        <p><strong>For All-Around Service:</strong> AA Insurance and other established providers offer good balance of price, coverage options, and claims service.</p>
        <p><strong>For Imported Motorhomes:</strong> Specialist motorhome insurers with international experience handle imports better than standard providers.</p>
        <p>The best approach: Get quotes from 3-5 providers including both specialists and mainstream insurers. Compare not just price but coverage options, excess flexibility, and claims reputation.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Compare Providers', href: '/compare' },
      { text: 'FAQs', href: '/faqs' },
    ],
    faqSlice: [5, 12]
  },
  'motorhome-hire-insurance-nz': {
    intro: 'When renting a motorhome in New Zealand, understanding rental insurance is crucial. Rental companies include basic liability insurance, but this often comes with high excess ($2,500-5,000). Rental excess reduction insurance protects you from these excess costs, providing peace of mind during your NZ motorhome holiday.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Motorhome Rental Insurance Explained</h3>
      <div className="space-y-6">
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h4 className="font-bold text-slate-900 mb-2">What's Included in Rental Insurance</h4>
          <p className="text-slate-700 text-sm mb-3">Rental motorhome companies include basic liability insurance in their rental price. This covers damage you cause to other vehicles or property. However, it typically doesn't cover damage to the rental motorhome itself.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h4 className="font-bold text-slate-900 mb-2">The Excess Problem</h4>
          <p className="text-slate-700 text-sm mb-3">Rental excess is typically $1,000-$5,000, with $3,000 most common. If you damage the motorhome (even minor damage), you pay this excess. A small scratch could cost you thousands.</p>
        </div>
        <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
          <h4 className="font-bold text-slate-900 mb-2">Rental Excess Reduction Solution</h4>
          <p className="text-slate-700 text-sm">Rental excess reduction insurance costs $10-20/day and covers your excess. For a week's rental with $3,000 excess, $15/day protection costs $105 — excellent value for peace of mind protecting your wallet.</p>
        </div>
      </div>
    </>,
    relatedLinks: [
      { text: 'Rental Coverage Info', href: '/types/rental-excess-reduction' },
      { text: 'Coverage Guide', href: '/coverage' },
    ],
    faqSlice: [17, 21]
  },
  'motorhome-insurance-auckland': {
    intro: 'Auckland motorhome insurance needs differ from other NZ regions due to specific risks. As NZ\'s largest city, Auckland has higher theft rates for motorhomes, denser traffic creating accident risks, and specific storage challenges. Getting motorhome insurance in Auckland means understanding these local considerations.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Auckland-Specific Motorhome Insurance Risks</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Theft Risk:</strong> Auckland has higher motorhome theft rates than other NZ regions. Premium prices reflect this. Installing GPS trackers can reduce your Auckland premiums significantly.</p>
        <p><strong>Traffic Density:</strong> Auckland's heavy traffic increases accident risk. Safe driving history becomes more valuable for premium calculations. Accident prevention is essential.</p>
        <p><strong>Storage Challenges:</strong> Many Aucklanders live in units or tight housing, limiting secure storage options. Explain your storage situation to insurers — street parking vs secure garage affects premiums.</p>
        <p><strong>Local Insurers:</strong> Multiple Auckland-based and national insurers operate here. Competition is strong, making this good for shopping around. Get quotes from at least 3 providers.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Compare Providers', href: '/compare' },
      { text: 'Coverage Types', href: '/coverage' },
    ],
    faqSlice: [5, 12]
  },
  'motorhome-insurance-wellington': {
    intro: 'Wellington motorhome insurance reflects the capital city\'s unique risks and conditions. High winds, exposed harbors, and specific driving conditions require motorhome insurance tailored to Wellington\'s climate and geography. Getting proper coverage in Wellington ensures you\'re protected against region-specific risks.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Wellington-Specific Motorhome Considerations</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Wind Damage Risk:</strong> Wellington\'s legendary wind can damage motorhomes (external damage, damage to stored items, awning damage). Comprehensive cover including weather damage is essential here.</p>
        <p><strong>Harbour Proximity:</strong> Salt spray and coastal conditions require motorhome protection. Check policies cover corrosion damage and salt spray-related issues.</p>
        <p><strong>Driving Conditions:</strong> Steep hills, tight streets, and windy routes require careful driving. Safe driving history is valuable for Wellington motorhome insurance.</p>
        <p><strong>Storage at Home:</strong> Many Wellingtonians store motorhomes at home. Confirm your insurer covers on-property storage. Security measures help reduce premiums.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Compare Providers', href: '/compare' },
      { text: 'Coverage Guide', href: '/coverage' },
    ],
    faqSlice: [5, 12]
  },
  'motorhome-insurance-christchurch': {
    intro: 'Christchurch motorhome insurance reflects the city\'s post-earthquake context and specific South Island conditions. Understanding Christchurch\'s unique situation helps you get appropriate coverage. Our service connects you with insurers experienced in Canterbury motorhome insurance.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Christchurch-Specific Motorhome Insurance</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Natural Disaster Awareness:</strong> Post-earthquake, Christchurch residents understand natural disaster risk. Ensure your policy covers earthquakes and related damage. This is particularly important in Christchurch.</p>
        <p><strong>Road Conditions:</strong> Central Otago and surrounding areas popular with motorhomers have varying road conditions. Good comprehensive cover with roadside assistance is important for South Island travel.</p>
        <p><strong>Storage Facilities:</strong> Christchurch has good motorhome storage options. Secure storage can reduce premiums. Communicate your storage plans to insurers.</p>
        <p><strong>Seasonal Travel:</strong> Many Christchurch-based motorhome owners travel seasonally. Discuss usage patterns with your insurer for potentially better rates.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Earthquake Coverage', href: '/coverage' },
      { text: 'Compare Providers', href: '/compare' },
    ],
    faqSlice: [5, 12]
  },
  'self-contained-motorhome-insurance-nz': {
    intro: 'Self-contained motorhome insurance in NZ covers motorhomes with integrated water, waste, and power systems. Self-contained motorhomes are more valuable, more complex, and have different insurance needs than non-self-contained models. Proper specialist insurance ensures your self-contained motorhome is fully protected.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Self-Contained Motorhome Insurance Essentials</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>What "Self-Contained" Means for Insurance:</strong> Self-contained motorhomes have integrated freshwater tanks, wastewater systems, toilets, power systems (batteries/solar), and cooking facilities. These complex systems need specific insurance coverage beyond standard motorhome policies.</p>
        <p><strong>Higher Value, Higher Premium:</strong> Self-contained motorhomes typically cost $50,000-$200,000+, compared to $20,000-50,000 for non-self-contained models. Higher value means higher insurance premiums. However, self-contained status enables freedom camping, which many owners value highly.</p>
        <p><strong>MSD Certification:</strong> Self-contained motorhomes need Ministry of Environment Motorhome Self-Containment (MSD) certificates for freedom camping. Ensure your insurer understands this certification and covers freedom camping if that's how you plan to use your motorhome.</p>
        <p><strong>System Coverage:</strong> Ensure your policy covers all integrated systems including water, waste, electrical, solar panels, and built-in appliances. Some policies have exclusions for these systems.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Coverage Guide', href: '/coverage' },
      { text: 'Specialist Insurance', href: '/compare' },
    ],
    faqSlice: [5, 12]
  },
  'imported-motorhome-insurance-nz': {
    intro: 'Imported motorhome insurance in New Zealand covers vehicles from overseas (European, Japanese, American models). Insuring imported motorhomes requires specialist knowledge because insurers must understand overseas specifications, valuation challenges, and parts availability. Our brokers connect you with insurers experienced in imported vehicles.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Insuring Imported Motorhomes in NZ</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Popular Imported Models:</strong> Japanese imports dominate (Toyota HiAce, Mitsubishi Rosa, Isuzu). European models (Fiat Ducato-based, Mercedes) are also common. American RVs are less common but occasionally imported. Each requires specific knowledge.</p>
        <p><strong>Valuation Challenges:</strong> Imported motorhomes are harder to value because comparable sales are limited. Get professional valuations from someone familiar with the specific model. Use agreed value insurance to lock in the valuation and avoid disputes.</p>
        <p><strong>Parts & Service:</strong> Ensure your insurer understands parts availability for imported models. Some parts are expensive or hard to source in NZ. Mechanical breakdown cover becomes more valuable for imported vehicles.</p>
        <p><strong>Compliance Documentation:</strong> Have complete import documentation including customs valuations, mechanical inspection reports, and compliance documents. Specialist insurers appreciate complete paperwork.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Agreed Value Coverage', href: '/types/agreed-value' },
      { text: 'Coverage Guide', href: '/coverage' },
    ],
    faqSlice: [5, 12]
  },
  'luxury-motorhome-insurance-nz': {
    intro: 'Luxury motorhome insurance in New Zealand covers high-value, premium motorhomes including coach conversions, specialty builds, and top-tier imported models. Luxury motorhomes require specialized coverage reflecting their high values ($150,000-$500,000+), complex systems, and unique risks. Specialist insurers understand luxury motorhome needs.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Luxury Motorhome Insurance Requirements</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>High-Value Coverage:</strong> Luxury motorhomes ($150,000+) need agreed value insurance to ensure replacement cost. Market value insurance could leave you significantly underinsured if your motorhome depreciates.</p>
        <p><strong>Premium Systems & Appliances:</strong> Luxury motorhomes have high-end kitchens, entertainment systems, premium bedding, and specialty equipment. Contents cover should reflect the value of built-in and portable items.</p>
        <p><strong>Specialist Service:</strong> Luxury motorhome owners expect responsive claims service and quality repairs. Specialist luxury motorhome insurers provide dedicated service and understand repair expectations.</p>
        <p><strong>Bespoke Coverage Options:</strong> Luxury motorhome policies often include options for roadside assistance, emergency accommodation, and travel coverage that standard policies don't offer.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Agreed Value Coverage', href: '/types/agreed-value' },
      { text: 'Contents Cover', href: '/types/contents-cover' },
    ],
    faqSlice: [5, 12]
  }
};

export default async function InsuranceLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = insurancePages.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  const pageContent = pageSpecificContent[slug] || {
    intro: 'Finding the right motorhome insurance coverage tailored to your specific needs is essential. Get free quotes from NZ\'s leading motorhome insurance providers within 24 hours.',
    guide: null,
    relatedLinks: [
      { text: 'Coverage Guide', href: '/coverage' },
      { text: 'Compare Providers', href: '/compare' },
    ],
    faqSlice: [0, 3]
  };

  const benefits = [
    {
      icon: '💰',
      title: 'Save Money',
      description: 'Compare quotes from multiple providers and find the best price for your motorhome coverage needs.',
    },
    {
      icon: '🛡️',
      title: 'Expert Guidance',
      description: 'Our brokers understand motorhome risks and help you choose the right coverage for your situation.',
    },
    {
      icon: '⚡',
      title: 'Fast Response',
      description: 'Get free quotes within 24 hours with no obligation and no broker fees.',
    },
  ];

  const faqItems = faqs.slice(pageContent.faqSlice[0], pageContent.faqSlice[1]);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{page.h1}</h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Find the right motorhome insurance coverage tailored to your specific needs. Get free quotes from NZ's leading providers within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <div className="mb-16">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              {pageContent.intro}
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl bg-sky-50 border border-sky-200">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed Guide Section */}
          {pageContent.guide && (
            <div className="mb-16">
              {pageContent.guide}
            </div>
          )}

          {/* Related Links */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Pages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pageContent.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="p-4 bg-slate-50 border border-slate-200 rounded-lg hover:border-sky-300 hover:shadow-md transition-all text-center font-semibold text-sky-600 hover:text-sky-700">
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Quote Form */}
          <div className="mb-16">
            <QuoteForm mode="full" />
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <details key={faq.slug} className="group bg-white border border-slate-200 rounded-lg p-6 hover:border-sky-300 transition-colors">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <span className="font-bold text-slate-900">{faq.question}</span>
                    <span className="text-sky-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-slate-700 text-sm mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Find Your Perfect Motorhome Insurance?</h2>
            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              Get free quotes from NZ's top motorhome insurers. Our brokers will compare the market and deliver personalized recommendations within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#quote-form" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-sky-500/25">
                Get a Free Quote →
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-900 font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Contact us →
              </Link>
            </div>
          </div>

          {/* FMA Note */}
          <div className="mt-12 text-center text-xs text-slate-500 border-t border-slate-200 pt-6">
            <p>
              MotorHomeInsurance.co.nz is a free comparison service. All insurance is provided by licensed New Zealand insurers.
              <br />We comply with all Financial Markets Authority (FMA) requirements for fair dealing and transparency.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
