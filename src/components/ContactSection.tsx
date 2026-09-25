import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { Reveal } from './motion/Reveal';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Assalam o Alaikum, I would like to contact the reception at ${HOTEL_INFO.name}, Swat with a question about room inquiries.`
  )}`;

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-stone-200/60 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <Reveal delay={0.05} y={16}>
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-stone-500 font-medium block mb-2">
                Reception & Inquiries
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-tight mb-4">
                Connect with our front desk.
              </h2>
            </Reveal>

            <Reveal delay={0.15} y={16}>
              <p className="text-stone-600 text-xs sm:text-sm md:text-base font-light leading-relaxed mb-6">
                Whether you are arranging a family holiday, weekend mountain retreat, or driving up via the Swat Motorway, our concierge and reception desk are at your service.
              </p>
            </Reveal>

            {/* CTAs: Primary CONTACT RECEPTION + Secondary BOOK YOUR STAY */}
            <Reveal delay={0.25} y={12}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium tracking-[0.14em] uppercase text-white bg-stone-900 hover:bg-stone-800 active:bg-stone-950 rounded transition-colors shadow-sm cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-stone-300" />
                  <span>CONTACT RECEPTION</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium tracking-[0.14em] uppercase text-stone-900 bg-stone-100 hover:bg-stone-200 active:bg-stone-300 border border-stone-300 rounded transition-colors cursor-pointer"
                >
                  <span>BOOK YOUR STAY</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-600" />
                </button>
              </div>
            </Reveal>
          </div>

          {/* Contact Details Card */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl md:rounded-3xl border border-stone-200/90 bg-[#FAF8F5] space-y-4 text-xs">
              <div className="border-b border-stone-200/80 pb-4">
                <span className="font-serif text-xl sm:text-2xl text-stone-900 block font-normal">
                  {HOTEL_INFO.name}
                </span>
                <span className="text-stone-500 mt-1 block">
                  Swat Valley, Khyber Pakhtunkhwa, Pakistan
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block">Phone Desk</span>
                    <a href={`tel:${HOTEL_INFO.phone}`} className="font-medium text-stone-900 hover:underline">
                      {HOTEL_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block">WhatsApp</span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-stone-900 hover:underline inline-flex items-center gap-1"
                    >
                      <span>+92 300 9043000</span>
                      <ExternalLink className="w-3 h-3 text-stone-400" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block">Email Inquiries</span>
                    <a href={`mailto:${HOTEL_INFO.email}`} className="font-medium text-stone-900 hover:underline">
                      {HOTEL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Physical Location */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block">Google Maps</span>
                    <a
                      href="https://maps.google.com/?q=Saidu+Sharif+Swat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-stone-900 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Saidu Sharif, Swat</span>
                      <ExternalLink className="w-3 h-3 text-stone-400" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200/80 text-[11px] text-stone-400 flex items-center justify-between">
                <span>Check-in: {HOTEL_INFO.checkInTime}</span>
                <span>Check-out: {HOTEL_INFO.checkOutTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
