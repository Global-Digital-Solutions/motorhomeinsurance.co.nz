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
        className="relative px-4 pt-14 pb-32 overflow-hidden"
        style={{
          backgroundImage: 'url(/hero-motorhome-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80" />
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">NZ RV Insurance Specialists</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Motorhome &amp; RV Insurance
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mb-6 max-w-xl mx-auto">
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

      {/* ── Content ── */}
      <div className="relative -mt-20 px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-row lg:flex-row gap-3 lg:gap-6 items-start">

            {/* Form */}
            <div className="flex-1 min-w-0">
              <StarInsureForm />
              <p className="mt-6 text-xs text-slate-400 text-center leading-relaxed">
                By submitting this form your details will be matched with a specialist NZ insurer who will be in touch to discuss your cover options. Contact{' '}
                <a href="mailto:hello@cover4you.co.nz" className="underline hover:text-slate-600">hello@cover4you.co.nz</a> with any questions.
              </p>
            </div>

            {/* Trust sidebar — compact column on mobile, full width on desktop */}
            <div className="flex flex-col gap-2 lg:gap-5 w-16 sm:w-20 lg:w-60 flex-shrink-0 pt-2">

              {/* How it works — desktop only */}
              <div className="hidden lg:block bg-slate-900 rounded-2xl p-5 text-white">
                <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-4">How it works</p>
                {[
                  { n: '1', t: 'Tell us about your RV', d: 'Vehicle type, value and your details' },
                  { n: '2', t: 'We match you', d: 'Sent to an NZ specialist insurer' },
                  { n: '3', t: 'You get a quote', d: 'Specialist responds within 30 mins' },
                ].map(({ n, t, d }) => (
                  <div key={n} className="flex gap-3 mb-4 last:mb-0">
                    <div className="w-6 h-6 rounded-full bg-sky-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{n}</div>
                    <div>
                      <p className="text-sm font-semibold leading-snug">{t}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{d}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats — desktop full / mobile compact badges */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-2 lg:p-5">
                {/* Mobile: vertical stack of compact badges */}
                <div className="flex flex-col gap-2 lg:hidden">
                  {[
                    { n: '2m', d: 'Quick' },
                    { n: '30m', d: 'Reply' },
                    { n: '✓', d: 'Direct' },
                    { n: '0', d: 'Obligation' },
                  ].map(({ n, d }) => (
                    <div key={d} className="text-center py-1">
                      <div className="text-sm font-black text-slate-900 leading-none">{n}</div>
                      <div className="text-[9px] text-slate-500 mt-0.5 leading-tight">{d}</div>
                    </div>
                  ))}
                </div>
                {/* Desktop: 2-col grid */}
                <div className="hidden lg:grid grid-cols-2 gap-4">
                  {[
                    { n: '2 min', d: 'To complete' },
                    { n: '30 min', d: 'Response time' },
                    { n: 'Direct', d: 'Insurers' },
                    { n: '100%', d: 'No obligation' },
                  ].map(({ n, d }) => (
                    <div key={n} className="text-center py-1">
                      <div className="text-xl font-black text-slate-900">{n}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{d}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security — desktop only */}
              <div className="hidden lg:block bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Your data is secure</p>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">256-bit encrypted. Details only shared with your matched specialist — never sold.</p>
                  </div>
                </div>
              </div>

              {/* Security — mobile compact */}
              <div className="lg:hidden bg-white rounded-2xl border border-slate-200 p-2 shadow-sm flex flex-col items-center gap-1">
                <svg className="w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-[9px] text-slate-500 text-center leading-tight">Secure &amp; encrypted</span>
              </div>

              {/* NZ trust — desktop only */}
              <div className="hidden lg:block bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">NZ specialist insurer</p>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Specialist motorhome and RV cover from an insurer right here in New Zealand.</p>
                  </div>
                </div>
              </div>

              {/* NZ trust — mobile compact */}
              <div className="lg:hidden bg-white rounded-2xl border border-slate-200 p-2 shadow-sm flex flex-col items-center gap-1">
                <svg className="w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-[9px] text-slate-500 text-center leading-tight">NZ insurer</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
