export interface CoverageType {
  slug: string;
  title: string;
  icon: string;
  description: string;
  details: string;
}

export const coverageTypes: CoverageType[] = [
  {
    slug: 'comprehensive',
    title: 'Comprehensive Cover',
    icon: '🛡️',
    description: 'Full protection including accidental damage, theft, fire, and weather events.',
    details: 'Comprehensive motorhome insurance provides the broadest protection available. It covers accidental damage from collisions and impacts, theft of the motorhome or parts, fire damage, weather and natural disaster damage including storms and hail, malicious damage and vandalism, and third-party liability. This is the most popular option for motorhome owners who want maximum peace of mind.',
  },
  {
    slug: 'third-party-liability',
    title: 'Third-Party Liability',
    icon: '⚖️',
    description: 'Covers damage or injury you cause to others while driving your motorhome.',
    details: 'Third-party liability insurance covers legal liability if your motorhome causes damage to other vehicles, property, or people. If you hit another car, damage a carpark, or cause injury to someone, third-party liability covers the costs up to your policy limit. Most New Zealand motorhome policies include third-party liability up to $20 million. This is essential coverage as you could face massive personal liability without it.',
  },
  {
    slug: 'agreed-value',
    title: 'Agreed Value',
    icon: '💰',
    description: 'Your motorhome is insured for a fixed agreed amount — no depreciation surprises at claim time.',
    details: 'With agreed value coverage, you and your insurer agree on your motorhome\'s value upfront. If your motorhome is written off, stolen, or damaged beyond repair, you receive the full agreed amount with no negotiation about depreciation. This removes uncertainty and gives you peace of mind knowing exactly what you\'ll receive. Agreed value is ideal for newer motorhomes or those with unusual valuations where market value might be disputed.',
  },
  {
    slug: 'market-value',
    title: 'Market Value',
    icon: '📊',
    description: 'Insured for the current market value at time of claim — typically lower premiums.',
    details: 'Market value insurance means your motorhome is insured for what it\'s worth at the time of a claim. If your motorhome has depreciated since purchase, you\'ll receive its current market value, not your original purchase price. Market value policies typically have lower premiums than agreed value. This option works well for motorhome owners who understand depreciation and don\'t need the certainty of a fixed payout amount.',
  },
  {
    slug: 'contents-cover',
    title: 'Contents & Accessories',
    icon: '🎒',
    description: 'Covers personal belongings, camping gear, and accessories inside your motorhome.',
    details: 'Standard motorhome insurance covers the motorhome itself but not the contents inside. If your motorhome contains a fridge, stove, bedding, camping gear, tools, electronics, and personal items worth thousands, these are usually uninsured. Contents cover, available as an optional add-on, protects these items against accidental damage, theft, and other covered perils. Essential if you carry valuable camping equipment or appliances.',
  },
  {
    slug: 'rental-excess-reduction',
    title: 'Rental Excess Reduction',
    icon: '🚐',
    description: 'Reduces or eliminates the excess on your rental motorhome policy.',
    details: 'When renting a motorhome, rental companies typically include a $2,500-5,000 excess. Rental excess reduction insurance covers this excess, protecting you from paying thousands if you accidentally damage the rental motorhome. Rental excess reduction is usually available as a daily add-on (typically $10-20 per day). It\'s essential if you want to enjoy your motorhome holiday without worrying about accidental damage costs.',
  },
];
