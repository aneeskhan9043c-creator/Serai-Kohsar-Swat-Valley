import React from 'react';
import { motion } from 'motion/react';
import { Wifi, Car, Clock, UtensilsCrossed, Coffee, Wind, Users, Flame, Sparkles, ConciergeBell } from 'lucide-react';
import { FACILITIES } from '../data/hotelData';
import { Reveal } from './motion/Reveal';

export const Facilities: React.FC = () => {
  // Mapping discreet, refined icons
  const iconList = [
    Wifi,
    Car,
    Clock,
    ConciergeBell,
    UtensilsCrossed,
    Coffee,
    Wind,
    Users,
    Flame,
    Sparkles,
  ];

  return (
    <section id="facilities" className="py-16 md:py-28 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-10 sm:mb-14">
          <div className="lg:col-span-5">
            <Reveal delay={0.05} y={16}>
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-stone-500 font-medium block mb-2">
                Services & Comfort
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
                Hotel facilities.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15} y={16}>
              <p className="text-stone-600 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                Quietly considered for your peace of mind. Every amenity is planned around comfortable mountain living — from round-the-clock hot water and high-speed fiber internet to family suites and fresh valley dining.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Refined Facilities Grid: small subtle icons, dividers, clean whitespace, elegant typography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 pt-2">
          {FACILITIES.map((facility, idx) => {
            const IconComponent = iconList[idx] || Sparkles;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: (idx % 5) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-4 sm:p-5 rounded-xl border border-stone-200/80 bg-white/70 hover:bg-white transition-all hover:border-stone-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-stone-400">
                    0{idx + 1}
                  </span>
                  <IconComponent className="w-4 h-4 text-stone-500 stroke-[1.5]" />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-stone-900 tracking-tight mb-1">
                  {facility.name}
                </h3>
                <p className="text-[11px] text-stone-500 font-light leading-relaxed">
                  {facility.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
