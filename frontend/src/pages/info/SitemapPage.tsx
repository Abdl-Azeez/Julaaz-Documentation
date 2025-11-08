import { InfoPageTemplate } from './InfoPageTemplate'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/constants/routes'
import { motion } from 'framer-motion'
import { Home, Building2, Wrench, User, Briefcase } from 'lucide-react'

const sections = [
  {
    heading: 'Marketplace',
    icon: Home,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    links: [
      { label: 'Home', to: ROUTES.HOME },
      { label: 'Properties', to: ROUTES.PROPERTIES },
      { label: 'Services', to: ROUTES.SERVICES },
      { label: 'Buildings', to: ROUTES.BUILDINGS },
    ],
  },
  {
    heading: 'Tenant',
    icon: User,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    links: [
      { label: 'My Bookings', to: ROUTES.MY_BOOKINGS },
      { label: 'Payments', to: ROUTES.PAYMENTS },
      { label: 'Agreements', to: ROUTES.AGREEMENTS },
      { label: 'Favourites', to: ROUTES.FAVOURITES },
    ],
  },
  {
    heading: 'Landlord',
    icon: Briefcase,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    links: [
      { label: 'My Properties', to: ROUTES.LANDLORD_PROPERTIES },
      { label: 'Applications', to: ROUTES.LANDLORD_APPLICATIONS },
      { label: 'Earnings', to: ROUTES.LANDLORD_EARNINGS },
      { label: 'Create Listing', to: ROUTES.LANDLORD_PROPERTY_CREATE },
    ],
  },
  {
    heading: 'Activity',
    icon: Wrench,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    links: [
      { label: 'Messages', to: ROUTES.MESSAGING },
      { label: 'Notifications', to: ROUTES.NOTIFICATIONS },
      { label: 'Calendar', to: ROUTES.EVENTS },
      { label: 'My Services', to: ROUTES.MY_SERVICES },
    ],
  },
  {
    heading: 'Account',
    icon: Building2,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    links: [
      { label: 'Profile', to: ROUTES.PROFILE },
      { label: 'Settings', to: ROUTES.SETTINGS },
      { label: 'Contact Support', to: ROUTES.CONTACT },
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function SitemapPage() {
  return (
    <InfoPageTemplate
      title="Platform sitemap"
      subtitle="Quick overview of every primary destination in the Julaaz ecosystem."
      badge="Navigation"
    >
      <motion.div
        className="grid gap-6 lg:grid-cols-3"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {sections.map((section) => (
          <motion.div key={section.heading} variants={fadeInUp}>
            <div className="group rounded-2xl border border-border/60 bg-surface/95 shadow-lg hover:shadow-2xl transition-all duration-500 p-6 space-y-4 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl ${section.bgColor} group-hover:scale-110 transition-transform`}>
                  <section.icon className={`h-5 w-5 ${section.color}`} />
                </div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">{section.heading}</h2>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="hover:text-primary transition-colors font-semibold flex items-center gap-2 group/link"
                    >
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/40 group-hover/link:bg-primary transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </InfoPageTemplate>
  )
}
