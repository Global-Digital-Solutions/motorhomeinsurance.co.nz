'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: 1,
    emoji: '📋',
    title: 'Tell Us About Your Motorhome',
    description:
      "Share your motorhome details — type, value, age, whether it's self-contained, and how you use it. Our quick form takes just 2 minutes to complete and gives us everything we need to find the best quotes.",
    highlight: '2-minute form',
  },
  {
    number: 2,
    emoji: '🔍',
    title: 'We Search Our Broker Network',
    description:
      "Our ICNZ-registered brokers compare quotes from New Zealand's top motorhome insurers, factoring in your specific situation, location, and coverage needs. We do the hard work so you don't have to.",
    highlight: 'Multiple providers compared',
  },
  {
    number: 3,
    emoji: '✅',
    title: 'Get Personalised Quotes Within 24 Hours',
    description:
      'Receive detailed quotes from multiple providers with expert recommendations tailored to your motorhome. Compare options at your leisure and choose the policy that offers the best value and coverage.',
    highlight: 'Free & no obligation',
  },
];

export default function HowItWorksSection() {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([false, false, false]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((el, idx) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Stagger each card by 150ms per index
            setTimeout(() => {
              setVisibleSteps((prev) => {
                const next = [...prev];
                next[idx] = true;
                return next;
              });
            }, idx * 150);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slateate-900 mb-4" style={{ color: '#0f172a' }}>
            How Our Service Works
          </h2>
          <p className="text-slate-600 text-lg">
            motorhomeinsurance.co.nz does the hard work so you don&apos;t have to
          </p>
        </div>

        {/* Connector line — desktop only */}
        <div className="hidden md:block relative mb-0">
          <div
            className="absolute top-0 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-sky-300 via-blue-400 to-sky-300"
            style={{ top: '2.75rem', left: '16.66%', right: '16.66%' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              ref={(el) => { stepRefs.current[idx] = el; }}
              className={`
                group relative bg-white rounded-2xl p-7 sm:p-8
                border-2 border-slate-200
                shadow-sm
                transition-all duration-700 ease-out
                hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-500/15 hover:-translate-y-2
                ${visibleSteps[idx]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'}
              `}
            >
              {/* Animated border glow on entry */}
              <div
                className={`
                  absolute inset-0 rounded-2xl pointer-events-none
                  bg-gradient-to-br from-sky-500/10 to-blue-600/5
                  transition-opacity duration-700
                  ${visibleSteps[idx] ? 'opacity-100' : 'opacity-0'}
                `}
              />

              {/* Step number badge */}
              <div className="relative flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold text-xl flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform duration-300 z-10">
                  {step.number}
                </div>
              </div>

              {/* Emoji icon */}
              <div className="text-center mb-4">
                <span
                  className={`
                    text-4xl inline-block
                    transition-all duration-500 delay-200
                    ${visibleSteps[idx] ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
                  `}
                >
                  {step.emoji}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 text-center leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base text-center leading-relaxed mb-5">
                {step.description}
              </p>

              {/* Highlight pill */}
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold px-3 py-1.5 rounded-full group-hover:bg-sky-100 transition-colors duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                  {step.highlight}
                </span>
              </div>

              {/* Bottom border accent — animates in after card appears */}
              <div
                className={`
                  absolute bottom-0 left-6 right-6 h-0.5 rounded-full
                  bg-gradient-to-r from-sky-500 to-blue-600
                  transition-all duration-700 delay-300
                  ${visibleSteps[idx] ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
                `}
                style={{ transformOrigin: 'center' }}
              />
            </div>
          ))}
        </div>

        {/* CTA below steps */}
        <div className="text-center mt-12">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200 text-base"
          >
            Start Your Free Comparison
            <span>→</span>
          </a>
          <p className="text-slate-500 text-sm mt-3">Free · No obligation · Results within 24 hours</p>
        </div>
      </div>
    </section>
  );
}
