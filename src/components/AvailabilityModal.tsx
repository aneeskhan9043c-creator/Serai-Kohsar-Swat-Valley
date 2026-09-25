import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, DoorClosed, Phone, MessageSquare, Check, Copy, ArrowRight, Bed, ShieldAlert } from 'lucide-react';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedRoomId?: string;
}

export const AvailabilityModal: React.FC<AvailabilityModalProps> = ({
  isOpen,
  onClose,
  preSelectedRoomId,
}) => {
  const today = new Date();
  const defaultCheckInDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  const defaultCheckOutDate = new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000);

  const formatDateValue = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(formatDateValue(defaultCheckInDate));
  const [checkOut, setCheckOut] = useState<string>(formatDateValue(defaultCheckOutDate));
  const [guests, setGuests] = useState<string>('2 Adults');
  const [roomsCount, setRoomsCount] = useState<number>(1);
  const [selectedRoomId, setSelectedRoomId] = useState<string>(preSelectedRoomId || ROOMS[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (preSelectedRoomId) {
      setSelectedRoomId(preSelectedRoomId);
    }
  }, [preSelectedRoomId]);

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
  const calculatedNights = Math.max(1, Math.round(timeDiff / (1000 * 3600 * 24)));

  const selectedRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];

  const formatReadable = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  // Structured prefilled WhatsApp message matching user prompt
  const whatsappMessage = `Assalam o Alaikum, I would like to inquire about a ${selectedRoom.name} at ${HOTEL_INFO.name} from ${formatReadable(checkIn)} to ${formatReadable(checkOut)} for ${guests} and ${roomsCount} room${roomsCount > 1 ? 's' : ''}. Kindly share current availability and booking instructions.`;

  const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(whatsappMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
        {/* Soft Backdrop Fade */}
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
          className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto bg-[#FAF8F5] rounded-t-3xl sm:rounded-3xl border border-stone-200 shadow-2xl p-5 sm:p-8 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header & Close */}
          <div className="flex items-start justify-between pb-4 sm:pb-5 border-b border-stone-200">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 font-medium block mb-1">
                Portfolio Demo · Reservation Inquiry
              </span>
              <h2 className="text-xl sm:text-3xl font-serif text-stone-900">
                CHECK AVAILABILITY
              </h2>
              <div className="inline-flex items-center gap-1.5 mt-1 text-[11px] text-stone-500 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                <ShieldAlert className="w-3 h-3 text-stone-400" />
                <span>Front-end demo only · Inquiries are routed directly to reception</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center text-stone-500 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Section 1: Dates & Occupancy Parameters */}
          <div className="py-5 border-b border-stone-200">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-3 flex items-center justify-between">
              <span>1. Stay Parameters</span>
              <span className="text-stone-500 font-normal font-sans">
                {calculatedNights} night{calculatedNights > 1 ? 's' : ''}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              {/* Check-in */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-stone-500 mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-stone-400" /> Check-in Date
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs font-medium text-stone-900 bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-800 transition-colors"
                />
              </div>

              {/* Check-out */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-stone-500 mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-stone-400" /> Check-out Date
                </label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs font-medium text-stone-900 bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-800 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Guests */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-stone-500 mb-1 flex items-center gap-1">
                  <Users className="w-3 h-3 text-stone-400" /> Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs font-medium text-stone-900 bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-800 transition-colors cursor-pointer"
                >
                  <option value="1 Adult">1 Adult</option>
                  <option value="2 Adults">2 Adults</option>
                  <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                  <option value="2 Adults, 2 Children">2 Adults, 2 Children</option>
                  <option value="3 Adults">3 Adults</option>
                  <option value="4 Adults">4 Adults (Family)</option>
                </select>
              </div>

              {/* Rooms */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-stone-500 mb-1 flex items-center gap-1">
                  <DoorClosed className="w-3 h-3 text-stone-400" /> Rooms
                </label>
                <select
                  value={roomsCount}
                  onChange={(e) => setRoomsCount(Number(e.target.value))}
                  className="w-full px-3 py-2.5 text-xs font-medium text-stone-900 bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-800 transition-colors cursor-pointer"
                >
                  <option value={1}>1 Room</option>
                  <option value={2}>2 Rooms</option>
                  <option value={3}>3 Rooms</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: ROOM OPTIONS */}
          <div className="py-5 border-b border-stone-200">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-3">
              <span>2. ROOM OPTIONS</span>
            </div>

            <div className="space-y-2.5">
              {ROOMS.map((room) => {
                const isSelected = room.id === selectedRoomId;

                return (
                  <div
                    key={room.id}
                    onClick={() => setSelectedRoomId(room.id)}
                    className={`p-3 sm:p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isSelected
                        ? 'border-stone-900 bg-stone-100/90 shadow-sm'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={room.image}
                        alt={room.name}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif text-base sm:text-lg text-stone-900 font-medium">
                            {room.name}
                          </h4>
                          {isSelected && (
                            <span className="text-[9px] uppercase tracking-wider text-stone-900 font-semibold px-2 py-0.5 bg-stone-200 rounded">
                              Selected
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-stone-500">
                          {room.occupancy} · {room.bedType} · {room.sizeM2} m²
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center sm:flex-col sm:items-end justify-between border-t sm:border-t-0 pt-2 sm:pt-0 border-stone-100">
                      <span className="text-xs text-stone-700 font-medium">From {room.priceFormatted} / night</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedRoomId(room.id);
                        }}
                        className={`px-3 py-1.5 text-[11px] uppercase tracking-wider rounded font-medium transition-colors ${
                          isSelected
                            ? 'bg-stone-900 text-white'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                      >
                        {isSelected ? 'SELECTED' : 'SELECT ROOM'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: REQUEST THIS ROOM (Inquiry) */}
          <div className="pt-5 pb-2">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-2">
              <span>3. REQUEST THIS ROOM · {selectedRoom.name}</span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200 mb-4">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-stone-500 font-light">
                  {calculatedNights} night{calculatedNights > 1 ? 's' : ''} ({formatReadable(checkIn)} to {formatReadable(checkOut)})
                </span>
                <span className="font-serif font-medium text-stone-900 text-sm">
                  {selectedRoom.name} ({guests}, {roomsCount} room)
                </span>
              </div>

              <div className="text-[11px] font-mono text-stone-800 bg-stone-50 p-2.5 rounded border border-stone-200/80 leading-relaxed mb-2 max-h-24 overflow-y-auto">
                "{whatsappMessage}"
              </div>

              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <span>Inquiry message for Swat front desk</span>
                <button
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1 text-stone-700 hover:text-stone-950 font-medium cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-stone-400" />
                      <span>Copy Inquiry Text</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Action CTAs: WHATSAPP HOTEL & CALL HOTEL */}
            <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs uppercase tracking-wider font-medium text-white bg-stone-900 active:bg-stone-800 rounded transition-colors shadow-sm cursor-pointer text-center hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WHATSAPP HOTEL</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-300" />
              </a>

              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs uppercase tracking-wider font-medium text-stone-800 bg-stone-100 active:bg-stone-200 border border-stone-300 rounded transition-colors cursor-pointer text-center hover:scale-[1.01] active:scale-[0.99]"
              >
                <Phone className="w-4 h-4 text-stone-600" />
                <span>CALL HOTEL</span>
              </a>
            </div>

            <p className="text-center text-[10px] text-stone-400 mt-3 font-light">
              * Demonstration booking flow. No instant payment required. Room requests are sent directly to the hotel management team in Saidu Sharif, Swat for manual confirmation.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
