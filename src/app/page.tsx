'use client';

import Link from 'next/link';
import { useState } from 'react';
import AnimatedStats from '@/components/AnimatedStats';
import HowItWorksSection from '@/components/HowItWorksSection';
import QuoteForm from '@/components/QuoteForm';
import HeroCarousel from '@/components/HeroCarousel';
import { faqs } from '@/data/faqs';
import { coverageTypes } from '@/data/coverage-types';
import { blogPosts } from '@/data/blog-posts';
import {
  Shield,
  CheckCircle2,
  Lock,
  Zap,
  MessageCircle,
  AlertTriangle,
  Heart,
  Wallet,
  Users,
  Flame,
  ChevronDown,
} from 'lucide-react';

interface FAQItem {
  slug: string;
  question: string;
  answer: string;
}

export default function HomePage() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const homepageStaticFAQs = [
    {
      slug: 'do-i-need-motorhome-insurance',
      question: 'Do I need motorhome insurance in NZ?',
      answer: 'While not legally mandatory like vehicle registration, motorhome insurance is essential. Your standard car policy typically only covers your motorhome while driving — once parked at a campground or stored at home, you\'re uninsured. Third-party liability protection is critical because if your motorhome damages someone else\'s property or causes injury, you could face massive personal liability. ICNZ recommends dedicated motorhome insurance for all owners.'
    },
    {
      slug: 'what-does-comprehensive-cover',
      question: 'What does comprehensive motorhome insurance cover?',
      answer: 'Comprehensive motorhome insurance covers accidental damage from collisions, theft of your motorhome or parts, fire damage, weather-related damage including storms and hail, vandalism and malicious damage, and third-party liability (typically up to $20 million). Many policies also include roadside assistance, emergency accommodation costs if your motorhome becomes uninhabitable, and optional add-ons like contents cover for your camping gear and personal items.'
    },
    {
      slug: 'how-much-motorhome-insurance-cost',
      question: 'How much does motorhome insurance cost in NZ?',
      answer: 'Motorhome insurance premiums typically range from $200 to $800+ per year, depending on your motorhome\'s value, age, type, usage patterns, location, chosen excess, and security measures. Self-contained motorhomes generally cost more to insure than non-self-contained models due to their higher value and complexity. The best way to find competitive pricing is to get quotes from multiple providers — prices vary significantly.'
    },
    {
      slug: 'agreed-value-vs-market-value-faq',
      question: 'What is agreed value vs market value?',
      answer: 'With agreed value insurance, you and your insurer agree on your motorhome\'s value when taking out the policy. If it\'s written off, stolen, or damaged beyond repair, you receive that exact amount with no depreciation arguments. Market value insurance pays what your motorhome is worth at the time of loss — which may be less than your purchase price. Agreed value offers certainty and peace of mind, while market value typically has lower premiums.'
    },
    {
      slug: 'insure-imported-motorhome',
      question: 'Can I insure an imported motorhome?',
      answer: 'Yes, imported motorhomes can be insured in New Zealand, though you may need to work with a specialist insurer familiar with overseas models. Japanese imports like Toyota HiAce and Mitsubishi Rosa are increasingly popular in NZ. Get a professional valuation before requesting quotes, provide complete import documentation, and be upfront with insurers about the motorhome\'s origin. Specialist motorhome insurers typically have the most experience with imported vehicles.'
    },
    {
      slug: 'freedom-camping-cover',
      question: 'Does my policy cover me at freedom camping sites?',
      answer: 'This depends on your policy wording and whether your motorhome is self-contained. New Zealand\'s Freedom Camping Act 2011 allows self-contained motorhomes to freedom camp at designated sites and council reserves. Your comprehensive motorhome insurance covers you at freedom camping sites, but you must ensure your motorhome meets self-contained requirements (integrated water, waste, and power systems). Always check your specific policy and site rules before freedom camping.'
    }
  ];

  const whyEssential = [
    {
      icon: AlertTriangle,
      title: 'Standard Car Insurance Doesn\'t Cover You',
      description: 'Most car policies only cover your motorhome while driving. Once parked at a campground, you\'re uninsured without standalone motorhome cover.',
    },
    {
      icon: Flame,
      title: 'Protection Against Theft & Fire',
      description: 'Motorhome theft is rising in NZ. Comprehensive cover protects whether at home, campsites, or storage — 24/7 protection.',
    },
    {
      icon: Heart,
      title: '$20M Liability Protection',
      description: 'If your motorhome damages someone else\'s property, you could face massive costs. Third-party liability cover protects you completely.',
    },
    {
      icon: Wallet,
      title: 'Protect Your Investment',
      description: 'Motorhomes cost $20,000-$150,000+. Don\'t leave this investment exposed without proper standalone insurance.',
    },
  ];

  const displayedFAQs = (homepageStaticFAQs as FAQItem[]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MotorHomeInsurance.co.nz",
            "url": "https://motorhomeinsurance.co.nz",
            "logo": "https://motorhomeinsurance.co.nz/favicon.ico",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+64-9-885-9549",
              "contactType": "customer service",
              "areaServed": "NZ",
              "availableLanguage": "English"
            },
            "description": "New Zealand's specialist motorhome insurance comparison service connecting Kiwis with licensed insurance brokers."
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "MotorHomeInsurance.co.nz",
            "url": "https://motorhomeinsurance.co.nz",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://motorhomeinsurance.co.nz/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: displayedFAQs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer.replace(/<[^>]*>/g, '') },
            })),
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] lg:min-h-[100vh] flex items-center overflow-hidden">
          <HeroCarousel />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 lg:pt-0 lg:pb-0">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <Shield className="w-4 h-4 text-sky-400" />
                <span className="text-sm text-white font-medium">Connect with Licensed Insurance Brokers</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Protect Your Motorhome
                <span className="block bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                  With Confidence
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Compare top NZ motorhome insurance providers in minutes. Campervans, Class A, B & C motorhomes, coaches — get comprehensive cover tailored to your needs.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: Shield, text: 'NZ Owned & Operated' },
                  { icon: CheckCircle2, text: 'No Broker Fees' },
                  { icon: Lock, text: '256-bit SSL Secure' },
                  { icon: Zap, text: '24hr Response' },
                  { icon: MessageCircle, text: 'Free Consultation' },
                ].map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div key={badge.text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/15">
                      <Icon className="w-4 h-4 text-sky-400 flex-shrink-0" />
                      <span className="text-sm text-white font-medium">{badge.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#quote-form" className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:-translate-y-0.5">
                  Get a Free Quote <span>→</span>
                </Link>
                <Link href="/compare" className="bg-white/15 hover:bg-white/25 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 border border-white/30 inline-flex items-center justify-center gap-2 backdrop-blur-sm">
                  Compare Providers <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <AnimatedStats />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Why Motorhome Insurance Matters */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Motorhome Insurance Matters</h2>
              <p className="text-slate-600 text-lg">The motorhome market is booming — and so is the need for proper protection.</p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                With over 35,000 registered motorhomes on NZ roads and the fleet growing approximately 8% annually, more Kiwis than ever are hitting the open road. From compact campervans to luxury Class A motorhomes, the diversity of the market reflects a love of adventure and freedom on wheels. Whether you're taking weekend trips around the North Island or embarking on a full-time nomadic lifestyle, your motorhome represents a significant investment that deserves proper protection.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                The average motorhome value ranges from $40,000 to over $200,000, with self-contained models commanding premium prices. Without standalone motorhome insurance, this investment sits completely unprotected when parked at campsites, stored at home, or left overnight during your travels. The Financial Markets Authority (FMA) and Insurance Council of NZ (ICNZ) both recommend dedicated motorhome cover because standard car policies simply don't provide adequate protection for vehicles that function as temporary homes.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                Consider this: you're enjoying a week at a scenic motorhome park when a storm causes significant water damage. Without dedicated cover, you're looking at thousands of dollars in repair costs. Worse, if someone is injured on your motorhome property or your vehicle damages someone else's car, your liability exposure could exceed $20 million. Under the Freedom Camping Act 2011, some sites also carry specific insurance requirements — standalone motorhome insurance ensures compliance and provides 24/7 protection whether you're driving, parked at an official campground, or freedom camping.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link href="/coverage" className="text-sky-600 font-semibold hover:text-sky-700 transition-colors inline-flex items-center gap-2">
                Explore our coverage options <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Coverage Types Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Coverage for Every Motorhome Type</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Whether you own a campervan, Class A, B or C motorhome, or coach, we have protection tailored for you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverageTypes.map((type) => (
                <Link key={type.slug} href={`/types/${type.slug}`} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mb-5 shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{type.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{type.description}</p>
                  <span className="text-sky-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Motorhome Insurance is Essential */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Motorhome Insurance is Essential</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Your car insurance probably doesn&apos;t cover your motorhome the way you think it does.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyEssential.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 hover:border-sky-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mb-5 shadow-lg shadow-sky-500/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Did You Know?</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Most comprehensive car insurance policies only cover your motorhome while you&apos;re driving it. Once you park at a campsite, in your driveway, or at a storage facility, your motorhome is generally considered a separate, uninsured asset. Standalone motorhome insurance covers you 24/7 — whether you&apos;re driving or parked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600 text-lg">Find answers to common questions about motorhome insurance</p>
            </div>

            <div className="space-y-3">
              {displayedFAQs.map((faq) => (
                <div key={faq.slug} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-sky-300 transition-all duration-200">
                  <button onClick={() => setExpandedFAQ(expandedFAQ === faq.slug ? null : faq.slug)} className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                    <h3 className="font-bold text-slate-900 text-left">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-sky-600 flex-shrink-0 ml-4 transition-transform duration-300 ${expandedFAQ === faq.slug ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFAQ === faq.slug && (
                    <div className="px-6 py-5 border-t border-slate-100 bg-slate-50/50">
                      <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/faqs" className="text-sky-600 font-semibold hover:text-sky-700 transition-colors inline-flex items-center gap-2">
                View all FAQs <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Motorhome Insurance Guides</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Expert guides to help you find the right motorhome insurance</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(0, 3).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-sky-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-slate-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-sky-600 uppercase tracking-widest">{post.category}</span>
                      <span className="text-xs text-slate-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">{post.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/blog" className="text-sky-600 font-semibold hover:text-sky-700 transition-colors inline-flex items-center gap-2">
                Read all articles <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        <QuoteForm mode="full" />
      </main>
    </>
  );
}
