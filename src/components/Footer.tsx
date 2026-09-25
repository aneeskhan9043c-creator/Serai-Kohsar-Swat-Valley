import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] pt-14 md:pt-24 pb-28 sm:pb-14 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-stone-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Invitation Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-12 sm:pb-16 border-b border-stone-800 gap-6 sm:gap-8">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-stone-400 font-medium block mb-2">
              Boutique Hospitality · Swat Valley
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#FAF8F5] tracking-tight">
              Begin your journey to the hills.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-xs font-medium tracking-[0.16em] uppercase text-stone-950 bg-[#FAF8F5] hover:bg-white active:bg-stone-200 rounded transition-colors cursor-pointer"
            >
              <span>Book Your Stay</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-900" />
            </button>
          </div>
        </div>

        {/* Multi-column Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 py-12 sm:py-16 border-b border-stone-800 text-xs">
          {/* Col 1: Wordmark & Address */}
          <div className="lg:col-span-5">
            <span className="font-serif text-xl sm:text-2xl uppercase tracking-[0.18em] block text-[#FAF8F5] mb-3 sm:mb-4">
              {HOTEL_INFO.name}
            </span>
            <p className="text-stone-400 font-light leading-relaxed max-w-sm mb-3">
              A quiet architectural sanctuary framed by the cedar-clad slopes of Saidu Sharif, Swat.
            </p>
            <p className="text-stone-400 font-light leading-relaxed max-w-sm">
              {HOTEL_INFO.fullAddress}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-2">
            <span className="uppercase tracking-widest text-stone-400 font-semibold block mb-3">
              Navigation
            </span>
            <div><a href="#reception" className="text-stone-300 hover:text-white transition-colors">Arrival & Lobby</a></div>
            <div><a href="#experience" className="text-stone-300 hover:text-white transition-colors">Hotel Experience</a></div>
            <div><a href="#rooms" className="text-stone-300 hover:text-white transition-colors">Room Types</a></div>
            <div><a href="#dining" className="text-stone-300 hover:text-white transition-colors">Verandah Dining</a></div>
            <div><a href="#facilities" className="text-stone-300 hover:text-white transition-colors">Facilities</a></div>
            <div><a href="#gallery" className="text-stone-300 hover:text-white transition-colors">Gallery</a></div>
            <div><a href="#destination" className="text-stone-300 hover:text-white transition-colors">Discover Swat</a></div>
            <div><a href="#location" className="text-stone-300 hover:text-white transition-colors">Location & Map</a></div>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="lg:col-span-3 space-y-2">
            <span className="uppercase tracking-widest text-stone-400 font-semibold block mb-3">
              Inquiries & Desk
            </span>
            <div>
              <span className="text-stone-400 block text-[11px]">Reservations Desk:</span>
              <a href={`tel:${HOTEL_INFO.phone}`} className="text-stone-300 hover:text-white transition-colors font-medium">
                {HOTEL_INFO.phoneDisplay}
              </a>
            </div>
            <div>
              <span className="text-stone-400 block text-[11px]">Direct WhatsApp:</span>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-white transition-colors"
              >
                +92 (300) 904-3000
              </a>
            </div>
            <div>
              <span className="text-stone-400 block text-[11px]">Email Concierge:</span>
              <a href={`mailto:${HOTEL_INFO.email}`} className="text-stone-300 hover:text-white transition-colors">
                {HOTEL_INFO.email}
              </a>
            </div>
            <div className="pt-2 text-stone-500 text-[11px]">
              <span>Front Desk: {HOTEL_INFO.frontDeskSchedule}</span>
            </div>
          </div>

          {/* Col 4: Regional & Social */}
          <div className="lg:col-span-2 space-y-2">
            <span className="uppercase tracking-widest text-stone-400 font-semibold block mb-3">
              Connect
            </span>
            <div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-stone-400" />
              </a>
            </div>
            <div>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3 h-3 text-stone-400" />
              </a>
            </div>
            <div>
              <a
                href="https://maps.google.com/?q=Saidu+Sharif+Swat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>Google Maps</span>
                <ArrowUpRight className="w-3 h-3 text-stone-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Baseline Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-center md:text-left text-[11px] sm:text-xs">
            <span>© {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved.</span>
            <span>·</span>
            <span>Saidu Sharif, Swat Valley</span>
          </div>

          {/* Creator Signature: Simple, clean & presentable */}
          <div className="text-[11px] text-stone-400 tracking-wider flex items-center gap-1.5">
            <span>Made by</span>
            <span className="text-[#FAF8F5] font-serif font-medium uppercase tracking-[0.18em] text-xs">Anees</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors cursor-pointer py-1 text-[11px] sm:text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
