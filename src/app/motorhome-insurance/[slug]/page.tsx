import { notFound } from 'next/navigation';
import Link from 'next/link';
import { insurancePages } from '@/data/insurance-pages';
import { faqs } from '@/data/faqs';
import QuoteForm from '@/components/QuoteForm';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const dynamicParams = false;

/* ── Hero image map — cycles through all 7 local photos ── */
const slugHeroImages: Record<string, string> = {
  'cheap-motorhome-insurance-nz':         '/hero-motorhome-1.jpg',
  'compare-motorhome-insurance-nz':       '/hero-motorhome-2.jpg',
  'motorhome-insurance-cost-nz':          '/hero-motorhome-3.jpg',
  'campervan-insurance-nz':               '/hero-motorhome-4.jpg',
  'best-motorhome-insurance-nz':          '/hero-motorhome-5.jpg',
  'motorhome-hire-insurance-nz':          '/hero-motorhome-6.jpg',
  'motorhome-insurance-auckland':         '/hero-motorhome-7.jpg',
  'motorhome-insurance-wellington':       '/hero-motorhome-1.jpg',
  'motorhome-insurance-christchurch':     '/hero-motorhome-2.jpg',
  'self-contained-motorhome-insurance-nz':'/hero-motorhome-3.jpg',
  'imported-motorhome-insurance-nz':      '/hero-motorhome-4.jpg',
  'luxury-motorhome-insurance-nz':        '/hero-motorhome-5.jpg',
  'caravan-insurance-nz':                 '/hero-motorhome-6.jpg',
  'rv-insurance-nz':                      '/hero-motorhome-7.jpg',
  'nzmca-insurance-nz':                   '/hero-motorhome-1.jpg',
  'freedom-camping-insurance-nz':         '/hero-motorhome-2.jpg',
  'motorhome-insurance-hamilton':         '/hero-motorhome-3.jpg',
  'motorhome-insurance-dunedin':          '/hero-motorhome-4.jpg',
  'motorhome-insurance-queenstown':       '/hero-motorhome-5.jpg',
  'motorhome-insurance-tauranga':         '/hero-motorhome-6.jpg',
  'motorhome-insurance-palmerston-north': '/hero-motorhome-7.jpg',
  'motorhome-insurance-nelson':           '/hero-motorhome-1.jpg',
  'motorhome-insurance-rotorua':          '/hero-motorhome-2.jpg',
  'motorhome-insurance-napier':           '/hero-motorhome-3.jpg',
  'motorhome-insurance-new-plymouth':     '/hero-motorhome-4.jpg',
  'motorhome-insurance-whangarei':        '/hero-motorhome-5.jpg',
  'motorhome-insurance-invercargill':     '/hero-motorhome-6.jpg',
  'motorhome-storage-insurance-nz':       '/hero-motorhome-7.jpg',
  'seasonal-motorhome-insurance-nz':      '/hero-motorhome-1.jpg',
  'full-time-motorhome-insurance-nz':     '/hero-motorhome-2.jpg',
  'motorhome-insurance-over-65-nz':       '/hero-motorhome-3.jpg',
};

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
    intro: 'Finding affordable motorhome insurance doesn\'t mean sacrificing coverage. Smart shopping and strategic choices can reduce your premiums significantly while maintaining comprehensive protection. Motorhome insurance premiums vary by 40% or more between providers for identical coverage — shopping around is your best bet for finding genuinely cheap motorhome insurance.',
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
    intro: 'Motorhome insurance costs vary widely depending on your motorhome type, value, age, usage patterns, location, and chosen coverage. Understanding what factors affect pricing helps you budget properly and potentially reduce costs. Motorhome insurance typically ranges from $200-800+ annually.',
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
    intro: 'Campervan insurance covers your compact motorhome with specialized protection for its unique features. Campervans differ from larger Class A, B, and C motorhomes in value, usage patterns, and coverage needs. Whether you own a van conversion or purpose-built campervan, specialized campervan insurance provides appropriate coverage.',
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
    intro: 'Finding the best motorhome insurance provider means identifying the insurer that offers the best combination of price, coverage options, and service quality for your specific situation. There\'s no single "best" provider for everyone — the best insurer for you depends on your motorhome type, age, value, and priorities.',
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
    intro: 'When renting a motorhome, understanding rental insurance is crucial. Rental companies include basic liability insurance, but this often comes with high excess ($2,500-5,000). Rental excess reduction insurance protects you from these excess costs, providing peace of mind during your motorhome holiday.',
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
    intro: 'Auckland motorhome insurance needs differ from other regions due to specific local risks. As the country\'s largest city, Auckland has higher theft rates for motorhomes, denser traffic creating accident risks, and specific storage challenges. Getting motorhome insurance in Auckland means understanding these local considerations.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Auckland-Specific Motorhome Insurance Risks</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Theft Risk:</strong> Auckland has higher motorhome theft rates than other regions. Premium prices reflect this. Installing GPS trackers can reduce your Auckland premiums significantly.</p>
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
    intro: 'Self-contained motorhome insurance covers motorhomes with integrated water, waste, and power systems. Self-contained motorhomes are more valuable, more complex, and have different insurance needs than non-self-contained models. Proper specialist insurance ensures your self-contained motorhome is fully protected.',
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
    intro: 'Imported motorhome insurance covers vehicles from overseas (European, Japanese, American models). Insuring imported motorhomes requires specialist knowledge because insurers must understand overseas specifications, valuation challenges, and parts availability. Our brokers connect you with insurers experienced in imported vehicles.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Insuring Imported Motorhomes</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Popular Imported Models:</strong> Japanese imports dominate (Toyota HiAce, Mitsubishi Rosa, Isuzu). European models (Fiat Ducato-based, Mercedes) are also common. American RVs are less common but occasionally imported. Each requires specific knowledge.</p>
        <p><strong>Valuation Challenges:</strong> Imported motorhomes are harder to value because comparable sales are limited. Get professional valuations from someone familiar with the specific model. Use agreed value insurance to lock in the valuation and avoid disputes.</p>
        <p><strong>Parts & Service:</strong> Ensure your insurer understands parts availability for imported models. Some parts are expensive or hard to source locally. Mechanical breakdown cover becomes more valuable for imported vehicles.</p>
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
    intro: 'Luxury motorhome insurance covers high-value, premium motorhomes including coach conversions, specialty builds, and top-tier imported models. Luxury motorhomes require specialized coverage reflecting their high values ($150,000-$500,000+), complex systems, and unique risks. Specialist insurers understand luxury motorhome needs.',
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
  },
  'caravan-insurance-nz': {
    intro: 'Caravan insurance covers towed caravans, on-road caravans, and caravan conversions through specialist motorhome insurance. Caravans and motorhomes overlap significantly — many people use the terms interchangeably, and caravans can often be insured through motorhome insurance policies. Caravan holidays and freedom camping are hugely popular here.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Caravan vs Motorhome Insurance</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Towed Caravans:</strong> Towed caravans (on-road caravans you pull behind a car) require separate caravan insurance, not motorhome insurance. Motorhome insurance covers self-contained motorhomes and campervans only. If you tow a caravan, ensure it's covered under caravan insurance or as part of a multi-vehicle policy.</p>
        <p><strong>Motorhome-Type Caravans:</strong> Built-in or integrated caravans (where living facilities are integral to the vehicle) are covered by motorhome insurance and qualify for motorhome-specific policies.</p>
        <p><strong>Freedom Camping with Caravans:</strong> Only self-contained motorhomes and caravans with MSD (Motorhome Self-Containment) certification can freedom camp in New Zealand under the Freedom Camping Act 2011. Non-self-contained caravans must use commercial campsites.</p>
        <p><strong>Search Volume Reality:</strong> Many NZ searchers looking for "caravan insurance NZ" are actually seeking motorhome insurance. Motorhome insurance providers often cover what many Kiwis call caravans — campervans and motorhomes. Our brokers understand both caravan and motorhome insurance options.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Campervan Insurance', href: '/motorhome-insurance/campervan-insurance-nz' },
      { text: 'Freedom Camping Insurance', href: '/motorhome-insurance/freedom-camping-insurance-nz' },
      { text: 'Coverage Guide', href: '/coverage' },
    ],
    faqSlice: [5, 12]
  },
  'rv-insurance-nz': {
    intro: 'RV (recreational vehicle) insurance in New Zealand covers motorhomes, campervans, and self-contained recreational vehicles used for touring, holidays, and adventure travel. The term "RV" is commonly used internationally but less common in NZ — Kiwis typically say "motorhome" or "campervan". However, understanding RV insurance helps connect international and domestic terminology.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">RV Insurance in Context</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>What is an RV?:</strong> RVs include motorhomes, Class A/B/C motorhomes, campervans, van conversions, and self-contained vehicles. Locally we typically say "motorhome" or "campervan" instead of "RV", but the coverage needs are identical.</p>
        <p><strong>Imported American RVs:</strong> Some Kiwis import American RVs (larger Class A or Class C motorhomes). These require specialist insurance because they have different dimensions, systems, and specifications than NZ-spec motorhomes. Imported RVs need professional valuations and experienced insurers familiar with overseas specifications.</p>
        <p><strong>RV-Specific Coverage Needs:</strong> Whether you call it an RV or motorhome, coverage should include: comprehensive protection, agreed value for peace of mind, contents cover for camping gear and equipment, roadside assistance for touring, and freedom camping cover if self-contained.</p>
        <p><strong>Insurance Terminology:</strong> Our brokers understand that "RV insurance", "motorhome insurance", "campervan insurance", and "recreational vehicle insurance" all describe the same product type. Use whatever terminology is comfortable — we'll find you the right coverage.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Imported Motorhomes', href: '/motorhome-insurance/imported-motorhome-insurance-nz' },
      { text: 'Best Motorhome Insurance', href: '/motorhome-insurance/best-motorhome-insurance-nz' },
      { text: 'Campervan Insurance', href: '/motorhome-insurance/campervan-insurance-nz' },
    ],
    faqSlice: [5, 12]
  },
  'nzmca-insurance-nz': {
    intro: 'The New Zealand Motor Caravan Association (NZMCA) is a major membership organization for motorhome enthusiasts with 10,000+ members. Many motorhome owners ask whether they should use "NZMCA insurance" — actually, NZMCA doesn\'t provide insurance directly, but endorses Covi Insurance as their preferred provider. Understanding your NZMCA insurance options helps you make an informed decision about the best coverage for your needs.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">NZMCA and Motorhome Insurance</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>What NZMCA Does:</strong> The <a href="https://www.nzmca.org.nz" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 underline">NZMCA (NZ Motor Caravan Association)</a> is an advocacy organization for motorhome owners. They provide resources, campground discounts, event organization, and traveler support. They don't provide insurance but endorse Covi Insurance as their recommended motorhome insurance provider.</p>
        <p><strong>NZMCA-Endorsed Insurance (Covi):</strong> Covi Insurance provides a motorhome policy specifically designed with NZMCA members in mind. NZMCA members may receive special rates through this arrangement. However, this doesn't automatically mean Covi is the best or cheapest option for every motorhome owner.</p>
        <p><strong>You Have Choices:</strong> While Covi offers good coverage, you should always compare with other providers including AA Insurance, Tower, Star Insure, and others. Loyalty to NZMCA shouldn't limit your insurance options. Our brokers compare all providers including Covi, ensuring you find the best value regardless of NZMCA membership status.</p>
        <p><strong>NZMCA Membership Benefits:</strong> NZMCA members enjoy camping discounts, touring guides, roadside support, and community events. These benefits complement your insurance but are separate. Getting comprehensive motorhome insurance is important whether you're an NZMCA member or not.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Best Motorhome Insurance', href: '/motorhome-insurance/best-motorhome-insurance-nz' },
      { text: 'Compare Providers', href: '/compare' },
      { text: 'Coverage Guide', href: '/coverage' },
    ],
    faqSlice: [5, 12]
  },
  'freedom-camping-insurance-nz': {
    intro: 'Freedom camping in New Zealand is legal and popular, but only if your motorhome meets specific requirements. Understanding freedom camping insurance requirements and the NZ Freedom Camping Act 2011 ensures you\'re properly covered and compliant when camping at designated freedom camping sites, council reserves, and public land across New Zealand.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Freedom Camping — Insurance & Compliance</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Freedom Camping Act 2011:</strong> New Zealand\'s <a href="https://www.legislation.govt.nz/act/public/2011/0061/latest/whole.html" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 underline">Freedom Camping Act</a> allows self-contained motorhomes to camp for free at designated sites and council reserves. Non-self-contained motorhomes must use commercial campsites (fee-paying). This distinction directly affects insurance requirements.</p>
        <p><strong>Self-Contained Certification (MSD):</strong> To freedom camp legally, your motorhome must have Ministry of Environment Motorhome Self-Containment (MSD) certification. This certificate verifies your motorhome has integrated water, waste, and power systems meeting government standards. Without MSD certification, you cannot freedom camp — even if your motorhome has the systems.</p>
        <p><strong>Insurance Coverage at Freedom Camping Sites:</strong> Standard motorhome insurance covers you while freedom camping IF: (1) your motorhome is self-contained with valid MSD certification, and (2) your policy explicitly mentions freedom camping coverage. Many policies automatically include this, but always verify with your insurer that freedom camping is covered before relying on it.</p>
        <p><strong>Responsible Freedom Camping:</strong> Freedom camping comes with responsibility — leave no trace, respect local communities, use only designated sites, and maintain your motorhome properly. Your insurance covers accidental damage and theft but not damage from irresponsible behavior. Check local council websites for freedom camping site restrictions and seasonal closures.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Self-Contained Motorhomes', href: '/motorhome-insurance/self-contained-motorhome-insurance-nz' },
      { text: 'Coverage Guide', href: '/coverage' },
      { text: 'FAQs', href: '/faqs' },
    ],
    faqSlice: [5, 12]
  },
  'motorhome-insurance-hamilton': {
    intro: 'Hamilton motorhome insurance protects your asset while you\'re exploring the Waikato region. As the largest city in the Waikato and the country\'s fourth-largest city, Hamilton presents specific motorhome insurance considerations including regional theft rates, traffic patterns, and local storage challenges. Getting appropriate Hamilton-based motorhome insurance requires understanding these local factors.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Hamilton-Specific Motorhome Insurance Considerations</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Hamilton's Position in Waikato:</strong> Hamilton is the regional hub for Waikato motorhome owners. Many use it as a base for exploring the Waikato region, including Lake Taupo, Rotorua, and the King Country. Insurance should reflect usage patterns specific to central North Island touring.</p>
        <p><strong>Theft Risk & Security:</strong> Hamilton has moderate theft risk for motorhomes. Secure storage is important — whether at your home property, a storage facility, or while parked. GPS trackers and alarm systems reduce premiums (typically 5-15% discount) and provide peace of mind in urban areas.</p>
        <p><strong>Storage Options:</strong> Many Hamilton residents have limited on-property storage due to urban density. Discuss your actual storage arrangements with insurers — street parking, driveway parking, garage storage, or facility storage all affect premiums. Some facilities offer secure motorhome storage with 24/7 monitoring.</p>
        <p><strong>Regional Touring Coverage:</strong> If you're using Hamilton as a base for regional touring, ensure your policy covers travel throughout the North Island. Standard motorhome policies cover travel throughout the country, but always confirm geographic scope with your insurer. Winter weather in central North Island may require specific coverage considerations.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Motorhome Insurance Auckland', href: '/motorhome-insurance/motorhome-insurance-auckland' },
      { text: 'Compare Providers', href: '/compare' },
      { text: 'Coverage Guide', href: '/coverage' },
    ],
    faqSlice: [5, 12]
  },
  'motorhome-insurance-dunedin': {
    intro: 'Dunedin motorhome insurance protects your investment while exploring Otago and the lower South Island. Dunedin\'s unique geography, weather patterns, and position as a South Island touring hub create specific insurance considerations. Understanding Dunedin-specific motorhome risks helps you get appropriate coverage for South Island adventures.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Dunedin and South Island Motorhome Insurance</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Coastal Weather & Wind:</strong> Dunedin is known for windy conditions due to its coastal Otago peninsula location. Wind damage affecting motorhome exteriors (antennas, awnings, side panels) is more common here. Comprehensive coverage including weather damage is essential. Coastal salt spray also requires attention to paint and exterior protection.</p>
        <p><strong>South Island Touring Base:</strong> Many Dunedin-based motorhome owners use their vehicles for South Island exploring including Queenstown, Fiordland, and Central Otago. Ensure your policy covers full South Island travel. Winter mountain passes require good mechanical condition and comprehensive coverage. Some insurers offer lay-up periods for seasonal users.</p>
        <p><strong>Adventure Tourism Insurance:</strong> If you're using your motorhome for adventure travel around Milford Sound, adventure activities, or challenging mountain terrain, confirm your policy covers these activities. Some policies may have exclusions for high-risk touring areas.</p>
        <p><strong>Storage in Dunedin:</strong> Dunedin has good motorhome storage facilities and motor home parks. Discuss your storage arrangements — secure parking at facilities typically reduces premiums compared to street parking or exposed storage.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Motorhome Insurance Christchurch', href: '/motorhome-insurance/motorhome-insurance-christchurch' },
      { text: 'Coverage Types', href: '/coverage' },
      { text: 'Best Motorhome Insurance', href: '/motorhome-insurance/best-motorhome-insurance-nz' },
    ],
    faqSlice: [5, 12]
  },
  'motorhome-insurance-queenstown': {
    intro: 'Queenstown motorhome insurance covers your vehicle while you\'re exploring one of the country\'s most popular adventure tourism destinations. Queenstown\'s stunning landscape, challenging roads, high tourism activity, and adventure-focused tourism create unique motorhome insurance considerations. Getting proper coverage ensures you\'re protected during your Otago and Central Otago adventures.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Queenstown & Adventure Motorhome Insurance</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Adventure Touring Territory:</strong> Queenstown is adventure capital — many motorhome owners visit for activities like Milford Sound, Glenorchy, Lake Wakatipu touring, and mountain pass travel. These activities are covered by standard motorhome insurance, but confirm your policy covers adventure tourism areas and challenging terrain.</p>
        <p><strong>Mountain Pass & Winter Driving:</strong> Access to Milford Sound (from Te Anau), Crown Range Pass (to Wanaka), and Cardrona Valley involves challenging mountain driving. Winter driving requires particular caution. While comprehensive motorhome insurance covers accidental damage from driving incidents, ensure your motorhome is mechanically fit for mountain terrain. Regular servicing helps.</p>
        <p><strong>High Tourism & Theft Risk:</strong> Queenstown has high tourism traffic and correspondingly higher theft risk for vehicles and contents. Secure parking at accommodations is important. Travel in groups when possible. Many Queenstown-based campsites offer secure parking — factor this into accommodation planning.</p>
        <p><strong>Seasonal Tourism Activity:</strong> Queenstown experiences peak summer tourism (December-February) and winter sports season (June-August). Consider visiting during shoulder seasons if possible. Winter driving requires extra caution and comprehensive insurance coverage. Lay-up periods are available if you're storing your motorhome seasonally.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Motorhome Insurance Dunedin', href: '/motorhome-insurance/motorhome-insurance-dunedin' },
      { text: 'Adventure & Touring Guide', href: '/coverage' },
      { text: 'Best Motorhome Insurance', href: '/motorhome-insurance/best-motorhome-insurance-nz' },
    ],
    faqSlice: [5, 12]
  },
  'motorhome-insurance-tauranga': {
    intro: 'Tauranga is New Zealand\'s fastest-growing city and the Bay of Plenty\'s commercial hub — home to a thriving motorhome community with easy access to Coromandel Peninsula, Rotorua, and the Eastern Bay of Plenty. Motorhome insurance in Tauranga reflects the region\'s mix of urban storage challenges and year-round adventure touring opportunities.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Tauranga & Bay of Plenty Motorhome Insurance</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Bay of Plenty Touring Base:</strong> Tauranga is a superb base for Bay of Plenty touring — Whakatāne, Ōhope Beach, Cape Runaway, and the Coromandel are all within easy reach. Standard comprehensive motorhome insurance covers travel throughout the region. Ensure your roadside assistance covers remote Eastern Bay of Plenty roads where response times may be longer.</p>
        <p><strong>Urban Storage in Tauranga:</strong> As a fast-growing city, Tauranga has increasing urban density and limited secure motorhome storage. Street parking in residential areas is common but carries higher theft risk. GPS tracking devices can reduce premiums 5-15% and are strongly recommended for Tauranga-stored motorhomes. Dedicated storage facilities in Tauranga East and Greerton offer monitored options.</p>
        <p><strong>Climate and Weather Cover:</strong> Bay of Plenty enjoys warm summers but can experience significant rainfall year-round. Ensure your policy covers weather-related water ingress and storm damage. Comprehensive policies cover hail damage — a consideration during Bay of Plenty summer thunderstorms. Check that your motorhome's roof seals are maintained; insurers may decline water ingress claims attributed to poor maintenance.</p>
        <p><strong>Coastal Motorhome Use:</strong> Many Tauranga motorhome owners use their vehicles at coastal locations including Mount Maunganui, Papamoa Beach, and Ōhope. Coastal salt exposure accelerates corrosion on motorhome components. Wash your motorhome regularly after coastal stays and ensure your insurer is informed of regular coastal use, which may be relevant to long-term maintenance-related claims.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Motorhome Insurance Rotorua', href: '/motorhome-insurance/motorhome-insurance-rotorua' },
      { text: 'Compare Providers', href: '/compare' },
      { text: 'Coverage Guide', href: '/coverage' },
    ],
    faqSlice: [5, 12]
  },
  'motorhome-insurance-palmerston-north': {
    intro: 'Palmerston North sits at the heart of the lower North Island, making it an ideal base for motorhome owners exploring Manawatū, Whanganui, Rangitīkei, and the Ruahine and Tararua ranges. Motorhome insurance in Palmerston North provides protection tailored to central NZ touring, including river valley routes, national park access, and coastal day trips.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Palmerston North & Manawatū Motorhome Insurance</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Central North Island Touring:</strong> Palmerston North owners are within easy reach of Whanganui National Park, Tongariro National Park (via the Desert Road), Hawke\'s Bay, and the Kapiti Coast. Standard comprehensive motorhome insurance covers travel throughout the North Island. Ruahine and Tararua road access can be challenging — ensure mechanical fitness before mountain touring.</p>
        <p><strong>Rural and Regional Roads:</strong> The Manawatū-Whanganui region includes some of New Zealand\'s most scenic but challenging rural roads. The Manawatū Gorge area, Pahīatua Track, and river valley routes require careful driving. Comprehensive cover with good roadside assistance is essential for remote rural touring from a Palmerston North base.</p>
        <p><strong>Storage in Palmerston North:</strong> Palmerston North has good motorhome storage facilities and residential properties often have garage or driveway storage. The city has moderate theft risk — lower than Auckland or Wellington but still worth addressing with security devices. GPS trackers and alarm systems are worthwhile investments regardless of where you store your motorhome.</p>
        <p><strong>Multi-Policy Bundling Opportunity:</strong> Palmerston North is a family city with high rates of home ownership. If you have home and contents insurance alongside your motorhome policy, bundling with a single insurer (AMI and AA both have strong regional presence) can save 10-15% across all policies. Ask about multi-policy discounts when comparing motorhome insurance quotes.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Motorhome Insurance Wellington', href: '/motorhome-insurance/motorhome-insurance-wellington' },
      { text: 'Motorhome Insurance Napier', href: '/motorhome-insurance/motorhome-insurance-napier' },
      { text: 'Compare Providers', href: '/compare' },
    ],
    faqSlice: [5, 12]
  },
  'motorhome-insurance-nelson': {
    intro: 'Nelson is one of New Zealand\'s sunniest cities and a premier motorhome destination — gateway to Abel Tasman National Park, the Marlborough Sounds, and the Kahurangi wilderness. Motorhome insurance in Nelson covers the unique combination of leisure use, coastal freedom camping, and Golden Bay adventures that Nelson-based owners typically pursue.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Nelson & Top of the South Island Motorhome Insurance</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Abel Tasman and Golden Bay Touring:</strong> Nelson-based motorhome owners enjoy world-class access to Abel Tasman National Park, Farewell Spit, and the Heaphy Track trailhead. Golden Bay roads — particularly the descent to Collingwood and beyond — are winding and challenging. Comprehensive cover with quality roadside assistance is essential for remote Golden Bay exploration where response times can be 2+ hours.</p>
        <p><strong>Freedom Camping in the Nelson Region:</strong> Nelson Tasman District Council maintains several freedom camping areas, but rules have evolved in recent years. Ensure your motorhome has current WSC certification before freedom camping. Check the Camping Check app for current Nelson Tasman freedom camping site status — seasonal restrictions apply at popular coastal spots during peak summer.</p>
        <p><strong>Coastal and Marine Environment:</strong> Nelson\'s coastal location means salt-laden air, particularly around Tasman Bay, Mapua, and the outer Marlborough Sounds. Regular motorhome washing after coastal tours helps prevent corrosion. Salt-related damage from poor maintenance may not be covered under comprehensive policies — regular care protects both your motorhome and your claim eligibility.</p>
        <p><strong>Nelson Storage Options:</strong> Nelson has good motorhome storage options including dedicated facilities in Richmond and Stoke. The Nelson-Richmond area has moderate theft risk. Many Nelson residents have good off-road home storage capacity. Secure off-road storage typically attracts lower premiums than street parking — mention your storage arrangements when getting quotes.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Freedom Camping Insurance', href: '/motorhome-insurance/freedom-camping-insurance-nz' },
      { text: 'Motorhome Insurance Christchurch', href: '/motorhome-insurance/motorhome-insurance-christchurch' },
      { text: 'Compare Providers', href: '/compare' },
    ],
    faqSlice: [5, 12]
  },
  'motorhome-insurance-rotorua': {
    intro: 'Rotorua is New Zealand\'s geothermal heart and one of the country\'s most visited tourism destinations — making it a natural base for motorhome owners exploring central North Island. From the Waikato River to the Volcanic Plateau, Rotorua-based motorhome insurance should cover the unique touring patterns and regional conditions of this remarkable area.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Rotorua & Central North Island Motorhome Insurance</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Geothermal Environment Considerations:</strong> Rotorua\'s geothermal environment means hydrogen sulphide in the air, which can accelerate corrosion on metal surfaces. Regular maintenance and washing are essential for motorhomes stored or frequently used in the Rotorua district. While insurers cover accidental damage from external causes, damage from poor maintenance or gradual corrosion is typically excluded — maintain your motorhome diligently in this environment.</p>
        <p><strong>Tourism Hub and Theft Risk:</strong> Rotorua\'s high tourism traffic creates elevated theft risk for motorhomes at popular sites including Whakarewarewa, Te Puia, and government gardens. Never leave valuables visible in your motorhome. Use secure parking where available. GPS tracking is particularly valuable in high-visitor areas. Your insurer covers theft, but prevention is always preferable.</p>
        <p><strong>Volcanic Plateau Touring:</strong> Rotorua is the gateway to Tongariro National Park, Taupō, and the Volcanic Plateau. State Highway 5 (Rotorua-Taupō) and the Desert Road (SH1 through Tongariro) are popular touring routes. Seasonal closures of Desert Road during winter snow affect planning. Comprehensive cover with quality roadside assistance is essential for Plateau touring.</p>
        <p><strong>Lake and Forest Access:</strong> The Rotorua Lakes district offers exceptional motorhome touring — Lakes Rotorua, Rotoiti, Tarawera, and the Whirinaki Te Pua-a-Tāne Conservation Park provide stunning camping. Forestry roads require care — check your policy covers off-seal driving, as some policies restrict cover on unpaved roads. Specialist motorhome policies from Covi and Star typically have broader geographic coverage than mainstream car-based policies.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Motorhome Insurance Tauranga', href: '/motorhome-insurance/motorhome-insurance-tauranga' },
      { text: 'Motorhome Insurance Hamilton', href: '/motorhome-insurance/motorhome-insurance-hamilton' },
      { text: 'Compare Providers', href: '/compare' },
    ],
    faqSlice: [5, 12]
  },
  'motorhome-insurance-napier': {
    intro: 'Napier is the Art Deco capital of New Zealand and the commercial heart of Hawke\'s Bay — a sun-drenched region popular with motorhome owners for its wineries, beaches, and Cape Kidnappers gannet colony. Motorhome insurance in Napier and Hawke\'s Bay reflects the region\'s touring appeal and warm, largely benign climate.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Napier & Hawke\'s Bay Motorhome Insurance</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Hawke\'s Bay Touring Routes:</strong> Napier-based motorhome owners enjoy excellent touring across Hawke\'s Bay — the Hawke\'s Bay Wine Country, Cape Kidnappers, Wairoa and the Mahia Peninsula, and the Hawke\'s Bay coastal walkway. Standard comprehensive motorhome insurance covers travel throughout the region. The Napier-Taupō Highway (SH5) provides access to the central North Island for extended touring.</p>
        <p><strong>Mediterranean Climate Benefits:</strong> Hawke\'s Bay\'s warm, dry climate is kind to motorhomes — less moisture means lower risk of water ingress and mould compared to wetter regions. This generally translates to well-maintained motorhome fleets and lower weather-related claim frequency. However, summer hail storms in the region can cause significant damage — ensure your comprehensive policy covers hail.</p>
        <p><strong>Freedom Camping on the East Coast:</strong> Hawke\'s Bay and Gisborne regions offer excellent freedom camping opportunities along the east coast. Napier City Council and Hastings District Council both maintain freedom camping areas — check Camping Check for current designations. Ensure your motorhome has valid WSC certification before freedom camping at self-contained-only sites along the East Cape route.</p>
        <p><strong>Napier Storage Conditions:</strong> Napier\'s coastal location means salt air is a consideration for motorhome storage and maintenance. Properties in central Napier and Marine Parade environs have elevated salt exposure. Regular washing and marine-grade protection for metal components helps. Discuss your storage location with your insurer — coastal proximity may affect some policy terms and premium calculations.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Motorhome Insurance Palmerston North', href: '/motorhome-insurance/motorhome-insurance-palmerston-north' },
      { text: 'Freedom Camping Insurance', href: '/motorhome-insurance/freedom-camping-insurance-nz' },
      { text: 'Compare Providers', href: '/compare' },
    ],
    faqSlice: [5, 12]
  },
  'motorhome-insurance-new-plymouth': {
    intro: 'New Plymouth is Taranaki\'s vibrant coastal city, dominated by the iconic cone of Mt Taranaki and surrounded by Surf Highway 45\'s black-sand beaches. Motorhome insurance in New Plymouth reflects the region\'s mix of mountain adventure, coastal touring, and the Taranaki Ring Road\'s spectacular circumnavigation of the maunga.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">New Plymouth & Taranaki Motorhome Insurance</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Mt Taranaki and Egmont National Park:</strong> Mt Taranaki (2,518m) dominates Taranaki and provides spectacular motorhome touring via the Taranaki Ring Road. Access roads to Egmont National Park\'s three visitor centres (North Egmont, Dawson Falls, East Egmont) are sealed but steep in places. Comprehensive motorhome insurance covers mountain road incidents. Ensure your motorhome is mechanically fit before mountain touring — breakdowns on steep access roads are challenging recovery situations.</p>
        <p><strong>Surf Highway 45 Touring:</strong> The Surf Highway (SH45) runs 105km along Taranaki\'s black-sand coastline through Oakura, Ōpunakē, and Hāwera. This is spectacular motorhome country with a range of camping options. Coastal salt exposure is significant on the Taranaki coast — regular motorhome washing after Surf Highway touring is important for long-term maintenance.</p>
        <p><strong>Taranaki Weather Patterns:</strong> Mt Taranaki creates its own weather — rapid weather changes are common, particularly on the upper mountain and western flanks. Comprehensive motorhome insurance covers weather-related damage. Motorhomes parked in exposed coastal or mountain locations during storms should be positioned appropriately. Check weather forecasts before parking in exposed locations during westerly or northwesterly fronts.</p>
        <p><strong>New Plymouth Storage:</strong> New Plymouth has good motorhome storage options, with most residential properties having adequate off-road parking. The city has moderate theft risk. New Plymouth\'s arts and culture scene (Govett-Brewster, Pukekura Park) makes it an excellent base for motorhome owners who want city amenities alongside adventure touring. Discuss your storage arrangements and usage patterns with your insurer for the most accurate premium.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Motorhome Insurance Hamilton', href: '/motorhome-insurance/motorhome-insurance-hamilton' },
      { text: 'Motorhome Insurance Palmerston North', href: '/motorhome-insurance/motorhome-insurance-palmerston-north' },
      { text: 'Compare Providers', href: '/compare' },
    ],
    faqSlice: [5, 12]
  },
  'motorhome-insurance-whangarei': {
    intro: 'Whangārei is Northland\'s only city and the gateway to the Far North — home to beautiful harbours, the Poor Knights Islands Marine Reserve, and the winding roads leading to the Bay of Islands and Cape Reinga. Motorhome insurance in Whangārei covers both city-based storage risks and the spectacular Northland touring circuits that make this region one of NZ\'s most popular motorhome destinations.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Whangārei & Northland Motorhome Insurance</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Northland Touring — Bay of Islands and Beyond:</strong> Whangārei-based motorhome owners have incredible touring within reach: the Bay of Islands (Paihia, Russell, Kerikeri), the Hokianga Harbour, Ninety Mile Beach, and Cape Reinga. These are quintessential New Zealand motorhome routes. Ninety Mile Beach driving requires care — beach driving carries risks not covered by standard motorhome insurance (sand vehicle damage, tide-related incidents). Stick to sealed roads and designated access points.</p>
        <p><strong>Subtropical Climate and Motorhome Maintenance:</strong> Northland\'s warm, humid subtropical climate is beautiful for touring but challenging for motorhome maintenance. High humidity accelerates mould inside motorhomes, particularly in habitation spaces. Ensure adequate ventilation when parked. Corrosion on metal components is a concern — particularly for motorhomes stored near Whangārei\'s harbour. Regular washing and protective coating of metal components reduces long-term maintenance claims risk.</p>
        <p><strong>Freedom Camping in Northland:</strong> Northland has excellent freedom camping opportunities, from DOC sites along the Kauri Coast to Northland Regional Council designated areas. Whangarei District Council\'s freedom camping areas include Marsden Cove and Langs Beach environs. Always check current designations on the Camping Check app — Northland camping rules have evolved in response to increased freedom camping pressure on the region\'s infrastructure.</p>
        <p><strong>Whangārei Urban Insurance Considerations:</strong> As Northland\'s urban centre, Whangārei has moderate theft risk — higher than rural Northland but lower than Auckland. The city\'s growing population and tourism traffic create typical urban motorhome storage challenges. Dedicated storage facilities operate in the city. GPS tracking and alarm systems are worthwhile investments for motorhomes stored in Whangārei, particularly near the town basin area.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Motorhome Insurance Auckland', href: '/motorhome-insurance/motorhome-insurance-auckland' },
      { text: 'Freedom Camping Insurance', href: '/motorhome-insurance/freedom-camping-insurance-nz' },
      { text: 'Compare Providers', href: '/compare' },
    ],
    faqSlice: [5, 12]
  },
  'motorhome-insurance-invercargill': {
    intro: 'Invercargill is Southland\'s capital and the southernmost city in New Zealand — the gateway to Fiordland, Stewart Island/Rakiura, and the Central Otago wine country. Motorhome insurance in Invercargill reflects the region\'s spectacular but challenging touring environment, including Fiordland\'s remote roads, Stewart Island ferry crossings, and the Southland\'s demanding winter conditions.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Invercargill & Southland Motorhome Insurance</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Fiordland Gateway:</strong> Invercargill is the natural base for Fiordland touring — Milford Sound, Doubtful Sound, and Te Anau are all accessible for day or overnight motorhome trips. The Milford Road (SH94) is one of NZ\'s most spectacular but demanding drives — narrow sections, avalanche risk in winter, and changeable weather. Comprehensive motorhome insurance with quality roadside assistance is essential for Fiordland touring. Response times to remote Fiordland locations can be 3-4 hours.</p>
        <p><strong>Stewart Island/Rakiura Access:</strong> Stewart Island ferry crossings and the island\'s limited road network create specific considerations. Motorhome transport to Stewart Island is limited and generally impractical. However, Invercargill-based motorhome owners often use their vehicles for the Southland and Catlins Coast touring that frames a Stewart Island visit. Catlins roads include unsealed sections — check your policy covers travel on unsealed roads.</p>
        <p><strong>Southland Winter Conditions:</strong> Invercargill experiences New Zealand\'s most consistent winter frost and snow risk. Black ice on roads, particularly on elevated sections of the Milford Road and Central Otago access routes, requires winter driving awareness. Comprehensive motorhome insurance covers weather-related accidents. Ensure your motorhome has appropriate winter tyres or chains if you plan winter touring in elevated Southland areas.</p>
        <p><strong>Invercargill Storage Advantages:</strong> As a smaller city, Invercargill typically has lower theft risk than Auckland, Wellington, or Christchurch. Many Invercargill properties have good off-road motorhome storage capacity — a genuine advantage for premium calculations. Secure home storage often attracts lower premiums than urban street parking. Discuss your storage location and touring patterns with your insurer to ensure your premium accurately reflects your lower-risk Southland profile.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Motorhome Insurance Queenstown', href: '/motorhome-insurance/motorhome-insurance-queenstown' },
      { text: 'Motorhome Insurance Dunedin', href: '/motorhome-insurance/motorhome-insurance-dunedin' },
      { text: 'Compare Providers', href: '/compare' },
    ],
    faqSlice: [5, 12]
  },
  'motorhome-storage-insurance-nz': {
    intro: 'Motorhome storage insurance protects your RV when it\'s not in active use — whether during winter lay-up, extended travel overseas, or while your motorhome awaits a sale or repair. Many owners underestimate the risks a stored motorhome faces: theft, fire, vandalism, water damage, and pest damage can all occur while your vehicle is stationary. Storage-period cover keeps you protected at a reduced premium.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Motorhome Storage Insurance — What You Need to Know</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Why Storage Insurance Matters:</strong> A motorhome in storage is not a zero-risk asset. Theft from storage facilities and home properties is common — motorhomes are high-value targets. Fire risk remains from LPG systems and electrical components. Water ingress from failed roof seals, blocked drainage, or storm damage can cause $5,000-$20,000 in mould and structural damage. Rodent damage to wiring harnesses is another storage-period risk. Cancelling insurance during storage to save money is false economy.</p>
        <p><strong>Laid-Up Cover — The Smart Storage Solution:</strong> Most specialist motorhome insurers offer a "laid-up" or "storage period" policy option. This removes the driving and accident component (since the motorhome won\'t be on the road) while retaining fire, theft, weather, and vandalism protection. Laid-up cover typically costs 30-50% less than full comprehensive cover. Activating laid-up cover requires notifying your insurer before the storage period begins — you can\'t apply it retrospectively.</p>
        <p><strong>Storage Facility vs Home Storage for Insurance:</strong> Where you store your motorhome during lay-up affects your premium. Dedicated motorhome storage facilities with 24/7 CCTV, gated access, and security patrols represent lower risk than home driveway storage. Some insurers offer 5-15% premium discounts for approved storage facilities. Home garage storage is intermediate — more secure than street parking but less monitored than a facility. Discuss your storage location with your insurer and ensure it\'s accurately noted on your policy.</p>
        <p><strong>Preparing for Storage — Insurance Implications:</strong> Proper pre-storage preparation is not just good practice — it affects your claim eligibility. Drain and dry water tanks to prevent mould and bacterial growth. Service the LPG system and ensure all gas connections are secure. Disconnect the leisure battery. Seal all ventilation points against vermin. Document the motorhome\'s condition with date-stamped photographs before storage commences. If a claim arises during storage, this documentation establishes the pre-storage condition and supports your claim.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Seasonal Motorhome Insurance', href: '/motorhome-insurance/seasonal-motorhome-insurance-nz' },
      { text: 'Coverage Types', href: '/coverage' },
      { text: 'Compare Providers', href: '/compare' },
    ],
    faqSlice: [0, 5]
  },
  'seasonal-motorhome-insurance-nz': {
    intro: 'Seasonal motorhome insurance allows owners who use their motorhome only part of the year to reduce premiums during off-season periods while maintaining essential protection. New Zealand\'s climate and motorhome culture mean many owners travel heavily October-April and store their vehicles through winter. Seasonal or lay-up policies are the smart way to manage this cycle cost-effectively.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Seasonal Motorhome Cover — How It Works</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>The Seasonal Use Pattern in NZ:</strong> New Zealand\'s motorhome season broadly runs from late October through to early May, aligned with school holidays, summer festivals, and the best freedom camping weather. Many owners travel intensively during this period then store their motorhomes through the cooler months (May-September). This six-month active and six-month inactive pattern creates a natural opportunity for seasonal insurance structuring.</p>
        <p><strong>How Seasonal Cover Reduces Costs:</strong> During active touring periods, you maintain full comprehensive cover including driving, accident, theft, and weather protection. During lay-up periods, you switch to storage-only cover — removing the driving component and reducing premiums by 30-50%. Over a full year, this can save $150-$400 depending on your motorhome\'s value and coverage. The key is proactively notifying your insurer when you\'re transitioning between active and lay-up periods.</p>
        <p><strong>Transitioning Between Active and Lay-Up Cover:</strong> Switching between full and lay-up cover requires formal notification to your insurer — typically a phone call or online request. Most insurers process the change within 24-48 hours. Do not assume you\'re on lay-up cover just because you\'ve parked up for the winter — you must request the change. Similarly, when recommencing touring in spring, switch back to full comprehensive cover before taking the motorhome on the road.</p>
        <p><strong>What Seasonal Cover Includes and Excludes:</strong> During lay-up periods, seasonal cover typically includes: theft (including forced entry and conversion theft), fire and explosion, weather and storm damage, vandalism and malicious damage, and liability for injury occurring on or near the motorhome. It excludes: accidental damage from driving, collision damage, and incidents occurring while the motorhome is being driven. If you need to move the motorhome during lay-up (e.g., to a storage facility), ensure you reinstate full cover for the duration of the drive.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Motorhome Storage Insurance', href: '/motorhome-insurance/motorhome-storage-insurance-nz' },
      { text: 'Motorhome Insurance Cost', href: '/motorhome-insurance/motorhome-insurance-cost-nz' },
      { text: 'Compare Providers', href: '/compare' },
    ],
    faqSlice: [0, 5]
  },
  'full-time-motorhome-insurance-nz': {
    intro: 'Full-time motorhome insurance is a specialist product for Kiwis who live permanently in their motorhome. Standard recreational motorhome policies are underwritten for part-time use — if you live in your motorhome year-round, you need a policy that reflects your actual lifestyle. Full-time living changes your risk profile, contents requirements, and liability exposure in ways standard policies may not adequately cover.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Full-Time Motorhome Insurance Essentials</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Why Standard Policies Fall Short for Full-Timers:</strong> Standard recreational motorhome insurance is designed for vehicles used for holidays and weekends, not full-time residence. Policies may contain clauses excluding "residential use" or "permanent habitation." Usage patterns for full-time living — many more kilometres driven annually, more time at freedom camping sites, greater wear on habitation systems — are materially different from recreational use. Failing to disclose full-time use is a misrepresentation that can invalidate your policy entirely.</p>
        <p><strong>Contents Requirements for Full-Time Living:</strong> When your motorhome is your only home, the contents are everything you own. Clothing, electronics, kitchen equipment, tools, bedding, entertainment systems, work equipment — the replacement cost of a full-timer\'s contents often exceeds $20,000-$30,000. Standard policies with $3,000-$10,000 contents limits are grossly inadequate for full-time living. You need contents cover that reflects the reality of your belongings.</p>
        <p><strong>Finding the Right Full-Timer Policy:</strong> Covi Insurance has experience with full-time living scenarios and can structure policies appropriately. Star Insure\'s CamperCare can be adapted for full-time use. The key is honest, open communication with your broker about your actual usage. Our brokers specialise in finding insurers who understand full-time motorhome living and can structure cover that genuinely protects your lifestyle — not a standard recreational policy that leaves you exposed.</p>
        <p><strong>Practical Requirements for Full-Time Living:</strong> Full-time motorhome living in New Zealand requires a valid WSC certificate for freedom camping (essential when you have no home base for commercial campground stays), a permanent address registered elsewhere for driver licensing and electoral roll purposes, robust roadside assistance membership (a breakdown is a genuine emergency — you have no other home), and regular motorhome servicing to maintain both mechanical reliability and insurance policy compliance. Our brokers can advise on the complete picture of full-time motorhome insurance requirements.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'Self-Contained Motorhome Insurance', href: '/motorhome-insurance/self-contained-motorhome-insurance-nz' },
      { text: 'Freedom Camping Insurance', href: '/motorhome-insurance/freedom-camping-insurance-nz' },
      { text: 'Compare Providers', href: '/compare' },
    ],
    faqSlice: [5, 12]
  },
  'motorhome-insurance-over-65-nz': {
    intro: 'Motorhome ownership is hugely popular among New Zealand\'s retired and semi-retired community — the freedom of the open road, NZMCA membership, freedom camping, and extended touring align perfectly with retirement lifestyle. Motorhome insurance for over 65s has some specific considerations including age-related excess, policy conditions, and the particular value of agreed value cover for retirees on fixed incomes.',
    guide: <>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Motorhome Insurance for Retired and Senior Owners</h3>
      <div className="space-y-4 text-slate-700">
        <p><strong>Age-Related Excess — What to Expect:</strong> Some insurers apply an age-related excess loading for primary drivers over 70 or 75, typically an additional $250-$500 on top of the standard excess. This reflects actuarial data about claims frequency in older age groups. Not all insurers apply age loadings at the same age threshold — Covi Insurance, as a specialist motorhome insurer, has more experience structuring policies for older motorhome owners and may offer more favourable terms than mainstream providers. Shop around specifically asking about any age-related excess loading.</p>
        <p><strong>Agreed Value — Essential for Retirees:</strong> For retirees on fixed incomes, the certainty of agreed value motorhome insurance is particularly valuable. Knowing exactly what you\'ll receive if your motorhome is written off allows for proper retirement financial planning. Market value insurance\'s uncertainty — where payout depends on depreciation and market conditions at the time of claim — is a financial risk that retirees are generally better positioned to avoid. Choose agreed value, particularly for motorhomes worth $50,000 or more.</p>
        <p><strong>NZMCA Membership — The Retiree\'s Motorhome Community:</strong> NZMCA membership is disproportionately popular with retired motorhome owners, and for good reason — member parks offer affordable accommodation, the community provides social connection, and the advocacy work protects freedom camping access that retirees use heavily. NZMCA membership, combined with Covi Insurance (NZMCA\'s endorsed insurer), represents a strong foundation for retired motorhome owners\' insurance and lifestyle needs.</p>
        <p><strong>Medical and Travel Considerations:</strong> Motorhome insurance covers the vehicle but not medical costs if you\'re injured in an incident. New Zealand\'s ACC scheme covers accident-related injuries for NZ residents, regardless of age or fault. However, if you travel internationally in your motorhome (unlikely but some owners do) or undertake activities beyond standard motorhome touring, ensure appropriate travel or personal accident cover supplements your motorhome policy. Our brokers can advise on the complete insurance picture for retired motorhome owners.</p>
      </div>
    </>,
    relatedLinks: [
      { text: 'NZMCA Insurance Guide', href: '/motorhome-insurance/nzmca-insurance-nz' },
      { text: 'Agreed Value Coverage', href: '/types/agreed-value' },
      { text: 'Compare Providers', href: '/compare' },
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
    intro: 'Finding the right motorhome insurance coverage tailored to your specific needs is essential. Get quotes from our panel of leading motorhome insurance providers within 24 hours.',
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
      description: 'Get quotes within 24 hours with no obligation and no broker fees.',
    },
  ];

  const faqItems = faqs.slice(pageContent.faqSlice[0], pageContent.faqSlice[1]);

  const breadcrumbs = [
    { name: 'Home', url: 'https://motorhomeinsurance.co.nz' },
    { name: 'Motorhome Insurance', url: 'https://motorhomeinsurance.co.nz/motorhome-insurance/' },
    { name: page.title, url: `https://motorhomeinsurance.co.nz/motorhome-insurance/${slug}` }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <BreadcrumbSchema crumbs={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${slugHeroImages[slug] || '/hero-motorhome-1.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/30" />
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{page.h1}</h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Find the right motorhome insurance coverage tailored to your specific needs. Get quotes from our leading providers within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* ── Left: main content ── */}
            <div className="lg:col-span-8">

              {/* Intro */}
              <p className="text-lg text-slate-700 leading-relaxed mb-12">
                {pageContent.intro}
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="p-6 rounded-2xl bg-sky-50 border border-sky-200">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* Detailed Guide */}
              {pageContent.guide && (
                <div className="mb-12">
                  {pageContent.guide}
                </div>
              )}

              {/* FAQ */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {faqItems.map((faq) => (
                    <details key={faq.slug} className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-sky-300 transition-colors">
                      <summary className="flex items-center justify-between cursor-pointer gap-4">
                        <span className="font-semibold text-slate-900">{faq.question}</span>
                        <span className="text-sky-600 flex-shrink-0 group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <p className="text-slate-700 text-sm mt-4 leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>

              {/* Related Links */}
              <div className="mb-12">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Related Guides</h3>
                <div className="flex flex-wrap gap-3">
                  {pageContent.relatedLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg hover:border-sky-300 hover:bg-sky-50 transition-all font-semibold text-sm text-sky-600 hover:text-sky-700">
                      {link.text} →
                    </Link>
                  ))}
                </div>
              </div>

              {/* FMA Note */}
              <p className="text-xs text-slate-400 border-t border-slate-100 pt-6">
                MotorHomeInsurance.co.nz is a no-fee comparison service. All insurance is provided by licensed New Zealand insurers regulated by the FMA.
              </p>
            </div>

            {/* ── Right: sticky quote form ── */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <QuoteForm mode="compact" />

                {/* CTA panel */}
                <div className="bg-slate-900 rounded-2xl p-6 text-center">
                  <h3 className="text-white font-bold text-lg mb-2">Need help choosing?</h3>
                  <p className="text-slate-400 text-sm mb-4">Our brokers are happy to talk through your options.</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
                    Contact Us →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
