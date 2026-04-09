import { CheckCircle, Star } from 'lucide-react';
import servicesData from '@/data/services.json';

export default function Services() {
  const { services } = servicesData;

  return (
    <section id="services" className="bg-[#0A0A0A] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-body font-medium tracking-[0.3em] text-[#C9A84C] uppercase">
            What We Offer
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#FAFAFA] mt-3 mb-4">
            Our Services
          </h2>
          <p className="font-body text-[#FAFAFA]/60 max-w-xl mx-auto text-base sm:text-lg">
            Professional detailing packages for every vehicle and every budget. All performed by hand — no shortcuts.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative card-dark flex flex-col group"
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#C9A84C] to-[#A3882E] text-[#0A0A0A] text-xs font-heading font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    <Star size={12} fill="currentColor" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex-1">
                {/* Service name + price */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-heading font-bold text-xl text-[#FAFAFA]">
                    {service.name}
                  </h3>
                  <span className="font-heading font-extrabold text-lg text-gradient-gold whitespace-nowrap">
                    {service.price}
                  </span>
                </div>

                {/* Duration */}
                {service.duration && (
                  <span className="inline-block text-xs font-body text-[#C9A84C]/80 border border-[#C9A84C]/30 rounded px-2 py-0.5 mb-3">
                    {service.duration}
                  </span>
                )}

                {/* Description */}
                <p className="font-body text-[#FAFAFA]/60 text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                {service.features && (
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle
                          size={15}
                          className="text-[#C9A84C] mt-0.5 flex-shrink-0"
                        />
                        <span className="font-body text-sm text-[#FAFAFA]/75">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tiers (Window Tint) */}
                {'tiers' in service && service.tiers && (
                  <ul className="space-y-2 mb-4">
                    {service.tiers.map((tier, idx) => (
                      <li key={idx} className="flex items-center justify-between border-b border-[#2A2A2A] py-1.5">
                        <span className="font-body text-sm text-[#FAFAFA]/75">{tier.label}</span>
                        <span className="font-heading font-semibold text-sm text-[#C9A84C]">{tier.price}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Note */}
                {service.note && (
                  <p className="text-xs font-body text-[#FAFAFA]/40 italic mt-2">
                    * {service.note}
                  </p>
                )}
              </div>

              {/* CTA */}
              <div className="mt-6 pt-5 border-t border-[#2A2A2A]">
                {service.requiresApproval ? (
                  <a
                    href="#booking"
                    className="w-full inline-flex items-center justify-center border border-[#C9A84C]/60 text-[#C9A84C] font-heading font-semibold text-sm uppercase tracking-wider py-3 rounded-lg hover:bg-[#C9A84C]/10 transition-all duration-200"
                  >
                    Get a Quote
                  </a>
                ) : (
                  <a
                    href="#booking"
                    className="w-full inline-flex items-center justify-center btn-gold text-sm py-3"
                  >
                    Book Now
                  </a>
                )}
                {service.depositAmount && (
                  <p className="text-center text-xs text-[#FAFAFA]/40 mt-2 font-body">
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
