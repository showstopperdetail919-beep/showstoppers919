import { Phone, Mail, MapPin } from 'lucide-react';
import business from '@/data/business.json';

const serviceLinks = [
  { label: 'Basic Wash', href: '#services' },
  { label: 'Gold Detail', href: '#services' },
  { label: 'Diamond Detail', href: '#services' },
  { label: 'Window Tint', href: '#services' },
  { label: 'Black Diamond', href: '#services' },
  { label: 'Custom Quote', href: '#booking' },
];

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#booking' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-1">
              Show Stopper{' '}
              <span className="text-brand-gold">Detailing</span>
            </h3>
            <p className="text-white/50 text-sm font-body leading-relaxed mt-3">
              Premium mobile auto detailing serving the Triangle region. Your
              vehicle deserves the spotlight.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${business.phoneRaw}`}
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-brand-gold transition-colors font-body"
              >
                <Phone size={14} className="shrink-0" />
                {business.phone}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-brand-gold transition-colors font-body"
              >
                <Mail size={14} className="shrink-0" />
                {business.email}
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/60 font-body">
                <MapPin size={14} className="shrink-0" />
                {business.baseCity}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-gold transition-colors font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-gold transition-colors font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-xs text-white/30 font-body">
            &copy; {year} {business.name}. All rights reserved. {business.baseCity}.
          </p>
        </div>
      </div>
    </footer>
  );
}
