'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/faqs';
import QuoteForm from '@/components/QuoteForm';

export default function FAQsPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  // Group FAQs by category
  const faqsByCategory: Record<string, typeof faqs> = {
    'Getting a Quote': faqs.slice(0, 5),
    'Coverage Questions': faqs.slice(5, 12),
    'Cost & Premiums': faqs.slice(12, 17),
    'Claims & Disputes': faqs.slice(17, 21),
    'Specialist Situations': faqs.slice(21, 25),
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-200">Find answers to common questions about motorhome insurance in New Zealand.</p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          {Object.entries(faqsByCategory).map(([category, categoryFaqs]) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                  {Object.keys(faqsByCategory).indexOf(category) + 1}
                </span>
                {category}
              </h2>

              <div className="space-y-3">
                {categoryFaqs.map((faq) => (
                  <div key={faq.slug} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-sky-300 transition-all duration-200">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === faq.slug ? null : faq.slug)}
                      className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                    >
                      <h3 className="font-bold text-slate-900 text-left text-base">{faq.question}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-sky-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                          expandedFAQ === faq.slug ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedFAQ === faq.slug && (
                      <div className="px-6 py-5 border-t border-slate-100 bg-slate-50/50">
                        <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Still Have Questions?</h3>
            <p className="text-slate-700 mb-6">
              Our licensed brokers are here to help. Get in touch and we'll answer any questions about motorhome insurance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:098859549" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                <span>Call 09 885 9549</span>
              </a>
              <a href="mailto:hello@cover4you.co.nz" className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300">
                <span>Email us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <QuoteForm mode="full" />
    </>
  );
}
