import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare, MapPin } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeaderProps {
  onOpenBooking: (roomId?: string) => void;
  isAnyModalOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, isAnyModalOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!isAnyModalOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen, isAnyModalOpen]);

  const navLinks = [
    { label: 'Stay', href: '#reception', number: '01' },
    { label: 'Rooms', href: '#rooms', number: '02' },
    { label: 'Experience', href: '#experience', number: '03' },
    { label: 'Gallery', href: '#gallery', number: '04' },
    { label: 'Location', href: '#location', number: '05' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] py-3 sm:py-3.5'
            : 'bg-[#FAF8F5]/85 backdrop-blur-sm border-b border-stone-200/40 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex items-center justify-between">
          {/* Hotel wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl md:text-2xl font-serif tracking-[0.16em] uppercase text-stone-900 hover:text-stone-700 transition-colors"
          >
            {HOTEL_INFO.name}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs tracking-[0.14em] uppercase text-stone-600 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative py-1 hover:text-stone-950 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-stone-900 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 text-xs font-medium tracking-[0.12em] uppercase text-stone-950 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded transition-colors duration-200 whitespace-nowrap cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Book Your Stay</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-600" />
            </button>

            {/* Mobile Touch-friendly Hamburger trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-11 h-11 -mr-2 text-stone-900 hover:text-stone-950 active:bg-stone-200/50 rounded-lg transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Refined Full-Screen Mobile Drawer Overlay with Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col justify-between"
          >
            {/* Mobile Overlay Top Bar */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-stone-200">
              <span className="text-lg font-serif tracking-[0.16em] uppercase text-stone-900">
                {HOTEL_INFO.name}
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-11 h-11 -mr-2 text-stone-800 hover:text-stone-950 active:bg-stone-200/60 rounded-full transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links with Editorial Numbers */}
            <div className="px-6 py-4 overflow-y-auto flex-1 flex flex-col justify-center">
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-medium mb-3 block">
                Swat Valley Retreat · Directory
              </span>
              <nav className="flex flex-col space-y-2.5">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.25 }}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-baseline justify-between py-2 text-xl font-serif text-stone-900 active:text-stone-600 border-b border-stone-200/60 transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-stone-400 font-sans tracking-widest">
                      {link.number}
                    </span>
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions & Contacts */}
            <div className="p-6 border-t border-stone-200 bg-stone-50/70 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-4 text-center text-xs font-medium tracking-[0.16em] uppercase text-white bg-stone-900 active:bg-stone-800 rounded transition-colors shadow-sm cursor-pointer mb-3 hover:scale-[1.01] active:scale-[0.99]"
              >
                Book Your Stay
              </button>

              <div className="grid grid-cols-2 gap-3 text-xs text-stone-600 pt-1">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white border border-stone-200 rounded text-stone-800 active:bg-stone-100"
                >
                  <Phone className="w-3.5 h-3.5 text-stone-500" />
                  <span>Call Desk</span>
                </a>
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white border border-stone-200 rounded text-stone-800 active:bg-stone-100"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="text-center text-[11px] text-stone-400 mt-3 flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3 text-stone-400" />
                <span>Saidu Sharif, Swat Valley, Pakistan</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
