import { InfoPageTemplate } from './InfoPageTemplate'
import { Card } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import { Button } from '@/shared/ui/button'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { Send, Clock, MessageCircle, HelpCircle } from 'lucide-react'

const contactMethods = [
  {
    icon: Clock,
    label: 'Support hours',
    value: 'Monday – Saturday, 9am – 7pm WAT',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp concierge',
    value: '0800-JULAAZ (coming soon)',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: HelpCircle,
    label: 'Knowledge base',
    value: 'Landlord FAQ covers onboarding, inspections, and payouts',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Message sent! Our support squad will buzz you shortly.')
    }, 1200)
  }

  return (
    <InfoPageTemplate
      title="Contact Julaaz Support"
      subtitle="Whether you're onboarding 20 apartments or booking a shortlet for the weekend, our concierge team is within reach."
      badge="Support"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-6 lg:p-8 bg-surface/95 border-border/60 shadow-lg">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullName" className="block text-xs uppercase text-muted-foreground font-semibold mb-2">
                  Full name
                </label>
                <Input
                  id="fullName"
                  placeholder="Enter your name"
                  className="rounded-2xl bg-muted/40 border-border/60 h-12 text-foreground"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase text-muted-foreground font-semibold mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@email.com"
                  className="rounded-2xl bg-muted/40 border-border/60 h-12 text-foreground"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase text-muted-foreground font-semibold mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help..."
                  className="rounded-2xl bg-muted/40 border-border/60 min-h-[160px] text-foreground"
                  required
                />
              </div>
              <Button
                className="w-full rounded-2xl bg-primary text-primary-foreground shadow-lg hover:shadow-xl px-6 py-3 h-12 flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending…'
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="group p-5 bg-surface/95 border-border/60 shadow-lg hover:shadow-2xl transition-all duration-500 space-y-3 hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className={`p-3 rounded-2xl ${method.bgColor} group-hover:scale-110 transition-transform shrink-0`}>
                    <method.icon className={`h-5 w-5 ${method.color}`} />
                  </div>
                  <div className="space-y-1 flex-1">
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {method.label}
                    </h3>
                    <p className="text-sm text-foreground font-medium leading-relaxed">{method.value}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="relative overflow-hidden p-5 bg-gradient-to-br from-primary/10 via-background to-surface border border-border/60 shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.15),_transparent_60%)]" />
              <div className="relative space-y-2">
                <h3 className="text-xs font-semibold text-primary uppercase tracking-wider">Response time</h3>
                <p className="text-2xl font-bold text-foreground">&lt; 2 hours</p>
                <p className="text-xs text-muted-foreground">Average first response during business hours</p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </InfoPageTemplate>
  )
}
