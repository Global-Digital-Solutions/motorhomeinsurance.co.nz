import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Quote Request Received | MotorHomeInsurance.co.nz',
  description: 'Your motorhome insurance quote request has been received. A licensed NZ broker will contact you within 24 hours.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main
      className="min-h-[80vh] flex items-center py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: 'url(/hero-motorhome-1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative max-w-2xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-xl ring-4 ring-white/20">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Thank You!</h1>

        <p className="text-xl text-slate-200 mb-8 leading-relaxed">
          Your quote request has been received. A licensed insurance broker will contact you within 24 hours with personalised motorhome insurance quotes tailored to your needs.
        </p>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="font-bold text-white mb-3">What happens next:</h2>
          <ul className="text-left space-y-2 text-slate-200">
            <li className="flex items-start gap-3">
              <span className="text-sky-400 font-bold">1.</span>
              <span>Our team will review your information</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 font-bold">2.</span>
              <span>A broker will call or email with personalised quotes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 font-bold">3.</span>
              <span>Compare options and choose your ideal cover</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 font-bold">4.</span>
              <span>Receive your insurance certificate within hours</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center shadow-lg">
            Back to Homepage
          </Link>
          <Link href="/blog" className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center">
            Read Our Blog
          </Link>
        </div>

        <p className="text-sm text-slate-300 mt-8">
          Have questions? Contact us at <a href="mailto:hello@cover4you.co.nz" className="text-sky-400 hover:text-sky-300">hello@cover4you.co.nz</a>
        </p>
      </div>
    </main>
  );
}
