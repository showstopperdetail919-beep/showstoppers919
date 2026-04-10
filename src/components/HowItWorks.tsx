import { Calendar, MapPin, Sparkles, Star } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Book Online',
    description:
      'Choose your service, pick a date, and submit your booking. A deposit secures your spot.',
  },
  {
    icon: MapPin,
    title: 'We Come to You',
    description:
      'Mobile services are performed at your location. Window tint location provided after confirmation.',
  },
  {
    icon: Sparkles,
    title: 'We Detail',
    description:
      'Our professionals transform your vehicle with premium products and meticulous attention to detail.',
  },
  {
    icon: Star,
    title: 'You Enjoy',
    description:
      'Drive away in a vehicle that looks and feels brand new. Show-stopping results guaranteed.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-light">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge section-badge-dark">Process</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-black">
            How It Works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-brand-gold/20" />
              )}

              {/* Icon circle */}
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-brand-gold flex items-center justify-center shadow-lg shadow-brand-gold/20">
                <step.icon size={32} className="text-black" />
              </div>

              {/* Step number */}
              <span className="font-heading font-extrabold text-5xl text-brand-gold/10 absolute top-0 right-4 lg:right-0 select-none">
                {i + 1}
              </span>

              <h3 className="font-heading font-bold text-lg text-brand-black mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 font-body leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#booking" className="btn-gold px-8 py-4 text-base">
            Book Your Detail
          </a>
        </div>
      </div>
    </section>
  );
}
