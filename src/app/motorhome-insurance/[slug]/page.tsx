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

export default async function InsuranceLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = insurancePages.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

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

  const faqItems = faqs.slice(0, 3);

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
              Finding the right motorhome insurance in New Zealand means understanding your coverage options and comparing quotes from multiple providers.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              MotorHomeInsurance.co.nz helps you navigate the process with expert guidance and impartial comparisons from licensed NZ brokers.
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
