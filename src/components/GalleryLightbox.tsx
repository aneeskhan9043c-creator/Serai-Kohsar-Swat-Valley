import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onSelectIndex,
}) => {
  const currentItem = currentIndex !== null ? items[currentIndex] : null;

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onSelectIndex((currentIndex + 1) % items.length);
      }
      if (e.key === 'ArrowLeft') {
        onSelectIndex((currentIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, items.length, onClose, onSelectIndex]);

  if (!currentItem || currentIndex === null) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex + 1) % items.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 backdrop-blur-md p-4 md:p-8"
      onClick={onClose}
    >
      {/* Top bar controls */}
      <div className="absolute top-4 inset-x-4 md:inset-x-8 flex items-center justify-between z-20 text-stone-300">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-stone-400">
            {currentItem.category}
          </span>
          <span className="text-stone-600">/</span>
          <span className="text-xs tracking-wider text-stone-300">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 text-stone-400 hover:text-white bg-stone-900/60 hover:bg-stone-800 rounded-full border border-stone-700/50 transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main image container */}
      <div
        className="relative max-w-6xl max-h-[82vh] flex items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.image}
          alt={currentItem.title}
          referrerPolicy="no-referrer"
          className="max-h-[75vh] max-w-full w-auto object-contain rounded-lg md:rounded-xl shadow-2xl"
        />

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 p-3 text-white bg-stone-900/80 hover:bg-stone-800 rounded-full border border-stone-700/60 shadow-lg transition-transform hover:scale-110 cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 p-3 text-white bg-stone-900/80 hover:bg-stone-800 rounded-full border border-stone-700/60 shadow-lg transition-transform hover:scale-110 cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom caption bar */}
      <div
        className="absolute bottom-4 inset-x-4 md:inset-x-8 text-center pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="inline-block bg-stone-900/85 backdrop-blur-sm border border-stone-800 px-6 py-3 rounded-xl max-w-xl text-stone-200">
          <h4 className="font-serif text-base md:text-lg text-white mb-0.5">
            {currentItem.title}
          </h4>
          <p className="text-xs text-stone-300 font-light leading-relaxed">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
