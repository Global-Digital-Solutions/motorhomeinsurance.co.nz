import type { Metadata } from 'next';
import StarInsureForm from '@/components/StarInsureForm';

export const metadata: Metadata = {
  title: 'Get a Motorhome Insurance Quote | Motorhome Insurance NZ',
  description: 'Get a motorhome insurance quote in 2 minutes. Cover for motorhomes, caravans, campervans, horse floats and tiny homes across New Zealand.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.motorhomeinsurance.co.nz/motorhome-quote/' },
};

const trustPoints = [
  { icon: '🛡️', title: 'Specialist Cover', body: 'Policies built specifically for motorhomes, caravans and campervans — not adapted car insurance.' },
  { icon: '⚡', title: 'Fast Response', body: 'Most enquiries receive a response within 30 minutes during business hours.' },
  { icon: '🔒', title: 'Secure & Private', body: 'Your details are transmitted securely and never shared outside the specialist insurer network.' },
  { icon: '🇳🇿', title: 'NZ-Based', body: 'Local specialist insurer who understands New Zealand roads, weather and travel conditions.' },
];

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

      {/* ── Content: form + trust sidebar ── */}
      <div className="relative -mt-20 px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start">

            {/* ── Form ── */}
            <div className="w-full lg:flex-1">
              {/* Blue-bordered card wrapper */}
              <div className="rounded-2xl ring-2 ring-sky-400 shadow-2xl shadow-sky-200/40">
                <StarInsureForm />
              </div>

              {/* Disclaimer */}
              <p className="mt-6 text-xs text-slate-400 text-center max-w-lg mx-auto leading-relaxed">
                By submitting this form your details will be matched with a specialist NZ insurer,
                who will be in touch to discuss your cover options. Contact{' '}
                <a href="mailto:hello@cover4you.co.nz" className="underline hover:text-slate-600">
                  hello@cover4you.co.nz
                </a>{' '}
                with any questions.
              </p>
            </div>

            {/* ── Trust sidebar (desktop only) ── */}
            <div className="hidden lg:flex flex-col gap-4 w-64 pt-6 flex-shrink-0">

              {/* Why us cards */}
              {trustPoints.map(({ icon, title, body }) => (
                <div key={title} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                  <div className="text-2xl mb-2">{icon}</div>
                  <p className="text-sm font-bold text-slate-900 mb-1">{title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{body}</p>
                </div>
              ))}

              {/* Security badge */}
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">🔐</div>
                <p className="text-xs font-bold text-sky-800">256-bit encrypted</p>
                <p className="text-xs text-sky-600 mt-0.5">Your data is safe with us</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
