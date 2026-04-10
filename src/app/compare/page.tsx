import { CheckCircle, XCircle } from 'lucide-react';
import { providers } from '@/data/providers';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';

export const metadata = {
  title: 'Compare Motorhome Insurance Providers NZ | MotorHomeInsurance.co.nz',
  description: 'Compare NZ motorhome insurance providers side-by-side. See ratings, prices, features, and choose the best coverage for your motorhome.',
};

export default function ComparePage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Compare Motorhome Insurance Providers</h1>
          <p className="text-xl text-slate-200">See how NZ's top motorhome insurers stack up on coverage, features, and value.</p>
        </div>
      </section>

      {/* Provider Cards Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Featured Providers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {providers.map((provider) => (
              <div key={provider.name} className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{provider.name}</h3>
                    <span className="text-2xl">{provider.logo}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < Math.floor(provider.rating) ? 'text-yellow-300 text-lg' : 'text-slate-300 text-lg'}>★</span>
                    ))}
                    <span className="text-sky-100 text-sm ml-2">{provider.rating}/5</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-sm text-slate-600 mb-2">Price Tier</p>
                    <p className="text-lg font-bold text-slate-900">{provider.price}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Features</h4>
                    <ul className="space-y-1.5 text-sm">
                      {provider.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700">
                          <span className="text-sky-600 mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-200">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 mb-1 text-green-700">Pros</h4>
                      <p className="text-sm text-slate-700">{provider.pros}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 mb-1 text-orange-700">Cons</h4>
                      <p className="text-sm text-slate-700">{provider.cons}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Compare Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-slate-200">
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

      <QuoteForm mode="full" />
    </>
  );
}
