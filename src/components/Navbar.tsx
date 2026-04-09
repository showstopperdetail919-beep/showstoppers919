'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import business from '@/data/business.json';
import Logo from '@/components/Logo';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/50 border-b border-white/10'
          : 'bg-black/95 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — place logo.png in /public/ */}
          <button
            onClick={() => scrollToSection('#')}
            className="hover:opacity-85 transition-opacity flex-shrink-0"
            aria-label="Show Stopper Detailing — Home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.PNG"
              alt="Show Stopper Detailing"
              className="h-12 w-auto object-contain"
              style={{ maxWidth: '220px' }}
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-body font-medium text-[#FAFAFA]/80 hover:text-[#D4AF37] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${business.phoneRaw}`}
              className="flex items-center gap-1.5 text-[#FAFAFA]/70 hover:text-[#D4AF37] transition-colors"
            >
              <Phone size={14} />
              <span className="font-body font-medium text-sm">{business.phone}</span>
            </a>
            <button
              onClick={() => scrollToSection('#booking')}
              className="btn-gold text-xs px-5 py-2.5"
            >
              Book Now
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-[#FAFAFA] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/98 border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-base font-body font-medium text-[#FAFAFA]/80 hover:text-[#D4AF37] transition-colors py-3 border-b border-white/5 text-left"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`tel:${business.phoneRaw}`}
              className="flex items-center gap-2 text-[#FAFAFA]/70 hover:text-[#D4AF37] transition-colors py-3 border-b border-white/5"
            >
              <Phone size={14} />
              <span className="font-body font-medium text-sm">{business.phone}</span>
            </a>
            <button
              onClick={() => scrollToSection('#booking')}
              className="btn-gold text-center text-sm mt-3 w-full"
            >
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
