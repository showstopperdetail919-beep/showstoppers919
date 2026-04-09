'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle, AlertCircle, Phone, MapPin, Clock } from 'lucide-react';
import servicesData from '@/data/services.json';
import business from '@/data/business.json';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function BookingSection() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({
    name: '', phone: '', service: '', date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      setFormState(res.ok ? 'success' : 'error');
      if (res.ok) setForm({ name: '', phone: '', service: '', date: '' });
    } catch {
      setFormState('error');
    }
  };

  return (
    <section id="booking" className="py-20 bg-black text-white px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-[#D4AF37]/20 rounded-full mb-4">
            <span className="text-sm font-body tracking-wide text-[#D4AF37] uppercase">Book Now</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-white mb-3">
            Ready to Book?
          </h2>
          <p className="font-body text-gray-400">
            Fill out the form and we&apos;ll reach out within 24 hours to confirm.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={`tel:${business.phoneRaw}`}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#D4AF37]/40 transition-colors"
            >
              <div className="p-3 bg-[#D4AF37] rounded-lg flex-shrink-0">
                <Phone className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="font-heading font-semibold text-white text-sm">Call or Text</p>
                <p className="font-body text-[#D4AF37] text-sm">{business.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="p-3 bg-[#D4AF37] rounded-lg flex-shrink-0">
                <MapPin className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="font-heading font-semibold text-white text-sm">Service Area</p>
                <p className="font-body text-gray-400 text-sm">{business.serviceAreas.slice(0, 3).join(', ')} & more</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="p-3 bg-[#D4AF37] rounded-lg flex-shrink-0">
                <Clock className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="font-heading font-semibold text-white text-sm">Hours</p>
                <p className="font-body text-gray-400 text-sm">Mon – Sat · 8am – 7pm</p>
              </div>
            </div>

            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-5">
              <p className="font-body text-xs text-gray-400 mb-1">Deposit required at booking</p>
              <p className="font-body text-sm text-[#D4AF37]">Applied toward your total — not an extra charge.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-xl p-8">
            {formState === 'success' ? (
              <div className="text-center py-10">
                <CheckCircle size={52} className="text-[#D4AF37] mx-auto mb-5" />
                <h3 className="font-heading font-bold text-2xl text-white mb-3">Request Received!</h3>
                <p className="font-body text-gray-400 text-sm max-w-xs mx-auto">
                  We&apos;ll reach out within 24 hours to confirm your appointment.
                </p>
                <button onClick={() => setFormState('idle')} className="mt-8 btn-gold text-sm px-6 py-3">
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {formState === 'error' && (
                  <div className="flex items-center gap-3 bg-red-900/20 border border-red-800/50 rounded-lg px-4 py-3">
                    <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                    <p className="text-xs font-body text-red-300">Something went wrong. Call us directly at {business.phone}.</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-body font-medium text-white/60 mb-1.5 uppercase tracking-wide">Full Name *</label>
                    <input
                      type="text" name="name" value={form.name}
                      onChange={handleChange} required placeholder="John Smith"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-body text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-medium text-white/60 mb-1.5 uppercase tracking-wide">Phone *</label>
                    <input
                      type="tel" name="phone" value={form.phone}
                      onChange={handleChange} required placeholder="(919) 000-0000"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-body text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-body font-medium text-white/60 mb-1.5 uppercase tracking-wide">Service *</label>
                  <select
                    name="service" value={form.service} onChange={handleChange} required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-body text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors appearance-none"
                  >
                    <option value="" className="bg-gray-900">Select a service...</option>
                    {servicesData.services.map((s) => (
                      <option key={s.id} value={s.id} className="bg-gray-900">{s.name} — {s.price}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-body font-medium text-white/60 mb-1.5 uppercase tracking-wide">Preferred Date *</label>
                  <input
                    type="date" name="date" value={form.date}
                    onChange={handleChange} required min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-body text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors"
                  />
                </div>

                <button
                  type="submit" disabled={formState === 'submitting'}
                  className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-black font-heading font-bold text-base uppercase tracking-wide py-4 rounded-lg transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Request Appointment'}
                </button>

                <p className="text-gray-500 text-xs text-center font-body">
                  We&apos;ll call or text to confirm within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
