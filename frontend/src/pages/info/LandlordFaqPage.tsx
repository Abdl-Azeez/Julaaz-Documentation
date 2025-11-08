import { InfoPageTemplate } from './InfoPageTemplate'
import { Card } from '@/shared/ui/card'
import { motion } from 'framer-motion'
import { HelpCircle, CheckCircle2 } from 'lucide-react'

const faqs = [
  {
    question: 'How long does approval take?',
    answer:
      'Once you publish a listing we schedule inspection within 48 hours. After verification the listing goes live instantly.',
  },
  {
    question: 'Can I accept both shortlet and long-term tenants?',
    answer:
      'Yes. Enable shortlet readiness during onboarding. You can keep earning from short stays while waiting for a long-term lease.',
  },
  {
    question: 'Who manages payments and reminders?',
    answer:
      'Julaaz handles invoicing, reminders, and payout reporting. You can trigger reminders manually from the Earnings dashboard.',
  },
  {
    question: 'Do I pay to list on Julaaz?',
    answer:
      'Listing is free. We earn a small commission on successful bookings and optional concierge services.',
  },
  {
    question: 'What happens if a tenant cancels?',
    answer:
      'Cancellation policies are set during listing creation. Julaaz enforces them automatically and processes refunds or penalties per your terms.',
  },
  {
    question: 'Can I manage multiple properties?',
    answer:
      'Absolutely. Your dashboard supports unlimited listings with individual analytics, occupancy tracking, and application pipelines.',
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
      staggerChildren: 0.08,
    },
  },
}

export function LandlordFaqPage() {
  return (
    <InfoPageTemplate
      title="Landlord Frequently Asked Questions"
      subtitle="Everything you need to know about onboarding, inspections, payouts, and tenant experiences."
      badge="Support"
    >
      <motion.div
        className="grid gap-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {faqs.map((faq, index) => (
          <motion.div key={faq.question} variants={fadeInUp} custom={index}>
            <Card className="group p-6 bg-surface/95 border-border/60 shadow-lg hover:shadow-2xl transition-all duration-500 space-y-3 hover:-translate-y-0.5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                  <HelpCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  <h2 className="text-sm lg:text-base font-semibold text-foreground">{faq.question}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(34,197,94,0.15),_transparent_60%)]" />
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle2 className="h-6 w-6" />
                <h2 className="text-lg font-semibold text-foreground">Still have questions?</h2>
              </div>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Our concierge team is available Monday–Saturday, 9am–7pm WAT. Reach out via the Contact page or your landlord dashboard.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-background/80 px-6 py-4 text-sm text-primary font-semibold shadow-lg whitespace-nowrap">
              Response time: &lt; 2 hours
            </div>
          </div>
        </Card>
      </motion.div>
    </InfoPageTemplate>
  )
}
