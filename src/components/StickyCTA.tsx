'use client';

import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-black border-t border-[#D4AF37]/30 p-4 shadow-2xl">
        <button
          onClick={scrollToBooking}
          className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#B8941F] text-black font-heading font-bold text-base uppercase tracking-wide py-4 rounded-lg transition-colors duration-200"
        >
          <Calendar className="w-5 h-5" />
          Book Appointment
        </button>
      </div>
    </div>
  );
}
