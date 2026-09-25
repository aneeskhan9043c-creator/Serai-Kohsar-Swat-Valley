import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, ExternalLink, Route } from 'lucide-react';
import { HOTEL_INFO, NEARBY_PLACES } from '../data/hotelData';
import { Reveal } from './motion/Reveal';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Saidu+Sharif,+Swat,+Pakistan';
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Saidu+Sharif,+Swat,+Pakistan';

  return (
    <section id="location" className="py-16 md:py-28 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-10 md:mb-16">
          <div className="lg:col-span-6">
            <Reveal delay={0.05} y={16}>
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-stone-500 font-medium block mb-2">
                06 / The Valley Setting
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-[1.12]">
                Explore Swat from here.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.15} y={16}>
              <p className="text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed font-light mb-4">
                Serai Kohsar is situated on a tranquil pine hillside in the historic district of Saidu Sharif, Swat.
                Reached via the modern Swat Motorway (M-16), it offers secluded mountain stillness with direct access
                to ancient Gandharan archaeological sites, river walks, and the vibrant culture of Mingora.
              </p>
            </Reveal>

            <Reveal delay={0.25} y={12}>
              <div className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-stone-200/90 text-xs text-stone-700">
                <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900 block mb-0.5">Physical Location</span>
                  <p className="text-stone-600">{HOTEL_INFO.fullAddress}</p>
                  <span className="text-[11px] text-stone-400 mt-1 inline-block">
                    GPS: 34.7505° N, 72.3572° E · Elevation: {HOTEL_INFO.altitude}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Real Interactive Google Maps Integration & Nearby Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          {/* Real Google Maps Embed Container with Scroll Fade */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between bg-white rounded-2xl md:rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm"
          >
            {/* Top Bar for Map */}
            <div className="p-3.5 sm:p-4 border-b border-stone-200 bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-stone-700 font-medium">
                <Compass className="w-3.5 h-3.5 text-stone-500" />
                <span>Saidu Sharif, Swat · Interactive Google Map</span>
              </div>
              <span className="text-[11px] text-stone-500 bg-white px-2 py-0.5 rounded border border-stone-200">
                Live Satellite & Terrain
              </span>
            </div>

            {/* Official Interactive Google Maps Embed iframe */}
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] bg-stone-100">
              <iframe
                title="Serai Kohsar Location in Saidu Sharif, Swat Valley"
                src="https://maps.google.com/maps?q=Saidu+Sharif,+Swat,+Khyber+Pakhtunkhwa,+Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Bottom Actions for Map */}
            <div className="p-3.5 sm:p-5 bg-white border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-stone-600">
                <Navigation className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span className="text-[11px] sm:text-xs">Swat Motorway (M-16): ~2.5 hrs from Islamabad via Colonel Sher Khan Interchange</span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded font-medium transition-colors hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Route className="w-3.5 h-3.5 text-stone-600" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded font-medium transition-colors hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3 text-stone-300" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Verified Nearby Places in Swat with Staggered Scroll Reveal */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
            <Reveal delay={0.1} y={12}>
              <div className="flex items-center justify-between pb-1">
                <span className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold">
                  Explore Swat · Verified Distances
                </span>
                <span className="text-[10px] text-stone-400 font-mono">
                  From Property
                </span>
              </div>
            </Reveal>

            {NEARBY_PLACES.map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-3.5 sm:p-4 rounded-xl border border-stone-200/90 bg-white hover:border-stone-300 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h4 className="text-xs sm:text-sm font-medium text-stone-900">
                    {place.name}
                  </h4>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-semibold text-stone-800">{place.time}</span>
                    <span className="text-[11px] text-stone-400 ml-1">({place.dist})</span>
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-stone-500 font-light leading-relaxed">
                  {place.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
