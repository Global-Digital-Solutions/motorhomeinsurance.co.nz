import { notFound } from 'next/navigation';
import Link from 'next/link';
import { coverageTypes } from '@/data/coverage-types';
import QuoteForm from '@/components/QuoteForm';

export const dynamicParams = false;

const unsplashImages: Record<string, string> = {
  comprehensive: 'photo-1558618666-fcd25c85cd64',
  'third-party-liability': 'photo-1469854523086-cc02fe5d8800',
  'agreed-value': 'photo-1533104816931-20fa691ff6ca',
  'market-value': 'photo-1544735716-392fe2489ffa',
  'contents-cover': 'photo-1609587312208-cea54be969e7',
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

export default async function CoverageTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const type = coverageTypes.find((t) => t.slug === slug);

  if (!type) {
    notFound();
  }

  const imageId = unsplashImages[slug] || 'photo-1558618666-fcd25c85cd64';
  const imageUrl = `https://images.unsplash.com/${imageId}?w=1920&h=1080&fit=crop`;

  const keyFeatures = [
    'Comprehensive protection against covered perils',
    'Flexible excess options to suit your budget',
    'Fast and fair claims settlement',
    'Optional add-ons available',
    'Support from licensed NZ brokers',
    'Competitive pricing from multiple providers',
  ];

  const whoIsItFor = 'Motorhome owners who want protection tailored to their specific coverage needs and circumstances. Whether you own a campervan, Class A, B or C motorhome, or coach, we can help you find the right coverage level.';

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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
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
                Get free quotes from NZ's top motorhome insurers and find the right {type.title.toLowerCase()} coverage for your needs.
              </p>
              <Link href="/#quote-form" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-sky-500/25">
                Get a Free Quote
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
