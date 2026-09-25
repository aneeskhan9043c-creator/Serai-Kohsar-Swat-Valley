import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Compass, MapPin } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleScrollToRooms = (e: React.MouseEvent) => {
    e.preventDefault();
    const roomsSection = document.querySelector('#rooms');
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative px-3 sm:px-6 md:px-10 lg:px-12 pt-2 sm:pt-4 pb-12 sm:pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main cinematic visual container with portrait-adapted framing on mobile */}
        <div className="relative w-full h-[76vh] min-h-[490px] sm:min-h-[540px] max-h-[780px] rounded-2xl md:rounded-3xl overflow-hidden border border-stone-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          {/* Hero background image with subtle cinematic scale-in */}
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            src="/src/assets/images/hero_swat_valley_exterior_1790277922616.jpg"
            alt="Serai Kohsar boutique mountain retreat overlooking the lush green Swat valley"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-[center_40%] sm:object-center"
          />

          {/* Measured editorial gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-stone-950/20" />

          {/* Top location indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-10"
          >
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-900/40 backdrop-blur-sm border border-stone-100/15 text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase text-stone-200 font-medium">
              <MapPin className="w-3 h-3 text-stone-300" />
              {HOTEL_INFO.locationKicker}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-10 hidden sm:flex items-center gap-2 text-[11px] md:text-xs tracking-[0.16em] uppercase text-stone-300/80 font-medium"
          >
            <Compass className="w-3.5 h-3.5 text-stone-300" />
            <span>34.77° N, 72.36° E · {HOTEL_INFO.altitude}</span>
          </motion.div>

          {/* Center-bottom editorial typography lockup with staggered reveals */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 md:p-12 lg:p-16 z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-2"
            >
              <span className="text-xs sm:text-sm font-sans tracking-[0.24em] uppercase text-stone-300 font-medium">
                HOTEL · SWAT, PAKISTAN
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-[#FAF8F5] tracking-tight leading-[1.08] text-balance mb-3 sm:mb-4"
            >
              {HOTEL_INFO.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-base lg:text-lg text-stone-200 font-normal leading-relaxed max-w-xl mb-6 sm:mb-8"
            >
              {HOTEL_INFO.tagline}
            </motion.p>

            {/* Thumb-friendly CTAs: Primary Explore Rooms + Secondary Book Your Stay */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4"
            >
              <a
                href="#rooms"
                onClick={handleScrollToRooms}
                className="w-full sm:w-auto px-6 py-3.5 sm:py-3.5 text-xs font-medium tracking-[0.14em] uppercase text-stone-950 bg-[#FAF8F5] hover:bg-white active:bg-stone-200 border border-transparent rounded transition-all duration-200 shadow-sm cursor-pointer text-center inline-flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Explore Rooms</span>
                <ArrowDown className="w-3.5 h-3.5 text-stone-700" />
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3.5 sm:py-3.5 text-xs font-medium tracking-[0.14em] uppercase text-stone-100 hover:text-white bg-stone-900/60 active:bg-stone-900/80 border border-stone-200/30 rounded backdrop-blur-sm transition-all duration-200 cursor-pointer text-center hover:scale-[1.01] active:scale-[0.99]"
              >
                Book Your Stay
              </button>
            </motion.div>

            {/* Bottom location baseline tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-stone-300/20 flex items-center justify-between text-[11px] sm:text-xs text-stone-300/80 tracking-wider"
            >
              <span>{HOTEL_INFO.subLocation}</span>
              <span className="hidden sm:inline">Khyber Pakhtunkhwa, Northern Pakistan</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
