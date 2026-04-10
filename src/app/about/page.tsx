import Link from 'next/link';
import { ShieldCheck, Heart, Users, Zap, MapPin, Clock } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: 'About MotorHomeInsurance.co.nz | NZ Motorhome Insurance',
  description: 'Learn about MotorHomeInsurance.co.nz. Connecting Kiwis with the right motorhome insurance through impartial quotes and trusted broker partnerships.',
};

export default function AboutPage() {
  const trustSignals = [
    {
      icon: ShieldCheck,
      title: 'Expert Knowledge',
      description: 'Deep understanding of motorhome risks and coverage needs specific to New Zealand motorhome owners.',
    },
    {
      icon: Zap,
      title: 'Impartial Advice',
      description: 'We compare all providers on your behalf, not pushing any single brand.',
    },
    {
      icon: Clock,
      title: 'NZ-Based Support',
      description: 'Local team who understand the NZ motorhome landscape and regional insurance needs.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About MotorHomeInsurance.co.nz</h1>
          <p className="text-xl text-slate-200 mb-8">Helping New Zealand motorhome owners find the right insurance coverage through transparent, impartial comparisons and expert guidance.</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { label: 'Years Experience', value: '15+' },
              { label: 'Assets Covered', value: '$500M+' },
              { label: 'Free Quotes', value: '24hr' },
              { label: 'NZ Owned', value: '✓' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-sky-50 border border-sky-200">
                <div className="text-4xl font-bold text-sky-600 mb-2">{stat.value}</div>
                <div className="text-slate-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                To help every Kiwi motorhome owner find affordable, appropriate insurance coverage that protects their asset and their peace of mind — without unnecessary complexity or cost. We connect motorhome owners with licensed insurance professionals who understand the unique risks and coverage needs of motorhome ownership in New Zealand.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why MotorHomeInsurance.co.nz?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {trustSignals.map((signal) => {
                  const Icon = signal.icon;
                  return (
                    <div key={signal.title} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-sky-500/20">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">{signal.title}</h3>
                      <p className="text-slate-600 text-sm">{signal.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How Our Service Works</h2>
              <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                Getting the right motorhome insurance shouldn't require hours of research or multiple phone calls. Our service streamlines the entire process. When you submit your information through our site, we connect you with licensed insurance brokers who understand the NZ motorhome market.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Submit Your Details</h4>
                    <p className="text-slate-600 text-sm mt-1">Fill in your motorhome information including type, value, and coverage needs through our simple form.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900">We Compare the Market</h4>
                    <p className="text-slate-600 text-sm mt-1">Our brokers compare quotes from NZ's leading motorhome insurers, considering your specific situation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Get Personalized Quotes</h4>
                    <p className="text-slate-600 text-sm mt-1">Within 24 hours, receive detailed quotes with expert recommendations tailored to your motorhome needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Choose Your Policy</h4>
                    <p className="text-slate-600 text-sm mt-1">Review your options and choose the policy that offers the best value and coverage for your situation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Compare Motorhome Insurance?</h2>
              <p className="text-slate-700 text-lg mb-4 leading-relaxed">
                Motorhome insurance premiums vary dramatically between providers — sometimes by $300-500+ per year for identical coverage. Different insurers also offer different features, add-ons, and service levels. Shopping around ensures you get:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-700">
                  <span className="text-sky-600 font-bold mt-1">✓</span>
                  <span><strong>Better Value:</strong> The best pricing for your motorhome type and coverage level</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="text-sky-600 font-bold mt-1">✓</span>
                  <span><strong>Right Coverage:</strong> Features and add-ons that match your specific needs</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="text-sky-600 font-bold mt-1">✓</span>
                  <span><strong>Quality Service:</strong> Providers known for excellent claims handling and customer support</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="text-sky-600 font-bold mt-1">✓</span>
                  <span><strong>Peace of Mind:</strong> Confidence that your motorhome is properly protected</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get the Right Coverage?</h2>
              <p className="text-slate-700 mb-6">
                Whether you own a campervan, Class A, B or C motorhome, or coach, we can help you find appropriate coverage at the right price. Our service is completely free — no obligation, no broker fees.
              </p>
              <Link href="/#quote-form" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-sky-500/25">
                Get a Free Quote <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <QuoteForm mode="full" />
    </>
  );
}
