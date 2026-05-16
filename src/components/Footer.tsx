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
      { label: 'About', href: '/about' },
      { label: 'Making a Claim', href: '/claims' },
                { label: 'Contact', href: '/contact' },
      { label: 'Making a Claim', href: '/claims' },
                { label: 'FAQs', href: '/faqs' },
      { label: 'Blog', href: '/blog' },
      { label: 'Coverage Guide', href: '/coverage' },
      { label: 'Compare Providers', href: '/compare' },
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
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Phone</p>
                <a href="tel:+6498859549" className="text-white font-semibold hover:text-sky-300 transition-colors">
                  09 885 9549
                </a>
              </div>
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
            MotorHomeInsurance.co.nz is a no-fee comparison service — we are not an insurer, broker, or financial adviser. When you request a quote, we connect you with licensed insurance brokers and advisers from our network who can provide personalised quotes and advice tailored to your circumstances. All insurance products are issued by licensed insurers through our broker partners. Information on this website is general in nature and does not constitute financial advice. You should seek independent financial advice before making insurance decisions.
          </p>
          <p className="text-xs text-slate-500 leading-relaxed max-w-4xl mt-3">
            <span className="text-slate-400 font-semibold">Commercial Relationships & Incentives:</span> We may receive referral fees, commissions, or other commercial incentives from the insurance brokers, underwriters, and providers featured on this website. These arrangements do not influence the price you pay for any insurance product. Before featuring any provider on our websites, we personally review and vet each broker, underwriter, and insurer to ensure they are appropriately licensed, hold a good standing with the relevant NZ regulatory bodies (including the FMA and ICNZ), and meet our standards for claims handling and customer service. Our editorial content and provider comparisons reflect our honest, independent assessment.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <p className="text-slate-400 text-sm">&copy; {currentYear} MotorHomeInsurance.co.nz. All rights reserved.</p>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span>Connect with Licensed Insurance Brokers</span>
              <span className="hidden sm:inline">|</span>
              <Link href="/disclaimer" className="hover:text-sky-300 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
