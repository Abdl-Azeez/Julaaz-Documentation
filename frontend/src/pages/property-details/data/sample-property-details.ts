import type { PropertyDetail, MoveInItem, PropertyOwner } from '@/entities/property/model/types'
import { sampleProperties } from '@/pages/home/data/sample-properties'

const defaultAmenities = [
  '24/7 Power Supply',
  'Fibre Internet Ready',
  'Dedicated Parking',
  'Water Treatment',
  'CCTV Surveillance',
  'Smart Home Access'
]

const defaultHighlights = [
  'Open-plan living and dining area with floor-to-ceiling windows',
  'Chef-inspired kitchen with premium appliances',
  'Ensuite bedrooms with built-in wardrobes',
  'Private balcony overlooking the city skyline'
]

const buildMoveInBreakdown = (annualRent: number): MoveInItem[] => {
  const cautionFee = Math.round(annualRent * 0.1)
  const agencyFee = Math.round(annualRent * 0.1)
  const serviceCharge = 350000

  return [
    { label: 'Rent (12 months)', amount: annualRent },
    { label: 'Caution Fee', amount: cautionFee },
    { label: 'Service Charge', amount: serviceCharge },
    { label: 'Agency & Legal Fees', amount: agencyFee }
  ]
}

const ownersById: Record<string, PropertyOwner> = {
  '1': { name: 'Chidinma Eze', phone: '+234 817 000 2100', initials: 'CE', verified: true },
  '2': { name: 'Ibrahim Musa', phone: '+234 803 000 1920', initials: 'IM', verified: true },
  '3': { name: 'Ngozi Okafor', phone: '+234 809 115 7800', initials: 'NO', verified: true },
  '4': { name: 'Emeka Johnson', phone: '+234 701 889 3400', initials: 'EJ', verified: true },
  '5': { name: 'Aisha Kazeem', phone: '+234 805 660 9321', initials: 'AK', verified: true },
  '6': { name: 'Vincent Anthony', phone: '+234 701 234 5678', initials: 'VA', verified: true },
  '7': { name: 'Bola Fashola', phone: '+234 814 995 7701', initials: 'BF', verified: true },
  '8': { name: 'Halima Bello', phone: '+234 706 882 1134', initials: 'HB', verified: true },
  '9': { name: 'Tunde Balogun', phone: '+234 802 776 4455', initials: 'TB', verified: true },
  '10': { name: 'Sarah James', phone: '+234 815 222 9911', initials: 'SJ', verified: true }
}

const locationMeta: Record<
  string,
  Partial<Pick<
    PropertyDetail,
    | 'transactionType'
    | 'propertyType'
    | 'address'
    | 'city'
    | 'state'
    | 'country'
    | 'neighbourhood'
    | 'amenities'
    | 'isFurnished'
    | 'furnishingNotes'
    | 'highlights'
    | 'description'
    | 'moveInBreakdown'
    | 'locationDescription'
    | 'breadcrumb'
    | 'mapUrl'
  >>
