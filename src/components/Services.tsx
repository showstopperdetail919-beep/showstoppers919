import { CheckCircle } from 'lucide-react';
import servicesData from '@/data/services.json';

export default function Services() {
  const { services } = servicesData;

  return (
    <section id="services" className="section-light">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge section-badge-dark">What We Offer</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-black">
            Our Services
          </h2>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: any) => (
            <div
              key={service.id}
              className="card-light relative group flex flex-col"
            >
              {service.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-black text-xs font-heading font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <h3 className="font-heading font-bold text-xl text-brand-black mb-1">
                {service.name}
              </h3>

              {service.duration && (
                <span className="text-xs font-body text-brand-gray-light mb-3">
                  {service.duration}
                </span>
              )}

              <p className="text-sm text-gray-600 font-body mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              {service.features && (
                <ul className="space-y-2 mb-4 flex-grow">
                  {service.features.map((feat: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm font-body text-gray-700">
                      <CheckCircle size={16} className="text-brand-gold mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tiers (Window Tint) */}
              {service.tiers && (
                <div className="space-y-2 mb-4 flex-grow">
                  {service.tiers.map((tier: any, i: number) => (
                    <div key={i} className="flex justify-between text-sm font-body text-gray-700 border-b border-gray-100 pb-2 last:border-0">
                      <span>{tier.label}</span>
                      <span className="font-semibold text-brand-black">{tier.price}</span>
                    </div>
                  ))}
                </div>
              )}

              {service.note && (
                <p className="text-xs text-gray-500 font-body italic mb-4">
                  {service.note}
                </p>
              )}

              {/* CTA */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <a
                  href="#booking"
                  className="block text-center btn-gold w-full py-3 text-sm"
                >
                  {service.requiresApproval ? 'Get a Quote' : 'Book Now'}
                </a>
                {service.depositAmount && (
                  <p className="text-center text-xs text-gray-400 font-body mt-2">
                    ${service.depositAmount} deposit to book
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
