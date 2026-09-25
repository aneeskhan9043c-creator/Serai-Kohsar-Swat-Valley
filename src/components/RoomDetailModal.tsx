import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Bed, Users, Square, Compass, Calendar, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Room } from '../types';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onOpenBooking: (roomId: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onOpenBooking,
}) => {
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (room) {
      setActiveImage(room.image);
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [room, onClose]);

  if (!room) return null;

  const allImages = [room.image, ...room.secondaryImages];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 md:p-8">
        {/* Soft Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto bg-[#FAF8F5] rounded-t-3xl sm:rounded-3xl border border-stone-200 shadow-2xl flex flex-col z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Floating Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-[#FAF8F5]/90 hover:bg-white text-stone-800 rounded-full border border-stone-200 shadow-md active:scale-95 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Gallery Viewer Area */}
          <div className="relative w-full bg-stone-900 shrink-0">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative">
              <img
                src={activeImage || room.image}
                alt={room.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
            </div>

            {/* Thumbnail Strip */}
            {allImages.length > 1 && (
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-14 h-11 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeImage === img ? 'border-white scale-105 shadow-md' : 'border-stone-400/50 opacity-80'
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Room Details Body */}
          <div className="p-5 sm:p-8 md:p-10 flex-1 overflow-y-auto">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-5 border-b border-stone-200">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 font-medium block mb-1">
                  Room Category {room.typeNumber} · Swat Valley
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-stone-900">
                  {room.name}
                </h2>
              </div>
              <div>
                <span className="text-[10px] sm:text-xs text-stone-400 block uppercase tracking-wider">
                  Starting price
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-stone-900">
                    From {room.priceFormatted}
                  </span>
                  <span className="text-xs text-stone-500 font-light">/ night</span>
                </div>
              </div>
            </div>

            {/* Required Room Specifications: Guests, Bed, Approx Area, Private Bathroom */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-5 border-b border-stone-200 text-xs text-stone-700">
              <div className="bg-white/80 p-3 rounded-xl border border-stone-200/60">
                <span className="text-stone-400 block mb-1 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-stone-400" /> Capacity
                </span>
                <span className="font-medium text-stone-900">{room.occupancy}</span>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-stone-200/60">
                <span className="text-stone-400 block mb-1 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                  <Bed className="w-3.5 h-3.5 text-stone-400" /> Bedding
                </span>
                <span className="font-medium text-stone-900">{room.bedType}</span>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-stone-200/60">
                <span className="text-stone-400 block mb-1 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                  <Square className="w-3.5 h-3.5 text-stone-400" /> Size
                </span>
                <span className="font-medium text-stone-900">Approx. {room.sizeM2} m²</span>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-stone-200/60">
                <span className="text-stone-400 block mb-1 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-stone-400" /> Bath
                </span>
                <span className="font-medium text-stone-900">{room.bathroomType}</span>
              </div>
            </div>

            {/* Narrative Long Description */}
            <div className="py-5 border-b border-stone-200">
              <h4 className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold mb-2">
                About This Room Type
              </h4>
              <p className="text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                {room.longDescription}
              </p>
            </div>

            {/* Standardized Amenities Grid */}
            <div className="py-5 border-b border-stone-200">
              <h4 className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold mb-3">
                Room Amenities
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm text-stone-700">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Notice */}
            <div className="py-4 text-[11px] text-stone-400 italic">
              * Demo room category. Individual suites may have slight variations in layout, timber grain, and terrace orientation.
            </div>
          </div>

          {/* Sticky Mobile/Desktop Booking CTA Bar */}
          <div className="sticky bottom-0 bg-[#FAF8F5] border-t border-stone-200/90 p-4 sm:p-5 pb-[max(1rem,env(safe-area-inset-bottom))] flex items-center justify-between gap-3 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]">
            <div className="hidden sm:block">
              <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Estimated Base Rate</span>
              <span className="text-base font-serif font-medium text-stone-900">{room.priceFormatted} / night</span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-4 py-3 text-xs uppercase tracking-wider text-stone-600 hover:text-stone-900 transition-colors"
              >
                Close
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenBooking(room.id);
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-widest font-medium text-white bg-stone-900 active:bg-stone-800 rounded transition-colors shadow-sm cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4 text-stone-300" />
                <span>CHECK AVAILABILITY</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-300" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
