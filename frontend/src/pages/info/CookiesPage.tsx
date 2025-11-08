import { InfoPageTemplate } from './InfoPageTemplate'
import { Card } from '@/shared/ui/card'
import { motion } from 'framer-motion'
import { Cookie, Settings, Eye, Lock } from 'lucide-react'

const cookieTypes = [
  {
    title: 'Essential cookies',
    description: 'Authentication, session management, and security. These cannot be disabled.',
    icon: Lock,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    title: 'Analytics cookies',
    description: 'Anonymous usage data to improve performance and user experience.',
    icon: Eye,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    title: 'Preference cookies',
    description: 'Theme selection, language, and saved filters for personalized browsing.',
    icon: Settings,
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
      staggerChildren: 0.1,
    },
  },
}

export function CookiesPage() {
  return (
    <InfoPageTemplate
      title="Cookies & Tracking"
      subtitle="We use lightweight analytics and session cookies to personalise listings without compromising privacy."
      badge="Privacy"
    >
      <motion.div
        className="grid gap-4 lg:grid-cols-3"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {cookieTypes.map((type, index) => (
          <motion.div key={type.title} variants={fadeInUp} custom={index}>
            <Card className="group p-6 bg-surface/95 border-border/60 shadow-lg hover:shadow-2xl transition-all duration-500 space-y-3 hover:-translate-y-1">
              <div className={`p-3 rounded-2xl ${type.bgColor} group-hover:scale-110 transition-transform w-fit`}>
                <type.icon className={`h-6 w-6 ${type.color}`} />
              </div>
              <h2 className="text-sm font-semibold text-foreground">{type.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="p-6 lg:p-8 bg-surface/95 border-border/60 shadow-lg space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <div className="p-3 rounded-2xl bg-primary/10">
              <Cookie className="h-6 w-6" />
            </div>
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">What we store</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We store essential cookies for authentication, localisation, and analytics. No marketing pixels or third-party
            retargeting scripts are loaded without consent.
          </p>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="relative overflow-hidden p-6 lg:p-8 bg-gradient-to-br from-primary/10 via-background to-surface border border-border/60 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.15),_transparent_60%)]" />
          <div className="relative space-y-3">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Managing preferences</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You can toggle optional cookies in Settings ▶ Privacy. Clearing cookies may sign you out or reset saved
              filters, but you can restore preferences after logging back in.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              {['GDPR compliant', 'No third-party trackers', 'Transparent data use'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </InfoPageTemplate>
  )
}
