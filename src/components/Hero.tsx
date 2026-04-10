'use client';

import { motion } from 'framer-motion';
import { Shield, Star, Truck } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const trustBadges = [
  { icon: Shield, label: 'Insured & Professional' },
  { icon: Star, label: '5-Star Rated' },
  { icon: Truck, label: 'We Come to You' },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="section-badge section-badge-gold mb-6"
        >
          Premium Mobile Detailing — Durham &amp; The Triangle
        </motion.span>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6"
        >
          Your Vehicle
          <br />
          Deserves the{' '}
          <span className="text-gradient-gold">Spotlight</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-8 font-body"
        >
          Mobile detailing services brought to your door across the Triangle
          region. Durham, Raleigh, Chapel Hill, Cary &amp; beyond.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <button onClick={() => scrollTo('booking')} className="btn-gold text-base px-8 py-4">
            Book Your Detail
          </button>
          <button onClick={() => scrollTo('services')} className="btn-outline-gold text-base px-8 py-4">
            View Services
          </button>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-6"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-white/60 text-sm font-body"
            >
              <badge.icon size={16} className="text-brand-gold" />
              <span>{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
