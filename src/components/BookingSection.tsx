'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import servicesData from '@/data/services.json';
import business from '@/data/business.json';

export default function BookingSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: '',
    date: '',
    address: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState('success');
        setForm({ name: '', phone: '', email: '', vehicle: '', service: '', date: '', address: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const today = new Date().toISOString().split('T')[0];

  if (formState === 'success') {
    return (
      <section id="booking" className="section-dark">
        <div className="section-inner text-center max-w-lg mx-auto">
          <CheckCircle size={48} className="text-brand-gold mx-auto mb-4" />
          <h2 className="font-heading font-bold text-2xl text-white mb-3">
            Booking Request Received!
          </h2>
          <p className="text-white/60 font-body mb-6">
            We&apos;ll call or text within 24 hours to confirm your appointment and
            collect the deposit.
          </p>
          <button
            onClick={() => setFormState('idle')}
            className="btn-outline-gold px-6 py-3"
          >
            Submit Another Request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="section-dark">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge section-badge-gold">Get Started</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
            Book Your Detail
          </h2>
          <p className="text-white/50 font-body mt-3 max-w-lg mx-auto">
            Fill out the form to request a booking. A deposit is required to
            confirm your appointment. We&apos;ll reach out to confirm.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left — Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={`tel:${business.phoneRaw}`}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-brand-gold/40 transition-colors"
            >
              <Phone size={20} className="text-brand-gold shrink-0" />
              <div>
                <p className="text-xs text-white/40 font-body">Call Us</p>
                <p className="text-white font-body font-semibold">{business.phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-brand-gold/40 transition-colors"
            >
              <Mail size={20} className="text-brand-gold shrink-0" />
              <div>
                <p className="text-xs text-white/40 font-body">Email</p>
                <p className="text-white font-body font-semibold text-sm">{business.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
              <MapPin size={20} className="text-brand-gold shrink-0" />
              <div>
                <p className="text-xs text-white/40 font-body">Based In</p>
                <p className="text-white font-body font-semibold">
                  {business.baseCity} &middot; Triangle Region
                </p>
              </div>
            </div>

            {/* Deposit info */}
            <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-xl p-5 mt-2">
              <p className="text-brand-gold text-sm font-heading font-semibold mb-1">
                Deposit Info
              </p>
              <p className="text-white/60 text-xs font-body leading-relaxed">
                A deposit is required to secure your booking and is applied toward
                the total service balance. We&apos;ll provide payment details upon
                confirmation.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            {formState === 'error' && (
              <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                <AlertCircle size={18} className="text-red-400 shrink-0" />
                <p className="text-red-300 text-sm font-body">
                  Something went wrong. Please try again or call us directly at{' '}
                  {business.phone}.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/50 font-body mb-1.5">
                    Name <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white text-sm font-body placeholder:text-white/30 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/50 font-body mb-1.5">
                    Phone <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white text-sm font-body placeholder:text-white/30 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/50 font-body mb-1.5">
                    Email <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white text-sm font-body placeholder:text-white/30 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/50 font-body mb-1.5">
                    Vehicle (Year / Make / Model) <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="vehicle"
                    required
                    value={form.vehicle}
                    onChange={handleChange}
                    placeholder="2024 BMW M4"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white text-sm font-body placeholder:text-white/30 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/50 font-body mb-1.5">
                    Service <span className="text-brand-gold">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white text-sm font-body focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 outline-none transition-colors appearance-none"
                  >
                    <option value="" className="bg-brand-black">
                      Select service
                    </option>
                    {servicesData.services.map((s: any) => (
                      <option key={s.id} value={s.id} className="bg-brand-black">
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-white/50 font-body mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={today}
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white text-sm font-body focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/50 font-body mb-1.5">
                  Address or ZIP
                </label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Service location or ZIP code"
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white text-sm font-body placeholder:text-white/30 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-white/50 font-body mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any special requests or vehicle details..."
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white text-sm font-body placeholder:text-white/30 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 outline-none transition-colors resize-none"
                />
              </div>

              <p className="text-xs text-white/30 font-body">
                A deposit is required to secure your booking. We&apos;ll provide
                payment details upon confirmation.
              </p>

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="btn-gold w-full py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === 'submitting' ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
