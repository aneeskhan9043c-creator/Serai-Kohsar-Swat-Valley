import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, Users, Bed, Eye, ShieldCheck } from 'lucide-react';
import { Room } from '../types';
import { ROOMS } from '../data/hotelData';
import { Reveal } from './motion/Reveal';

interface RoomsSectionProps {
  onViewRoom: (room: Room) => void;
  onOpenBooking: (roomId: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  onViewRoom,
  onOpenBooking,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const itemWidth = scrollRef.current.offsetWidth * 0.85;
    if (itemWidth > 0) {
      const idx = Math.round(scrollLeft / itemWidth);
      setActiveMobileIndex(Math.min(Math.max(idx, 0), ROOMS.length - 1));
    }
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll('.mobile-room-card');
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
      setActiveMobileIndex(index);
    }
  };

  return (
    <section id="rooms" className="py-16 md:py-28 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-16">
          <div className="max-w-xl">
            <Reveal delay={0.05} y={16}>
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-stone-500 font-medium block mb-2">
                Room Types · Swat Retreat
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight">
                STAY YOUR WAY.
              </h2>
            </Reveal>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
            <Reveal delay={0.15} y={16}>
              <p className="text-stone-600 text-xs sm:text-sm md:text-base max-w-md font-light leading-relaxed">
                Choose from thoughtfully designed rooms for couples, families and longer stays.
              </p>
            </Reveal>

            {/* Mobile Carousel Indicators & Next/Prev Controls */}
            <div className="md:hidden flex items-center gap-1 shrink-0">
              <button
                onClick={() => scrollToCard(Math.max(0, activeMobileIndex - 1))}
                disabled={activeMobileIndex === 0}
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-700 disabled:opacity-30 disabled:cursor-not-allowed active:bg-stone-200 transition-colors"
                aria-label="Previous room type"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToCard(Math.min(ROOMS.length - 1, activeMobileIndex + 1))}
                disabled={activeMobileIndex === ROOMS.length - 1}
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-700 disabled:opacity-30 disabled:cursor-not-allowed active:bg-stone-200 transition-colors"
                aria-label="Next room type"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW: Horizontal Swipeable Room Carousel (85% width per card so next card peeks in) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden -mx-4 px-4"
        >
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 pt-1 px-1 touch-pan-x"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {ROOMS.map((room) => (
              <div
                key={room.id}
                className="mobile-room-card w-[85vw] max-w-[360px] shrink-0 snap-start bg-white rounded-2xl border border-stone-200/90 overflow-hidden flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
              >
                {/* Room Image */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone-100">
                  <img
                    src={room.image}
                    alt={room.name}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] uppercase tracking-wider text-stone-800 font-medium border border-stone-200/80">
                    Category {room.typeNumber} · {room.viewType}
                  </div>
                  <button
                    onClick={() => onViewRoom(room)}
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-900/80 text-white text-[11px] rounded backdrop-blur-sm"
                  >
                    <Eye className="w-3 h-3 text-stone-300" />
                    <span>View Room</span>
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-stone-400 mb-1.5 tracking-wider uppercase">
                      <span>Category {room.typeNumber}</span>
                      <span className="text-stone-700 font-medium font-serif italic text-xs">{room.priceFormatted}/night</span>
                    </div>

                    <h3 className="text-xl font-serif text-stone-900 font-normal mb-1">
                      {room.name}
                    </h3>

                    <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-2 mb-3">
                      {room.description}
                    </p>

                    {/* Room Specs */}
                    <div className="grid grid-cols-2 gap-2 py-3 border-y border-stone-100 text-xs text-stone-700 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span className="truncate">{room.occupancy}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span className="truncate">{room.bedType}</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-stone-500 mb-3">
                      <span className="text-stone-400 uppercase tracking-wider text-[9px] block mb-1">
                        Key Amenities
                      </span>
                      <p className="line-clamp-1">{room.amenities.slice(0, 4).join(' · ')}</p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onViewRoom(room)}
                      className="flex-1 py-3 text-center text-xs font-medium tracking-wider uppercase text-stone-800 bg-stone-100 active:bg-stone-200 rounded transition-colors"
                    >
                      View Room
                    </button>
                    <button
                      onClick={() => onOpenBooking(room.id)}
                      className="flex-1 py-3 text-center text-xs font-medium tracking-wider uppercase text-white bg-stone-900 active:bg-stone-800 rounded transition-colors inline-flex items-center justify-center gap-1"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3 text-stone-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Swipe indicator dots & count */}
          <div className="flex items-center justify-center gap-2 pt-3 text-xs text-stone-400">
            {ROOMS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className={`transition-all duration-300 rounded-full ${
                  activeMobileIndex === i ? 'w-6 h-1.5 bg-stone-900' : 'w-1.5 h-1.5 bg-stone-300'
                }`}
                aria-label={`Go to room category ${i + 1}`}
              />
            ))}
            <span className="text-[11px] font-mono ml-2 text-stone-500">
              4 Room Types · Swipe
            </span>
          </div>
        </motion.div>

        {/* DESKTOP VIEW: 4 Curated Room Categories in Spacious Editorial Cards */}
        <div className="hidden md:flex flex-col space-y-8 md:space-y-12">
          {ROOMS.map((room, idx) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-white rounded-2xl md:rounded-3xl border border-stone-200/90 overflow-hidden hover:border-stone-300 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Room Photography */}
                <div className="lg:col-span-7 relative overflow-hidden bg-stone-100 min-h-[340px] lg:min-h-[400px]">
                  <img
                    src={room.image}
                    alt={room.name}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-sm px-3 py-1 rounded text-xs uppercase tracking-wider text-stone-800 font-medium border border-stone-200/80">
                    Category {room.typeNumber} · {room.viewType}
                  </div>
                  <button
                    onClick={() => onViewRoom(room)}
                    className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF8F5]/90 hover:bg-[#FAF8F5] text-stone-900 text-xs tracking-wider rounded backdrop-blur-sm border border-stone-200 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-stone-600" />
                    <span>View Room Details</span>
                  </button>
                </div>

                {/* Room Content */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-400 mb-2.5 tracking-widest uppercase">
                      <span>Room Category {room.typeNumber}</span>
                      <span>{room.sizeM2} m² · {room.viewType}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-1.5 font-normal">
                      {room.name}
                    </h3>

                    <p className="text-xs text-stone-500 italic font-serif mb-3">
                      "{room.tagline}"
                    </p>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light mb-5">
                      {room.description}
                    </p>

                    {/* Key Specifications */}
                    <div className="grid grid-cols-2 gap-3 py-3.5 border-y border-stone-100 text-xs text-stone-700 mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-stone-400 shrink-0" />
                        <span>{room.occupancy}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4 text-stone-400 shrink-0" />
                        <span>{room.bedType}</span>
                      </div>
                      <div className="flex items-center gap-2 col-span-2 text-stone-600">
                        <ShieldCheck className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span>{room.bathroomType} · Dual Climate Control</span>
                      </div>
                    </div>

                    {/* Selected amenities */}
                    <div className="text-xs text-stone-500 leading-normal mb-6">
                      <span className="text-stone-400 uppercase tracking-wider block mb-1 text-[10px]">
                        Included Amenities
                      </span>
                      <p className="line-clamp-2">
                        {room.amenities.slice(0, 5).join(' · ')}
                      </p>
                    </div>
                  </div>

                  {/* Pricing & Action Buttons */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-stone-400 block">
                        Starting from
                      </span>
                      <span className="text-lg sm:text-xl font-serif font-medium text-stone-900">
                        {room.priceFormatted}
                      </span>
                      <span className="text-xs text-stone-400 ml-1 font-light">/ night</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() => onViewRoom(room)}
                        className="px-4 py-2.5 text-xs font-medium tracking-wider uppercase text-stone-700 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 rounded transition-colors cursor-pointer"
                      >
                        View Room
                      </button>
                      <button
                        onClick={() => onOpenBooking(room.id)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium tracking-wider uppercase text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors cursor-pointer shadow-sm hover:scale-[1.01] active:scale-[0.99]"
                      >
                        <span>Check Dates</span>
                        <ArrowRight className="w-3 h-3 text-stone-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
