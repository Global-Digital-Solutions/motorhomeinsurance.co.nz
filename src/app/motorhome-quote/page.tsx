import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import StarInsureForm from '@/components/StarInsureForm';

export const metadata: Metadata = {
  title: 'Get a Motorhome Insurance Quote | Motorhome Insurance NZ',
  description: 'Get a motorhome insurance quote in 2 minutes. Cover for motorhomes, caravans, campervans, horse floats and tiny homes across New Zealand.',
  robots: { index: false, follow: false }, // noindex until live
  alternates: { canonical: 'https://www.motorhomeinsurance.co.nz/motorhome-quote/' },
};

export default function MotorHomeQuotePage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

        {/* Hero band */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-sky-900 text-white py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-500/30 rounded-full px-4 py-1.5 mb-4">
              <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-sky-300 uppercase tracking-widest">Get a Quote</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Motorhome &amp; RV Insurance
            </h1>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              Tell us about your vehicle and we&apos;ll connect you with a specialist who can tailor the right cover for how you travel.
            </p>
          </div>
        </div>

        {/* Form section */}
        <div className="max-w-3xl mx-auto px-4 py-12">
          <StarInsureForm />

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-center">
            {[
              { n: '2 min', d: 'Average completion time' },
              { n: 'FSPR-registered', d: 'Adviser network' },
              { n: '30 min', d: 'Typical response time' },
            ].map(({ n, d }) => (
              <div key={n} className="flex flex-col items-center">
                <span className="text-xl font-black text-slate-900">{n}</span>
                <span className="text-xs text-slate-500 mt-0.5">{d}</span>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-xs text-slate-400 text-center max-w-lg mx-auto leading-relaxed">
            By submitting this form you agree to be contacted by an FSPR-registered insurance adviser.
            This site is not regulated under the Financial Markets Conduct Act. Referred advisers are
            registered Financial Service Providers. Contact <a href="mailto:hello@cover4you.co.nz" className="underline hover:text-slate-600">hello@cover4you.co.nz</a> with any questions.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
