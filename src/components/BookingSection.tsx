'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import servicesData from '@/data/services.json';
import business from '@/data/business.json';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const vehicleTypes = ['Sedan', 'Coupe', 'SUV / Crossover', 'Truck', 'Minivan', 'Sports Car', 'Luxury Vehicle', 'Other'];

export default function BookingSection() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '',
    date: '', vehicleType: '', address: '', message: '',
  });

  const selectedService = servicesData.services.find((s) => s.id === form.service);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      if (res.ok) setForm({ name: '', email: '', phone: '', service: '', date: '', vehicleType: '', address: '', message: '' });
    } catch {
      setFormState('error');
    }
  };

  const contactCards = [
    {
      Icon: Phone,
      title: 'Phone',
      sub: 'Call or text anytime',
      content: business.phone,
      href: `tel:${business.phoneRaw}`,
    },
    {
      Icon: Mail,
      title: 'Email',
      sub: 'We reply within 24 hours',
      content: business.email,
      href: `mailto:${business.email}`,
    },
    {
      Icon: MapPin,
      title: 'Service Area',
      sub: business.serviceAreas.slice(0, 4).join(', ') + ' & more',
      content: null,
      href: null,
    },
    {
      Icon: Clock,
      title: 'Hours',
      sub: 'Monday – Saturday · 8am – 7pm',
      content: null,
      href: null,
    },
  ];

  return (
    <section id="booking" className="py-20 lg:py-28 bg-black text-white px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-4 py-1 bg-[#D4AF37]/20 rounded-full mb-4">
            <span className="text-sm font-body tracking-wide text-[#D4AF37] uppercase">Book Now</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-white mb-4">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="font-body text-lg text-gray-400">
            Schedule your appointment today or reach out with any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact cards */}
          <div className="space-y-4">
            {contactCards.map(({ Icon, title, sub, content, href }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#D4AF37] rounded-lg flex-shrink-0">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white mb-0.5">{title}</h3>
                    <p className="font-body text-gray-400 text-sm">{sub}</p>
                    {content && href && (
                      <a href={href} className="font-body text-[#D4AF37] hover:text-[#E8C868] transition-colors text-sm break-all">
                        {content}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Deposit info */}
            {selectedService?.depositAmount && (
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-5">
                <p className="font-body text-xs text-gray-400 mb-1">Deposit for selected service</p>
                <p className="font-heading font-extrabold text-3xl text-[#D4AF37]">${selectedService.depositAmount}</p>
              </div>
            )}
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
            {formState === 'success' ? (
              <div className="text-center py-10">
                <CheckCircle size={56} className="text-[#D4AF37] mx-auto mb-5" />
                <h3 className="font-heading font-bold text-2xl text-white mb-3">Booking Request Received!</h3>
                <p className="font-body text-gray-400 text-sm max-w-sm mx-auto">
                  We&apos;ll reach out within 24 hours to confirm your appointment and collect your deposit.
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
                    <p className="text-xs font-body text-red-300">Something went wrong. Please try again or contact us directly.</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
                    { name: 'phone', label: 'Phone', type: 'tel', placeholder: '(919) 000-0000' },
                  ].map(({ name, label, type, placeholder }) => (
                    <div key={name}>
                      <label className="block text-xs font-body font-medium text-white/60 mb-1.5 uppercase tracking-wide">{label} *</label>
                      <input
                        type={type} name={name} value={form[name as keyof typeof form]}
                        onChange={handleChange} required placeholder={placeholder}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-body text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-body font-medium text-white/60 mb-1.5 uppercase tracking-wide">Email *</label>
                  <input
                    type="email" name="email" value={form.email}
                    onChange={handleChange} required placeholder="you@example.com"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-body text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    <label className="block text-xs font-body font-medium text-white/60 mb-1.5 uppercase tracking-wide">Vehicle Type *</label>
                    <select
                      name="vehicleType" value={form.vehicleType} onChange={handleChange} required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-body text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors appearance-none"
                    >
                      <option value="" className="bg-gray-900">Select vehicle type...</option>
                      {vehicleTypes.map((v) => (
                        <option key={v} value={v} className="bg-gray-900">{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-body font-medium text-white/60 mb-1.5 uppercase tracking-wide">Preferred Date *</label>
                    <input
                      type="date" name="date" value={form.date}
                      onChange={handleChange} required min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-body text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-medium text-white/60 mb-1.5 uppercase tracking-wide">Your Address *</label>
                    <input
                      type="text" name="address" value={form.address}
                      onChange={handleChange} required placeholder="123 Main St, Durham, NC"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-body text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-body font-medium text-white/60 mb-1.5 uppercase tracking-wide">Additional Details</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Vehicle make/model/year, special requests, location notes..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-body text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit" disabled={formState === 'submitting'}
                  className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-black font-heading font-bold text-base uppercase tracking-wide py-4 rounded-lg transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Request Appointment'}
                </button>
                <p className="text-gray-400 text-xs text-center font-body">
                  We&apos;ll contact you within 24 hours to confirm your appointment.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