> = {
  '1': {
    neighbourhood: 'Ikoyi',
    address: '21 Cameron Road, Ikoyi',
    city: 'Lagos',
    state: 'Lagos',
    description:
      'Experience elevated urban living at Lily Apartment, a bright and airy residence with spacious interiors and curated finishes designed for modern professionals.',
    locationDescription: 'Positioned within a quiet cul-de-sac in Ikoyi, offering quick access to business districts and fine dining.',
    breadcrumb: ['Home', 'Rent', 'Lily Apartment']
  },
  '2': {
    neighbourhood: 'Victoria Island',
    address: '48 Akin Adesola Street, Victoria Island',
    city: 'Lagos',
    state: 'Lagos',
    propertyType: 'Luxury Apartment',
    description:
      'Lagos Villa blends contemporary styling with premium comfort, featuring expansive living spaces and panoramic city views.',
    locationDescription: 'Situated in the heart of Victoria Island, minutes away from corporate towers, shopping, and nightlife hotspots.',
    breadcrumb: ['Home', 'Rent', 'Lagos Villa']
  },
  '3': {
    neighbourhood: 'Yaba',
    address: '5 Montgomery Road, Sabo-Yaba',
    city: 'Lagos',
    state: 'Lagos',
    propertyType: 'Urban Loft',
    description:
      'Union Home is a creative-inspired loft with flexible spaces, minimalist finishes, and smart home technology for effortless living.',
    locationDescription: 'Within walking distance of Yaba tech hubs, cafes, and the new light rail station.',
    breadcrumb: ['Home', 'Rent', 'Union Home']
  },
  '4': {
    neighbourhood: 'Banana Island',
    address: 'Plot 6 Banana Island Road',
    city: 'Lagos',
    state: 'Lagos',
    propertyType: 'Premium Duplex',
    description:
      'Viva Residency delivers resort-style living with multiple lounges, a private cinema room, and rooftop entertainment deck overlooking the lagoon.',
    locationDescription: 'Nestled inside Banana Island with 24-hour gated security and landscaped communal parks.',
    breadcrumb: ['Home', 'Rent', 'Viva Residency']
  },
  '5': {
    neighbourhood: 'Lekki Phase 1',
    address: '17 Admiralty Way, Lekki Phase 1',
    city: 'Lagos',
    state: 'Lagos',
    propertyType: 'Penthouse Apartment',
    description:
      'Eko Heights boasts double-volume ceilings, motorized window blinds, and a chef-ready kitchen ideal for entertaining.',
    locationDescription: 'Central Lekki location with excellent road networks, retail plazas, and waterfront leisure spots.',
    breadcrumb: ['Home', 'Rent', 'Eko Heights']
  },
  '6': {
    neighbourhood: 'Lekki',
    address: 'Victoria Crest Estate, Chevron Drive',
    city: 'Lagos',
    state: 'Lagos',
    propertyType: 'Smart Terrace Duplex',
    description:
      'Victoria Crest features a sunlit living area, bespoke cabinetry, and premium fittings perfect for young families seeking style and convenience.',
    locationDescription:
      'Just 5 minutes from Shoprite Victoria Island with seamless access to Lekki-Epe Expressway and business districts.',
    breadcrumb: ['Home', 'Rent', 'Victoria Crest'],
    furnishingNotes: 'Fully Furnished',
    amenities: [
      'Fully Furnished Interiors',
      'Integrated Smart Home Controls',
      '24/7 Estate Security',
      'Children’s Play Area',
      'Swimming Pool & Gym',
      'Dedicated Backup Power'
    ]
  },
  '7': {
    neighbourhood: 'Ogba',
    address: 'Ojodu Crescent, Ogba',
    city: 'Lagos',
    state: 'Lagos',
    propertyType: 'Family Apartment',
    description:
      'Ojodu Place offers cosy interiors with cross ventilation, ample storage, and an inviting community feel.',
    locationDescription: 'Located in a serene family-friendly neighbourhood close to schools, supermarkets, and parks.',
    breadcrumb: ['Home', 'Rent', 'Ojodu Place']
  },
  '8': {
    neighbourhood: 'Ajah',
    address: 'Gidi View Estate, Sangotedo',
    city: 'Lagos',
    state: 'Lagos',
    propertyType: 'Waterfront Apartment',
    description:
      'Gidi View Apartment delivers calming lagoon views, private outdoor lounge, and modern conveniences tailored for remote work.',
    locationDescription: 'Minutes from Novare Mall and positioned within a secure gated waterfront community.',
    breadcrumb: ['Home', 'Rent', 'Gidi View Apartment']
  },
  '9': {
    neighbourhood: 'Lekki',
    address: 'Admiralty Road, Lekki Phase 1',
    city: 'Lagos',
    state: 'Lagos',
    propertyType: 'Executive Condo',
    description:
      'Lekki Haven pairs luxury detailing with a functional layout, featuring marble flooring and expansive master suite.',
    locationDescription: 'Steps away from top restaurants, fitness centres, and business hubs in Lekki.',
    breadcrumb: ['Home', 'Rent', 'Lekki Haven']
  },
  '10': {
    neighbourhood: 'Anthony Village',
    address: 'Palmgrove Boulevard, Anthony Village',
    city: 'Lagos',
    state: 'Lagos',
    propertyType: 'Designer Apartment',
    description:
      'Palmgrove Court is a thoughtfully curated home with custom lighting, nature-inspired finishes, and flexible workspace corners.',
    locationDescription: 'Conveniently positioned near the Gbagada expressway with quick routes to Ikeja and Victoria Island.',
    breadcrumb: ['Home', 'Rent', 'Palmgrove Court']
  }
}

export const samplePropertyDetails: Record<string, PropertyDetail> = sampleProperties.reduce((acc, property) => {
  const meta = locationMeta[property.id] ?? {}
  const owner = ownersById[property.id] ?? {
    name: 'Julaaz Agent',
    phone: '+234 700 000 0000',
    initials: 'JA',
    verified: true
  }

  const transactionType = meta.transactionType ?? 'Rent'
  const propertyType = meta.propertyType ?? 'Modern Apartment'
  const neighbourhood = meta.neighbourhood ?? 'Lekki'

  acc[property.id] = {
    ...property,
    transactionType,
    propertyType,
    address: meta.address ?? 'Plot 12 Admiralty Way',
    city: meta.city ?? 'Lagos',
    state: meta.state ?? 'Lagos',
    country: meta.country ?? 'Nigeria',
    neighbourhood,
    description:
      meta.description ??
      `Discover ${property.name}, a thoughtfully designed ${propertyType.toLowerCase()} in ${neighbourhood} with ${property.bedrooms} bedrooms and contemporary finishes.`,
    highlights: meta.highlights ?? defaultHighlights,
    amenities: meta.amenities ?? defaultAmenities,
    isFurnished: meta.isFurnished ?? true,
    furnishingNotes: meta.furnishingNotes ?? 'Furnished',
    moveInBreakdown: meta.moveInBreakdown ?? buildMoveInBreakdown(property.price),
    owner,
    locationDescription:
      meta.locationDescription ?? `Located in ${neighbourhood}, ${meta.state ?? 'Lagos'}, close to essential services and lifestyle destinations.`,
    mapUrl: meta.mapUrl,
    breadcrumb: meta.breadcrumb ?? ['Home', transactionType, property.name]
  }

  return acc
}, {} as Record<string, PropertyDetail>)

