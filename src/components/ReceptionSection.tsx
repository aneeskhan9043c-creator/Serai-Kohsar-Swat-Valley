import React from 'react';
import { motion } from 'motion/react';
import { Clock, KeyRound, Phone, ShieldCheck } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { Reveal } from './motion/Reveal';

interface ReceptionSectionProps {
  onContactReception: () => void;
}

export const ReceptionSection: React.FC<ReceptionSectionProps> = ({ onContactReception }) => {
  return (
    <section id="reception" className="py-16 md:py-28 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* LEFT: Large realistic reception/lobby photograph */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-2xl md:rounded-3xl overflow-hidden border border-stone-200/90 shadow-[0_2px_16px_rgba(0,0,0,0.03)] bg-stone-100 relative group"
          >
            <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/12] w-full relative">
              <img
                src="/images/gallery_lobby_lounge_1790278015718.jpg"
                alt="Hotel Reception and Fireside Lounge at Serai Kohsar, Swat"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-[#FAF8F5]/90 backdrop-blur-sm px-3 py-1.5 rounded text-[10px] sm:text-xs text-stone-700 tracking-wider border border-stone-200/80">
                Lobby & Reception · Saidu Sharif
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Editorial Reception Story & Timing */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal delay={0.05} y={16}>
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-stone-500 font-medium block mb-2 sm:mb-3">
                Arrive & Settle In
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-[1.12] mb-4">
                A warm welcome to Swat.
              </h2>
            </Reveal>

            <Reveal delay={0.15} y={16}>
              <p className="text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed font-light mb-6">
                From the moment you arrive on the Saidu Sharif ridge, our team assists with vehicle parking,
                luggage, and check-in. Relax by the fireside lounge with a warm cup of cardamoms green tea
                while we prepare your suite keys and orient you to the valley.
              </p>
            </Reveal>

            {/* Subtle Arrival Information */}
            <Reveal delay={0.25} y={12}>
              <div className="bg-white/80 rounded-2xl border border-stone-200/80 p-4 sm:p-5 mb-6 divide-y divide-stone-100 text-xs text-stone-700">
                <div className="flex items-center justify-between pb-3">
                  <div className="flex items-center gap-2 text-stone-600">
                    <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>Check-in Timing</span>
                  </div>
                  <span className="font-medium text-stone-900">{HOTEL_INFO.checkInTime}</span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2 text-stone-600">
                    <KeyRound className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>Check-out Timing</span>
                  </div>
                  <span className="font-medium text-stone-900">{HOTEL_INFO.checkOutTime}</span>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center gap-2 text-stone-600">
                    <ShieldCheck className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>Front Desk</span>
                  </div>
                  <span className="font-medium text-stone-900">{HOTEL_INFO.frontDeskSchedule}</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3} y={10}>
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={onContactReception}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium tracking-wider uppercase text-stone-900 bg-white hover:bg-stone-100 active:bg-stone-200 border border-stone-300 rounded transition-colors cursor-pointer shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-stone-600" />
                  <span>Contact Reception</span>
                </button>

                <span className="text-[10px] text-stone-400 italic">
                  * Demo check-in schedules
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
