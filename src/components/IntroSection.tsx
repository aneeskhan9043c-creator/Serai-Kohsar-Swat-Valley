import React from 'react';
import { motion } from 'motion/react';
import { Reveal } from './motion/Reveal';

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Split Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-10 md:mb-16">
          <div className="lg:col-span-6">
            <Reveal delay={0.05} y={16}>
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-stone-500 font-medium block mb-2 sm:mb-3">
                01 / Architecture & Atmosphere
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-[1.12] text-balance">
                Wake up to the hills.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between pt-1 sm:pt-2">
            <Reveal delay={0.15} y={16}>
              <p className="text-stone-700 text-xs sm:text-base md:text-lg leading-relaxed font-light mb-6">
                Serai Kohsar is conceived as an architectural dialogue with the Swat valley. Built with locally quarried
                river stone and mature deodar timber, the retreat is designed around stillness, natural cross-breezes,
                and panoramic views of the forested ridges that define northern Pakistan.
              </p>
            </Reveal>

            <Reveal delay={0.25} y={12}>
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-5 border-t border-stone-200 text-xs text-stone-600">
                <div>
                  <span className="block uppercase tracking-wider text-stone-400 mb-0.5 text-[10px] sm:text-xs">Architecture</span>
                  <span className="font-medium text-stone-800 text-[11px] sm:text-xs">Stone & Timber</span>
                </div>
                <div>
                  <span className="block uppercase tracking-wider text-stone-400 mb-0.5 text-[10px] sm:text-xs">Setting</span>
                  <span className="font-medium text-stone-800 text-[11px] sm:text-xs">Saidu Sharif Ridge</span>
                </div>
                <div>
                  <span className="block uppercase tracking-wider text-stone-400 mb-0.5 text-[10px] sm:text-xs">Climate</span>
                  <span className="font-medium text-stone-800 text-[11px] sm:text-xs">Alpine Breeze</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Large Rounded Architectural Image Container with Soft Scale & Fade */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-stone-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)] bg-stone-100"
        >
          <div className="aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] w-full relative">
            <img
              src="/images/intro_valley_window_room_1790277942519.jpg"
              alt="Minimalist room framing mountain views through floor-to-ceiling glass"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle editorial photo caption */}
            <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-[#FAF8F5]/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded text-[10px] sm:text-xs text-stone-700 tracking-wider border border-stone-200/80">
              Fig. 1.0 — Morning Light in the Valley Suite
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
