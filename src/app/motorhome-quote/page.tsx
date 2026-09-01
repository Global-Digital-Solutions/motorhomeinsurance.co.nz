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
    <main className="min-h-screen">

      {/* ── Hero with background image ── */}
      <div
        className="relative py-16 sm:py-24 px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(/hero-motorhome-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/65 to-slate-900/80" />

        <div className="relative max-w-2xl mx-auto text-center text-white">
          <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">NZ RV Insurance Specialists</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Motorhome &amp; RV Insurance
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-lg mx-auto">
            Tell us about your vehicle and we&apos;ll connect you with a specialist who can tailor the right cover.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-2">
            {[
              { icon: '✓', label: 'No obligation' },
              { icon: '✓', label: 'NZ specialist insurer' },
              { icon: '✓', label: 'Response within 30 mins' },
              { icon: '✓', label: 'Takes about 2 minutes' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-sm text-slate-200">
                <span className="text-sky-400 font-bold">{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Form section ── */}
      <div className="bg-slate-50 px-4 py-10 sm:py-14">
        <div className="max-w-2xl mx-auto">
          <StarInsureForm />

          {/* Stat row */}
          <div className="mt-10 grid grid-cols-3 gap-4 text-center border-t border-slate-200 pt-8">
            {[
              { n: '2 min', d: 'Average completion' },
              { n: 'Direct', d: 'NZ specialist insurer' },
              { n: '30 min', d: 'Typical response' },
            ].map(({ n, d }) => (
              <div key={n}>
                <div className="text-2xl font-black text-slate-900">{n}</div>
                <div className="text-xs text-slate-500 mt-0.5">{d}</div>
              </div>
            ))}
          </div>

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
