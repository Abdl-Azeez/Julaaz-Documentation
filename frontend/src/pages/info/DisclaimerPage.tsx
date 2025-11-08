import { InfoPageTemplate } from './InfoPageTemplate'
import { Card } from '@/shared/ui/card'
import { motion } from 'framer-motion'
import { AlertTriangle, TrendingUp, FileCheck } from 'lucide-react'

const disclaimers = [
  {
    title: 'Content accuracy',
    text: 'Property descriptions, pricing, and availability are supplied by landlords. Julaaz validates every listing prior to publishing but final due diligence is encouraged.',
    icon: FileCheck,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    title: 'Financial estimates',
    text: 'Forecasts and revenue metrics are indicative. Actual returns depend on seasonal demand, pricing strategies, and policy compliance.',
    icon: TrendingUp,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    title: 'Third-party services',
    text: 'Artisans, facility managers, and concierge providers are independently vetted. Julaaz is not liable for service quality beyond our inspection standards.',
    icon: AlertTriangle,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
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

export function DisclaimerPage() {
  return (
    <InfoPageTemplate
      title="Disclaimer"
      subtitle="Transparency is core to Julaaz. Here's our stance on listings, estimates, and third-party data."
      badge="Notice"
    >
      <motion.div
        className="grid gap-4 lg:grid-cols-3"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {disclaimers.map((item, index) => (
          <motion.div key={item.title} variants={fadeInUp} custom={index}>
            <Card className="group p-6 bg-surface/95 border-border/60 shadow-lg hover:shadow-2xl transition-all duration-500 space-y-3 hover:-translate-y-1">
              <div className={`p-3 rounded-2xl ${item.bgColor} group-hover:scale-110 transition-transform w-fit`}>
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">{item.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(34,197,94,0.15),_transparent_60%)]" />
          <div className="relative space-y-3">
            <h2 className="text-base font-semibold text-foreground">Liability limitations</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Julaaz acts as a facilitator between landlords, tenants, and service providers. While we enforce verification standards and compliance checks, we are not a party to rental agreements or service contracts. Users are responsible for reviewing terms, conducting inspections, and ensuring legal compliance.
            </p>
            <div className="pt-2 text-xs text-muted-foreground">
              For disputes or legal queries, contact our compliance team via the <span className="font-semibold text-foreground">Contact Support</span> page.
            </div>
          </div>
        </Card>
      </motion.div>
    </InfoPageTemplate>
  )
}
