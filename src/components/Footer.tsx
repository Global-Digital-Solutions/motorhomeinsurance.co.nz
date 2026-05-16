import Link from 'next/link';
import Logo from './Logo';
import { Shield, Zap, HeadphonesIcon, Lock, ExternalLink } from 'lucide-react';

const footerTrustBadges = [
  { icon: Shield, label: 'NZ Owned & Operated' },
  { icon: Zap, label: 'Instant Quotes' },
  { icon: HeadphonesIcon, label: 'Expert Support' },
  { icon: Lock, label: '100% Secure' },
];

const footerLinks = {
  company: {
    title: 'Company',
    links: [
      { label: 'Coverage Guide', href: '/coverage' },
      { label: 'Compare Providers', href: '/compare' },
      { label: 'Resources', href: '/blog' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Making a Claim', href: '/claims' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  types: {
    title: 'Coverage Types',
    links: [
      { label: 'Comprehensive Cover', href: '/types/comprehensive' },
      { label: 'Third-Party Liability', href: '/types/third-party-liability' },
      { label: 'Agreed Value', href: '/types/agreed-value' },
      { label: 'Market Value', href: '/types/market-value' },
      { label: 'Contents & Accessories', href: '/types/contents-cover' },
      { label: 'Rental Excess Reduction', href: '/types/rental-excess-reduction' },
    ],
  },
  insurance: {
    title: 'Motorhome Insurance',
    links: [
      { label: 'Caravan Insurance NZ', href: '/motorhome-insurance/caravan-insurance-nz' },
      { label: 'RV Insurance NZ', href: '/motorhome-insurance/rv-insurance-nz' },
      { label: 'Campervan Insurance NZ', href: '/motorhome-insurance/campervan-insurance-nz' },
      { label: 'Cheap Motorhome Insurance', href: '/motorhome-insurance/cheap-motorhome-insurance-nz' },
      { label: 'Best Motorhome Insurance', href: '/motorhome-insurance/best-motorhome-insurance-nz' },
      { label: 'Compare Motorhome Insurance', href: '/motorhome-insurance/compare-motorhome-insurance-nz' },
    ],
  },
  guides: {
    title: 'Regional & Specialist',
    links: [
      { label: 'NZMCA Insurance', href: '/motorhome-insurance/nzmca-insurance-nz' },
      { label: 'Freedom Camping Insurance', href: '/motorhome-insurance/freedom-camping-insurance-nz' },
      { label: 'Hamilton Insurance', href: '/motorhome-insurance/motorhome-insurance-hamilton' },
      { label: 'Dunedin Insurance', href: '/motorhome-insurance/motorhome-insurance-dunedin' },
      { label: 'Queenstown Insurance', href: '/motorhome-insurance/motorhome-insurance-queenstown' },
      { label: 'Self-Contained Motorhomes', href: '/motorhome-insurance/self-contained-motorhome-insurance-nz' },
    ],
  },
  regional: {
    title: 'More Guides',
    links: [
      { label: 'Auckland Insurance', href: '/motorhome-insurance/motorhome-insurance-auckland' },
      { label: 'Wellington Insurance', href: '/motorhome-insurance/motorhome-insurance-wellington' },
      { label: 'Christchurch Insurance', href: '/motorhome-insurance/motorhome-insurance-christchurch' },
      { label: 'Imported Motorhomes', href: '/motorhome-insurance/imported-motorhome-insurance-nz' },
      { label: 'Luxury Motorhomes', href: '/motorhome-insurance/luxury-motorhome-insurance-nz' },
      { label: 'Motorhome Hire Insurance', href: '/motorhome-insurance/motorhome-hire-insurance-nz' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  },
  regulatory: {
    title: 'NZ Regulatory Bodies',
    links: [
      { label: 'ICNZ', href: 'https://www.icnz.org.nz/', external: true },
      { label: 'FMA', href: 'https://www.fma.govt.nz/', external: true },
      { label: 'IFSO', href: 'https://www.ifso.nz/', external: true },
      { label: 'RBNZ Insurance Regulation', href: 'https://www.rbnz.govt.nz/regulation-and-supervision/insurers', external: true },
      { label: 'Citizens Advice Bureau', href: 'https://www.cab.org.nz/', external: true },
    ],
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {footerTrustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-white">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Logo variant="white" size="sm" />
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Email</p>
                <a href="mailto:hello@cover4you.co.nz" className="text-white font-semibold hover:text-sky-300 transition-colors break-all text-sm">
                  hello@cover4you.co.nz
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">{footerLinks.company.title}</h3>
            <ul className="space-y-2">
              {footerLinks.company.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-sky-300 transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">{footerLinks.types.title}</h3>
            <ul className="space-y-2">
              {footerLinks.types.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-sky-300 transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">{footerLinks.insurance.title}</h3>
            <ul className="space-y-2">
              {footerLinks.insurance.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-sky-300 transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">{footerLinks.guides.title}</h3>
            <ul className="space-y-2">
              {footerLinks.guides.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-sky-300 transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">{footerLinks.regional.title}</h3>
            <ul className="space-y-2">
              {footerLinks.regional.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-sky-300 transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold mb-4 mt-8">{footerLinks.legal.title}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-sky-300 transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold mb-4 mt-8">{footerLinks.regulatory.title}</h3>
            <ul className="space-y-2">
              {footerLinks.regulatory.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-300 transition-colors text-sm inline-flex items-center gap-1 group">
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-3">How This Site Works</h4>
          <p className="text-xs text-slate-500 leading-relaxed max-w-4xl">
            MotorHomeInsurance.co.nz is a no-fee comparison and referral service operated by Cover4You. We are not an insurer, broker, or financial advice provider. When you submit a quote request, we connect you with licensed insurance brokers and advisers from our network who are regulated under the Financial Markets Conduct Act 2013 (FMCA) and hold Financial Advice Provider (FAP) licences issued by the Financial Markets Authority (FMA). Those brokers provide the personalised quotes and regulated advice — not us. All insurance products are issued by licensed New Zealand insurers. Information on this website is general in nature and does not constitute personal financial or insurance advice. You should seek independent advice tailored to your circumstances before making any insurance decision.
          </p>
          <p className="text-xs text-slate-500 leading-relaxed max-w-4xl mt-3">
            <span className="text-slate-400 font-semibold">Commercial Relationships:</span> We may receive referral fees or commissions from the brokers, underwriters, and insurers featured on this website. These arrangements do not affect the price you pay for any product. Before featuring any provider, we personally vet each broker and insurer to confirm appropriate licensing, good standing with the FMA and ICNZ, and compliance with our standards for claims handling and customer service. Our editorial content reflects our honest, independent assessment. See our full <Link href="/disclaimer" className="text-slate-400 hover:text-sky-300 transition-colors underline">Disclaimer</Link> for details.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <p className="text-slate-400 text-sm">&copy; {currentYear} MotorHomeInsurance.co.nz. All rights reserved.</p>
            <div className="flex items-center gap-4 text-slate-400 text-sm flex-wrap">
              <Link href="/privacy" className="hover:text-sky-300 transition-colors">Privacy Policy</Link>
              <span className="hidden sm:inline text-slate-600">|</span>
              <Link href="/terms" className="hover:text-sky-300 transition-colors">Terms &amp; Conditions</Link>
              <span className="hidden sm:inline text-slate-600">|</span>
              <Link href="/disclaimer" className="hover:text-sky-300 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
