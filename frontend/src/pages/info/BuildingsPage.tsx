import { InfoPageTemplate } from './InfoPageTemplate'
import { Card } from '@/shared/ui/card'
import home1 from '@/assets/images/home1.jpg'
import home2 from '@/assets/images/home2.jpg'
import home3 from '@/assets/images/home3.jpg'
import { motion } from 'framer-motion'
import { MapPin, Star, Wifi } from 'lucide-react'

const featured = [
  {
    name: 'Viva Residency',
    description: 'Smart highrise with concierge, rooftop pool, and zero downtime power. Perfect for corporate shortlets.',
    image: home1,
    location: 'Victoria Island, Lagos',
    rating: 4.9,
  },
  {
    name: 'Palmgrove Court',
    description: 'Premium waterfront penthouse with curated interiors and housekeeping options.',
    image: home2,
    location: 'Lekki Phase 1, Lagos',
    rating: 4.8,
  },
  {
    name: 'Lekki Haven',
    description: 'Gated townhouses for families, with solar backup and workspace-ready rooms.',
    image: home3,
    location: 'Lekki, Lagos',
    rating: 4.7,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export function BuildingsPage() {
  return (
    <InfoPageTemplate
      title="Featured buildings on Julaaz"
      subtitle="A rotating spotlight on spaces that blend design, safety, and wow-factor amenities across Nigeria."
      badge="Curated selection"
    >
      <motion.div
        className="grid gap-6 lg:grid-cols-3"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {featured.map((building, index) => (
          <motion.div key={building.name} variants={fadeInUp} custom={index}>
            <Card className="group overflow-hidden border-border/60 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={building.image}
                  alt={building.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border/60 flex items-center gap-1.5 shadow-lg">
                  <Star className="h-3.5 w-3.5 text-primary fill-primary" />
                  <span className="text-xs font-semibold text-foreground">{building.rating}</span>
                </div>
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm border border-primary/20 flex items-center gap-1.5 shadow-lg">
                  <Wifi className="h-3.5 w-3.5 text-primary-foreground" />
                  <span className="text-xs font-semibold text-primary-foreground">Shortlet ready</span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="space-y-1">
                  <h2 className="text-base font-semibold text-foreground">{building.name}</h2>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="text-xs">{building.location}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{building.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="relative overflow-hidden p-6 lg:p-8 bg-gradient-to-br from-primary/10 via-background to-surface border border-border/60 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.15),_transparent_60%)]" />
          <div className="relative space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Want your building featured?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
              We spotlight properties that excel in design, amenities, and tenant satisfaction. Maintain a 4.7+ rating, offer shortlet flexibility, and keep your listing inspection-ready to qualify for monthly features.
            </p>
          </div>
        </Card>
      </motion.div>
    </InfoPageTemplate>
  )
}
