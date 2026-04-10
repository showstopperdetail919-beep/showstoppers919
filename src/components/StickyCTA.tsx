'use client';

import { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';
import business from '@/data/business.json';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex gap-3 max-w-lg mx-auto">
          {/* Call Now */}
          <a
            href={`tel:${business.phoneRaw}`}
            className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-heading font-bold text-sm uppercase tracking-wider rounded-lg py-3 hover:bg-white/15 transition-colors"
          >
            <Phone size={16} />
            Call Now
          </a>

          {/* Book Now */}
          <button
            onClick={() =>
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="flex-1 flex items-center justify-center gap-2 btn-gold py-3 text-sm"
          >
            <Calendar size={16} />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
