'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What areas do you service?',
    answer:
      'We provide mobile detailing services throughout Durham, Chapel Hill, Raleigh, Cary, Morrisville, Hillsborough, and the entire Triangle area. If you\'re unsure if we serve your location, just give us a call!',
  },
  {
    question: 'How long does each service take?',
    answer:
      'A Basic Mobile Wash takes about 30–45 minutes. Gold Details run about 1–2 hours. Diamond Details typically take 3–4 hours depending on vehicle size and condition. We\'ll give you an accurate estimate when you book.',
  },
  {
    question: 'Do I need to provide water or electricity?',
    answer:
      'For most services, access to a water source at your location is helpful. We bring all supplies, tools, and equipment. Just let us know your setup when booking and we\'ll plan accordingly.',
  },
  {
    question: 'What if it rains on my appointment day?',
    answer:
      'We can work in light rain for interior services, but for exterior detailing we\'ll reschedule at no charge if weather conditions aren\'t ideal. Your deposit carries over to the new appointment.',
  },
  {
    question: 'Where is window tinting performed?',
    answer:
      'Window tint is done at a specific location we provide after your booking is confirmed. It\'s not a mobile service — but we make the process easy and straightforward.',
  },
  {
    question: 'What forms of payment do you accept?',
    answer:
      'We accept cash, check, Zelle, and Cash App. A deposit is collected when you book, and the remaining balance is due at the time of service.',
  },
  {
    question: 'What if I need to cancel or reschedule?',
    answer:
      'Please give us at least 24 hours\' notice. Deposits are non-refundable for cancellations with less than 24 hours\' notice. Deposits from timely cancellations can be applied to a future booking.',
  },
  {
    question: 'Do you detail RVs, boats, or fleet vehicles?',
    answer:
      'Absolutely. These require a custom quote based on vehicle size and condition. Reach out through our booking form or give us a call and we\'ll get back to you within 24 hours.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 rounded-full mb-4">
            <span className="text-sm font-body tracking-wide text-[#B8941F] uppercase">FAQ</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-lg text-gray-600">
            Everything you need to know about our mobile detailing service
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border px-6 bg-white transition-all duration-200 ${
                  isOpen ? 'border-[#D4AF37]/60 shadow-sm' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-heading font-semibold text-base leading-snug transition-colors ${
                      isOpen ? 'text-[#B8941F]' : 'text-gray-900'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-[#D4AF37] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-5 border-t border-gray-100">
                    <p className="font-body text-sm text-gray-600 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-sm text-gray-500 mb-3">Still have questions?</p>
          <a
            href="tel:9195911435"
            className="inline-flex items-center gap-2 font-heading font-semibold text-[#B8941F] hover:text-[#D4AF37] transition-colors"
          >
            Call us at (919) 591-1435
          </a>
        </div>
      </div>
    </section>
  );
}
