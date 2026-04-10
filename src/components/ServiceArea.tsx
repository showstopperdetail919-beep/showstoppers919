import { MapPin } from 'lucide-react';
import business from '@/data/business.json';

export default function ServiceArea() {
  return (
    <section id="service-area" className="section-dark">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map / Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80"
              alt="Triangle area, NC"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm font-body">
              <MapPin size={16} className="text-brand-gold" />
              <span>Durham, NC &amp; The Triangle</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-badge section-badge-gold">Coverage</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
              Service Area
            </h2>
            <p className="text-white/60 font-body leading-relaxed mb-8">
              Based in Durham, NC — we serve the entire Triangle region. Mobile
              services come to your home or office. Window tint is performed at a
              location we provide after booking.
            </p>

            {/* City Tags */}
            <div className="flex flex-wrap gap-3">
              {business.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-full text-sm font-body font-medium bg-white/5 border border-white/10 text-white/70 hover:border-brand-gold/40 hover:text-brand-gold transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
