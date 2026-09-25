import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ReceptionSection } from './components/ReceptionSection';
import { HotelExperience } from './components/HotelExperience';
import { RoomsSection } from './components/RoomsSection';
import { DiningSection } from './components/DiningSection';
import { Facilities } from './components/Facilities';
import { GalleryGrid } from './components/GalleryGrid';
import { DestinationSection } from './components/DestinationSection';
import { LocationSection } from './components/LocationSection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RoomDetailModal } from './components/RoomDetailModal';
import { AvailabilityModal } from './components/AvailabilityModal';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { Room } from './types';

export default function App() {
  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState<Room | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preSelectedRoomId, setPreSelectedRoomId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (roomId?: string) => {
    setPreSelectedRoomId(roomId);
    setIsBookingOpen(true);
  };

  const handleViewRoom = (room: Room) => {
    setSelectedRoomForDetail(room);
  };

  const isAnyModalActive = Boolean(selectedRoomForDetail || isBookingOpen);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-stone-200 selection:text-stone-900 font-sans overflow-x-hidden relative">
      {/* 1. Header (Sticky Top Bar with Refined Mobile Overlay) */}
      <Header
        onOpenBooking={handleOpenBooking}
        isAnyModalOpen={isAnyModalActive}
      />

      <main className="overflow-x-hidden">
        {/* 2. Hotel Presentation / Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Hotel Arrival / Reception Section */}
        <ReceptionSection onContactReception={() => handleOpenBooking()} />

        {/* 4. Hotel Experience Section (Asymmetric Editorial) */}
        <HotelExperience />

        {/* 5. Room Types Section ("STAY YOUR WAY." with 4 Categories & Mobile Carousel) */}
        <RoomsSection
          onViewRoom={handleViewRoom}
          onOpenBooking={(roomId) => handleOpenBooking(roomId)}
        />

        {/* 6. On-Property Dining ("A TABLE WITH A VIEW.") */}
        <DiningSection />

        {/* 7. Hotel Facilities (Refined Minimal Style) */}
        <Facilities />

        {/* 8. Editorial Gallery (8 Categories: HOTEL, ROOMS, RECEPTION, DINING, BATHROOM, VIEWS, COMMON AREAS) */}
        <GalleryGrid />

        {/* 9. Destination Experience ("DISCOVER SWAT.") */}
        <DestinationSection />

        {/* 10. Real Google Maps Integration & Travel Context */}
        <LocationSection />

        {/* 11. Guest Reflections */}
        <Testimonials />

        {/* 12. Clean Contact / Reception Section */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 13. Footer with Made by ANEES preserved */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* 14. Subtle Mobile-Only Sticky Booking CTA Bar */}
      <MobileStickyCTA
        onOpenBooking={() => handleOpenBooking()}
        hide={isAnyModalActive}
      />

      {/* Room Detail Modal (Exact required specs & amenities) */}
      <RoomDetailModal
        room={selectedRoomForDetail}
        onClose={() => setSelectedRoomForDetail(null)}
        onOpenBooking={(roomId) => handleOpenBooking(roomId)}
      />

      {/* Booking / Availability Demo Modal (Exact Front-End Demo Inquiry Flow) */}
      <AvailabilityModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedRoomId={preSelectedRoomId}
      />
    </div>
  );
}
