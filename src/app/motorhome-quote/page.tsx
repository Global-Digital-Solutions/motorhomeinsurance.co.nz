import type { Metadata } from 'next';
import StarInsureForm from '@/components/StarInsureForm';

export const metadata: Metadata = {
  title: 'Get a Motorhome Insurance Quote | Motorhome Insurance NZ',
  description: 'Get a motorhome insurance quote in 2 minutes. Cover for motorhomes, caravans, campervans, horse floats and tiny homes across New Zealand.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.motorhomeinsurance.co.nz/motorhome-quote/' },
};

export default function MotorHomeQuotePage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* ── Hero ── */}
      <div
        className="relative px-4 pt-14 pb-28 overflow-hidden"
        style={{
          backgroundImage: 'url(/hero-motorhome-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/75" />
        <div className="relative max-w-2xl mx-auto text-center text-white">
          <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">NZ RV Insurance Specialists</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Motorhome &amp; RV Insurance
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mb-6 max-w-lg mx-auto">
            Tell us about your vehicle and we&apos;ll connect you with a specialist who can tailor the right cover.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {['No obligation', 'NZ specialist insurer', 'Response within 30 mins', '2 minutes to complete'].map(label => (
              <div key={label} className="flex items-center gap-1.5 text-sm text-slate-200">
                <span className="text-sky-400 font-bold">✓</span> {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Form — pulled up over the hero ── */}
      <div className="relative -mt-16 px-4 pb-12">
        <div className="max-w-2xl mx-auto">
          <StarInsureForm />

          {/* Disclaimer */}
          <p className="mt-8 text-xs text-slate-400 text-center max-w-lg mx-auto leading-relaxed">
            By submitting this form your details will be matched with a specialist NZ insurer,
            who will be in touch to discuss your cover options. Contact{' '}
            <a href="mailto:hello@cover4you.co.nz" className="underline hover:text-slate-600">
              hello@cover4you.co.nz
            </a>{' '}
            with any questions.
          </p>
        </div>
      </div>
    </main>
  );
}
