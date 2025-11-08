import { InfoPageTemplate } from './InfoPageTemplate'
import { Card } from '@/shared/ui/card'
import { motion } from 'framer-motion'
import { FileText, Scale, Shield, AlertCircle } from 'lucide-react'

const clauses = [
  {
    title: '1. Introduction',
    text: 'By using Julaaz you agree to these terms. We provide a marketplace that connects verified landlords, tenants, and service providers.',
    icon: FileText,
  },
  {
    title: '2. Listing obligations',
    text: 'Landlords must provide accurate property descriptions, pricing, and availability. All listings are subject to inspection before they appear publicly.',
    icon: Shield,
  },
  {
    title: '3. Payments and commissions',
    text: 'Julaaz processes rent, shortlet fees, and service charges. Commission invoices are generated automatically upon successful bookings.',
    icon: Scale,
  },
  {
    title: '4. Dispute resolution',
    text: 'We encourage parties to resolve issues via in-app messaging and support tickets. Formal disputes can be escalated to the Julaaz compliance team.',
    icon: AlertCircle,
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

export function TermsPage() {
  return (
    <InfoPageTemplate
      title="Terms & Conditions"
      subtitle="The fine print that keeps rentals transparent and secure for everyone on the platform."
      badge="Legal"
    >
      <motion.div
        className="grid gap-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {clauses.map((clause, index) => (
          <motion.div key={clause.title} variants={fadeInUp} custom={index}>
            <Card className="group p-6 bg-surface/95 border-border/60 shadow-lg hover:shadow-2xl transition-all duration-500 space-y-3 hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                  <clause.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">{clause.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{clause.text}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Card className="relative overflow-hidden p-6 lg:p-8 bg-gradient-to-br from-primary/10 via-background to-surface border border-border/60 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.15),_transparent_60%)]" />
          <div className="relative space-y-3">
            <h2 className="text-base font-semibold text-foreground">Updates & amendments</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We reserve the right to update these terms as regulations evolve. Major changes will be communicated via email and in-app notifications. Continued use of Julaaz constitutes acceptance of updated terms.
            </p>
            <div className="pt-2 text-xs text-muted-foreground">
              Last updated: <span className="font-semibold text-foreground">November 2025</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </InfoPageTemplate>
  )
}
