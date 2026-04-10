export const metadata = {
  title: 'Terms of Service | MotorHomeInsurance.co.nz',
  description: 'Terms of service for MotorHomeInsurance.co.nz. Please review our terms before using our free comparison service.',
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-slate-300 text-lg">Last updated: April 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg max-w-none text-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">1. About MotorHomeInsurance.co.nz</h2>
          <p>
            MotorHomeInsurance.co.nz is a free comparison service operated by Cover4You Limited, a New Zealand company. We connect motorhome owners with licensed insurance brokers and providers who can offer insurance quotes and coverage.
          </p>
          <p>
            We are not an insurance company and do not provide insurance directly. All insurance products are provided by licensed New Zealand insurance providers.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">2. Our Service</h2>
          <p>
            Our website allows you to submit information about your motorhome and insurance needs. When you submit this information, we pass it to our network of licensed insurance brokers who will contact you with quotes from various insurance providers.
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>We do not charge you any fees for this service</li>
            <li>Insurance brokers may be compensated by insurers for referrals</li>
            <li>You are under no obligation to purchase insurance from any provider</li>
            <li>Quotes are estimates and may vary based on final underwriting</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">3. Data Privacy</h2>
          <p>
            When you submit information through our website, you consent to us sharing your details with licensed insurance brokers for the purpose of providing quotes.
          </p>
          <p>
            Your personal information will be handled in accordance with the Privacy Act 2020 and our Privacy Policy. Please review our Privacy Policy for full details on how we collect, use, and protect your data.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">4. Insurance Advice Disclaimer</h2>
          <p>
            Information provided on MotorHomeInsurance.co.nz is general in nature and should not be considered personal financial advice. Insurance needs vary based on individual circumstances.
          </p>
          <p>
            Before purchasing insurance, you should:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>Review the Product Disclosure Statement (PDS) provided by your chosen insurer</li>
            <li>Ensure you understand what is and isn't covered</li>
            <li>Discuss your specific needs with your insurance broker</li>
            <li>Ask questions about any coverage you don't understand</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">5. Use of Website</h2>
          <p>
            By using MotorHomeInsurance.co.nz, you agree to:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>Provide accurate and truthful information</li>
            <li>Not misrepresent information about your motorhome or usage</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not use the website for unlawful purposes</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">6. Disclaimer of Liability</h2>
          <p>
            To the extent permitted by law, MotorHomeInsurance.co.nz and Cover4You Limited are not liable for:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>Any loss or damage arising from use of our website</li>
            <li>Information accuracy or completeness</li>
            <li>Quotes provided by insurance brokers or insurers</li>
            <li>Any insurance claims or policy disputes</li>
            <li>Third-party actions or services</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">7. Changes to Terms</h2>
          <p>
            We reserve the right to change these terms at any time. Your continued use of the website following changes means you accept the revised terms.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">8. Governing Law</h2>
          <p>
            These terms are governed by the laws of New Zealand and you agree to submit to the exclusive jurisdiction of New Zealand courts.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">9. Contact Us</h2>
          <p>
            If you have questions about these terms, please contact us:
          </p>
          <p>
            Email: <a href="mailto:hello@cover4you.co.nz" className="text-sky-600 hover:text-sky-700 font-semibold">hello@cover4you.co.nz</a>
            <br />
            Phone: <a href="tel:098859549" className="text-sky-600 hover:text-sky-700 font-semibold">09 885 9549</a>
          </p>
        </div>
      </section>
    </>
  );
}
