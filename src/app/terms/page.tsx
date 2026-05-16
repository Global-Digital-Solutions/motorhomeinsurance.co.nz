import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | MotorHomeInsurance.co.nz',
  description: 'Terms and conditions for using MotorHomeInsurance.co.nz. Please read before using our no-fee motorhome insurance comparison service.',
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1626680114529-3f6ffa002b80?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/60" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-slate-300 text-lg">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">

          <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 mb-10">
            <p className="text-slate-700 text-sm leading-relaxed">
              By using MotorHomeInsurance.co.nz you agree to these Terms &amp; Conditions. Please read them carefully. If you do not agree, please do not use our website or services.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">1. About MotorHomeInsurance.co.nz</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            MotorHomeInsurance.co.nz is a no-fee comparison and referral service operated by Cover4You, a New Zealand company. We connect motorhome owners with licensed insurance brokers and advisers who can provide motorhome insurance quotes and professional advice.
          </p>
          <p className="text-slate-700 leading-relaxed">
            We are not an insurance company, broker, or financial adviser. We do not underwrite, issue, or administer insurance policies. All insurance products are provided by licensed New Zealand insurers through their appointed brokers.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">2. How Our Service Works</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            When you submit a quote request through our website, you authorise us to share your details with licensed insurance brokers in our network. Those brokers will contact you directly with insurance quotes and recommendations tailored to your motorhome and needs.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-slate-700 mb-4">
            <li>We do not charge you any fee for this service</li>
            <li>We may receive referral fees or commissions from brokers when they assist you — see our commercial disclosure below</li>
            <li>You are under no obligation to proceed with any quote or purchase</li>
            <li>Quotes provided by brokers are estimates and may be subject to change upon final underwriting</li>
          </ul>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">3. Not Financial or Insurance Advice</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Information published on MotorHomeInsurance.co.nz is general in nature and is provided for informational purposes only. It does not constitute financial advice, insurance advice, or a recommendation to purchase any particular product.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            We are not a financial advice provider regulated under the Financial Markets Conduct Act 2013 (FMCA). The licensed insurance brokers and advisers we refer you to are regulated under the FMCA and hold appropriate licences from the Financial Markets Authority (FMA).
          </p>
          <p className="text-slate-700 leading-relaxed">
            Before purchasing any insurance product, you should read the Product Disclosure Statement (PDS) provided by the insurer, discuss your specific circumstances with your broker, and ensure the policy meets your individual needs.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">4. Accuracy of Information</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            While we make reasonable efforts to ensure all information on our website is accurate, up to date, and complete, we make no warranty or guarantee in this regard. Insurance products, legislation, and market conditions change regularly.
          </p>
          <p className="text-slate-700 leading-relaxed">
            You should not rely solely on information published on this website when making insurance decisions. Always confirm current terms, pricing, and coverage details directly with your insurer or broker.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">5. Data Privacy &amp; Consent</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            By submitting a quote request, you consent to us sharing your personal information with licensed insurance brokers for the purpose of providing you with motorhome insurance quotes and advice.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Your information is handled in accordance with our <Link href="/privacy" className="text-sky-600 hover:text-sky-700 font-semibold">Privacy Policy</Link> and the Privacy Act 2020. Please review our Privacy Policy for full details.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">6. Commercial Relationships</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            MotorHomeInsurance.co.nz may receive referral fees, commissions, or other commercial consideration from insurance brokers, underwriters, and providers featured on this website. These arrangements do not affect the price you pay for any insurance product.
          </p>
          <p className="text-slate-700 leading-relaxed">
            We personally vet each broker and insurer we work with to ensure they are appropriately licensed, hold good standing with relevant regulatory bodies (including ICNZ and the FMA), and meet our standards for claims handling and customer service. Our editorial content reflects our honest, independent assessment.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">7. Limitation of Liability</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            To the maximum extent permitted by law, Cover4You and MotorHomeInsurance.co.nz exclude all liability for any loss or damage arising from your use of this website or reliance on information contained on it, including any loss arising from decisions to purchase or not purchase insurance based on our content.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Nothing in these Terms limits any rights you may have under the Consumer Guarantees Act 1993 or the Fair Trading Act 1986.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">8. Intellectual Property</h2>
          <p className="text-slate-700 leading-relaxed">
            All content on MotorHomeInsurance.co.nz — including text, images, logos, and data — is the property of Cover4You or its licensors and is protected by copyright. You may not reproduce, republish, or redistribute any content without our prior written permission.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">9. Third-Party Links</h2>
          <p className="text-slate-700 leading-relaxed">
            Our website may contain links to third-party websites including insurer, broker, and regulatory body websites. We are not responsible for the content, accuracy, or practices of those sites and provide links for convenience only. Visiting those sites is at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">10. Changes to These Terms</h2>
          <p className="text-slate-700 leading-relaxed">
            We may update these Terms &amp; Conditions at any time. Significant changes will be posted on our website with an updated effective date. Continued use of the website after changes are posted constitutes your acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">11. Governing Law</h2>
          <p className="text-slate-700 leading-relaxed">
            These Terms &amp; Conditions are governed by the laws of New Zealand. Any disputes arising from your use of this website or our services will be subject to the exclusive jurisdiction of the New Zealand courts.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">12. Contact Us</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-slate-700 mb-1"><strong>MotorHomeInsurance.co.nz</strong></p>
            <p className="text-slate-700 mb-1">Operated by Cover4You</p>
            <p className="text-slate-700">Email: <a href="mailto:hello@cover4you.co.nz" className="text-sky-600 hover:text-sky-700 font-semibold">hello@cover4you.co.nz</a></p>
          </div>

          <div className="mt-14 bg-slate-900 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Ready to Compare Motorhome Insurance?</h3>
            <p className="text-slate-400 text-sm mb-5">Get quotes from licensed brokers — no obligation, no cost to you.</p>
            <Link href="/#quote-form" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg">
              Get Your Quote →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
