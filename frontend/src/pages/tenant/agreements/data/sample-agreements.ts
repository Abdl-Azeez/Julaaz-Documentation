import type { Agreement } from '@/shared/types/tenant.types'
import home6 from '@/assets/images/home6.jpg'
import home9 from '@/assets/images/home9.jpg'

export const sampleAgreements: Agreement[] = [
  {
    id: 'agr-001',
    propertyId: '6',
    propertyName: 'Victoria Crest',
    propertyImage: home6,
    propertyAddress: '15 Adeola Odeku Street, Victoria Island, Lagos',
    landlordName: 'Vincent Anthony',
    landlordId: 'landlord-001',
    tenantId: 'tenant-001',
    type: 'rental',
    status: 'pending',
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-12-31'),
    monthlyRent: 450000,
    securityDeposit: 900000,
    terms: [
      'The tenant agrees to pay rent on or before the 1st day of each month',
      'The security deposit will be refunded within 30 days of lease termination',
      'No subletting without written consent from the landlord',
      'The tenant is responsible for minor repairs and maintenance',
      'Property must be kept clean and in good condition',
      'No structural modifications without landlord approval',
      'Utilities (electricity, water) are the responsibility of the tenant',
      'Landlord has the right to inspect the property with 48 hours notice',
      '30 days written notice required for lease termination',
      'Pets are not allowed without prior written consent'
    ],
    documentUrl: '/documents/rental-agreement-001.pdf',
    createdAt: new Date('2024-12-01'),
    updatedAt: new Date('2024-12-01'),
  },
  {
    id: 'agr-002',
    propertyId: '9',
    propertyName: 'Lekki Haven',
    propertyImage: home9,
    propertyAddress: '42 Admiralty Way, Lekki Phase 1, Lagos',
    landlordName: 'Sarah Okafor',
    landlordId: 'landlord-002',
    tenantId: 'tenant-001',
    type: 'rental',
    status: 'signed',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-12-31'),
    monthlyRent: 380000,
    securityDeposit: 760000,
    terms: [
      'The tenant agrees to pay rent on or before the 1st day of each month',
      'The security deposit will be refunded within 30 days of lease termination',
      'No subletting without written consent from the landlord',
      'The tenant is responsible for minor repairs and maintenance',
      'Property must be kept clean and in good condition',
      'No structural modifications without landlord approval',
      'Utilities (electricity, water) are the responsibility of the tenant',
      'Landlord has the right to inspect the property with 48 hours notice'
    ],
    documentUrl: '/documents/rental-agreement-002.pdf',
    signedAt: new Date('2023-12-15'),
    signatureUrl: '/signatures/tenant-001-agr-002.png',
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2023-12-15'),
  },
]

