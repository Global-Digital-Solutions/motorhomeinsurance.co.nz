import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

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

export default function CoveragePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-end px-4 sm:px-6 lg:px-8 pt-28 pb-32"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop)',
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

      {/* What Is Covered Section */}
      <section className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/20 p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">What Motorhome Insurance Covers</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Covered
                </h3>
                <ul className="space-y-3">
                  {whatsCovered.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-600" />
                  Not Covered
                </h3>
                <ul className="space-y-3">
                  {whatsNotCovered.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-red-600 font-bold mt-1">✕</span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <p className="text-slate-700 leading-relaxed">
                Coverage details vary by policy and insurer. Always review your specific policy wording to understand exactly what is and isn't covered. Contact your insurer if you're unsure about any coverage aspect or need clarification on specific scenarios.
              </p>
            </div>
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
