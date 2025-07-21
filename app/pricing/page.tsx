"use client";

import { useState } from "react";
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic Clean",
    price: "$80",
    period: "per visit",
    description: "Perfect for occasional cleaning or one-time service",
    features: [
      "Surface skimming",
      "Vacuuming",
      "Basic chemical check",
      "Empty baskets",
      "Visual equipment inspection",
    ],
    notIncluded: [
      "Chemical balancing",
      "Equipment repairs",
      "Algae treatment",
    ],
    popular: false,
  },
  {
    name: "Essential Care",
    price: "$250",
    period: "per month",
    description: "Weekly service for consistently clean pools",
    features: [
      "Everything in Basic Clean",
      "Weekly service visits",
      "Full chemical balancing",
      "Filter cleaning (monthly)",
      "Detailed service reports",
      "Priority scheduling",
    ],
    notIncluded: [
      "Equipment repairs",
      "Opening/closing service",
    ],
    popular: true,
  },
  {
    name: "Premium Plus",
    price: "$450",
    period: "per month",
    description: "Complete care with all the extras",
    features: [
      "Everything in Essential Care",
      "Bi-weekly deep cleaning",
      "All chemicals included",
      "Equipment maintenance",
      "Seasonal opening/closing",
      "24/7 emergency support",
      "Free equipment diagnosis",
    ],
    notIncluded: [],
    popular: false,
  },
];

const additionalServices = [
  { service: "Green Pool Recovery", price: "$300-$600" },
  { service: "Equipment Repair", price: "$150+ (parts extra)" },
  { service: "Pool Opening/Closing", price: "$250 each" },
  { service: "One-Time Deep Clean", price: "$200" },
  { service: "Chemical Shock Treatment", price: "$100" },
  { service: "Filter Replacement", price: "$200+ (parts extra)" },
];

const faqs = [
  {
    question: "What's included in the monthly plans?",
    answer: "Our monthly plans include regular visits (weekly or bi-weekly), all cleaning services, water testing, and chemical balancing. Premium plans also include chemicals and seasonal services. Check the comparison table above for full details.",
  },
  {
    question: "Do you offer contracts or are services month-to-month?",
    answer: "We offer both options! Month-to-month service gives you flexibility, while annual contracts provide a 10% discount and locked-in pricing. There's no cancellation fee for month-to-month services with 30 days notice.",
  },
  {
    question: "How do you handle chemical costs?",
    answer: "Basic chemicals for regular balancing are included in Essential Care and Premium Plus plans. For Basic Clean visits, chemicals are billed separately at cost + 15%. We always discuss any significant chemical needs before applying them.",
  },
  {
    question: "What areas do you service?",
    answer: "We service the entire Greater Metro area within a 25-mile radius of downtown. For properties outside this area, a small travel fee may apply. Contact us to confirm service availability for your location.",
  },
  {
    question: "Do you service commercial properties?",
    answer: "Yes! We offer customized commercial plans for hotels, apartments, gyms, and community pools. Commercial pricing varies based on pool size, usage, and service frequency. Contact us for a custom quote.",
  },
  {
    question: "What if I need emergency service?",
    answer: "Premium Plus customers get 24/7 emergency support included. Other customers can access emergency service for $150 + regular service fees. We typically respond within 2-4 hours for emergencies.",
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Hero
        title="Transparent, Fair Pricing"
        subtitle="Service Plans & Pricing"
        description="Choose the perfect plan for your pool care needs. No hidden fees, no surprises."
        primaryCTA={{ text: "Get Started Today", href: "/contact" }}
        backgroundImage="https://images.unsplash.com/photo-1621880434144-9409147ba03e?q=80&w=2064"
      />

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All plans include professional service by certified technicians. Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg p-8 ${
                  plan.popular
                    ? "bg-white ring-2 ring-pool-blue shadow-xl scale-105"
                    : "bg-gray-50"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pool-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-poppins font-bold text-charcoal mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-deep-aqua">{plan.price}</span>
                    <span className="text-gray-600"> {plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="font-semibold text-charcoal">Included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="font-semibold text-charcoal pt-4">Not Included:</p>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-500">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <Button
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Choose {plan.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Need something extra? We offer these services on-demand or as add-ons to any plan.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-deep-aqua text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-medium">Service</th>
                    <th className="px-6 py-4 text-right font-medium">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {additionalServices.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">{item.service}</td>
                      <td className="px-6 py-4 text-right text-deep-aqua font-semibold">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Got questions about our pricing? We've got answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-charcoal">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pool-blue">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Join hundreds of happy customers enjoying crystal-clear pools year-round.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Get Your Free Quote
            </Button>
            <Button href="tel:+1234567890" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-pool-blue">
              Call (123) 456-7890
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-200">
            No obligation • Free consultation • Same-day quotes
          </p>
        </div>
      </section>
    </>
  );
} 