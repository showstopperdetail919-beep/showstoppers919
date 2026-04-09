import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import business from '@/data/business.json';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo — place logo.png in /public/ */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.PNG"
              alt="Show Stopper Detailing"
              className="h-14 w-auto object-contain mb-5"
              style={{ maxWidth: '200px' }}
            />

            <p className="font-body text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
              Premium mobile auto detailing in Durham, NC and the Triangle. Hand car wash, full detail, window tint — we come to you.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, label: 'Facebook', href: business.socialLinks.facebook || '#' },
                { Icon: Instagram, label: 'Instagram', href: business.socialLinks.instagram || '#' },
                { Icon: Twitter, label: 'Twitter', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#D4AF37] hover:text-black text-gray-400 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {['Mobile Car Wash', 'Gold Detail', 'Diamond Detail', 'Window Tinting', 'Black Diamond Package', 'Custom Quote'].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-[#D4AF37] transition-colors font-body">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {[
                { label: 'Pricing', href: '#pricing' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact & Book', href: '#booking' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#D4AF37] transition-colors font-body">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                  <span className="font-body">{business.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                  <span className="font-body break-all">{business.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <span className="font-body">{business.baseCity} &amp; The Triangle</span>
              </li>
            </ul>

            {/* Service areas */}
            <div className="mt-5">
              <p className="text-xs text-gray-500 font-body uppercase tracking-wide mb-2">Service Areas</p>
              <p className="text-xs text-gray-500 font-body leading-relaxed">
                {business.serviceAreas.join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p className="font-body">&copy; {year} {business.name}. All rights reserved.</p>
          <div className="flex gap-5 font-body">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
