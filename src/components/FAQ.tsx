'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import business from '@/data/business.json';

const faqs = [
  {
    q: 'Do you come to my location?',
    a: 'Yes! All detailing and wash services are performed at your location — home, office, or wherever is convenient. Window tint is the only exception; we provide a location after booking confirmation.',
  },
  {
    q: 'Is a deposit required?',
    a: 'Yes, a deposit is required to secure your booking. The deposit is applied toward the total service balance — it is not an extra charge. Deposit amounts vary by service.',
  },
  {
    q: 'How long does a detail take?',
    a: 'It depends on the service: Basic Wash takes 30–45 minutes, Gold Detail 1–2 hours, Diamond Detail 3–4 hours, and Black Diamond is a half-day commitment. Times may vary based on vehicle size and condition.',
  },
  {
    q: 'What areas do you service?',
    a: 'We serve the entire Triangle region including Durham, Raleigh, Cary, Chapel Hill, Morrisville, Apex, Wake Forest, Garner, Holly Springs, Fuquay-Varina, Hillsborough, and Pittsboro.',
  },
  {
    q: 'Do you detail RVs, boats, or fleet vehicles?',
    a: 'Absolutely. RVs, boats, fleet vehicles, and oversized trucks are priced with a custom quote based on size and condition. Contact us for details.',
  },
  {
    q: 'What products do you use?',
    a: 'We use professional-grade, paint-safe products including ceramic spray sealants, pH-balanced soaps, and premium interior cleaners. All products are hand-applied with care.',
  },
  {
    q: 'What if it rains on my appointment day?',
    a: 'We monitor the weather closely. If rain is expected, we\'ll reach out to reschedule at no cost. Your deposit remains valid for the rescheduled date.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section-light">
      <div className="section-inner max-w-3xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge section-badge-dark">Help</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-black">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border px-6 transition-all ${
                  isOpen
                    ? 'border-brand-gold/50 shadow-sm bg-brand-gold/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-heading font-semibold text-base pr-4 ${
                      isOpen ? 'text-brand-gold-dark' : 'text-brand-black'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-gray-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-5 text-sm text-gray-600 font-body leading-relaxed -mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <p className="text-center text-gray-500 text-sm font-body mt-10">
          Still have questions?{' '}
          <a
            href={`tel:${business.phoneRaw}`}
            className="text-brand-gold-dark font-semibold hover:underline"
          >
            Call us at {business.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
