import { Room, GalleryItem, DestinationPlace, Testimonial } from '../types';

export const HOTEL_INFO = {
  name: 'Serai Kohsar',
  locationKicker: 'SWAT, PAKISTAN',
  subLocation: 'Saidu Sharif & Mingora Foothills, Swat',
  tagline: 'A peaceful stay surrounded by the landscapes of Swat.',
  fullAddress: 'Upper Pine Ridge, Saidu Sharif, Swat Valley, Khyber Pakhtunkhwa 19200, Pakistan',
  phone: '+92 300 9043000',
  phoneDisplay: '+92 (300) 904-3000',
  whatsappNumber: '923009043000',
  email: 'reception@seraikohsar.pk',
  altitude: '980 meters (3,215 ft)',
  season: 'Year-round mountain retreat',
  checkInTime: 'From 2:00 PM',
  checkOutTime: 'By 12:00 PM',
  frontDeskSchedule: '24/7 Front Desk & Concierge',
};

// 4 Core Room Types (Categories, not individual physical rooms)
export const ROOMS: Room[] = [
  {
    id: 'deluxe-room',
    typeNumber: '01',
    name: 'Deluxe Room',
    tagline: 'Quiet comfort framed by native walnut and natural daylight',
    description: 'Designed for couples or solo travellers. Features handcrafted Swati walnut carpentry, crisp cotton bedding, quiet writing desk, and mountain airflow.',
    longDescription:
      'A serene sanctuary featuring bespoke Swati walnut cabinetry, crisp organic cotton bedding, and generous valley light. The en-suite bathroom includes a private walk-in rainfall shower with slate tiling, complimentary botanical toiletries, and soft waffle-weave towels.',
    pricePerNight: 26000,
    priceFormatted: 'PKR 26,000',
    sizeM2: 38,
    occupancy: '2 Guests',
    bedType: 'King Bed',
    bathroomType: 'Private Bathroom',
    viewType: 'Pine Garden & Ridge View',
    image: '/src/assets/images/room_deluxe_valley_1790277956757.jpg',
    secondaryImages: [
      '/src/assets/images/gallery_bathroom_stone_1790278029697.jpg',
      '/src/assets/images/intro_valley_window_room_1790277942519.jpg',
    ],
    amenities: [
      'Wi-Fi',
      'Air Conditioning',
      'Room Service',
      'Private Bathroom',
      'TV',
      'Wardrobe',
      'Fresh Valley Breakfast',
      'Hot Water 24/7',
    ],
    features: ['Approx. 38 m²', '2 Guests', 'King Bed', 'Private Bathroom', 'Garden & Pine View'],
  },
  {
    id: 'family-room',
    typeNumber: '02',
    name: 'Family Room',
    tagline: 'Generous multi-bed layout for families travelling together',
    description: 'Generously proportioned room with two beds, dedicated sitting corner, deep storage, and extra comfort for parents and children.',
    longDescription:
      'Engineered specifically for families exploring Swat together. This spacious room category provides two comfortable beds, cedar timber accents, ample wardrobe space for extended travel, and an en-suite private bathroom with continuous hot water.',
    pricePerNight: 44000,
    priceFormatted: 'PKR 44,000',
    sizeM2: 56,
    occupancy: '4 Guests',
    bedType: 'Two Beds',
    bathroomType: 'Private Bathroom',
    viewType: 'Pine Hillside & Terrace View',
    image: '/src/assets/images/room_family_suite_1790277969700.jpg',
    secondaryImages: [
      '/src/assets/images/room_deluxe_valley_1790277956757.jpg',
      '/src/assets/images/gallery_dining_breakfast_1790277997849.jpg',
    ],
    amenities: [
      'Wi-Fi',
      'Air Conditioning',
      'Room Service',
      'Private Bathroom',
      'TV',
      'Wardrobe',
      'Complimentary Family Breakfast',
      'Hot Water 24/7',
    ],
    features: ['Approx. 56 m²', '4 Guests', 'Two Beds', 'Private Bathroom', 'Spacious Seating'],
  },
  {
    id: 'valley-view-room',
    typeNumber: '03',
    name: 'Valley View Room',
    tagline: 'Panoramic views across the winding Swat river basin',
    description: 'An elevated private room with a private cedar timber balcony framing terraced orchards and morning river mist.',
    longDescription:
      'Positioned along the upper ridge of the property, this room type captures uninterrupted morning light rising over the Hindu Kush foothills. Step onto your private cedar balcony with freshly brewed valley tea, or unwind beside expansive glass.',
    pricePerNight: 34000,
    priceFormatted: 'PKR 34,000',
    sizeM2: 45,
    occupancy: '2 Guests',
    bedType: 'King Bed',
    bathroomType: 'Private Bathroom',
    viewType: 'Valley View',
    image: '/src/assets/images/room_valley_view_1790277982504.jpg',
    secondaryImages: [
      '/src/assets/images/gallery_bathroom_stone_1790278029697.jpg',
      '/src/assets/images/intro_valley_window_room_1790277942519.jpg',
    ],
    amenities: [
      'Wi-Fi',
      'Air Conditioning',
      'Room Service',
      'Private Bathroom',
      'TV',
      'Wardrobe',
      'Private Valley Balcony',
      'Verandah Breakfast Included',
    ],
    features: ['Approx. 45 m²', '2 Guests', 'King Bed', 'Valley View', 'Private Balcony'],
  },
  {
    id: 'executive-suite',
    typeNumber: '04',
    name: 'Executive Suite',
    tagline: 'Expansive master suite with private fireside living lounge',
    description: 'The premier accommodation category featuring a distinct salon living area, double-aspect valley windows, and luxurious stone bath.',
    longDescription:
      'Our most expansive room category. Features a distinct living salon with low linen armchairs, exposed cedar beams, a king-size master bed overlooking the hills, and a private stone-slate bathroom with freestanding soaking tub.',
    pricePerNight: 56000,
    priceFormatted: 'PKR 56,000',
    sizeM2: 72,
    occupancy: '2–4 Guests',
    bedType: 'King Bed',
    bathroomType: 'Private Bathroom',
    viewType: 'Panoramic Mountain & Valley',
    image: '/src/assets/images/intro_valley_window_room_1790277942519.jpg',
    secondaryImages: [
      '/src/assets/images/room_valley_view_1790277982504.jpg',
      '/src/assets/images/gallery_lobby_lounge_1790278015718.jpg',
    ],
    amenities: [
      'Wi-Fi',
      'Air Conditioning',
      'Room Service',
      'Private Bathroom',
      'TV',
      'Wardrobe',
      'Living Area with Sofa',
      'Soaking Bathtub',
    ],
    features: ['Approx. 72 m²', '2–4 Guests', 'King Bed', 'Living Area', 'Panoramic Views'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Valley Pavilion',
    category: 'HOTEL',
    image: '/src/assets/images/hero_swat_valley_exterior_1790277922616.jpg',
    aspect: 'landscape',
    caption: 'Low-slung stone and local timber architecture settling harmoniously into the terraced Swat hillside.',
  },
  {
    id: 'gal-2',
    title: 'Reception & Fireside Lounge',
    category: 'RECEPTION',
    image: '/src/assets/images/gallery_lobby_lounge_1790278015718.jpg',
    aspect: 'portrait',
    caption: 'Natural rough-hewn stone fireplace, walnut shelves, and comfortable linen seating where guests are welcomed.',
  },
  {
    id: 'gal-3',
    title: 'Executive Suite Salon',
    category: 'ROOMS',
    image: '/src/assets/images/intro_valley_window_room_1790277942519.jpg',
    aspect: 'landscape',
    caption: 'Double-height windows framing morning mist and deodar cedar slopes from the Executive Suite.',
  },
  {
    id: 'gal-4',
    title: 'Terrace Dining Table',
    category: 'DINING',
    image: '/src/assets/images/gallery_dining_breakfast_1790277997849.jpg',
    aspect: 'landscape',
    caption: 'Outdoor restaurant verandah laid with farm-fresh breakfast, local breads, and steaming Peshawari kahwa.',
  },
  {
    id: 'gal-5',
    title: 'Freestanding Stone Tub',
    category: 'BATHROOM',
    image: '/src/assets/images/gallery_bathroom_stone_1790278029697.jpg',
    aspect: 'portrait',
    caption: 'Minimalist charcoal stone soaking bathtub positioned beside pine trees with soft diffused natural daylight.',
  },
  {
    id: 'gal-6',
    title: 'Valley View Room Balcony',
    category: 'VIEWS',
    image: '/src/assets/images/room_valley_view_1790277982504.jpg',
    aspect: 'landscape',
    caption: 'Private cedar deck with sweeping outlooks across terraced fruit orchards and the Swat river basin below.',
  },
  {
    id: 'gal-7',
    title: 'Deluxe Room Walnut Joinery',
    category: 'ROOMS',
    image: '/src/assets/images/room_deluxe_valley_1790277956757.jpg',
    aspect: 'landscape',
    caption: 'Handcrafted local walnut furnishings and crisp cotton bedding designed for restorative mountain sleep.',
  },
  {
    id: 'gal-8',
    title: 'Main Lobby & Reading Hearth',
    category: 'COMMON AREAS',
    image: '/src/assets/images/gallery_lobby_lounge_1790278015718.jpg',
    aspect: 'landscape',
    caption: 'Quiet fireside retreat with curated books on Gandhara history, local ceramics, and afternoon tea service.',
  },
];

export const HOTEL_EXPERIENCE_ITEMS = [
  {
    title: 'The Fireside Lounge & Library',
    tagline: 'A quiet social heart centered around local stone and wood.',
    description:
      'As evening settles over the valley, guests gather around our natural stone hearth for hot cardamoms tea, regional literature, and calm conversations.',
    image: '/src/assets/images/gallery_lobby_lounge_1790278015718.jpg',
    aspect: 'tall',
  },
  {
    title: 'Verandah Dining with Mountain Light',
    tagline: 'Fresh mountain breakfast overlooking terraced orchards.',
    description:
      'Breakfast and evening dinners served open-air on the stone verandah. Enjoy fresh country eggs, local Swati honey, tandoor flatbread, and herbal infusions.',
    image: '/src/assets/images/gallery_dining_breakfast_1790277997849.jpg',
    aspect: 'wide',
  },
  {
    title: 'Private Balconies & Ridge Views',
    tagline: 'Direct connection to Swat’s pine breezes and morning mist.',
    description:
      'Step out to panoramic views of winding river trails and terraced hillsides. An unhurried place to read, sip green tea, and watch mountain cloudscapes.',
    image: '/src/assets/images/room_valley_view_1790277982504.jpg',
    aspect: 'wide',
  },
];

export const FACILITIES = [
  { name: 'High-Speed Wi-Fi', desc: 'Complimentary fiber internet across all rooms, suites, and common areas' },
  { name: 'Secure Private Parking', desc: 'Gated on-site vehicle parking with 24/7 security attendant' },
  { name: '24/7 Reception', desc: 'Front desk team ready to assist with arrivals, excursions, and travel queries' },
  { name: 'Room Service', desc: 'Freshly prepared meals and hot tea delivered directly to your room or balcony' },
  { name: 'On-Site Restaurant', desc: 'Traditional Swati culinary specialties along with continental dining' },
  { name: 'Artisanal Breakfast', desc: 'Fresh mountain breakfast served daily on the open valley verandah' },
  { name: 'Dual Heating & AC', desc: 'Individually regulated climate control for warm summer days and crisp alpine nights' },
  { name: 'Family Room Options', desc: 'Dedicated spacious multi-bed accommodation for families travelling together' },
  { name: 'Hot Water 24/7', desc: 'Continuous hot water supply backed by solar and dedicated boiler heating' },
  { name: 'Daily Housekeeping', desc: 'Twice-daily room freshening with premium cotton linens and botanical amenities' },
];

export const DINING_INFO = {
  heading: 'A TABLE WITH A VIEW.',
  subheading: 'Local & Continental culinary traditions prepared with fresh valley produce.',
  description:
    'Dining at Serai Kohsar is centered on simplicity, seasonal ingredients, and panoramic valley views. From morning tea under the pines to relaxed evening dinners by the stone hearth, every meal is prepared with care by our kitchen team.',
  image: '/src/assets/images/gallery_dining_breakfast_1790277997849.jpg',
  features: [
    {
      title: 'Artisanal Valley Breakfast',
      detail: 'Fresh farm eggs, stone-ground flatbreads, adjacent orchard walnuts, wild Swati honey, and freshly brewed Peshawari green tea.',
    },
    {
      title: 'Local & Continental Specialties',
      detail: 'Authentic regional dishes like Shinwari lamb, trout from Swat river streams, seasonal vegetables, alongside classic continental dishes.',
    },
    {
      title: 'The Restaurant Verandah',
      detail: 'Shaded open-air stone seating overlooking the terraced valley, ideal for slow lunches and sunset tea.',
    },
    {
      title: 'In-Room & Balcony Dining',
      detail: 'Quiet in-room breakfast or private evening tea service delivered directly to your personal suite balcony.',
    },
  ],
};

export const DESTINATION_PLACES: DestinationPlace[] = [
  {
    id: 'saidu-sharif',
    name: 'Saidu Sharif',
    tagline: 'Historic royal district and cultural administrative capital of Swat',
    description:
      'Home to the former royal palace of the Wali of Swat, historic stone buildings, tree-lined government roads, and peaceful foothills surrounding the hotel.',
    highlight: '5–8 minutes from hotel',
  },
  {
    id: 'mingora',
    name: 'Mingora',
    tagline: 'Vibrant commercial hub, bustling bazaars, and traditional craft markets',
    description:
      'The bustling urban center of the valley. Renowned for traditional Swati woolen shawls, wooden carvings, antique jewelry, emerald gemstones, and fresh street fruit.',
    highlight: '10 minutes from hotel',
  },
  {
    id: 'swat-museum',
    name: 'Swat Museum & Butkara Stupa',
    tagline: 'World-renowned Gandharan art, Buddhist archaeological treasures, and ancient relics',
    description:
      'A masterpiece museum housing an exceptional collection of 2,000-year-old Gandharan Buddhist stone sculptures, followed by the nearby Butkara I sacred Buddhist stupa site.',
    highlight: '7 minutes from hotel',
  },
  {
    id: 'fizagat',
    name: 'Fizagat Riverfront',
    tagline: 'Riverside promenade along the turquoise currents of the Swat River',
    description:
      'A wide, scenic park and promenade tracing the banks of the roaring river. Perfect for an afternoon stroll, admiring river rapids, and dining on fried river fish.',
    highlight: '15 minutes from hotel',
  },
  {
    id: 'marghazar',
    name: 'Marghazar White Palace',
    tagline: 'Historic 1940 summer palace built entirely of white Swati marble',
    description:
      'Built by the first ruler of Swat as a summer residence high in the cooler hills. Surrounded by natural springs, pine trees, and marble architecture.',
    highlight: '25 minutes from hotel',
  },
  {
    id: 'malam-jabba',
    name: 'Malam Jabba Mountain Slopes',
    tagline: 'Alpine pine forests, scenic chairlift, and panoramic high-altitude views',
    description:
      'Located in the Hindu Raj range at 2,800m altitude. Offers alpine mountain trails, panoramic snow views in winter, and chairlift rides over pine forests.',
    highlight: 'Day excursion from hotel',
  },
];

export const NEARBY_PLACES = [
  {
    name: 'Swat Museum & Butkara Stupa',
    time: '7 mins',
    dist: '3.2 km',
    note: 'Ancient Gandharan Buddhist collections, stone reliefs, and archaeological park.',
  },
  {
    name: 'Saidu Sharif Royal Palace & Bazaar',
    time: '5 mins',
    dist: '2.1 km',
    note: 'Historic administrative quarter, colonial-era royal stone architecture, and crafts.',
  },
  {
    name: 'Mingora Central Bazaar',
    time: '10 mins',
    dist: '4.8 km',
    note: 'Famous market for Swati emeralds, pashmina shawls, woodcraft, and mountain dry fruits.',
  },
  {
    name: 'Fizagat Riverside Park',
    time: '15 mins',
    dist: '7.5 km',
    note: 'River promenade on the banks of Swat river with clear turquoise rapids.',
  },
  {
    name: 'Marghazar White Marble Palace',
    time: '25 mins',
    dist: '13 km',
    note: '1940 summer residence of the Wali of Swat built entirely of pure white marble.',
  },
  {
    name: 'Malam Jabba Ski & Chairlift',
    time: '60 mins',
    dist: '42 km',
    note: 'High-altitude alpine pine forest, chairlift ride, and snow-capped mountain views.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    guestName: 'Taimoor & Ayla Raza',
    guestLocation: 'Lahore',
    travelType: 'Couple Retreat · Deluxe Room',
    stayDate: 'October 2025',
    comment:
      'Serai Kohsar is the first property in Swat that truly respects its natural setting. Waking up to the morning mist drifting across the balcony with a warm pot of kahwa was extraordinarily tranquil. The stone work and walnut furniture feel honest and quiet.',
    rating: 5,
  },
  {
    id: 'test-2',
    guestName: 'Dr. Tariq Mahmud & Family',
    guestLocation: 'Islamabad',
    travelType: 'Family Stay · Family Room',
    stayDate: 'September 2025',
    comment:
      'We stayed in the Family Room with our two children. The layout gave everyone their own space, while the living salon by the balcony became our favorite spot to read. The staff took meticulous care of every small dietary request.',
    rating: 5,
  },
  {
    id: 'test-3',
    guestName: 'Zainab Qureshi',
    guestLocation: 'Karachi',
    travelType: 'Solo Architectural Journey · Valley View Room',
    stayDate: 'August 2025',
    comment:
      'As an architect, I was deeply impressed by the restraint. No flashy pseudo-resort elements, just gorgeous local stone, generous proportions, and clean lines that let the mountain views take center stage. Highly recommended for a quiet recharge.',
    rating: 5,
  },
];
