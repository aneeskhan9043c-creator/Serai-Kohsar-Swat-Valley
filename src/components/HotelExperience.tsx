import React from 'react';
import { motion } from 'motion/react';
import { HOTEL_EXPERIENCE_ITEMS } from '../data/hotelData';
import { Reveal } from './motion/Reveal';

export const HotelExperience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-28 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-stone-200/60 bg-[#F6F3EC]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <Reveal delay={0.05} y={16}>
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-stone-500 font-medium block mb-2">
              Life At The Retreat
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-[1.12]">
              What staying here feels like.
            </h2>
          </Reveal>
          <Reveal delay={0.15} y={16}>
            <p className="text-stone-600 text-xs sm:text-sm md:text-base font-light mt-3 leading-relaxed">
              Quiet fireside hours, unhurried mountain breakfasts overlooking terraced orchards, and cedar balconies open to the northern breeze.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric 3-Part Editorial Composition (Not a generic uniform 3-column grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Tall Feature Portrait (Lobby & Fireside Reading) - 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-white rounded-2xl md:rounded-3xl border border-stone-200/90 overflow-hidden flex flex-col justify-between shadow-sm group"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] w-full overflow-hidden bg-stone-100">
              <img
                src={HOTEL_EXPERIENCE_ITEMS[0].image}
                alt={HOTEL_EXPERIENCE_ITEMS[0].title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] uppercase tracking-wider text-stone-700 font-medium border border-stone-200">
                01 · Social Hearth
              </div>
            </div>

            <div className="p-5 sm:p-7 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif text-stone-900 mb-2">
                  {HOTEL_EXPERIENCE_ITEMS[0].title}
                </h3>
                <p className="text-xs text-stone-500 font-serif italic mb-3">
                  "{HOTEL_EXPERIENCE_ITEMS[0].tagline}"
                </p>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {HOTEL_EXPERIENCE_ITEMS[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cards 2 & 3: Stacked Asymmetric Horizontal Cards (Verandah Dining & Balcony View) - 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Card 2: Dining Verandah */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl md:rounded-3xl border border-stone-200/90 overflow-hidden grid grid-cols-1 sm:grid-cols-12 shadow-sm group"
            >
              <div className="sm:col-span-6 relative aspect-[16/10] sm:aspect-auto sm:min-h-[240px] overflow-hidden bg-stone-100">
                <img
                  src={HOTEL_EXPERIENCE_ITEMS[1].image}
                  alt={HOTEL_EXPERIENCE_ITEMS[1].title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] uppercase tracking-wider text-stone-700 font-medium border border-stone-200">
                  02 · Terrace Dining
                </div>
              </div>
              <div className="sm:col-span-6 p-5 sm:p-6 flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-serif text-stone-900 mb-1.5">
                  {HOTEL_EXPERIENCE_ITEMS[1].title}
                </h3>
                <p className="text-xs text-stone-500 font-serif italic mb-2">
                  "{HOTEL_EXPERIENCE_ITEMS[1].tagline}"
                </p>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {HOTEL_EXPERIENCE_ITEMS[1].description}
                </p>
              </div>
            </motion.div>

            {/* Card 3: Balcony & Valley Outlook */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl md:rounded-3xl border border-stone-200/90 overflow-hidden grid grid-cols-1 sm:grid-cols-12 shadow-sm group"
            >
              <div className="sm:col-span-6 relative aspect-[16/10] sm:aspect-auto sm:min-h-[240px] overflow-hidden bg-stone-100">
                <img
                  src={HOTEL_EXPERIENCE_ITEMS[2].image}
                  alt={HOTEL_EXPERIENCE_ITEMS[2].title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] uppercase tracking-wider text-stone-700 font-medium border border-stone-200">
                  03 · Balcony & Valley
                </div>
              </div>
              <div className="sm:col-span-6 p-5 sm:p-6 flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-serif text-stone-900 mb-1.5">
                  {HOTEL_EXPERIENCE_ITEMS[2].title}
                </h3>
                <p className="text-xs text-stone-500 font-serif italic mb-2">
                  "{HOTEL_EXPERIENCE_ITEMS[2].tagline}"
                </p>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {HOTEL_EXPERIENCE_ITEMS[2].description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
