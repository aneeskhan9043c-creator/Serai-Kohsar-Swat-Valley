import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Utensils, Compass, Moon } from 'lucide-react';
import { DINING_INFO } from '../data/hotelData';
import { Reveal } from './motion/Reveal';

export const DiningSection: React.FC = () => {
  const diningFeatures = [
    {
      title: 'Artisanal Breakfast',
      subtitle: 'Included with morning views',
      desc: 'Farm eggs, stone-oven tandoor bread, orchard walnuts, Swati wildflower honey, and steaming green tea.',
      icon: Coffee,
    },
    {
      title: 'Local & Continental',
      subtitle: 'Fresh regional produce',
      desc: 'Shinwari-style grilled meats, river trout, slow-cooked lentils, along with balanced continental dining.',
      icon: Utensils,
    },
    {
      title: 'The Restaurant Verandah',
      subtitle: 'Open-air stone terrace',
      desc: 'Dine shaded by cedar branches overlooking the winding Swat river basin and green hillside orchards.',
      icon: Compass,
    },
    {
      title: 'In-Room & Balcony Dining',
      subtitle: 'Private suite service',
      desc: 'Quiet breakfast trays, afternoon tea, and evening dinners delivered directly to your personal balcony.',
      icon: Moon,
    },
  ];

  return (
    <section id="dining" className="py-16 md:py-28 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-12 md:mb-16">
          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-2xl md:rounded-3xl overflow-hidden border border-stone-200/90 shadow-[0_2px_16px_rgba(0,0,0,0.03)] bg-stone-100 relative group"
          >
            <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/11] w-full relative">
              <img
                src={DINING_INFO.image}
                alt="Boutique hotel restaurant terrace overlooking Swat valley"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-[#FAF8F5]/90 backdrop-blur-sm px-3 py-1.5 rounded text-[10px] sm:text-xs text-stone-700 tracking-wider border border-stone-200/80">
                Terrace Verandah · Daily Dining
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal delay={0.05} y={16}>
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-stone-500 font-medium block mb-2 sm:mb-3">
                On-Property Cuisine
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-[1.12] mb-3">
                {DINING_INFO.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.15} y={16}>
              <p className="text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed font-light mb-6">
                {DINING_INFO.description}
              </p>
            </Reveal>

            <Reveal delay={0.25} y={12}>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {diningFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="bg-white/80 p-3.5 rounded-xl border border-stone-200/70">
                      <Icon className="w-4 h-4 text-stone-500 mb-1.5" />
                      <h4 className="font-serif text-sm text-stone-900 font-medium">{feat.title}</h4>
                      <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
