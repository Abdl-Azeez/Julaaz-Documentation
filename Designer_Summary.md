JulaazNG UI Design Summary

Design Style: Modern, elegant, sleek, and smooth. Prioritize a clean aesthetic with intuitive navigation, trust-building elements, and a mobile-first approach.

Key Screens & Features
1. Onboarding & Authentication
* Screens:
    * Signup (email/phone/social login)
    * OTP verification
    * Profile setup (user type: tenant/landlord/service provider)
* Design Notes:
    * Minimalist forms with clear CTAs.
    * Verification badges for trusted users.

2. Home/Dashboard
* Screens:
    * Personalized feed (property recommendations, services, alerts).
    * Search bar with filters (location, price, amenities).
    * Quick-access buttons (short-lets, cleaning, moving).
* Design Notes:
    * Hero section with trending properties.
    * Card-based listings with high-quality images.

3. Property Listings & Details
* Screens:
    * Property cards (grid/list views).
    * Detailed property page (photos, virtual tours, amenities, pricing).
    * Map integration (OpenStreetMap/Google Maps).
* Design Notes:
    * Image carousel with zoom.
    * Clear pricing breakdown and "Book Viewing" CTA.

4. Booking Flow
* Screens:
    * Viewing scheduling (calendar integration).
    * Application form (document upload).
    * E-signature for agreements.
    * Payment processing (Paystack/Flutterwave).
* Design Notes:
    * Progress tracker for multi-step flows.
    * Confirmation screens with shareable receipts.

5. Service Marketplace
* Screens:
    * Service categories (cleaning, moving).
    * Provider profiles (ratings, pricing, availability).
    * Booking form (date/time, special requests).
* Design Notes:
    * Service cards with before/after examples.
    * Real-time booking status tracking.

6. Messaging & Notifications
* Screens:
    * In-app chat (text, images, documents).
    * Notification center (booking updates, payments).
* Design Notes:
    * WhatsApp-like chat UI with read receipts.
    * Non-intrusive notification badges.

7. User Profiles
* Screens:
    * Personal profile (verification status, documents).
    * Tenant/Landlord/Provider dashboards (listings, bookings, earnings).
* Design Notes:
    * Progress bars for verification steps.
    * Stats widgets for landlords/service providers.

8. Admin Dashboard (Separate UI)
* Screens:
    * Moderation queues (users, properties).
    * Revenue analytics (charts, export options).
    * Dispute resolution tools.
* Design Notes:
    * Data-heavy but clean tables/filters.
    * Role-based access control (RBAC) visibility.

Design System Requirements
* Themes: 6 themes (Light/Dark + Ocean/Sunset variants).
* Components: Reusable Tailwind CSS/shacdn-ui components.
* Accessibility: WCAG 2.1 AA compliant (contrast, screen readers).
* Micro-interactions: Smooth transitions for buttons, loading states.
