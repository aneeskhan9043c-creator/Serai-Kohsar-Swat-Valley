import React from 'react';
import { motion } from 'motion/react';
import { Compass, MapPin, ExternalLink } from 'lucide-react';
import { DESTINATION_PLACES } from '../data/hotelData';
import { Reveal } from './motion/Reveal';

export const DestinationSection: React.FC = () => {
  return (
    <section id="destination" className="py-16 md:py-28 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-stone-200/60 overflow-hidden bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <Reveal delay={0.05} y={16}>
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-stone-500 font-medium block mb-2">
              The Surrounding Valley
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-[1.12]">
              DISCOVER SWAT.
            </h2>
          </Reveal>
          <Reveal delay={0.15} y={16}>
            <p className="text-stone-600 text-xs sm:text-sm md:text-base font-light mt-3 leading-relaxed">
              Serai Kohsar is your tranquil base in Saidu Sharif. Step beyond our gates to explore 2,000 years of Gandhara heritage, emerald bazaars, and roaring alpine rivers.
            </p>
          </Reveal>
        </div>

        {/* 6 Destination Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {DESTINATION_PLACES.map((place, idx) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.65,
                delay: (idx % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-5 sm:p-6 rounded-2xl md:rounded-3xl border border-stone-200/80 bg-white flex flex-col justify-between hover:border-stone-300 transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-stone-400 mb-2 font-mono">
                  <span>0{idx + 1}</span>
                  <span className="text-stone-500 font-sans uppercase tracking-wider">{place.highlight}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif text-stone-900 font-normal mb-1">
                  {place.name}
                </h3>

                <p className="text-xs text-stone-500 italic font-serif mb-3">
                  "{place.tagline}"
                </p>

                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-4">
                  {place.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-stone-500">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                <span>Swat District · Khyber Pakhtunkhwa</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
