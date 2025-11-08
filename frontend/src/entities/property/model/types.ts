export interface Property {
  id: string
  name: string
  image: string
  images?: string[] // Multiple images for slider
  area: number // in sqft
  bedrooms: number
  bathrooms: number
  parking: number
  price: number // in Naira
  location?: string
  ownerId?: string
}

export interface PropertyCardProps {
  property: Property
  onRequestViewing?: (propertyId: string) => void
  onShare?: (propertyId: string) => void
  onSelect?: (propertyId: string) => void
  layout?: 'grid' | 'row'
}

export interface PropertyOwner {
  name: string
  phone: string
  email?: string
  avatar?: string
  initials?: string
  verified?: boolean
}

export interface MoveInItem {
  label: string
  amount: number
  due?: string
}

export interface PropertyDetail extends Property {
  transactionType: 'Rent' | 'Buy'
  propertyType: string
  address: string
  city: string
  state: string
  country: string
  neighbourhood?: string
  description: string
  highlights: string[]
  amenities: string[]
  isFurnished: boolean
  furnishingNotes?: string
  moveInBreakdown: MoveInItem[]
  owner: PropertyOwner
  locationDescription: string
  mapUrl?: string
  breadcrumb: string[]
}

