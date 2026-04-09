'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1763789381416-7b94c5f97560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800',
    title: 'Exterior Detail',
  },
  {
    url: 'https://images.unsplash.com/photo-1557245526-45dc0f1a8745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800',
    title: 'Interior Perfection',
  },
  {
    url: 'https://images.unsplash.com/photo-1644147653376-18ad26cda4e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800',
    title: 'Premium Wash',
  },
  {
    url: 'https://images.unsplash.com/photo-1772391032510-34fb90537b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800',
    title: 'Window Tinting',
  },
  {
    url: 'https://images.unsplash.com/photo-1760510926102-8a9af25e6cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800',
    title: 'Wheel Detail',
  },
  {
    url: 'https://images.unsplash.com/photo-1761934658331-2e00b20dc6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800',
    title: 'Show Stopper Shine',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 rounded-full mb-4">
            <span className="text-sm font-body tracking-wide text-[#B8941F] uppercase">Gallery</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-gray-900 mb-4">
            Our Work Speaks For Itself
          </h2>
          <p className="font-body text-lg text-gray-600">
            See the Show Stopper difference in every detail
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setSelected(index)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-heading font-semibold text-sm">{image.title}</p>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selected !== null && (
          <div
            className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/70 hover:text-[#D4AF37] transition-colors p-2"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <div
              className="relative max-w-5xl w-full rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={galleryImages[selected].url.replace('w=800', 'w=1200')}
                alt={galleryImages[selected].title}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-white font-heading font-semibold">{galleryImages[selected].title}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
