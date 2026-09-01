import type { Metadata } from 'next';
import StarInsureForm from '@/components/StarInsureForm';

export const metadata: Metadata = {
  title: 'Get a Motorhome Insurance Quote | Motorhome Insurance NZ',
  description: 'Get a motorhome insurance quote in 2 minutes. Cover for motorhomes, caravans, campervans, horse floats and tiny homes across New Zealand.',
  robots: { index: false, follow: false }, // noindex until live
  alternates: { canonical: 'https://www.motorhomeinsurance.co.nz/motorhome-quote/' },
};

export default function MotorHomeQuotePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

        {/* Page title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Motorhome &amp; RV Insurance
          </h1>
          <p className="mt-3 text-slate-500 text-base sm:text-lg max-w-lg mx-auto">
            Tell us about your vehicle and we&apos;ll connect you with a specialist who can tailor the right cover.
          </p>
        </div>

        {/* Form */}
        <StarInsureForm />

        {/* Trust row */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-center">
          {[
            { n: '2 min', d: 'Average completion time' },
            { n: 'Star Insure', d: 'NZ RV specialist insurer' },
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
          By submitting this form your details will be passed to Star Insure, a licensed NZ insurer,
          who will be in touch to discuss your cover options. Contact{' '}
          <a href="mailto:hello@cover4you.co.nz" className="underline hover:text-slate-600">
            hello@cover4you.co.nz
          </a>{' '}
          with any questions.
        </p>
      </div>
    </main>
  );
}
