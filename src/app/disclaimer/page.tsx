import Link from 'next/link';

export const metadata = {
  title: 'Disclaimer | MotorHomeInsurance.co.nz',
  description: 'Important legal disclaimer for MotorHomeInsurance.co.nz. Learn how our comparison service works, our regulatory position, and your obligations.',
};

export default function DisclaimerPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/60" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Disclaimer</h1>
          <p className="text-slate-300 text-lg">Important information about our service and how we operate</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
            <h3 className="font-bold text-slate-900 mb-2">Please Read Carefully</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              This disclaimer contains important information about how MotorHomeInsurance.co.nz operates, our regulatory position, and the nature of the information we provide. By using our website you acknowledge you have read and understood this disclaimer.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">1. We Are a Comparison &amp; Referral Service — Not an Insurer</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            MotorHomeInsurance.co.nz is operated by Cover4You, a New Zealand company. We are a no-fee comparison and referral service. We connect motorhome owners with licensed insurance brokers who can provide quotes and professional advice.
          </p>
          <p className="text-slate-700 leading-relaxed">
            We are not an insurance company, insurance broker, underwriter, or financial advice provider. We do not issue policies, handle claims, set premiums, or provide any form of personal insurance advice. All insurance products and advice are provided by the licensed brokers and insurers we refer you to.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">2. Regulatory Position</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            MotorHomeInsurance.co.nz is not a regulated financial advice provider under the Financial Markets Conduct Act 2013 (FMCA). We do not provide personalised financial or insurance advice.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The licensed insurance brokers and advisers in our referral network hold Financial Advice Provider (FAP) licences issued by the Financial Markets Authority (FMA) and are regulated under the FMCA. When a broker contacts you with a quote, you are receiving regulated financial advice from that licensed professional — not from us.
          </p>
          <p className="text-slate-700 leading-relaxed">
            All insurers featured on our website are members of the Insurance Council of New Zealand (ICNZ) and are bound by the ICNZ Code of Good Insurance Practice.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">3. General Information Only — Not Personal Advice</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            All content published on MotorHomeInsurance.co.nz is general information only. It is provided to help you understand motorhome insurance and the options available, but it does not take into account your individual circumstances, needs, financial situation, or objectives.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            You should not rely on information on this website as the basis for any insurance decision. Before purchasing any insurance product:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-slate-700 mb-4">
            <li>Read the Product Disclosure Statement (PDS) provided by the insurer</li>
            <li>Ensure you understand what is and is not covered, including exclusions and conditions</li>
            <li>Discuss your specific coverage needs with your licensed broker</li>
            <li>Ask questions about anything you do not understand before committing</li>
          </ul>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">4. Accuracy of Information</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We make reasonable efforts to ensure all information published on this website is accurate, current, and complete. However, the insurance market, legislation, and provider offerings change frequently, and we cannot guarantee that all information is up to date at the time you read it.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Insurance premiums, coverage terms, and provider ratings referenced on this website are indicative only. Actual premiums and terms will be determined by your chosen insurer based on their own underwriting criteria. Always verify current details directly with your broker or insurer before making decisions.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">5. Commercial Relationships &amp; Independence</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            MotorHomeInsurance.co.nz may receive referral fees, commissions, or other commercial consideration from insurance brokers, underwriters, and providers featured on this website. These arrangements do not affect the price you pay for any insurance product.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Before featuring any provider on our website, we personally review and vet each broker, underwriter, and insurer to ensure they are appropriately licensed, hold good standing with relevant regulatory bodies (including ICNZ and the FMA), and meet our standards for claims handling and customer service.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Our editorial content, comparisons, and assessments reflect our honest, independent assessment and are not influenced by commercial arrangements with providers.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">6. Limitation of Liability</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            To the maximum extent permitted by applicable law, Cover4You and MotorHomeInsurance.co.nz disclaim all liability for any loss, damage, or expense — whether direct, indirect, or consequential — arising from your use of this website, reliance on information contained on it, or any decisions made based on that information.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Nothing in this disclaimer limits any statutory rights you may have under the Consumer Guarantees Act 1993, Fair Trading Act 1986, or other applicable New Zealand legislation.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">7. Third-Party Links &amp; External Websites</h2>
          <p className="text-slate-700 leading-relaxed">
            Our website may contain links to third-party websites including insurer websites, broker websites, regulatory bodies (such as the FMA and ICNZ), and other resources. We provide these links for convenience only. We are not responsible for the content, accuracy, privacy practices, or availability of any linked external website. Visiting external sites is at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">8. Governing Law</h2>
          <p className="text-slate-700 leading-relaxed">
            This disclaimer and your use of MotorHomeInsurance.co.nz are governed by the laws of New Zealand. Any disputes arising from your use of this website are subject to the exclusive jurisdiction of the New Zealand courts.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">9. Contact Us</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-slate-700 mb-1"><strong>MotorHomeInsurance.co.nz</strong></p>
            <p className="text-slate-700 mb-1">Operated by Cover4You</p>
            <p className="text-slate-700">Email: <a href="mailto:hello@cover4you.co.nz" className="text-sky-600 hover:text-sky-700 font-semibold">hello@cover4you.co.nz</a></p>
          </div>
          <p className="text-slate-600 text-sm mt-4">
            For complaints about an insurance product or broker, contact the{' '}
            <a href="https://www.ifso.nz/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700">Insurance &amp; Financial Services Ombudsman (IFSO)</a> or the{' '}
            <a href="https://www.fma.govt.nz/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700">Financial Markets Authority (FMA)</a>.
          </p>

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
