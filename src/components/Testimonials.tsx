import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/hotelData';
import { Reveal } from './motion/Reveal';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-28 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-stone-200/60 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-10 md:mb-16">
          <Reveal delay={0.05} y={16}>
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-stone-500 font-medium block mb-2">
              07 / Guest Reflections
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              Notes from the valley.
            </h2>
          </Reveal>
          <Reveal delay={0.15} y={16}>
            <p className="text-stone-600 text-xs sm:text-sm md:text-base font-light mt-2 sm:mt-3 leading-relaxed">
              Unfiltered thoughts from travellers who have stayed with us in Saidu Sharif.
            </p>
          </Reveal>
        </div>

        {/* 3 Editorial Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.75,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-6 sm:p-8 rounded-2xl md:rounded-3xl border border-stone-200/90 bg-white flex flex-col justify-between shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow"
            >
              <div>
                {/* Quotation mark */}
                <div className="font-serif text-3xl sm:text-4xl text-stone-300 leading-none mb-3 sm:mb-4 select-none">
                  “
                </div>

                <p className="text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed font-light mb-6 sm:mb-8">
                  {test.comment}
                </p>
              </div>

              {/* Author Details - Clean Unboxed Metadata */}
              <div className="pt-4 sm:pt-6 border-t border-stone-100 text-xs">
                <span className="font-serif text-sm sm:text-base text-stone-900 font-medium block mb-0.5 sm:mb-1">
                  {test.guestName}
                </span>
                <div className="flex items-center gap-1.5 sm:gap-2 text-stone-500 font-light text-[11px] sm:text-xs">
                  <span>{test.guestLocation}</span>
                  <span aria-hidden="true">·</span>
                  <span>{test.travelType}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
