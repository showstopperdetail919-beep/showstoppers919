import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Marcus T.',
    text: 'Absolutely incredible work. My car looks better than when I bought it. The attention to detail is unmatched.',
    service: 'Diamond Detail',
  },
  {
    name: 'Jessica R.',
    text: 'Had the Diamond Detail done on my SUV — the paint correction made it look brand new. Professional, punctual, and worth every penny.',
    service: 'Diamond Detail',
  },
  {
    name: 'David K.',
    text: 'Best detailing service in the Triangle. They came to my office and had my car looking showroom-ready by the end of the day.',
    service: 'Gold Detail',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className="fill-brand-gold text-brand-gold"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="section-dark">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge section-badge-gold">Testimonials</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
            What Our Clients Say
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-brand-charcoal border border-brand-gray rounded-2xl p-6 hover:border-brand-gold/30 transition-all"
            >
              <Quote size={24} className="text-brand-gold/20 mb-3" />
              <Stars />
              <p className="text-white/70 font-body text-sm leading-relaxed mb-4 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="font-heading font-semibold text-white text-sm">
                  {review.name}
                </span>
                <span className="text-xs font-body text-brand-gold/60 bg-brand-gold/10 px-2.5 py-1 rounded-full">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
