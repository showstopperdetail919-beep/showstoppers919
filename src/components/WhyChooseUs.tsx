import { MapPin, Truck, Hand, FlaskConical, ShieldCheck } from 'lucide-react';

const reasons = [
  { icon: MapPin, title: 'Locally Owned & Operated', description: "We're based in Durham and proud to serve the Triangle community." },
  { icon: Truck, title: '100% Mobile Convenience', description: 'We bring everything we need to your location. No drop-offs, no waiting rooms.' },
  { icon: Hand, title: 'Hand Wash Only', description: 'Every vehicle is washed and detailed by hand. No machines, no shortcuts.' },
  { icon: FlaskConical, title: 'Premium Products', description: 'We use professional-grade products that protect your paint and interior.' },
  { icon: ShieldCheck, title: 'Satisfaction Guaranteed', description: "If you're not happy with the results, we'll make it right. Period." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 rounded-full mb-4">
            <span className="text-sm font-body tracking-wide text-[#B8941F] uppercase">Why Choose Us</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-gray-900 mb-4">
            Why Triangle Drivers Choose Show Stopper
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-[#D4AF37]/60 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <Icon size={24} className="text-[#B8941F]" />
                </div>
                <h3 className="font-heading font-bold text-base text-gray-900 mb-2 leading-snug">{reason.title}</h3>
                <p className="font-body text-xs text-gray-500 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
