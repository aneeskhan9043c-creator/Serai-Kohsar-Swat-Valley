import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

interface MobileStickyCTAProps {
  onOpenBooking: () => void;
  hide: boolean;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenBooking, hide }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 220);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {!hide && visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-stone-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-4 py-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">
                Serai Kohsar · Swat
              </span>
              <span className="text-xs font-serif text-stone-900 font-medium">
                Suites from <span className="font-semibold">PKR 28,500</span>/nt
              </span>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium tracking-wider uppercase text-white bg-stone-900 active:bg-stone-800 rounded transition-colors shadow-sm cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 text-stone-300" />
              <span>Book Stay</span>
              <ArrowRight className="w-3 h-3 text-stone-300" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
