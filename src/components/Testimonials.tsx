import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Marcus Johnson',
    location: 'Durham, NC',
    rating: 5,
    review:
      "Best detailing service I've ever used! They came to my office and my car looks brand new. The attention to detail is incredible — absolutely worth every dollar.",
    service: 'Gold Detail',
  },
  {
    name: 'Sarah Mitchell',
    location: 'Chapel Hill, NC',
    rating: 5,
    review:
      "The convenience of mobile service combined with top-tier quality. My SUV was a mess after the kids — now it's pristine inside and out. Will book again!",
    service: 'Diamond Detail',
  },
  {
    name: 'David Chen',
    location: 'Raleigh, NC',
    rating: 5,
    review:
      "Professional team, premium results. The full detail had my car looking showroom fresh. Punctual, thorough, and they came right to my house. Highly recommend.",
    service: 'Diamond Detail',
  },
  {
    name: 'Jennifer Williams',
    location: 'Cary, NC',
    rating: 5,
    review:
      "Exceptional service from booking to completion. They're punctual, professional, and the results speak for themselves. Easiest car care experience I've had.",
    service: 'Basic Mobile Wash',
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 rounded-full mb-4">
            <span className="text-sm font-body tracking-wide text-[#B8941F] uppercase">Reviews</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-gray-900 mb-4">
            Trusted by Triangle Drivers
          </h2>
          <p className="font-body text-lg text-gray-600">
            Don&apos;t just take our word for it — hear from our satisfied customers
          </p>
        </div>

        {/* Aggregate rating */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
          <p className="font-heading font-bold text-2xl text-gray-900">5.0 out of 5</p>
          <p className="font-body text-gray-500 text-sm mt-1">Based on 200+ reviews</p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <StarRow count={review.rating} />

              <p className="font-body text-gray-700 text-sm leading-relaxed my-4">
                &ldquo;{review.review}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-heading font-semibold text-gray-900 text-sm">{review.name}</p>
                  <p className="font-body text-xs text-gray-400">{review.location}</p>
                </div>
                <span className="text-xs font-body font-medium text-[#B8941F] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full">
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
