export interface CoverageTypeFaq {
  question: string;
  answer: string;
}

export interface CoverageType {
  slug: string;
  title: string;
  icon: string;
  description: string;
  details: string;
  faqs?: CoverageTypeFaq[];
}

export const coverageTypes: CoverageType[] = [
  {
    slug: 'comprehensive',
    title: 'Comprehensive Cover',
    icon: '🛡️',
    description: 'Full protection including accidental damage, theft, fire, and weather events.',
    details: 'Comprehensive motorhome insurance provides the broadest protection available in New Zealand. It covers accidental damage from collisions and impacts, theft of the motorhome or its parts, fire and explosion damage, weather and natural disaster damage including storms, hail, and flooding, malicious damage and vandalism, and third-party liability up to $20 million. Comprehensive cover also typically includes emergency accommodation costs if your motorhome becomes uninhabitable following a covered event, towing costs after an accident, and — with many specialist insurers — excess-free glass cover for windscreens and windows. This is the most popular option for New Zealand motorhome owners who want maximum peace of mind and the highest level of financial protection for their investment.',
    faqs: [
      {
        question: 'What does comprehensive motorhome insurance cover in New Zealand?',
        answer: 'Comprehensive motorhome insurance in NZ covers accidental damage (collisions, impacts), theft of the motorhome or its parts, fire and explosion, weather events (storms, hail, floods), malicious damage and vandalism, third-party liability up to $20 million, emergency accommodation, and towing costs. Many specialist policies also include excess-free glass cover and contents as optional add-ons.',
      },
      {
        question: 'How much does comprehensive motorhome insurance cost in NZ?',
        answer: 'Comprehensive motorhome insurance in New Zealand typically costs $800–$2,500 per year depending on the motorhome\'s value, age, type, your excess level, and storage arrangements. A $60,000 motorhome might attract premiums of around $1,200–$1,800 per year for comprehensive cover. Specialist insurers like Covi and Star Insure are often more competitive than mainstream insurers for motorhome-specific risks.',
      },
      {
        question: 'Is comprehensive cover worth it for a motorhome?',
        answer: 'Yes — for most motorhome owners, comprehensive cover is worth the investment. Motorhomes are high-value assets frequently targeted for theft, and a single weather event, accident, or break-in can cost thousands. Comprehensive cover protects against all these scenarios. For motorhomes valued over $30,000, the annual premium cost is small relative to the financial risk of being uninsured.',
      },
      {
        question: 'Does comprehensive motorhome insurance include contents?',
        answer: 'Standard comprehensive motorhome policies in NZ cover the motorhome structure and its permanently fitted fixtures, but personal contents, camping gear, and accessories inside are usually not included by default. Contents cover (protecting items like camping equipment, electronics, and personal belongings) is typically available as a separate add-on, usually for an additional $50–$200 per year depending on the coverage limit.',
      },
    ],
  },
  {
    slug: 'third-party-liability',
    title: 'Third-Party Liability',
    icon: '⚖️',
    description: 'Covers damage or injury you cause to others while driving your motorhome.',
    details: 'Third-party liability insurance covers your legal liability if your motorhome causes damage to other vehicles, property, or people while you are driving. If you rear-end another vehicle, damage a carpark structure, or injure a pedestrian, third-party liability insurance covers the resulting claims against you up to your policy limit. In New Zealand, most motorhome policies include third-party liability cover of up to $20 million — enough to cover virtually any scenario you are likely to face. This coverage is essential: without it, you could face massive personal financial liability from property damage claims. While ACC covers personal injury to accident victims in New Zealand, property damage claims are not covered by ACC and fall entirely on the at-fault driver.',
    faqs: [
      {
        question: 'Is third-party liability insurance compulsory for motorhomes in New Zealand?',
        answer: 'Third-party liability insurance is not legally compulsory in New Zealand — there is no mandatory third-party insurance requirement. However, it is strongly recommended and included in virtually all motorhome insurance policies. Without it, you are personally liable for any property damage your motorhome causes to other vehicles, buildings, or structures. Given that a serious accident could result in hundreds of thousands of dollars in property damage claims, third-party liability is considered essential.',
      },
      {
        question: 'How much third-party liability does a typical NZ motorhome policy include?',
        answer: 'Most New Zealand motorhome insurance policies include third-party liability coverage of up to $20 million. This is included as standard with comprehensive cover from all major NZ motorhome insurers including Covi, Star Insure, AA, Tower, and AMI. $20 million is sufficient to cover virtually any property damage claim you are likely to face as a motorhome driver.',
      },
      {
        question: 'Does third-party liability cover personal injury in New Zealand?',
        answer: 'In New Zealand, personal injury claims from road accidents are handled by ACC (Accident Compensation Corporation), not by your motorhome insurance. ACC provides no-fault cover for medical costs and loss of income for anyone injured in an accident. Your third-party liability insurance covers property damage claims from third parties — not personal injury. This is one of the key differences between NZ insurance and countries without universal accident compensation schemes.',
      },
      {
        question: 'Can I get third-party only motorhome insurance in New Zealand?',
        answer: 'Third-party only motorhome insurance is available from some NZ insurers but is not widely marketed for motorhomes, as most owners prefer comprehensive cover. Third-party only protects against liability to others but not damage to your own motorhome. It may suit owners of low-value motorhomes (under $10,000) who cannot justify the cost of comprehensive cover but want liability protection. Contact our broker network to explore third-party only options.',
      },
    ],
  },
  {
    slug: 'agreed-value',
    title: 'Agreed Value',
    icon: '💰',
    description: 'Your motorhome is insured for a fixed agreed amount — no depreciation surprises at claim time.',
    details: 'With agreed value coverage, you and your insurer agree on your motorhome\'s insured value at the start of your policy. This agreed amount is written into your policy document. If your motorhome is written off in an accident, destroyed by fire, or stolen and not recovered, you receive the full agreed value — there is no negotiation about market depreciation, condition adjustments, or comparative sales at claim time. This removes uncertainty and delivers complete financial clarity. Agreed value is especially important for newer motorhomes where depreciation is significant, high-value motorhomes over $100,000, custom-built or imported motorhomes that are difficult to value, and NZMCA-member owners who want certainty about their insurance position. Covi Insurance, the NZMCA-affiliated provider, offers agreed value as standard across their motorhome policies.',
    faqs: [
      {
        question: 'What is agreed value motorhome insurance?',
        answer: 'Agreed value motorhome insurance means you and your insurer agree on your motorhome\'s insured value at the start of your policy. This amount is fixed in writing. If your motorhome is written off, stolen, or a total loss, you receive the full agreed amount regardless of market depreciation at the time of the claim. There is no negotiation or adjustment — you get exactly what was agreed.',
      },
      {
        question: 'Is agreed value better than market value for motorhomes in NZ?',
        answer: 'For newer motorhomes and those over $60,000, agreed value is generally the better choice. Motorhomes depreciate significantly — a motorhome bought for $80,000 may be worth $60,000 two years later. With agreed value, a total loss claim still pays $80,000 (as agreed). With market value, you would only receive the current $60,000. The premium difference between agreed and market value is typically 10–20%. For most motorhome owners, the certainty of agreed value justifies this cost difference.',
      },
      {
        question: 'How is the agreed value set for my motorhome?',
        answer: 'Insurers set agreed value based on your motorhome\'s make, model, year, current market comparables, condition, any modifications or upgrades, and your proposed insured amount. For new motorhomes, the purchase price is typically used. For used motorhomes, you may need a professional valuation from a specialist familiar with your model. Covi Insurance, AA, and Star Insure all offer agreed value — request it specifically when comparing quotes.',
      },
      {
        question: 'Does agreed value motorhome insurance cost more?',
        answer: 'Agreed value motorhome insurance is typically 10–20% more expensive than market value cover. For a motorhome with a $1,200/year market value premium, agreed value might be $1,320–$1,440. This extra cost buys complete certainty about your payout at claim time — no depreciation arguments, no market comparisons. For motorhome owners who have invested significantly in their vehicle, most find the premium difference well worth the peace of mind.',
      },
    ],
  },
  {
    slug: 'market-value',
    title: 'Market Value',
    icon: '📊',
    description: 'Insured for the current market value at time of claim — typically lower premiums.',
    details: 'Market value insurance means your motorhome is insured for its current market value at the time of a claim, rather than a fixed amount agreed in advance. If your motorhome has depreciated since purchase and suffers a total loss, the insurer will assess what comparable motorhomes are currently selling for in the New Zealand market and pay that amount. Market value policies have lower premiums than agreed value — typically 10–20% cheaper — making them attractive for budget-conscious owners. This option works well for older motorhomes (10+ years) where values are more stable and well-established, and for owners who prioritise lower annual insurance costs over certainty of payout. Most mainstream NZ insurers (Tower, AMI, AA) offer market value as their default motorhome valuation basis.',
    faqs: [
      {
        question: 'How does market value motorhome insurance work in New Zealand?',
        answer: 'With market value motorhome insurance, your insurer pays the current market value of your motorhome at the time of a total loss claim. This is assessed by comparing your motorhome\'s make, model, year, condition, and mileage against current NZ market sales (TradeMe, dealer listings, industry guides). The payout reflects what you could buy a similar motorhome for today, not what you originally paid. If your motorhome has depreciated, your payout will be less than your purchase price.',
      },
      {
        question: 'Is market value motorhome insurance suitable for older motorhomes?',
        answer: 'Yes — market value insurance is often the better choice for older motorhomes (10+ years). Older motorhomes have lower, more stable values with less depreciation variance year to year. The premium saving from market value (10–20% cheaper than agreed value) is meaningful, and the risk of significant depreciation-related underpayment at claim time is lower than for newer, high-value motorhomes. For motorhomes worth under $30,000, market value is a pragmatic and cost-effective choice.',
      },
      {
        question: 'What is the difference between market value and agreed value for NZ motorhomes?',
        answer: 'Agreed value: insured amount is fixed upfront in writing — you receive exactly that amount for a total loss, regardless of depreciation. Market value: payout is assessed at claim time based on current market comparables — if your motorhome has depreciated, you receive less than purchase price. Market value premiums are 10–20% lower. Agreed value suits newer and higher-value motorhomes. Market value suits older motorhomes where values are stable and cost is a priority.',
      },
      {
        question: 'Can I dispute the market value assessment from my insurer?',
        answer: 'Yes. If you believe your insurer\'s market value assessment is too low, you have the right to dispute it. Gather evidence of comparable NZ motorhome sales (TradeMe listings, dealer quotes, NZMCA classifieds) showing similar motorhomes selling for a higher price. Most insurers will review additional market evidence. If the dispute is not resolved, you can escalate to the Insurance and Financial Services Ombudsman (IFSO), a free independent dispute resolution service available to all NZ insurance consumers.',
      },
    ],
  },
  {
    slug: 'contents-cover',
    title: 'Contents & Accessories',
    icon: '🎒',
    description: 'Covers personal belongings, camping gear, and accessories inside your motorhome.',
    details: 'Standard motorhome insurance covers the vehicle structure and permanently fitted fixtures, but the contents inside your motorhome are typically not included by default. A well-equipped New Zealand motorhome can carry thousands of dollars worth of belongings: camping furniture, cooking equipment, a generator, solar panels, kayaks or bicycles, electronics, bedding, clothing, and personal items. Without contents cover, all of these are uninsured. Contents cover is available as an add-on to comprehensive motorhome insurance, protecting your belongings against theft, accidental damage, fire, and weather events. Coverage limits typically range from $5,000 to $20,000 depending on the policy. For NZMCA members who invest heavily in self-contained setups and accessories, contents cover is particularly worthwhile. Covi Insurance and Star Insure both offer contents cover as an optional add-on to their motorhome policies.',
    faqs: [
      {
        question: 'Does motorhome insurance cover contents and personal belongings?',
        answer: 'Standard motorhome insurance in NZ covers the motorhome structure, engine, and permanently fitted fixtures but not personal contents, camping gear, or accessories inside the vehicle by default. Contents cover is available as a separate add-on (typically an additional $50–$200 per year) and protects your belongings — camping equipment, electronics, clothing, appliances, tools — against theft, damage, fire, and weather events. Check your policy wording carefully, as coverage varies by insurer.',
      },
      {
        question: 'What is the typical contents cover limit for NZ motorhome insurance?',
        answer: 'Contents cover limits for NZ motorhome insurance typically range from $5,000 to $20,000 depending on the policy and insurer. Some policies offer flexible limits you can adjust to match your belongings\' actual value. Sub-limits may apply for individual high-value items — electronics might be capped at $2,000 per item, for example. Assess the total value of everything in your motorhome and ensure your chosen limit is sufficient. Specialist insurers like Covi offer more flexible contents limits than mainstream providers.',
      },
      {
        question: 'Are solar panels and generators covered under motorhome contents insurance?',
        answer: 'Permanently fitted solar panels, inverters, and generators are typically covered under the main motorhome insurance policy as fixtures rather than contents. Portable generators, portable solar setups, and other removable equipment are usually covered under contents insurance. The distinction is whether the item is permanently fixed to the motorhome or portable. If in doubt, ask your insurer to confirm coverage for specific high-value items — you may need to schedule them specifically.',
      },
      {
        question: 'Does contents cover apply when items are outside the motorhome at a campsite?',
        answer: 'Coverage for contents outside the motorhome (at a campsite, on an awning, or stored in an external locker) varies by insurer and policy. Some policies extend contents cover to items temporarily outside the motorhome at a campsite. Others only cover items while secured inside the motorhome. Read your policy wording carefully and ask your insurer about campsite coverage for camping chairs, awnings, bikes, and outdoor cooking equipment.',
      },
    ],
  },
  {
    slug: 'rental-excess-reduction',
    title: 'Rental Excess Reduction',
    icon: '🚐',
    description: 'Reduces or eliminates the excess on your rental motorhome policy.',
    details: 'When renting a motorhome in New Zealand, rental companies include basic third-party insurance in the rental fee, but with a significant damage excess — typically $2,500 to $5,000. If the motorhome is damaged while in your care, you are responsible for paying this excess regardless of fault. Rental excess reduction insurance (also called rental excess protection or collision damage waiver) covers this excess, protecting you from an unexpected bill of thousands of dollars. Rental excess reduction is available as a daily add-on directly from the rental company (typically $25–$45 per day) or separately through travel insurance or specialist providers at lower rates ($10–$20 per day). For NZ holiday rentals through major operators like Britz, Jucy, Pacific Motorhomes, or Apollo, rental excess reduction is strongly recommended — particularly if sharing driving duties or travelling on unsealed roads where minor damage is most likely.',
    faqs: [
      {
        question: 'What is the standard excess on a rental motorhome in New Zealand?',
        answer: 'Standard excess on rental motorhomes in New Zealand ranges from $2,500 to $5,000 depending on the rental company and motorhome class. Luxury motorhomes may have higher excesses. Britz, Jucy, and Pacific Motorhomes typically have excesses in the $2,500–$3,500 range. Apollo and Maui charge up to $5,000. You are responsible for paying this excess for any damage during your rental period, regardless of whether the incident was your fault.',
      },
      {
        question: 'Is rental excess reduction worth it for motorhome hire in NZ?',
        answer: 'For most renters, yes. NZ\'s unsealed gravel roads, tight campsite access, and changeable weather create genuine risk of minor damage (stone chips, scrapes, kerb bumps). Even a small repair can exceed $1,000. At $10–$20 per day for external excess reduction cover, a 14-day rental costs $140–$280 to cover a potential $3,000–$5,000 excess. The maths strongly favour purchasing excess reduction cover, especially for first-time motorhome drivers.',
      },
      {
        question: 'Should I buy excess reduction from the rental company or separately?',
        answer: 'Purchasing rental excess reduction separately (through a travel insurer or specialist provider) is usually cheaper than buying it from the rental company directly. Rental company excess reduction typically costs $25–$45 per day. Third-party standalone policies can cover the same excess for $10–$20 per day. However, check that your standalone policy covers the full excess amount and all damage types (including windscreen, tyres, and underbody damage) — some policies have exclusions that rental company cover does not.',
      },
      {
        question: 'Does my existing travel insurance cover rental motorhome excess?',
        answer: 'Some comprehensive travel insurance policies include rental vehicle excess cover, but many do not cover campervans and motorhomes — only cars. Read your travel insurance policy wording carefully and look for "rental vehicle excess" or "hire car excess" coverage and confirm it explicitly includes campervans and motorhomes. If it is not clearly stated, it is likely excluded. Purchasing dedicated rental excess reduction from a specialist provider ensures complete, clear coverage.',
      },
    ],
  },
  {
    slug: 'roadside-assistance',
    title: 'Roadside Assistance Cover',
    icon: '🚨',
    description: 'Emergency breakdown support, towing, and on-road assistance for motorhomes anywhere in New Zealand.',
    details: `Roadside assistance cover is one of the most practically valuable additions to any motorhome insurance policy. When your motorhome breaks down — whether on a remote Southland road, a Northland coastal route, or a city motorway — having dedicated motorhome roadside assistance means help arrives with the right equipment and expertise.

Standard car roadside assistance (AA, NZRA) may not be fully equipped for motorhome recovery, which requires appropriate-scale tow trucks, understanding of habitation systems, and awareness that your motorhome may be both vehicle and home. Specialist motorhome roadside assistance services know this.

New Zealand's leading motorhome insurers offer roadside assistance options tailored for RV owners:

**Covi Wings Roadside** is available from $57 per year as an add-on to Covi Insurance policies. Wings is specifically designed for motorhome and caravan breakdowns, with appropriate recovery vehicles and expertise. A $200 callout fee applies per incident. For $57 annually, Wings represents exceptional value given the complexity of motorhome recovery compared to standard car towing.

**Star Insure CamperCare** includes NZRA (New Zealand Roadside Assistance) at no additional premium cost. NZRA provides 24/7 breakdown response, emergency towing, and on-road support throughout New Zealand. Having roadside assistance bundled into your CamperCare premium reduces the total cost of motorhome ownership.

**AA Roadside Assistance** is included with AA Insurance motorhome policies. AA's nationwide network provides reliable 24/7 breakdown response and towing to the nearest appropriate repairer. AA is particularly strong in urban and main-route coverage.

Key services provided by motorhome roadside assistance include emergency towing to the nearest suitable motorhome repairer, on-road mechanical assistance for minor issues (flat battery, tyre changes), emergency fuel delivery if you run dry, lockout assistance, and after-hours emergency contact. Some premium services also include emergency accommodation if your motorhome is unroadworthy and you cannot continue your journey.

For motorhome owners who use their vehicles for extended touring — particularly in remote areas of Fiordland, the Catlins, Northland's Far North, or the Central Plateau — quality roadside assistance is not optional. It's a critical safety net. Response times to remote areas can be 2-4 hours, so carrying emergency supplies (water, blankets, food) is always advisable alongside your roadside assistance membership.

When evaluating roadside assistance options, consider: Does it cover motorhome-specific recovery? What is the callout fee (if any)? What is the geographic coverage? Is emergency accommodation included for overnight breakdowns? Our comparison service helps you identify which providers offer the best roadside assistance for your typical touring routes and motorhome type.`,
    faqs: [
      {
        question: 'Is roadside assistance included in motorhome insurance?',
        answer: 'It depends on your insurer. AA Insurance includes AA Roadside Assistance as standard. Star Insure CamperCare includes NZRA at no extra cost. Covi Insurance offers Wings Roadside as an optional add-on for $57/year. Tower, AMI, and other mainstream insurers typically require separate roadside assistance membership.',
      },
      {
        question: 'What is the difference between AA Roadside and Covi Wings?',
        answer: 'AA Roadside is a general vehicle roadside service included with AA Insurance policies, covering motorhomes alongside cars and other vehicles. Covi Wings is specifically designed for motorhomes and caravans, with recovery vehicles and expertise matched to RV needs. Wings costs $57/year as an add-on with a $200 callout fee. AA Roadside is included in AA Insurance premiums at no extra cost.',
      },
      {
        question: 'Does roadside assistance cover me in remote areas of New Zealand?',
        answer: 'Yes, all major NZ roadside assistance providers cover the whole of New Zealand, including remote areas like Fiordland, the Catlins, and the Far North. However, response times in remote areas can be 2-4 hours or longer. Always carry emergency supplies (water, food, blankets, phone charger) when touring remote routes, regardless of your roadside assistance coverage.',
      },
      {
        question: 'What should I do if my motorhome breaks down?',
        answer: 'Move to a safe location off the road if possible. Turn on hazard lights. Call your roadside assistance provider with your policy number, current location (use phone GPS for coordinates), registration number, and a description of the problem. For remote areas, note nearby landmarks. If you or passengers are injured or in danger, call 111 before roadside assistance.',
      },
    ],
  },
  {
    slug: 'storage-cover',
    title: 'Storage & Lay-Up Cover',
    icon: '🏠',
    description: 'Protection for your motorhome during storage periods when it\'s not being driven — covering theft, fire, weather, and vandalism at reduced premiums.',
    details: `Storage and lay-up cover is a specialist insurance option designed for motorhome owners who use their vehicle seasonally or need to store it for extended periods. Rather than paying for full comprehensive cover (which includes accident and driving protection you don't need when your motorhome is stationary), storage cover maintains essential protection at a significantly reduced premium.

**What Is Lay-Up Insurance?**

Lay-up or storage insurance is full comprehensive cover with the driving component removed. Since your motorhome won't be on the road during the storage period, you don't need cover for collisions, third-party liability while driving, or driving-related incidents. What you do need — and what lay-up cover provides — is protection against the real risks a stored motorhome faces:

*Theft and Burglary:* Motorhomes are high-value targets. Break-ins at home properties, storage facilities, and motorhome parks occur regularly. Lay-up cover protects against theft of the motorhome itself and theft of contents from within it.

*Fire and Explosion:* LPG systems, electrical components, and batteries all present fire risk even when a motorhome is stationary. Fire coverage is essential during storage periods, particularly in sheds or garages where a fire could spread to other structures.

*Weather and Storm Damage:* Hail, fallen trees, flooding, and storm-related structural damage can occur while a motorhome is in storage. Many owners park their motorhomes outside during winter — comprehensive weather cover during this period is valuable.

*Vandalism:* Malicious damage to stored motorhomes — from broken windows to spray paint — does occur, particularly in less secure locations.

*Water Ingress:* While not always covered under standard policies (insurers may argue maintenance obligations), water damage from storm events or failed roof seals during storage can cause significant mould and structural damage.

**How Much Does Storage Cover Cost?**

Lay-up cover typically costs 30-50% less than full comprehensive cover. For a motorhome with a $900/year full comprehensive premium, storage cover might be $450-$630 for the same period. Over a 6-month lay-up, switching to storage cover saves $135-$225 compared to maintaining full cover. This saving is real and worthwhile — and far less risky than cancelling cover entirely.

**How to Activate Storage Cover**

Contact your insurer before your storage period begins to arrange the transition to lay-up cover. This is typically done via a phone call or online request and takes effect within 24-48 hours. Do not assume you're on storage cover — you must request it explicitly. When you're ready to recommence touring, contact your insurer again to reinstate full comprehensive cover before taking your motorhome on the road.

**Storage Location and Your Premium**

Where you store your motorhome affects your storage cover premium. Dedicated motorhome storage facilities with CCTV, gated access, and security monitoring represent lower risk than home driveway storage. Some insurers offer discounts of 5-15% for approved storage facilities. Home garage storage provides intermediate security. Provide accurate storage location information to your insurer — incorrect information can affect claims outcomes.`,
    faqs: [
      {
        question: 'Should I cancel my motorhome insurance during winter storage?',
        answer: 'No — you should switch to lay-up or storage cover rather than cancelling entirely. Stored motorhomes face real risks including theft, fire, weather damage, and vandalism. Cancelling insurance creates dangerous gaps. Storage cover costs 30-50% less than full comprehensive cover while maintaining essential protection. Contact your insurer before storage begins to arrange lay-up cover.',
      },
      {
        question: 'What is the difference between lay-up cover and full comprehensive cover?',
        answer: 'Full comprehensive cover protects your motorhome against all risks including driving accidents, collision, and third-party liability while on the road. Lay-up cover removes the driving component, as your motorhome won\'t be driven during storage, but retains protection for theft, fire, weather damage, and vandalism. Lay-up cover costs significantly less because the highest-risk element (driving) is removed.',
      },
      {
        question: 'Can I drive my motorhome when it\'s on lay-up cover?',
        answer: 'No — lay-up cover is specifically for motorhomes that will not be driven. If you need to move your motorhome during a lay-up period (for example, to a new storage location), you must contact your insurer to temporarily reinstate full comprehensive cover for the duration of the drive. Driving on lay-up cover only would leave you uninsured for any driving incident.',
      },
      {
        question: 'Does storage cover apply at my home driveway or only at storage facilities?',
        answer: 'Storage cover applies wherever your motorhome is stored — your home property, a dedicated storage facility, or another location. The storage location affects your premium (secure facilities typically attract lower premiums than exposed home parking), but coverage itself applies regardless. Always inform your insurer of your actual storage location for accurate premium calculation and to ensure claims aren\'t complicated by location discrepancies.',
      },
    ],
  },
];
