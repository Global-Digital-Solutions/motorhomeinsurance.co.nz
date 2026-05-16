import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | MotorHomeInsurance.co.nz',
  description: 'Privacy Policy for MotorHomeInsurance.co.nz. Learn how we collect, use, and protect your personal information in accordance with the Privacy Act 2020.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519001896312-85f41baa90a0?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/60" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-300 text-lg">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">

          <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 mb-10">
            <p className="text-slate-700 text-sm leading-relaxed">
              MotorHomeInsurance.co.nz is operated by Cover4You, a New Zealand company. We are committed to protecting your privacy and handling your personal information in accordance with the <strong>Privacy Act 2020</strong>. This policy explains how we collect, use, and protect your information.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">1. Information We Collect</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            When you request a motorhome insurance quote through our website, we collect the following personal information:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-slate-700 mb-4">
            <li>Full name</li>
            <li>Email address</li>
            <li>Motorhome type and approximate value</li>
            <li>Any additional details you choose to provide about your coverage needs</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            We also collect standard website usage data (such as pages visited and time on site) through analytics tools to help us improve the service. This data is aggregated and not linked to individual users.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We use the personal information you provide solely to:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-slate-700 mb-4">
            <li>Connect you with licensed insurance brokers in our network who can provide motorhome insurance quotes</li>
            <li>Respond to any enquiries you send us directly</li>
            <li>Improve and maintain our website and services</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            We do not use your information for unsolicited marketing, and we do not send spam emails or communications.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">3. Who We Share Your Information With</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Your personal information is shared with licensed insurance brokers in our network for the sole purpose of providing you with motorhome insurance quotes and advice. These brokers are bound by their own privacy obligations and New Zealand law.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            We do not sell, rent, or otherwise share your personal information with third parties for any purpose other than connecting you with brokers for insurance quotes.
          </p>
          <p className="text-slate-700 leading-relaxed">
            We may also share information where required by law, regulation, or court order, or to protect the rights and safety of our business and users.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">4. Data Security</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We use 256-bit SSL encryption to protect your personal information during transmission. We take reasonable steps to protect your information from loss, misuse, or unauthorised access, modification, disclosure, or destruction.
          </p>
          <p className="text-slate-700 leading-relaxed">
            No method of transmission over the internet is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">5. Cookies &amp; Analytics</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Our website uses cookies to improve your browsing experience. Cookies are small text files stored on your device. We use:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-slate-700 mb-4">
            <li><strong>Essential cookies:</strong> Required for core website functionality</li>
            <li><strong>Analytics cookies:</strong> Aggregated, anonymous data to understand website usage (e.g. Google Analytics)</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            You can disable cookies in your browser settings, though this may affect your experience on our website.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">6. Your Rights Under the Privacy Act 2020</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Under the Privacy Act 2020, you have the right to:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-slate-700 mb-4">
            <li><strong>Access</strong> the personal information we hold about you</li>
            <li><strong>Correct</strong> any personal information that is inaccurate or incomplete</li>
            <li><strong>Request deletion</strong> of your personal information (subject to any legal retention obligations)</li>
            <li><strong>Complain</strong> to the Office of the Privacy Commissioner if you believe your rights have been breached</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            To exercise any of these rights, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-sky-600 hover:text-sky-700 font-semibold">hello@cover4you.co.nz</a>. We will respond to all privacy requests within 20 working days as required by the Privacy Act 2020.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">7. Retention of Information</h2>
          <p className="text-slate-700 leading-relaxed">
            We retain your personal information only for as long as necessary to fulfil the purpose for which it was collected — typically until your quote request has been fulfilled and for a reasonable period thereafter. You may request deletion of your information at any time by contacting us.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">8. Links to Third-Party Sites</h2>
          <p className="text-slate-700 leading-relaxed">
            Our website may contain links to third-party websites (such as insurer websites and regulatory bodies). We are not responsible for the privacy practices of those sites. We encourage you to read their privacy policies before sharing any information.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">9. Changes to This Policy</h2>
          <p className="text-slate-700 leading-relaxed">
            We may update this Privacy Policy from time to time. Significant changes will be noted on our website. The date at the top of this policy reflects when it was last updated. Continued use of our website after changes are posted constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-bold text-sky-600 mt-10 mb-4">10. Contact &amp; Complaints</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <p className="text-slate-700 mb-1"><strong>MotorHomeInsurance.co.nz</strong></p>
            <p className="text-slate-700 mb-1">Operated by Cover4You</p>
            <p className="text-slate-700">Email: <a href="mailto:hello@cover4you.co.nz" className="text-sky-600 hover:text-sky-700 font-semibold">hello@cover4you.co.nz</a></p>
          </div>
          <p className="text-slate-600 text-sm">
            If you are unsatisfied with our response, you may contact the{' '}
            <a href="https://www.privacy.org.nz/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700">Office of the Privacy Commissioner</a> at privacy.org.nz.
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
