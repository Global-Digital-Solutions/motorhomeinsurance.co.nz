export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'complete-guide-motorhome-insurance-nz',
    title: 'The Complete Guide to Motorhome Insurance in NZ (2025)',
    excerpt: 'Everything you need to know about insuring your motorhome in New Zealand — from what\'s covered to choosing the right policy for your lifestyle.',
    date: '2026-04-08',
    author: 'MotorHomeInsurance.co.nz',
    image: '/hero-motorhome-1.jpg',
    readTime: '9 min read',
    category: 'Insurance Guides',
    content: `<h2>Understanding Motorhome Insurance</h2>
<p>Motorhomes are more than vehicles — they're homes on wheels, adventure companions, and significant investments. Whether you're a weekend explorer or a full-time traveller, proper motorhome insurance is essential to protect both your asset and your peace of mind. New Zealand has over 35,000 registered motorhomes, with the fleet growing 8% annually, reflecting Kiwis' passion for adventure and freedom on wheels.</p>

<h2>Why You Need Dedicated Motorhome Insurance</h2>
<p>Standard car insurance policies typically don't cover motorhomes adequately once they're parked. Your car policy may only cover the motorhome while you're actively driving it. Once parked at a campground, stored at home, or sitting in a scenic location, your motorhome is generally uninsured under standard car policies. This is where dedicated motorhome insurance becomes critical.</p>
<p>Dedicated motorhome insurance addresses these unique needs, providing comprehensive protection whether you're parked at a commercial campground, enjoying freedom camping in a self-contained motorhome, travelling across New Zealand, or stored at home. The Insurance Council of New Zealand (ICNZ) strongly recommends standalone motorhome insurance because car policies simply don't provide adequate protection for vehicles that function as temporary or permanent homes.</p>

<h2>The True Cost of Being Uninsured</h2>
<p>Consider this scenario: You're enjoying a week at a scenic motorhome park when a storm causes significant water damage to your motorhome. Without standalone motorhome insurance, this could mean $5,000-$15,000 in repair costs coming directly from your pocket. Or imagine someone is injured on your motorhome property, or your motorhome damages someone else's vehicle — you could face personal liability exceeding $20 million. These are the risks that make motorhome insurance non-negotiable.</p>

<h2>Types of Motorhome Coverage Available</h2>
<p><strong>Comprehensive coverage</strong> provides the broadest protection, covering accidental damage from collisions and impacts, theft of your motorhome or parts, fire and structural damage, weather-related damage including storms and hail, vandalism and malicious damage, and third-party liability up to $20 million. This is the most popular choice and offers the best protection.</p>
<p><strong>Third-party liability</strong> covers damage you cause to others or their property while driving. This is the legal minimum protection and is affordable but doesn't cover damage to your own motorhome.</p>
<p><strong>Agreed value policies</strong> lock in your payout amount upfront, eliminating depreciation disputes at claim time. <strong>Market value policies</strong> pay current value at time of loss, typically costing less in premiums but with less certainty.</p>
<p><strong>Contents cover</strong> protects your camping gear, appliances, personal belongings, and accessories inside your motorhome. This is crucial if you carry valuable equipment.</p>
<p><strong>Rental excess reduction</strong> lowers or eliminates your excess on hire motorhomes, essential if you plan to rent motorhomes during holidays.</p>

<h2>Factors Affecting Your Premium</h2>
<p>Your motorhome's age, value, and type significantly impact premiums. A campervan worth $25,000 will cost far less to insure than a luxury self-contained motorhome worth $200,000. Self-contained status affects pricing because these motorhomes are more valuable and have more complex systems requiring specialist understanding.</p>
<p>How often you use it matters greatly. Weekend users pay less than full-time dwellers. Where it's stored when not in use influences theft risk — secure garage storage costs less to insure than street parking. Your location matters (Auckland has higher theft rates than rural NZ). Your driving history affects costs (clean record = lower premiums). Security measures like GPS trackers can reduce premiums 5-15%.</p>

<h2>Choosing Between Agreed and Market Value</h2>
<p>Agreed value means you and your insurer both agree on the value upfront, written into your policy. If your motorhome is written off, you receive that agreed amount with no depreciation arguments. Market value means the insurer pays what it's worth at the time of loss — which could be significantly less if your motorhome has depreciated. Agreed value provides certainty and peace of mind but may cost slightly more in premiums. Market value costs less but offers less certainty.</p>

<h2>Special Considerations for Different Motorhome Types</h2>
<p><strong>For Imported Motorhomes:</strong> Japanese imports like Toyota HiAce and Mitsubishi Rosa are increasingly popular. Get professional valuations from specialists familiar with imports. Use agreed value to lock in valuation. Specialist motorhome insurers have more experience with imports than standard car insurers.</p>
<p><strong>For Self-Contained Motorhomes:</strong> Ensure coverage includes all integrated systems (water tanks, waste systems, electrical, solar panels, appliances). Check whether freedom camping is covered and that your motorhome has proper MSD certification.</p>
<p><strong>For Full-Time Living:</strong> Dedicated full-time living policies are essential if you live permanently in your motorhome. Standard recreational motorhome policies may not provide adequate protection for year-round residence.</p>

<h2>Getting the Best Quote</h2>
<p>Compare quotes from at least three providers — price differences of 40%+ for identical motorhomes are common. Be honest about usage, modifications, storage location, and security measures. Ask specifically about discounts for security systems, multi-policy bundling, safe driving records, and low usage. Review coverage limits, excess options, and what's included in each quote. Don't just pick the cheapest option — assess overall value, claims reputation, and specialist knowledge.</p>

<h2>Red Flags to Avoid</h2>
<p>Be wary of policies with very broad exclusions around motorhome-specific features, insurers unfamiliar with motorhome-specific risks, or policies that don't allow freedom camping if you plan to do it. Always confirm coverage is appropriate for your specific motorhome type, usage patterns, and plans.</p>

<h2>Getting Started</h2>
<p>Take time to understand your motorhome's value, usage patterns, and specific coverage needs. Gather documentation including purchase price, recent valuations, any modifications made, and evidence of security measures. Use our service to get quotes from multiple providers in a single step. Compare quotes thoroughly, asking questions about anything unclear. Choose a provider that matches your needs, budget, and offers the specialist knowledge appropriate for your motorhome. Review your policy annually to ensure it remains appropriate as your motorhome ages and your usage patterns change.</p>`,
  },
  {
    slug: 'agreed-value-vs-market-value-motorhome',
    title: 'Agreed Value vs Market Value: Which Is Right for Your Motorhome?',
    excerpt: 'Understanding the key differences between agreed and market value motorhome insurance policies and how to choose the right one for your needs.',
    date: '2026-04-05',
    author: 'MotorHomeInsurance.co.nz',
    image: '/hero-motorhome-2.jpg',
    readTime: '7 min read',
    category: 'Coverage Explained',
    content: `<h2>The Core Difference</h2>
<p>The main difference between agreed and market value insurance comes down to certainty. With agreed value, you know exactly what you'll receive if your motorhome is written off — no negotiations, no surprises. With market value, the payout is determined at the time of loss based on current market conditions, which could be significantly different from your expectations.</p>

<h2>What Is Agreed Value?</h2>
<p>Agreed value insurance means you and your insurer formally agree on your motorhome's value when you take out the policy. This value is documented in your policy wording. If your motorhome is written off, stolen, or damaged beyond repair, you receive the full agreed amount. There's no depreciation argument, no "what it's worth now" negotiation. You get exactly what you agreed to at policy inception.</p>
<p>This certainty is particularly valuable for motorhomes where market value is difficult to assess — imports, custom builds, specialty motorhomes. You avoid the risk of an insurer's valuation being significantly lower than you expected.</p>

<h2>What Is Market Value?</h2>
<p>Market value insurance means the insurer pays what your motorhome is worth at the time of loss based on comparable sales and market assessment. When you make a claim, they assess the current market value at that moment and pay that amount. This means if your motorhome has depreciated since you bought it, you'll receive less than your purchase price.</p>
<p>For example, a motorhome purchased for $80,000 two years ago might be worth only $60,000 in today's market. With market value insurance, you'd receive $60,000, not your original investment.</p>

<h2>Advantages of Agreed Value</h2>
<p>You know exactly what you'll receive in a total loss claim — there's no uncertainty or negotiation. You avoid depreciation arguments with the insurer completely. Motorhome values can be difficult to assess accurately, especially for imports or custom builds, and agreed value removes this uncertainty entirely. You can ensure the payout covers replacing your motorhome appropriately. This is particularly valuable for newer motorhomes where depreciation is rapid.</p>

<h2>Advantages of Market Value</h2>
<p>Premiums are typically 10-20% lower than agreed value because the insurer's risk is reduced. It reflects the motorhome's actual current value, which may be fair if you're comfortable accepting depreciation. For older motorhomes (10+ years) where values are well-established and stable, market value can offer good value.</p>

<h2>Financial Impact Example</h2>
<p>Imagine a Class B motorhome purchased for $70,000. After 3 years with some wear and usage:</p>
<ul><li><strong>Agreed Value (locked at $70,000):</strong> Total loss = $70,000 payout. Premium ~$800/year.</li>
<li><strong>Market Value (assessed at $52,000):</strong> Total loss = $52,000 payout. Premium ~$650/year.</li></ul>
<p>The $18,000 difference in payout is substantial. The $150/year premium saving over 3 years saves only $450, making agreed value the better financial choice in this scenario.</p>

<h2>Which Should You Choose?</h2>
<p>Choose agreed value if your motorhome is under 7 years old, worth $50,000+, is difficult to value (import, custom), or if peace of mind about replacement cost is important. Choose market value if you're prioritizing low premiums, own an older motorhome with well-established values, or accept depreciation risk.</p>

<h2>Making Your Decision</h2>
<p>Get professional valuations for your motorhome from specialists familiar with your specific model. Research comparable prices in the current NZ market to understand realistic valuations. Consider your replacement plans if your motorhome was written off — what would you actually need to spend to replace it appropriately? Compare premium differences between agreed and market value options. Make your decision based on balancing peace of mind with cost, not just picking the cheapest option.</p>`,
  },
  {
    slug: 'what-does-motorhome-insurance-cover',
    title: 'What Does Motorhome Insurance Actually Cover?',
    excerpt: 'A detailed breakdown of what standard motorhome insurance covers and what gaps you might need to fill with additional cover.',
    date: '2026-04-02',
    author: 'MotorHomeInsurance.co.nz',
    image: '/hero-motorhome-3.jpg',
    readTime: '8 min read',
    category: 'Coverage Explained',
    content: `<h2>Standard Comprehensive Motorhome Cover</h2>
<p>Comprehensive motorhome insurance typically covers accidental damage including collision and impact damage, fire including structural and contents damage, theft of the motorhome or parts, malicious damage and vandalism, weather and natural disaster damage including storms and floods, third-party liability up to $20 million.</p>

<h2>What's Usually NOT Covered</h2>
<p>Standard policies typically exclude wear and tear, mechanical and electrical breakdown (unless you add a specific add-on), damage due to poor maintenance, driving while unlicensed or uninsured, intentional damage, business use if you're using the motorhome commercially, ordinary contents like personal items and camping gear (unless you add contents cover).</p>

<h2>Third-Party Liability Cover</h2>
<p>This covers damage or injury your motorhome causes to other people, vehicles, or property. If you hit another car, damage a carpark, or cause injury, third-party liability pays the costs up to your policy limit. It's essential protection and covers legal liability.</p>

<h2>Accidental Damage</h2>
<p>Accidental damage covers unintentional damage to your motorhome from collisions, hitting objects, or accidents. It typically covers the cost of repairs or the agreed value if the motorhome is written off. Most policies include this in comprehensive cover.</p>

<h2>Fire and Theft</h2>
<p>Comprehensive cover includes protection against fire, including structural damage and contents destroyed by fire. Theft cover protects you if your motorhome is stolen or parts are stolen. Both are typically included in comprehensive policies.</p>

<h2>Contents Cover — The Gap You Need to Fill</h2>
<p>Standard motorhome insurance covers the motorhome itself but typically not the contents inside. If you have a fridge, cooker, bedding, camping gear, and personal items, these are usually uninsured under standard policies. Contents cover, usually available as an optional add-on, protects these items.</p>

<h2>Roadside Assistance and Towing</h2>
<p>Some policies include roadside assistance and towing if your motorhome breaks down or is in an accident. Check whether this is included or available as an add-on. This can be invaluable if you break down far from home.</p>

<h2>Important Policy Exclusions</h2>
<p>Your policy likely excludes damage if the motorhome wasn't properly maintained, driving by an unlicensed person, damage from normal wear and tear, modifications that weren't disclosed to the insurer. Always review your policy exclusions carefully.</p>`,
  },
  {
    slug: 'reduce-motorhome-insurance-excess',
    title: 'How to Reduce Your Motorhome Insurance Excess',
    excerpt: 'Practical strategies to lower your motorhome insurance excess and improve your claim outcomes.',
    date: '2026-03-30',
    author: 'MotorHomeInsurance.co.nz',
    image: '/hero-motorhome-4.jpg',
    readTime: '6 min read',
    category: 'Money-Saving Tips',
    content: `<h2>Understanding Your Excess</h2>
<p>Your excess is the amount you pay towards any claim. If you have a $500 excess and make a claim costing $3,000, you pay $500 and the insurer pays $2,500. A higher excess means lower premiums but higher out-of-pocket costs if you claim. Finding the right balance is key.</p>

<h2>Strategy 1: Choose a Higher Voluntary Excess</h2>
<p>Increasing your voluntary excess to $750 or $1,000 can lower your annual premium significantly — sometimes by 10-20%. This only makes sense if you're confident you won't need to claim. If you're a careful driver with a good claims history, this could save money overall.</p>

<h2>Strategy 2: Install Security Systems</h2>
<p>GPS tracking systems, alarm systems, and immobilizers reduce the risk of theft. Many insurers offer premium discounts of 5-15% for proven security measures. A $150-300 GPS tracker that cuts your premium by $50-100 annually pays for itself within a few years.</p>

<h2>Strategy 3: Maintain an Excellent Driving Record</h2>
<p>No claims over 3-5 years typically qualifies you for a no-claims discount. This is one of the biggest premium reducers available. Avoid accidents and claims to keep premiums low and potentially reduce your excess.</p>

<h2>Strategy 4: Multi-Policy Bundling</h2>
<p>Bundling your motorhome insurance with home or car insurance often saves 5-15% on premiums. These savings accumulate across all your policies.</p>

<h2>Strategy 5: Improve Storage Security</h2>
<p>Storing your motorhome in a locked garage or secure compound reduces theft risk. Some insurers offer discounts for secure storage, potentially reducing your excess or premiums.</p>

<h2>Strategy 6: Regular Maintenance</h2>
<p>Keeping your motorhome well-maintained demonstrates care. Some insurers reward this with better terms or lower excess requirements.</p>

<h2>The Balance</h2>
<p>Choose an excess level you can comfortably afford if you need to claim. Don't choose a high excess just to save premium if it means you couldn't afford to pay it. The goal is protecting yourself financially while managing costs.</p>`,
  },
  {
    slug: 'best-motorhome-insurance-providers-nz',
    title: 'Best Motorhome Insurance Providers in NZ 2025',
    excerpt: 'Comparing New Zealand\'s top motorhome insurance providers — their strengths, coverage options, and which suits different motorhome owners.',
    date: '2026-03-28',
    author: 'MotorHomeInsurance.co.nz',
    image: '/hero-motorhome-5.jpg',
    readTime: '10 min read',
    category: 'Provider Reviews',
    content: `<h2>Leading NZ Motorhome Insurance Providers</h2>
<p>New Zealand has several excellent motorhome insurance providers, each with different strengths and specialties. The best choice depends on your motorhome type, usage, and priorities.</p>

<h2>AA Insurance</h2>
<p>AA Insurance is one of New Zealand's largest and most established providers. They offer comprehensive motorhome cover with flexible options, competitive premiums, a wide network of repair providers, and responsive claims handling. AA is best for those seeking a reliable, well-known provider with good all-around service.</p>

<h2>Star Insure</h2>
<p>Star Insure specializes in motorhome and caravan insurance. They understand the unique risks of motorhome ownership and offer tailored policies, agreed value options, contents cover add-ons, and 24/7 claims support. Star Insure is best for motorhome enthusiasts wanting specialist expertise.</p>

<h2>Tower Insurance</h2>
<p>Tower offers competitive motorhome coverage with easy online management, flexible cover options, straightforward pricing, and good online tools. Tower is best for budget-conscious motorhome owners who prioritize simplicity and online convenience.</p>

<h2>AMI Insurance</h2>
<p>AMI provides comprehensive motorhome cover with multi-policy discounts, good customer service, agreed value options, and quick claim settlement. AMI is best for customers who bundle insurance policies and want good value.</p>

<h2>State Insurance</h2>
<p>State offers motorhome insurance with 24/7 claims support, a wide repair network, flexible payment plans, and reliable settlement. State is best for those wanting round-the-clock support and dependable service.</p>

<h2>Covi Insurance</h2>
<p>Covi is New Zealand's leading specialist motorhome insurer. They provide dedicated motorhome policies, agreed value coverage, contents insurance, legal liability cover, and excellent RV-specific knowledge. Covi is best for those wanting the most comprehensive motorhome-focused protection.</p>

<h2>Comparing Providers</h2>
<p>When comparing motorhome insurance providers, get quotes from at least three. Compare annual premiums, excess flexibility, coverage options, claims process, customer reviews, and specialist knowledge. The cheapest isn't always best — consider overall value and service quality.</p>

<h2>Getting Multiple Quotes</h2>
<p>Most insurers can provide quotes quickly online. Prepare details about your motorhome including make, model, year, value, usage, and storage. Be consistent across quotes for accurate comparisons.</p>`,
  },
  {
    slug: 'self-contained-motorhome-insurance',
    title: 'Is Your Motorhome Self-Contained? What It Means for Insurance',
    excerpt: 'Understanding self-contained motorhomes and how this affects your insurance coverage and premiums.',
    date: '2026-03-26',
    author: 'MotorHomeInsurance.co.nz',
    image: '/hero-motorhome-6.jpg',
    readTime: '6 min read',
    category: 'Insurance Guides',
    content: `<h2>What Does Self-Contained Mean?</h2>
<p>A self-contained motorhome has integrated facilities for independent living. This means it has a freshwater tank (typically 50-200 litres), a wastewater/grey water tank, an on-board toilet or composting system, cooking facilities, and either solar panels or battery/generator power systems. Essentially, it can operate without connection to external utilities.</p>

<h2>Non-Self-Contained vs Self-Contained</h2>
<p>Non-self-contained motorhomes are smaller units that rely on campground facilities for water, waste, and power. Self-contained motorhomes are independent — they can camp anywhere because they're equipped for off-grid living. This distinction matters significantly for insurance.</p>

<h2>Why Insurance Cares About Self-Contained Status</h2>
<p>Self-contained motorhomes are more valuable (typically $50,000+) compared to non-self-contained models. They're often used for longer trips and more remote camping. They have more complex systems and appliances that can be damaged. They're used more frequently in challenging conditions. Insurers adjust premiums based on these factors.</p>

<h2>Self-Contained Motorhomes and Premiums</h2>
<p>Self-contained status typically means higher premiums because the motorhome is worth more and has more systems to protect. However, the extra features also attract owners willing to spend on proper insurance, reducing overall claims risk.</p>

<h2>Coverage Considerations for Self-Contained Motorhomes</h2>
<p>Ensure your policy covers all integrated systems including water and waste systems, built-in appliances, electrical systems, solar panels, and gas systems. Check whether contents cover includes built-in furnishings and fixtures. Verify that accidental damage coverage includes damage to these systems.</p>

<h2>Self-Contained Motorhome Insurance Tips</h2>
<p>Get accurate valuations including all built-in features. Ensure systems are properly maintained — insurers may deny claims for damage from poor maintenance. Consider agreed value to eliminate disputes about value. Add contents cover if you carry valuable camping and personal items. Document all systems and modifications for your insurer.</p>

<h2>Getting the Right Quote</h2>
<p>Tell your insurer whether your motorhome is self-contained — this information is essential for accurate quoting. Provide details about integrated systems and their value. Ask whether premium quotes account for self-contained features properly.</p>`,
  },
  {
    slug: 'imported-motorhome-insurance-nz',
    title: 'Insurance for Imported Motorhomes in NZ: What You Need to Know',
    excerpt: 'Guidance on insuring imported motorhomes in New Zealand, including unique considerations and coverage needs.',
    date: '2026-03-24',
    author: 'MotorHomeInsurance.co.nz',
    image: '/hero-motorhome-7.jpg',
    readTime: '7 min read',
    category: 'Insurance Guides',
    content: `<h2>Challenges of Insuring Imported Motorhomes</h2>
<p>Imported motorhomes present unique insurance challenges. They may have unusual specifications that NZ insurers aren't familiar with. Parts may be difficult to source in New Zealand. Professional mechanics familiar with the specific model may be limited. Insurance companies may be uncertain about replacement values.</p>

<h2>Finding Insurance for Imported Motorhomes</h2>
<p>Not all standard motorhome insurers readily cover imported models. Seek insurers with experience in imported vehicles. Specialist motorhome insurers are more likely to have experience with overseas models. Some providers have international partners for support.</p>

<h2>Valuation for Imported Motorhomes</h2>
<p>Get a professional pre-purchase inspection and valuation from a mechanic familiar with the model. Document the import process including customs valuations and import documentation. Agree on value with your insurer upfront — this is especially important for imported models where value can be uncertain. Keep receipts for any New Zealand modifications or additions.</p>

<h2>Documentation You'll Need</h2>
<p>Provide import documentation including customs paperwork and import valuations. Supply the vehicle's service history. Share any pre-purchase inspection reports. Have professional photographs of the motorhome and its condition.</p>

<h2>Specification and Systems Differences</h2>
<p>Imported motorhomes may have different electrical systems (240V vs European 230V specs). Water systems may be designed for different climates. Appliances may require specific parts or expertise. Tell your insurer about any systems differences. Ensure your insurer understands what repairs might involve.</p>

<h2>Cover Considerations</h2>
<p>Choose agreed value to lock in the valuation you've established. Consider contents cover for your camping gear and personal items. Ensure mechanical breakdown cover is available if you need it. Check whether roadside assistance covers your specific motorhome type.</p>

<h2>Getting Right Cover</h2>
<p>Be upfront with your insurer about your motorhome being imported. Provide complete documentation about the vehicle. Get accurate valuations from professionals. Ensure your insurer confirms they understand the specific model. Ask about any exclusions or limitations related to imported status.</p>`,
  },
  {
    slug: 'lower-motorhome-insurance-premiums',
    title: '8 Proven Tips to Lower Your Motorhome Insurance Premiums',
    excerpt: 'Practical, proven strategies to reduce your motorhome insurance costs without compromising on coverage.',
    date: '2026-03-22',
    author: 'MotorHomeInsurance.co.nz',
    image: '/hero-motorhome-1.jpg',
    readTime: '7 min read',
    category: 'Money-Saving Tips',
    content: `<h2>1. Increase Your Voluntary Excess</h2>
<p>Raising your voluntary excess from $500 to $750 or $1,000 can reduce premiums by 10-20%. Only do this if you have savings to cover the excess if you need to claim. This works best if you're confident you won't claim.</p>

<h2>2. Install Security Systems</h2>
<p>GPS trackers, alarm systems, and immobilizers can earn you discounts of 5-15%. A $200 tracking device might reduce your annual premium by $50-100, paying for itself in 2-4 years while actually protecting your asset.</p>

<h2>3. Bundle Insurance Policies</h2>
<p>Combining motorhome, car, and home insurance with one provider often saves 10-15% on total premiums. Ask about multi-policy discounts before choosing an insurer.</p>

<h2>4. Maintain a Clean Driving Record</h2>
<p>No claims over 3-5 years qualifies you for no-claims discounts, often 20%+ reduction. Every claim increases premiums, so driving carefully pays off in lower premiums.</p>

<h2>5. Store Your Motorhome Securely</h2>
<p>Parking in a locked garage or secure compound reduces theft risk. Many insurers offer discounts for secure storage, potentially saving 5-10% on premiums.</p>

<h2>6. Reduce Annual Usage</h2>
<p>If you use your motorhome less frequently, let your insurer know. Some providers offer discounts for seasonal use or limited annual mileage. Usage-based insurance is becoming more common.</p>

<h2>7. Maintain Your Motorhome Well</h2>
<p>Regular servicing and maintenance may qualify you for better premium rates with some insurers. They recognize that well-maintained vehicles have fewer claims. Keep service records to prove maintenance.</p>

<h2>8. Shop Around Regularly</h2>
<p>Don't assume your current insurer offers the best rate. Get quotes from 3-5 providers annually. Premium rates change, and new competitors offer better deals. Loyalty isn't rewarded in insurance — shopping around always pays.</p>`,
  },
  {
    slug: 'rented-motorhome-insurance-nz',
    title: 'Do You Need Insurance for a Rented Motorhome in NZ?',
    excerpt: 'Understanding rental motorhome insurance, what the rental company covers, and when you need additional protection.',
    date: '2026-03-20',
    author: 'MotorHomeInsurance.co.nz',
    image: '/hero-motorhome-2.jpg',
    readTime: '6 min read',
    category: 'Rental Coverage',
    content: `<h2>What Comes with Rental Motorhome Insurance</h2>
<p>Most rental motorhome companies include basic liability insurance with your rental. This typically covers damage you cause to other vehicles or property. However, this coverage often has significant limitations and may not cover everything you'd expect.</p>

<h2>What Rental Insurance Doesn't Cover</h2>
<p>The rental company's insurance typically doesn't cover accidental damage to the motorhome itself — you pay for this. It doesn't cover the motorhome's contents or your personal items. It may not cover windscreen and glass damage. It may exclude damage from misuse or poor maintenance. Excess/deductibles are often high — $2,500 or more.</p>

<h2>The High Excess Problem</h2>
<p>Rental motorhomes typically come with a $2,500-5,000 excess. This means if you damage the motorhome, you pay up to that amount. If you damage the motorhome and your expenses exceed $3,000, you pay the first $3,000 out of pocket.</p>

<h2>Rental Excess Reduction Insurance</h2>
<p>Rental excess reduction (or rental decline insurance) policies reduce or eliminate your liability for damage to a rental motorhome. Costs are typically $10-20 per day. If you normally pay a $3,000 excess, a $15/day policy costs about $105 for a week but protects you completely.</p>

<h2>When to Get Rental Motorhome Insurance</h2>
<p>Get rental motorhome insurance if you're renting a motorhome and want protection from the high excess. It's essential if you're nervous about potential damage or sharing rental driving duties with less experienced drivers. It's worth considering even for short rentals — a week's rental excess reduction might cost $100 but saves your wallet from potential $3,000+ claims.</p>

<h2>Getting Rental Protection</h2>
<p>Ask your motorhome rental company what insurance is included and what the excess is. Look into standalone rental excess reduction policies from insurance providers. Compare daily rental excess reduction costs versus the excess you'd pay if you damaged the motorhome. Make sure you understand exactly what the policy covers.</p>

<h2>Peace of Mind During Your Holiday</h2>
<p>Rental excess reduction insurance lets you enjoy your New Zealand motorhome adventure without worrying about an accidental bump costing you thousands. For most travellers, the peace of mind is worth the modest daily cost.</p>`,
  },
  {
    slug: 'covi-vs-star-insurance-nz',
    title: 'Covi vs Star Insurance: Which is Best for NZ Motorhome Owners?',
    excerpt: 'An in-depth comparison of New Zealand\'s two leading specialist motorhome insurers — Covi Insurance and Star Insure\'s CamperCare. We compare coverage, price, and features to help you choose.',
    date: '2026-05-15',
    author: 'MotorHomeInsurance.co.nz Editorial Team',
    image: '/hero-motorhome-3.jpg',
    readTime: '8 min read',
    category: 'Provider Reviews',
    content: `<h2>Two Specialist Insurers — What's the Difference?</h2>
<p>If you're serious about motorhome ownership, you've likely narrowed your insurance shortlist to two specialist providers: Covi Insurance and Star Insure (CamperCare). Both are dedicated motorhome and caravan insurers with deep RV expertise. Both offer agreed value policies and auto-included features that mainstream insurers typically charge extra for. But there are important differences that may swing your decision.</p>

<h2>Covi Insurance — The NZMCA Choice</h2>
<p>Covi Insurance is the endorsed partner of the New Zealand Motor Caravan Association (NZMCA) and is trusted by over 17,000 members. Underwritten by NZI (part of IAG, New Zealand's largest insurer), Covi brings genuine financial strength behind every policy. Their standout features include agreed value cover for the first five years of your policy, an industry-leading $10,000 contents auto-included (no add-on required), and no glass excess for motorhomes insured under $400,000. Wings Roadside Assistance is available for just $57 per year, though callouts carry a $200 fee.</p>
<p>Covi's NZMCA partnership means their policies are designed specifically around how motorhome enthusiasts actually use their vehicles — from freedom camping to long South Island touring trips. Their claims team understands the difference between a habitation water tank and a radiator, which matters when you're making a claim far from home.</p>

<h2>Star Insure CamperCare — The "Inside-Out" Specialist</h2>
<p>Star Insure's CamperCare product is built around an "inside-out" philosophy — meaning the coverage extends from your habitation fittings and appliances right through to the vehicle itself. Star auto-includes $3,000 contents cover and glass cover with no glass excess as standard. NZRA (New Zealand Roadside Assistance) is included at no extra cost. Like Covi, Star offers agreed value policies, ensuring you know exactly what you'll receive at claim time.</p>
<p>Star Insure is known for competitive premiums, particularly for newer motorhomes. Their policies are popular with motorhome owners who want specialist cover without the premium price of the NZMCA-endorsed provider. Star is well-regarded in the campervan conversion community, where the inside-out philosophy resonates with owners who've invested heavily in habitation fit-out.</p>

<h2>Head-to-Head: Key Feature Comparison</h2>
<p><strong>Contents Cover:</strong> Covi wins here — $10,000 auto-included versus Star's $3,000. For motorhome owners with quality appliances, bedding, entertainment systems, and camping gear, this difference is significant.</p>
<p><strong>Glass Cover:</strong> Both include glass with no excess. Draw.</p>
<p><strong>Roadside Assistance:</strong> Both include it — Covi via Wings ($57/yr, $200 callout), Star via NZRA (included). If you don't want any callout fee, Star's NZRA inclusion may appeal.</p>
<p><strong>Agreed Value:</strong> Covi offers agreed value for the first five years. Star offers agreed value on their policies. Both good — Covi's five-year window provides more certainty.</p>
<p><strong>Price:</strong> Premiums vary by motorhome type, value, and location. Typical mid-range motorhomes ($80,000-$120,000 value) see Covi premiums slightly higher, reflecting the superior contents and longer agreed value window.</p>

<h2>Which Should You Choose?</h2>
<p>Choose Covi if you're an NZMCA member, carry high-value contents, want the longest agreed value period, or have a premium motorhome over $80,000. Choose Star if you want competitive specialist cover with included roadside at a potentially lower premium, especially for campervans and mid-range motorhomes. In all cases, get quotes from both and compare the specific numbers for your motorhome — prices vary significantly by vehicle type and value.</p>

<h2>Don't Overlook Mainstream Providers</h2>
<p>While both Covi and Star are excellent specialist choices, mainstream providers like AA Insurance, AMI, and Tower can still offer competitive pricing depending on your motorhome's profile. Our comparison service gets you quotes from all major providers so you can make a truly informed decision.</p>`,
  },
  {
    slug: 'motorhome-excess-guide-nz',
    title: 'Motorhome Insurance Excess Explained: Choosing the Right Amount',
    excerpt: 'Understanding how motorhome insurance excess works in New Zealand, how to choose the right level, and how voluntary excess increases can reduce your annual premium.',
    date: '2026-05-15',
    author: 'MotorHomeInsurance.co.nz Editorial Team',
    image: '/hero-motorhome-4.jpg',
    readTime: '8 min read',
    category: 'Coverage Explained',
    content: `<h2>What Is an Insurance Excess?</h2>
<p>Your insurance excess is the portion of any claim you pay yourself before your insurer covers the rest. If you have a $500 excess and make a claim for $4,000 in damage, you pay $500 and your insurer pays $3,500. The excess is your "skin in the game" — a mechanism that reduces small, frivolous claims while keeping premiums manageable for everyone.</p>

<h2>Standard Motorhome Excess in New Zealand</h2>
<p>The standard excess on NZ motorhome insurance policies is typically $500. Some insurers set it at $750 or $1,000 as their base level, particularly for older motorhomes or those with prior claims history. You'll generally see two components to your excess: a compulsory excess set by the insurer (non-negotiable) and a voluntary excess you can choose to increase to earn a premium reduction.</p>

<h2>Voluntary Excess — The Premium Trade-Off</h2>
<p>Increasing your voluntary excess is one of the most reliable ways to reduce your annual premium. As a general guide, increasing your excess from $500 to $750 typically reduces premiums by 10-15%. Moving from $500 to $1,000 can reduce premiums by 15-20%. Jumping to a $1,500 voluntary excess may save 20%+ but exposes you to significant out-of-pocket costs if you claim.</p>
<p>Consider this example: A motorhome with $900/year premium at $500 excess might drop to $765/year at $1,000 excess — a $135 annual saving. Over five claim-free years that's $675 saved. But a single claim in that period means you'd pay $1,000 instead of $500 — effectively wiping out five years of savings with one incident. The maths only work in your favour if you genuinely go many years without claiming.</p>

<h2>Age-Related Excess Loading</h2>
<p>If the primary driver of your motorhome is under 25 or over 75, many insurers apply an age-related excess loading — typically an additional $250-$500 on top of your standard excess. This reflects statistical claims data. Older drivers (65+) may face different loadings depending on the insurer, so it pays to ask specifically about any age-related excess when getting quotes.</p>

<h2>Specific Excess Types to Watch For</h2>
<p>Some motorhome policies have specific excess amounts for different claim types. A glass excess applies to windscreen and window damage — many specialist insurers (Covi, Star Insure) waive this. A theft excess may differ from your standard accident excess. A named driver excess may apply if someone listed on your policy (but not the primary driver) causes an accident.</p>

<h2>How to Choose the Right Excess Level</h2>
<p>Start by asking: could I comfortably pay this amount from savings today if I needed to? If a $1,000 excess would cause financial hardship, stick with $500. If you have a solid emergency fund and are an experienced, careful driver with a clean record, a higher voluntary excess makes financial sense. If you're parking your motorhome in a high-theft urban area or taking it on challenging mountain roads, a lower excess provides more comfort. The right excess is one you'd genuinely be able to pay without stress.</p>

<h2>Excess and No-Claims Bonus Interaction</h2>
<p>Remember that making a claim — even a small one — typically affects your no-claims bonus (NCB). If your NCB saves you 15% annually and a claim removes it, you might lose more in future premium increases than the claim itself was worth. For small claims (say, a $600 repair with a $500 excess), you'd pay $100 from the claim and then face higher premiums for 3+ years. In these cases, paying out of pocket and preserving your NCB is usually the better financial decision.</p>`,
  },
  {
    slug: 'motorhome-contents-insurance-nz',
    title: 'What Does Motorhome Contents Insurance Cover in New Zealand?',
    excerpt: 'A complete guide to motorhome contents insurance in NZ — what\'s covered, what\'s excluded, how much you need, and which providers auto-include it.',
    date: '2026-05-15',
    author: 'MotorHomeInsurance.co.nz Editorial Team',
    image: '/hero-motorhome-5.jpg',
    readTime: '8 min read',
    category: 'Coverage Explained',
    content: `<h2>Why Motorhome Contents Insurance Matters</h2>
<p>Your motorhome is more than a vehicle — it's a travelling home packed with valuable equipment. A well-equipped motorhome might contain a quality fridge-freezer ($800-$2,000), a two-burner gas hob with oven ($400-$1,500), a flat-screen television ($500-$1,200), quality bedding and pillows ($300-$800), camping chairs and table ($200-$600), a generator ($400-$2,000), solar charge controllers and batteries ($500-$3,000+), and personal electronics including laptops and cameras. The total value of motorhome contents regularly exceeds $10,000-$20,000. Without contents insurance, all of this is unprotected.</p>

<h2>What Standard Motorhome Insurance Covers (And Doesn't)</h2>
<p>A standard motorhome insurance policy covers the motorhome itself — the vehicle, its permanently fitted fixtures, and the structure. It does not automatically cover portable or semi-portable contents. This means your camping gear, personal electronics, clothing, food, tools, and loose appliances are typically excluded from a basic policy. This is an important gap that many motorhome owners don't discover until they make a claim.</p>

<h2>What Contents Insurance Covers</h2>
<p>Motorhome contents insurance typically covers portable personal property kept in your motorhome including camping and outdoor equipment, kitchen appliances and cookware, bedding and linen, clothing and personal items, electronics including laptops, cameras, and tablets, tools and equipment, and food and drink (some policies). Coverage applies against theft (usually requiring forced entry), fire, accidental damage (check your policy wording), and weather damage.</p>

<h2>What's Usually Excluded</h2>
<p>Contents policies typically exclude cash and bank cards, jewellery over set limits (often $500-$1,000 per item without scheduling), items left unattended in an unlocked motorhome, theft without evidence of forced entry, damage from vermin or pests, gradual deterioration or wear and tear, and business equipment used for commercial purposes.</p>

<h2>Covi's $10,000 Auto-Included Contents</h2>
<p>Covi Insurance stands out for auto-including $10,000 contents cover with every motorhome policy — no additional premium required. This is the industry's most generous auto-included contents provision and covers most motorhome owners' needs without any extra cost. Star Insure's CamperCare auto-includes $3,000 contents cover, which suits lighter-equipped campervans. Mainstream insurers (AA, Tower, AMI) typically offer contents as an optional add-on at additional cost.</p>

<h2>How Much Contents Cover Do You Need?</h2>
<p>Walk through your motorhome and note the replacement cost of everything inside. Be thorough — camping chairs, bedding sets, and kitchen items add up quickly. Most well-equipped motorhomes carry $8,000-$15,000 in contents. If you carry high-value photography equipment, expensive bikes on a rack, or specialist outdoor gear, you may need $20,000 or more in contents cover. Always insure for replacement value, not what you paid originally.</p>

<h2>Getting the Right Contents Cover</h2>
<p>When comparing policies, ask specifically whether contents is included or an add-on, what the contents limit is, whether high-value items need to be scheduled separately, and what evidence is required for a theft claim. Our comparison service helps you identify which providers offer the best contents cover for your specific situation.</p>`,
  },
  {
    slug: 'freedom-camping-rules-nz-2026',
    title: 'Freedom Camping Rules NZ 2026: What Every Motorhome Owner Needs to Know',
    excerpt: 'A complete 2026 update on New Zealand\'s freedom camping rules — where you can camp, self-containment requirements, council rules, fines for violations, and how your insurance is affected.',
    date: '2026-05-15',
    author: 'MotorHomeInsurance.co.nz Editorial Team',
    image: '/hero-motorhome-6.jpg',
    readTime: '8 min read',
    category: 'Insurance Guides',
    content: `<h2>The Freedom Camping Act 2011 — What It Actually Says</h2>
<p>New Zealand's Freedom Camping Act 2011 created a framework allowing people to camp in public places, including DOC land and council reserves, under specific conditions. The Act distinguishes between self-contained and non-self-contained vehicles, and gives local councils the power to designate, restrict, or prohibit freedom camping in their areas. It's this council overlay that makes freedom camping rules complex — national law sets the framework, but local rules vary dramatically by region.</p>

<h2>Self-Containment — The Gateway to Freedom Camping</h2>
<p>To legally freedom camp at designated self-contained-only sites, your motorhome must hold a current Warrant of Self-Containment (WSC) certificate. This certificate is issued by an approved certifier and verifies your motorhome meets the NZS 5465:2001 standard for self-containment. Requirements include a freshwater tank (minimum 4 litres per person per day for 3 days), a wastewater (grey water) tank, a self-contained toilet system (typically cassette or composting), and appropriate ventilation. The certificate must be displayed on your motorhome and renewed when conditions change or on expiry.</p>

<h2>Where Can Self-Contained Motorhomes Camp?</h2>
<p>Self-contained motorhomes may freedom camp at: DOC campsites and backcountry areas (check specific site rules), council-designated freedom camping areas (check the Campermate app or council websites for current designations), and some Department of Conservation conservation areas. Councils can and do change their designations seasonally — a site that was open last summer may be closed or restricted this year. Always check current council rules before camping at any specific location.</p>

<h2>The Camping Check App and Campermate</h2>
<p>The most reliable way to find current, council-approved freedom camping sites is via the Camping Check website (campingcheck.co.nz) or the Campermate app. Both are updated regularly with current site status, restrictions, and any seasonal closures. Do not rely on outdated maps or word-of-mouth — freedom camping rules change regularly, and fines for illegal camping apply even if you didn't know the rules had changed.</p>

<h2>Fines for Illegal Freedom Camping</h2>
<p>Fines for freedom camping in prohibited areas or without self-containment certification start at $200 per person and can reach $10,000 for operators or repeated offenders under the Freedom Camping Act. Many councils actively patrol freedom camping areas, particularly in peak summer season (December-March) around popular tourist areas like Queenstown, Kaikōura, and the Coromandel. Your motorhome insurance does not cover fines for illegal camping.</p>

<h2>How Freedom Camping Affects Your Insurance</h2>
<p>Standard comprehensive motorhome insurance covers you while freedom camping, provided: your motorhome holds a valid WSC certificate, you're camping at a legally designated freedom camping site, and your policy does not specifically exclude freedom camping. Most policies automatically cover freedom camping. However, theft or damage occurring while illegally camped in a prohibited area may not be covered — insurers can decline claims where illegal activity contributed to the loss. Always confirm your insurer explicitly covers freedom camping before relying on it.</p>

<h2>2026 Updates to Watch</h2>
<p>Several councils are reviewing their freedom camping bylaws in 2026, with some tightening restrictions in high-pressure tourist areas and others expanding designated areas following infrastructure investment. The national conversation about freedom camping, tourism infrastructure, and sustainability continues to evolve. Check council websites and the Camping Check app for the most current rules in any area you plan to visit.</p>`,
  },
  {
    slug: 'motorhome-storage-insurance-nz',
    title: 'Motorhome Storage Insurance: Protecting Your RV When It\'s Not on the Road',
    excerpt: 'What happens to your motorhome insurance when your vehicle is in storage? Learn about laid-up cover, storage risks, and how to ensure you\'re protected even when you\'re not travelling.',
    date: '2026-05-15',
    author: 'MotorHomeInsurance.co.nz Editorial Team',
    image: '/hero-motorhome-7.jpg',
    readTime: '8 min read',
    category: 'Insurance Guides',
    content: `<h2>The Storage Gap — Are You Actually Covered?</h2>
<p>Many motorhome owners use their vehicles seasonally — perhaps October to April for the warmer months, then park them up over winter. During storage periods, it's tempting to reduce or suspend insurance to save money. But this creates a dangerous gap: motorhomes in storage face real risks including theft, fire, weather damage, vandalism, water ingress, and pest damage. A single break-in during storage could cost $5,000-$15,000 in damage and stolen contents. Cancelling your insurance during storage is rarely the right choice.</p>

<h2>What Risks Does Stored Motorhome Face?</h2>
<p>A motorhome in storage — whether at your home, a dedicated storage facility, or a motorhome park — faces more risks than you might expect. Theft is a serious concern, particularly for motorhomes stored at home or in poorly secured facilities. Rodents and other pests can cause significant wiring and upholstery damage during extended storage. Water ingress from poorly sealed roof vents, damaged seals, or storm damage can cause mould and structural damage costing thousands to repair. Fire risk remains, particularly for motorhomes with LPG systems. Vandalism, storm damage, and hail are also real concerns.</p>

<h2>Laid-Up Insurance — What It Is and When to Use It</h2>
<p>Laid-up or storage insurance is a reduced premium option for motorhomes that will not be driven for an extended period (typically 3+ months). During laid-up cover, your policy continues to protect against theft, fire, weather, and vandalism — the risks a stored vehicle faces — but removes the driving/accident component. This typically reduces premiums by 30-50% during the storage period while maintaining essential protection. It's the smart compromise between full coverage and no coverage during storage.</p>

<h2>How to Arrange Storage Cover</h2>
<p>Contact your insurer before your storage period begins — don't just stop paying premiums and assume you're covered. Ask specifically about laid-up or storage-period cover options. Specialist motorhome insurers (Covi, Star Insure) typically have formal laid-up options. Mainstream insurers may be less familiar with this option, so be persistent. Ensure you get written confirmation of exactly what's covered during the storage period.</p>

<h2>Storage Facility vs Home Storage</h2>
<p>Dedicated motorhome storage facilities typically offer 24/7 security monitoring, gated access, and regular patrols — factors that reduce your theft risk and may lower insurance premiums. Home driveway storage offers convenience but lower security. Some insurers offer premium discounts of 5-15% for vehicles stored at approved secure facilities versus unsecured home storage. If you store at home, consider additional security such as a wheel clamp, GPS tracker, and motion-activated lighting.</p>

<h2>Preparing Your Motorhome for Storage</h2>
<p>Proper pre-storage preparation reduces risk and may affect insurance validity. Disconnect the leisure battery to prevent discharge. Empty and clean water tanks to prevent mould. Ventilate the habitation area adequately. Seal all roof vents and entry points against pests. Consider leaving mouse/rat traps inside. Remove valuable or sensitive electronics if possible. Document the motorhome's condition with photographs before storage — this is invaluable if you need to make a storage-period claim.</p>`,
  },
  {
    slug: 'full-time-motorhome-living-insurance',
    title: 'Full-Time Motorhome Living in NZ: How to Get the Right Insurance',
    excerpt: 'Living in your motorhome full-time changes your insurance needs significantly. This guide covers what standard policies won\'t cover, what full-time living insurance looks like, and how to stay protected while living on the road.',
    date: '2026-05-15',
    author: 'MotorHomeInsurance.co.nz Editorial Team',
    image: '/hero-motorhome-1.jpg',
    readTime: '8 min read',
    category: 'Insurance Guides',
    content: `<h2>The Growing Full-Timer Movement in New Zealand</h2>
<p>An increasing number of Kiwis are choosing to live in their motorhomes full-time — some driven by housing costs, others by a deliberate lifestyle choice to trade square footage for freedom. With New Zealand's growing motorhome fleet (38,000+ vehicles, growing 8% annually), full-time living is no longer unusual. But it creates a critical insurance challenge: most standard motorhome insurance policies are designed for recreational use, not full-time residence.</p>

<h2>Why Standard Motorhome Insurance Falls Short</h2>
<p>Standard motorhome insurance is underwritten on the assumption of recreational, part-time use. When you live in your motorhome full-time, your usage patterns, risk profile, and coverage needs change substantially. You're on the road more frequently, increasing accident risk. You carry more valuable personal possessions. Your vehicle is your home — any damage or theft is not just inconvenient but potentially leaves you without accommodation. Some policies explicitly exclude "residential use" — meaning if you're caught living in your motorhome full-time under a standard recreational policy, your claim could be declined.</p>

<h2>What Full-Time Insurance Needs to Cover</h2>
<p>Full-time motorhome insurance should include: comprehensive vehicle cover (accident, theft, fire, weather), high contents limits reflecting full-time living ($15,000-$30,000 is often appropriate), personal liability cover while at camp, emergency accommodation if your motorhome is uninhabitable after a claim, legal expenses coverage, and breakdown assistance prioritised as a genuine emergency (you have no other home to return to). Some specialist insurers also offer coverage for work-from-home equipment carried in the motorhome.</p>

<h2>Declaring Full-Time Use to Your Insurer</h2>
<p>If you live in your motorhome full-time, you must declare this to your insurer. Failing to disclose full-time use is a material misrepresentation that can invalidate your entire policy. Yes, declaring full-time use may increase your premium — but it's the only way to ensure you're actually covered when you need it most. Some insurers will not cover full-time living at all; others specialise in it. Our brokers can identify the right providers for your situation.</p>

<h2>Specialist Full-Time Living Policies</h2>
<p>Covi Insurance, as New Zealand's specialist RV insurer, has experience with full-time living scenarios. Star Insure's CamperCare policies can be adapted for full-time use. In some cases, a combination of motorhome insurance (for the vehicle) and a form of contents or home insurance (for personal possessions) provides the most comprehensive protection. Discuss your specific situation with a specialist broker rather than relying on online self-service for full-time living cover.</p>

<h2>Practical Considerations for Full-Time Kiwis</h2>
<p>If you're living in your motorhome full-time, ensure you have a permanent address registered elsewhere (required for driver licensing and voting), understand freedom camping rules thoroughly (you'll need a valid WSC certificate and must use designated sites), maintain a roadside assistance membership as a priority (a breakdown is a genuine emergency when it's your home), and keep your motorhome in excellent mechanical condition. Regular servicing is both an insurance requirement and practical necessity when your home depends on the vehicle being roadworthy.</p>`,
  },
  {
    slug: 'motorhome-roadside-assistance-nz',
    title: 'Motorhome Roadside Assistance in NZ: What\'s Covered and What to Expect',
    excerpt: 'Comparing roadside assistance options for NZ motorhome owners — from AA and NZRA membership to Covi Wings and Star\'s bundled cover. What happens when you break down far from home?',
    date: '2026-05-15',
    author: 'MotorHomeInsurance.co.nz Editorial Team',
    image: '/hero-motorhome-2.jpg',
    readTime: '8 min read',
    category: 'Insurance Guides',
    content: `<h2>Why Motorhome Roadside Assistance Is Different</h2>
<p>Motorhome breakdowns present challenges that standard roadside assistance isn't always equipped to handle. Your vehicle is larger, heavier, and more complex than a passenger car. Recovery trucks need to handle the size and weight. If you're freedom camping in a remote location, response times may be longer. If the motorhome is uninhabitable after breakdown (e.g., LPG failure, water system damage), you need emergency accommodation. Standard AA or NZRA membership designed for cars may not provide all the support you need as a motorhome owner.</p>

<h2>AA Roadside Assistance for Motorhomes</h2>
<p>AA Insurance includes AA Roadside Assistance with their motorhome policies. AA Roadside provides 24/7 call centre support, on-road assistance for breakdowns, towing to the nearest suitable repairer, and emergency fuel delivery. AA's membership is well-established and their response network covers New Zealand comprehensively. For standard mechanical breakdowns, AA Roadside is reliable and well-regarded. However, AA Roadside is not specifically designed for the habitation aspects of motorhome breakdowns — they handle the vehicle, not the home component.</p>

<h2>Covi Wings Roadside Assistance</h2>
<p>Covi Insurance's Wings Roadside Assistance is an optional add-on available from just $57 per year. Wings is specifically designed for motorhome and caravan breakdowns, understanding the unique challenges of RV recovery. Callouts carry a $200 fee, but the Wings programme provides appropriate-scale recovery vehicles and understanding of motorhome-specific issues. For $57 per year, Wings represents excellent value as a supplement to or replacement for standard roadside membership. The $200 callout fee is significant but reasonable given the complexity of motorhome recovery.</p>

<h2>NZRA for Star Insure CamperCare</h2>
<p>Star Insure's CamperCare policies include New Zealand Roadside Assistance (NZRA) at no additional cost. NZRA provides 24/7 breakdown response, towing, and emergency services. The inclusion of NZRA within the CamperCare premium makes Star's total cost of ownership more competitive than headline premiums suggest — you're getting roadside assistance without paying separately for it.</p>

<h2>Standalone NZMCA Roadside Services</h2>
<p>NZMCA membership ($150-200/year) includes access to NZMCA's network of member parks with lower nightly rates and some roadside support services. While not a full roadside assistance programme, NZMCA's network of members and motorhome-specific knowledge can be invaluable in a breakdown situation. NZMCA membership is valuable as a community and discount resource rather than a primary roadside assistance service.</p>

<h2>What to Do When You Break Down</h2>
<p>If you break down, move to a safe location off the road if possible, activate hazard lights, and contact your roadside assistance provider. Have your policy number, motorhome registration, current location (use your phone's GPS to get a grid reference or nearby landmark), and a description of the problem ready. For remote areas, note that response times can be 2-4 hours — carry water, food, and a blanket as standard motorhome preparation. If you're in genuine danger, call 111 rather than roadside assistance.</p>

<h2>Making the Most of Your Roadside Cover</h2>
<p>Keep your roadside assistance provider's number saved in your phone and in a physical location in your motorhome (phone batteries die). Carry basic tools and know your motorhome's basics — how to change a tyre, locate the main fuse box, and operate the emergency fuel shut-off. Regular motorhome servicing dramatically reduces breakdown risk and is a requirement of most insurance policies.</p>`,
  },
  {
    slug: 'nzmca-membership-guide-nz',
    title: 'NZMCA Membership and Insurance: What Members Need to Know',
    excerpt: 'A complete guide to NZMCA membership — what you get, how it interacts with motorhome insurance, Covi\'s NZMCA partnership, member park discounts, and whether NZMCA membership is worth it.',
    date: '2026-05-15',
    author: 'MotorHomeInsurance.co.nz Editorial Team',
    image: '/hero-motorhome-3.jpg',
    readTime: '8 min read',
    category: 'Insurance Guides',
    content: `<h2>What Is NZMCA?</h2>
<p>The New Zealand Motor Caravan Association (NZMCA) is the country's peak membership organisation for motorhome and caravan owners. Founded in 1964, NZMCA represents over 17,000 member families — making it one of the largest special-interest vehicle organisations in New Zealand. NZMCA advocates for motorhome owners' rights, manages a network of member parks, publishes the NZ Motor Caravan magazine, and works with government agencies on freedom camping, roading, and tourism policy.</p>

<h2>NZMCA Membership — What You Actually Get</h2>
<p>NZMCA annual membership costs around $100-$150 per year for an individual or couple, depending on membership tier. Members receive access to 300+ NZMCA member parks across New Zealand at rates typically 30-50% below commercial campground rates, subscriptions to NZ Motor Caravan magazine, access to NZMCA's touring guides and route maps, voting rights at the annual AGM, discounts at selected service providers and suppliers, and the ability to participate in NZMCA rallies and events. For active motorhome travellers who stay regularly in NZMCA parks, membership typically pays for itself within a few nights' camping.</p>

<h2>NZMCA and Covi Insurance — The Partnership Explained</h2>
<p>NZMCA has endorsed Covi Insurance as their preferred motorhome insurance provider. This is a commercial partnership: Covi is not owned by NZMCA, and NZMCA does not provide insurance directly. What the partnership means in practice is that Covi has designed their policies with NZMCA member needs in mind, Covi may offer preferential rates to NZMCA members, and Covi is the insurance provider NZMCA recommends and promotes to its membership. Covi's deep knowledge of how NZMCA members actually use their motorhomes — heavy use of member parks, freedom camping, touring — shapes their policy design.</p>

<h2>Is Covi Automatically the Best Option for NZMCA Members?</h2>
<p>Not necessarily. The NZMCA endorsement means Covi is a great starting point and is often very competitive for NZMCA members. But you should always compare Covi's quote with Star Insure, AA Insurance, and others before committing. Your motorhome's age, value, and how you use it will determine which insurer offers the best value for your situation. NZMCA membership shouldn't limit your insurance comparison — think of Covi as the first quote to get, not the only one.</p>

<h2>NZMCA Member Parks and Your Insurance</h2>
<p>Staying at NZMCA member parks is an insured activity — your motorhome insurance covers you while at member parks just as it would at any commercial campground. Member parks are generally well-maintained and secure, often with better facilities than generic freedom camping. When using member parks, ensure you carry your NZMCA membership card and that your NZMCA membership is current — expired membership means standard campground rates apply.</p>

<h2>NZMCA Self-Containment and Freedom Camping Support</h2>
<p>NZMCA has been at the forefront of NZ's freedom camping advocacy, working with government to establish and maintain the current Freedom Camping Act framework. NZMCA publishes guidance on self-containment requirements and maintains lists of certified self-containment assessors. If you're pursuing WSC certification for freedom camping, NZMCA's resources are a valuable starting point. NZMCA also advocates for freedom camping sites to remain open and accessible to self-contained motorhomes — a direct benefit for all members.</p>`,
  },
  {
    slug: 'top-motorhome-insurance-mistakes-nz',
    title: '7 Common Motorhome Insurance Mistakes Kiwis Make (And How to Avoid Them)',
    excerpt: 'Are you making one of these costly motorhome insurance mistakes? From underinsuring contents to misunderstanding freedom camping cover, here are the seven most common errors NZ motorhome owners make.',
    date: '2026-05-15',
    author: 'MotorHomeInsurance.co.nz Editorial Team',
    image: '/hero-motorhome-4.jpg',
    readTime: '8 min read',
    category: 'Money-Saving Tips',
    content: `<h2>Mistake 1: Using a Standard Car Insurance Policy</h2>
<p>One of the most common and costly mistakes NZ motorhome owners make is insuring their motorhome under a standard car insurance policy. Car policies cover you while driving, but the moment your motorhome is parked — at a campground, in your driveway, or at a storage facility — you may be uninsured. Car policies typically don't cover the habitation aspects of motorhomes (water systems, LPG, built-in appliances) or the contents inside. If you're insuring a motorhome, you need a standalone motorhome policy.</p>

<h2>Mistake 2: Underinsuring Your Contents</h2>
<p>Walk through your motorhome and add up the replacement cost of everything inside: refrigerator, cooker, television, bedding sets, camping furniture, personal electronics, tools, outdoor gear. Most well-equipped motorhomes carry $10,000-$20,000 in contents. Yet many owners take only $3,000 or $5,000 in contents cover — or none at all. In the event of a major theft or fire, underinsured contents means absorbing thousands in losses out of pocket. Use Covi's auto-included $10,000 contents as a benchmark — and go higher if your setup warrants it.</p>

<h2>Mistake 3: Choosing Market Value Over Agreed Value</h2>
<p>Motorhomes depreciate. A $90,000 motorhome purchased three years ago might be assessed at $65,000-$70,000 by an insurer's valuer in the event of a write-off. If you have market value insurance, that's your payout — $20,000-$25,000 less than you expected. Agreed value insurance locks in your payout at policy inception. Yes, it costs slightly more in premium, but the certainty is usually worth it, particularly for motorhomes under seven years old and worth more than $50,000. Specialist insurers like Covi offer agreed value for the first five years as standard.</p>

<h2>Mistake 4: Not Declaring Modifications</h2>
<p>Many motorhome owners modify their vehicles after purchase — adding solar panels, upgrading the electrical system, fitting a generator, or improving habitation features. These modifications increase the motorhome's value and change its risk profile. Failing to declare modifications to your insurer can result in claims being declined or reduced payouts. Always notify your insurer of modifications and ensure they're reflected in your insured value.</p>

<h2>Mistake 5: Cancelling Insurance During Storage</h2>
<p>Cancelling your motorhome insurance while it's in storage seems like a logical cost saving. It isn't. Stored motorhomes face real risks: theft, fire, water damage, pest damage, and vandalism. A break-in during storage could cost $5,000-$15,000. Instead of cancelling, ask your insurer about a laid-up or storage-period policy, which removes the driving component but keeps theft and damage protection. This typically costs 30-50% less than full cover while maintaining essential protection.</p>

<h2>Mistake 6: Assuming Freedom Camping Is Always Covered</h2>
<p>Most comprehensive motorhome policies cover freedom camping, but not all do. Some policies have geographic restrictions, require valid WSC certification, or may have exclusions for damage or theft at non-commercial camping locations. Always verify with your insurer that freedom camping is explicitly covered before you rely on it. If you camp frequently at remote or non-designated locations, confirm your policy wording carefully.</p>

<h2>Mistake 7: Not Shopping Around Annually</h2>
<p>Staying with the same insurer year after year out of habit or loyalty is costing many NZ motorhome owners money. Premium rates change annually, new competitors enter the market, and your motorhome's value and risk profile changes over time. Premium differences of 20-40% for identical cover are common between providers. Get at least three quotes every renewal — our comparison service makes this straightforward. Insurance loyalty is rarely rewarded; shopping around nearly always saves money.</p>`,
  },
  {
    slug: 'motorhome-insurance-claims-guide-nz',
    title: 'How to Make a Motorhome Insurance Claim in NZ: A Step-by-Step Guide',
    excerpt: 'A practical step-by-step guide to making a motorhome insurance claim in New Zealand — what to do immediately after an incident, how to document damage, and how to work with your insurer for a smooth settlement.',
    date: '2026-05-15',
    author: 'MotorHomeInsurance.co.nz Editorial Team',
    image: '/hero-motorhome-5.jpg',
    readTime: '8 min read',
    category: 'Insurance Guides',
    content: `<h2>Step 1: Ensure Safety First</h2>
<p>Before anything else, ensure all occupants are safe. If there's been an accident, check for injuries and call 111 if anyone is hurt. Move your motorhome to a safe location if possible without causing further damage. In the event of fire, evacuate immediately and call 111 — do not attempt to fight an LPG fire yourself. For theft discovered at your campsite, do not touch anything until you've called police. Safety always comes before claims documentation.</p>

<h2>Step 2: Contact Police if Required</h2>
<p>You must notify police for theft, attempted theft, vandalism, or any accident involving other vehicles or property damage. For accidents, exchange names, contact details, vehicle registration numbers, and insurance details with the other party. Note the time, date, location, weather conditions, and road conditions. Collect witness names and contact details if anyone observed the incident. Your insurer will require a police report number for theft and many accident claims — get this before contacting your insurer.</p>

<h2>Step 3: Document Everything Thoroughly</h2>
<p>Photograph everything before moving or touching anything. Take wide shots showing context and close-ups showing damage detail. If your motorhome has been in an accident, photograph the other vehicle(s), the road scene, damage to both vehicles, skid marks, and any relevant road signs or conditions. For theft, photograph forced entry points, areas where items were taken from, and any damage left by thieves. Photograph contents damage if a fire, flood, or weather event has occurred. This documentation is your evidence — the more thorough, the smoother your claim.</p>

<h2>Step 4: Notify Your Insurer Promptly</h2>
<p>Contact your insurer as soon as possible after the incident — most policies require notification "as soon as reasonably practicable". Have your policy number ready, along with your documented evidence, police report number (if applicable), and a clear description of what happened. Most major NZ insurers have 24/7 claims lines. Covi, Star Insure, AA, AMI, and Tower all offer after-hours claims support. Do not admit fault to the other party or their insurer before speaking with your own insurer.</p>

<h2>Step 5: Cooperate with the Claims Assessment</h2>
<p>Your insurer will appoint a claims assessor who will review your documentation, inspect the damage, and determine the claim value. For larger claims, an independent assessor may inspect your motorhome in person. Cooperate fully — provide all requested documentation, answer questions honestly, and make your motorhome available for inspection when required. Withholding information or being uncooperative can delay or invalidate your claim.</p>

<h2>Step 6: Understand Your Settlement Options</h2>
<p>For repairable damage, your insurer will either authorise repairs at an approved repairer or provide a cash settlement equivalent to the repair cost. For write-offs (total losses), you'll receive your agreed value (if you have agreed value cover) or the assessed market value. You can often choose your own repairer, but using an insurer-approved repairer usually means faster processing and guaranteed workmanship. Ask your insurer about repairer options — specialist motorhome repairers with habitation expertise may not be on standard approved lists, so discuss this proactively.</p>

<h2>If Your Claim Is Disputed</h2>
<p>If your claim is declined or you disagree with the settlement amount, you have options. First, request a written explanation of the decision. Review your policy wording carefully against the explanation. Escalate through your insurer's formal complaints process. If unresolved, take your complaint to Insurance and Financial Services Ombudsman (IFSO) — a free, independent dispute resolution service. The IFSO resolves thousands of insurance disputes annually, and insurers are bound by their decisions. You don't need a lawyer to use the IFSO process.</p>`,
  },
];
