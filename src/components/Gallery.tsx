'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=600&q=80',
    full: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80',
    title: 'Professional detailing work',
  },
  {
    src: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=600&q=80',
    full: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80',
    title: 'Before and after detail',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80',
    full: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1200&q=80',
    title: 'Interior detailing',
  },
  {
    src: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=600&q=80',
    full: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=1200&q=80',
    title: 'Window tinting',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-light">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge section-badge-dark">Our Work</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-black">
            Gallery
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-brand-gold/0 group-hover:border-brand-gold/60 rounded-xl transition-all duration-300" />
              <span className="absolute bottom-3 left-3 text-white text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={galleryImages[selected].full}
            alt={galleryImages[selected].title}
            className="max-w-full max-h-[80vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-white/60 text-sm font-body">
            {galleryImages[selected].title}
          </p>
        </div>
      )}
    </section>
  );
}
