'use client';

import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import business from '@/data/business.json';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#booking' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = useCallback((href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-18">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2"
        >
          <img
            src="/images/logo.PNG"
            alt="Show Stopper Detailing"
            className="h-10 w-auto object-contain"
          />
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-body text-white/70 hover:text-brand-gold transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${business.phoneRaw}`}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-gold transition-colors font-body"
          >
            <Phone size={14} />
            {business.phone}
          </a>
          <button
            onClick={() => scrollToSection('#booking')}
            className="btn-gold text-xs px-5 py-2.5"
          >
            Book Now
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left py-3 text-white/80 hover:text-brand-gold transition-colors font-body text-base border-b border-white/5 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href={`tel:${business.phoneRaw}`}
                className="flex items-center justify-center gap-2 text-brand-gold font-body font-semibold"
              >
                <Phone size={16} />
                {business.phone}
              </a>
              <button
                onClick={() => scrollToSection('#booking')}
                className="btn-gold w-full py-3"
              >
                Book Now
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
