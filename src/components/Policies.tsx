import { CreditCard, Calendar } from 'lucide-react';
import business from '@/data/business.json';

export default function Policies() {
  return (
    <section id="policies" className="py-16 lg:py-20 bg-gray-50 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 rounded-full mb-4">
            <span className="text-sm font-body tracking-wide text-[#B8941F] uppercase">Policies</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900">
            Simple, Transparent Policies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Deposit Policy */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                <CreditCard size={18} className="text-black" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900">Deposit &amp; Payment</h3>
            </div>
            <p className="font-body text-sm text-gray-600 leading-relaxed mb-5">
              A deposit is required at the time of booking to secure your appointment. This deposit is applied directly to your total — it&apos;s not an extra charge.
            </p>
            <ul className="space-y-3">
              {[
                'Deposit collected at booking',
                'Deposit applied toward total balance',
                'Remaining balance due at service completion',
                'Custom quotes require approval before deposit',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37] mt-0.5 flex-shrink-0 font-bold">›</span>
                  <span className="font-body text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-gray-100">
              <p className="text-xs font-body text-gray-400">Accepted payments:</p>
              <p className="text-sm font-body text-gray-700 mt-1">{business.paymentMethods.join(' · ')}</p>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar size={18} className="text-black" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900">Cancellation &amp; Rescheduling</h3>
            </div>
            <p className="font-body text-sm text-gray-600 leading-relaxed mb-5">
              We know plans change. Here&apos;s how we handle it:
            </p>
            <ul className="space-y-3">
              {[
                { label: '24+ Hours\' Notice', detail: 'Reschedule or cancel with no penalty. Deposit applies to a future booking.', highlight: true },
                { label: 'Less Than 24 Hours', detail: 'Deposits are non-refundable for late cancellations.', highlight: false },
                { label: 'No-Shows', detail: 'Treated as a late cancellation. Deposit is forfeited.', highlight: false },
              ].map(({ label, detail, highlight }) => (
                <li key={label} className={`p-4 rounded-xl border ${highlight ? 'border-[#D4AF37]/40 bg-[#D4AF37]/5' : 'border-gray-100 bg-gray-50'}`}>
                  <p className={`font-heading font-semibold text-sm mb-1 ${highlight ? 'text-[#B8941F]' : 'text-gray-700'}`}>{label}</p>
                  <p className="font-body text-xs text-gray-500">{detail}</p>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-gray-100">
              <p className="text-xs font-body text-gray-400">
                To cancel or reschedule, call or text{' '}
                <a href="tel:9195911435" className="text-[#B8941F] hover:text-[#D4AF37] transition-colors">
                  {business.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
