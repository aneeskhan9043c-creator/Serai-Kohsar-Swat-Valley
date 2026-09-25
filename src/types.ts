export interface Room {
  id: string;
  name: string;
  typeNumber: string;
  tagline: string;
  description: string;
  longDescription: string;
  pricePerNight: number;
  priceFormatted: string;
  sizeM2: number;
  occupancy: string;
  bedType: string;
  bathroomType: string;
  viewType: string;
  image: string;
  secondaryImages: string[];
  amenities: string[];
  features: string[];
}

export type GalleryCategory =
  | 'ALL'
  | 'HOTEL'
  | 'ROOMS'
  | 'RECEPTION'
  | 'DINING'
  | 'BATHROOM'
  | 'VIEWS'
  | 'COMMON AREAS';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  aspect: 'landscape' | 'portrait' | 'square';
  caption: string;
}

export interface DestinationPlace {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image?: string;
  highlight: string;
}

export interface Testimonial {
  id: string;
  guestName: string;
  guestLocation: string;
  travelType: string;
  stayDate: string;
  comment: string;
  rating: number;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: string;
  roomsCount: number;
  selectedRoomId: string;
}
