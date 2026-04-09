import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic Mobile Wash',
    price: '$45',
    priceSuffix: 'starting',
    description: 'Perfect for regular maintenance',
    deposit: '$15',
    features: [
      'Full exterior hand wash',
      'Wheels cleaned & dressed',
      'Tire shine applied',
      'All windows cleaned inside & out',
      'Hand dry — streak-free finish',
    ],
    popular: false,
    cta: 'Book This Service',
  },
  {
    name: 'Gold Detail',
    price: '$120',
    priceSuffix: 'flat rate',
    description: 'Our most popular package',
    deposit: '$40',
    features: [
      'Everything in the Basic Wash',
      'Full interior vacuum',
      'Dashboard & surface wipe down',
      'Interior windows cleaned',
      'Light interior detail & freshening',
    ],
    popular: true,
    cta: 'Book This Service',
  },
  {
    name: 'Diamond Detail',
    price: '$300',
    priceSuffix: 'flat rate',
    description: 'The ultimate transformation',
    deposit: '$100',
    features: [
      'Everything in the Gold Detail',
      'Clay bar paint decontamination',
      'Premium hand wax & sealant',
      'Full interior restoration',
      'Deep clean — every inch',
    ],
    popular: false,
    cta: 'Book This Service',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 rounded-full mb-4">
            <span className="text-sm font-body tracking-wide text-[#B8941F] uppercase">Pricing</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-gray-900 mb-4">
            Transparent Pricing.
          </h2>
          <p className="font-body text-lg text-gray-600">
            Premium services at upfront rates. A small deposit secures your booking — the rest is due when we finish.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/10 bg-white md:scale-105'
                  : 'border border-gray-200 bg-white hover:shadow-lg'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4AF37] text-black text-xs font-heading font-bold rounded-full uppercase tracking-wider whitespace-nowrap">
                  Most Popular
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-6">
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">{plan.name}</h3>
                <p className="font-body text-gray-500 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-heading font-extrabold text-5xl text-gray-900">{plan.price}</span>
                  <span className="font-body text-gray-500 text-sm">{plan.priceSuffix}</span>
                </div>
                <p className="text-xs font-body text-[#B8941F] mt-2">${plan.deposit} deposit to book</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#booking"
                className={`block text-center rounded-lg py-3 font-heading font-semibold text-sm uppercase tracking-wide transition-all duration-200 ${
                  plan.popular
                    ? 'bg-[#D4AF37] hover:bg-[#B8941F] text-black'
                    : 'bg-gray-900 hover:bg-gray-700 text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* More services note */}
        <div className="text-center mt-10 space-y-2">
          <p className="font-body text-gray-500 text-sm">
            Also available: Window Tint from $100 · Black Diamond Package $350 · Custom Quotes for RVs, boats & fleets
          </p>
          <a href="#services" className="inline-block font-body text-sm text-[#B8941F] hover:text-[#D4AF37] transition-colors underline underline-offset-2">
            View all services →
          </a>
        </div>
      </div>
    </section>
  );
}
