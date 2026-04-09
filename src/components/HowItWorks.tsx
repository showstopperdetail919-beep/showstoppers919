import { Calendar, MapPin, Sparkles, Star } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    number: '01',
    title: 'Book Online',
    description: 'Choose your service and select a convenient date and time. Instant confirmation — we make it easy.',
  },
  {
    icon: MapPin,
    number: '02',
    title: 'We Come to You',
    description: 'Our professional team arrives at your location with all equipment and supplies. No drop-off needed.',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Expert Service',
    description: 'We transform your vehicle using premium products and meticulous attention to detail — by hand, every time.',
  },
  {
    icon: Star,
    number: '04',
    title: 'Enjoy the Results',
    description: 'Drive away in a stunning vehicle that looks and feels like new. Pay the remaining balance when done.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-black text-white px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="inline-block px-4 py-1 bg-[#D4AF37]/20 rounded-full mb-4">
            <span className="text-sm font-body tracking-wide text-[#D4AF37] uppercase">Process</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-white mb-4">
            How It Works
          </h2>
          <p className="font-body text-lg text-gray-400">
            Four simple steps to a stunning vehicle
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[65%] w-[70%] h-px bg-[#D4AF37]/30" />
                )}

                <div className="relative z-10">
                  {/* Icon circle */}
                  <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mb-5 mx-auto lg:mx-0 shadow-lg shadow-[#D4AF37]/20">
                    <Icon className="w-9 h-9 text-black" />
                  </div>

                  {/* Step number */}
                  <div className="font-heading font-extrabold text-6xl text-[#D4AF37]/20 mb-2 text-center lg:text-left leading-none">
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-xl text-white mb-2 text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="font-body text-gray-400 text-sm leading-relaxed text-center lg:text-left">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#booking" className="btn-gold text-sm px-10 py-4">
            Book Your Detail
          </a>
        </div>
      </div>
    </section>
  );
}
