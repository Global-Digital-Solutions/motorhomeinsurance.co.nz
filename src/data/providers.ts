export interface Provider {
  name: string;
  logo: string;
  rating: number;
  price: string;
  features: string[];
  pros: string;
  cons: string;
}

export const providers: Provider[] = [
  {
    name: 'AA Insurance',
    logo: '🔵',
    rating: 4.5,
    price: '$$',
    features: ['Comprehensive cover', 'Agreed & market value', '24/7 claims', 'Roadside assist'],
    pros: 'Strong brand, good claims service, wide provider network',
    cons: 'Can be pricier for older motorhomes',
  },
  {
    name: 'Star Insure',
    logo: '⭐',
    rating: 4.6,
    price: '$$',
    features: ['Specialist motorhome', 'Agreed value', 'Contents cover', 'Roadside assist'],
    pros: 'Specialist RV insurer, tailored policies, expert knowledge',
    cons: 'Less well-known brand than majors',
  },
  {
    name: 'Tower Insurance',
    logo: '🟠',
    rating: 4.2,
    price: '$',
    features: ['Comprehensive', 'Market value', 'Third-party liability', 'Online claims'],
    pros: 'Competitive pricing, easy online process, straightforward',
    cons: 'Fewer specialist motorhome features',
  },
  {
    name: 'AMI Insurance',
    logo: '🟢',
    rating: 4.3,
    price: '$$',
    features: ['Comprehensive cover', 'Agreed value option', 'Contents add-on', '24/7 support'],
    pros: 'Wide coverage, strong NZ presence, multi-policy discounts',
    cons: 'Premium for high-value motorhomes',
  },
  {
    name: 'State Insurance',
    logo: '🔷',
    rating: 4.1,
    price: '$',
    features: ['Comprehensive', 'Third-party', 'Market value', 'Online portal'],
    pros: 'Affordable entry-level options, reliable',
    cons: 'Limited specialist add-ons',
  },
  {
    name: 'Covi Insurance',
    logo: '🏕️',
    rating: 4.7,
    price: '$$$',
    features: ['Specialist motorhome', 'Agreed value', 'Contents cover', 'Legal liability'],
    pros: 'NZ\'s leading specialist RV insurer, best for motorhomes',
    cons: 'Higher premiums reflect specialist coverage',
  },
];
