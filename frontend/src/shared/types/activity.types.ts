/**
 * Activity-related TypeScript types and interfaces
 */

// Message Types
export type MessageType = 'text' | 'image' | 'file' | 'audio' | 'video'
export type MessageStatus = 'sent' | 'delivered' | 'read' | 'failed'
export type ConversationType = 'direct' | 'group' | 'support'
export type ConversationStatus = 'active' | 'archived' | 'blocked'

export interface Message {
  id: string
  conversationId: string
  senderId: string
  recipientId: string
  type: MessageType
  content: string
  metadata?: {
    fileName?: string
    fileSize?: number
    mimeType?: string
    duration?: number
    thumbnailUrl?: string
  }
  status: MessageStatus
  createdAt: Date
  deliveredAt?: Date
  readAt?: Date
  replyTo?: string
  edited?: boolean
  editedAt?: Date
}

export interface Conversation {
  id: string
  participants: string[]
  type: ConversationType
  context?: {
    propertyId?: string
    bookingId?: string
    serviceBookingId?: string
    ticketId?: string
  }
  status: ConversationStatus
  createdAt: Date
  updatedAt: Date
  lastMessage?: Message
  unreadCount: Record<string, number>
  participantDetails?: {
    id: string
    name: string
    avatar?: string
    isOnline?: boolean
    lastSeen?: Date
  }[]
}

// Notification Types
export type NotificationType =
  | 'booking_created'
  | 'booking_confirmed'
  | 'viewing_scheduled'
  | 'payment_reminder'
  | 'payment_received'
  | 'service_booked'
  | 'service_completed'
  | 'message_received'
  | 'property_matched'
  | 'rent_due'
  | 'maintenance_request'
  | 'review_request'
  | 'document_approved'
  | 'document_rejected'

export type NotificationStatus = 'pending' | 'sent' | 'delivered' | 'read' | 'failed'

export interface Notification {
  id: string
  userId: string
  type: NotificationType
  title: string
  message: string
  data?: Record<string, any>
  channels: {
    inApp: boolean
    email: boolean
    sms: boolean
    push: boolean
    whatsapp: boolean
  }
  status: NotificationStatus
  createdAt: Date
  scheduledAt?: Date
  sentAt?: Date
  readAt?: Date
  actionUrl?: string
  icon?: string
}

// Event Types
export type EventType =
  | 'viewing'
  | 'booking'
  | 'service'
  | 'maintenance'
  | 'payment'
  | 'meeting'
  | 'inspection'

export type EventStatus = 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'rescheduled'

export interface Event {
  id: string
  userId: string
  type: EventType
  title: string
  description?: string
  status: EventStatus
  startDate: Date
  endDate: Date
  location?: string
  attendees?: {
    id: string
    name: string
    avatar?: string
    role: string
  }[]
  relatedTo?: {
    type: 'property' | 'booking' | 'service' | 'payment'
    id: string
    title?: string
  }
  reminder?: {
    enabled: boolean
    minutesBefore: number
  }
  createdAt: Date
  updatedAt: Date
}

// Favourite Types
export type FavouriteType = 'property' | 'service' | 'provider' | 'artisan'

export interface Favourite {
  id: string
  userId: string
  type: FavouriteType
  itemId: string
  item: {
    id: string
    title: string
    description?: string
    image?: string
    price?: number
    location?: string
    rating?: number
    [key: string]: any
  }
  createdAt: Date
}

