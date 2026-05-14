import { Phone, Mail, Clock, Shield, CheckCircle, Zap, Lock, Users } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: 'Contact MotorHomeInsurance.co.nz | Get a Free Quote',
  description: 'Contact our NZ motorhome insurance brokers. Phone 09 885 9549, email hello@cover4you.co.nz, or fill out our quick quote form for a free comparison.',
};

const breadcrumbs = [
  { name: 'Home', url: 'https://motorhomeinsurance.co.nz' },
  { name: 'Contact', url: 'https://motorhomeinsurance.co.nz/contact' }
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MotorHomeInsurance.co.nz",
  "url": "https://motorhomeinsurance.co.nz",
  "telephone": "+64-9-885-9549",
  "email": "hello@cover4you.co.nz",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+64-9-885-9549",
    "contactType": "Customer Service"
  },
  "areaServed": "NZ",
  "priceRange": "Free"
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact MotorHomeInsurance.co.nz",
  "url": "https://motorhomeinsurance.co.nz/contact",
  "description": "Get a free motorhome insurance quote or contact our NZ brokers"
};

const usps = [
  { icon: Shield, title: 'NZ Owned & Operated', desc: '15+ years of local expertise' },
  { icon: Zap, title: 'Expert Advice', desc: 'Deep knowledge of motorhome risks' },
  { icon: CheckCircle, title: 'Impartial Quotes', desc: 'We compare providers on your behalf' },
  { icon: Lock, title: '256-bit SSL Secure', desc: 'Your data is safe and encrypted' },
  { icon: Users, title: 'Fast Response', desc: 'Quotes within 24 hours' },
  { icon: Mail, title: 'No Fees', desc: 'Completely free comparison service' },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      {/* Hero + Form Above Fold */}
      <section
        className="relative min-h-[92vh] flex items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519001896312-85f41baa90a0?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/75" />

        <div className="relative w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left: Heading + USPs + Contact */}
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 rounded-full px-4 py-1.5 mb-5">
                <Zap className="w-4 h-4 text-sky-400" />
                <span className="text-sky-300 text-sm font-semibold">Free quotes — no obligation</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                Get Your Free<br />
                <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                  Motorhome Insurance Quote
                </span>
              </h1>

              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Fill in the form and one of our licensed brokers will compare the market and get back to you within 24 hours — at no cost to you.
              </p>

              {/* Contact strip */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="tel:098859549" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-4 py-2.5 transition-colors">
                  <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <div>
                    <div className="text-white font-bold text-sm">09 885 9549</div>
                    <div className="text-slate-400 text-xs">Mon–Fri, 8am–6pm</div>
                  </div>
                </a>
                <a href="mailto:hello@cover4you.co.nz" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-4 py-2.5 transition-colors">
                  <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <div>
                    <div className="text-white font-bold text-sm">hello@cover4you.co.nz</div>
                    <div className="text-slate-400 text-xs">Response within 24 hours</div>
                  </div>
                </a>
              </div>

              {/* USP grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {usps.map((usp) => {
                  const Icon = usp.icon;
                  return (
                    <div key={usp.title} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{usp.title}</div>
                        <div className="text-slate-400 text-xs mt-0.5">{usp.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Quote Form */}
            <QuoteForm mode="compact" />

          </div>
        </div>
      </section>

      {/* Contact Details Below Fold */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Other Ways to Reach Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-sky-500/20">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
              <a href="tel:098859549" className="text-sky-600 hover:text-sky-700 font-bold block mb-1">09 885 9549</a>
              <p className="text-sm text-slate-600">Mon–Fri, 8am–6pm NZST</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-sky-500/20">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
              <a href="mailto:hello@cover4you.co.nz" className="text-sky-600 hover:text-sky-700 font-bold block mb-1 text-sm">hello@cover4you.co.nz</a>
              <p className="text-sm text-slate-600">We reply within 24 hours</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-sky-500/20">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
              <p className="text-slate-900 font-bold">Mon–Fri</p>
              <p className="text-sm text-slate-600">8:00 AM – 6:00 PM NZST</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
