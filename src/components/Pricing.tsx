import { Check } from 'lucide-react';
import servicesData from '@/data/services.json';

const pricingTiers = [
  {
    id: 'basic-wash',
    name: 'Basic Wash',
    price: '$45',
    suffix: '& up',
    features: [
      'Exterior hand wash',
      'Tire & rim cleaning',
      'Tire shine',
      'Window cleaning',
      'Door jamb wipe',
    ],
    popular: false,
  },
  {
    id: 'gold-detail',
    name: 'Gold Detail',
    price: '$120',
    suffix: '& up',
    features: [
      'Everything in Basic',
      'Full interior vacuum',
      'Dashboard & console wipe',
      'Interior windows cleaned',
      'Light interior detail',
      'Air freshener',
    ],
    popular: true,
  },
  {
    id: 'diamond-detail',
    name: 'Diamond Detail',
    price: '$300',
    suffix: '& up',
    features: [
      'Everything in Gold',
      'Clay bar decontamination',
      'Premium hand wax & sealant',
      'Deep interior restoration',
      'Leather conditioning',
      'Headlight restoration',
    ],
    popular: false,
  },
  {
    id: 'black-diamond',
    name: 'Black Diamond',
    price: '$350',
    suffix: '& up',
    features: [
      'Full Gold Detail included',
      'Complete vehicle window tint',
      'Interior + exterior detail',
      'Full protection package',
      'Best value combo',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-dark">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge section-badge-gold">Investment</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
            Pricing Packages
          </h2>
          <p className="text-white/50 font-body mt-3 max-w-lg mx-auto">
            Prices vary by vehicle size. A deposit is required to secure your booking.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                tier.popular
                  ? 'bg-brand-charcoal border-2 border-brand-gold shadow-xl shadow-brand-gold/10 md:scale-105'
                  : 'bg-brand-charcoal border border-brand-gray hover:border-white/20'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-black text-xs font-heading font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="font-heading font-bold text-lg text-white mb-2">
                {tier.name}
              </h3>

              <div className="mb-5">
                <span className="font-heading font-extrabold text-4xl text-white">
                  {tier.price}
                </span>
                <span className="text-white/40 text-sm font-body ml-1">
                  {tier.suffix}
                </span>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm font-body text-white/70">
                    <Check size={16} className="text-brand-gold mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`block text-center font-heading font-bold text-sm uppercase tracking-wider py-3 rounded-lg transition-all ${
                  tier.popular
                    ? 'btn-gold w-full'
                    : 'border border-brand-gold/40 text-brand-gold hover:bg-brand-gold/10'
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-white/40 text-sm font-body mt-10 max-w-2xl mx-auto">
          Window Tint starting at $200 &middot; Sedans $200 &middot; SUVs $250 &middot; Windshield $100
          <br />
          Custom quotes available for RVs, boats &amp; fleet vehicles
        </p>
      </div>
    </section>
  );
}
