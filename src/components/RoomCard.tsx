import React from 'react';
import { ArrowRight, Users, Bed, Square, Eye } from 'lucide-react';
import { Room } from '../types';

interface RoomCardProps {
  room: Room;
  index: number;
  onViewRoom: (room: Room) => void;
  onSelectBooking: (roomId: string) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({
  room,
  index,
  onViewRoom,
  onSelectBooking,
}) => {
  return (
    <article className="group bg-white rounded-2xl md:rounded-3xl border border-stone-200/90 overflow-hidden hover:border-stone-300 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Room Photography - 7 cols on lg, left or alternate */}
        <div className="lg:col-span-7 relative overflow-hidden bg-stone-100 min-h-[300px] sm:min-h-[360px] lg:min-h-[440px]">
          <img
            src={room.image}
            alt={room.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />

          {/* Quick View affordance overlay on hover */}
          <button
            onClick={() => onViewRoom(room)}
            className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF8F5]/90 hover:bg-[#FAF8F5] text-stone-900 text-xs tracking-wider rounded backdrop-blur-sm border border-stone-200 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-stone-600" />
            <span>View Gallery</span>
          </button>
        </div>

        {/* Room Content - 5 cols on lg */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
          <div>
            {/* Index & Category tag */}
            <div className="flex items-center justify-between text-xs text-stone-400 mb-3 tracking-widest uppercase">
              <span>0{index + 1} / Suite</span>
              <span>{room.sizeM2} m² · {room.viewType}</span>
            </div>

            {/* Room Name */}
            <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-2 font-normal">
              {room.name}
            </h3>

            {/* Tagline */}
            <p className="text-xs text-stone-500 italic font-serif mb-4">
              "{room.tagline}"
            </p>

            {/* Short Description */}
            <p className="text-sm text-stone-600 leading-relaxed font-light mb-6">
              {room.description}
            </p>

            {/* Key Specifications - Clean Unboxed Metadata */}
            <div className="grid grid-cols-2 gap-3 py-4 border-y border-stone-100 text-xs text-stone-700 mb-6">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-stone-400 shrink-0" />
                <span>{room.occupancy}</span>
              </div>
              <div className="flex items-center gap-2">
                <Bed className="w-4 h-4 text-stone-400 shrink-0" />
                <span>{room.bedType}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 text-stone-500">
                <Square className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>{room.bathroomType}</span>
              </div>
            </div>

            {/* Selected amenities */}
            <div className="text-xs text-stone-500 leading-normal mb-8">
              <span className="text-stone-400 uppercase tracking-wider block mb-1.5 text-[10px]">
                Included Amenities
              </span>
              <p className="line-clamp-2">
                {room.amenities.slice(0, 4).join(' · ')}
              </p>
            </div>
          </div>

          {/* Pricing & Action Buttons */}
          <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 block">
                From
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
                onClick={() => onSelectBooking(room.id)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium tracking-wider uppercase text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors cursor-pointer shadow-sm"
              >
                <span>Reserve</span>
                <ArrowRight className="w-3 h-3 text-stone-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
