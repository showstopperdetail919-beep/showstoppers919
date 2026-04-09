'use client';

import { motion } from 'framer-motion';
import { Sparkles, Phone } from 'lucide-react';
import business from '@/data/business.json';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Photo */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1761934658331-2e00b20dc6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjBzaGluZXxlbnwxfHx8fDE3NzU3NjQxMTl8MA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Luxury car detailing — Show Stopper"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-28 text-center text-white">
        {/* Pill badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-[#D4AF37]/30 mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-sm font-body tracking-wide text-[#FAFAFA]">
            Premium Mobile Detailing — Durham &amp; The Triangle
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl text-[#FAFAFA] leading-tight mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Show Stopper
          <span className="block text-[#D4AF37]">Detailing</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="font-body font-light text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Show-stopping results without leaving your driveway. Serving Durham, Raleigh, Cary, and beyond.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a
            href="#booking"
            className="btn-gold text-base px-8 py-4 w-full sm:w-auto text-center"
          >
            Book Now
          </a>
          <a
            href={`tel:${business.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-lg border border-white text-white font-heading font-semibold text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-10 text-sm text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {['Licensed & Insured', '100% Mobile Service', 'Professional Team'].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
              <span className="font-body text-sm">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
