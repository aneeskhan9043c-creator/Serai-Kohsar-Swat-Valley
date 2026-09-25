import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, ArrowUpRight } from 'lucide-react';
import { GalleryItem, GalleryCategory } from '../types';
import { GALLERY_ITEMS } from '../data/hotelData';
import { GalleryLightbox } from './GalleryLightbox';
import { Reveal } from './motion/Reveal';

export const GalleryGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<boolean>(false);

  // Exact categories required by user brief
  const categories: GalleryCategory[] = [
    'ALL',
    'HOTEL',
    'ROOMS',
    'RECEPTION',
    'DINING',
    'BATHROOM',
    'VIEWS',
    'COMMON AREAS',
  ];

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const displayedItems = expanded || activeCategory !== 'ALL' ? filteredItems : filteredItems.slice(0, 6);

  const handleOpenLightbox = (item: GalleryItem) => {
    const globalIdx = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
    setLightboxIndex(globalIdx !== -1 ? globalIdx : 0);
  };

  return (
    <section id="gallery" className="py-16 md:py-28 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-12">
          <div>
            <Reveal delay={0.05} y={16}>
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-stone-500 font-medium block mb-2">
                Visual Narrative
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
                Life at Serai Kohsar.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={16}>
            <p className="text-stone-600 text-xs sm:text-sm md:text-base max-w-md font-light leading-relaxed">
              Stone pavilions, morning mist filtering through deodar pines, and quiet moments across the retreat.
            </p>
          </Reveal>
        </div>

        {/* Clean Filter Tabs - with touch-friendly horizontal scroll on mobile */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-stone-200/80 text-xs font-medium tracking-wider uppercase -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-3.5 py-1.5 rounded transition-all cursor-pointer whitespace-nowrap text-[11px] sm:text-xs ${
                activeCategory === cat
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Asymmetric Layout with Mixed Proportions & AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, idx) => {
              // Asymmetric layout sizing
              let colSpan = 'sm:col-span-1 md:col-span-6';
              let heightClass = 'h-[280px] sm:h-[340px] md:h-[400px]';

              if (idx === 0) {
                colSpan = 'sm:col-span-2 md:col-span-8';
                heightClass = 'h-[320px] sm:h-[400px] md:h-[460px]';
              } else if (idx === 1) {
                colSpan = 'sm:col-span-1 md:col-span-4';
                heightClass = 'h-[320px] sm:h-[400px] md:h-[460px]';
              } else if (idx === 2) {
                colSpan = 'sm:col-span-1 md:col-span-4';
                heightClass = 'h-[300px] sm:h-[360px] md:h-[420px]';
              } else if (idx === 3) {
                colSpan = 'sm:col-span-2 md:col-span-8';
                heightClass = 'h-[300px] sm:h-[360px] md:h-[420px]';
              } else if (idx === 4) {
                colSpan = 'sm:col-span-1 md:col-span-6';
                heightClass = 'h-[280px] sm:h-[340px] md:h-[380px]';
              } else if (idx === 5) {
                colSpan = 'sm:col-span-1 md:col-span-6';
                heightClass = 'h-[280px] sm:h-[340px] md:h-[380px]';
              }

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.65,
                    delay: (idx % 3) * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => handleOpenLightbox(item)}
                  className={`group relative rounded-2xl md:rounded-3xl overflow-hidden border border-stone-200 bg-stone-100 cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.02)] ${colSpan} ${heightClass}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />

                  {/* Subtle dark gradient scrim at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Caption overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-stone-300 font-medium block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-base sm:text-xl text-white">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-stone-200/90 font-light mt-0.5 max-w-md line-clamp-1">
                        {item.caption}
                      </p>
                    </div>

                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white shrink-0 ml-2">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View Full Gallery Toggle */}
        {activeCategory === 'ALL' && (
          <div className="mt-8 sm:mt-12 text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-medium tracking-[0.16em] uppercase text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 rounded transition-all cursor-pointer shadow-sm active:bg-stone-200"
            >
              <span>{expanded ? 'Show Curated Selection' : `View Full Gallery (${GALLERY_ITEMS.length} Photographs)`}</span>
              <ArrowUpRight className="w-4 h-4 text-stone-600" />
            </button>
          </div>
        )}

        {/* Fullscreen Lightbox */}
        <GalleryLightbox
          items={GALLERY_ITEMS}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onSelectIndex={(newIdx) => setLightboxIndex(newIdx)}
        />
      </div>
    </section>
  );
};
