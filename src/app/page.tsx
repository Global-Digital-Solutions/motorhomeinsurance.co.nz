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
  ArrowRight,
  MapPin,
  Star,
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
      title: 'Standard Car Insurance Won\'t Cover You',
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
      description: 'Motorhomes cost $20,000–$150,000+. Don\'t leave this investment exposed without proper standalone insurance.',
    },
  ];

  const whyChooseUs = [
    'Specialist NZ motorhome insurance brokers',
    'Compare quotes from multiple top insurers',
    'Campervans, Class A, B & C motorhomes, coaches',
    'Agreed value and market value options',
    'Self-contained and imported motorhomes covered',
    'No obligation — results within 24 hours',
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

        {/* ── HERO ────────────────────────────────────────────── */}
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
                Compare top NZ motorhome insurance providers in minutes. Campervans, Class A, B &amp; C motorhomes, coaches — get comprehensive cover tailored to your needs.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: Shield, text: 'NZ Owned & Operated' },
                  { icon: CheckCircle2, text: 'No Broker Fees' },
                  { icon: Lock, text: '256-bit SSL Secure' },
                  { icon: Zap, text: '24hr Response' },
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
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/compare" className="bg-white/15 hover:bg-white/25 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 border border-white/30 inline-flex items-center justify-center gap-2 backdrop-blur-sm">
                  Compare Providers <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ───────────────────────────────────────────── */}
        <AnimatedStats />

        {/* ── HOW IT WORKS ─────────────────────────────────────── */}
        <HowItWorksSection />

        {/* ── WHY IT MATTERS — dark split-layout with lifestyle image ── */}
        <section className="relative overflow-hidden bg-slate-900">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 via-transparent to-blue-900/20 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Text column */}
              <div>
                <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Why It Matters</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                  Your Motorhome Deserves<br />
                  <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                    Specialist Protection
                  </span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  With over 38,000 motorhomes on NZ roads — a fleet growing 8% annually — more Kiwis than ever are embracing life on wheels. From weekend campervans to full-time luxury coaches, your motorhome is both a vehicle and a home. Standard car insurance simply wasn't built for that.
                </p>
                <p className="text-slate-400 leading-relaxed mb-8">
                  The average motorhome is worth $40,000–$200,000. Once you park at a freedom camping site, a motorhome park, or your driveway, most car policies stop covering you. Standalone motorhome insurance bridges that gap — protecting your investment 24/7, wherever your adventures take you.
                </p>

                {/* Why Choose Us bullets */}
                <ul className="space-y-3 mb-8">
                  {whyChooseUs.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-sky-400" />
                      </span>
                      <span className="text-slate-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/coverage"
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Explore Coverage Options <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Image column */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                  <img
                    src="https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6?w=800&h=600&fit=crop"
                    alt="White Maui Type-C motorhome on a New Zealand road"
                    className="w-full h-[420px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  {/* Floating stat card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Covered Nationwide</p>
                        <p className="text-slate-300 text-xs">From Northland to Southland — wherever your journey takes you</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative ring */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full border border-sky-500/20 pointer-events-none" />
                <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border border-blue-400/10 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* ── COVERAGE TYPES — slate-50 with image-topped cards ── */}
        <section className="py-20 sm:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Cover</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Coverage for Every Motorhome Type</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Whether you own a campervan, Class A, B or C motorhome, or coach, we have protection tailored for you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverageTypes.map((type) => (
                <Link
                  key={type.slug}
                  href={`/types/${type.slug}`}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-sky-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  {/* Gradient header bar */}
                  <div className="h-2 bg-gradient-to-r from-sky-500 to-blue-600" />
                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mb-5 shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{type.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{type.description}</p>
                    <span className="text-sky-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/coverage"
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-lg"
              >
                View All Coverage Options <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── LIFESTYLE CTA BANNER — full-width image with overlay ── */}
        <section
          className="relative py-24 sm:py-32 overflow-hidden"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&h=800&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 60%',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">The Open Road Awaits</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Adventure With Confidence
            </h2>
            <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              The best road trips start with peace of mind. Get the right motorhome insurance so the only thing you&apos;re thinking about is where to stop next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#quote-form"
                className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-sky-500/30 hover:-translate-y-0.5 transition-all"
              >
                Get Your Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/compare"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-8 py-4 rounded-xl border border-white/30 backdrop-blur-sm transition-all"
              >
                Compare Providers
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHY ESSENTIAL — dark image-backed cards ── */}
        <section
          className="relative py-20 sm:py-28 overflow-hidden"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1596470693312-9a3686a0af0f?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/85" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Protection That Matters</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Motorhome Insurance is Essential</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-lg">Your car insurance probably doesn&apos;t cover your motorhome the way you think it does.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyEssential.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-7 hover:bg-white/15 hover:border-sky-400/50 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mb-5 shadow-lg shadow-sky-500/30">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/75 text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Did You Know callout */}
            <div className="mt-10 bg-sky-600/25 border border-sky-400/40 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Did You Know?</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Most comprehensive car insurance policies only cover your motorhome while you&apos;re driving it. Once you park at a campsite, in your driveway, or at a storage facility, your motorhome is generally considered a separate, uninsured asset. Standalone motorhome insurance covers you 24/7 — whether you&apos;re driving or parked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BLOG GUIDES ── */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">Expert Guides</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Motorhome Insurance Guides</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Expert guides to help you find the right motorhome insurance</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(0, 3).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-sky-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                  <div className="relative h-52 overflow-hidden bg-slate-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                    <span className="absolute top-4 left-4 bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors leading-snug">{post.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
                      <p className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      <span className="text-xs font-semibold text-sky-600">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors">
                Read all articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 sm:py-28 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
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
              <Link href="/faqs" className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors">
                View all FAQs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── QUOTE FORM ── */}
        <QuoteForm mode="full" />

      </main>
    </>
  );
}
