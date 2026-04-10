import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <main className="min-h-[80vh] flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Thank You!</h1>

        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          Your quote request has been received. A licensed insurance broker will contact you within 24 hours with personalised motorhome insurance quotes tailored to your needs.
        </p>

        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="font-bold text-slate-900 mb-3">What happens next:</h2>
          <ul className="text-left space-y-2 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-sky-600 font-bold">1.</span>
              <span>Our team will review your information</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-600 font-bold">2.</span>
              <span>A broker will call or email with personalised quotes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-600 font-bold">3.</span>
              <span>Compare options and choose your ideal cover</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-600 font-bold">4.</span>
              <span>Receive your insurance certificate within hours</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center">
            Back to Homepage
          </Link>
          <Link href="/blog" className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center">
            Read Our Blog
          </Link>
        </div>

        <p className="text-sm text-slate-500 mt-8">
          Have questions? Contact us at <a href="mailto:hello@cover4you.co.nz" className="text-sky-600 hover:text-sky-700">hello@cover4you.co.nz</a> or <a href="tel:+6498859549" className="text-sky-600 hover:text-sky-700">09 885 9549</a>
        </p>
      </div>
    </main>
  );
}
